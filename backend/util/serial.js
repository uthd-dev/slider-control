const SerialPort = require("serialport");

let pos = require("./pos");

const serialPort = "COM3";

let port = new SerialPort(serialPort, { autoOpen: false }, () => {
  console.log(`Serial Port: ${serialPort}`);
});

exports.serialInit = () => {
  return new Promise((resolve, reject) => {
    port.open(err => {
      if (err) {
        reject(err);
      } else {
        console.log(`Serial Port Opened!`);
        resolve();
      }
    });
  });
};

function sendCommand(command) {
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
exports.stepperMoveX = (time, steps) => {
  sendCommand("em,1,1");

  //send command
  sendCommand(`sm,${time},${steps},${-steps}`);

  //upate overall motor positions
  pos.motorPositions.mot1 += steps;
  pos.motorPositions.mot2 += steps;
};

//Rotating the Camera mount on carrige
exports.stepperMoveA = (time, steps) => {
  sendCommand("em,1,1");

  //send command
  sendCommand(`sm,${time},${steps},${steps}`);

  //upate overall motor positions
  pos.motorPositions.mot1 += steps;
  pos.motorPositions.mot2 += -steps;
};

exports.home = () => {
  let highestSteps = Math.max(pos.motorPositions.mot1, pos.motorPositions.mot2);
  let moveDuration = highestSteps / 10
  sendCommand(`sm,`)
}

/* Validation */
exports.validateMoveX = (time, steps) => {
  let mot1 = pos.motorPositions.mot1 + steps;
  let mot2 = pos.motorPositions.mot2 + steps;
  if (mot1 <= 95000 && mot1 >= 0 && mot2 <= 95000 && mot2 >= 0) {
    //80000 max allowed steps, with some padding
    return true;
  } else {
    console.log(`Requested movement invalid! mot1: ${mot1}, mot2: ${mot2}`);
    return false;
  }
};

exports.validateMoveA = (time, steps) => {
  let mot1 = pos.motorPositions.mot1 + steps;
  let mot2 = pos.motorPositions.mot2 + -steps;
  if (mot1 <= 95000 && mot1 >= 0 && mot2 <= 95000 && mot2 >= 0) {
    return true;
  } else {
    console.log(`Requested movement invalid! mot1: ${mot1}, mot2: ${mot2}`);
    return false;
  }
};

exports.unlockMotors = () => {
  sendCommand("em,0,0");
};

port.on("error", err => {
  console.log(`Serial Communication Error: ${err}`);
});

port.on("close", () => {
  console.log(`Serial Port ${port} closed!`);
});
