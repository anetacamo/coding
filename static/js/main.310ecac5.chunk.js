(this.webpackJsonpcwm=this.webpackJsonpcwm||[]).push([[0],{14:function(e){e.exports=JSON.parse('[{"id":2,"title":"Css","description":"How to write css","author":"Aneta Camo","content":"\\n# How to write css\\n\\nStyles are defined in the files ending with `.css`\\n\\nThose css file/s are linked in the head of **html document** we want to style. Filenames are case sensitive. Here is the only one file called `style.css` being linked.\\n\\n```html\\n<head>\\n  <title></title>\\n  <link rel=\\"stylesheet\\" href=\\"/style.css\\" />\\n</head>\\n```\\n\\nFirst, we need to reference an element from html document that we want to style. We have a three paragraphs in `index.html`.\\n\\n```html\\n<head>\\n  <title></title>\\n  <link rel=\\"stylesheet\\" href=\\"/style.css\\" />\\n</head>\\n<body>\\n  <div>\\n    <p class=\\"highligted\\">first paragraph is violet</p>\\n    <p>second paragraph is gray</p>\\n    <p>third paragraph is gray</p>\\n  </div>\\n</body>\\n```\\n\\nAnd we want them to be all in gray font, the first paragraph violet. Default color is black. So this is is what we have rendered in the browser without any styles applied:\\n\\nfirst paragraph is violet<br />\\nsecond paragraph is gray<br />\\nthird paragraph is gray\\n\\nSo now in `style.css` we are giving all the paragraphs `p { ... }` _gray color_ by writing `color:gray;` into curly parenthesis.\\n\\nThen, we will call an element with `class=\'blueviolet\'` by writing `.highlighted { ... }` and giving it `color: blueviolet;`. So the previously setted color:gray on all paragraphs will be overwritten with _blueviolet_ color for this specific case with class. See the most commonly used pairs of css properties and its values <a href=\'#css\'>here</a>.\\n\\n# We can reference all preset tag names like `h1, li, p... { ... }`or a specific class name given to any element, for example `.highligted { ... }`.\\n\\nA class in css document is always called by writing a dot before its name. Tag names do not have a dot.\\n\\n```css\\np {\\n  color: gray;\\n}\\n.highlighted {\\n  color: blueviolet;\\n}\\n```\\n\\n<p class=\'gray\'>\\n  <span class=\'blueviolet\'>first paragraph is violet</span><br />\\n  second paragraph is gray<br />\\n  third paragraph is gray\\n</p> \\n    \\n> **The latest style defined in the css document will always overwrite previously defined styles.** See how the colors render differently when the order is reversed. First we give elements with class `.highlighted` **blueviolet** color, but then we actually overwrite this style by giving color **gray** to all paragraphs.\\n\\n```css\\n.highlighted {\\n  color: blueviolet;\\n}\\np {\\n  color: gray;\\n}\\n```\\n\\n### Comment in css\\n\\n`*/ this is a comment /*`\\n"},{"id":1,"title":"Css Props","description":"List of the most useful CSS properties and examples of use","author":"Aneta Camo","content":"\\n# Most commonly used styles\\n\\n### background styling\\n\\n| tag syntax          | example of use                                               | default styles | description                                                                                                                                                                                                            |\\n| ------------------- | ------------------------------------------------------------ | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| background-color    | blue, Tomato, DodgerBlue... - #fff, #f0f0f0 - rgb(255,255,0) | transparent    | a background color. Accepts hex color, rgb or any of the [predefined color names](\\"https://www.w3.org/wiki/CSS/Properties/color/keywords\\"). [More about colors](https://www.w3schools.com/cssref/css_colors_legal.asp) |\\n| background-image    | url(\\"image.jpg\\")                                             | none           | a background image                                                                                                                                                                                                     |\\n| background-origin   | padding-box,border-box,content-box,initial,inherit           | padding-box    | Specifies where does the image start in a div                                                                                                                                                                          |\\n| background-position | left top, top right, 10% 20%, 200px 300px                    | 0% 0%          | Specifies the position of the bg image. By default, a background-image is placed at the top-left corner of an element, and repeated both vertically and horizontally                                                   |\\n| background-repeat   | no-repeat, repeat                                            | repeat         | The background-repeat property sets if/how a background image will be repeated. By default, a background-image is repeated both vertically and horizontally.                                                           |\\n| background-size     | auto, length, percentage, cover, contain, initial, inherit   | auto           | Specifies the position of the bg image.                                                                                                                                                                                |\\n\\n### managing the size and space\\n\\n| tag syntax            | example of use          | default styles | description                                                                                                                                                                                                                                                                                                        |\\n| --------------------- | ----------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\\n| margin                | -20px, 20px, auto       | 0              | Creates an outer frame for the div content                                                                                                                                                                                                                                                                         |\\n| padding               | 20px, auto              | 0              | Invisible inner frame that creates space that will not be taken by child element. Works like a border without a color.                                                                                                                                                                                             |\\n| box-sizing            | content-box, border-box | content-box    | Defines how the width and height of an element are calculated: should they include padding and borders, or not.                                                                                                                                                                                                    |\\n| height                | 200px, 50%, 100vh       | auto           | Creates an outer frame for the div content                                                                                                                                                                                                                                                                         |\\n| width                 | -20px, 20px, auto       | auto           | The height property sets the height of an element. The height of an element does not include padding, borders, or margins!                                                                                                                                                                                         |\\n| max-width, max-height | -20px, 20px, auto       | none           | sets the width of an element. Default width of an element does not include padding, borders, or margins!                                                                                                                                                                                                           |\\n| overflow              | -20px, 20px, auto       | visible        | The overflow property specifies what should happen if content overflows an element\'s box. This property specifies whether to clip content or to add scrollbars when an element\'s content is too big to fit in a specified area. Note: The overflow property only works for block elements with a specified height. |\\n\\n<div class=\\"flex\\">\\n  <div class=\\"square\\"><b>width: 140px<br/> height: 140px</b></div>\\n  <div class=\\"square padding\\">width: 140px<br/> height: 140px<br/><b>padding: 16px</b></div>\\n  <div class=\\"square padding framed\\">width: 140px<br/> height: 140px<br/>padding: 16px<br/><b>border: 16px</b></div>\\n  <div class=\\"square padding framed margin\\">width: 140px<br/> height: 140px<br/>padding: 16px<br/>border: 16px<br><b>margin: 16px</b></div>\\n</div>\\n\\n### Border\\n\\n| tag syntax    | example of use                                                     | default styles    | description                                                                                                                                                                                                             |\\n| ------------- | ------------------------------------------------------------------ | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| border        | 2px solid blue                                                     | medium none color | The border property is a shorthand property for: border-width, border-style (required), border-color                                                                                                                    |\\n| border-style  | dotted , dashed , solid , double , groove , ridge , inset , outset | none              | The border-style property sets the style of an element\'s four borders. This property can have from one to four values.                                                                                                  |\\n| border-image  | url(\\"image.jpg\\")                                                   | none              | The border-image property allows you to specify an image to be used as the border around an element                                                                                                                     |\\n| border-radius | 8px, 2rem, 50%,                                                    | 0                 | This property allows you to add rounded corners to elements! This property can have from one to four values                                                                                                             |\\n| box-shadow    | h-offset v-offset blur spread color                                | none              | Adds one or more shadows to an element._h-offset, v-offset_ horizontal and vertical offset of a shadow in numeric values. _blur_ level of blurness in numeric values. _spread_ spreading of a shade _color_ of a shade. |\\n\\n### Display\\n\\n| tag syntax | example of use                          | default styles    | description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |\\n| ---------- | --------------------------------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| display    | block, inline, inline-block, flex, none | medium none color | _block_ means an item takes the full width of a container. Most of elements are block by default like `<div>`,`<p>`,`<h1>`... _inline_ will only take as much space as its content needs. Ignores margin and padding if it is setted, width and height. Example of inline elements: `a, b, i, input, span`... _inline-block_ useful for `button` or menu items, allows to set a width and height on the element. Top and bottom margins/paddings are respected. _none_ will make element disappear |\\n| text-align | left, right, center, justify            | left              | Sets how content is aligned                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |\\n\\n### Flexbox\\n\\nFlexbox is a great way how to handle content that needs to be centered. Especially when working with multiple columns. Following features are only working on a element that has setted `display:flex`\\n\\n| tag syntax      | example of use                                                                                                                      | default styles | description                                                                                                                                                |\\n| --------------- | ----------------------------------------------------------------------------------------------------------------------------------- | -------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| flex-direction  | row, row-reverse, column, column-reverse                                                                                            | row            | Specifies the default alignment for items within the flex container..                                                                                      |\\n| flex-wrap       | nowrap, wrap, wrap-reverse                                                                                                          | nowrap         | By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.                    |\\n| justify-content | flex-start, flex-end, center, space-between, space-around, space-evenly, start, end, left, right ... + safe, unsafe                 | flex-start     | It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size |\\n| align-items     | stretch, flex-start, flex-end, center, baseline, first baseline, last baseline, start, end, self-start, self-end + ... safe, unsafe | stretch        | distributes items along the cross axis on the current line                                                                                                 |\\n\\n[a complete quide to flexbox](\\"https://css-tricks.com/snippets/css/a-guide-to-flexbox/\\")\\n\\n### position\\n\\n| tag syntax               | example of use                            | default styles | description                                                                                                                                                                                                                                                                                                                   |\\n| ------------------------ | ----------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| position                 | static, absolute, fixed, relative, sticky | static         | _static_ Elements render in order, as they appear in the document flow. _fixed_ The element is positioned relative to the browser window. _absolute_ The element is positioned relative to its first positioned (not static) ancestor element. [More about positions](https://www.w3schools.com/cssref/pr_class_position.asp) |\\n| z-index                  | 1,2,3...999                               | 0              | _Only works on non-static elements_ Specifies a layering or stacking order for positioned elements.                                                                                                                                                                                                                           |\\n| top, bottom, left, right | 200px, 10%, 1rem                          | 0              | _Only works on non-static elements_ takes the first parent element with setted position relative as a referance. and from its borders positions itself.                                                                                                                                                                       |\\n\\n### Cursor\\n\\n| tag syntax | example of use                                                 | default styles | description                                                                    |\\n| ---------- | -------------------------------------------------------------- | -------------- | ------------------------------------------------------------------------------ |\\n| cursor     | pointer, progress, text, url, wait, none, url(\\"img/image.jpg\\") | auto           | specifies the look of mouse cursor when _hovering_ - pointing over an element. |\\n\\n### font styling\\n\\n| tag syntax      | example of use                                                     | default styles                          | description                                                                                                                                                                                                                                                                                                                                                                                                               |\\n| --------------- | ------------------------------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| font-family     | Open Sans, Roboto Slab, Oswald                                     | depends on the browser. Times New Roman | The font-family property specifies the font for an element. The font-family property can hold several font names as a \\"fallback\\" system. If the browser does not support the first font, it tries the next font.                                                                                                                                                                                                          |\\n| color           | blue, Tomato, DodgerBlue..., #fff, #f0f0f0, rgb(255,255,0)         | black                                   | Sets the color of the font                                                                                                                                                                                                                                                                                                                                                                                                |\\n| font-size       | 1rem, 2em, 24px                                                    | medium                                  | Sets the size of a font.                                                                                                                                                                                                                                                                                                                                                                                                  |\\n| font-style      | normal, italic                                                     | normal                                  | A way to make a text italic                                                                                                                                                                                                                                                                                                                                                                                               |\\n| font-weight     | 100, 200, 300, 400, 500, 600, 700, 800, 900, thin, regular, bold   | regular / 400                           | Sets the boldness of a font.                                                                                                                                                                                                                                                                                                                                                                                              |\\n| letter-spacing  | 1.2px, 2px                                                         | 1                                       | Specifies the area between all letters in a line of text. It is not to be confused with kerning, which refers to the manipulation of space between two individual letters. Kerning is not usually practiced on the web.                                                                                                                                                                                                   |\\n| line-height     | 1,1...                                                             | normal                                  | The line-height property specifies the height of a line.                                                                                                                                                                                                                                                                                                                                                                  |\\n| text-shadow     | _h-shadow v-shadow blur-radius color_                              | none                                    | Applies one or more shadows to the text content of an element. _h-shadow_ Required. The position of the horizontal shadow. Negative values are allowed _v-shadow_ Required. The position of the vertical shadow. Negative values are allowed _blur-radius_ Optional. The blur radius. Default value is 0 _color_ Optional. The color of the shadow. Look at CSS Color Values for a complete list of possible color values |\\n| text-transform  | none, capitalize, uppercase, lowercase                             | none                                    | Controls the capitalization of text.                                                                                                                                                                                                                                                                                                                                                                                      |\\n| text-decoration | _text-decoration-line text-decoration-color text-decoration-style_ | none                                    | Specifies the decoration added to text, optionally color and style of it. _text-decoration-line_ Sets the kind of text decoration to use (like underline, overline, line-through). _text-decoration-style_ Sets the style of the text decoration (like solid, wavy, dotted, dashed, double)                                                                                                                               |\\n| writing-mode    | horizontal-tb, vertical-rl, vertical-lr                            | horizontal-tb                           | specifies whether lines of text are laid out horizontally or vertically                                                                                                                                                                                                                                                                                                                                                   |\\n\\n### list styling\\n\\n| tag syntax | example of use                               | default styles | description                                                                                                                                                                                                   |\\n| ---------- | -------------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |\\n| list-style | square, circle, disc, none, url(\'image.png\') | none           | The list-style property is a shorthand for the following properties: list-style-type list-style-position list-style-image If one of the values are missing, the default value for that property will be used. |\\n\\n### image adjustments\\n\\nobject behaves similarly to background. Instead of an image setted via background-image it is applied on img element in html itself\\n\\n| tag syntax | example of use                         | default styles | description                                                                                                                                                                                                                                                                    |\\n| ---------- | -------------------------------------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |\\n| object-fit | fill, contain, cover, scale-down, none | 1              | The object-fit property is used to specify how an img or video should be resized to fit its container. This property tells the content to fill the container in a variety of ways; such as \\"preserve that aspect ratio\\" or \\"stretch up and take up as much space as possible\\". |\\n\\n### opacity\\n\\n| tag syntax | example of use                    | default styles | description                                                                                                     |\\n| ---------- | --------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------- |\\n| opacity    | from 0 (invisible) to 1 (visible) | 1              | Transparency level, where 1 is not transparent at all, 0.5 is 50% see-through, and 0 is completely transparent. |\\n\\n### transitions\\n\\n| tag syntax          | example of use | default styles | description                                                                                |\\n| ------------------- | -------------- | -------------- | ------------------------------------------------------------------------------------------ |\\n| transition-delay    | 0.3s, 300ms    | 0s             | Specifies when the transition effect will start.                                           |\\n| transition-duration | 0.3s, 300ms    | 0s             | Specifies how many seconds (s) or milliseconds (ms) a transition effect takes to complete. |\\n\\n[Here you can look at all the available properties and their values. Alphabetically sorted](\\"https://www.w3schools.com/cssref/\\")\\n"},{"id":4,"title":"Home","description":"Go back home. I mean, get started","author":"Aneta Camo","content":"\\n# Get Started\\n\\n### What is HTML and CSS?\\n\\n_HTML_ stands for hypertext markup language. It is a skeleton of elements a page consists of.\\n\\n_CSS_ stands for cascading stylesheets and is a way to style elements - _tags_ - defined in the html files. Via css you can for example control color, width, height, style the fonts etc..\\n\\n> _cascading_ means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to \\"blue\\", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!\\n\\n### Getting a code editor\\n\\nTo start you will need an program that will make it easy to write and read the code. Visual Studio Code is completely free and one of the most powerful and easy to use programs available.\\n\\n[Download VS Code here](https://code.visualstudio.com)\\n\\n### Check your web in browser\\n\\nCreate a folder on your desktop and open it in the VS Code. Here, create a new file and call it `index.html`. This will be a first file a web browser will look for when accessing your folder.\\n\\nGo to your browser and click `CMD + o` for mac and `CTRL + o` for windowa . Find your folder and open `index.html`. At this point your file might be empty. But this is a plce you will/can see all the code being executed! You can refresh the page with `CMD + r` for mac or `CTRL + r`.\\n\\n### Building the folder\\n\\nYour website might have more then a homepage named `index.html`. If so, those pages should be placed in the same folder and saved with their specific names: `about.html` and `contact.html` You will probably need a folder with images and a folder with styles. And this is how the structure of your folder might end up looking:\\n\\n```\\nhomepage/\\n-- index.html\\n-- about.html\\n-- contact.html\\n-- styles/\\n---- style.css\\n---- typography.css\\n-- images/\\n---- image01.jpg\\n---- image02.jpg\\n```\\n\\n### Inspecting element\\n\\nWhen you are coding most of the time it does not work. The best tool to help finding out where the problem is is a code inspector built in most of the big browsers like _chrome_ or _firefox_. Head to the browser with your web and hit `Cmd + O` or `Ctrl + O`. Here you can inspect the whole `DOM` structure. If you click on any of the `elements` you can see what styles are applied and you can add/remove or modify them to easily see how the page will look.\\n\\n### Shortcuts\\n\\n| Event                       | Shortcut on Windows | Shortcut on Mac |\\n| --------------------------- | ------------------- | --------------- |\\n| Find your folder in browser | Ctrl + O            | Cmd + O         |\\n| Refresh a page              | Ctrl + R            | Cmd + R         |\\n| Inspect an Element          | Ctrl + Shift + C    | Cmd + Shift + C |\\n| Inspect an Element          | Ctrl + Shift + C    | Cmd + Shift + C |\\n"},{"id":3,"title":"Excer Cises","description":"","author":"Aneta Camo","content":"\\n## Excercises\\n\\n### Create a button\\n\\nA button is a special element. When you _hover_ over it, it should notify you that you can interact with it by a change in its design.\\nThis kind of mouse event - when you scroll over it - is called `hover`.\\n\\nIn your css file you can actually add this _state_ to any of an elements by `element:hover { ... }` and style it the way you want to.\\n\\n> In order to get a _Smooth transition_ when hovering you can add in css `transition-duration: 350ms;` to a desired element.\\n\\n#### a plot twist.\\n\\nButton usually is a link: that means needs to be wrapped inside an `<a></a>` tag. But sometimes wrapping a _block_ element into an _inline_ element can cause trouble or throw an error. Therefore using a small work-around can be recomended: Instead of using a _button_ tag `<a><button>Click me</button></a>` a class called button can be simply added to `<a>` tag : `<a class=\\"button\\">Click me</a>`. Meanwhile in css:\\n\\n```css\\nbutton,\\n.button {\\n  border-radius: 8px;\\n  border: 4px solid blueviolet;\\n  background-color: transparent;\\n  color: blueviolet;\\n}\\n\\nbutton:hover,\\n.button:hover {\\n  background-color: blueviolet;\\n  color: white;\\n  transition-duration: 400ms;\\n}\\n```\\n\\n### A welcome screen\\n\\n### Favicon & meta descriptions\\n\\n### Add a logo\\n\\n### Build a menu\\n\\n### Create a custom pointer\\n\\n### Make a side menu\\n\\n### Build a responsive layout\\n"},{"id":6,"title":"Html","description":"How to write HTML document","author":"Aneta Camo","content":"\\n# Writing HTML\\n\\n### index.html structure\\n\\nEach html file consist of _body_ and a _head_.\\n**Head** is where you define settings for your page: where you link\\nthe styles, give a page name and an icon that will be displayed in the\\nbrowser window (_favicon_), etc.\\n\\n```html\\n<head>\\n  <title>The Homepage Title displayed in the browser windows</title>\\n  <link rel=\\"stylesheet\\" href=\\"/styles/style.css\\" />\\n  <link rel=\\"stylesheet\\" href=\\"/styles/typography.css\\" />\\n</head>\\n```\\n\\n**Body** is a place where you would write the actual code to be\\nrendered directly\\n\\n```html\\n<!DOCTYPE html>\\n<html>\\n  <head>\\n    <title>The Homepage Title displayed in the browser windows</title>\\n    <link rel=\\"stylesheet\\" href=\\"/styles/style.css\\" />\\n    <link rel=\\"stylesheet\\" href=\\"/styles/typography.css\\" />\\n  </head>\\n  <body>\\n    this is where the coding happens!\\n  </body>\\n</html>\\n```\\n\\n### Comment in html\\n\\nIn html and css (and any other language) you can write notes to yourself or anyone else. Every language has a specific way to render a comment. Comments will be published and accessible in the source code but will not interact with the code.\\n\\n`\x3c!-- this is a comment in html --\x3e `\\n"}]')},172:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),i=n(56),s=n.n(i);n(64);function r(e){if(void 0!==e)return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var l=n(25),d=n(1),c=function(e){var t=e.item;return Object(d.jsxs)(l.b,{to:r(t.title),children:[Object(d.jsx)("img",{src:"/coding/images/".concat(r(t.title),".png"),alt:t.title}),Object(d.jsx)("li",{children:t.title})]})},h=n(14),p=function(){return Object(d.jsx)("div",{class:"menu bg-blueviolet",children:Object(d.jsx)("div",{class:"container flex",children:h.map((function(e){return Object(d.jsx)(c,{item:e})}))})})},u=function(){return console.log(h),Object(d.jsx)("div",{className:"container-wide",children:Object(d.jsx)("div",{className:"flex box-container",children:h.map((function(e){return Object(d.jsx)("a",{href:r(e.title),className:"box",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{src:"/coding/images/".concat(r(e.title),".png"),alt:e.title}),Object(d.jsx)("h5",{children:e.title}),Object(d.jsx)("p",{children:e.description})]})})}))})})},f=n(58),m=n.n(f),g=n(59),b=n.n(g),y=function(e){var t=e.match.path.substring(1);return Object(d.jsx)("div",{children:h.map((function(e){return r(e.title)===t?Object(d.jsx)(m.a,{plugins:[b.a],children:e.content,allowDangerousHtml:!0}):null}))})},w=n(2);var x=function(){return Object(d.jsxs)(l.a,{children:[Object(d.jsx)(p,{}),Object(d.jsx)("div",{className:"container blog-text",children:Object(d.jsxs)(w.c,{children:[Object(d.jsx)(w.a,{path:"/home",exact:!0,component:y}),Object(d.jsx)(w.a,{path:"/html",component:y}),Object(d.jsx)(w.a,{path:"/css",component:y}),Object(d.jsx)(w.a,{path:"/css-props",component:y}),Object(d.jsx)(w.a,{path:"/html-tags",component:y}),Object(d.jsx)(w.a,{path:"/excer-cises",component:y})]})}),Object(d.jsx)(u,{})]})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root"))},64:function(e,t,n){}},[[172,1,2]]]);
//# sourceMappingURL=main.310ecac5.chunk.js.map