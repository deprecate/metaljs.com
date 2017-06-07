---
title: "Getting Started"
description: "Metal.js is a javascript library for building UI components in a solid and flexible way."
layout: "guide"
icon: "flash"
weight: 1
---

###### {$page.description}

<article id="1">

## Introduction

There are many different ways to build components using Metal.js. You can use the built-in integrations with [Soy](http://developers.google.com/closure/templates/) or [JSX templates](https://facebook.github.io/jsx/), or even build your own template abstraction on top of Metal.js and use it instead.

You can build the ES6 code using babel, webpack or any other package bundler. You can test using karma, jasmine or any other test framework, and even use any directory structure for your project. To sum it up, you can customize everything to your own needs. The world is your oyster.

</article>

<article id="2">

## Architecture

![metal_architecture](http://metaljs.com/images/metal_architecture@2x.png)

Metal.js' main classes are State and Component. Component actually extends from State, thus containing all its features. The main difference between the two is that Component's extra features are related to rendering. So you could just use State directly if your module doesn't do any rendering. But if your module does need rendering logic, then Component will work better for you.

Many people have their own favorite way of dealing with rendering logic. Some prefer to use template languages that completely separate it from the business logic, while others like to keep both close together in the same file. Metal.js doesn't force developers to go with only one of those. By default it offers integration points with both closure templates from Google and JSX from Facebook, and it's possible to add more options, since the rendering layer is customizable.

</article>

<article id="3">

## Introducing Soy

Closure Templates are a client- and server-side templating system that helps you dynamically build reusable HTML and UI elements. They have a simple syntax that is natural for programmers, and you can customize them to fit your application's needs. In contrast to traditional templating systems, in which you must create one monolithic template per page, you can think of Closure Templates as small components that you compose to form your user interface. You can also use the built-in message support to easily localize your applications.

Closure Templates are implemented for both JavaScript and Java, so that you can use the same templates on both the server and client side. They use a data model and expression syntax that work for either language. For the client side, Closure Templates are precompiled into efficient JavaScript.

</article>

<article id="4">

## Introducing JSX

JSX is a XML-like syntax extension to ECMAScript without any defined semantics. It may remind you of a template language, but it comes with the full power of JavaScript.

</article>

<article id="6">

## Trying it out

This guide will focus on a quick and easy way to get started with Metal.js. But if you are excited to try it out as soon as possible you can just play around with this [JSFiddle](https://jsfiddle.net/metaljs/y1tqa7vz/).

The Installation page provides more options of installing Metal.js.

</article>
