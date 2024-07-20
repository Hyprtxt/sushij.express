import puppeteer from "puppeteer"
import { delay } from "$std/async/delay.ts"
import { startFreshServer } from "$fresh/tests/test_utils.ts"

export const freshTestWrapper = (theTests) => async (t) => {
  const { serverProcess, lines } = await startFreshServer({
    args: ["run", "-A", "--unstable-kv", "./main.ts"],
  })
  await theTests(t)
  // Stop the Server
  await lines.cancel()
  serverProcess.kill("SIGTERM")
  // await for the server to close
  await delay(100)
}

export const freshPuppetTestWrapper = (puppetConfig, theTests) =>
  freshTestWrapper(async (t) => {
    const browser = await puppeteer.launch(puppetConfig)
    const page = await browser.newPage()
    await theTests(t, page)
    await browser.close()
  })
