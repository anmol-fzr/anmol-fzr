---
title: "Beginners Guide to astro's View Transition API"
description: "Simple and Easy Guide to get started with astro's View Transition API"
keywords: "astro view-transition new api web-api animation transition"
pubDate: "Dec 16 2023"
isPublished: true
heroImage: "/blog/astro-view-trans.webp"
---

# View Transitions API

## What is View Transitions API

The View Transitions API provides a mechanism for easily creating animated transitions between different DOM states while also updating the DOM contents in a single step.

## View Transitions in astro

Astro supports opt-in, per-page, view transitions with just a few lines of code. View transitions update your page content without the browser’s normal, full-page navigation refresh and provide seamless animations between pages.

## Basic View Transitions in astro

```html
---
import { ViewTransitions } from "astro:transitions";
---

<!doctype html>
<html lang="en">
  <head>
    <!-- meta tags -->
    <ViewTransitions />
  </head>
</html>
```

Now we have add the [Transition Directives](https://docs.astro.build/en/guides/view-transitions/#transition-directives) to our component.
Lets say we want to transition a image from a blog post card to that blog post

### Blog Post Card

```html
<img transition:name={"image"+title} class="w-full group-hover:rounded-xl group-hover:scale-[1.04] rounded-t-2xl" src={heroImage} alt={title} />
```

### Blog Post

```html
<img transition:name={"image"+title} width={1020} height={510} class="w-full md:w-10/12 mx-auto rounded-2xl"src={heroImage} alt={title} />
```

## Conclusion

View transitions bring a native feel to the web, and with Astro being the first major web framework to support them, you can start building arguably better transitions today.
