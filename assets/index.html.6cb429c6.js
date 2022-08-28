import{_ as e,o as a,c as t,d as i}from"./app.3e1823c7.js";const r={},s=i(`<h1 id="factories" tabindex="-1"><a class="header-anchor" href="#factories" aria-hidden="true">#</a> Factories</h1><p>Factories use Faker to create test data in the DB.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:factory ArticleFactory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Create factory with matching Model</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>php artisan make:factory ArticleFactory -m &quot;App\\Article&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Run factories via tinker.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>factory(App\\Article::class, 5)-&gt;create();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,7),c=[s];function n(d,l){return a(),t("div",null,c)}var u=e(r,[["render",n],["__file","index.html.vue"]]);export{u as default};