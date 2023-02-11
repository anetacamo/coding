---
title: Html
description: How to write HTML document
menu: true
tags: [html, basics]
type: learning
value: 1
---

# Writing HTML

### index.html structure

Each html file consist of _body_ and a _head_.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Homepage name</title>
    <link rel="stylesheet" href="/styles/style.css" />
    <link rel="stylesheet" href="/styles/typography.css" />
  </head>
  <body>
    this is where the actual code is written
  </body>
</html>
```

### Head

**Head** is where you define settings for your page:

- give page a name to be displayed in the browser window. This is required. `<title></title>`
- icon that will be displayed in the browser window (_favicon_)
- where you link the styles `<link />`
- define text, image and subtitles for sharing at social networks _meta tags_

```html
<head>
  <title>Homepage</title>
  <link rel="stylesheet" href="/styles/style.css" />
  <link rel="stylesheet" href="/styles/typography.css" />
</head>
```

[More about head tags](/#/html-head)

### Body

**Body** is a place where you write the actual code you can see on the website

- done via html tags named in shortcuts representing actual content.
- for regular paragraph text `<p></p>`
- for heading `<h1></h1>`

```html
<body>
  <h1>Homepage</h1>
  <p>Paragraph containing a lot of text</p>
</body>
```

[More about body tags](/#/html-tags)

### Comment in html

In html and css (and any other language) you can write notes to yourself or anyone else. Every language has a specific way to render a comment. Comments will be published and accessible in the source code but will not interact with the code.

`<!-- this is a comment in html --> `
