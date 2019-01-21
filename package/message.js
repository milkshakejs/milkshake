var M = {};

M.Success = function(message) {
  console.log("MILKSHAKE" + " " + tynt.Green("!SUCCESS") + " " + message + ".")
}

M.Error = function(message) {
  console.log("MILKSHAKE" + " " + tynt.Red("!ERR") + " " + message + ".")
}

M.Warning = function(message) {
  console.log("MILKSHAKE" + " " + tynt.Yellow("!WARN") + " " + message + ".")
}

module.exports = M;
