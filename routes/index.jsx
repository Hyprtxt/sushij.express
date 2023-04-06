import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import { tw } from "twind"
import { homeStyles } from "@/utils/style.js"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Sushi J Express | Good Sushi</title>
        <meta
          name="description"
          content="Sushi J Express is an authentic Japanese & Sushi restaurant in Prescott Valley."
        />
      </Head>
      <div class={tw`${homeStyles}`}></div>
      <section class="landing-page">
        <div class="mx-auto">
          <p class="my-8 text-2xl text-dark">🍱 Welcome 🍣</p>
          <div class="logo"></div>
          {
            /* <h1 class="logo text-6xl text-dark font-bold">
            <span class="font-brush text-8xl">Sushi</span>{" "}
            <span class="text-red">J</span>{" "}
            <span class="font-express">EXPRESS</span>
          </h1> */
          }
          <p class="tagline">
            おいしい寿司
          </p>
        </div>
      </section>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto p-8 space-y-4 bg-white">
          <h1 id="welcome">
            <a href="#welcome">Hello</a>
          </h1>
          <p class="text-lg">
            Very Good Sushi is found in Prescott Valley
          </p>
          {/* // Remember: Update Hours in Layout Schema and Functions too */}
          <p class="text-lg text-red">
            Tuesday - Saturday<br />11:00 am - 2:30 pm<br />4:30 pm - 7:00 pm
          </p>
        </section>
      </Layout>
    </>
  )
}
