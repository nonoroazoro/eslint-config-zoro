import * as rules from "../src/typescript";

describe("rules", () =>
{
    it("should load TypeScript rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect((rules as any)[key]).not.toBeNull();
        });
    });
});
