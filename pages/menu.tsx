import Head from "next/head"
import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import { getHitsAndIncrement } from "@/utils/hits"
import type { GetServerSideProps } from "next"

interface MenuPageProps {
  hits: number
  route: string
}

export const getServerSideProps: GetServerSideProps<MenuPageProps> = async () => {
  const hits = getHitsAndIncrement()
  return {
    props: {
      hits,
      route: "/menu",
    },
  }
}

export default function MenuPage({ hits, route }: MenuPageProps) {
  return (
    <>
      <Head>
        <title>Sushi J Express | Menu</title>
        <meta name="author" content="Taylor Young" />
        <meta name="description" content="The Sushi J Express Menu" />
      </Head>
      <Layout data={{ hits, route }} route="/menu">
        <section className="max-w-screen-lg mx-auto py-8 px-8 space-y-4 bg-white markdown">
          <h1>Menu</h1>
          <img src="/menu.webp" alt="the menu" className="w-full h-auto rounded" />
        </section>
        <Menu />
      </Layout>
    </>
  )
}
