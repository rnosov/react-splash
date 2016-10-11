# React Splash

Easily add splash images with animated text to React web sites. Requires React and CSS flexbox browser support.

[Live Demo](https://www.solarleague.org/) - The big image on the front page with the animated words "Solar League" written over it.

## tl;dr

In the command prompt run:

```sh
npm install react-splash --save

```

Import all necessary modules:

```javascript
import Splash from 'react-splash';
```

Somewhere in your **render** method:

```javascript
<Splash 
  text="Project Name" 
  src="https://source.unsplash.com/FxU8KV7psMY/1600x900" 
  style={{ height: '70vh' }}
/>
```

## Documentation

### Properties

- `text` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Animated text covering the splash image. At the moment, the maximum is two words only. Defaults to "React Splash".  **Optional**.

- `src` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)** Image source for the splash image. Defaults to "https://source.unsplash.com/weekly". **Optional**.

- `style` **[object](https://facebook.github.io/react/tips/inline-styles.html)** React inline styles object. Useful for setting splash image height. Defaults to  { height: '100vh' }. **Optional**.

### Children

Children are **ignored**.

### Universal Rendering

This component is compatible with universal or server side rendering (SSR).

## Step by Step Instructions

In order to start from scratch we'll use Facebook react starter kit called [Create React App](https://github.com/facebookincubator/create-react-app). In the command prompt type:


```sh
npm install -g create-react-app

create-react-app my-app
cd my-app/
npm install react-splash --save
subl src/App.js #open with Sublime Text. Or use any other text editor.
npm start

```

Copy and paste the following code into app.js:

```javascript

import React, { Component } from 'react';
import Splash from 'react-splash';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Splash 
          text="Project Name" 
          src="https://source.unsplash.com/FxU8KV7psMY/1600x900" 
          style={{ height: '60vh' }}
        />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
```

Save it, then open [http://localhost:3000/](http://localhost:3000/) to see the result.

## Forking This Package

Clone the this repository using the following command:

```sh
git clone https://github.com/rnosov/react-splash.git
```

In the cloned directory, you can run following commands:

### `npm install`

Installs required node modules

### `npm run build`

Builds the package for production to the `dist` folder

### `npm test`

Runs tests

## License

Copyright © 2016 Roman Nosov. This source code is licensed under the MIT license.
