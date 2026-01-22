import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

import { defineConfig } from "../src";

import type { Config } from "../src";

const CODE_JS = `const foo = "bar";\nconsole.log(foo);\n`;
const CODE_TS = `const foo: string = "bar";\nconsole.log(foo);\n`;
const CODE_JSX = `export function App() {\n    return <div>Hello</div>;\n}\n`;
const CODE_TSX = `interface Props {\n    name: string;\n}\n\nexport function App({ name }: Props) {\n    return <div>Hello {name}</div>;\n}\n`;

const CODE_TS_VIOLATION = `import { Config } from "./types";\nconst x: Config = {};\n`;
const CODE_REACT_VIOLATION = `const items = [1, 2, 3];\nexport function App() {\n    return <div>{items.map(item => <span>{item}</span>)}</div>;\n}\n`;
const CODE_NODE_VIOLATION = `import fs from "fs";\nconsole.log(fs);\n`;
const CODE_REACT_HOOKS_VIOLATION = `import { useState } from "react";\nexport function App({ condition }) {\n    if (condition) {\n        const [state] = useState(0);\n        return <div>{state}</div>;\n    }\n    return <div>No state</div>;\n}\n`;

const TS_PARSER_OPTIONS = {
    languageOptions: {
        parserOptions: {
            projectService: {
                allowDefaultProject: ["*.ts", "*.tsx"]
            }
        }
    }
};

function expectHasPlugin(configs: Config[], pluginPrefix: string): void
{
    const hasPlugin = configs.some(c =>
        c.plugins && Object.keys(c.plugins).some(key => key === pluginPrefix || key.startsWith(pluginPrefix)));
    expect(hasPlugin).toBe(true);
}

function expectNoFatalErrors(result: ESLint.LintResult): void
{
    expect(result.fatalErrorCount).toBe(0);
}

function expectRuleNotTriggered(result: ESLint.LintResult, ruleId: string): void
{
    const ruleIds = result.messages.map(m => m.ruleId);
    expect(ruleIds).not.toContain(ruleId);
}

function expectRuleTriggered(result: ESLint.LintResult, ruleId: string): void
{
    const ruleIds = result.messages.map(m => m.ruleId);
    expect(ruleIds).toContain(ruleId);
}

async function lint(
    configs: Config[],
    code: string,
    filePath: string
): Promise<ESLint.LintResult>
{
    const eslint = new ESLint({
        overrideConfig: configs,
        overrideConfigFile: true
    });

    const results = await eslint.lintText(code, { filePath });
    return results[0];
}

