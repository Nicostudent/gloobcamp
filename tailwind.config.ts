import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#644CE5",
        secondary: "#24262F",
        tertiary: "#4E525A",
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({addVariant}) {
      addVariant('progress-unfilled', ['&::-webkit-progress-bar', '&']);
      addVariant('progress-filled', ['&::-webkit-progress-value', '&::-moz-progress-bar', '&']);
  })
  ],
};
export default config;
