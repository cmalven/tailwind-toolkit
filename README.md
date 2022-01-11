# Tailwind Toolkit

## Included Plugins

- [Responsive Type]()
- [Fluid Size]()
- [Dynamic Fluid]()

## Installation

```shell
# install via npm
npm i @malven/tailwind-toolkit -D
```

## Usage

Simply require the plugins or utilities in your `tailwindcss.config.js` file, and follow the usage instructions for each documented in its folder.

```js
// tailwind.config.js
plugins: [
  require('@malven/tailwind-toolkit/fluid'),
  require('@malven/tailwind-toolkit/fluid-size'),
  require('@malven/tailwind-toolkit/type'),
]
```

## Testing

Run tests:
```shell
npm test
```
