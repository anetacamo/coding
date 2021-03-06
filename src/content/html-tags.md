---
title: Html Tags
description: List of most commonly used html tags
---

# Most commonly used HTML tags

### div

```html
<div></div>
```

Div is a shortcut for a _divider_. It is a basic unit - _a building block_ of the html document. We can imagine it as an - by default - unvisible empty container.

[more about divs](/#div)

### images and links

| tag syntax              | example of use                                           | default styles         | description                                                                                                                                                                                                                                              |
| ----------------------- | -------------------------------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<img src="" alt="" />` | `<img src= "/img/dog.png" alt="a dog eating a salad" />` | display: inline-block; | **Images** _src_ attribute accepts both local and external links to images. _alt_ tag is important for SEO valiadation. That is a place to write some descriptive text about image for people with vision imparement who get the websites read out loud. |
| `<a href=""></a>`       | `<a href= "/file.html" target="_blank">learn html</a>`   | --------------         | **Links** This is a link to the _local_ file called `about.html` in your folder. `target="_blank"` opens the link in new tab.                                                                                                                            |

### body & Head

Each html document consists of head and body pair tag that is displayed only once wrapped inside html pair tag.

| tag syntax      | example of use | default styles               | description                                                                                                                                                                                |
| --------------- | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `<html></html>` |                |                              | **Html tag** Each html document consists of head and body tag wrapped in pair of html tags.                                                                                                |
| `<body></body>` |                | display: block; margin: 8px; | **Body** wraps in all the directly rendered code of html page. Each html document consists of head and body tag.                                                                           |
| `<head></head>` |                | display: none;               | **Head** is a place where indirect settings of the page are defined: external documents are linked, favicon and page name is setted etc. Each html document consists of head and body tag. |

### paragraphs and heading styles

| tag syntax                                                              | example of use | default styles               | description                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------- | -------------- | ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<p></p>`                                                               |                |                              | **Paragraph** is a common body text.                                                                                                                                                                                                                                                              |
| `<h1></h1>` `<h2></h2>` `<h3></h3>` `<h4></h4>` `<h5></h5>` `<h6></h6>` |                | display: block; margin: 8px; | **Headings** _h1_ is a main title, rendered in the biggest and boldest letters by default. It should be used only once on each page and should work as a main title of a page, for improving the SEO. _h2_ is a second level, and the higher the number the smaller and less bold letters become. |
| `<blockquote></blockquote>`                                             |                | display: none;               | **Quotation style** highlighted paragraph                                                                                                                                                                                                                                                         |

### text highlighting

| tag syntax  | example of use | default styles | description                                                                |
| ----------- | -------------- | -------------- | -------------------------------------------------------------------------- |
| `<i></i>`   |                |                | _Italic text_ Makes a text that is written within the tags italic.         |
| `<b></b>`   |                |                | _Bold text_ Makes a text that is written within the tags bold.             |
| `<u></u>`   |                |                | _Underlined text_ Underlines a text written within the tags.               |
| `<em></em>` |                |                | _Emphasized text_ Makes a text that is written within the tags emphasized. |

### New Line

| tag syntax | example of use | default styles | description                                      |
| ---------- | -------------- | -------------- | ------------------------------------------------ |
| `<br />`   |                |                | _New line_ Non pair element. Creates a new line. |

### Button

| tag syntax           | example of use | default styles | description                                                          |
| -------------------- | -------------- | -------------- | -------------------------------------------------------------------- |
| `<button><button />` |                |                | **Button** A text between will be rendered as a button to be clicked |

### LISTS

`<ul></ul>`

_unordered list_ - displays only bullets

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
      
`<ol></ol>`
      
_ordered list_ - displays numbers
    
```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<!---
### form

If the name attribute is omitted, the value of the input field will not be sent at all.

`<label><label/>`
`<input><input/>`
`<form><form/>`
`<select><select/>`
`<option><option/>`

```html
<form action="mailto:you@yourdomain.com ">
  <label for="fname">First Name:</label>
  <input type="text" id="fname" name="fname" value="your mail" />
  <label for="email">Email:</label>
  <input type="email" name="mail" id="mail" name="mail" value="mail" />
  Select an option:
  <select>
    <option>Love</option>
    <option selected>Money</option>
    <option>Bananas</option>
  </select>
  Select an option:
  <input type="radio" id="male" name="gender" value="male" />
  <label for="male">Male</label><br />
  <input type="radio" id="female" name="gender" value="female" />
  <label for="female">Female</label><br />
  <input type="radio" id="other" name="gender" value="other" />
  <label for="other">Other</label>
  <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
  <label for="vehicle1"> I have a bike</label><br />
  <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
  <label for="vehicle2"> I have a car</label><br />
  <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
  <label for="vehicle3"> I have a boat</label>
  <input type="submit" />
</form>
```
-->

### TABLE

Table as default does not have a lot of styling. To get the look applied on the following form some styling in css needs to be done.

`<table></table>`<br/>
`<tr></tr>`<br/>
`<th></th>`<br/>
`<td></td>`

```html
<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$1</td>
  </tr>
</table>
```

<table>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>- $100</td>
  </tr>
</table></pre>

```css
table {
  border-collapse: collapse;
}

td,
th {
  border: 4px solid blueviolet;
  padding: 8px;
}
th {
  text-align: left;
  background-color: blueviolet;
  color: white;
}

table pre {
  background-color: black;
  color: white;
}
table code {
  white-space: normal;
}
```

## More about html elements

### div and its family tree

```html
<div class="somename">some content</div>
```

Div is mostly here to receive content in between its tags `<div>some content<div>` and a name by setting a class `class="somename"`. And then,to be called by its (class)name and styled in _css document_. For example, receive a background color, width or height etc.

Div are essential for keeping the content of html document structured. It may not seem obvious at the beggining but as the content of the page grows, some elements in layout might become duplicated or very similar. Then divs become very helpful.

For example a content that should be displayed in frame can be wrapped in div with class `class="framed"` that will have a styled frame and will be easy to reuse throughout the web/project.
Therefore wrapping some basic repeated content - for example _paragraphs, headings or images_ - into divs with the same classname enables to easily give them same features. For example background color.

### pair vs non-pair element

Div is always a _pair_ element. It means it will always consist of a double tag: an opening tag without a dash `<div>` and a closing tag with a dash`</div>`. It is an essential feature for wrapping more content in. If one of the tags is missing it will break the desired flow of the whole project.

A _non-pair_ element. For example `<img />` or `<input />` They are already content themselfs, they cannot contain anymore elements, therefore they are single tags.

Divs are pretty much all about hierarchy:

```html
<div></div>
<div></div>

<div></div>
<div></div>
```

vs

```html
<div><div></div></div>

<div>
  <div></div>
</div>
```
