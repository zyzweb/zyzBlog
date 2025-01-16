PostCSS可以理解为css中的babel,通过插件来实现对css的处理

### autoprefixer

通过can i use来添加前缀





<mark>cssdb是postcss-preset-env的实现基准</mark>,主要就是CSS的新功能功能及这些功能从提出到成为标准时所在的进程类似ecma



postcss-cssnext 已经被postcss-preset-env替代了

postcss-loader





css modules解决命名空间



postcss  postcss-loader 可以自动加上 ms-  webkit-

创建 postcss.config.js(配置文件)





### 常用插件

autoprefixer   通过can i use的数据来添加前缀 (不推荐使用)

postcss-preset-env   已经包含了autoprefixer,另外还可以使用css新特性 比如: #12345678最后2位显示透明度  (推荐使用)

postcss-px-to-viewport  px转vw  (推荐用这个配合vw使用)

postcss-pxtorem  px转rem

postcss-modules  可以使用CSS Modules

postcss-import   支持`@import`写法 @import 应该在文件的顶部

tailwindcss/nesting  可以在预处理器中识别@apply这种自定义规则



## vite中使用postcss

Vite自身已经集成PostCSS，无需再次安装。另外也无需单独创建PostCSS配置文件，已集成到`vite.config.js`的`css`选项中。可直接配置`css.postcss`选项即可



## 参考链接

[postcss-preset-env playground](https://preset-env.cssdb.org/playground/)

[webpack中使用postcss-preset-env](https://juejin.cn/post/7000141573480513550)

[postcss插件列表](https://github.com/postcss/postcss/blob/main/docs/plugins.md)

[postcss中文文档](https://github.com/postcss/postcss/blob/main/docs/README-cn.md) 优先参考

[postcss中文文档-印记中文](https://postcss.docschina.org/doc/)  可参考,有点旧

[PostCSS学习指南终结篇](https://segmentfault.com/a/1190000041075583)

