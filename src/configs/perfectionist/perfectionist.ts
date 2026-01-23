import { GLOB_ALL } from "../../globs";

import type { Config } from "../../types/Config";

/**
 * See https://perfectionist.dev/rules
 */
export const PERFECTIONIST: Config = {
    files: [GLOB_ALL],
    name: "zoro/perfectionist",
    rules: {
        "perfectionist/sort-array-includes": "off",
        "perfectionist/sort-classes": "off",
        "perfectionist/sort-decorators": "off",
        "perfectionist/sort-enums": ["error", { "ignoreCase": false, "partitionByNewLine": true }],
        "perfectionist/sort-export-attributes": ["error", { "ignoreCase": false }],
        "perfectionist/sort-exports": ["error", { "ignoreCase": false, "partitionByNewLine": true }],
        "perfectionist/sort-heritage-clauses": ["error", { "ignoreCase": false }],
        "perfectionist/sort-import-attributes": ["error", { "ignoreCase": false }],
        "perfectionist/sort-imports": [
            "error",
            {
                "groups": [
                    "side-effect",

                    "builtin",
                    "external",
                    "internal",
                    ["index", "sibling", "parent"],
                    "type",

                    "side-effect-style",
                    "style"
                ],
                "ignoreCase": false
            }
        ],
        "perfectionist/sort-interfaces": "off",
        "perfectionist/sort-intersection-types": ["error", { "ignoreCase": false }],
        "perfectionist/sort-maps": "off",
        "perfectionist/sort-modules": ["error", { "ignoreCase": false }],
        "perfectionist/sort-named-exports": ["error", { "ignoreCase": false }],
        "perfectionist/sort-named-imports": ["error", { "ignoreCase": false }],
        "perfectionist/sort-object-types": ["error", { "ignoreCase": false, "partitionByNewLine": true }],
        "perfectionist/sort-objects": "off",
        "perfectionist/sort-sets": "off",
        "perfectionist/sort-switch-case": "off",
        "perfectionist/sort-union-types": ["error", { "ignoreCase": false }],
        "perfectionist/sort-variable-declarations": ["error", { "ignoreCase": false }]
    }
};
