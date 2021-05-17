const pos = require("../pos");
const serial = requier("../serial");

exports.validateMove = (mot1Movement, mot2Movement, timeForMove) => {
    return new Promise ((resolve, reject) => {
        newMot1Pos = pos.motorPositions.mot1 + mot1Movement;
        newMot2Pos = pos.motorPositions.mot2 + mot2Movement;

        if(newMot1Pos > 95000 || newMot1Pos < 0) reject("STEPS_OUT_OF_BOUNDS_MOT1");
        if(newMot2Pos > 95000 || newMot2Pos < 0) reject("STEPS_OUT_OF_BOUNDS_MOT2");
        if(mot1Movement / 10 > timeForMove || mot2Movement / 10 > timeForMove) reject("STEPS_PER_SECOND_HIGH")
        else resolve();
    })
}