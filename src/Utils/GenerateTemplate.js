const fs = require("fs");
const path = require("path");
const process = require("process");

const ignoreFilesAndDirs = ["node_modules", "package-lock.json"];

function copyDirectoryContents(src, dest) {
  const files = fs.readdirSync(src, { encoding: "utf-8", withFileTypes: true });

  files.forEach((f) => {
    if (f.isFile() && !ignoreFilesAndDirs.includes(f.name)) {
      // open file, read it and write it to the dest folder
      try {
        const data = fs.readFileSync(path.join(src, f.name), "utf8");
        fs.writeFileSync(path.join(dest, f.name), data, { flag: "w+" });
      } catch (err) {
        console.error(err);
      }
    }

    if (f.isDirectory()) {
      // call recursively
    }
  });
  return;
}

module.exports = {
  copyDirectoryContents,
};
