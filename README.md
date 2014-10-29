# ringo-commonmark

A port of the CommonMark markdown parser.

# Example

```
var md = require("ringo-commonmark");
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
