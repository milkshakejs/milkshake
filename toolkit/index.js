var toolkit = {};

toolkits.ArgumentParser = {
  Parse: function(args) {
    if(typeof args == "string") {
      args = args.split(" ");
    }
  }
}

module.exports = toolkit;
