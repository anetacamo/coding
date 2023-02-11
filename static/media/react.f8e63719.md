---
title: React
description: How to write React
tags: [js, typescript, framework]
type: learning
---

React is a declarative, efficient, and flexible JavaScript library

## Create react app

`create-react-app my-app`

`npm start`

`yarn start`

## lifecycle

The three phases are: Mounting, Updating, and Unmounting.

### Mounting

mounting means putting elements into the DOM.
_The constructor()_ method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

_The getDerivedStateFromProps()_ method is called right before rendering the element(s) in the DOM
It takes state as an argument, and returns an object with changes to the state.

The _render()_ method actually outputs the HTML to the DOM

The _componentDidMount()_ method is called after the component is rendered.
This is where you run statements that requires that the component is already placed in the DOM

### Updating

A component is updated whenever there is a change in the component's state or props.

- getDerivedStateFromProps()
- shouldComponentUpdate()
- render()
- getSnapshotBeforeUpdate()
- componentDidUpdate()

The _render()_ method is required and will always be called, the others are optional and will be called if you define them.

### Unmounting

The next phase in the lifecycle is when a component is removed from the DOM, or unmounting as React likes to call it.

The _componentWillUnmount_ method is called when the component is about to be removed from the DOM

## react hooks

A Hook is a special function that lets you “hook into” React features

### useState

enables function component to use a state feature.

`const [fruit, setFruit] = useState('banana');`

_Tip: What Do Square Brackets Mean?_
This JavaScript syntax is called “array destructuring”. It means that we’re making two new variables fruit and setFruit, where fruit is set to the first value returned by useState, and setFruit is the second. It is equivalent to this code:

```js
var fruitStateVariable = useState('banana'); // Returns a pair
var fruit = fruitStateVariable[0]; // First item in a pair
var setFruit = fruitStateVariable[1]; // Second item in a pair
```

useState returns a pair — an array with two items. The first item is the current value, and the second is a function that lets us update it. Using [0] and [1] to access them is a bit confusing because they have a specific meaning. This is why we use array destructuring instead.

### useEffect

By default, it runs both after the first render and after every update.

The Effect Hook lets you perform side effects in function components:
_Data fetching, setting up a subscription, and manually changing the DOM in React_ components are all examples of side effects.

_you can think of useEffect Hook as componentDidMount, componentDidUpdate, and componentWillUnmount combined._
something to be done after every render; after performing the DOM updates

Unlike componentDidMount or componentDidUpdate, effects scheduled with useEffect don’t block the browser from updating the screen.

## enable linking

`npm install --save react-router-dom`
`npm i sass`

## code highligter

`npm start`

`npm install --save prismjs`

```js
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import './styles.css';

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <div className='Code'>
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}
```

## Publish to gitHub

#### 1. Create an empty repository on GitHub.

Head over to your GitHub account and create a repository with the same name as the React project.

#### 2. Install the gh-pages package as a "dev-dependency" of the app.

```git
cd my-app
npm install gh-pages --save-dev
```

or

```git
yarn add gh-pages
```

#### 3. Add properties to package.json file.

```json
"homepage":"http://{username}.github.io/{repo-name}"
```

And at the beggining of `scritps`:

```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

#### 4. initialize + Add GitHub repo as a remote in your local git repository.

```git
git init
git remote add origin git@github.com:anetacamo/my-app.git
```

or

```
git remote add origin https://github.com/anetacamo/my-app
```

#### 5. configure an upstream branch and set the remote as origin

After executing the command above, we can't push our code yet. First, we need to configure an upstream branch and set the remote as origin.

```git
git push --set-upstream origin master
```

#### 6. Deploy!

```git
npm run deploy
```

> This will create a branch named `gh-pages` to host your app. On the homepage property in package.json.

#### 7. Make a working repo and keep it updated

```
git add .
git commit -m "Your message"
git push origin master
```

### class vs functional component

In class components, the render method will be called, whenever the state of the components changes. On the other hand, the Functional components render the UI based on the props.

> BUT: React Hooks are a complete and better replacement for Classes

### constant component

```js
const MyComponent = () => {
    return(
      ..
    )
}

export default MyComponent
```

### functional component

```js
function MyComponent() {
    return(
      ..
    )
}

export default function MyComponent() {}
```

```js
slides={range(1, 8).map(id => ({
    image: {
        src: `references/case-studies/citymove/carousel/${id}.png`,
    },
}))}
```
