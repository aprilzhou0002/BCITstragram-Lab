const path = require("path");
/*
 * Project: Milestone 1
 * File Name: main.js
 * Description:
 *
 * Created Date: Oct 13, 2023
 * Author: Shubing Zhou
 *
 */

const IOhandler = require("./IOhandler");
const zipFilePath = path.join(__dirname, "myfile.zip");
const pathUnzipped = path.join(__dirname, "unzipped");
const pathProcessed = path.join(__dirname, "grayscaled");

const processImages = () => {
  return IOhandler.unzip(zipFilePath, pathUnzipped)
  .then(() => IOhandler.readDir(pathUnzipped))
  .then(files => {
    const promises = files.map(file => {
      const outputPath = path.join(pathProcessed, path.basename(file));
      return IOhandler.grayScale(file, outputPath);
    });
    return Promise.all(promises);
  })
  .then(() => {
    console.log("All images processed!");
  })
  .catch(error => {
    console.log(error);
  });
  };
  
  processImages();