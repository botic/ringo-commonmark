"use strict";

// commonmark.js - CommomMark in JavaScript
// Copyright (C) 2014 John MacFarlane
// License: BSD3.

// This file is modified for ringo-commonmark

var Parser = exports.Parser = require('./blocks');
var Node = exports.Node = require('./node');

var HtmlRenderer = exports.HtmlRenderer = require('./html');
var XmlRenderer = exports.XmlRenderer = require('./xml');

/**
 * Converts a string of Markdown formatted text to HTML.
 * @param {String} text a Markdown formatted text
 * @returns {String} the Markdown text converted to HTML
 */
exports.process = function (mdString) {
   var parser = new Parser();
   var htmlRenderer = new HtmlRenderer();

   return htmlRenderer.render(parser.parse(mdString));
};