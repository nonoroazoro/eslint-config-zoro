import { ESLINT_CONFIGS } from "./eslint"
// import { NODE_CONFIGS } from "./node";
import { REACT_CONFIGS } from "./react";
import { STYLISTIC_CONFIGS } from "./stylistic";
import { TYPESCRIPT_CONFIGS } from "./typescript";

export * from "./eslint";
// export * from "./node";
export * from "./react";
export * from "./stylistic";
export * from "./typescript";

// TODO: Node is not supported yet, fix after the eslint-plugin-node is updated.
export const ALL_CONFIGS = [
    ...ESLINT_CONFIGS,
    // ...NODE_CONFIGS,
    ...REACT_CONFIGS,
    ...STYLISTIC_CONFIGS,
    ...TYPESCRIPT_CONFIGS,
]
