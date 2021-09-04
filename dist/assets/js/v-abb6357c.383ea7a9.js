(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[5909],{6236:(e,r,p)=>{"use strict";p.r(r),p.d(r,{data:()=>l});const l={key:"v-abb6357c",path:"/doc/%E5%B0%8F%E7%A8%8B%E5%BA%8F%20%E5%BE%AE%E4%BF%A1%E5%85%AC%E4%BC%97%E5%8F%B7.html",title:"",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"微信公众平台和微信开放平台和微信服务平台",slug:"微信公众平台和微信开放平台和微信服务平台",children:[]},{level:2,title:"基本概念",slug:"基本概念",children:[]},{level:2,title:"小程序",slug:"小程序",children:[{level:3,title:"3种运行环境",slug:"_3种运行环境",children:[]},{level:3,title:"云开发",slug:"云开发",children:[]}]},{level:2,title:"公众号",slug:"公众号",children:[{level:3,title:"公众号的3种类型",slug:"公众号的3种类型",children:[]},{level:3,title:"订阅号和服务号的区别:",slug:"订阅号和服务号的区别",children:[]},{level:3,title:"相关链接:",slug:"相关链接",children:[]}]}],filePathRelative:"doc/小程序 微信公众号.md",git:{updatedTime:1630764086e3,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:1}]}}},7092:(e,r,p)=>{"use strict";p.r(r),p.d(r,{default:()=>A});var l=p(6252);const t=(0,l.uE)('<p>微信小程序和微信公众号都是在微信公众平台上进行管理的</p><p>小程序和公众号的全局唯一接口调用凭据都是access_token</p><p>公众号和小程序均可以使用AppID和AppSecret调用本接口来获取access_token,公众号需设置白名单,小程序不需要</p><h2 id="微信公众平台和微信开放平台和微信服务平台"><a class="header-anchor" href="#微信公众平台和微信开放平台和微信服务平台">#</a> 微信公众平台和微信开放平台和微信服务平台</h2><p>微信开放平台就是为了让第三方应用投入微信的怀抱而设计的，这第三方应用指的是比如android、ios、网站、系统等；</p><p>微信公众平台就是为了让程序员小伙伴利用微信自家技术(公众号、小程序)开发公众号、小程序而准备的，公众平台作为一个技术提供者而存在</p><p>微信服务平台类似钉钉平台,第三方入驻可以售卖服务</p><h2 id="基本概念"><a class="header-anchor" href="#基本概念">#</a> 基本概念</h2><p><strong>JS-SDK</strong>: 2015年初，微信发布了一整套网页开发工具包，称之为 JS-SDK，开放了拍摄、录音、语音识别、二维码、地图、支付、分享、卡券等几十个API</p><p>mp: Media Platform(媒体平台,微信域名前缀)</p>',10),a={href:"https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210814232042387.png",target:"_blank",rel:"noopener noreferrer"},n=(0,l.Uk)("小程序版本"),i=(0,l.uE)('<h2 id="小程序"><a class="header-anchor" href="#小程序">#</a> 小程序</h2><p><strong>外卖优惠券朱哥</strong></p><p>个人最多可注册5个小程序,公司最多可注册50个小程序</p><p>小程序的能力需要微信客户端来支撑,基础库版本一般与微信版本一一对应才能用,同一个基础库可以对应多个微信版本</p><h3 id="_3种运行环境"><a class="header-anchor" href="#_3种运行环境">#</a> 3种运行环境</h3><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210814134153044.png" alt="image-20210814134153044"></p><p>微信开发者版和微信测试版</p><p>AppID(小程序ID) wx16986c9ff67cb8cb</p><p>原始id gh_9619bc978772</p><p>AppSecret(小程序密钥) 86e81f1f0f012d4d7bee6ee713484757</p><p>openid 可以通过云开发或自己的后台获取</p><h3 id="云开发"><a class="header-anchor" href="#云开发">#</a> 云开发</h3><p>储存空间 5G</p><p>CDN流量 1G/月</p><p>数据库容量 2G</p><p>内容管理</p><p>账号 zhuyuanzheng</p><p>密码 zz123456</p><p>云开发需要一个云环境id(envId),也可以使用腾讯云的环境id</p><h2 id="公众号"><a class="header-anchor" href="#公众号">#</a> 公众号</h2><p><strong>朱哥带你飞</strong></p><p>AppID wx52d4e1a2e56636ec</p><p>AppSecret d6fef71c27b72c029009e9dc329dc2c0</p><p>个人最多可注册1个公众号,公司最多可注册2个公众号)</p><p>微信公众号昵称：朱哥带你飞 原始id：gh_993cda4f506b 登录邮箱：zyzyear@foxmail.com</p><p>每个公众号都有一个唯一的APPID</p><h3 id="公众号的3种类型"><a class="header-anchor" href="#公众号的3种类型">#</a> 公众号的3种类型</h3><p><strong>订阅号</strong>: 个人和媒体(公司) <strong>服务号</strong>:企业和组织 <strong>企业号</strong>:员工管理</p><h3 id="订阅号和服务号的区别"><a class="header-anchor" href="#订阅号和服务号的区别">#</a> 订阅号和服务号的区别:</h3>',29),h=(0,l.Wm)("li",null,"服务号每月群发4条信息,订阅号每天群发1条信息,",-1),o=(0,l.Wm)("li",null,"服务号比订阅号功能更加多",-1),s=(0,l.Uk)("订阅号为了传递信息,服务号为了提供更多功能("),c={href:"https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210814163916714.png",target:"_blank",rel:"noopener noreferrer"},d=(0,l.Uk)("功能区别"),g=(0,l.Uk)(")"),m=(0,l.Wm)("li",null,"订阅号发的信息是在订阅号文件夹中查看,服务号发的信息在对话框查看",-1),u=(0,l.Wm)("li",null,"服务号可以置顶公众号,订阅号不能",-1),f=(0,l.uE)('<p>为解决白屏问题,每个公众号下所有 Web App 累计最多可缓存 5M 的资源</p><p>每个用户对每个公众号有一个openId(使用用户微信号加密得到)</p><p>多个公众号和应用可以绑定在一个<strong>开放平台</strong>账号下，有唯一的UnionID</p><p>access_token在2小时内有效</p><p>微信认证分为资质认证和名称认证两部分，只有通过资质认证才能获得接口权限</p><p><strong>此网页由</strong>开头即为当前使用WKWebview，若以<strong>网页由</strong>则是使用的UIWebview</p><p>切换为WKWebview后，微信中的Webview行为和Safari中保持高度一致，唯一的区别是微信Webview中会注入微信JSBridge相关的脚本</p><h3 id="相关链接"><a class="header-anchor" href="#相关链接">#</a> 相关链接:</h3>',8),b={href:"https://dtmbw.com/",target:"_blank",rel:"noopener noreferrer"},W=(0,l.Uk)("DT模板网"),k=(0,l.Uk)(" (网站和小程序源码)"),v={href:"https://git.weixin.qq.com/",target:"_blank",rel:"noopener noreferrer"},z=(0,l.Uk)("微信开发者·代码管理"),w={href:"https://wechat-miniprogram.github.io/miniprogram-compat/",target:"_blank",rel:"noopener noreferrer"},_=(0,l.Uk)("微信小程序 js 执行环境的兼容信息"),A={render:function(e,r){const p=(0,l.up)("OutboundLink");return(0,l.wg)(),(0,l.j4)(l.HY,null,[t,(0,l.Wm)("p",null,[(0,l.Wm)("a",a,[n,(0,l.Wm)(p)])]),i,(0,l.Wm)("ol",null,[h,o,(0,l.Wm)("li",null,[s,(0,l.Wm)("a",c,[d,(0,l.Wm)(p)]),g]),m,u]),f,(0,l.Wm)("p",null,[(0,l.Wm)("a",b,[W,(0,l.Wm)(p)]),k]),(0,l.Wm)("p",null,[(0,l.Wm)("a",v,[z,(0,l.Wm)(p)])]),(0,l.Wm)("p",null,[(0,l.Wm)("a",w,[_,(0,l.Wm)(p)])])],64)}}}}]);