# Tailwind Toolkit - Type

> Allows for easily reusable responsive styles with the minimum amount of code.

## Usage

First, add your type styles to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    remBase: 10,
    minViewport: '320px',
    fontStacks: {
      sans: {
        fontFamily: `'Helvetica Neue', arial, sans-serif`,
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
      serif: {
        fontFamily: `Georgia, Cambria, 'Times New Roman', Times, serif;`,
        fontWeight: 'normal',
        fontStyle: 'normal',
      },
    },
    typeStyles: {
      'h-1': {
        stack: 'sans',
        fontSmoothing: false,
        sizes: {
          min: 24,
          md: 32,
          lg: 48,
        },
        properties: {
          lineHeight: 1.8,
        },
      },
      'body-1': {
        stack: 'serif',
        fontSmoothing: true,
        sizes: {
          min: '13px',
          md: '48px',
        },
        properties: {
          lineHeight: 1.8,
          textTransform: 'none',
          letterSpacing: 0,
        },
      },
    },
  }
}
```

Then you can use these complete type styles in your markup. 

```html
<h1 class="type-h-1">Hello</h1>
<p class="type-body-1">How are you today?</p>
```

`properties` can contain any valid CSS properties.

`sizes` values for each breakpoint in your type styles can either include a unit (`24px`) or be unitless (`24`). If the value is unitless, it will automatically use `rem` units, scaled based on the `remBase` value in your Tailwind theme. For instance, if `remBase` is set to `10`, `24` will be converted to `2.4rem`.

### Font Stacks

You can also directly apply font stacks separately from complete type styles:

```html

<p class="font-stack-sans">How are you today?</p>
```

Font stacks are unique from the standard `fontFamily` definitions because they can also include `font-weight`, `font-style`, or any other properties you intend to always apply when using that font stack.
