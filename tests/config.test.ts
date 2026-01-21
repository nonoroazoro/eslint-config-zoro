import { ESLint } from "eslint";
import { describe, expect, it } from "vitest";

import { defineConfig } from "../src";

const CODE_JS = `const foo = "bar";\nconsole.log(foo);\n`;

const CODE_TS = `const foo: string = "bar";\nconsole.log(foo);\n`;

const CODE_JSX = `export function App() {\n    return <div>Hello</div>;\n}\n`;

const CODE_TSX = `interface Props {\n    name: string;\n}\n\nexport function App({ name }: Props) {\n    return <div>Hello {name}</div>;\n}\n`;

const CODE_NODE = `const fs = require("fs");\nconst content = fs.readFileSync("test.txt", "utf8");\nconsole.log(content);\n`;

const CODE_NODE_TS = `import * as fs from "fs";\nconst content: string = fs.readFileSync("test.txt", "utf8");\nconsole.log(content);\n`;

const TS_PARSER_OPTIONS = {
    languageOptions: {
        parserOptions: {
            projectService: {
                allowDefaultProject: ["*.ts", "*.tsx"]
            }
        }
    }
};

function expectNoFatalErrors(result: ESLint.LintResult): void
{
    expect(result.fatalErrorCount).toBe(0);
}

async function lint(
    configs: ReturnType<typeof defineConfig>,
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
    describe("no arguments / empty object", () =>
    {
        it("should lint JS code without arguments", async () =>
        {
            const configs = defineConfig();
            expect(configs.length).toBeGreaterThan(0);

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
        });

        it("should lint JS code with empty object", async () =>
        {
            const configs = defineConfig({});
            expect(configs.length).toBeGreaterThan(0);

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
        });

        it("should return same config length for no args and empty object", () =>
        {
            expect(defineConfig().length).toBe(defineConfig({}).length);
        });
    });

    describe("typescript option", () =>
    {
        it("should lint TS code with type annotations", async () =>
        {
            const configs = defineConfig({ typescript: true, ...TS_PARSER_OPTIONS });

            const result = await lint(configs, CODE_TS, "test.ts");
            expectNoFatalErrors(result);
        });

        it("should add more configs than base", () =>
        {
            const base = defineConfig();
            const withTs = defineConfig({ typescript: true });
            expect(withTs.length).toBeGreaterThan(base.length);
        });
    });

    describe("react option", () =>
    {
        it("should lint JSX code", async () =>
        {
            const configs = defineConfig({ react: true });

            const result = await lint(configs, CODE_JSX, "test.jsx");
            expectNoFatalErrors(result);
        });

        it("should add more configs than base", () =>
        {
            const base = defineConfig();
            const withReact = defineConfig({ react: true });
            expect(withReact.length).toBeGreaterThan(base.length);
        });
    });

    describe("node option", () =>
    {
        it("should lint Node.js code with require", async () =>
        {
            const configs = defineConfig({ node: true });

            const result = await lint(configs, CODE_NODE, "test.js");
            expectNoFatalErrors(result);
        });

        it("should add more configs than base", () =>
        {
            const base = defineConfig();
            const withNode = defineConfig({ node: true });
            expect(withNode.length).toBeGreaterThan(base.length);
        });
    });

    describe("typescript + react", () =>
    {
        it("should lint TSX code with type annotations and JSX", async () =>
        {
            const configs = defineConfig({ react: true, typescript: true, ...TS_PARSER_OPTIONS });

            const result = await lint(configs, CODE_TSX, "test.tsx");
            expectNoFatalErrors(result);
        });
    });

    describe("typescript + node", () =>
    {
        it("should lint TS code with Node.js imports", async () =>
        {
            const configs = defineConfig({ node: true, typescript: true, ...TS_PARSER_OPTIONS });

            const result = await lint(configs, CODE_NODE_TS, "test.ts");
            expectNoFatalErrors(result);
        });
    });

    describe("react + node", () =>
    {
        it("should lint JSX code in Node.js environment", async () =>
        {
            const configs = defineConfig({ node: true, react: true });

            const result = await lint(configs, CODE_JSX, "test.jsx");
            expectNoFatalErrors(result);
        });
    });

    describe("typescript + react + node", () =>
    {
        it("should lint TSX code in Node.js environment", async () =>
        {
            const configs = defineConfig({ node: true, react: true, typescript: true, ...TS_PARSER_OPTIONS });

            const result = await lint(configs, CODE_TSX, "test.tsx");
            expectNoFatalErrors(result);
        });
    });

    describe("explicit false values", () =>
    {
        it("should behave same as no args when all options are false", async () =>
        {
            const base = defineConfig();
            const configs = defineConfig({ node: false, react: false, typescript: false });

            expect(configs.length).toBe(base.length);

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
        });
    });

    describe("ignores option", () =>
    {
        it("should add ignores to config", () =>
        {
            const configs = defineConfig({ ignores: ["dist/*", "node_modules/*"] });
            const ignoresConfig = configs.find(c => c.ignores?.includes("dist/*"));

            expect(ignoresConfig).toBeDefined();
            expect(ignoresConfig?.ignores).toContain("node_modules/*");
        });

        it("should work with ignores + typescript", async () =>
        {
            const configs = defineConfig({
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
            const configs = defineConfig({
                rules: { "no-console": "error" }
            });

            const result = await lint(configs, CODE_JS, "test.js");
            expectNoFatalErrors(result);
            // should report no-console error
            expect(result.messages.some(m => m.ruleId === "no-console")).toBe(true);
        });

        it("should apply settings", () =>
        {
            const configs = defineConfig({
                settings: { react: { version: "19" } }
            });
            const globalConfig = configs[configs.length - 1];
            const reactSettings = globalConfig.settings?.react as { version: string; };

            expect(reactSettings?.version).toBe("19");
        });

        it("should apply languageOptions", () =>
        {
            const configs = defineConfig({
                languageOptions: { ecmaVersion: 2024 }
            });
            const globalConfig = configs[configs.length - 1];

            expect(globalConfig.languageOptions?.ecmaVersion).toBe(2024);
        });

        it("should not add extra config when only boolean options provided", () =>
        {
            const base = defineConfig();
            const withBooleans = defineConfig({ node: false, react: false, typescript: false });

            expect(withBooleans.length).toBe(base.length);
        });
    });
});
