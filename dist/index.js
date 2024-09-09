"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TYPESCRIPT_CONFIGS = exports.STYLISTIC_CONFIGS = exports.REACT_CONFIGS = exports.ESLINT_CONFIGS = exports.ALL_CONFIGS = void 0;
const eslint_1 = require("./eslint");
// import { NODE_CONFIGS as RAW_NODE_CONFIGS } from "./node";
const react_1 = require("./react");
const stylistic_1 = require("./stylistic");
const typescript_1 = require("./typescript");
// TODO: Node is not supported yet, fix after the eslint-plugin-node is updated.
/**
 * All configs, including eslint, node, react, stylistic, and typescript.
 */
exports.ALL_CONFIGS = [
    ...eslint_1.ESLINT_CONFIGS,
    // ...RAW_NODE_CONFIGS,
    ...react_1.REACT_CONFIGS,
    ...stylistic_1.STYLISTIC_CONFIGS,
    ...typescript_1.TYPESCRIPT_CONFIGS,
];
/**
 * Eslint configs.
 */
exports.ESLINT_CONFIGS = eslint_1.ESLINT_CONFIGS;
/**
 * Node configs.
 */
// export const NODE_CONFIGS = RAW_NODE_CONFIGS;
/**
 * React configs.
 */
exports.REACT_CONFIGS = react_1.REACT_CONFIGS;
/**
 * Stylistic configs.
 */
exports.STYLISTIC_CONFIGS = stylistic_1.STYLISTIC_CONFIGS;
/**
 * Typescript configs.
 */
exports.TYPESCRIPT_CONFIGS = typescript_1.TYPESCRIPT_CONFIGS;
