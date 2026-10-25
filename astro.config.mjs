// @ts-check
import { defineConfig } from "astro/config"

// GitHub Pages: an org/user site (<owner>.github.io) is served from "/"; a project site from
// "/<repo>/". The deploy workflow sets SITE and BASE; locally both default to the org site.
export default defineConfig({
  site: process.env.SITE ?? "https://lmoxide.github.io",
  base: process.env.BASE ?? "/",
  trailingSlash: "ignore",
})
