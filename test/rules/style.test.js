const should = require("should");
const rules = require("../../rules/style");

describe("rules/style", function ()
{
    it("should load style rules.", function (done)
    {
        should.exist(rules);
        done();
    });
});
