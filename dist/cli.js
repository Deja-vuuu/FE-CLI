#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var creat_1 = __importDefault(require("./creat"));
var help_1 = __importDefault(require("./help"));
var commander_1 = require("commander");
var program = new commander_1.Command();
program
    .command('create <app-name>')
    .alias('c')
    .description('创建一个基于平台的新项目')
    .option('-t, --typeName <typeName>', '基于哪个项目')
    .action(function (name, options) {
    console.log(name, options);
    ink_1.render(react_1["default"].createElement(creat_1["default"], { name: name, options: options }));
    // create(name, options)
});
program
    .command("t")
    .description("test")
    .action(function (source, destination) {
    console.log("test ");
});
program
    // 监听 --help 执行
    .on('--help', function () {
    // 新增说明信息
    ink_1.render(react_1["default"].createElement(help_1["default"], null));
});
program.version('0.0.1', '-v', 'output the current version');
program.parse(process.argv);
