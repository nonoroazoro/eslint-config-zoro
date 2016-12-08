const fs = require("fs");
const should = require("should");
const rules = require("../base");

describe("base", function ()
{
    it("should load base rules.", function (done)
    {
        Object.keys(rules).forEach(function (key)
        {
            should.exist(rules[key]);
        });

        rules.extends.forEach(function (p_filePath)
        {
            fs.statSync(p_filePath);
        });

        done();
    });
});
