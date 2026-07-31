import Head from "next/head"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { NODE_ENV } from "@/utils/config"

interface LayoutProps {
  children: React.ReactNode
  data?: any
  route?: string
}

const SchemaORG = () => {
  const Schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Prescott Valley",
      "addressRegion": "AZ",
      "postalCode": "86314",
      "streetAddress": "7840 E. St, AZ-69",
    },
    "name": "Sushi J Express",
    "openingHours": [
      "Tu-Sa 11:00-14:30",
      "Tu-Sa 16:30-19:00",
    ],
    "priceRange": "$$",
    "servesCuisine": [
      "Sushi",
      "Japanese",
    ],
    "telephone": "(928) 775-9323",
    "url": "https://sushij.express/",
  }
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(Schema, null, 2) }}
    />
  )
}

const Layout = ({ children, data = {}, route }: LayoutProps) => (
  <>
    <Head>
      <SchemaORG />
    </Head>
    <section className="flex justify-center header-wrapper">
      <Header active={route || data?.route} />
    </section>
    <main>{children}</main>
    <section className="flex justify-center">
      <Footer hits={data?.hits} active={route || data?.route} />
    </section>
    {NODE_ENV === "development" && data && Object.keys(data).length > 0 ? (
      <section className="max-w-screen-lg mx-auto py-8 px-8 space-y-4 bg-white rounded-lg mb-4">
        <pre className="text-xs overflow-auto">{JSON.stringify(data, null, 2)}</pre>
      </section>
    ) : null}
  </>
)

export default Layout
