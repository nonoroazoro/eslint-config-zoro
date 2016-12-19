const fs = require("fs");
const should = require("should");
const rules = require("../base");

describe("base", () =>
{
    it("should load base rules.", (done) =>
    {
        Object.keys(rules).forEach((key) =>
        {
            should.exist(rules[key]);
        });

        rules.extends.forEach((p_filePath) =>
        {
            fs.statSync(p_filePath);
        });

        done();
    });
});
