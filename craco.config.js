const path = require("path");
const cracoAlias = require("craco-alias");

module.exports = {
  alias: {
    "@src": path.join(__dirname, "src"),
  },
  plugins: [{ plugin: cracoAlias, options: { source: "jsconfig" } }],
};
