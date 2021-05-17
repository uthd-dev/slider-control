var serial = require("../serial");
var pos = require("../pos");
var move30kSteps = require("./move30kSteps");
var validateMove = require("./validateMove");

var stepperMove = (exports.stepperMove = (finalPos, time) => {
  return new Promise((resolve, reject) => {
    let stepsToMoveMot1 = finalPos.mot1 - pos.motorPositions.mot1;
    let stepsToMoveMot2 = finalPos.mot2 - pos.motorPositions.mot2;
    let mot1StepsPerMS = stepsToMoveMot1 / time;
    let mot2StepsPerMS = stepsToMoveMot2 / time;

    if (
      Math.abs(stepsToMoveMot1) > 30000 ||
      Math.abs(stepsToMoveMot2) > 30000
    ) {
      move30kSteps(
        stepsToMoveMot1,
        stepsToMoveMot2,
        mot1StepsPerMS,
        mot2StepsPerMS
      )
        .then(() => {
          stepperMove(finalPos, time).then(resolve()).catch(reject(err));
        })
        .catch(reject(err));
    } else {
      smallMotMovement(stepsToMoveMot1, stepsToMoveMot2, time)
        .then(resolve())
        .catch(reject(err));
    }
  });
});

function smallMotMovement(stepsToMoveMot1, stepsToMoveMot2, time) {
  return new Promise((resolve, reject) => {
    validateMove(stepsToMoveMot1, stepsToMoveMot2, time)
      .then(() => {
        serial.sendCommand(`sm,${time},${stepsToMoveMot1},${stepsToMoveMot2}`);
        setTimeout(() => {
          resolve();
        }, time - 10);
      })
      .catch(reject(err));
  });
}
