const fs = require("fs");
const path = require("path");
const process = require("process");
const chalk = require("chalk");
const generateTemplate = require("./GenerateTemplate");

const src = path.join(__dirname, "../../core");

async function initiateBootstrap(name) {
  const dest = `${process.cwd()}/${name}`;
  console.log(chalk.greenBright("Initializing your project 🚀... Sit back."));

  try {
    const value = await checkForDirectory(dest, name);
    if (value) {
      console.log("Generating boilerplate 👨🏼‍🍳 ....");
      generateTemplate.copyDirectoryContents(src, dest);
    }
  } catch (error) {
    console.error(error);
    return;
  }
}

function checkForDirectory(dest, name) {
  if (!fs.existsSync(dest)) {
    return new Promise((resolve, reject) => {
      fs.mkdir(dest, (err) => {
        // If directory couldn't be created, reject with an error
        if (err) {
          console.log(
            chalk.redBright("Failed to initiate your project...try again.")
          );
          reject(false);
        } else {
          console.log(chalk.greenBright("Initiated successfully."));
          resolve(true);
        }
      });
    });
  } else {
    console.log(
      chalk.redBright(`${name} already exists. Please choose a different name.`)
    );
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(false);
      }, 0);
    });
  }
}

module.exports = initiateBootstrap;
