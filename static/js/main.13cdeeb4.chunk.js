(this.webpackJsonpcwm=this.webpackJsonpcwm||[]).push([[0],{13:function(e){e.exports=JSON.parse('[{"greet":"life is meaning less.","image2":"/coding/images/boom3.png","quote":"CODING IS BORING.","more2":"Life is meaningless. Identity is a construct. Free will doesnt exist. ","button":"Get Started"},{"greet":"so are you!","image2":"/coding/images/boom3.png","quote":"Coding is difficult.","more2":"Working in a McDonnald and smelling like fries for the whole life is difficult","button":"McDonnald recruitment page"},{"greet":"<omg />","image2":"/coding/images/boom3.png","quote":"I never wanted to do this.","button":"I am leaving this site"}]')},15:function(e){e.exports=JSON.parse('[{"id":3,"title":"Css","description":"How to write css","author":"Aneta Camo","content":"\\n# How to write css\\n\\nStyles are defined in the files ending with `.css`\\n\\nThose css file/s are linked in the head of **html document** we want to style. Filenames are case sensitive. Here is the only one file called `style.css` being linked.\\n\\n```html\\n<head>\\n  <title></title>\\n  <link rel=\\"stylesheet\\" href=\\"/style.css\\" />\\n</head>\\n```\\n\\nFirst, we need to reference an element from html document that we want to style. We have a three paragraphs in `index.html`.\\n\\n```html\\n<head>\\n  <title></title>\\n  <link rel=\\"stylesheet\\" href=\\"/style.css\\" />\\n</head>\\n<body>\\n  <div>\\n    <p class=\\"highligted\\">first paragraph is violet</p>\\n    <p>second paragraph is gray</p>\\n    <p>third paragraph is gray</p>\\n  </div>\\n</body>\\n```\\n\\nAnd we want them to be all in gray font, the first paragraph violet. Default color is black. So this is is what we have rendered in the browser without any styles applied:\\n\\nfirst paragraph is violet<br />\\nsecond paragraph is gray<br />\\nthird paragraph is gray\\n\\nSo now in `style.css` we are giving all the paragraphs `p { ... }` _gray color_ by writing `color:gray;` into curly parenthesis.\\n\\nThen, we will call an element with `class=\'blueviolet\'` by writing `.highlighted { ... }` and giving it `color: blueviolet;`. So the previously setted color:gray on all paragraphs will be overwritten with _blueviolet_ color for this specific case with class. See the most commonly used pairs of css properties and its values <a href=\'#css\'>here</a>.\\n\\n# We can reference all preset tag names like `h1, li, p... { ... }`or a specific class name given to any element, for example `.highligted { ... }`.\\n\\nA class in css document is always called by writing a dot before its name. Tag names do not have a dot.\\n\\n```css\\np {\\n  color: gray;\\n}\\n.highlighted {\\n  color: blueviolet;\\n}\\n```\\n\\n<p class=\'gray\'>\\n  <span class=\'blueviolet\'>first paragraph is violet</span><br />\\n  second paragraph is gray<br />\\n  third paragraph is gray\\n</p> \\n    \\n> **The latest style defined in the css document will always overwrite previously defined styles.** See how the colors render differently when the order is reversed. First we give elements with class `.highlighted` **blueviolet** color, but then we actually overwrite this style by giving color **gray** to all paragraphs.\\n\\n```css\\n.highlighted {\\n  color: blueviolet;\\n}\\np {\\n  color: gray;\\n}\\n```\\n\\n### Comment in css\\n\\n`*/ this is a comment /*`\\n"},{"id":4,"title":"Excer Cises","description":"","author":"Aneta Camo","content":"\\n## Excercises\\n\\n### Create a button\\n\\nA button is a special element. When you _hover_ over it, it should notify you that you can interact with it by a change in its design.\\nThis kind of mouse event - when you scroll over it - is called `hover`.\\n\\nIn your css file you can actually add this _state_ to any of an elements by `element:hover { ... }` and style it the way you want to.\\n\\n> In order to get a _Smooth transition_ when hovering you can add in css `transition-duration: 350ms;` to a desired element.\\n\\n#### a plot twist.\\n\\nButton usually is a link: that means needs to be wrapped inside an `<a></a>` tag. But sometimes wrapping a _block_ element into an _inline_ element can cause trouble or throw an error. Therefore using a small work-around can be recomended: Instead of using a _button_ tag `<a><button>Click me</button></a>` a class called button can be simply added to `<a>` tag : `<a class=\\"button\\">Click me</a>`. Meanwhile in css:\\n\\n```css\\nbutton,\\n.button {\\n  border-radius: 8px;\\n  border: 4px solid blueviolet;\\n  background-color: transparent;\\n  color: blueviolet;\\n}\\n\\nbutton:hover,\\n.button:hover {\\n  background-color: blueviolet;\\n  color: white;\\n  transition-duration: 400ms;\\n}\\n```\\n\\n### A welcome screen\\n\\n### an mail signature\\n\\n### Adding a logo\\n\\n### Build a menu\\n\\n### Favicon & meta descriptions\\n\\n### Create a custom pointer\\n\\n### Make a side menu\\n\\n### Coding a slider\\n\\n### Custom Text-highlighting\\n\\n### Build a responsive layout\\n\\n### Flexbox item list\\n\\n### Carousel\\n"},{"id":1,"title":"React","description":"List of the most useful CSS properties and examples of use","author":"Aneta Camo","content":"\\n\xb4\xb4\xb4html\\n\\nnpm run server  \\nnpm run deploy\\nnpm start\\n\\n\xb4\xb4\xb4\\n"},{"id":7,"title":"Html","description":"How to write HTML document","author":"Aneta Camo","content":"\\n# Writing HTML\\n\\n### index.html structure\\n\\nEach html file consist of _body_ and a _head_.\\n**Head** is where you define settings for your page: where you link\\nthe styles, give a page name and an icon that will be displayed in the\\nbrowser window (_favicon_), etc.\\n\\n```html\\n<head>\\n  <title>The Homepage Title displayed in the browser windows</title>\\n  <link rel=\\"stylesheet\\" href=\\"/styles/style.css\\" />\\n  <link rel=\\"stylesheet\\" href=\\"/styles/typography.css\\" />\\n</head>\\n```\\n\\n**Body** is a place where you would write the actual code to be\\nrendered directly\\n\\n```html\\n<!DOCTYPE html>\\n<html>\\n  <head>\\n    <title>The Homepage Title displayed in the browser windows</title>\\n    <link rel=\\"stylesheet\\" href=\\"/styles/style.css\\" />\\n    <link rel=\\"stylesheet\\" href=\\"/styles/typography.css\\" />\\n  </head>\\n  <body>\\n    this is where the coding happens!\\n  </body>\\n</html>\\n```\\n\\n### Comment in html\\n\\nIn html and css (and any other language) you can write notes to yourself or anyone else. Every language has a specific way to render a comment. Comments will be published and accessible in the source code but will not interact with the code.\\n\\n`\x3c!-- this is a comment in html --\x3e `\\n"}]')},174:function(e,n,t){"use strict";t.r(n);var s=t(1),i=t.n(s),a=t(58),o=t.n(a);t(66);function r(e){if(void 0!==e)return e.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w-]+/g,"").replace(/--+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}var l=t(26),c=t(0),h=function(e){var n=e.item;return Object(c.jsxs)(l.b,{to:r(n.title),children:[Object(c.jsx)("img",{src:"/coding/images/".concat(r(n.title),".png"),alt:n.title}),Object(c.jsx)("li",{children:n.title})]})},d=t(15),u=function(){return Object(c.jsx)("div",{class:"menu bg-blueviolet",children:Object(c.jsx)("div",{class:"container flex",children:d.map((function(e){return Object(c.jsx)(h,{item:e})}))})})},m=function(){return console.log(d),Object(c.jsx)("div",{className:"container-wide",children:Object(c.jsx)("div",{className:"flex box-container",children:d.map((function(e){return Object(c.jsx)("a",{href:"/#/".concat(r(e.title)),className:"box",children:Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:"/coding/images/".concat(r(e.title),".png"),alt:e.title}),Object(c.jsx)("h5",{children:e.title}),Object(c.jsx)("p",{children:e.description})]})})}))})})},g=t(60),p=t.n(g),b=t(61),j=t.n(b),y=function(e){var n=e.match.path.substring(1);return Object(c.jsx)("div",{className:"container blog-text",children:d.map((function(e){return r(e.title)===n?Object(c.jsx)(p.a,{plugins:[j.a],children:e.content,allowDangerousHtml:!0}):null}))})},f=t(42),w=t(13),x=function(e){var n=e.children,t=e.onButtonClick,s=e.nameClass;return Object(c.jsx)("div",{className:s||null,role:"button",onClick:t,onKeyDown:t,tabIndex:0,"aria-label":"switch the carousel",children:n})},v=function(e){var n=e.onCarouselSwipe,t=e.nameClass;return Object(c.jsx)(x,{onButtonClick:n,nameClass:t,children:Object(c.jsxs)("div",{className:"animated flex-center",children:[Object(c.jsx)("img",{src:"/coding/images/html-tags.png"}),Object(c.jsx)("img",{src:"/coding/images/blob.png",className:"boom"})]})})},O=function(){var e=i.a.useState(0),n=Object(f.a)(e,2),t=n[0],a=n[1],o=i.a.useState(!1),r=Object(f.a)(o,2),l=r[0],h=r[1],d=w.length-1;Object(s.useEffect)((function(){var e=setInterval((function(){setTimeout((function(){h(!0)}),2e3),u(),setTimeout((function(){h(!1)}),3e3)}),3e3);return function(){return clearInterval(e)}}),[t]);var u=function(){a(t!==d?t+1:0)};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"carousel",children:Object(c.jsx)("section",{children:Object(c.jsxs)("div",{className:"flex-center",style:{backgroundColor:"white",padding:80},children:[Object(c.jsx)(v,{onCarouselSwipe:function(){a(0!==t?t-1:d)},nameClass:"arrow-left"}),Object(c.jsxs)("div",{className:"flex-center slide-cont ".concat(l&&"dissapear"),children:[Object(c.jsxs)("div",{className:"boom-container flex-center",children:[Object(c.jsx)("h2",{children:w[t].greet}),Object(c.jsx)("img",{src:w[t].image2,className:"boom"})]}),Object(c.jsxs)("div",{className:"slide-text-container",children:[Object(c.jsx)("h5",{}),Object(c.jsx)("h1",{children:w[t].quote}),Object(c.jsx)("p",{children:w[t].more}),Object(c.jsx)("a",{href:"/coding/#/home",children:Object(c.jsx)("button",{children:w[t].button})})]})]}),Object(c.jsx)(v,{onCarouselSwipe:u,nameClass:"arrow-right"})]})})}),Object(c.jsx)("div",{className:"dots flex-center",children:w.map((function(e,n){return Object(c.jsx)(x,{onButtonClick:function(){return a(n)},nameClass:"dot ".concat(n===t?"active":null)})}))})]})},C=t(2);var k=function(){return Object(c.jsxs)(l.a,{children:[Object(c.jsx)(u,{}),Object(c.jsxs)(C.c,{children:[Object(c.jsx)(C.a,{path:"/",exact:!0,component:O}),Object(c.jsx)(C.a,{path:"/home",component:y}),Object(c.jsx)(C.a,{path:"/html",component:y}),Object(c.jsx)(C.a,{path:"/css",component:y}),Object(c.jsx)(C.a,{path:"/css-props",component:y}),Object(c.jsx)(C.a,{path:"/html-tags",component:y}),Object(c.jsx)(C.a,{path:"/excer-cises",component:y})]}),Object(c.jsx)(m,{})]})};o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root"))},66:function(e,n,t){}},[[174,1,2]]]);
//# sourceMappingURL=main.13cdeeb4.chunk.js.map