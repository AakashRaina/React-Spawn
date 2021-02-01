const execSync = require("child_process").execSync;

function installDeps(dir) {
  console.log("Installing dependecies ....");
  let options = { stdio: "pipe" };
  let stdout = execSync(`cd ${dir} && npm install`, options);
  console.timeEnd(`✨ Done in`);
}

module.exports = installDeps;
