"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
exports.Hello = (props) => (React.createElement("div", null,
    React.createElement("h1", null,
        "Hello from ",
        props.compiler,
        " and ",
        props.framework,
        "!")));
//# sourceMappingURL=Hello.js.map