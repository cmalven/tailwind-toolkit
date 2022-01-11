# Tailwind Toolkit - Fluid Size

> Allows for reusable spacing combinations that fluidly scale with the size of the viewport.

## Usage

First, add your sizes to your Tailwind config:

```js
// tailwind.config.js
module.exports = {
  theme: {
    minViewport: '320px',
    sizes: {
      1: '1px',
      2: '2px',
      3: '3px',
      none: {
        min: '0px',
      },
      s: {
        min: '8px',
      },
      m: {
        min: '24px',
        md: '32px',
      },
      lg: {
        min: '48px',
        md: '64px',
        lg: '128px',
      },
    },
  }
}
```

**Important**: Your themes `sizes` values will automatically be converted into `spacing` values. Do not use `spacing` in your theme if you are using this plugin - it will be overridden. Any value that would be valid in `spacing` is also valid in `sizes`.

Then you can use these as spacing values in your markup. 

```html
<h1>Hello</h1>
<p class="mt-lg">How are you today?</p>
```

## Using custom properties dynamically

This plugin uses CSS custom properties to store spacing combinations, and you can reference these properties directly through Tailwind [arbitrary properties](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties) if you ever need to. For instance, to adjust the resulting value.

```html

<p class="mt-[calc(var(--fluid-size-lg)_*_2)]">Hello</p>
```
