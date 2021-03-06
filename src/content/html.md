---
title: Html
description: How to write HTML document
---

# Writing HTML

### index.html structure

Each html file consist of _body_ and a _head_.
**Head** is where you define settings for your page: where you link
the styles, give a page name and an icon that will be displayed in the
browser window (_favicon_), etc.

```html
<head>
  <title>The Homepage Title displayed in the browser windows</title>
  <link rel="stylesheet" href="/styles/style.css" />
  <link rel="stylesheet" href="/styles/typography.css" />
</head>
```

**Body** is a place where you would write the actual code to be
rendered directly

```html
<!DOCTYPE html>
<html>
  <head>
    <title>The Homepage Title displayed in the browser windows</title>
    <link rel="stylesheet" href="/styles/style.css" />
    <link rel="stylesheet" href="/styles/typography.css" />
  </head>
  <body>
    this is where the coding happens!
  </body>
</html>
```

### Comment in html

In html and css (and any other language) you can write notes to yourself or anyone else. Every language has a specific way to render a comment. Comments will be published and accessible in the source code but will not interact with the code.

`<!-- this is a comment in html --> `
