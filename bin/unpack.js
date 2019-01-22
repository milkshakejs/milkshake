var fs = require("fs"),
    unzip = require("unzip");
    version = fs.readFileSync("version.txt");
fs.createReadStream('binary-' + version.split("\n")[0] + ".zip").pipe(unzip.Extract({ path: process.cwd() }));
