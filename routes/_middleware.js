// routes/_middleware.js
import { blue, cyan, green, magenta, red, yellow } from "$std/fmt/colors.ts"

import { BASE_URL, NODE_ENV } from "@/utils/config.js"

export async function handler(req, ctx) {
  // For Logging
  const start = Date.now()
  const { pathname } = new URL(req.url)
  const withSession = [
    "/",
    "/menu",
    "/order",
  ]
  if (
    withSession.includes(pathname) ||
    pathname.startsWith("/pages/")
  ) {
    const kv = await Deno.openKv()

    const key = ["hits"]
    await kv.atomic().mutate({
      type: "sum",
      key,
      value: new Deno.KvU64(1n),
    }).commit()

    // Read back this key.
    const v = await kv.get(key)
    ctx.state.hits = parseInt(v.value.value)
  }
  const resp = await ctx.next()
  const now = Date.now()
  const ms = now - start
  const status = () => {
    const str = resp.status.toString()
    if (str[0] === "2") {
      return green(str)
    }
    if (str[0] === "3") {
      return yellow(str)
    } else {
      return red(str)
    }
  }
  resp.headers.set("X-Response-Time", `${ms}ms`)
  console.log(
    `[${magenta(new Date(now).toISOString())}] ${blue(req.method)} ${
      cyan(pathname)
    } - ${blue(String(ms) + "ms")} - ${status()}`,
  )
  return resp
}
