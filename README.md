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
```
yarn
```
or
```
npm install
```

In addition, you will want to install the gridsome CLI with
```
yarn global add @gridsome/cli
```
or
```
npm install --global @gridsome/cli
```
depending on the preferred package manager.

## Workflow

The project workflow can be controlled using `npm run` scripts
(e.g. `npm run develop`). The following are relevant:
- `develop` which refreshes the website after changes in the source code
- `build` to build the website locally to the `dist` folder
- `deploy` to publish the built website (`build` is run automatically and
   does not have to be run before)
