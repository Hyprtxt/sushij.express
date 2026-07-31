import Head from "next/head"
import Layout from "@/components/Layout"
import Menu from "@/components/Menu"
import { isSushiOpen, isSushiOpenPhrase } from "@/utils/mod"
import { getHitsAndIncrement } from "@/utils/hits"
import type { GetServerSideProps } from "next"

interface HomeProps {
  hits: number
  route: string
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const hits = getHitsAndIncrement()
  return {
    props: {
      hits,
      route: "/",
    },
  }
}

export default function Home({ hits, route }: HomeProps) {
  const open = isSushiOpen()
  const phrase = isSushiOpenPhrase()

  return (
    <>
      <Head>
        <title>Sushi J Express | Good Sushi</title>
        <meta
          name="description"
          content="Sushi J Express is an authentic Japanese & Sushi restaurant in Prescott Valley."
        />
      </Head>
      <div className="home-styles"></div>
      <section className="landing-page"></section>
      <Layout data={{ hits, route }} route="/">
        <section className="max-w-screen-lg mx-auto p-8 space-y-4 bg-white">
          <h1 id="welcome">
            <a href="#welcome">Welcome, please come in</a>
          </h1>
          <p className="text-lg">
            Very Good Sushi is found in Prescott Valley
          </p>
          <p className="text-lg text-red-600">
            We are open Tuesday - Friday<br />Lunch: 11:00 am - 2:30 pm<br />Dinner: 4:30 pm - 7:00 pm
          </p>
          <p>{phrase}</p>
        </section>
        {open && (
          <section className="max-w-screen-lg mx-auto py-8 px-8 space-y-4 bg-white markdown">
            <h1>Order Today!</h1>
            <p className="text-2xl">
              <a href="tel:+19287759323">(928) 775-9323</a>
            </p>
            <p>We are Open.</p>
          </section>
        )}
        <section className="max-w-screen-lg mx-auto p-8 pb-3 bg-white">
          <h1>Menu</h1>
        </section>
        <Menu />
      </Layout>
    </>
  )
}
