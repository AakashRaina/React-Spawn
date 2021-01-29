#!/usr/bin/env node
const utils = require("./Utils/Utils");

// get name of project from cli
const appName = process.argv.splice(2)[0];
utils.initiateProject(appName);
