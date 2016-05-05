const should = require("should");
const rules = require("../../rules/es6");

describe("rules/es6", function ()
{
    it("should load es6 rules.", function (done)
    {
        should.exist(rules);
        done();
    });
});
