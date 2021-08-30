---
title: React
description: How to write React
---

React is a declarative, efficient, and flexible JavaScript library

## Create react app

`create-react-app my-app`

`npm start`

## enable linking

`npm install --save react-router-dom`
`npm i sass`

## add code highligter

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
