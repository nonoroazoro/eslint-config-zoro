const should = require("should");
const base = require("../../rules/base");

describe("rules/base", function ()
{
    it("should load base rules.", function (done)
    {
        should.exist(base);
        done();
    });
});
