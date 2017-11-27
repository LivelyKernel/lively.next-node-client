const System = require("systemjs");
let modules = require("lively.modules");
let vm = lively.vm;
let {localInterface: system} = require("lively-system-interface/dist/lively-system-interface-only-local.js");
global.io = require("socket.io-client");
require("/Users/robert/Lively/lively-dev2/lively.2lively/dist/lively.2lively_client.js");

module.exports = {
  ...lively,
  System, system
}