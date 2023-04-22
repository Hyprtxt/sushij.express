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
    ".menu-section": {
      ".menu-item": {
        backgroundImage:
          "linear-gradient(to right, #000 15%, rgba(255, 255, 255, 0) 0%)",
        backgroundPosition: "center bottom 7px",
        backgroundSize: "10px 1px",
        backgroundRepeat: "repeat-x",
        span: {
          backgroundColor: "white",
          lineHeight: "20px",
        },
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
    ".logo-parent": {
      "&": apply`h-60 w-80 m-auto`,
      // backgroundColor: "#7cabe4",
    },
    ".logo": {
      "&": apply`h-60 ${animation("600ms ease-out 1", fadeIn)}`,
      // mixBlendMode: "multiply",
      margin: "0 auto",
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
