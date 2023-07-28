---
layout: ../../layouts/BlogLayout.astro
title: My website's design
author: Haris Raza
date: 12-07-2023
description: A brief look into the design of my website.
---

Ever since I designed my first website back in January, I have learnt a lot about what I like/dislike with regards to web-design. However, designing things is *hard* and I suck at it. This iteration aims to keep the design as simple as possible. I'll use *threejs/WebGL* for the "shiny" parts of my website... once I get around to it. 

Here I am briefly going to go over the *current* design, choices of technologies and so forth...

## The Astro Framework

Beforehand, I have used [React](https://react.dev) + [Next.js](https://nextjs.org) to build my website. However, I realise that I don't necessarily need all the tools these frameworks provide. This website is not a fully featured web application. At most, I would use React for 3D development through the useful [react-three-fiber](https://github.com/pmndrs/react-three-fiber) library.

This is where [Astro](https://astro.build) comes in. It is an *all-in-one* framework with speed in mind. I work with `.astro` file types which are essentially `.html` files with a little bit extra. Astro also allows me to optionally bundle frameworks likes React, Vue or Svelte into their own little components (I could even mix them together). So when I want to use those tools, I can contain them in their own little components whilst leaving the rest of the site to be pure HTML + CSS + JavaScript.

## Color Scheme

I **really** like earthy-neutral tones and have tried to stick to the [60-30-10 rule](https://uxplanet.org/the-60-30-10-rule-a-foolproof-way-to-choose-colors-for-your-ui-design-d15625e56d25) as much as possible. This article on [design systems](https://blog.maximeheckel.com/posts/building-a-design-system-from-scratch/) from Maxime Heckel was extremely helpful in understanding some concepts. I'm not sure if its good practice, but I directly style HTML elements as of right now. You can see my defined CSS global variables in `:root` with your browser's dev tools.

## Markdown

Markdown is simple and easy so that is what I use for these posts. I would like to use [MDX](https://mdxjs.com/) in the future since then I can be more flexible with how I present things as well as adding a layer of interactivity to posts. Astro seems to work quite nicely with it too. 

## Code 

Of course I will be showing code here and there. Inline code is already `styled` but code blocks were a bit more tricky. I came across a fairly new library called [expressive-code](https://github.com/expressive-code/expressive-code) which was exactly what I was looking for. Examples of code blocks are shown below.

```js
// this is some javascript code
const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshNormalMaterial()
const mesh = new THREE.Mesh(geometry, material)

scene.add(mesh)
```

```glsl
// this is some glsl code
void main {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
}
```

### Text Formatting

We have **bold** text and *italic* text. I mean not much else to say really...