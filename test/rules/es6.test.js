const should = require("should");
const rules = require("../../rules/es6");

describe("rules/es6", () =>
{
    it("should load es6 rules.", (done) =>
    {
        should.exist(rules);
        done();
    });
});
