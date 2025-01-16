```shell
npkill  #删除node_modules
yargs #处理node命令相关参数
chardet #检测数据可能的编码类型
iconv-lite #转换数据编码类型为UTF-8
cross-env #处理node环境变量的兼容
glob #处理文件读取 [使用方法](https://cloud.tencent.com/developer/article/1752854) https://www.cnblogs.com/savorboard/p/glob.html
fast-glob
simple-git #操作git(gitlab-ci中使用)
shelljs  #node写shell命令 类似的还有zx
minimist  #读取node命令行参数
nodemailer  #发邮件
stream-wormhole #销毁数据流
jscpd #检测代码提交的重复率
scripty #处理pkg文件的执行命令
log4js #Node开发日志记录
mocha #单元测试
chai #单元测试
jest #单元测试
supertest #接口测试
mammoth  #word转html
agmd #自动生成项目md
vue2-org-tree #Vue2树形结构插件
lighthouse #测试性能
puppeteer #自动化测试 爬虫
pm2  #进程守护神器
Nunjucks #一个node端的模板引擎
egg-view-nunjucks  #egg的nunjucks插件
zhihu-particle #知乎背景
semver  #语义化版本解析
debug  #用来控制输出调试日志  https://segmentfault.com/a/1190000012699304
npm-run-all #用于并行或顺序运行多个npm脚本的CLI 工具
node-gyp  #nodejs 官方维护的 C++ 的构建工具，几乎所有的 Nodejs C++ 拓展都是由它来构建。基于 GYP (generate your project，谷歌的一个构建工具)进行工作，简单来说，可以想象成面向 C++ 的 Webpack
async-validator #表单异步校验 (element-ui使用)
degit  #下载代码而不是克隆(不支持私有仓库)   
#degit git@github.com:vuejs/vue.git#dev test  ~/.degit存放缓存
js-yaml #把yaml转换为js文件
node-fetch #node中使用fetch(node18已支持)
fs-extra  #增强内置的fs
patch-package  #给npm包打补丁   https://juejin.cn/post/6962554654643191815
esno  #esbuild 的 TS/ESNext node 运行时
node-xlsx  #生成excel
ava  #node 测试器
tinypng #api调用tinypng
tinypng-script-with-cache  #同上个
crypto-js  #支持多种加密方式
js-md5  #js加密md5  不推荐使用,推荐使用crypto-js
jsencrypt  #支持RSA  不推荐使用,推荐使用crypto-js
file-saver  #保存文件  web-stream
es6-promise  #promise的polyfill
nodemon  #热重启服务 supervisor类似

pako   #压缩 解压缩字符串
verdaccio #私有npm库x
jsdom  #配合ava进行e2e测试
nprogress #进度条

#koa相关
koa #类似express服务器
@koa/router #路由
koa-swig #渲染模板
koa-static #静态资源服务器
koa2-connect-history-api-fallback #真假路由处理
vue-virtual-scroll-list  #虚拟列表

#ES6兼容
@babel/node
@babel/preset-env

#Gulp构建工具相关
gulp
gulp-watch #监听文件变化启动构建
gulp-babel
gulp-plumber #防止gulp管道因错误退出
gulp-rollup
@rollup/plugin-replace #rollup生成bundle时替换字段


filemanager-webpack-plugin  #webpack
ts-node  #原生执行ts
lint-md-cli  #检测中文markdown格式规范的命令工具
unplugin-vue-components  #自动按需注册组件,无需 import
unplugin-auto-import  #无需手动 import 进行引入 自动引入vue api
vue-tv-focusable  #tv嵌入h5  焦点移动库
@vueuse/gesture  #手势库
hammer.js  #手势库
createjs  #一套完整的H5游戏引擎，做2d的动画他就足够了，包括 声音加载库：sound.js，预加载库 ：preload.js，canvas动画库：ease.js，补间动画库：tween.js
fullpage.js  #全屏滚动  vue-fullpage.js(vue版本)
chart.js  #图表库(国外开发)  echarts(国内开发)
tslib  #包含所有 TypeScript 帮助函数的 TypeScript 运行时库  vite有使用
vue-typed-js  #打字效果动画库(基于vue)
ua-device  #解析UA来得到用户终端信息的JS库(百度fex团队出品)
filesize.js  #获取文件大小
cheerio  #爬虫 类似pubteer
pdf.js  #预览pdf 复制 播放pdf
dotenv  #解析环境变量 .env
lottie-web  #解析lottie动画
prismjs  #代码语法高亮
magic-string  #操作字符串避免操作AST,换来更好的性能 生成source map
source-map  #生成source map
uuid  #生成uuid
bignumber  #解决计算精度问题  类似  Math.js  BigDecimal.js number-precision
svgo  #优化svg 比如去掉冗余信息
vite-plugin-svg-icons  #生成svg精灵图  类似webpack中 svg-sprite-loader
vite-svg-loader  #vite2.x的插件用来将svg转换成vue组件,用的svgo优化 (不推荐使用)
vite-plugin-federation #vite支持联邦模块
vite-plugin-qiankun  #vite 支持qiankun插件
vite-plugin-vue-inspector  # 跳转IDE查看
rollup-plugin-visualizer #分析vite打包之后的体积 类似webpack-bundle-analyzer
```





#### 解析请求中的FormData数据

- 请求：content-type = multipart/form-data

  ```js
  const { file } = req;
  let formData = new FormData();
  formData.append(`file`, file);
  ```

> busboy - https://www.npmjs.com/package/busboy

> co-busboy - https://www.npmjs.com/package/co-busboy 【co\koa的busboy】



