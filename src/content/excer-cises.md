---
title: Excer Cises
---

## Excercises

### Create a button

A button is a special element. When you _hover_ over it, it should notify you that you can interact with it by a change in its design.
This kind of mouse event - when you scroll over it - is called `hover`.

In your css file you can actually add this _state_ to any of an elements by `element:hover { ... }` and style it the way you want to.

> In order to get a _Smooth transition_ when hovering you can add in css `transition-duration: 350ms;` to a desired element.

#### a plot twist.

Button usually is a link: that means needs to be wrapped inside an `<a></a>` tag. But sometimes wrapping a _block_ element into an _inline_ element can cause trouble or throw an error. Therefore using a small work-around can be recomended: Instead of using a _button_ tag `<a><button>Click me</button></a>` a class called button can be simply added to `<a>` tag : `<a class="button">Click me</a>`. Meanwhile in css:

```css
button,
.button {
  border-radius: 8px;
  border: 4px solid blueviolet;
  background-color: transparent;
  color: blueviolet;
}

button:hover,
.button:hover {
  background-color: blueviolet;
  color: white;
  transition-duration: 400ms;
}
```

### A welcome screen

### an mail signature

### Adding a logo

### Build a menu

### Favicon & meta descriptions

### Create a custom pointer

### Make a side menu

### Coding a slider

### Custom Text-highlighting

### Build a responsive layout

### Flexbox item list

### Carousel
