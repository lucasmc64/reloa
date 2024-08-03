# Reloa

[![NPM](https://img.shields.io/npm/v/reloa.svg)](https://www.npmjs.com/package/reloa) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> ☠️ Attention: Reloa is officially **discontinued**. Please consider using [AnimarteJS](https://gitlab.com/digital-dreams/animarte_js) instead.

## What is Reloa?

Reloa is a set of loading animations for websites using React, providing a quick and elegant solution for times when a user interaction takes a while to complete.

## Usage

### 1. Dealing with dependencies

If you are using npm versions 3, 4, 5 or 6, you must explicitly install the dependencies below.

> If you are using any version of `npm` not listed here, it will automatically install the dependencies. You can still do this manually if you are going to use any of them in your own project.

```bash
npm install styled-components
```

### 2. Installing reloa

```bash
npm install reloa
```

### 3. Usage example

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

If you need to show something while an entire page loads behind the scenes, the lib provides a ready-to-use overlay.

```jsx
import React, { useState } from "react";
import { Overlay, RollingBlocks } from "reloa";

const Example = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Overlay show={isLoading}>
      <RollingBlocks />
    </Overlay>
  );
};

export { Example };
```

You don't necessarily need to just put animations on the overlay, and besides, you can change some of their behavior and styling through the properties.

### Properties

> Any other property not listed below will be passed to the `<div>` element that represents the overlay.
>
> This makes it possible to use properties that this element would commonly have in the React world, such as `style` and `className`, making everything more flexible and easier to adjust to your taste or needs.

#### `show`

| Required? | Type      | Default value |
| --------- | --------- | ------------- |
| Yes       | `Boolean` | `true`        |

**Description**:

It is expected that in the component you use the overlay on, a state will be created to control when it should appear or disappear.

It is expected that in the component you use the overlay on, a state will be created to control when it should appear or disappear. Thus, passing the variable that stores this state to the overlay through this property.

You can also, of course, do something like `{isLoading ? <Overlay>{/*...*/}</Overlay> : null}`, creating your own component visibility control.

However, this would also give you the extra work of, if you like, creating smooth transitions when the overlay enters or leaves the scene, which can be easily configured using this property in conjunction with the one described below :).

#### `animate`

| Required? | Type     | Default value |
| --------- | -------- | ------------- |
| No        | `String` | `null`        |

**Description**:

Enables smooth transitions when the overlay enters and/or leaves the screen.

| Possible values | What they do?                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------ |
| `“fadeIn”`      | Applies a transition that makes it smoother when the component **comes on screen**.              |
| `“fadeOut”`     | Applies a transition that makes it smoother when the component **leaves the screen**.            |
| `“fadeInOut”`   | Applies a transition that makes it smoother when the component **enters and leaves the screen**. |

#### `hideScrollBar`

| Required? | Type      | Default value |
| --------- | --------- | ------------- |
| No        | `Boolean` | `true`        |

**Description**:

Through this property you can decide whether or not you want to hide the scrollbar when the overlay is active.

## Animations Context

If you need to instantiate more than one animation and they have custom values for certain properties (see section below), you can use the context provided by the lib to set all these properties if you like.

> **Attention**: The properties passed directly to the animations will have priority over the ones defined in the context.

```jsx
import React from "react";
import { ReloaContext, RollingBlocks, SpinningCircles } from "reloa";

// No context
const Example1 = () => {
  return (
    <div>
      <RollingBlocks size="1em" colorScale="rgba(255, 120, 200, 0.8)" />
      <SpinningCircles size="1em" colorScale="rgba(255, 120, 200, 0.8)" />
    </div>
  );
};

// With context
const Example2 = () => {
  return (
    <div>
      <ReloaContext.Provider value={{ size: "1em", colorScale="rgba(255, 120, 200, 0.8)" }}>
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

### `colorScale`

| Required? | Type                   | Default value |
| --------- | ---------------------- | ------------- |
| No        | `String` or `String[]` | `null`        |

**Description**:

Through this property it is possible to change the colors of the elements present in the animations. If this is not set, the default base color for animations will be **`"#d2d2d8"`**.

If you intend to make things even more festive and/or colorful, instead of passing a single color, you can still pass an array of colors.

### `size`

| Required? | Type     | Default value |
| --------- | -------- | ------------- |
| No        | `String` | `null`        |

**Description**:

This property simply changes the `width` and `height` of the animation container to the value passed to it. The default value for these properties is **`"4em"`**.

The measurements used to create the animations are in `%`, which means that when you change the `width` and `height` of the animation container, the size of the animation changes proportionally.

> Attention: You must pass the unit of measure along with the value, as in a normal height and width setting.

### `speed`

| Required? | Type     | Default value |
| --------- | -------- | ------------- |
| No        | `Number` | `5`           |

**Description**:

This property allows you to change the animation speed completely, receiving as value the number of **seconds** of its duration.

If no value is passed, calculations will be done so that the animation lasts 5 seconds.

## How does it work?

It is nothing more than a collection of components whose only dependency is [styled-components](https://styled-components.com) (just so you don't need to import a separate CSS file) and all animations are created only with CSS and JS.

## License

This project is under the MIT license. See the [LICENSE](LICENSE) for more information.

---

Made with :purple_heart: by Lucas Coutinho :wave: [Get in touch!](https://github.com/lucasmc64)
