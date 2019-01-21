var toolkit = {};

toolkit.Argument = function(arguments) {
  var args;
  if(!typeof arguments == "string") {
    args = arguments.split(" ");
  } else {
    args = arguments;
  }
  for(i=0;i<args.length;i++) {
    if(toolkit.Argument.prototype.Params[args[i]]) {
      
    }
  }
};

module.exports = toolkit;
