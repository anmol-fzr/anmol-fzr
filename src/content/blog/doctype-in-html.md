---
title: "Is this <!doctype html> an HTML element ?"
description: "what does <!doctype html> represent in HTML ?"
keywords: "web web-development simple easy pure-html html-only monitoring tracking user-tracking user-monitoring html"
pubDate: "May 24 2024"
isPublished: true
heroImage: "/blog/doctype-in-html.webp"
---

TL;DR, It's not an HTML Element

So a typicall HTML biolerplate code looks like this 

```html
<!doctype html>
<html lang="en" class="dark">
  <head>
    <meta charset="utf-8" />
  </head>
  <body>
  </body>
</html>
```

In this code the `<!document html>` that appears to be a HTML tag isn't a HTML tag at all. 

In very early days of browsers, internet and web. There were mainly two browsers Netscape Navigator and Microsoft Internet Explorer.
Before W3C gave any standardization, web pages were written in two standards according to browsers.

But when web standards came into the picture a new mode was introduced so that all browser engines can follow that. 
In order to not to break the previous written websites W3C introduced this new mode using a special declaration as the `<!doctype html>`
the one declaration unified browser engines to use one standard.

These browser engines rendering modes were known as [quirk modes](https://developer.mozilla.org/en-US/docs/Web/HTML/Quirks_Mode_and_Standards_Mode
 "Quirk Mode"). After the standardization there were 3 modes 
- Quirk mode
- Limited Quirk mode
- No Quirk mode

All modern browser these days uses No Quick mode for layouts
