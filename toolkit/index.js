var toolkit = {};

toolkit.parse = function(arguments) {
  var args;
  if(!typeof arguments == "string") {
    args = arguments.split(" ");
  } else {
    args = arguments;
  }
};

module.exports = toolkit;
