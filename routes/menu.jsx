import { asset, Head } from "$fresh/runtime.ts"
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
          content="The Sushi J Express Menu"
        />
      </Head>
      <Layout data={props}>
        <section class="max-w-screen-lg mx-auto py-8 px(8) space-y-4 bg-white markdown">
          <h1>
            Menu
          </h1>
          <img src={asset(`/menu.webp`)} alt="the menu" />
        </section>
      </Layout>
    </>
  )
}
