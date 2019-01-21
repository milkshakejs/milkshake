var fs = require("fs");

var package = JSON.parse(fs.readFileSync('package.json'))
var version = package.version.split(".")
version[2] = (parseInt(version[2]) + 1).toString()
package.version = version.join(".");

fs.writeFileSync('package.json', JSON.stringify(package))
// For MSJS
