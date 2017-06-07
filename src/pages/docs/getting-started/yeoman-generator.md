---
title: "Yeoman Generator"
description: "Generating a base component for your project."
layout: "guide"
icon: "flash"
weight: 2
---

###### {$page.description}

<article id="6">

## Using Yeoman Generator

You can organize your Metal.js project in any way you want, but to start out we recommend using the [Yeoman generator](http://npmjs.com/package/generator-metal) we've created, which prepares both the project structure as well as a basic development workflow for you.

<ol>
  <li>
    <p>
      Install <a href="https://nodejs.org">NPM</a> v3.0.0 or newer (if you
      don't have it yet)
    </p>
  </li>
  <li>
    <p>Install <strong>Yeoman</strong> and <strong>generator-metal</strong>:</p>
    <p><code>[sudo] npm i -g yo generator-metal</code></p>
  </li>
  <li>
    <p>
      Open the folder that you want to use on your terminal and type: <code>yo metal</code>
    </p>
  </li>
  <li>
    <p>Answer the generator prompts:</p>
    <img src="http://metaljs.com/images/docs/prompts.png" width="500"><br>
  </li>
  <li><p>Wait for the generator to finish fetching dependencies</p></li>
</ol>

After those steps you'll get a directory tree similar to this:

```bash
├── demos
    │   └── index.html
    ├── node_modules
    ├── package.json
    ├── src
    │   ├── Modal.js
    │   ├── Modal.soy // Only if Soy was chosen
    │   └── modal.scss
    └── test
        └── Modal.js
```

<strong>generator-metal</strong> will already include some npm scripts
to help you build and test your code, as well as many gulp tasks
via <a href="/docs/building.html#gulp-metal">gulp-metal</a>.


By the way, the boilerplate zip provided by
the <a href="/docs/#boilerplate">getting started guide</a> was created
using <strong>generator-metal</strong>.

</article>
