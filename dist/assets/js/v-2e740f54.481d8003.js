(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[3815],{521:(e,p,t)=>{"use strict";t.r(p),t.d(p,{data:()=>s});const s={key:"v-2e740f54",path:"/doc/%E5%BF%AB%E9%80%9F%E5%AE%9A%E4%BD%8Dbug.html",title:"快速定位bug",lang:"zh",frontmatter:{},excerpt:"",headers:[],filePathRelative:"doc/快速定位bug.md",git:{updatedTime:162471404e4,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:1}]}}},1346:(e,p,t)=>{"use strict";t.r(p),t.d(p,{default:()=>a});const s=(0,t(6252).uE)('<h1 id="快速定位bug"><a class="header-anchor" href="#快速定位bug">#</a> 快速定位bug</h1><p>一眼能看出来的除外</p><p>1.看能不能抓包,安卓packet capture;ios stream;windows fiddler;</p><p>macOs charles; whislte; noHost判断出前后端问题</p><p>2.养成规范的代码规范,也便于debug</p><p>3.css可以在element上删除,采用排除法,vue中同理删除watch,template;</p><p>4.断点调试</p><p>有些样式容易消失利用下面断点</p><p>setTimeout(() =&gt; {debugger}, 2000)</p><p>5.看本地能不能复现,不能复现就用生产的sourceMap</p><p>6.前端建立性能和错误监控系统,有时候也可以帮助排查,例如:sentry</p><p>7.熟悉流程业务也是帮你快速定位问题的关键,平时多看看了解一下系统</p><p>8.界面要用弹窗给出报错信息</p><p>9.代码多考虑格式对不对，不对就提示</p><p>10.兼容性问题可以多用几台手机,或者用云平台测,例如:岩鼠</p><p>这个功能正常情况下用处不大，普通的异常会在控制台显示，在控制台也能定位过去，可以定位过去之后再手工加断点， 但是对于catch 之后没有throw的代码，在控制台是看不到的，但是这个异常自动断点功能仍然能捕获到</p><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210622142356613.png" alt="image-20210622142356613"></p><p>https://juejin.cn/post/6844903844573347854</p><p>https://www.fundebug.com/</p>',19),a={render:function(e,p){return s}}}}]);