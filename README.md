# Tailwind Toolkit

## Included Plugins

- [Responsive Type](./plugins/type)
- [Fluid Size](./plugins/fluid-size)
- [Dynamic Fluid](./plugins/fluid)

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
  require('@malven/tailwind-toolkit/type'),
  require('@malven/tailwind-toolkit/fluid-size'),
  require('@malven/tailwind-toolkit/fluid'),
]
```

## Testing

Run tests:
```shell
npm test
```
