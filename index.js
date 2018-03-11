const System = require("systemjs"),
      modules = require("lively.modules"),
      vm = lively.vm,
      {localInterface: system} = require("lively-system-interface/dist/lively-system-interface-only-local.js");

global.babel = require("babel-core");
global.io = require("socket.io-client");
require("lively.2lively/dist/lively.2lively_client.js");

async function l2lConnect(opts = {}) {
  let {
     url = `http://localhost:9011/lively-socket.io`,
     timeout = 20 * 1000,
     info = {type: "l2l from lively.next-node-client"}
  } = opts;
  let client = lively.l2l.L2LClient.ensure({url, namespace: "l2l", info});
  if (timeout)
    await client.whenRegistered(timeout);
  console.log(`[l2l] connected to ${url}`);
  return client;
}

module.exports = {
  ...lively,
  System, system, l2lConnect
}
