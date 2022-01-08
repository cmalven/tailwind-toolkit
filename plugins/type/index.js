const plugin = require('tailwindcss/plugin');

const addFontSizeUnit = (theme, value) => {
  if (typeof value === 'number') {
    const remBase = theme('remBase') ?? 16;
    return `${value / remBase}rem`;
  }

  return value;
};

const addStack = (theme, styles = {}, name) => {
  const fontStacks = theme('fontStacks');
  const stack = fontStacks[name];

  const stackStyles = {};
  for (let property in stack) {
    stackStyles[property] = stack[property];
  }

  return Object.assign({}, styles, stackStyles);
};

const addTypeStyles = (theme, styles = {}, name) => {
  const typeStyles = theme('typeStyles');

  const values = typeStyles[name];
  let typeStyle = {};

  // Add font stack
  typeStyle = addStack(theme, typeStyle, values.stack);

  // Font smoothing
  if (values.fontSmoothing ?? true) {
    typeStyle['-webkit-font-smoothing'] = 'antialiased';
    typeStyle['-moz-osx-font-smoothing'] = 'grayscale';
  }

  // Add properties
  for (let property in values.properties) {
    typeStyle[property] = values.properties[property];
  }

  // Output sizes
  for (let size in values.sizes) {
    const sizeValue = values.sizes[size];
    if (size === 'default') {
      // Output the default size
      typeStyle.fontSize = addFontSizeUnit(theme, sizeValue);
    } else {
      // Output the size for breakpoint
      typeStyle[`@media (min-width: ${theme(`screens.${size}`)})`] = {
        fontSize: addFontSizeUnit(theme, sizeValue),
      };
    }
  }

  return Object.assign({}, styles, typeStyle);
};

const type = plugin(function({ addUtilities, theme }) {
  const typeStyles = theme('typeStyles');
  const fontStacks = theme('fontStacks');

  // Empty output to start with
  let output = {};

  // Add type style utilities
  for (let name in typeStyles) {
    output[`.type-${name}`] = addTypeStyles(theme, {}, name);
  }

  // Add font stack utilities
  for (let name in fontStacks) {
    output[`.font-stack-${name}`] = addStack(theme, {}, name);
  }

  addUtilities(output);
});

module.exports = type;
