#!/usr/bin/env node
const process = require("process");
const fs = require("fs").promises;
const dir = require("./Utils/ReadDir");

// get name of project from cli
const appName = process.argv.splice(2)[0];

// create a directory with name supplied
// fs.mkdir(`${process.cwd()}/${appName}`);

dir.readTemplate(appName);
