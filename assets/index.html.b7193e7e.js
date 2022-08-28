import{_ as i,o as s,c as a,a as e,b as d,e as n,d as r,r as o}from"./app.937cc910.js";const l={},c=e("h1",{id:"vue-js",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#vue-js","aria-hidden":"true"},"#"),n(" Vue.js")],-1),p=e("h2",{id:"features",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),n(" Features")],-1),u=e("p",null,"A summary of features that Vue.js provides.",-1),v={href:"https://www.vuemastery.com/pdf/Vue-Essentials-Cheat-Sheet.pdf",target:"_blank",rel:"noopener noreferrer"},m=n("Vue Mastery cheatsheet"),h=r(`<h3 id="components" tabindex="-1"><a class="header-anchor" href="#components" aria-hidden="true">#</a> Components</h3><p>A component is a Vue.js instance that can be reused inside of other components.</p><p>Below example shows the AppNav component being used inside of the template of the App.vue component.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;header id=&quot;header-main&quot;&gt;
  &lt;div id=&quot;header-content&quot;&gt;
    &lt;AppNav /&gt;
  &lt;/div&gt;
&lt;/header&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Inside of the script tag of the App.vue component is where the component would be imported.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
import AppNav from &quot;./components/AppNav&quot;;

export default {
  components: { AppNav }
};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> Props</h3><p>Props are properties that can be registered on components.</p><p>Below example shows an id prop defined inside of ProfileEdit.vue</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script&gt;
import { mapState } from &quot;vuex&quot;;
import store from &quot;@/store/store&quot;;

export default {
  props: {
    id: {
      type: String
    }
  }
};
&lt;/script&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10);function b(f,x){const t=o("ExternalLinkIcon");return s(),a("div",null,[c,p,u,e("p",null,[e("a",v,[m,d(t)])]),h])}var g=i(l,[["render",b],["__file","index.html.vue"]]);export{g as default};
