# Slider Control

# Hardware: 
* Egg Bot Motor board
* Driven by two stepper motors
* Uses belt system with a differential to move carriage laterally and rotate the center of the carriage

# Info for Developers:
There are two individual applications in this repository.
* 1.) Backend: Written in native NodeJS with serial-port for communication with the EBB (Egg Bot Board) and a REST API for interacting with it from the UI.
* 2.) Frontend: Written with NextJS (React Framework) and bootstrapped from create-next-app. Also contains REST API to work-around CORS. 
* 3.) Everything: Written by just me and is probably messy and not commented properly/at all, will take some refactoring to get it all easily-understandable. (I can try to explain stuff you don't understand)
* 4.) PLEASE NOTE: There are numerous known security holes (eg. There is no proper input sanitization for APIs), DO NOT expose this software to the open internet or allow open access to any device running it.

### To Install:
* 1.) Clone the repo
* 2.) run `npm i` in both frontend & backend
* 3.) run `npm run dev` to run the fronted & `node ./app.js` to run the backend (NOTE: The backend will fail to start if the serial-port connection could not be opened)
* 4.) The backend runs on port `3001` and the frontend runs on port `3000`

### The Slider:
![image of built slider](https://github.com/uthd-dev/slider-control/blob/main/slider.jpg?raw=true)

# TO-DO:
### Keyframing System
- [x] Backend: Store keyframes as motor positions in pos.js (pos.positions[])
- [x] Frontend: Button to add current slider position as keyframe 
- [ ] Frontend/Backend: System to set/store duration of movement between keyframes
- [ ] Frontend: Display keyframes on slider position visualisation
- [ ] Frontend/Backend: System to alter/delete keyframes

### New Movement System
- [x] Backend: Create promise-based system that can handle validating and moving over 30k steps at a time.
- [ ] Backend: Transition existing REST API to use new movement system (completed for translation endpoint)

### UI
- [ ] Make responsive for larger / extra-small screen sizes (eg. Title font size, button sizes, slider visualisation, etc.)
- [ ] Implement Framer motion (eg. smooth animation for slider vis, entry and interact animations, etc.)
- [ ] Add touch event listeners for the buttons so that mobile devices can control slider motion as well.
 
## Contributors:
* Aubin C. Spitzer (uthd-dev)
