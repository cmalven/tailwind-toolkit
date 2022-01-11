const { run, defaults, css, html } = require('../../util/run');
const plugin = require('./');


//
//   Base Theme
//
//////////////////////////////////////////////////////////////////////

const theme = {
  sizes: {
    1: '1px',
    none: {
      min: '0px',
    },
    s: {
      min: '8px',
    },
    m: {
      min: '24px',
      md: '32px',
    },
    lg: {
      min: '48px',
      md: '64px',
      lg: '128px',
    },
  },
};


//
//   Fluid Size
//
//////////////////////////////////////////////////////////////////////

test('Fluid Size', async () => {
  let config = {
    theme,
    content: [
      {
        raw: html`
          <h1 class="mx-s my-m mb-lg p-1">Hello</h1>
        `,
      },
    ],
  };

  return run(config, plugin).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      --fluid-size-1: 1px;
      --fluid-size-none: 0px;
      --fluid-size-s: 8px;
      --fluid-size-m: 24px;
      @media (min-width: 300px) {
        --fluid-size-m: calc(24px + 8 * (100vw - 300px) / 468);
      }
      @media (min-width: 768px) {
        --fluid-size-m: 32px;
      }
      --fluid-size-lg: 48px;
      @media (min-width: 300px) {
        --fluid-size-lg: calc(48px + 16 * (100vw - 300px) / 468);
      }
      @media (min-width: 768px) {
        --fluid-size-lg: calc(64px + 64 * (100vw - 768px) / 256);
      }
      @media (min-width: 1024px) {
        --fluid-size-lg: 128px;
      }
      ${defaults}
      .mx-s {
        margin-left: var(--fluid-size-s);
        margin-right: var(--fluid-size-s);
      }
      .my-m {
        margin-top: var(--fluid-size-m);
        margin-bottom: var(--fluid-size-m);
      }
      .mb-lg {
        margin-bottom: var(--fluid-size-lg);
      }
      .p-1 {
        padding: var(--fluid-size-1);;
      }
    `);
  });
});
