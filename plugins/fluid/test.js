const postcss = require('postcss');


//
//   Base Theme
//
//////////////////////////////////////////////////////////////////////

const theme = {};


//
//   Type Styles
//
//////////////////////////////////////////////////////////////////////

let expected = `
.fluid-\\[marginBottom\\2c 20px\\2c 100px\\] {
    margin-bottom: 20px;
}
@media (min-width: 300px) {
    .fluid-\\[marginBottom\\2c 20px\\2c 100px\\] {
        margin-bottom: calc(20px + 80 * (100vw - 300px) / 980);
    }
}
@media (min-width: 1280px) {
    .fluid-\\[marginBottom\\2c 20px\\2c 100px\\] {
        margin-bottom: 100px;
    }
}
.fluid-\\[marginBottom\\2c 20px\\2c 100px\\2c min\\2c lg\\] {
    margin-bottom: 20px;
}
@media (min-width: 300px) {
    .fluid-\\[marginBottom\\2c 20px\\2c 100px\\2c min\\2c lg\\] {
        margin-bottom: calc(20px + 80 * (100vw - 300px) / 724);
    }
}
@media (min-width: 1024px) {
    .fluid-\\[marginBottom\\2c 20px\\2c 100px\\2c min\\2c lg\\] {
        margin-bottom: 100px;
    }
}
.fluid-\\[marginBottom\\2c 20px\\2c 100px\\2c md\\2c lg\\] {
    margin-bottom: 20px;
}
@media (min-width: 768px) {
    .fluid-\\[marginBottom\\2c 20px\\2c 100px\\2c md\\2c lg\\] {
        margin-bottom: calc(20px + 80 * (100vw - 768px) / 256);
    }
}
@media (min-width: 1024px) {
    .fluid-\\[marginBottom\\2c 20px\\2c 100px\\2c md\\2c lg\\] {
        margin-bottom: 100px;
    }
}
`;

it('Fluid', () => {
  let css = postcss([
    require('tailwindcss')({
      theme,
      content: [
        {
          raw: `
            <h1 class="fluid-[marginBottom,20px,100px]">Hello</h1>
            <p class="fluid-[marginBottom,20px,100px,min,lg]">How do you do?</p>
            <p class="fluid-[marginBottom,20px,100px,md,lg]">Great, thank you.</p>
          `,
        },
      ],
      plugins: [require('./index')],
    }),
  ]).process('@tailwind utilities;').css;

  expect(css).toBe(expected.trim());
});