const { run, defaults, css, html } = require('../../util/run');
const plugin = require('./');


//
//   Base Theme
//
//////////////////////////////////////////////////////////////////////

const theme = {
  fontStacks: {
    helvetica: {
      fontFamily: `'Helvetica Neue', arial, sans-serif`,
      fontWeight: 'normal',
      fontStyle: 'normal',
    },
  },
  remBase: 10,
  typeStyles: {
    'h-1': {
      stack: 'helvetica',
      fontSmoothing: false,
      fluid: false,
      sizes: {
        default: 24,
        md: 32,
        lg: 48,
      },
      properties: {
        lineHeight: 1.8,
      },
    },
    'body-1': {
      stack: 'helvetica',
      fontSmoothing: true,
      fluid: false,
      sizes: {
        default: '13px',
        md: '48px',
      },
      properties: {
        lineHeight: 1.8,
        textTransform: 'none',
        letterSpacing: 0,
      },
    },
  },
};


//
//   Type Styles
//
//////////////////////////////////////////////////////////////////////

test('Type Styles', async () => {
  let config = {
    theme,
    content: [
      {
        raw: html`
          <h1 class="type-h-1">Hello</h1>
          <p class="type-body-1">Hello</p>
        `,
      },
    ],
  };

  return run(config, plugin).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      ${defaults}
      .type-h-1 {
          font-family: 'Helvetica Neue', arial, sans-serif;
          font-weight: normal;
          font-style: normal;
          line-height: 1.8;
          font-size: 2.4rem;
      }
      @media (min-width: 768px) {
          .type-h-1 {
              font-size: 3.2rem;
          }
      }
      @media (min-width: 1024px) {
          .type-h-1 {
              font-size: 4.8rem;
          }
      }
      .type-body-1 {
          font-family: 'Helvetica Neue', arial, sans-serif;
          font-weight: normal;
          font-style: normal;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          line-height: 1.8;
          text-transform: none;
          letter-spacing: 0;
          font-size: 13px;
      }
      @media (min-width: 768px) {
          .type-body-1 {
              font-size: 48px;
          }
      }
    `);
  });
});


//
//   Font Stacks
//
//////////////////////////////////////////////////////////////////////

test('Font Stacks', async () => {
  let config = {
    theme,
    content: [
      {
        raw: html`
          <h1 class="font-stack-helvetica">Hello</h1>
        `,
      },
    ],
  };

  return run(config, plugin).then((result) => {
    expect(result.css).toMatchFormattedCss(css`
      ${defaults}
      .font-stack-helvetica {
          font-family: 'Helvetica Neue', arial, sans-serif;
          font-weight: normal;
          font-style: normal
      }
    `);
  });
});
