import * as rules from "../src/stylistic";

describe("rules", () =>
{
    it("should load Stylistic rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect((rules as any)[key]).not.toBeNull();
        });
    });
});
