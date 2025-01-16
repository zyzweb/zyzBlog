### 常用规则

```bash
# www.hahaha.com http://172.16.5.140:8097/ #设置host
# https://juejin.cn/ file:///Users/zhuyuanzheng/Desktop/666.txt #本地替换(对所有协议)
# https://juejin.cn/ js:///Users/zhuyuanzheng/Desktop/666.js  #页面插入js html css
# http://172.16.5.140:8097/proxy/act/index file:///Users/zhuyuanzheng/Desktop/666.txt   #只针对http请求的文件路径替换
# www.hahaha.com https://juejin.cn/   #请求转发(替换域名)
# www.baidu.com ua://{ua}
# https://juejin.cn/ whistle.inspect:// #包含www.baidu.com 用vconsole
# https://juejin.cn/ whistle.inspect://e #包含www.baidu.com 用eruda
# https://www.zhihu.com/api/v4/creator/apply resBody://({name:1,age:2}) #拦截请求返回数据
# http://172.16.5.140:8097/proxy/act/index resBody://{res1.json} includeFilter://b:40020301
# http://172.16.5.140:8097/proxy/act/index statusCode://500 includeFilter://b:40020301 resDelay://5000
# https://juejin.cn statusCode://404  #修改状态码
# https://juejin.cn weinre://juejin  #自带的调试
# https://juejin.cn whistle.chii://juejin  #插件调试
# https://juejin.cn log://{log-test.js}   #输出日志在页面script之后

# https://cdn-ycard.yunjiaplus.com/assets/lib/jsapi/youngcard/jsapi-1.9.0.min.js http://172.16.5.59:8887/jsapi.1.9.0.js
# https://cdn-ycard.yunjiaplus.com/product/risk-profile/index.html http://172.16.5.59:8887/jsapi.html
# https://cdn-ycard.yunjiaplus.com/product/risk-profile/js/vendor-dd2f7ec3.js http://172.16.5.59:4001/public/js/vendor.js
# https://cdn.jyblife.com/channel/h5buy/mbuy.html http://172.16.5.215:8097/public/mbuy.html
```

### 安装

```bash
npm install -g whistle
npm install -g whistle.chii
npm install -g whistle.inspect
```

### 常用命令

w2 start   启动whistle

w2 start -p 8888  指定端口

w2 restart  重启

w2 stop 停止

**控制台  http://local.whistlejs.com/**



### 开启https

- 安装证书-信任证书(连接同一局域网且设置代理之后下载**http://rootca.pro**)
-  **ios用safari扫描安装描述文件** 手机设置里安装信任,**且要在关于本机证书信任设置设置一下**
- 安卓直接安装
- **勾选2个选项**



### 证书下载链接:

http://172.16.5.68:8899/cgi-bin/rootca

http://rootca.pro



### 常见问题

要关闭代理,不行要退出代理软件

android要用系统浏览器或者chrome不能用alook这种第三方的



### 参考链接

[whistle官网](https://wproxy.org/whistle/)

