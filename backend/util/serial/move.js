var serial = require("../serial");
var pos = require("../pos");
var move30kSteps = require("./move30kSteps");
var validateMove = require("./validateMove");

var stepperMove = (module.exports = (finalPos, time) => {
  return new Promise((resolve, reject) => {
    let stepsToMoveMot1 = finalPos.mot1 - pos.motorPositions.mot1;
    let stepsToMoveMot2 = finalPos.mot2 - pos.motorPositions.mot2;
    let mot1StepsPerMS = stepsToMoveMot1 / time;
    let mot2StepsPerMS = stepsToMoveMot2 / time;

    console.log(`Checking if 30k step move is required`);

    if (
      Math.abs(stepsToMoveMot1) > 30000 ||
      Math.abs(stepsToMoveMot2) > 30000
    ) {
      console.log(`30k+ steps required`)

      move30kSteps(
        stepsToMoveMot1,
        stepsToMoveMot2,
        mot1StepsPerMS,
        mot2StepsPerMS
      )
        .then(() => {
          console.log(`30k movement complete`)
          stepperMove(finalPos, time)
            .then(resolve())
            .catch(err => {
              reject(err);
            });
        })
        .catch(err => {
          reject(err);
        });
    } else {
      smallMotMovement(stepsToMoveMot1, stepsToMoveMot2, time)
        .then(resolve())
        .catch(err => {
          reject(err);
        });
    }
  });
});

function smallMotMovement(stepsToMoveMot1, stepsToMoveMot2, time) {
  return new Promise((resolve, reject) => {
    console.log(`Performing Small motor movement!`);
    validateMove(stepsToMoveMot1, stepsToMoveMot2, time)
      .then(() => {
        console.log(`Attempting: sm,${time},${stepsToMoveMot1},${-stepsToMoveMot2}`);
        serial.sendCommand(`sm,${time},${stepsToMoveMot1},${-stepsToMoveMot2}`);
        pos.motorPositions.mot1 += stepsToMoveMot1;
        pos.motorPositions.mot2 += stepsToMoveMot2;
        setTimeout(() => {
          resolve();
        }, time - 10);
      })
      .catch(err => {
        reject(err);
      });
  });
}
