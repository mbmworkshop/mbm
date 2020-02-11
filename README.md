# MBM Workshop website

This repository contains the websites for the MBM 2019 workshop and the 
MBM 2020 workshop (under construction).

The MBM 2019 website is built relying on [Bootstrap](https://getbootstrap.com/).
Due to Bootstrap's opinionated designs this was sometimes annoying and
required a lot of hacking. For the MBM 2020 website I therefore decided to
use [TailwindCSS](https://tailwindcss.com/). This requires a little bit of 
setup.

## Setup

You need to install `node` and the `npm` package manager. Since all the
necessary packages are listed in `package.json` all that is need is a simple
`npm install` inside of this directory.

The setup was originally taken from [here](https://blog.frankdejonge.nl/setting-up-docs-with-tailwind-css-and-github-pages/).

A bunch of other tools are used to minimize the size of the website and ease
development. During development one should run `npm run dev` in this directory
before starting Jekyll. When pushing a production version of the website, run
`npm run prod` first to minimize the assets (css code etc.).
`npm run watch` can be used for interactive regeneration of `css` and `js`
files during development.

## Jekyll

Since the site is built on top of Jekyll (which allows it to be easily hosted
on GitHub) it requires `ruby`, `jekyll`, and `bundler` to be installed.
A simple `bundle install` or `bundle update` will then install all the
necessary ruby gems. The site should be tested locally and can be run
by starting `bundle exec jekyll serve`.