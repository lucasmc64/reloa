# :movie_camera: Reloa - React Loading Animations

> Loading animations for all tastes!

[![NPM](https://img.shields.io/npm/v/reloa.svg)](https://www.npmjs.com/package/reloa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## :articulated_lorry: Install

```bash
npm install reloa
# or
yarn add reloa
```

## :building_construction: Usage

```jsx
import React from 'react'
import { Overlay, RollingBlocks, SpinningCircles } from 'reloa'

const Example1 = () => {
  return (
    <Overlay>
      <RollingBlocks />
    </Overlay>
  )
}

const Example2 = () => {
  return (
    <button>
      <SpinningCircles proportion="5" />
    </button>
  )
}

export { Exemple1, Exemple2 }
```

## :jigsaw: Properties

The animation components can be given some properties to adjust them to your needs.

### `proportion`

| Required? | Type     | Default value |
| --------- | -------- | ------------- |
| No        | `String` | `null`        |

**Description**: 

The measures used to create the animations are in `em`, which means that when you change the `font-size` of some parent element, the size of the animation will change proportionally.

This property simply changes the `font-size` of the animation container to the value passed to it. The default `font-size` value of animations is `inherit`.

> Attention: You must pass the unit of measure along with the value, as in a normal font size setting.

## :gear: How does it work?

It is nothing more than a collection of components whose only dependency is [styled-components](https://styled-components.com) (apenas para não ser necessário a importação de um arquivo CSS a parte) and all animations are created only with CSS and JS.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE) for more information.

---

Made with :white_heart: by Lucas Coutinho :wave: [Get in touch!](https://github.com/lucasmc64)
