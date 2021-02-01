const fs = require("fs");
const path = require("path");
const chalk = require("chalk");

const ignoreFilesAndDirs = ["node_modules", "package-lock.json", "dist"];

function generateTemplate(src, dest) {
  try {
    const files = fs.readdirSync(src, {
      encoding: "utf-8",
      withFileTypes: true,
    });

    files.forEach((f) => {
      copyFilecontents(f, src, dest);
    });
  } catch (error) {
    console.log(chalk.bgRed(`Error generating template`));
    console.log();
  }
  return;
}

async function copyFilecontents(file, src, dest) {
  if (file.isFile() && !ignoreFilesAndDirs.includes(file.name)) {
    const data = fs.readFileSync(path.join(src, file.name), "utf8");
    fs.writeFileSync(path.join(dest, file.name), data, { flag: "w+" });
  } else if (file.isDirectory() && !ignoreFilesAndDirs.includes(file.name)) {
    const directoryPath = path.join(dest, file.name);
    await fs.promises.mkdir(directoryPath);
    generateTemplate(path.join(src, file.name), directoryPath);
  }
}

module.exports = generateTemplate;
