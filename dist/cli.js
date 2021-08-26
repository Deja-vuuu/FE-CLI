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
    .option('-d, --debug', 'output extra debugging')
    .option('-s, --small', 'small pizza size')
    .option('-p, --pizza-type <type>', 'flavour of pizza');
program.parse(process.argv);
var options = program.opts();
if (options.debug)
    console.log(options);
if (options.small)
    console.log('- small pizza size');
if (options.pizzaType)
    ink_1.render(react_1["default"].createElement(ui_1["default"], null));
program.addHelpText('after', "\n\nExample call:\n  $ custom-help --help");
