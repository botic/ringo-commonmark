// commonmark.js - CommomMark in JavaScript
// Copyright (C) 2014 John MacFarlane
// License: BSD3.

// This file is modified for ringo-commonmark

var DocParser = exports.DocParser = require('./blocks');
var HtmlRenderer = exports.HtmlRenderer = require('./html-renderer');

exports.process = function (mdString) {
   var parser = new DocParser();
   var renderer = new HtmlRenderer();

   return renderer.renderBlock(parser.parse(mdString));
};