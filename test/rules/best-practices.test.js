const should = require("should");
const rules = require("../../rules/best-practices");

describe("rules/best-practices", () =>
{
    it("should load best-practices rules.", (done) =>
    {
        should.exist(rules);
        done();
    });
});
