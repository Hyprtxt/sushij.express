import Head from "next/head"
import Layout from "@/components/Layout"
import { isSushiOpen, isSushiOpenPhrase } from "@/utils/mod"
import { getHitsAndIncrement } from "@/utils/hits"
import type { GetServerSideProps } from "next"

interface OrderProps {
  hits: number
  route: string
}

export const getServerSideProps: GetServerSideProps<OrderProps> = async () => {
  const hits = getHitsAndIncrement()
  return {
    props: {
      hits,
      route: "/order",
    },
  }
}

export default function Order({ hits, route }: OrderProps) {
  const open = isSushiOpen()
  const phrase = isSushiOpenPhrase()

  return (
    <>
      <Head>
        <title>Sushi J Express | Order</title>
        <meta name="author" content="Taylor Young" />
        <meta name="description" content="Order Sushi J Express" />
      </Head>
      <Layout data={{ hits, route }} route="/order">
        <section className="max-w-screen-lg mx-auto py-8 px-8 space-y-4 bg-white markdown">
          <h1>{open ? "Order Today!" : "Come back soon!"}</h1>
          <p className="text-2xl">
            <a href="tel:+19287759323">(928) 775-9323</a>
          </p>
          <p>Cash only please</p>
          <p>{phrase}</p>
        </section>
      </Layout>
    </>
  )
}
