import { Options } from "$fresh/plugins/twind.ts"
import * as colors from "twind/colors"

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      transitionDuration: {
        "0": "0ms",
        "1600": "1600ms",
        "2000": "2000ms",
      },
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
