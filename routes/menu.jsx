import { Head } from "$fresh/runtime.ts"
import Layout from "@/components/Layout.jsx"
// import IconBrandGithub from "$icons/brand-github.tsx"

export default function Showcase(props) {
  return (
    <>
      <Head>
        <title>SushiJ Express | Menu</title>
        <meta name="author" content="Taylor Young" />
        <meta
          name="description"
          content="The SushiJ Express Menu"
        />
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>
            Menu
          </h1>
          <p>
            A place for a menu
          </p>
        </section>
      </Layout>
    </>
  )
}
