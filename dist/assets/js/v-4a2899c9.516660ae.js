(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[4075],{4022:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-4a2899c9",path:"/doc/github%20pages%E5%92%8Cgithub%20actions%20%E4%BD%BF%E7%94%A8.html",title:"github pages和github actions 使用",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:3,title:"一、建立仓库zyzBlog并新建master和gh-pages分支(github现在默认分支为main分支,但是workflow默认为master需注意)",slug:"一、建立仓库zyzblog并新建master和gh-pages分支-github现在默认分支为main分支-但是workflow默认为master需注意",children:[]},{level:3,title:"二、在仓库设置环境变量(代码需和仓库设置保持一致)",slug:"二、在仓库设置环境变量-代码需和仓库设置保持一致",children:[]}],filePathRelative:"doc/github pages和github actions 使用.md",git:{updatedTime:162634931e4,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:3}]}}},1005:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>y});var e=a(6252);const t=(0,e.uE)('<h1 id="github-pages和github-actions-使用"><a class="header-anchor" href="#github-pages和github-actions-使用">#</a> github pages和github actions 使用</h1><h3 id="一、建立仓库zyzblog并新建master和gh-pages分支-github现在默认分支为main分支-但是workflow默认为master需注意"><a class="header-anchor" href="#一、建立仓库zyzblog并新建master和gh-pages分支-github现在默认分支为main分支-但是workflow默认为master需注意">#</a> 一、建立仓库zyzBlog并新建master和gh-pages分支(<strong>github现在默认分支为main分支,但是workflow默认为master需注意</strong>)</h3><h3 id="二、在仓库设置环境变量-代码需和仓库设置保持一致"><a class="header-anchor" href="#二、在仓库设置环境变量-代码需和仓库设置保持一致">#</a> 二、在仓库设置环境变量(代码需和仓库设置保持一致)</h3><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>三、配置workflows设置</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token comment"># ci.yml</span>\n<span class="token key atrule">name</span><span class="token punctuation">:</span> GitHub Actions Build and Deploy Blog\n<span class="token key atrule">on</span><span class="token punctuation">:</span>\n  <span class="token key atrule">push</span><span class="token punctuation">:</span>\n    <span class="token key atrule">branches</span><span class="token punctuation">:</span>\n      <span class="token punctuation">-</span> master <span class="token comment">#触发分支,其他分支提交不触发</span>\n<span class="token key atrule">jobs</span><span class="token punctuation">:</span>\n  <span class="token key atrule">build-and-deploy</span><span class="token punctuation">:</span>\n    <span class="token key atrule">runs-on</span><span class="token punctuation">:</span> ubuntu<span class="token punctuation">-</span>latest   <span class="token comment">#虚拟机环境包含了nodejs</span>\n    <span class="token key atrule">steps</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Checkout\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> actions/checkout@master\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Install and Build\n      <span class="token key atrule">run</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n        npm install\n        npm run build</span>\n    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Deploy github pages\n      <span class="token key atrule">uses</span><span class="token punctuation">:</span> JamesIves/github<span class="token punctuation">-</span>pages<span class="token punctuation">-</span>deploy<span class="token punctuation">-</span>action@releases/v3\n      <span class="token key atrule">with</span><span class="token punctuation">:</span>\n        <span class="token key atrule">ACCESS_TOKEN</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.ACCESS_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token key atrule">BRANCH</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages\n        <span class="token key atrule">FOLDER</span><span class="token punctuation">:</span> dist   <span class="token comment">#打包之后目录</span>\n        \n    \n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>四、注意事项</p><ol><li>日志默认保存30天</li><li>package.json添加homepage字段,部署后的根目录</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;homepage&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://zyzweb.github.io/zyzBlog&quot;</span><span class="token punctuation">,</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',9),p={start:"3"},l=(0,e.Wm)("li",null,"只需设置环境变量,不需要设置仓库变量",-1),o=(0,e.Uk)("github官方action地址 "),u={href:"https://github.com/actions",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("github.com/actions"),r=(0,e.Uk)(",还有"),i={href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"},k=(0,e.Uk)("官方市场"),b=(0,e.Uk)(","),m={href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"},g=(0,e.Uk)("awesome actions"),h=(0,e.Uk)("仓库"),d=(0,e.Wm)("li",null,"GitHub Actions可免费用于公共仓库。对于私有仓库，它具有按需付费的机制",-1),y={render:function(n,s){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.j4)(e.HY,null,[t,(0,e.Wm)("ol",p,[l,(0,e.Wm)("li",null,[o,(0,e.Wm)("a",u,[c,(0,e.Wm)(a)]),r,(0,e.Wm)("a",i,[k,(0,e.Wm)(a)]),b,(0,e.Wm)("a",m,[g,(0,e.Wm)(a)]),h]),d])],64)}}}}]);