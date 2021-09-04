(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[4205],{6890:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>p});const p={key:"v-3ef410e4",path:"/doc/uuid.html",title:"",lang:"zh",frontmatter:{},excerpt:"",headers:[],filePathRelative:"doc/uuid.md",git:{updatedTime:162471404e4,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:1}]}}},7423:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>t});const p=(0,a(6252).uE)('<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>uuid\n<span class="token doc-comment comment">/**\n\\* 生成uuid\n*\n\\* @export\n\\* @returns\n*/</span>\n<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">generateUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n <span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n <span class="token keyword">const</span> hexDigits <span class="token operator">=</span> <span class="token string">&#39;0123456789abcdef&#39;</span><span class="token punctuation">;</span>\n <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">36</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  s<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> hexDigits<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">0x10</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token punctuation">}</span>\n s<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">;</span>\n s<span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">]</span> <span class="token operator">=</span> hexDigits<span class="token punctuation">.</span><span class="token function">substr</span><span class="token punctuation">(</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">]</span> <span class="token operator">&amp;</span> <span class="token number">0x3</span><span class="token punctuation">)</span> <span class="token operator">|</span> <span class="token number">0x8</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n s<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span> <span class="token operator">=</span> s<span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">;</span>\n <span class="token keyword">const</span> uuid <span class="token operator">=</span> s<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n <span class="token keyword">return</span> uuid<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">const</span> nonceStr <span class="token operator">=</span> <span class="token function">generateUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">-</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> sha256 <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;js-sha256&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>sha256<span class="token punctuation">;</span>\n<span class="token keyword">const</span> sign <span class="token operator">=</span> <span class="token function">sha256</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>information<span class="token punctuation">.</span>agentNo <span class="token operator">+</span> nonceStr<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nnonceStr 鉴权参数    sign  鉴权参数\n\n捕获返回键\nwindow<span class="token punctuation">.</span>wrapView<span class="token punctuation">.</span>headerView<span class="token punctuation">.</span>leftBtnClick <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">handleClickExplain</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token string">&quot;inspect&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vue-cli-service inspect &gt; output.js&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p>Anki</p><p>在salad设置—单词管理—检查anyConnect,然后自动保存就会放在自动保存卡片了</p>',3),t={render:function(n,s){return p}}}}]);