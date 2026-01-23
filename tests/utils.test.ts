import { describe, expect, it } from "vitest";

import { importPackage } from "../src/utils";

import type { Parser, Plugin } from "../src/types";

function expectValidPlugin(plugin: Plugin): void
{
    expect(typeof plugin).toBe("object");
    expect(plugin.rules).toBeDefined();
    expect(typeof plugin.rules).toBe("object");
    expect(Object.keys(plugin.rules ?? {}).length).toBeGreaterThan(0);
}

describe("importPackage", () =>
{
    it("should throw error for non-existent package", async () =>
    {
        await expect(importPackage("non-existent-package-xyz-123"))
            .rejects
            .toThrow("[eslint-config-zoro] Failed to import package: non-existent-package-xyz-123");
    });

    describe("plugins", () =>
    {
        it("should import @stylistic/eslint-plugin as valid Plugin", async () =>
        {
            const plugin = await importPackage<Plugin>("@stylistic/eslint-plugin");
            expectValidPlugin(plugin);
        });

        it("should import eslint-plugin-perfectionist as valid Plugin", async () =>
        {
            const plugin = await importPackage<Plugin>("eslint-plugin-perfectionist");
            expectValidPlugin(plugin);
        });

        it("should import eslint-plugin-n as valid Plugin", async () =>
        {
            const plugin = await importPackage<Plugin>("eslint-plugin-n");
            expectValidPlugin(plugin);
        });

        it("should import eslint-plugin-react as valid Plugin", async () =>
        {
            const plugin = await importPackage<Plugin>("eslint-plugin-react");
            expectValidPlugin(plugin);
        });

        it("should import eslint-plugin-react-hooks as valid Plugin", async () =>
        {
            const plugin = await importPackage<Plugin>("eslint-plugin-react-hooks");
            expectValidPlugin(plugin);
        });

        it("should import @typescript-eslint/eslint-plugin as valid Plugin", async () =>
        {
            const plugin = await importPackage<Plugin>("@typescript-eslint/eslint-plugin");
            expectValidPlugin(plugin);
        });
    });

    describe("parsers", () =>
    {
        it("should import @typescript-eslint/parser as valid Parser", async () =>
        {
            const parser = await importPackage<Parser>("@typescript-eslint/parser");

            expect(typeof parser).toBe("object");
            const hasParseMethod = "parse" in parser || "parseForESLint" in parser;
            expect(hasParseMethod).toBe(true);
        });
    });
});
