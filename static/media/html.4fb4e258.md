---
title: Html
description: How to write HTML document
menu: true
---

# Writing HTML

### index.html structure

Each html file consist of _body_ and a _head_.

**Head** is where you define settings for your page:

- where you link the styles `<link />`
- give page a name to be displayed in browser window. This is required. `<title></title>`
- icon that will be displayed in the browser window (_favicon_) `<title></title>`
- define text, image and subtitles for sharing at social networks

[full list of items]()

```html
<head>
  <title>Homepage</title>
  <link rel="stylesheet" href="/styles/style.css" />
  <link rel="stylesheet" href="/styles/typography.css" />
</head>
```

**Body** is a place where you write the actual code to be rendered directly

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Homepage name</title>
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

### Additioanal head tags

Feeding the head right data will result into ranking higher at the search results. Following data should have clear and simple messages about the page and its content.

_Charset_ Defines the _character set_ used:

```html
<meta charset="UTF-8" />
```

Main set of meta tags

```html
<meta name="description" content="Free Web tutorials" />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="author" content="John Doe" />
```

The viewport is the user's visible area of a web page.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

The refresh attribute enables to refresh page in certain period

```html
<meta http-equiv="refresh" content="30" />
```

The `<base>` element specifies the base URL and/or target for all relative URLs in a page.
The `<base>` tag must have either an href or a target attribute present, or both.
There can only be one single <base> element in a document!

```html
<base href="https://www.w3schools.com/" target="_blank" />
```

#### Facebook, LinkedIn & Twitter sharing data

Most of the platforms are looking for the following tags in order to create previews when the html page is linked/shared. _og_ is a short cut for _openGraph data_
The _locale_ determines the language of the webpage. Defaults to en_US. use `og:locale:alternate` if you have other available language translations available.

```html
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:title" content="The Rock" />
<meta
  property="og:description"
  content="Sean Connery found fame and fortune as the
           suave, sophisticated British agent, James Bond."
/>
<meta property="og:locale" content="da_DK" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
```

#### Twitter additional data

_card type_ is a way that a post will br displayed: "summary", "summary*large_image", "app", or "player".
\_site* twitter account for the website used in the card footer. @username
_creator_ creators twittwer username @name

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@nytimesbits" />
<meta name="twitter:creator" content="@nickbilton" />
```
