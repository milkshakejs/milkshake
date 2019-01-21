var M = {};

M.Success = function(message) {
  console.log("MILKSHAKE" + " " + M.tynt.Green("!SUCCESS") + " " + message + ".")
}

M.Error = function(message) {
  console.log("MILKSHAKE" + " " + M.tynt.Red("!ERR") + " " + message + ".")
}

M.Warning = function(message) {
  console.log("MILKSHAKE" + " " + M.tynt.Yellow("!WARN") + " " + message + ".")
}

module.exports = M;
