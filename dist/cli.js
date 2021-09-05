#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.handleError = exports.printUnknownCommand = void 0;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var creat_1 = __importDefault(require("./creat"));
var help_1 = __importDefault(require("./help"));
var commander_1 = require("commander");
var program = new commander_1.Command();
function printUnknownCommand(cmdName) {
    var errorMsg = "\u547D\u4EE4 \"" + chalk.bold(cmdName) + "\" \u4E0D\u5B58\u5728";
    if (cmdName) {
        console.log('运行 ${chalk.bold(', "ks --help", ')} 查看可用命令');
    }
    else {
        program.outputHelp();
    }
}
exports.printUnknownCommand = printUnknownCommand;
function handleError(err) {
    if (err) {
        // Some error messages (esp. custom ones) might have `.` at the end already.
        console.log("Run CLI with $");
        // if (err.stack) {
        //     console.log(err.stack);
        // }
    }
    process.exit();
}
exports.handleError = handleError;
program.usage('[command] [command-options]')
    .exitOverride(handleError)
    .action(function (cmd) {
    // if(![
    // 'c','t'
    // ].includes(cmd)){
    //   console.log('gundan');
    //   process.exit();
    // }
});
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
// program.version('0.0.1','-v','output the current version')
program.parse(process.argv);
