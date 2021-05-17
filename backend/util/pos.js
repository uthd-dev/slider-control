exports.postitions = [];

exports.motorPositions = {
  mot1: 0,
  mot2: 0,
};

exports.movementStatus = {
  translating: false,
  rotating: false,
};

exports.zeroMotorPositions = () => {
  this.motorPositions = {
    mot1: 0,
    mot2: 0,
  };
  console.log(this.motorPositions);
};
