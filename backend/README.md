# BACKEND
Written in NodeJS / ExpressJS with npm's serial-port for sending commands

# Modules
### ./util/serial (All promise based)
- move.js (Handles movements of any amount of steps w/ validation)
- move30kSteps.js (Handles moving motors at proper rates while following the hardware limitation of max ~30k steps per serial command)
- validateMove.js (Validates any motor movement based on steps and time with multiple checks)

# REST API
### /api/movement
- GET /translate?time=[time in ms]&steps=[steps from 1 to 95000 (current set limit)]
- GET /rotate?time=[time in ms]&steps=[steps from 1 to 95000] (negative = clockwise)
- GET /unlock (sends `em,0,0` unlocking motors allowing for manual movement, also zeroes motor positions)
- GET /home (moves carriage to home position, rotating first then translating)

- GET /positions/slider-position (Returns current carriage positions as: { positions:{ motorPositions: { mot1: [motor 1 position], mot2: [motor 2 position] }}})
- GET /positions/keyframes (Returns array of all current keyframes; `pos.positions[]`)
- GET /positions/:keyframeIndex (Returns specific keyframe based on its index in the array; `pos.positions[]`)
- POST /positions/keyframes (Add keyframe; Expected body: { mot1: [motor 1 position], mot2: [motor 2 position] })

- GET /continuous-translate/:actionType?forward=[boolean] (actionType === "press" || "release"; Moves continuously in given direction until a limit is reached or this API endpoint is hit again with actionType = "release")
- GET /continuous-rotate/:actionType?clockwise=[boolean] (actionType === "press" || "release"; Rotates continuously in given direction until a limit is reached or this API endpoint is hit again with actionType = "release")
