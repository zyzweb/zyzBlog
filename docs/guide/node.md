多去npm上看看别人的npm包是怎么写的

Npm 只是node全局包中一个模块

Npm 6.14.13

Node 8.17.0 npm 6.4.1

node 10.16.0 npm 6.9.0

nvm更改node版本时会自动更改npm

可以手动更改npm版本 npm i -g npm@6.14.13

@jyb/jfet-image包 在jyb ——– http://npm.jyb.com/

npm i -g @jyb/jfet @jyb/jfet-build @jyb/jfet-doc @jyb/jfet-init @jyb/jfet-pack @jyb/jfet-server @jyb/jfet-solution-h5act @jyb/jfet-solution-h5boxes @jyb/jfet-solution-h5product

@jyb/jfet-image包 在jyb ——– http://npm.jyb.com/

nvm install v5.0.0 –reinstall-packages-from=4.2 //从其他版本导入包

nvm install node //安装最新版node

npm install -g npm 更新npm版本

express 中间件 next() 不会暂停后面的代码,koa解决了这个问题,用async函数

nodejs不需要使用babel,直接用新特性语法

bff包括 向前端提供http服务,向后发送rpc请求

# node调试

先确认断点的文件是被执行的, 再确认是不是在同一个进程执行的, 不是的话需要 attach 到对应的进程调试才会进入断点

node --inspect app.js

需要打开vscode  auto attach 才能激活调试

"args":["init"]  // launch.json  添加参数相当于在命令行添加参数

可以在调试中添加多个配置,切换进行使用



忽略列表  ^internal[A-Za-z0-9/_]*\.js$

```shell
node --inspect-brk=9229 app.js #在app第一行断点
node --inspect-brk=9229 /Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin/vue  create jjj  #调试全局vue cli
```

方法一:

f12点击node图标

方法二:

Chrome://inspect 查看

```javascript
# 配置node请求代理
proxy: "<http://127.0.0.1:9091>",
// host: '127.0.0.1',
// port: '9091'
// proxy: {
//   url: "127.0.0.1",
//   port: '9091'
// },
```

### bff  Backend for Frontend

**bff配合后端微服务**

对用户提供http服务

使用后端RPC服务





阻塞 I/O 和非阻塞 I/O 的区别就在于系统接收输入再到输出期间，能不能接收其他输入

食堂打饭对于打饭阿姨是阻塞io,餐厅点菜对于服务员来说是非阻塞io



vscode 可以使用命令 restart task  重启命令

webstorm  可以点击按钮重启任务



### 调试node_modules的包

先看main  modules的路径,包如果依赖不是很多可以直接拷贝,或者transpileDependencies在当前项目编译库



### express

核心功能：

1. 路由

2. request,/response简化

   > request:pathname、query等
   > response:send()、json()、jsonp()等

3. 中间件

   > 更好地组织流程代码
   > 异步会打破Express的洋葱模型



### koa

核心功能：

1. 比Express更极致的request/response简化

   > ctx.status=200
   > ctx.body 'hello world'

2. 使用async function实现的中间件

   > 有“暂停执行”的能力
   > 在异步的情况下也符合洋葱模型

3. 精简内核，所有额外功能都移到中间件里实现

   

### express vs koa

1. Express门槛更低，Koa更强大优雅
2. Express封装更多东西，开发更快速，Koa可定制型更高



### RPC调用

Remote Procedure Call（远程过程调用）

**与ajax共同点**

1. 都是两个计算机之间的网络通信

2. 需要双方约定一个数据格式

   

**与ajax不同点**

1. 不一定使用DNS作为寻址服务
2. 应用层协议一般不使用HTTP
3. 基于TCP或UDP协议





### 参考链接:

[node中发送请求](https://www.misterma.com/archives/893/)

[node抓axios和request包](https://zhuanlan.zhihu.com/p/390785202)

[m1 芯片的 node 版本问题](https://www.clloz.com/programming/front-end/js/2021/10/27/node-version-apple-silicon/)

[nodejs最佳实践](https://github.com/goldbergyoni/nodebestpractices/blob/master/README.chinese.md)

[npm trends npm包对比](https://npmtrends.com/angular-vs-react-vs-vue)

[awesome-nodejs](https://github.com/sindresorhus/awesome-nodejs#tutorials)

[搜索npm](https://npm.devtool.tech/)

[nodejs发布时间表](https://github.com/nodejs/release#release-schedule)



node --inspect-brk=9229 /Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin/vue  create jjj



待学习

element 学习

https://github.com/liusaint/element-analysis/blob/master/%E7%BB%84%E4%BB%B6%E5%88%86%E6%9E%90.md

vite新建一个项目  看请求和打包之后的对比





minicss

shadow dom
