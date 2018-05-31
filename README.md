<div align="center">
  <img alt="logo" src="https://github.com/victorvoid/react-button-loaders/blob/master/react-button-loaders-logo.png">
</div>
<div align="center">  
  
  [![Build Status](https://travis-ci.org/victorvoid/react-button-loaders.svg?branch=master)](https://travis-ci.org/victorvoid/react-button-loaders)
  [![NPM version][npm-image]][npm-url]
  [![node version][node-image]][node-url]
  [![npm download][download-image]][download-url]

  [npm-image]: http://img.shields.io/npm/v/react-button-loaders.svg?style=flat-square
  [npm-url]: http://npmjs.org/package/react-button-loaders
  [node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg?style=flat-square
  [node-url]: http://nodejs.org/download/
  [download-image]: https://img.shields.io/npm/dm/react-button-loaders.svg?style=flat-square
  [download-url]: https://npmjs.org/package/react-button-loaders

  
  <strong>A collection of loading buttons easily customizable.</strong>
</div>

💁 Demo
-------

- [Storybook Playground](https://victorvoid.me/react-button-loaders/) 🌈

Install :memo:
------------

```sh
$ npm install react-button-loaders --save
```

Usage :eyeglasses:
------------
```js
import React, { Component } from 'react'
import { Lion as Button } from 'react-button-loaders'

class App extends Component {
  state = {
    btnState: ''
  }
  
  handleClick = () => {
    this.setState({sendState: 'loading'})
    //simulating an API
    setTimeout(() => {
      this.setState({sendState: ''})
    }, 3000)
  }
  
  render(){
    return (
      <section>
        <Button onClick={this.handleClick} state={this.state.sendState}>Send</Button>
      </section>
    )
  }
}

export default App
```

Common API :bulb:
------------

The following APIs are shared by all Buttons.

| Name         | Type    | Default | Description |
| ------------ | ------- | ------- | ----------- |
| className | string | `''` | Additional CSS class for the button |
| speedProgress | number | `3000` | The loading speed |
| speedIconLoader | number | `800` | The speed of icon loading |
| refreshComponent | `Component` | [Component](https://github.com/victorvoid/react-button-loaders/blob/master/src/lib/components/Icons.js#L3) | Change the component that is displayed while loading|
| checkComponent | `Component` | [Component](https://github.com/victorvoid/react-button-loaders/blob/master/src/lib/components/Icons.js#L14) | Change the icon component that is displayed while loading |
| onClick | Function | NOOP | `onClick` will be triggered when button is Clicked |
| bgColor | string | ![#F06189](https://placehold.it/15/F06189/000000?text=+) `#F06189` | Change background button color |
| bgLoading | string | ![#F06189](https://placehold.it/15/F06189/000000?text=+) `#F06189` | Change background button color when is loading|
| bgWhenFinish | string | ![#4AD481](https://placehold.it/15/4AD481/000000?text=+) `#4AD481` | Change background button color when is loaded
| bgLoadingBehind | string | ![#D7E3EF](https://placehold.it/15/D7E3EF/000000?text=+) `#D7E3EF` | Change background color if loader has 2 backgrounds|


Available buttons :fishing_pole_and_fish:
------------

- [Beetle](https://victorvoid.me/react-button-loaders/?selectedKind=Buttons%2FBeetle&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=dump247%2Fstate%2Fpanel)
- [Lion](https://victorvoid.me/react-button-loaders/?selectedKind=Buttons%2FLion&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=dump247%2Fstate%2Fpanel)
- [Rabbit](https://victorvoid.me/react-button-loaders/?selectedKind=Buttons%2FRabbit&selectedStory=default&full=0&addons=1&stories=1&panelRight=0&addonPanel=dump247%2Fstate%2Fpanel)

## Help us create more awesome buttons :gift_heart:

```
npm install
npm start
```

## License

`react-button-loaders` is released under the MIT license.
