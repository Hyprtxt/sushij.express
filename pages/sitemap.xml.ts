import type { GetServerSideProps } from "next"
import { BASE_URL } from "@/utils/config"

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${BASE_URL}/</loc>
  </url>
  <url>
    <loc>${BASE_URL}/menu</loc>
  </url>
  <url>
    <loc>${BASE_URL}/order</loc>
  </url>
</urlset>`

  res.setHeader("Content-Type", "text/xml")
  res.write(sitemap)
  res.end()

  return { props: {} }
}

export default function Sitemap() {
  return null
}
