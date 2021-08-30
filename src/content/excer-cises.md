---
title: Excercises
menu: true
---

## Excercises

### Create a button

A button is a special element. When you _hover_ over it, it should notify you that you can interact with it by a change in its design.

[more about states](#/css)

> In order to get a _Smooth transition_ when hovering you can add in css `transition-duration: 500ms;` to a desired element.

#### a plot twist.

Button usually is a link: that means, needs to be wrapped inside an `<a></a>` tag. But sometimes wrapping a _block_ element into an _inline_ element is not considered a best practice. Therefore using a small work-around can be recomended: Instead of using a _button_ tag `<a><button>Click me</button></a>` a class called button can be simply added to `<a>` tag : `<a class="button">Click me</a>`. Meanwhile in css:

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

```html
<section>
  <div class="intro">
    <h1>Hello</h1>
    <p>Wellcome</p>
    <button>Read more</button>
  </div>
</section>
```

### an mail signature

### Adding a logo

### Build a menu

Notice a use of `<nav>` tag.

```html
<nav class="menu">
  <div>
    <a href="about.html">About</a>
  </div>
  <div>
    <a href="oats.html">Oats</a>
  </div>
  <div>
    <a href="contact.html">Contact</a>
  </div>
</nav>
```

#### Build a second-level menu

```html
<nav class="menu">
  <ul>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="oats.html">Oats</a>
      <ul class="secondary">
        <li>
          <a href="morning.html">Morning Oats</a>
        </li>
        <li>
          <a href="afternoon.html">Afternoon Oats</a>
        </li>
        <li>
          <a href="evening.html">Evening Oats</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</nav>
```

<nav class="test-menu">
  <ul>
    <li>
      <a href="about.html">About</a>
    </li>
    <li>
      <a href="oats.html">Oats</a>
      <ul class="secondary">
        <li>
          <a href="morning.html">Morning Oats</a>
        </li>
        <li>
          <a href="afternoon.html">Afternoon Oats</a>
        </li>
        <li>
          <a href="evening.html">Evening Oats</a>
        </li>
      </ul>
    </li>
    <li>
      <a href="contact.html">Contact</a>
    </li>
  </ul>
</nav>

#### add a hamburger menu

### Favicon & meta descriptions

### Create a custom pointer

### Make a side menu

### Coding a slider

### Custom Text-highlighting

### Build a responsive layout

### Flexbox item list

### Carousel
