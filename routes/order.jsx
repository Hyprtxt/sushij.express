import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
import { isSushiOpen } from "@/utils/mod.js"

export default function Showcase(props) {
  // console.log(isSushiOpen())
  return (
    <>
      <Head>
        <title>Sushi J Express | Menu</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content="Order Sushi J Express"
        />
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>Order Today!</h1>
          <p class="text-2xl">
            <a href="tel:+19287759323">(928) 775-9323</a>
          </p>
          {isSushiOpen()
            ? <p>We are Open.</p>
            : <p>We are not Open right now, please come back later.</p>}
        </section>
      </Layout>
    </>
  )
}
