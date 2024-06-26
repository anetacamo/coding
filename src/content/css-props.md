---
title: Css Props
description: List of the most useful CSS properties and examples of use
tags: [css, styles, basics]
type: learning
menu: true
value: 5
---

# list of useful css properities

For the sake of all of us this is not a complete list. For the full exhausting list of CSS properities look up those [539 styles total](https://www.w3.org/Style/CSS/all-properties.en.html)

### background styling

| tag syntax          | example of use                                               | default styles | description                                                                                                                                                                                                            |
| ------------------- | ------------------------------------------------------------ | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| background-color    | blue, Tomato, DodgerBlue... - #fff, #f0f0f0 - rgb(255,255,0) | transparent    | a background color. Accepts hex color, rgb or any of the [predefined color names]("https://www.w3.org/wiki/CSS/Properties/color/keywords"). [More about colors](https://www.w3schools.com/cssref/css_colors_legal.asp) |
| background-image    | url("image.jpg")                                             | none           | a background image                                                                                                                                                                                                     |
| background-origin   | padding-box,border-box,content-box,initial,inherit           | padding-box    | Specifies where does the image start in a div                                                                                                                                                                          |
| background-position | left top, top right, 10% 20%, 200px 300px                    | 0% 0%          | Specifies the position of the bg image. By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally                                                   |
| background-repeat   | no-repeat, repeat                                            | repeat         | The background-repeat property sets if/how a background image will be repeated. By default, a background-image is repeated both vertically and horizontally.                                                           |
| background-size     | auto, length, percentage, cover, contain, initial, inherit   | auto           | Specifies the position of the bg image.                                                                                                                                                                                |

### managing the size and space

| tag syntax            | example of use          | default styles | description                                                                                                                                                                                                                                                                                                        |
| --------------------- | ----------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| margin                | -20px, 20px, auto       | 0              | Creates an outer frame for the div content                                                                                                                                                                                                                                                                         |
| padding               | 20px, auto              | 0              | Invisible inner frame that creates space that will not be taken by child element. Works like a border without a color.                                                                                                                                                                                             |
| box-sizing            | content-box, border-box | content-box    | Defines how the width and height of an element are calculated: should they include padding and borders, or not.                                                                                                                                                                                                    |
| height                | 200px, 50%, 100vh       | auto           | Creates an outer frame for the div content                                                                                                                                                                                                                                                                         |
| width                 | -20px, 20px, auto       | auto           | The height property sets the height of an element. The height of an element does not include padding, borders, or margins!                                                                                                                                                                                         |
| max-width, max-height | -20px, 20px, auto       | none           | sets the width of an element. Default width of an element does not include padding, borders, or margins!                                                                                                                                                                                                           |
| overflow              | -20px, 20px, auto       | visible        | The overflow property specifies what should happen if content overflows an element's box. This property specifies whether to clip content or to add scrollbars when an element's content is too big to fit in a specified area. Note: The overflow property only works for block elements with a specified height. |

<div class="flex">
  <div class="square"><b>width: 140px<br/> height: 140px</b></div>
  <div class="square padding">width: 140px<br/> height: 140px<br/><b>padding: 16px</b></div>
  <div class="square padding framed">width: 140px<br/> height: 140px<br/>padding: 16px<br/><b>border: 16px</b></div>
  <div class="square padding framed margin">width: 140px<br/> height: 140px<br/>padding: 16px<br/>border: 16px<br><b>margin: 16px</b></div>
</div>

### Border

| tag syntax    | example of use                                                     | default styles    | description                                                                                                                                                                                                             |
| ------------- | ------------------------------------------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| border        | 2px solid blue                                                     | medium none color | The border property is a shorthand property for: border-width, border-style (required), border-color                                                                                                                    |
| border-style  | dotted , dashed , solid , double , groove , ridge , inset , outset | none              | The border-style property sets the style of an element's four borders. This property can have from one to four values.                                                                                                  |
| border-image  | url("image.jpg")                                                   | none              | The border-image property allows you to specify an image to be used as the border around an element                                                                                                                     |
| border-radius | 8px, 2rem, 50%,                                                    | 0                 | This property allows you to add rounded corners to elements! This property can have from one to four values                                                                                                             |
| box-shadow    | h-offset v-offset blur spread color                                | none              | Adds one or more shadows to an element._h-offset, v-offset_ horizontal and vertical offset of a shadow in numeric values. _blur_ level of blurness in numeric values. _spread_ spreading of a shade _color_ of a shade. |

### Display

| tag syntax | example of use                          | default styles    | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------- | --------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| display    | block, inline, inline-block, flex, none | medium none color | _block_ means an item takes the full width of a container. Most of elements are block by default like `<div>`,`<p>`,`<h1>`... _inline_ will only take as much space as its content needs. Ignores margin and padding if it is setted, width and height. Example of inline elements: `a, b, i, input, span`... _inline-block_ useful for `button` or menu items, allows to set a width and height on the element. Top and bottom margins/paddings are respected. _none_ will make element disappear |
| text-align | left, right, center, justify            | left              | Sets how content is aligned                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

### Flexbox

Flexbox is a great solution for handling grids, columns or rows => working with content like a lot of posts or a lot of images.

But also when you need to Especially when working with multiple columns. Following features are only working on a element that has setted `display:flex`

if you have multiple divs

| tag syntax      | example of use                                                                                                                      | default styles | description                                                                                                                                                |
| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| flex-direction  | row, row-reverse, column, column-reverse                                                                                            | row            | Specifies the default alignment for items within the flex container..                                                                                      |
| flex-wrap       | nowrap, wrap, wrap-reverse                                                                                                          | nowrap         | By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.                    |
| justify-content | flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right ... + safe, unsafe                 | flex-start     | It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size |
| align-items     | stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end, self-start, self-end + ... safe, unsafe | stretch        | distributes items along the cross axis on the current line                                                                                                 |

[a complete quide to flexbox]("https://css-tricks.com/snippets/css/a-guide-to-flexbox/")

### position

| tag syntax               | example of use                            | default styles | description                                                                                                                                                                                                                                                                                                                   |
| ------------------------ | ----------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| position                 | static, absolute, fixed, relative, sticky | static         | _static_ Elements render in order, as they appear in the document flow. _fixed_ The element is positioned relative to the browser window. _absolute_ The element is positioned relative to its first positioned (not static) ancestor element. [More about positions](https://www.w3schools.com/cssref/pr_class_position.asp) |
| z-index                  | 1,2,3...999                               | 0              | _Only works on non-static elements_ Specifies a layering or stacking order for positioned elements.                                                                                                                                                                                                                           |
| top, bottom, left, right | 200px, 10%, 1rem                          | 0              | _Only works on non-static elements_ takes the first parent element with setted position relative as a referance. and from its borders positions itself.                                                                                                                                                                       |

### Cursor

| tag syntax | example of use                                                 | default styles | description                                                                    |
| ---------- | -------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------ |
| cursor     | pointer, progress, text, url, wait, none, url("img/image.jpg") | auto           | specifies the look of mouse cursor when _hovering_ - pointing over an element. |

### font styling

| tag syntax      | example of use                                                     | default styles                          | description                                                                                                                                                                                                                                                                                                                                                                                                               |
| --------------- | ------------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| font-family     | Open Sans, Roboto Slab, Oswald                                     | depends on the browser. Times New Roman | The font-family property specifies the font for an element. The font-family property can hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font.                                                                                                                                                                                                          |
| color           | blue, Tomato, DodgerBlue..., #fff, #f0f0f0, rgb(255,255,0)         | black                                   | Sets the color of the font                                                                                                                                                                                                                                                                                                                                                                                                |
| font-size       | 1rem, 2em, 24px                                                    | medium                                  | Sets the size of a font.                                                                                                                                                                                                                                                                                                                                                                                                  |
| font-style      | normal, italic                                                     | normal                                  | A way to make a text italic                                                                                                                                                                                                                                                                                                                                                                                               |
| font-weight     | 100, 200, 300, 400, 500, 600, 700, 800, 900, thin, regular, bold   | regular / 400                           | Sets the boldness of a font.                                                                                                                                                                                                                                                                                                                                                                                              |
| letter-spacing  | 1.2px, 2px                                                         | 1                                       | Specifies the area between all letters in a line of text. It is not to be confused with kerning, which refers to the manipulation of space between two individual letters. Kerning is not usually practiced on the web.                                                                                                                                                                                                   |
| line-height     | 1,1...                                                             | normal                                  | The line-height property specifies the height of a line.                                                                                                                                                                                                                                                                                                                                                                  |
| text-shadow     | _h-shadow v-shadow blur-radius color_                              | none                                    | Applies one or more shadows to the text content of an element. _h-shadow_ Required. The position of the horizontal shadow. Negative values are allowed _v-shadow_ Required. The position of the vertical shadow. Negative values are allowed _blur-radius_ Optional. The blur radius. Default value is 0 _color_ Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values |
| text-transform  | none, capitalize, uppercase, lowercase                             | none                                    | Controls the capitalization of text.                                                                                                                                                                                                                                                                                                                                                                                      |
| text-decoration | _text-decoration-line text-decoration-color text-decoration-style_ | none                                    | Specifies the decoration added to text, optionally color and style of it. _text-decoration-line_ Sets the kind of text decoration to use (like underline, overline, line-through). _text-decoration-style_ Sets the style of the text decoration (like solid, wavy, dotted, dashed, double)                                                                                                                               |
| writing-mode    | horizontal-tb, vertical-rl, vertical-lr                            | horizontal-tb                           | specifies whether lines of text are laid out horizontally or vertically                                                                                                                                                                                                                                                                                                                                                   |

### list styling

| tag syntax | example of use                               | default styles | description                                                                                                                                                                                                   |
| ---------- | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| list-style | square, circle, disc, none, url('image.png') | none           | The list-style property is a shorthand for the following properties: list-style-type list-style-position list-style-image If one of the values are missing, the default value for that property will be used. |

### image adjustments

object behaves similarly to background. Instead of an image setted via background-image it is applied on img element in html itself

| tag syntax | example of use                         | default styles | description                                                                                                                                                                                                                                                                    |
| ---------- | -------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| object-fit | fill, contain, cover, scale-down, none | 1              | The object-fit property is used to specify how an img or video should be resized to fit its container. This property tells the content to fill the container in a variety of ways; such as "preserve that aspect ratio" or "stretch up and take up as much space as possible". |

### opacity

| tag syntax | example of use                    | default styles | description                                                                                                     |
| ---------- | --------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------- |
| opacity    | from 0 (invisible) to 1 (visible) | 1              | Transparency level, where 1 is not transparent at all, 0.5 is 50% see-through, and 0 is completely transparent. |

### transitions

| tag syntax          | example of use | default styles | description                                                                                |
| ------------------- | -------------- | -------------- | ------------------------------------------------------------------------------------------ |
| transition-delay    | 0.3s, 300ms    | 0s             | Specifies when the transition effect will start.                                           |
| transition-duration | 0.3s, 300ms    | 0s             | Specifies how many seconds (s) or milliseconds (ms) a transition effect takes to complete. |

[Here you can look at all the available properties and their values. Alphabetically sorted]("https://www.w3schools.com/cssref/")
