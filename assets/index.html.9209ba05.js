import{_ as s,o as r,c as a,a as e,b as t,e as o,d as i,r as l}from"./app.937cc910.js";const c={},d=e("h1",{id:"node-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#node-js","aria-hidden":"true"},"#"),o(" Node.js")],-1),p=e("h2",{id:"linting",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#linting","aria-hidden":"true"},"#"),o(" Linting")],-1),u={href:"https://medium.com/the-node-js-collection/why-and-how-to-use-eslint-in-your-project-742d0bc61ed7",target:"_blank",rel:"noopener noreferrer"},h=o("Why and how to use ESLint"),_=i(`<h2 id="npm-run-issue" tabindex="-1"><a class="header-anchor" href="#npm-run-issue" aria-hidden="true">#</a> NPM run issue</h2><p>I received the following errors when running npm install.</p><blockquote><p>No receipt for &#39;com.apple.pkg.CLTools_Executables&#39; found at &#39;/&#39;.</p></blockquote><blockquote><p>No receipt for &#39;com.apple.pkg.DeveloperToolsCLILeo&#39; found at &#39;/&#39;.</p></blockquote><blockquote><p>No receipt for &#39;com.apple.pkg.DeveloperToolsCLI&#39; found at &#39;/&#39;.</p></blockquote><p>Use the following steps to fix.</p><ul><li><p>Install Xcode</p></li><li><p>Run the following command</p></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),f=o("Reference: "),m={href:"https://github.com/nodejs/node-gyp/issues/569",target:"_blank",rel:"noopener noreferrer"},b=o("Github issue page");function g(x,k){const n=l("ExternalLinkIcon");return r(),a("div",null,[d,p,e("p",null,[e("a",u,[h,t(n)])]),_,e("p",null,[f,e("a",m,[b,t(n)])])])}var N=s(c,[["render",g],["__file","index.html.vue"]]);export{N as default};
