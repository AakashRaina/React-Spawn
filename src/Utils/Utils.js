const fs = require("fs");
const path = require("path");
const process = require("process");
const chalk = require("chalk");

const ignoreFilesAndDirs = ["node_modules", "package-lock.json"];
const src = path.join(__dirname, "../../core");

function initiateProject(name) {
  const dest = `${process.cwd()}/${name}`;
  console.log(chalk.greenBright("Initializing your project...."));

  try {
    if (checkForDirectory(dest, name)) {
      console.log("Proceed to copy");
    } else {
      return;
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

function checkForDirectory(dest, name) {
  if (!fs.existsSync(dest)) {
    fs.mkdir(dest, (err) => {
      if (err) {
        console.log(
          chalk.redBright("Failed to initiate your project...try again")
        );
        return false;
      } else {
        console.log(
          chalk.greenBright(
            "Initiated successfully. Generating boilerplate...."
          )
        );
        return true;
      }
    });
  } else {
    console.log(
      chalk.redBright(`${name} already exists. Please choose a different name.`)
    );
    return false;
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
