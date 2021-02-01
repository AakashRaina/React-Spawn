#!/usr/bin/env node
const initiate = require("./Initiate");

const argv = require("yargs/yargs")(process.argv.slice(2)).check(
  (argv, options) => {
    const allArgs = argv._;
    if (allArgs.length === 0) {
      throw new Error("Please specify project name");
    } else if (allArgs.length > 1) {
      throw new Error("Only 1 app name can be passed.");
    } else {
      initiate(allArgs[0]);
      return true;
    }
  }
).argv;
