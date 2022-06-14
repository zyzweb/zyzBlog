# node

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

### 参考链接:

[node中发送请求](https://www.misterma.com/archives/893/)

[node抓axios和request包](https://zhuanlan.zhihu.com/p/390785202)

[m1 芯片的 node 版本问题](https://www.clloz.com/programming/front-end/js/2021/10/27/node-version-apple-silicon/)





node --inspect-brk=9229 /Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin/vue  create jjj
