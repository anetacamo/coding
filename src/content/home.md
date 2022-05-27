---
title: Home
description: Go back home. I mean, get started
---

# Get Started 2

### What is HTML and CSS?

_HTML_ stands for hypertext markup language. It is a skeleton of elements a page consists of.

_CSS_ stands for cascading stylesheets and is a way to style elements - _tags_ - defined in the html files. Via css you can for example control color, width, height, style the fonts etc..

> _cascading_ means that a style applied to a parent element will also apply to all children elements within the parent. So, if you set the color of the body text to "blue", all headings, paragraphs, and other text elements within the body will also get the same color (unless you specify something else)!

### Getting a code editor

To start you will need an program that will make it easy to write and read the code. Visual Studio Code is completely free and one of the most powerful and easy to use programs available.

[Download VS Code here](https://code.visualstudio.com)

### Check your web in browser

Create a folder on your desktop and open it in the VS Code. Here, create a new file and call it `index.html`. This will be a first file a web browser will look for when accessing your folder.

Go to your browser and click `CMD + o` for mac and `CTRL + o` for windowa . Find your folder and open `index.html`. At this point your file might be empty. But this is a plce you will/can see all the code being executed! You can refresh the page with `CMD + r` for mac or `CTRL + r`.

### Building the folder

Your website might have more then a homepage named `index.html`. If so, those pages should be placed in the same folder and saved with their specific names: `about.html` and `contact.html` You will probably need a folder with images and a folder with styles. And this is how the structure of your folder might end up looking:

```
homepage/
-- index.html
-- about.html
-- contact.html
-- styles/
---- style.css
---- typography.css
-- images/
---- image01.jpg
---- image02.jpg
```

### Inspecting element

When you are coding most of the time it does not work. The best tool to help finding out where the problem is is a code inspector built in most of the big browsers like _chrome_ or _firefox_. Head to the browser with your web and hit `Cmd + O` or `Ctrl + O`. Here you can inspect the whole `DOM` structure. If you click on any of the `elements` you can see what styles are applied and you can add/remove or modify them to easily see how the page will look.

### Shortcuts

| Event                       | Shortcut on Windows | Shortcut on Mac |
| --------------------------- | ------------------- | --------------- |
| Find your folder in browser | Ctrl + O            | Cmd + O         |
| Refresh a page              | Ctrl + R            | Cmd + R         |
| Inspect an Element          | Ctrl + Shift + C    | Cmd + Shift + C |
| Inspect an Element          | Ctrl + Shift + C    | Cmd + Shift + C |
