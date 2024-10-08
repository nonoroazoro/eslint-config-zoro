"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.REACT = void 0;
// @ts-ignore
const plugin = require("eslint-plugin-react");
/**
 * See https://github.com/yannickcr/eslint-plugin-react
 */
exports.REACT = {
    plugins: {
        react: plugin
    },
    rules: {
        "react/boolean-prop-naming": "error",
        "react/button-has-type": "error",
        "react/default-props-match-prop-types": "error",
        "react/destructuring-assignment": "off",
        "react/display-name": "off",
        "react/forbid-component-props": "off",
        "react/forbid-dom-props": "off",
        "react/forbid-elements": "off",
        "react/forbid-foreign-prop-types": "error",
        "react/forbid-prop-types": ["error", { "forbid": ["any", "array", "object"] }],
        "react/function-component-definition": "off",
        "react/hook-use-state": "error",
        "react/iframe-missing-sandbox": "error",
        "react/no-access-state-in-setstate": "error",
        "react/no-adjacent-inline-elements": "error",
        "react/no-array-index-key": "error",
        "react/no-arrow-function-lifecycle": "error",
        "react/no-children-prop": "error",
        "react/no-danger": "off",
        "react/no-danger-with-children": "error",
        "react/no-deprecated": "error",
        "react/no-did-mount-set-state": "error",
        "react/no-did-update-set-state": "error",
        "react/no-direct-mutation-state": "error",
        "react/no-find-dom-node": "error",
        "react/no-invalid-html-attribute": "error",
        "react/no-is-mounted": "error",
        "react/no-multi-comp": ["error", { "ignoreStateless": true }],
        "react/no-namespace": "error",
        "react/no-object-type-as-default-prop": "error",
        "react/no-redundant-should-component-update": "error",
        "react/no-render-return-value": "error",
        "react/no-set-state": "off",
        "react/no-typos": "error",
        "react/no-string-refs": "error",
        "react/no-this-in-sfc": "error",
        "react/no-unescaped-entities": "error",
        "react/no-unknown-property": "error",
        "react/no-unsafe": "error",
        "react/no-unstable-nested-components": "error",
        "react/no-unused-prop-types": ["warn", { "customValidators": [], "skipShapeProps": true }],
        "react/no-unused-state": "error",
        "react/no-will-update-set-state": "error",
        "react/prefer-es6-class": ["error", "always"],
        "react/prefer-exact-props": "error",
        "react/prefer-read-only-props": "error",
        "react/prefer-stateless-function": "off",
        "react/prop-types": ["error", { "ignore": ["children"], "customValidators": [] }],
        "react/react-in-jsx-scope": "off",
        "react/require-default-props": "error",
        "react/require-optimization": "off",
        "react/require-render-return": "error",
        "react/self-closing-comp": "error",
        "react/sort-comp": [
            "error", {
                "order": [
                    "static-variables",
                    "static-methods",
                    "instance-variables",
                    "lifecycle",
                    "/^on.+$/",
                    "getters",
                    "setters",
                    "/^(get|set)(?!(InitialState$|DefaultProps$|ChildContext$)).+$/",
                    "instance-methods",
                    "everything-else",
                    "rendering"
                ],
                "groups": {
                    "lifecycle": [
                        "displayName",
                        "propTypes",
                        "contextTypes",
                        "childContextTypes",
                        "mixins",
                        "statics",
                        "defaultProps",
                        "constructor",
                        "getDefaultProps",
                        "getInitialState",
                        "state",
                        "getChildContext",
                        "componentWillMount",
                        "componentDidMount",
                        "componentWillReceiveProps",
                        "shouldComponentUpdate",
                        "componentWillUpdate",
                        "componentDidUpdate",
                        "componentWillUnmount"
                    ],
                    "rendering": [
                        "/^render.+$/",
                        "render"
                    ]
                }
            }
        ],
        "react/sort-prop-types": "off",
        "react/state-in-constructor": "off",
        "react/static-property-placement": "error",
        "react/style-prop-object": "error",
        "react/void-dom-elements-no-children": "error",
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-filename-extension": ["error", { "extensions": [".jsx", ".tsx"] }],
        "react/jsx-handler-names": "off",
        "react/jsx-key": ["error", { "checkKeyMustBeforeSpread": true, "warnOnDuplicates": true }],
        "react/jsx-max-depth": "off",
        "react/jsx-no-bind": [
            "error",
            {
                "ignoreRefs": true,
                "allowArrowFunctions": true,
                "allowFunctions": false,
                "allowBind": false,
                "ignoreDOMComponents": true
            }
        ],
        "react/jsx-no-comment-textnodes": "error",
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-no-duplicate-props": "error",
        "react/jsx-no-leaked-render": "error",
        "react/jsx-no-literals": "off",
        "react/jsx-no-script-url": "error",
        "react/jsx-no-target-blank": "error",
        "react/jsx-no-undef": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-fragments": "off",
        "react/jsx-props-no-spread-multi": "error",
        "react/jsx-props-no-spreading": "error",
        "react/jsx-sort-default-props": "off",
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect"
        }
    }
};
