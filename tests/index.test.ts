import rules = require("../src/index");

describe("rules", () =>
{
    it("should load recommended rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect(rules[key]).not.toBeNull();
        });
    });
});
