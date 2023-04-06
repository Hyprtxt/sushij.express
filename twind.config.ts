import { Options } from "$fresh/plugins/twind.ts"
import * as colors from "twind/colors"

export default {
  selfURL: import.meta.url,
  preflight: {
    "@import":
      "url(https://fonts.googleapis.com/css2?family=Cormorant:ital@1&family=Kolker+Brush&display=swap)",
    "@font-face": [
      {
        fontFamily: "Kolker Brush",
      },
      { fontFamily: "Cormorant", fontWeight: "italic" },
    ],
  },
  theme: {
    extend: {
      transitionDuration: {
        "0": "0ms",
        "1600": "1600ms",
        "2000": "2000ms",
      },
    },
    fontFamily: {
      "brush": [
        '"Kolker Brush"',
        "Segoe Print",
        "Bradley Hand",
        "Chilanka",
        "TSCu_Comic",
        "casual",
        "cursive",
      ],
      "express": ['"Cormorant"', "serif"],
    },
    colors: {
      purple: "#271f3f",
      green: "#59a188",
      red: "rgb(255,25,25)",
      blue: "#84b3ea",
      indigo: "rgb(0,153,212)",
      violet: "rgb(108, 73, 136)",
      grey: colors.coolGray,
      dark: "rgb(15,15,15)",
      backdrop: "rgba(15,15,15,0.6)",
      white: colors.white,
      black: colors.black,
    },
  },
} as Options
