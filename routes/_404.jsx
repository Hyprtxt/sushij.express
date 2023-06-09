import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"

export default function Home(props) {
  return (
    <>
      <Head>
        <title>Sushi J Express | 404 Error Page</title>
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white">
          <h2>
            404 Error
          </h2>
          <p>
            We couldn't find the thing you asked for.
          </p>
        </section>
      </Layout>
    </>
  )
}
