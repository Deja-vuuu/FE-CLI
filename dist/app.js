"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var ink_1 = require("ink");
var meow_1 = __importDefault(require("meow"));
var ui_1 = __importDefault(require("./ui"));
var cli = meow_1["default"]("\n\tUsage\n\t  $ POP\n\n\tOptions\n\t\t--name  Your name\n\n\tExamples\n\t  $ POP --name=Jane\n\t  Hello, Jane\n", {
    flags: {
        name: {
            type: 'string'
        }
    }
});
console.log(cli);
ink_1.render(react_1["default"].createElement(ui_1["default"], null));
