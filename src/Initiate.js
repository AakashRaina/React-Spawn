const fs = require("fs");
const path = require("path");
const process = require("process");
const chalk = require("chalk");
const generateTemplate = require("./GenerateTemplate");
const runInstall = require("./install");

const src = path.join(__dirname, "../core");

/**
 * Initiates CLI & before basic directory check.
 * @param {string} name - Name of the React web app.
 */
async function initiateBootstrap(name) {
  const dest = `${process.cwd()}/${name}`;
  console.time(`✨ Done in`);
  console.log(chalk.greenBright("Initializing your React app 🚀."));
  console.log();

  const value = await createAppDirectory(dest, name);
  if (value) {
    console.log(`Spawning new React app at ${chalk.cyanBright(dest)}`);
    console.log();
    generateTemplate(src, dest);
    runInstall(dest, name);
  }
}

/**
 * Creates webapp folder if it doesnt exist.
 * @param {string} dest - destination directory path.
 * @param {string} name - source directory path.
 * @returns {boolean} whether directory was created successfully.
 */
async function createAppDirectory(dest, name) {
  if (!fs.existsSync(dest)) {
    try {
      await fs.promises.mkdir(dest);
      return true;
    } catch (error) {
      console.log(chalk.bgRed("Failed to create your project."));
      console.log();
      return false;
    }
  } else {
    console.log(
      chalk.bgRed(
        `Directory name ${name} already exists. Please choose a different name.`
      )
    );
    console.log();
    return false;
  }
}

module.exports = initiateBootstrap;
