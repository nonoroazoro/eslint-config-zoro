"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_CONFIGS = void 0;
const eslint_1 = require("./eslint");
// import { NODE_CONFIGS } from "./node";
const react_1 = require("./react");
const stylistic_1 = require("./stylistic");
const typescript_1 = require("./typescript");
__exportStar(require("./eslint"), exports);
// export * from "./node";
__exportStar(require("./react"), exports);
__exportStar(require("./stylistic"), exports);
__exportStar(require("./typescript"), exports);
// TODO: Node is not supported yet, fix after the eslint-plugin-node is updated.
exports.ALL_CONFIGS = [
    ...eslint_1.ESLINT_CONFIGS,
    // ...NODE_CONFIGS,
    ...react_1.REACT_CONFIGS,
    ...stylistic_1.STYLISTIC_CONFIGS,
    ...typescript_1.TYPESCRIPT_CONFIGS,
];
