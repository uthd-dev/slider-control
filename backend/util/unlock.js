const SerialPort = require("serialport");

let port = new SerialPort("COM3", () => {
  console.log(`connecting on port: COM3`);
});

port.write("em,0,0" + "\r", "ascii", function () {
  port.drain(function () {
    port.flush(function () {
      console.log(`Motors Unlocked!`);
    });
  });
});
