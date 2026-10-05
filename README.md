# Source code for MBM website

## Introduction

This repository contains the source code from which the MBM website can be
built. Recently, I migrated the page from using Jekyll as a platform to
a combination of [Vue.js](https://vuejs.org) and 
[Gridsome](https://gridsome.org/). From a sanity perspective, this was
awesome, since Vue.js is incredibly more powerful than Jekyll and Gridsome
makes the development of a static website possible.

## Setup

To get up and running, clone the repository and run (recommended)

```sh
npm install
```

In addition, you will want to install the gridsome CLI with

```sh
npm install --global @gridsome/cli
```

## Workflow

The project workflow can be controlled using `npm run` scripts
(e.g. `npm run develop`). The following are relevant:
- `develop` which refreshes the website after changes in the source code
- `build` to build the website locally to the `dist` folder
- `deploy` to publish the built website (`build` is run automatically and
   does not have to be run before)

## GitHub Pages

The site is hosted at `https://mbmworkshop.github.io/mbm/`. In
`gridsome.config.js`, `siteUrl` specifies the origin
(`https://mbmworkshop.github.io`) and `pathPrefix: '/mbm'` specifies the
repository path. Both are needed.

## Caveats

With newer Node.js versions, this project's Webpack 4 dependency may fail
with `ERR_OSSL_EVP_UNSUPPORTED`. On macOS/Linux, use the compatibility option
for the build or deployment:

```sh
NODE_OPTIONS=--openssl-legacy-provider npm run build
NODE_OPTIONS=--openssl-legacy-provider npm run deploy
```
