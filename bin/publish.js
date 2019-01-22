var cp = require("child_process"),
    path = require("path"),
    fs = require("fs");

var bump = function() {
  var fs = require("fs");

  var package = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')))
  var version = package.version.split(".")
  version[2] = (parseInt(version[2]) + 1).toString()
  package.version = version.join(".");

  fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(package))
  // For MSJS
}

var fileName = "../publish-all";

var safe = process.argv[1] == "safe"; if(safe) fileName = "./binsh/publish-safe";
var testing = process.argv[1] == "testing"; if(safe) fileName = "./binsh/publish-testing";
var safe = process.argv[1] == "unstable"; if(safe) fileName = "./binsh/publish-unstable";

cp.exec("")
