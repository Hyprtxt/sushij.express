import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import IconBrandGithub from "$icons/brand-github.tsx"

export default function Showcase(props) {
  return (
    <>
      <Head>
        <title>Sushi J Express | Menu</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content="Order Sushi J Express To Go"
        />
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>Order Today!</h1>
          <p>We are Open.</p>
          <p>We are not Open.</p>
        </section>
      </Layout>
    </>
  )
}
