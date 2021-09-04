#### 处理node命令相关参数

> yargs - https://www.npmjs.com/package/yargs

#### 检测数据可能的编码类型

> chardet - https://www.npmjs.com/package/chardet

#### 转换数据编码类型为UTF-8

> iconv-lite - https://www.npmjs.com/package/iconv-lite

#### 处理node环境变量的兼容

> cross-env - https://www.npmjs.com/package/cross-env

#### 处理文件读取

> glob - https://www.npmjs.com/package/glob

#### 解析请求中的FormData数据

- 请求：content-type = multipart/form-data

  ```js
  const { file } = req;
  let formData = new FormData();
  formData.append(`file`, file);
  ```

> busboy - https://www.npmjs.com/package/busboy

> co-busboy - https://www.npmjs.com/package/co-busboy 【co\koa的busboy】

#### 销毁数据流

> stream-wormhole - https://www.npmjs.com/package/stream-wormhole

#### 检测代码提交的重复率

> jscpd - https://www.npmjs.com/package/jscpd

#### 处理pkg文件的执行命令

> scripty - https://www.npmjs.com/package/scripty

#### Node开发日志记录

> log4js - https://www.npmjs.com/package/log4js

#### 单元测试

> mocha - https://www.npmjs.com/package/mocha

> chai - https://www.npmjs.com/package/chai

> supertest - https://www.npmjs.com/package/supertest [接口测试]

#### Koa服务器相关

> koa - https://www.npmjs.com/package/koa

> @koa/router - https://www.npmjs.com/package/@koa/router [路由]

> koa-swig - https://www.npmjs.com/package/koa-swig [渲染模版]

> koa-static - https://www.npmjs.com/package/koa-static [静态资源服务器]

> koa2-connect-history-api-fallback - https://www.npmjs.com/package/koa2-connect-history-api-fallback [真假路由处理]

#### ES6兼容

> @babel/node - https://www.npmjs.com/package/@babel/node

> @babel/preset-env - https://www.npmjs.com/package/@babel/preset-env

#### Gulp构建工具相关

> gulp - https://www.npmjs.com/package/gulp

> gulp-watch - https://www.npmjs.com/package/gulp-watch [监听文件变化启动构建]

> gulp-babel - https://www.npmjs.com/package/gulp-babel

> gulp-plumber - https://www.npmjs.com/package/gulp-plumber [防止gulp管道因错误退出]

> gulp-rollup - https://www.npmjs.com/package/gulp-rollup

> @rollup/plugin-replace - https://www.npmjs.com/package/@rollup/plugin-replace [rollup生成bundle时替换字段]