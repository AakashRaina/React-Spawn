const fs = require("fs");
const path = require("path");
const process = require("process");

const ignoreFilesAndDirs = ["node_modules", "package-lock.json"];

function copyDirectoryContents(src, dest) {
  fs.readdir(src, { encoding: "utf-8", withFileTypes: true }, (err, files) => {
    files.forEach((f) => {
      if (f.isFile() && !ignoreFilesAndDirs.includes(f.name)) {
        console.log(f.name);
      }
    });
  });
}

module.exports = {
  copyDirectoryContents,
};
