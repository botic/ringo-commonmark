var assert = require("assert");
var md = require("../lib/index");

exports.testPackage = function() {
   assert.strictEqual(typeof md, "object");
   assert.strictEqual(typeof md.process, "function");
};

exports.testBasicHtml = function() {
   var equivalentMarkup = [
      [
         "# Headline\nTest\n\n* One\n* Two",
         "<h1>Headline</h1>\n<p>Test</p>\n<ul>\n<li>One</li>\n<li>Two</li>\n</ul>\n"
      ],
      [
         "# H1\n## H2\n### H3\n#### H4",
         "<h1>H1</h1>\n<h2>H2</h2>\n<h3>H3</h3>\n<h4>H4</h4>\n"
      ],
      [
         "A horizontal rule follows.\n***\n",
         "<p>A horizontal rule follows.</p>\n<hr />\n"
      ]
   ];

   equivalentMarkup.forEach(function(testMarkup) {
      assert.strictEqual(md.process(testMarkup[0]), testMarkup[1]);
   })
};

exports.testEdgeCases = function() {
   var equivalentMarkup = [
      [
         "####### foo",
         "<p>####### foo</p>\n"
      ],
      [
         "\\## foo",
         "<p>## foo</p>\n"
      ],
      [
         "````\naaa\n```\n``````\n",
         "<pre><code>aaa\n```\n</code></pre>\n"
      ]
   ];

   equivalentMarkup.forEach(function(testMarkup) {
      assert.strictEqual(md.process(testMarkup[0]), testMarkup[1]);
   })
};


if (require.main == module.id) {
   require("system").exit(require("test").run(module.resolve("./basics")));
}