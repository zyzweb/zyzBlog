(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[7163],{6286:(e,a,t)=>{"use strict";t.r(a),t.d(a,{data:()=>s});const s={key:"v-569edce6",path:"/doc/%E5%B8%B8%E8%A7%81%E6%8A%A5%E9%94%99.html",title:"常见报错",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"网络错误 network错误",slug:"网络错误-network错误",children:[]},{level:2,title:"发布报错",slug:"发布报错",children:[]},{level:2,title:"拒绝加载脚本因为违反了内容安全策略(csp)",slug:"拒绝加载脚本因为违反了内容安全策略-csp",children:[]},{level:2,title:"the content must be served over HTTPS",slug:"the-content-must-be-served-over-https",children:[{level:3,title:"vue引入组件报错",slug:"vue引入组件报错",children:[]},{level:3,title:"背景颜色不生效",slug:"背景颜色不生效",children:[]}]}],filePathRelative:"doc/常见报错.md",git:{updatedTime:162634931e4,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:3}]}}},6539:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>p});var s=t(6252);const n=(0,s.uE)('<h1 id="常见报错"><a class="header-anchor" href="#常见报错">#</a> 常见报错</h1><h2 id="网络错误-network错误"><a class="header-anchor" href="#网络错误-network错误">#</a> 网络错误 network错误</h2><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210605170349080.png" alt="image-20210605170349080"></p><p>后台服务关闭了/请求路径或方法有问题</p><h2 id="发布报错"><a class="header-anchor" href="#发布报错">#</a> 发布报错</h2><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210605170447692.png" alt="image-20210605170447692"><h2 id="拒绝加载脚本因为违反了内容安全策略-csp"><a class="header-anchor" href="#拒绝加载脚本因为违反了内容安全策略-csp">#</a> 拒绝加载脚本因为违反了内容安全策略(csp)</h2><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210618124321864.png" alt="image-20210618124321864"></p>',8),i=(0,s.Uk)("解决方法: "),l={href:"https://chrome.google.com/webstore/detail/disable-content-security/ieelmcmcagommplceebfedjlakkhpden",target:"_blank",rel:"noopener noreferrer"},c=(0,s.Uk)("使用chrome插件 csp"),r=(0,s.uE)('<h2 id="the-content-must-be-served-over-https"><a class="header-anchor" href="#the-content-must-be-served-over-https">#</a> the content must be served over HTTPS</h2><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210618152620777.png" alt="image-20210618152620777"></p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210618152723948.png" alt="image-20210618152723948" style="zoom:50%;"><h3 id="vue引入组件报错"><a class="header-anchor" href="#vue引入组件报错">#</a> vue引入组件报错</h3><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210706135952257.png" alt="image-20210706135952257"></p><p>原因:组件名称和引入组件名称一样了</p><p>使用async/await</p><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210811160732044.png" alt="image-20210811160732044"></p><p>原因分析：在程序中使用了 async/await ，经过@babel/preset-env 解析后会将代码转换为一个名为regeneratorRuntime的函数，但是转换后的代码仅仅存在这个函数的调用，并没有具体的定义体现。 解决方案： 1、安装@babel/polyfill</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> @babel/polyfill -D\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>2、入口文件引入@babel/polyfill</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">import</span> <span class="token string">&#39;@babel/polyfill&#39;</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>https://sweb-sit.jjdzmall.com/base/index?cmd=42010109&amp;type=yj&amp;redirect=https%3A%2F%2Fcdnsit.jjdzmall.com%2Fboxes%2Fapp%2F38fdcfb14e29427ba1b0c72cdaa89bb8%2Fpages%2Finvite.html%3Fact_id%3DGAE5ZxkBH30%3D%26inviterId%3D100000413</p><p>删除index.hbs中的weixin.hbs</p><h3 id="背景颜色不生效"><a class="header-anchor" href="#背景颜色不生效">#</a> 背景颜色不生效</h3><p>先看本地是否有问题,没有在看积木的配置</p>',16),p={render:function(e,a){const t=(0,s.up)("OutboundLink");return(0,s.wg)(),(0,s.j4)(s.HY,null,[n,(0,s.Wm)("p",null,[i,(0,s.Wm)("a",l,[c,(0,s.Wm)(t)])]),r],64)}}}}]);