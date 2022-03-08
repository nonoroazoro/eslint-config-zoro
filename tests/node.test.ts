import rules = require("../src/node");

describe("rules", () =>
{
    it("should load Node rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect((rules as any)[key]).not.toBeNull();
        });
    });
});
