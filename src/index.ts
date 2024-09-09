import { ESLINT_CONFIGS as RAW_ESLINT_CONFIGS } from "./eslint";
// import { NODE_CONFIGS as RAW_NODE_CONFIGS } from "./node";
import { REACT_CONFIGS as RAW_REACT_CONFIGS } from "./react";
import { STYLISTIC_CONFIGS as RAW_STYLISTIC_CONFIGS } from "./stylistic";
import { TYPESCRIPT_CONFIGS as RAW_TYPESCRIPT_CONFIGS } from "./typescript";

// TODO: Node is not supported yet, fix after the eslint-plugin-node is updated.

/**
 * All configs, including eslint, node, react, stylistic, and typescript.
 */
export const ALL_CONFIGS = [
    ...RAW_ESLINT_CONFIGS,
    // ...RAW_NODE_CONFIGS,
    ...RAW_REACT_CONFIGS,
    ...RAW_STYLISTIC_CONFIGS,
    ...RAW_TYPESCRIPT_CONFIGS,
];

/**
 * Eslint configs.
 */
export const ESLINT_CONFIGS = RAW_ESLINT_CONFIGS;

/**
 * Node configs.
 */
// export const NODE_CONFIGS = RAW_NODE_CONFIGS;

/**
 * React configs.
 */
export const REACT_CONFIGS = RAW_REACT_CONFIGS;

/**
 * Stylistic configs.
 */
export const STYLISTIC_CONFIGS = RAW_STYLISTIC_CONFIGS;

/**
 * Typescript configs.
 */
export const TYPESCRIPT_CONFIGS = RAW_TYPESCRIPT_CONFIGS;
