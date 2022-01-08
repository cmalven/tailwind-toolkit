const { run, defaults, css, html } = require('../../util/run');
const plugin = require('./');


//
//   Base Theme
//
//////////////////////////////////////////////////////////////////////

const theme = {};


//
//   Fluid
//
//////////////////////////////////////////////////////////////////////

test('fluid', async () => {
  let config = {
    theme,
    content: [
      {
        raw: html`
          <h1 class="fluid-[marginBottom,20px,100px]">Hello</h1>
          <p class="fluid-[marginBottom,20px,100px,min,lg]">How do you do?</p>
          <p class="fluid-[marginBottom,20px,100px,md,lg]">Great, thank you.</p>
        `,
      },
    ],
  };

  return run(config, plugin).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      ${defaults}
      .fluid-\[marginBottom\2c 20px\2c 100px\] {
        margin-bottom: 20px;
      }
      @media (min-width: 300px) {
        .fluid-\[marginBottom\2c 20px\2c 100px\] {
          margin-bottom: calc(20px + 80 * (100vw - 300px) / 980);
        }
      }
      @media (min-width: 1280px) {
        .fluid-\[marginBottom\2c 20px\2c 100px\] {
          margin-bottom: 100px;
        }
      }
      .fluid-\[marginBottom\2c 20px\2c 100px\2c min\2c lg\] {
        margin-bottom: 20px;
      }
      @media (min-width: 300px) {
        .fluid-\[marginBottom\2c 20px\2c 100px\2c min\2c lg\] {
          margin-bottom: calc(20px + 80 * (100vw - 300px) / 724);
        }
      }
      @media (min-width: 1024px) {
        .fluid-\[marginBottom\2c 20px\2c 100px\2c min\2c lg\] {
          margin-bottom: 100px;
        }
      }
      .fluid-\[marginBottom\2c 20px\2c 100px\2c md\2c lg\] {
        margin-bottom: 20px;
      }
      @media (min-width: 768px) {
        .fluid-\[marginBottom\2c 20px\2c 100px\2c md\2c lg\] {
          margin-bottom: calc(20px + 80 * (100vw - 768px) / 256);
        }
      }
      @media (min-width: 1024px) {
        .fluid-\[marginBottom\2c 20px\2c 100px\2c md\2c lg\] {
          margin-bottom: 100px;
        }
      }
    `);
  });
});
