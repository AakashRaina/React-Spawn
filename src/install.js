const execSync = require("child_process").execSync;
const path = require("path");
const chalk = require("chalk");
const process = require("process");

function showInfo(dir, appName) {
  console.log(`${chalk.green("Success")} 🎉 !! Created ${appName} at ${dir}`);
  console.log(
    `To start building ${chalk.cyan(
      `cd ${appName}`
    )} and then you can run several commands:`
  );
  console.log();
  console.log(` ${chalk.cyan(`npm start`)}`);
  console.log("  Starts the development server.");
  console.log();
  console.log(` ${chalk.cyan(`npm build`)}`);
  console.log("  Bundles the app into static files for production.");
}

function installDeps(dir, appName) {
  try {
    console.log("Installing packages. This might take a minute.");
    console.log();
    let options = { stdio: "pipe" };
    let stdout = execSync(`cd ${dir} && npm install`, options);
    console.log();
    console.timeEnd(`✨ Done in`);
    console.log();
    showInfo(dir, appName);
  } catch (error) {
    console.log(chalk.bgRed(`Error installing packages.`));
    console.log();
  }
}

module.exports = installDeps;
