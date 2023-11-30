import type { Config } from 'tailwindcss'
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '15px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: "#fff",
        crimson: {
          "100": "#f52432",
          "200": "rgba(245, 36, 50, 0.5)",
        },
        gray: {
          "100": "#1f261f",
          "200": "rgba(255, 255, 255, 0)",
        },
        dimgray: "#585f58",
        darkslateblue: "#5d388d",
        whitesmoke: "#f5f5f5",
      },
      // fontFamily: {
      //   roboto: ['var(--font-roboto)'],
      //   gotham: ['var(--font-gotham)'],
      // }
    },
  },
  darkMode: "class",
  plugins: [
  nextui(),
],
}
export default config
