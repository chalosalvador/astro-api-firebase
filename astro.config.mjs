// @ts-check

import { defineConfig } from "astro/config"
import node from "@astrojs/node"
import react from "@astrojs/react"

export default defineConfig({
  integrations: [react()],
  output: "hybrid",
  adapter: node({ mode: "middleware" }),
})
