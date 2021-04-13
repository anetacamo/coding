---
title: Css
description: How to write css
---

# How to write css

Styles are defined in the files ending with `.css`

Those css file/s are linked in the head of **html document** we want to style. Filenames are case sensitive. Here is the only one file called `style.css` being linked.

```html
<head>
  <title></title>
  <link rel="stylesheet" href="/style.css" />
</head>
```

First, we need to reference an element from html document that we want to style. We have a three paragraphs in `index.html`.

```html
<head>
  <title></title>
  <link rel="stylesheet" href="/style.css" />
</head>
<body>
  <div>
    <p class="highligted">first paragraph is violet</p>
    <p>second paragraph is gray</p>
    <p>third paragraph is gray</p>
  </div>
</body>
```

And we want them to be all in gray font, the first paragraph violet. Default color is black. So this is is what we have rendered in the browser without any styles applied:

first paragraph is violet<br />
second paragraph is gray<br />
third paragraph is gray

So now in `style.css` we are giving all the paragraphs `p { ... }` _gray color_ by writing `color:gray;` into curly parenthesis.

Then, we will call an element with `class='blueviolet'` by writing `.highlighted { ... }` and giving it `color: blueviolet;`. So the previously setted color:gray on all paragraphs will be overwritten with _blueviolet_ color for this specific case with class. See the most commonly used pairs of css properties and its values <a href='#css'>here</a>.

# We can reference all preset tag names like `h1, li, p... { ... }`or a specific class name given to any element, for example `.highligted { ... }`.

A class in css document is always called by writing a dot before its name. Tag names do not have a dot.

```css
p {
  color: gray;
}
.highlighted {
  color: blueviolet;
}
```

<p class='gray'>
  <span class='blueviolet'>first paragraph is violet</span><br />
  second paragraph is gray<br />
  third paragraph is gray
</p> 
    
> **The latest style defined in the css document will always overwrite previously defined styles.** See how the colors render differently when the order is reversed. First we give elements with class `.highlighted` **blueviolet** color, but then we actually overwrite this style by giving color **gray** to all paragraphs.

```css
.highlighted {
  color: blueviolet;
}
p {
  color: gray;
}
```

### Comment in css

`*/ this is a comment /*`
