const fs = require("fs");
const path = require("path");
const process = require("process");
const ora = require("ora");

const ignoreFilesAndDirs = ["node_modules", "package-lock.json"];
const src = path.join(__dirname, "../../core");

function initiateProject(name) {
  const dest = `${process.cwd()}/${name}`;
  const initialCheckLoader = ora("Initiating your project...").start();

  setTimeout(() => {
    try {
      return checkForDirectory(initialCheckLoader, dest, name);
    } catch (error) {
      console.error(error);
      return;
    }
  }, 1000);
}

function checkForDirectory(spinner, dest, name) {
  if (!fs.existsSync(dest)) {
    fs.mkdir(dest, (err) => {
      if (err) spinner.fail("Failed to initiate your project...try again");
      else
        spinner.succeed("Initiated successfully. Generating boilerplate....");
    });
  } else {
    spinner.fail(`${name} already exists. Please choose a different name.`);
    return;
  }
}

function copyDirectoryContents(src, dest) {
  // fs.readdir(src, { encoding: "utf-8", withFileTypes: true }, (err, files) => {
  //   files.forEach((f) => {
  //     if (f.isFile() && !ignoreFilesAndDirs.includes(f.name)) {
  //       console.log(f.name);
  //     }
  //   });
  // });
}

module.exports = {
  initiateProject,
  copyDirectoryContents,
};
