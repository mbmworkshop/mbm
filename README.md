# Source code for MBM website

This repository contains the source code from which the MBM website can be
built. Recently, I migrated the page from using Jekyll as a platform to
a combination of [Vue.js](https://vuejs.org) and 
[Gridsome](https://gridsome.org/). From a sanity perspective, this was
awesome, since Vue.js is incredibly more powerful than Jekyll and Gridsome
makes the development of a static website possible.

To get up and running, clone the repository and run (recommended)
```
yarn
```
or
```
npm install
```

To interactively see the website during development, startup Gridsome with
```
gridsome develop
```
and when the site is ready for publishing, call
```
gridsome build
```