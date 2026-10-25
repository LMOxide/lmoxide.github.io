// Links and text used across the site. Features live in features.yaml.

const org = "https://github.com/LMOxide"

export const site = {
  name: "LMOxide",
  title: "LMOxide: a LEGO Minifigures Online server in Rust",
  description:
    "An open server for LEGO Minifigures Online, rebuilt in Rust from the shipped client: game server, REST API, web console and a signed patcher.",
  github: org,
  repos: {
    server: `${org}/lmoxide`,
    webui: `${org}/lmoxide-webui`,
    patcher: `${org}/lmoxide-patcher-gui`,
  },
  docs: {
    protocol: `${org}/lmoxide/blob/main/docs/PROTOCOL.md`,
    api: `${org}/lmoxide/blob/main/docs/API.md`,
    patching: `${org}/lmoxide/blob/main/docs/PATCHING.md`,
    security: `${org}/lmoxide/blob/main/docs/SECURITY.md`,
    tunables: `${org}/lmoxide/blob/main/docs/TUNABLES.md`,
  },
}
