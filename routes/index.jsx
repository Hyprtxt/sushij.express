import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import Features from "@/components/Features.jsx"
import { tw } from "twind"
import { homeStyles } from "@/utils/style.js"
import IconGithub from "$icons/brand-github.tsx"
import IconChrome from "$icons/brand-chrome.tsx"
import IconDeno from "$icons/brand-deno.tsx"
import IconAlarm from "$icons/alarm.tsx"
import IconAirBalloon from "$icons/air-balloon.tsx"
import IconArmchair from "$icons/armchair.tsx"

const featureItems = [
  {
    icon: IconAlarm,
    description:
      "Fast websites. We keep the Hyper in our HyperText Markup. Lean effective sites get to the message quickly.",
  },
  {
    icon: IconAirBalloon,
    description:
      "Creative Solutions. A track record of getting things done, even when other developers say it can't be.",
  },
  {
    icon: IconArmchair,
    description:
      "Tons of Experience. We build businesses by integrating computer services together.",
  },
]

const websiteFeatures = [
  {
    icon: IconDeno,
    description:
      "Deno JavaScript. The easiest, most secure JavaScript runtime.",
    link: "https://deno.land",
    linkText: "About Deno",
  },
  {
    icon: IconGithub,
    description: "Version Control. Every website uses Git SCM.",
    link: "https://github.com/hyprtxt/hyprtxt.deno.dev",
    linkText: "This site too",
  },
  {
    icon: IconChrome,
    description: "End 2 End tests. Code that helps me test the code.",
    link: "https://www.youtube.com/watch?v=0nf5SaqjExM",
    linkText: "Watch a demo",
  },
]

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Sushi J Express | Good Sushi</title>
        <meta
          name="description"
          content="A slice of Japan right here in Prescott Valley. Order today."
        />
      </Head>
      <div class={tw`${homeStyles}`}></div>
      <section class="landing-page">
        <div class="mx-auto">
          <p class="my-8">🍱 Welcome 🍣</p>
          <div class="logo"></div>
          <p class="tagline">
            本当に速いのウェブサイト
          </p>
        </div>
      </section>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto p-8 space-y-4 bg-white">
          <h1 id="welcome">
            <a href="#welcome">Hello</a>
          </h1>
          <p>
            Very Good Sushi is found in Prescott Valley
          </p>
        </section>
      </Layout>
    </>
  )
}
