# Notes

## Introduction

After doing some research into static site generators and finding out that vuepress is a pretty good tool for documentation generation I decided to give it a try and use it for my personal developer notes instead of writing up quick notes in a txt file.

At first I thought it was a requirement to prrogram in VueJS to generate documentation but it turns out it's optional, you can pretty much get away with simply creating the markdown files for the documentation pages and using the vuepress build command to generate the documentation website.

## Setup

Use the following commands to install npm and vuepress to run and manage pages for vuepress app.

### Node Install

#### Windows Install

Install Node.js if npm isn't available (install via chocolately).

```
choco install nodejs
```

#### MacOS Install

Install Node.js if npm isn't available (install via brew).

```
brew install node
```

### NPM Install

After node use NPM to install vuepress via npm.

```
npm install -D vuepress@next
```

## Commands

After cloning the repo you may need to run npm install if you can't run it locally.

```
npm install
```

You only need to use the following commands to work with vuepress.

Run vuepress locally.

Website should be available at [http://localhost:8080](http://localhost:8080).

```
npx vuepress dev
```

Build static site files.

```
npx vuepress build
```

## Creating pages

After checking out some online markdown editors I've choosen Stack Edit as it shows a markdown code column along with a preview column so you can see what your changes as you code.

[Stackedit markdown editor](https://stackedit.io/app)

### Markdown syntax

Guide from the official markdown website on how to use the basic markdown syntax for creating pages with this app.

[Markdown \- Basic Syntax](https://www.markdownguide.org/basic-syntax)

### References!!!

The below link provides a vast number of links to resources related to Vuepress such as plugins, themes and guides.

[Awesome Vuepress](https://github.com/vuepressjs/awesome-vuepress)
