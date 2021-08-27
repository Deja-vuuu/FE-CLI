#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var ui_1 = __importDefault(require("./ui"));
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .option("-c, --clone", "ccccccccccc")
    .description("clone a repository into a newly created directory")
    .action(function (source, destination) {
    ink_1.render(react_1["default"].createElement(ui_1["default"], null));
});
program
    .command("t")
    .description("test")
    .action(function (source, destination) {
    console.log("test ");
});
program.version('0.0.1', '-v', 'output the current version');
program.parse(process.argv);
