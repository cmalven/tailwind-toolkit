const plugin = require('tailwindcss/plugin');

const stripUnit = (value) => {
  return parseInt(value);
};

const fluid = plugin(function({ matchUtilities, theme }) {
  matchUtilities(
    {
      fluid: (options) => {
        const sizeUnit = 'width';
        const viewportUnit = 'vw';

        const [
          properties,
          minValue,
          maxValue,
          minScreen = 'min',
          maxScreen = 'xl',
        ] = options.split(',');

        const minSize = minScreen === 'min'
          ? '300px'
          : theme(`screens.${minScreen}`);
        const maxSize = theme(`screens.${maxScreen}`);

        const props = properties.split(' ');

        let result = [];

        // Add the initial values
        props.forEach(prop => {
          result.push([
            prop,
            minValue,
          ]);
        });

        // Values within the breakpoint range
        result.push([
          `@media (min-${sizeUnit}: ${minSize})`,
          props.reduce((acc, prop) => {
            acc[prop] = `calc(${minValue} + ${stripUnit(maxValue) - stripUnit(minValue)} * (100${viewportUnit} - ${minSize}) / ${stripUnit(maxSize) - stripUnit(minSize)})`;
            return acc;
          }, {}),
        ]);

        // Values above the max breakpoint
        result.push([
          `@media (min-${sizeUnit}: ${maxSize})`,
          props.reduce((acc, prop) => {
            acc[prop] = maxValue;
            return acc;
          }, {}),
        ]);

        return Object.fromEntries(result);
      },
    },
  );
});

module.exports = fluid;
