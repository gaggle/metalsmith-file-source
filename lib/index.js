"use strict";
const path = require("path")

module.exports = plugin;

function plugin() {
  return function (files, metalsmith) {
    Object.keys(files).forEach(function (filename) {
      let file = files[filename]
      file.source = filename
      file.fullSource = path.join(metalsmith.source(), filename)
    })
  }
}
