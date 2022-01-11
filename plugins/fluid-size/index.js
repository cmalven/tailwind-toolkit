const plugin = require('tailwindcss/plugin');
const getFluidStyles = require('../../util/get-fluid-styles');

const addFluidSizeBaseVariables = (theme, styles, sizeName) => {
  const sizes = theme('sizes');
  const size = sizes[sizeName];

  let newStyles = {};

  let prevBreakpoint = 'min';

  if (typeof size === 'object') {
    // If the size is an object with breakpoints
    for (let breakpoint in size) {
      const value = size[breakpoint];
      newStyles = Object.assign({}, newStyles, getFluidStyles(
        theme,
        breakpoint === 'min',
        breakpoint !== 'min',
        breakpoint !== 'min',
        `--fluid-size-${sizeName}`,
        size[prevBreakpoint],
        value,
        prevBreakpoint,
        breakpoint,
      ));

      // Set the current breakpoint to be the next
      prevBreakpoint = breakpoint;
    }
    return Object.assign({}, styles, { ':root': newStyles });
  } else {
    // If the size is a single value
    return Object.assign({}, styles, {
      ':root': {
        [`--fluid-size-${sizeName}`]: size,
      },
    });
  }

};

const fluidSize = plugin.withOptions(function(options) {
  return function({ addBase, theme }) {
    const sizes = theme('sizes');

    // Add variable for each fluid size
    for (let sizeName in sizes) {
      const output = addFluidSizeBaseVariables(theme, {}, sizeName);
      addBase(output);
    }
  };
}, (options) => {
  return {
    theme: {
      spacing: ({ theme }) => {
        const sizes = theme('sizes');
        let output = {};
        for (let sizeName in sizes) {
          output[sizeName] = `var(--fluid-size-${sizeName})`;
        }
        return output;
      },
    },
  };
});

module.exports = fluidSize;
