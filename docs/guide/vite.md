vite 默认框架

vanilla (史上最轻量跨平台前端框架,Bootstrap5舍弃了Jquery,选择了vanilla)

vue

react

preact(react简化版)

svelte





能利用很多rollup插件



esbuild 替代 webpack

swc 替代babel



### 与vue cli区别

vue cli 用的是webpack打包,vue cli 生态更完整,生成的目录更完整,vite更轻量



vite做脚手架更加轻量



分为源码和依赖(采用esbuild预构建(快10-100倍)

HMR比webpack快,因为更新颗粒度更小

源码采用304 Not Modified 协商缓存

依赖Cache-Control: max-age=31536000,immutable 强缓存

生产环境 最好 tree-shaking、懒加载和 chunk 分割(目前使用的是rollup)