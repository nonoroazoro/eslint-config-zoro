const should = require("should");
const rules = require("../../rules/best-practices");

describe("rules/best-practices", function ()
{
    it("should load best-practices rules.", function (done)
    {
        should.exist(rules);
        done();
    });
});
