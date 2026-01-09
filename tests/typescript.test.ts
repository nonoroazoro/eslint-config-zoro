import { ESLint } from "eslint";
import { expect, it } from "vitest";

import { TYPESCRIPT_CONFIGS } from "../src/typescript";

it("TYPESCRIPT_CONFIGS should be valid ESLint flat config", async () =>
{
    const eslint = new ESLint({
        overrideConfigFile: true,
        overrideConfig: [
            ...TYPESCRIPT_CONFIGS,
            {
                languageOptions: {
                    parserOptions: {
                        projectService: {
                            allowDefaultProject: ["*.ts"]
                        }
                    }
                }
            }
        ]
    });

    const results = await eslint.lintText(
        `const foo: string = "bar";\nconsole.log(foo);\n`,
        { filePath: "test.ts" }
    );

    expect(results[0].fatalErrorCount).toBe(0);
});
