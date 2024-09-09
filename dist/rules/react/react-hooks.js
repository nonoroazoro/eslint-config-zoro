"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REACT_HOOKS = void 0;
// @ts-ignore
const plugin = require("eslint-plugin-react-hooks");
/**
 * See https://www.npmjs.com/package/eslint-plugin-react-hooks
 */
exports.REACT_HOOKS = {
    plugins: {
        "react-hooks": plugin
    },
    rules: {
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error"
    }
};
