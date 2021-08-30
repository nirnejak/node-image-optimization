const sharp = require("sharp");
const fs = require("fs");

const inputBuffer = fs.readFileSync("input/4.png");

console.log(inputBuffer.name);

sharp("input/input.jpeg")
  .resize(640, 480)
  .jpeg({ mozjpeg: true })
  .toFile("output/output.webp")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
