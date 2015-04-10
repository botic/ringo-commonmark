# ringo-commonmark

A port of the [CommonMark](http://commonmark.org/) markdown parser. The original source of the parser can be found at [jgm/commonmark.js](https://github.com/jgm/commonmark.js).

# Example

```
var md = require("commonmark");
md.process("# Headline\nTest\n\n* One\n* Two");
```

Result:
```
<h1>Headline</h1>
<p>Test</p>
<ul>
<li>One</li>
<li>Two</li>
</ul>
```
