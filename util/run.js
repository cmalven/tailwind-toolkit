const path = require('path');
const tailwind = require('tailwindcss');
const postcss = require('postcss');

function run(config, plugin, tailwindPlugin = tailwind) {
  let { currentTestName } = expect.getState();
  config = {
    ...{ plugins: [plugin], corePlugins: { preflight: false } },
    ...config,
  };

  return postcss(tailwindPlugin(config)).process(
    ['@tailwind base;', '@tailwind components;', '@tailwind utilities'].join('\n'),
    {
      from: `${path.resolve(__filename)}?test=${currentTestName}`,
    },
  );
}

// Strings

const html = String.raw;
const css = String.raw;
const javascript = String.raw;

function defaults({ defaultRingColor = `rgb(59 130 246 / 0.5)` } = {}) {
  return css`
    *,
    ::before,
    ::after {
      --tw-translate-x: 0;
      --tw-translate-y: 0;
      --tw-rotate: 0;
      --tw-skew-x: 0;
      --tw-skew-y: 0;
      --tw-scale-x: 1;
      --tw-scale-y: 1;
      --tw-pan-x: ;
      --tw-pan-y: ;
      --tw-pinch-zoom: ;
      --tw-scroll-snap-strictness: proximity;
      --tw-ordinal: ;
      --tw-slashed-zero: ;
      --tw-numeric-figure: ;
      --tw-numeric-spacing: ;
      --tw-numeric-fraction: ;
      --tw-ring-inset: ;
      --tw-ring-offset-width: 0px;
      --tw-ring-offset-color: #fff;
      --tw-ring-color: ${defaultRingColor};
      --tw-ring-offset-shadow: 0 0 #0000;
      --tw-ring-shadow: 0 0 #0000;
      --tw-shadow: 0 0 #0000;
      --tw-shadow-colored: 0 0 #0000;
      --tw-blur: ;
      --tw-brightness: ;
      --tw-contrast: ;
      --tw-grayscale: ;
      --tw-hue-rotate: ;
      --tw-invert: ;
      --tw-saturate: ;
      --tw-sepia: ;
      --tw-drop-shadow: ;
      --tw-backdrop-blur: ;
      --tw-backdrop-brightness: ;
      --tw-backdrop-contrast: ;
      --tw-backdrop-grayscale: ;
      --tw-backdrop-hue-rotate: ;
      --tw-backdrop-invert: ;
      --tw-backdrop-opacity: ;
      --tw-backdrop-saturate: ;
      --tw-backdrop-sepia: ;
    }
  `;
}

defaults.toString = () => defaults();

// Exports

module.exports.run = run;
module.exports.defaults = defaults;
module.exports.html = html;
module.exports.css = css;
module.exports.javascript = javascript;