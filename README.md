# Reloa - React Loading Animations

> Loading animations for all tastes!

[![NPM](https://img.shields.io/npm/v/reloa.svg)](https://www.npmjs.com/package/reloa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Installing dependencies

```bash
npm install styled-components
# or
yarn add styled-components
```

## Installing reloa

```bash
npm install reloa
# or
yarn add reloa
```

## Usage example

A possible use of these animations is to show them according to some type of interaction with the user that can lead to some delay in getting a response, such as in a form submission.

```jsx
import React, { useState } from "react";
import { SpinningCircles } from "reloa";

const Example = () => {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = function (event) {
    event.preventDefault();
    setIsSending((isSending) => !isSending);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>
        {isSending ? <SpinningCircles size="1em" /> : "Submit form"}
      </button>
    </form>
  );
};

export { Example };
```

## Overlay

If you need to show an animation while an entire page loads behind the scenes, the lib provides a ready-to-use overlay.

```jsx
import React from "react";
import { Overlay, RollingBlocks } from "reloa";

const Example = () => {
  return (
    <Overlay>
      <RollingBlocks />
    </Overlay>
  );
};

export { Example };
```

## Loading Animations Context

If you need to instantiate more than one loading animation and they have custom values for certain properties (see section below), you can use the context provided by the lib to set all these properties if you like.

```jsx
import React from "react";
import { ReloaContext, RollingBlocks, SpinningCircles } from "reloa";

// No context
const Example1 = () => {
  return (
    <div>
      <RollingBlocks size="1em" />
      <SpinningCircles size="1em" />
    </div>
  );
};

// With context
const Example2 = () => {
  return (
    <div>
      <ReloaContext.Provider value={{ size: "1em" }}>
        <RollingBlocks />
        <SpinningCircles />
      </ReloaContext.Provider>
    </div>
  );
};

export { Example1, Example2 };
```

## Animations Properties

The animation components can be given some properties to adjust them to your needs.

### `size`

| Required? | Type     | Default value |
| --------- | -------- | ------------- |
| No        | `String` | `null`        |

**Description**:

This property simply changes the `width` and `height` of the animation container to the value passed to it. The default value for these properties is **`4em`**.

The measurements used to create the animations are in `%`, which means that when you change the `width` and `height` of the animation container, the size of the animation changes proportionally.

> Attention: You must pass the unit of measure along with the value, as in a normal font size setting.

## How does it work?

It is nothing more than a collection of components whose only dependency is [styled-components](https://styled-components.com) (just so you don't need to import a separate CSS file) and all animations are created only with CSS and JS.

## License

This project is under the MIT license. See the [LICENSE](LICENSE) for more information.

---

Made with :purple_heart: by Lucas Coutinho :wave: [Get in touch!](https://github.com/lucasmc64)
