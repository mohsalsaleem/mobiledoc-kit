/* jshint node:true */

'use strict';
var less = require('broccoli-less-single');

module.exports = function() {
  var tree;

  var srcDir = 'src/css',
      mainFile = 'application.less',
      outputFile = '/css/mobiledoc-kit.css';

  tree = less(srcDir, mainFile, outputFile);
  return tree;
};
