
exports.postitions = [
    {
      mot1: 0,
      mot2: 0
    },
    {
      mot1: 0,
      mot2: 0
    }
  ]
  
exports.motorPositions = {
    mot1: 0,
    mot2: 0
  }

exports.zeroMotorPositions = () => {
  this.motorPositions = {
    mot1: 0,
    mot2: 0
  }
  console.log(this.motorPositions);
}