var serial = require("../serial");
var validateMove = require("./validateMove");
var pos = require("../pos");

module.exports = (
  mot1StepsToMove,
  mot2StepsToMove,
  mot1StepsPerMS,
  mot2StepsPerMS
) => {
  return new Promise((resolve, reject) => {
    if (mot1StepsToMove == mot2StepsToMove && mot1StepsToMove >= 30000) {
      bothMotEqual30k(mot1StepsToMove, mot2StepsToMove, mot1StepsPerMS)
        .then(resolve())
        .catch(err => {
          reject(err);
        });
    } else if (
      mot1StepsToMove > mot2StepsToMove &&
      mot1StepsToMove >= 30000 &&
      mot2StepsToMove > 0
    ) {
      mot1Lead30k(
        mot1StepsToMove,
        mot2StepsToMove,
        mot1StepsPerMS,
        mot2StepsPerMS
      )
        .then(resolve())
        .catch(err => {
          reject(err);
        });
    } else if (
      mot2StepsToMove > mot1StepsToMove &&
      mot2StepsToMove >= 30000 &&
      mot1StepsToMove > 0
    ) {
      mot2Lead30k(
        mot1StepsToMove,
        mot2StepsToMove,
        mot1StepsPerMS,
        mot2StepsPerMS
      )
        .then(resolve())
        .catch(err => {
          reject(err);
        });
    } else {
      reject("INVALID_INPUTS");
    }
  });
};

function mot2Lead30k(
  mot1StepsToMove,
  mot2StepsToMove,
  mot1StepsPerMS,
  mot2StepsPerMS
) {
  return new Promise((resolve, reject) => {
    let mot230k = Math.sign(mot2StepsToMove) * 30000; //30k with direction
    let mot2TimeToMove = 30000 / mot2StepsPerMS;
    let mot1VarSteps =
      Math.sign(mot1StepsToMove) * (mot1StepsPerMS * mot2TimeToMove);

    validateMove(mot230k, mot1VarSteps, mot2TimeToMove)
      .then(() => {
        console.log(`Moving 30k steps, mot 2 lead`);

        serial.sendCommand(`sm,${mot2TimeToMove},${mot1VarSteps},${-mot230k}`); //Move motors

        pos.motorPositions.mot1 += mot1VarSteps;
        pos.motorPositions.mot2 += mot230k;

        setTimeout(() => {
          //Wait for move to complete
          resolve();
        }, mot2TimeToMove - 10); //Add 10 ms buffer to remove brief movement pauses
      })
      .catch(err => {
        reject(err);
      });
  });
}

function mot1Lead30k(
  mot1StepsToMove,
  mot2StepsToMove,
  mot1StepsPerMS,
  mot2StepsPerMS
) {
  return new Promise((resolve, reject) => {
    let mot130k = Math.sign(mot1StepsToMove) * 30000; //30k with direction
    let mot1TimeToMove = 30000 / mot1StepsPerMS;
    let mot2VarSteps =
      Math.sign(mot2StepsToMove) * (mot2StepsPerMS * mot1TimeToMove);

    validateMove(mot130k, mot2VarSteps, mot1TimeToMove)
      .then(() => {
        console.log(`Moving 30k steps, mot 1 lead`);

        serial.sendCommand(`sm,${mot1TimeToMove},${mot130k},${-mot2VarSteps}`); //Move motors

        pos.motorPositions.mot1 += mot130k;
        pos.motorPositions.mot2 += mot2VarSteps;

        setTimeout(() => {
          //Wait for move to complete
          resolve();
        }, mot1TimeToMove - 10); //Add 10 ms buffer to remove brief movement pauses
      })
      .catch(err => {
        console.log(err);
        reject(err);
      });
  });
}

function bothMotEqual30k(mot1StepsToMove, mot2StepsToMove, stepsPerMS) {
  return new Promise((resolve, reject) => {
    let mot130k = Math.sign(mot1StepsToMove) * 30000; //30k with direction
    let mot230k = Math.sign(mot2StepsToMove) * 30000;
    let timeToMove = 30000 / stepsPerMS; //Time (ms) based on speed

    validateMove(mot130k, mot230k, Math.round(timeToMove)) //Make sure this movement doesn't go out of bounds or go too fast
      .then(() => {

        console.log(`Attempting (30k): sm,${Math.round(timeToMove)},${mot130k},${-mot230k}`);

        serial.sendCommand(`sm,${Math.round(timeToMove)},${mot130k},${-mot230k}`); //Move motors

        pos.motorPositions.mot1 += mot130k;
        pos.motorPositions.mot2 += mot230k;

        setTimeout(() => {
          //Wait for move to complete
          resolve();
        }, timeToMove - 10); //Add 10 ms buffer to smooth out brief movement pauses
      })
      .catch(err => {
        //If move invalidated reject
        console.log(err);
        reject(err);
      });
  });
}
