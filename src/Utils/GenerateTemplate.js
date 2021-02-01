const fs = require("fs");
const path = require("path");
const process = require("process");

const ignoreFilesAndDirs = ["node_modules", "package-lock.json", "dist"];

function copyDirectoryContents(src, dest) {
  try {
    const files = fs.readdirSync(src, {
      encoding: "utf-8",
      withFileTypes: true,
    });

    files.forEach(async (f) => {
      if (f.isFile() && !ignoreFilesAndDirs.includes(f.name)) {
        // open file, read it and write it to the dest folder
        const data = fs.readFileSync(path.join(src, f.name), "utf8");
        fs.writeFileSync(path.join(dest, f.name), data, { flag: "w+" });
      } else if (f.isDirectory() && !ignoreFilesAndDirs.includes(f.name)) {
        const directoryPath = path.join(dest, f.name);
        await fs.promises.mkdir(directoryPath);
        copyDirectoryContents(path.join(src, f.name), directoryPath);
      }
    });
  } catch (error) {}
  return;
}

module.exports = {
  copyDirectoryContents,
};
