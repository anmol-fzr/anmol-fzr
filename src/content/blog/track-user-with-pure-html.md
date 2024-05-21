---
title: "Click Track: HTML Hacks for Monitoring User Engagement"
description: "Track User Engagement with Simple HTML Click Tracking. Gain valuable insights into user behavior without external scripts"
keywords: "web web-development simple easy pure-html html-only monitoring tracking user-tracking user-monitoring html"
pubDate: "May 21 2024"
isPublished: true
heroImage: "/blog/user-tracking-pure-html.webp"
---

Event detection is an important aspect of user activity monitoring, which involves tracking and analyzing user behavior on a website or application.
But tracking users clicking on links is a tricky. 


Generally developers are used to track click by logging event to some service like google analytics

```javascript
<a
    href="https://anmol-fzr.web.app/blog/track-user-with-pure-html" 
    onClick={() => logEvent("USER_OPENED_TRACKING_BLOG")}
 >
    Click Track: HTML Hacks for Monitoring User Engagement
</a>
```

this is good aproach for most of the use cases.
But if you want to track/monitor user engagement only for links. For example a search engine might track which link is clicked by the user. In that case 
loading a full fledge event logging service will add in javascript bundle make web page load slow. 
For this particular case we have [ping]( https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#ping "MDN Documentaion about ping attribute in HTML")
attribute in html anchor tag.


ping
- is an optional attribute
- takes string of space separated urls

when the anchor tag is clicked a [HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP "MDN Documentaion about HTTP Protocol") 
[POST](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST "MDN Documentaion about POST method in HTTP Protocol")
request is sent to urls specified in ping attribute of the tag


```html
<a
    href="https://anmol-fzr.web.app/blog/track-user-with-pure-html" 
    ping="https://anmol-fzr.web.app/tracking" 
 >
    Click Track: HTML Hacks for Monitoring User Engagement
</a>
```

google analytics also do exactly same thing by thier [autotrack ](https://github.com/googleanalytics/autotrack "Google analytics's autotrack github repo") plugin using 
[outBoundLinkTracker](https://github.com/googleanalytics/autotrack/blob/master/docs/plugins/outbound-link-tracker.md "Google analytics's outBoundLinkTracker")


