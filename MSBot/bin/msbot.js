#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const program = require("commander");
var pjson = require('../package.json');
program
    .version(pjson.version)
    .description("The msbot program makes it easy to manipulate .bot files for Microsoft Bot Framework tools.");
program
    .command('init', 'create a new .bot file');
program
    .command('export', 'export all connected services');
program
    .command('clone', 'create a new .bot file based on another .bot file');
program
    .command('connect <service>', 'connect to a resource (Luis/Qna/Azure/...) used by the bot');
program
    .command('disconnect <service>', 'disconnect from a resource used by the bot');
program
    .command('list', 'list all connected services');
program.parse(process.argv);
//# sourceMappingURL=msbot.js.map