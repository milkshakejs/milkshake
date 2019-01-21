var M = {};

M.Success = (message) {
  console.log("MILKSHAKE" + " " + tynt.Green("!SUCCESS") + " " + message + ".")
}

M.Error = (message) {
  console.log("MILKSHAKE" + " " + tynt.Red("!ERR") + " " + message + ".")
}

M.Warning = (message) {
  console.log("MILKSHAKE" + " " + tynt.Yellow("!WARN") + " " + message + ".")
}

module.exports = M;
