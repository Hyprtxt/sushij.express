import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import { tw } from "twind"
import { homeStyles } from "@/utils/style.js"
import { asset } from "$fresh/runtime.ts"

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
          <p class="my-8 text-dark">🍱 Welcome 🍣</p>
          <div class="logo-parent">
            <img class="logo" src={asset("/sushijexpress.jpg")} alt="" />
          </div>
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
            We are open Tuesday - Saturday<br />Lunch: 11:00 am - 2:30
            pm<br />Dinner: 4:30 pm - 7:00 pm
          </p>
        </section>
      </Layout>
    </>
  )
}

const HoursTable = () => {
  return (
    <table class="table text-lg text-red">
      <thead class="table-header-group">
        <tr class="table-row">
          <th class="table-cell"></th>
          <th class="table-cell">Tuesday - Saturday</th>
        </tr>
      </thead>
      <tbody class="table-row-group">
        <tr class="table-row">
          <td class="table-cell font-bold">Lunch</td>
          <td class="table-cell ">11:00 am - 2:30 pm</td>
        </tr>
        <tr class="table-row">
          <td class="table-cell font-bold">Dinner</td>
          <td class="table-cell ">4:30 pm - 7:00 pm</td>
        </tr>
      </tbody>
    </table>
  )
}
