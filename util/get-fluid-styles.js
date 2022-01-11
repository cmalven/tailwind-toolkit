const stripUnit = require('./strip-unit');
const getMinSize = require('./get-min-size');

module.exports = function getFluidStyles(
  theme,
  includeMin = true,
  includeMax = true,
  includeBreakpoints = true,
  properties,
  minValue,
  maxValue,
  minScreen = 'min',
  maxScreen = 'xl',
) {
  const sizeUnit = 'width';
  const viewportUnit = 'vw';

  const minSize = minScreen === 'min'
    ? getMinSize(theme)
    : theme(`screens.${minScreen}`);
  const maxSize = theme(`screens.${maxScreen}`);

  const props = properties.split(' ');

  let result = [];

  // Add the initial values
  if (includeMin) {
    props.forEach(prop => {
      result.push([
        prop,
        minValue,
      ]);
    });
  }

  // Values within the breakpoint range
  if (includeBreakpoints) {
    result.push([
      `@media (min-${sizeUnit}: ${minSize})`,
      props.reduce((acc, prop) => {
        acc[prop] = `calc(${minValue} + ${stripUnit(maxValue) - stripUnit(minValue)} * (100${viewportUnit} - ${minSize}) / ${stripUnit(maxSize) - stripUnit(minSize)})`;
        return acc;
      }, {}),
    ]);
  }

  // Values above the max breakpoint
  if (includeMax) {
    result.push([
      `@media (min-${sizeUnit}: ${maxSize})`,
      props.reduce((acc, prop) => {
        acc[prop] = maxValue;
        return acc;
      }, {}),
    ]);
  }

  return Object.fromEntries(result);
};