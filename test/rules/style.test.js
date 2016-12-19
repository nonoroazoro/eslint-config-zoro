const should = require("should");
const rules = require("../../rules/style");

describe("rules/style", () =>
{
    it("should load style rules.", (done) =>
    {
        should.exist(rules);
        done();
    });
});
