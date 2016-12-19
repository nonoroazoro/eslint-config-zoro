const should = require("should");
const rules = require("../../rules/errors");

describe("rules/errors", () =>
{
    it("should load errors rules.", (done) =>
    {
        should.exist(rules);
        done();
    });
});
