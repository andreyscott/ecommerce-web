import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
      extend: {
        screens: {
          '1.5xl': '1050px',
          '3xl': '1440px',
        },
        colors: {
          main: '#252B42',
          primary: '#23A6F0',
          secondary: {
            gray: '#737373',
            green: '#23856D',
            yellow: '#F3CD03',

          },
          alert: '#E77C40',
          danger: '#E74040',
          success: '#2DC071',
          muted: '#BDBDBD',
          disabled: '#8EC2F2',
          'light-gray': '#FAFAFA',
          'light-gray-2': '#ECECEC',
        },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
