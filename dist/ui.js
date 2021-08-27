"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
exports.__esModule = true;
var react_1 = __importStar(require("react"));
var ink_1 = require("ink");
var App = function () {
    var _a = react_1.useState([]), tests = _a[0], setTests = _a[1];
    var write = ink_1.useStdout().write;
    react_1.useEffect(function () {
        // 向标准输出写入一条消息，在 Ink 的输出上方
        write('Hello from Ink to stdout\n');
    }, []);
    react_1.useEffect(function () {
        var completedTests = 0;
        var timer;
        var run = function () {
            // Fake 10 completed tests
            if (completedTests++ < 10) {
                setTests(function (previousTests) { return __spreadArray(__spreadArray([], previousTests), [
                    {
                        id: previousTests.length,
                        title: "Test #" + (previousTests.length + 1)
                    }
                ]); });
                setTimeout(run, 100);
            }
        };
        run();
        return function () {
            clearTimeout(timer);
        };
    }, []);
    var _b = react_1.useState(''), query = _b[0], setQuery = _b[1];
    var handleSelect = function (item) {
        // `item` = { label: 'First', value: 'first' }
    };
    var items = [
        {
            label: 'First',
            value: 'first1'
        },
        {
            label: 'Second',
            value: 'second'
        },
        {
            label: 'Third',
            value: 'third'
        }
    ];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(ink_1.Text, null),
        react_1["default"].createElement(ink_1.Text, { color: "#ffffff" }, "I am white")));
};
exports["default"] = App;
