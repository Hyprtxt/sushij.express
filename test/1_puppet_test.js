import { assertEquals } from "$std/assert/mod.ts"
import { freshPuppetTestWrapper } from "@/test/wrapper.js"
import { BASE_URL, NODE_ENV } from "@/utils/config.js"
import { Status } from "$std/http/http_status.ts"

const puppet_config = NODE_ENV === "development"
  ? { headless: false, defaultViewport: null }
  : { headless: true }

Deno.test(
  "Public Pages Testing",
  {
    sanitizeResources: false,
    sanitizeOps: false,
  },
  freshPuppetTestWrapper(puppet_config, async (t, page) => {
    await t.step("The homepage should work", async () => {
      const response = await page.goto(`${BASE_URL}`, {
        waitUntil: "networkidle2",
      })
      assertEquals(response.status(), Status.OK)
    })

    await t.step("The menu page should work", async () => {
      const response = await page.goto(`${BASE_URL}/menu`, {
        waitUntil: "networkidle2",
      })
      assertEquals(response.status(), Status.OK)
    })

    await t.step("The order page should work", async () => {
      const response = await page.goto(`${BASE_URL}/order`, {
        waitUntil: "networkidle2",
      })
      assertEquals(response.status(), Status.OK)
    })

    await t.step("The 404 page should 404", async () => {
      const response = await page.goto(`${BASE_URL}/404`, {
        waitUntil: "networkidle2",
      })
      assertEquals(response.status(), Status.NotFound)
    })

    // More steps?
  }),
)
