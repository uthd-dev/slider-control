const express = require("express");
let router = express.Router();
let serial = require("../util/serial");
let validateMove = require("../util/serial/validateMove");
let stepperMove = require("../util/serial/move");
let pos = require("../util/pos");

router.get("/translate", (req, res) => {
  if (req.query.time && req.query.steps) {
    let time = parseInt(req.query.time);
    let steps = parseInt(req.query.steps);
    validateMove(steps, steps, time)
      .then(() => {
        stepperMove(
          {
            mot1: pos.motorPositions.mot1 + steps,
            mot2: pos.motorPositions.mot2 + steps,
          },
          {
            mot1: steps / time,
            mot2: steps / time,
          }
        )
          .then(() => {
            console.log(
              `Sending positional response for: /api/movement/translate`
            );
            res.status(200).json({
              positions: {
                motorPositions: { ...pos.motorPositions },
                animationPositions: { ...pos.postitions },
              },
            });
          })
          .catch(err => {
            console.log(err);
            res.status(500).end(`Internal Server Error`);
          });
      })
      .catch(err => {
        console.log(err);
        res.status(406).end(`The requested movement is unsafe`);
      });
  }
});

router.get("/rotate", (req, res) => {
  if (req.query.time && req.query.steps) {
    let time = parseInt(req.query.time);
    let steps = parseInt(req.query.steps);
    if (serial.validateMoveA(time, steps)) {
      serial.stepperMoveA(time, steps);
      res.status(200).json({
        positions: {
          motorPositions: { ...pos.motorPositions },
          animationPositions: { ...pos.postitions },
        },
      });
    } else {
      res.status(406).end(`The requested movement is unsafe`);
    }
  } else {
    res.status(400).end(`Malformed Request`);
  }
});

router.get("/zero", (req, res) => {
  pos.zeroMotorPositions();
  res.status(200).json({
    positions: {
      motorPositions: { ...pos.motorPositions },
      animationPositions: { ...pos.postitions },
    },
  });
});

router.get("/unlock", (req, res) => {
  serial.unlockMotors();
  pos.zeroMotorPositions();
  res.status(200).json({
    positions: {
      motorPositions: { ...pos.motorPositions },
      animationPositions: { ...pos.postitions },
    },
  });
});

router.get("/home", (req, res) => {
  serial
    .home()
    .then(() => {
      res.status(200).json({
        positions: {
          motorPositions: { ...pos.motorPositions },
          animationPositions: { ...pos.postitions },
        },
      });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/positions/slider-position", (req, res) => {
  res.status(200).json({
    positions: {
      motorPositions: { ...pos.motorPositions },
    },
  });
});

router.get("/positions/keyframes", (req, res) => {
  res.status(200).json({
    positions: {
      keyframes: pos.postitions,
    },
  });
});

router.get("/positions/:keyframeIndex", (req, res) => {
  //get specific keyframe
  if (req.params.keyframeIndex) {
    if (pos.postitions.length() - 1 >= keyframeIndex && keyframeIndex >= 0) {
      res.status(200).json({
        mot1: pos.postitions[req.params.keyframeIndex].mot1,
        mot2: pos.positions[req.params.keyframeIndex].mot2,
      });
    } else res.status(400).end("Error Marlformed Request");
  } else res.status(400).end("Error Malformed Request");
});

router.post("/positions/keyframes", (req, res) => {
  console.log(req.body);
  //Create keyframe
  let newKeyframeIndex = pos.postitions.push(req.body) - 1;
  res.status(200).json({
    newKeyFrameIndex: newKeyframeIndex,
    mot1: req.body.mot1,
    mot2: req.body.mot2,
  });
  console.log(`New Keyframe added! Index: ${newKeyframeIndex}`);
  console.log(pos.postitions);
});

router.get("/continuous-translate/:actionType", (req, res) => {
  if (req.params.actionType) {
    if (req.params.actionType == "press" && req.query.forward) {
      let move = {
        //Steps and time for interval translating
        time: 250,
        steps: req.query.forward == "true" ? 2500 : -2500,
      };

      //When UI button pressed
      pos.movementStatus.translating = true;

      function continuousTranslate() {
        if (pos.movementStatus.translating == true) {
          if (serial.validateMoveX(move.time, move.steps)) {
            serial.stepperMoveX(move.time, move.steps);
            setTimeout(() => {
              continuousTranslate();
            }, 240);
          } else {
            pos.movementStatus.translating = false;
          }
        }
      }
      continuousTranslate();
      res.status(200).end("OK 200");
    } else if (req.params.actionType == "release") {
      //When UI button released
      pos.movementStatus.translating = false;
      res.status(200).end("OK 200");
    } else {
      res.status(400).end("Error: Malformed Request");
    }
  }
});

router.get("/continuous-rotate/:actionType", (req, res) => {
  if (req.params.actionType) {
    if (req.params.actionType == "press" && req.query.clockwise) {
      let rotate = {
        //Steps and time for interval translating
        time: 250,
        steps: req.query.clockwise == "true" ? -250 : 250,
      };

      //When UI button pressed
      pos.movementStatus.rotating = true;

      function continuousRotate() {
        if (pos.movementStatus.rotating == true) {
          if (serial.validateMoveA(rotate.time, rotate.steps)) {
            serial.stepperMoveA(rotate.time, rotate.steps);
            setTimeout(() => {
              continuousRotate();
            }, 240);
          } else {
            pos.movementStatus.rotating = false;
          }
        }
      }
      continuousRotate();
      res.status(200).end("OK 200");
    } else if (req.params.actionType == "release") {
      //When UI button released
      pos.movementStatus.rotating = false;
      res.status(200).end("OK 200");
    } else {
      res.status(400).end("Error: Malformed Request");
    }
  }
});

module.exports = router;
