const SerialPort = require("serialport");

let pos = require("./pos");

const serialPort = "/dev/ttyACM0";

let port = new SerialPort(serialPort, { autoOpen: false }, () => {
  console.log(`Serial Port: ${serialPort}`);
});

exports.serialInit = () => {
  return new Promise((resolve, reject) => {
    port.open((err) => {
      if (err) {
        reject(err);
      } else {
        sendCommand("cu,2,0");
        console.log(`Serial Port Opened!`);
        resolve();
      }
    });
  });
};

var sendCommand = exports.sendCommand = function sendCommand(command) {
  port.write(command + "\r", "ascii", function (err) {
    if (err) console.log(err);

    port.drain(function () {
      port.flush(function () {
        console.log(command);
      });
    });
  });
}



//Moving carriage along the track
var stepperMoveX = (exports.stepperMoveX = (time, steps) => {
  sendCommand("em,1,1");

  //send command
  sendCommand(`sm,${time},${steps},${-steps}`);

  //upate overall motor positions
  pos.motorPositions.mot1 += steps;
  pos.motorPositions.mot2 += steps;
});

//Rotating the  Camera mount on carrige
var stepperMoveA = (exports.stepperMoveA = (time, steps) => {
  sendCommand("em,1,1");

  //send command
  sendCommand(`sm,${time},${steps},${steps}`);

  //upate overall motor positions
  pos.motorPositions.mot1 += steps;
  pos.motorPositions.mot2 += -steps;
});

exports.home = () => {
  return new Promise((resolve, reject) => {
    if (pos.motorPositions.mot1 !== pos.motorPositions.mot2) {
      //Checks if no rotation adjustments are needed
      let timeNeededForRotation = homeRotation(); //If adjustments are needed, do them and return how long it will take
      setTimeout(() => {
        let timeNeededForTranslation = homeTranslation(); //Do subsequent translation adjustments and return time needed
        setTimeout(() => {
          checkIfHome(); //After the translations are complete, resolve
        }, timeNeededForTranslation);
      }, timeNeededForRotation);
    } else if (
      //If no rotation adjustments are needed, but the carriage is not home.
      pos.motorPositions.mot1 == pos.motorPositions.mot2 &&
      pos.motorPositions.mot1 !== 0
    ) {
      let timeNeededForTranslation = homeTranslation(); //Perform translations and return time needed.
      setTimeout(() => {
        checkIfHome(); //Resolve after translations are complete.
      }, timeNeededForTranslation);
    } else {
      checkIfHome();
    }

    function homeTranslation() {
      if (
        //Double check no rotation adjustments needed
        pos.motorPositions.mot1 == pos.motorPositions.mot2 &&
        pos.motorPositions.mot1 !== 0
      ) {
        let distanceToHome = pos.motorPositions.mot1; //Motor steps are always positive and reflective of the distance travelled
        if (distanceToHome > 30000) {
          //Max number of steps allowed in one command is 30000. Check for that.
          if (validateMoveX(3000, -30000)) {
            //Validate a move of 30000 steps towards home.
            stepperMoveX(3000, -30000); //Move 30000 steps towards home.
            setTimeout(() => {
              homeTranslation(); //Wait for 30k step translation to finish and restart this function.
            }, 2950);
          } else reject("Error in large movement translation to home!");
        } else smallTranslateToHome(); //Handle translations towards home < 30k steps

        function smallTranslateToHome() {
          let timeNeeded = distanceToHome / 10; //Calc min time to move required steps; Max steps per second is 10k
          if (validateMoveX(timeNeeded, -distanceToHome)) {
            //Validate translation
            stepperMoveX(timeNeeded, -distanceToHome); //Perform translation
            return timeNeeded; //Return time it will take for the above translation to complete
          } else
            reject(`Invalid Translation needed to home: ${distanceToHome}`); //Unexpected Error handling
        }
      } else reject("Internal Fatal Error!"); //Unexpected Error handling
    }

    function homeRotation() {
      let rotatedSteps =
        (pos.motorPositions.mot1 - pos.motorPositions.mot2) / 2; //Find # of steps rotated; polarity denotes direction

      if (Math.abs(rotatedSteps) > 30000) {
        //Check if the rotation adjustment requires more than 30k steps
        if (validateMoveA(3000, 30000)) {
          //Validate a move of 30000 steps towards home.
          stepperMoveA(3000, 30000); //Move 30000 steps towards home.
          setTimeout(() => {
            homeRotation(); //Wait for 30k step translation to finish and restart this function.
          }, 2950);
        } else reject("Error in large movement rotation to home!");
      } else smallRotateToHome(); //Handle translations towards home < 30k steps

      function smallRotateToHome() {
        let timeNeeded = Math.abs(rotatedSteps) / 10; //Calc min time to perform adjustment rotation
        if (validateMoveA(timeNeeded, -rotatedSteps)) {
          //Validate rotation
          stepperMoveA(timeNeeded, -rotatedSteps); //Perform rotation
          return timeNeeded; //Return time required to complete
        } else reject(`Invalid Rotation needed to home: ${rotatedSteps}`);
      }
    }
    function checkIfHome() {
      var i = 0;

      function loop() {
        if (pos.motorPositions.mot1 == 0 && pos.motorPositions.mot2 == 0) {
          resolve();
        } else {
          setTimeout(() => {
            if (i < 10) {
              i++;
              loop();
            } else reject();
          }, 2000);
        }
      }

      loop();
    }
  });
};

/* Validation */
var validateMoveX = (exports.validateMoveX = (time, steps) => {
  let mot1 = pos.motorPositions.mot1 + steps;
  let mot2 = pos.motorPositions.mot2 + steps;
  if (mot1 <= 95000 && mot1 >= 0 && mot2 <= 95000 && mot2 >= 0) {
    //80000 max allowed steps, with some padding
    if (validateTimeToMoveX(time, steps)) return true;
  } else {
    console.log(`Requested movement invalid! mot1: ${mot1}, mot2: ${mot2}`);
    return false;
  }
});

var validateTimeToMoveX = (exports.validateTimeToMoveX = (time, steps) => {
  if (steps / time > 10) return false;
  else return true;
});

var validateMoveA = (exports.validateMoveA = (time, steps) => {
  let mot1 = pos.motorPositions.mot1 + steps;
  let mot2 = pos.motorPositions.mot2 + -steps;
  if (mot1 <= 95000 && mot1 >= 0 && mot2 <= 95000 && mot2 >= 0) {
    return true;
  } else {
    console.log(`Requested movement invalid! mot1: ${mot1}, mot2: ${mot2}`);
    return false;
  }
});

exports.moveToKeyframe = (keyframeIndex, duration) => {
  let stepsToMove = {
    mot1: pos.postitions[keyframeIndex].mot1 - pos.motorPositions.mot1,
    mot2: pos.postitions[keyframeIndex].mot2 - pos.motorPositions.mot2,
  };

  sendCommand("em,1,1");
  sendCommand(`sm,${duration},${stepsToMove.mot1},${-stepsToMove.mot2}`);
};

exports.unlockMotors = () => {
  sendCommand("em,0,0");
};

port.on("error", (err) => {
  console.log(`Serial Communication Error: ${err}`);
});

port.on("close", () => {
  console.log(`Serial Port ${port} closed!`);
});