describe("defineConfig", () =>
{
    describe("base config (no options)", () =>
    {
        it("should lint JS code without fatal errors", async () =>
        {
            const configs = await defineConfig();
            expect(configs.length).toBeGreaterThan(0);

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
        });

        it("should return same config for no args and empty object", async () =>
        {
            const noArgs = await defineConfig();
            const emptyObj = await defineConfig({});
            expect(noArgs.length).toBe(emptyObj.length);
        });

        it("should include @stylistic plugin", async () =>
        {
            const configs = await defineConfig();
            expectHasPlugin(configs, "@stylistic");
        });

        it("should include perfectionist plugin", async () =>
        {
            const configs = await defineConfig();
            expectHasPlugin(configs, "perfectionist");
        });
    });

    describe("typescript option", () =>
    {
        it("should add @typescript-eslint plugin", async () =>
        {
            const configs = await defineConfig({ typescript: true });
            expectHasPlugin(configs, "@typescript-eslint");
        });

        it("should lint TS code without fatal errors", async () =>
        {
            const configs = await defineConfig({ typescript: true, ...TS_PARSER_OPTIONS });

            const result = await lint(configs, CODE_TS, "test.ts");
            expectNoFatalErrors(result);
        });

        it("should trigger @typescript-eslint/consistent-type-imports on type-only import", async () =>
        {
            const configs = await defineConfig({ typescript: true, ...TS_PARSER_OPTIONS });

            const result = await lint(configs, CODE_TS_VIOLATION, "test.ts");
            expectNoFatalErrors(result);
            expectRuleTriggered(result, "@typescript-eslint/consistent-type-imports");
        });

        it("should NOT trigger typescript rules without typescript option", async () =>
        {
            const configs = await defineConfig();

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
            expectRuleNotTriggered(result, "@typescript-eslint/consistent-type-imports");
        });

        it("should add more configs than base", async () =>
        {
            const base = await defineConfig();
            const withTs = await defineConfig({ typescript: true });
            expect(withTs.length).toBeGreaterThan(base.length);
        });
    });

    describe("react option", () =>
    {
        it("should add react plugin", async () =>
        {
            const configs = await defineConfig({ react: true });
            expectHasPlugin(configs, "react");
        });

        it("should add react-hooks plugin", async () =>
        {
            const configs = await defineConfig({ react: true });
            expectHasPlugin(configs, "react-hooks");
        });

        it("should lint JSX code without fatal errors", async () =>
        {
            const configs = await defineConfig({ react: true });

            const result = await lint(configs, CODE_JSX, "test.jsx");
            expectNoFatalErrors(result);
        });

        it("should trigger react/jsx-key on missing key in map", async () =>
        {
            const configs = await defineConfig({ react: true });

            const result = await lint(configs, CODE_REACT_VIOLATION, "test.jsx");
            expectNoFatalErrors(result);
            expectRuleTriggered(result, "react/jsx-key");
        });

        it("should trigger react-hooks/rules-of-hooks on conditional hook", async () =>
        {
            const configs = await defineConfig({ react: true });

            const result = await lint(configs, CODE_REACT_HOOKS_VIOLATION, "test.jsx");
            expectNoFatalErrors(result);
            expectRuleTriggered(result, "react-hooks/rules-of-hooks");
        });

        it("should NOT trigger react rules without react option", async () =>
        {
            const configs = await defineConfig();

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
            expectRuleNotTriggered(result, "react/jsx-key");
        });

        it("should add more configs than base", async () =>
        {
            const base = await defineConfig();
            const withReact = await defineConfig({ react: true });
            expect(withReact.length).toBeGreaterThan(base.length);
        });
    });

    describe("node option", () =>
    {
        it("should add n plugin", async () =>
        {
            const configs = await defineConfig({ node: true });
            expectHasPlugin(configs, "n");
        });

        it("should lint Node.js code without fatal errors", async () =>
        {
            const configs = await defineConfig({ node: true });

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
        });

        it("should trigger n/prefer-node-protocol on bare fs import", async () =>
        {
            const configs = await defineConfig({ node: true });

            const result = await lint(configs, CODE_NODE_VIOLATION, "test.js");
            expectNoFatalErrors(result);
            expectRuleTriggered(result, "n/prefer-node-protocol");
        });

        it("should NOT trigger node rules without node option", async () =>
        {
            const configs = await defineConfig();

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
            expectRuleNotTriggered(result, "n/prefer-node-protocol");
        });

        it("should add more configs than base", async () =>
        {
            const base = await defineConfig();
            const withNode = await defineConfig({ node: true });
            expect(withNode.length).toBeGreaterThan(base.length);
        });
    });

    describe("combined options", () =>
    {
        it("typescript + react: should lint TSX without fatal errors", async () =>
        {
            const configs = await defineConfig({ react: true, typescript: true, ...TS_PARSER_OPTIONS });

            const result = await lint(configs, CODE_TSX, "test.tsx");
            expectNoFatalErrors(result);
        });

        it("typescript + react: should have both plugins", async () =>
        {
            const configs = await defineConfig({ react: true, typescript: true });
            expectHasPlugin(configs, "@typescript-eslint");
            expectHasPlugin(configs, "react");
        });

        it("typescript + node: should have both plugins", async () =>
        {
            const configs = await defineConfig({ node: true, typescript: true });
            expectHasPlugin(configs, "@typescript-eslint");
            expectHasPlugin(configs, "n");
        });

        it("react + node: should have both plugins", async () =>
        {
            const configs = await defineConfig({ node: true, react: true });
            expectHasPlugin(configs, "react");
            expectHasPlugin(configs, "n");
        });

        it("all options: should have all plugins", async () =>
        {
            const configs = await defineConfig({ node: true, react: true, typescript: true });
            expectHasPlugin(configs, "@typescript-eslint");
            expectHasPlugin(configs, "react");
            expectHasPlugin(configs, "react-hooks");
            expectHasPlugin(configs, "n");
        });
    });

    describe("explicit false values", () =>
    {
        it("should behave same as no args when all options are false", async () =>
        {
            const base = await defineConfig();
            const configs = await defineConfig({ node: false, react: false, typescript: false });

            expect(configs.length).toBe(base.length);
        });

        it("should NOT include optional plugins when set to false", async () =>
        {
            const configs = await defineConfig({ node: false, react: false, typescript: false });

            const hasTypescript = configs.some(c =>
                c.plugins && Object.keys(c.plugins).includes("@typescript-eslint"));
            const hasReact = configs.some(c =>
                c.plugins && Object.keys(c.plugins).includes("react"));
            const hasNode = configs.some(c =>
                c.plugins && Object.keys(c.plugins).includes("n"));

            expect(hasTypescript).toBe(false);
            expect(hasReact).toBe(false);
            expect(hasNode).toBe(false);
        });
    });

    describe("ignores option", () =>
    {
        it("should add ignores to config", async () =>
        {
            const configs = await defineConfig({ ignores: ["dist/*", "node_modules/*"] });
            const ignoresConfig = configs.find(c => c.ignores?.includes("dist/*"));

            expect(ignoresConfig).toBeDefined();
            expect(ignoresConfig?.ignores).toContain("node_modules/*");
        });

        it("should work with ignores + typescript", async () =>
        {
            const configs = await defineConfig({
                ignores: ["dist/*"],
                typescript: true,
                ...TS_PARSER_OPTIONS
            });

            const result = await lint(configs, CODE_TS, "test.ts");
            expectNoFatalErrors(result);
        });
    });

    describe("global config passthrough", () =>
    {
        it("should apply custom rules", async () =>
        {
            const configs = await defineConfig({
                rules: { "no-console": "error" }
            });

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
            expectRuleTriggered(result, "no-console");
        });

        it("should apply settings", async () =>
        {
            const configs = await defineConfig({
                settings: { react: { version: "19" } }
            });
            const globalConfig = configs[configs.length - 1];
            const reactSettings = globalConfig.settings?.react as { version: string; };

            expect(reactSettings?.version).toBe("19");
        });

        it("should apply languageOptions", async () =>
        {
            const configs = await defineConfig({
                languageOptions: { ecmaVersion: 2024 }
            });
            const globalConfig = configs[configs.length - 1];

            expect(globalConfig.languageOptions?.ecmaVersion).toBe(2024);
        });

        it("should not add extra config when only boolean options provided", async () =>
        {
            const base = await defineConfig();
            const withBooleans = await defineConfig({ node: false, react: false, typescript: false });

            expect(withBooleans.length).toBe(base.length);
        });
    });
});
