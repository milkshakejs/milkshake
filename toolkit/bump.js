var fs = require("fs");

var package = JSON.parse(fs.readFileSync('package1.json'))
var version = package.version.split(".")
version[2] = (parseInt(version[2]) + 1).toString()

fs.writeFileSync('package1.json', JSON.stringify(package))
