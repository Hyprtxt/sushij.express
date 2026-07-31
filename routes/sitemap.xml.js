// ./routes/sitemap.xml.ts
import { SitemapContext } from "fresh_seo"
import manifest from "@/fresh.gen.ts"
import { BASE_URL } from "@/utils/config.js"

export const handler = {
  GET: (ctx) => {
    const sitemap = new SitemapContext(
      BASE_URL,
      manifest,
    )
    return sitemap.render()
  },
}
