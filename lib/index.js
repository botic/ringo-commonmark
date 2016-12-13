"use strict";

// commonmark.js - CommomMark in JavaScript
// Copyright (C) 2014 John MacFarlane
// License: BSD3.

// This file is modified for ringo-commonmark

const commonmark = require("./commonmark");

const Parser = exports.Parser = commonmark.Parser;
const Node = exports.Node = commonmark.Node;

const HtmlRenderer = exports.HtmlRenderer = commonmark.HtmlRenderer;
const XmlRenderer = exports.XmlRenderer = commonmark.XmlRenderer;

/**
 * Converts a string of Markdown formatted text to HTML.
 * @param {String} text a Markdown formatted text
 * @returns {String} the Markdown text converted to HTML
 */
exports.process = function process(mdString) {
   const parser = new Parser();
   const htmlRenderer = new HtmlRenderer();

   return htmlRenderer.render(parser.parse(mdString));
};