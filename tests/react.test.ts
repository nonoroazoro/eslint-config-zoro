import rules = require("../src/react");

describe("rules", () =>
{
    it("should load React rules.", () =>
    {
        Object.keys(rules).forEach((key) =>
        {
            expect(rules[key]).not.toBeNull();
        });
    });
});
