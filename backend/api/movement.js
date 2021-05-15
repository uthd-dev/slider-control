const express = require("express");
let router = express.Router();
let serial = require("../util/serial");
let pos = require("../util/pos");

router.get("/translate", (req, res) => {
  if (req.query.time && req.query.steps) {
    let time = parseInt(req.query.time);
    let steps = parseInt(req.query.steps);
    if (serial.validateMoveX(time, steps)) {
      serial.stepperMoveX(time, steps);
      res.status(200).json({
        positions: {
          motorPositions: { ...pos.motorPositions },
          animationPositions: { ...pos.postitions },
        },
      });
    } else {
      res.status(406).end(`The requested movement is unsafe`);
    }
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
    serial.home();
    pos.zeroMotorPositions();
    res.status(200).json({
      positions: {
        motorPositions: { ...pos.motorPositions },
        animationPositions: { ...pos.postitions },
      },
    });
  });

router.get("/positions", (req, res) => {
  res.status(200).json({
    positions: {
      motorPositions: { ...pos.motorPositions },
      animationPositions: { ...pos.postitions },
    },
  });
})

module.exports = router;
