# Tailwind Toolkit - Fluid

> Allows for fluidly changing values using Tailwind dynamic utilities.

## Usage

The following would add a `marginTop` and `marginBottom` style that fluidly scale from `20px` at the `sm` breakpoint to `100px` at the `lg` breakpoint. The breakpoints should match your definitions in `theme.screens`.

You can separate any number of properties with an underscore (`_`).

```html
<h1 class="fluid-[marginTop_marginBottom,20px,100px,sm,lg]">Hello</h1>
```
