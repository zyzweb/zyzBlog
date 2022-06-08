```shell
npkill  #删除node_modules
yargs #处理node命令相关参数
chardet #检测数据可能的编码类型
iconv-lite #转换数据编码类型为UTF-8
cross-env #处理node环境变量的兼容
glob #处理文件读取 [使用方法](https://cloud.tencent.com/developer/article/1752854) https://www.cnblogs.com/savorboard/p/glob.html
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
jsencrypt  #支持RSA

#koa相关
koa #类似express服务器
@koa/router #路由
koa-swig #渲染模板
koa-static #静态资源服务器
koa2-connect-history-api-fallback #真假路由处理

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



