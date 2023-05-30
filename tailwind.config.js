const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        sans: ["Inter var", ...defaultTheme.fontFamily.serif],
        chinese: ["Ma Shan Zheng", ...defaultTheme.fontFamily.serif],
      },
      keyframes: {
        gshift: {
          "0%": {
            backgroundPosition: "0% 50%",
            rotateZ: "rotateX(0deg)",
          },
          "100%": {
            backgroundPosition: "0% 50%",
            rotateZ: "rotateX(180deg)",
          },
          "50%": {
            backgroundPosition: "100% 50%",
            transform: "rotateX(0deg)",
          },
        },
        shine: {
          "0%": {
            opacity: "0",
            left: "-100%",
          },
          "50%": {
            opacity: "0.5",
            left: "0%",
          },
          "100%": {
            opacity: "0",
            left: "100%",
          },
        },
      },
      animation: {
        gshift: "gshift 7.5s ease-in-out infinite",
        shine: "shine 0.75s linear 1",
      },
      backgroundSize: {
        500: "300%",
      },
    },
  },
  plugins: [
    plugin(function ({ addVariant, e, postcss }) {
      addVariant("firefox", ({ container, separator }) => {
        const isFirefoxRule = postcss.atRule({
          name: "-moz-document",
          params: "url-prefix()",
        });
        isFirefoxRule.append(container.nodes);
        container.append(isFirefoxRule);
        isFirefoxRule.walkRules((rule) => {
          rule.selector = `.${e(
            `firefox${separator}${rule.selector.slice(1)}`
          )}`;
        });
      });
    }),
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
  ],
};
