const fs = require("fs");
const path = require("path");
const process = require("process");
const chalk = require("chalk");
const generateTemplate = require("./GenerateTemplate");
const runInstall = require("./install");

const src = path.join(__dirname, "../core");

async function initiateBootstrap(name) {
  const dest = `${process.cwd()}/${name}`;
  console.time(`✨ Done in`);
  console.log(chalk.greenBright("Initializing your React app 🚀... Sit back."));

  const value = await createAppDirectory(dest, name);
  if (value) {
    console.log(`Creating new React app in ${dest} ....`);
    generateTemplate(src, dest);
    runInstall(dest);
  }
}

async function createAppDirectory(dest, name) {
  if (!fs.existsSync(dest)) {
    try {
      await fs.promises.mkdir(dest);
      return true;
    } catch (error) {
      console.log(chalk.redBright("Failed to create your project."));
      return false;
    }
  } else {
    console.log(
      chalk.redBright(
        `Directory name ${name} already exists. Please choose a different name.`
      )
    );
    return false;
  }
}

module.exports = initiateBootstrap;
