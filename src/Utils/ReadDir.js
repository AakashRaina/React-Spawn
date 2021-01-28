const fs = require("fs");
const path = require("path");
const process = require("process");

const src = path.join(__dirname, "../../core");

const ignoreFilesAndDirs = ["node_modules", "package-lock.json"];

function readTemplate(name) {
  const dest = `${process.cwd()}/${name}`;
  // fs.mkdirSync(`${dest}`);

  fs.readdir(src, { encoding: "utf-8", withFileTypes: true }, (err, files) => {
    files.forEach((f) => {
      if (f.isFile() && !ignoreFilesAndDirs.includes(f.name)) {
        console.log(f.name);
      }
    });
  });
}

module.exports = {
  readTemplate,
};
