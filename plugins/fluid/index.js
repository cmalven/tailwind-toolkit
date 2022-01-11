const plugin = require('tailwindcss/plugin');
const getFluidStyles = require('../../util/get-fluid-styles');

const fluid = plugin(function({ matchUtilities, theme }) {
  matchUtilities(
    {
      fluid: (options) => {
        return getFluidStyles(
          theme,
          true,
          true,
          true,
          ...options.split(','),
        );
      },
    },
  );
});

module.exports = fluid;
