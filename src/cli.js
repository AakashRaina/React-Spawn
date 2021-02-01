#!/usr/bin/env node
const initiateBootstrap = require("./Initiate");

// get name of project from cli
const appName = process.argv.splice(2)[0];
initiateBootstrap(appName);
