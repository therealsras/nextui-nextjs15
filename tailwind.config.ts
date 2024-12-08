import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  plugins: [nextui({
    layout: {
      disabledOpacity: "0.3", // opacity-[0.3]
      radius: {
        small: "2px", // rounded-small
        medium: "4px", // rounded-medium
        large: "6px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "2px", // border-medium
        large: "3px", // border-large
      },
    },
    themes: {
      light: {
        colors: {
          primary: {
            DEFAULT: "#FFA500",
            foreground: "#000000",
          },
          focus: "#FFA500",
        }
      },
      dark: {
        colors: {
          primary: {
            DEFAULT: "#FFA500",
            foreground: "#000000",
          },
          focus: "#FFA500",
        }
      }
    }
  })],
}
export default config