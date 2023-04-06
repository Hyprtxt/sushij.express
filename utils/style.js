import { asset } from "$fresh/runtime.ts"
import { animation, apply, css, keyframes, theme } from "twind/css"

// ${animation("300ms ease-in-out 1", fadeIn)}

export const fadeIn = keyframes({
  "0%": {
    opacity: 0,
  },
  "100%": {
    opacity: 1,
  },
})

export const swoopDown = keyframes({
  "0%": {
    transform: "translateY(-20px)",
  },
  "100%": {
    transform: "translateY(0)",
  },
})

export const swoopDownFadeInLast = keyframes({
  "0%, 70%": {
    transform: "translateY(-20px)",
    opacity: 0,
  },
  "100%": {
    transform: "translateY(0)",
    opacity: 1,
  },
})

export const globalStyles = css({
  ":global": {
    a: {
      color: theme("colors.indigo"),
      "&:visited": apply`text-violet`,
      "&:hover": apply`text-blue underline`,
      "&:active": apply`text-red`,
    },
    "h1, h2, h3": {
      "&": apply`mb-3`,
      a: {
        "&": apply`text-dark`,
        "&:link": apply`text-dark`,
        "&:visited": apply`text-dark`,
        "&:hover": apply`text-dark no-underline`,
        "&:active": apply`text-dark`,
      },
    },
    h1: apply`text-4xl`,
    h2: apply`text-2xl`,
    h3: apply`text-xl`,
    ".markdown": {
      "a": apply`underline`,
      "ul, ol": {
        "li": apply`ml-5`,
        "&": apply`mb-3`,
      },
      "ul li": apply`list-disc`,
      "ol li": apply`list-decimal`,
    },
    "div > p": apply`mb-3`,
    body: {
      "&::before": {
        "&": apply`d-block fixed w-full h-full -z-20 left-0 top-0`,
        content: `""`,
        background: `url(${asset("/background.webp")}) no-repeat center center`,
        backgroundSize: "cover",
      },
      backgroundColor: theme("colors.blue"),
    },
    ".header-wrapper": apply`mt-5`,
  },
})

export const homeStyles = css({
  ":global": {
    ".logo": {
      "&": apply(`p-5 h-48 ${animation("600ms ease-out 1", fadeIn)}`),
      background: `url(${asset("/sushijexpress.jpg")}) no-repeat center center`,
      maxWidth: "420px",
      margin: "0 auto",
      backgroundSize: "cover",
    },
    ".tagline": apply`my-8 text-2xl text-dark ${
      animation("1000ms ease-out 1", swoopDownFadeInLast)
    }`,
    ".landing-page":
      apply`fixed top-0 bg-transparent w-full text-white text-center min-h-screen -z-10`,
    "section.header-wrapper": {
      marginTop: "94vh",
    },
  },
})
