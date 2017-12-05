# lively.next for node.js projects

This package allows you to drop support into a node.js project that didn't start out with [lively.modules](https://github.com/LivelyKernel/lively.modules).  Simply create a file `lively.js` in the root directory:

```js
const lively = require("lively.next-node-client");
const projDir = "file://" + __dirname;
Promise.all([
  lively.l2lConnect({info: {type: "lively for my node project"}})
    .then(() => console.log("ONLINE")),
  lively.modules.registerPackage(projDir)
    .then(() => lively.modules.module(projDir + "/index.js").load({format: "esm"}))
]).catch(err => console.error(err));
```

This will server as entry point / app starter. Run it via `node lively.js`.  The live version of your project will then connect to your local Lively server and you can use browsers, workspaces etc. for live development.


# License

[MIT](LICENSE)
