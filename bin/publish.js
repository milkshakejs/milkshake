var cp = require("child_process"),
    path = require("path"),
    fs = require("fs");

var bump = function() {
  var package = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'package.json')))
  var version = package.version.split(".")
  version[2] = (parseInt(version[2]) + 1).toString()
  package.version = version.join(".");

  fs.writeFileSync(path.join(process.cwd(), 'package.json'), JSON.stringify(package))
  // For MSJS
}

var fileName;

var safe = process.argv[1] == "safe";
var testing = process.argv[1] == "testing";
var safe = process.argv[1] == "unstable";

if(safe) {
  cp.exec("git add . && git commit -m \"Release - Safe\" && git push origin master && npm publish --access public")
} else if(testing) {
  cp.exec("git add . && git commit -m \"Release - Testing\" && git push origin master && npm publish --access public")
}
