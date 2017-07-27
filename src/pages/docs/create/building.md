---
title: "Building"
description: ""
layout: "guide"
weight: 3
---

###### {$page.description}

## Building
As we mentioned before, <strong>Metal.js</strong> components are written
in ES6, which means that we need a transpiling process before using it on
a website.

This can be done via any tools that you prefer,
like <a href="http://webpack.github.io/">webpack</a> or <a href="http://browserify.org/">browserify</a>,
but we've also published a few tools of our own, which focuses
on <strong>Metal.js</strong> projects, which we'll talk about here.

## gulp-metal

What this package offers is a a bunch
of <a href="http://gulpjs.com/">gulp</a> tasks. There are tasks that can
handle not only building javascript, as well as soy compilation,
testing, linting and many other things.

The <a href="/docs/">tutorials</a> we've provided are all using it,
though indirectly, through some npm scripts. To learn how to
use <strong>gulp-metal</strong> directly take a look at
its <a href="http://www.npmjs.com/package/gulp-metal">npm page</a>.

## metal-cli

If you're not a fan of <strong>gulp</strong> you can still
use <a href="http://www.npmjs.com/package/metal-cli">metal-cli</a>, which
offers almost the same tools, but through the command line.

## Examples using other tools

As was mentioned before,
using <strong>gulp-metal</strong> or <strong>metal-cli</strong> is not
required. You can use your favorite build tool
with <strong>Metal.js</strong> as well.

We've created a github repository full of different examples on how to work
with <strong>Metal.js</strong>, and among other things it has a bunch of
examples showing how to use different build
tools. <a href="http://github.com/metal/metal-examples">Check it out</a>,
and feel free to create an issue or send a pull request for other tools
that it may be missing.
