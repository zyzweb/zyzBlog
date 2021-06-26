# whistle调试

 www.ifeng.com http://172.16.5.140:8097/ 设置host

 www.ifeng.com file:///Users/zhuyuanzheng/Desktop/666.txt 本地替换(对所有协议)

 http://ctc.i.gtimg.cn/qzone/biz/ file:///Users/zhuyuanzheng/Desktop/666.txt   #只针对http请求的文件路径替换

 www.ifeng.com www.aliexpress.com   请求转发(替换域名)

 www.ifeng.com js:///Users/zhuyuanzheng/Desktop/666.js  页面插入js html css

 /qq.com/ filter://rule|hide    # 忽略包含qq域名下的请求并不在network中显示

/spa\-monitor\.min\.js/i filter://rule  # 忽略匹配包含spa-monitor.min.js，但在network中显示，相当于文件白名单



## 命令

w2 start   启动whistle

w2 start -p 8888  指定端口

w2 restart  重启

w2 stop 停止





## 控制台  http://local.whistlejs.com/



### 开启https

- 安装证书-信任证书(连接同一局域网且设置代理之后下载**http://rootca.pro**)
-  **ios用safari扫描安装描述文件** 手机设置里安装信任,**且要在关于本机证书信任设置设置一下**
- 安卓直接安装
- **勾选2个选项**![image-20210611174241732](/Users/zhuyuanzheng/Library/Application Support/typora-user-images/image-20210611174241732.png)

​     





![image-20210612204238010](/Users/zhuyuanzheng/Library/Application Support/typora-user-images/image-20210612204238010.png)

# www.ifeng.com http://172.16.5.140:8097/ 设置host
# www.ifeng.com file:///Users/zhuyuanzheng/Desktop/666.txt 本地替换(对所有协议)
# http://ctc.i.gtimg.cn/qzone/biz/ file:///Users/zhuyuanzheng/Desktop/666.txt   #只针对http请求的文件路径替换
# www.ifeng.com www.aliexpress.com   请求转发(替换域名)
# www.ifeng.com js:///Users/zhuyuanzheng/Desktop/666.js  页面插入js html css
# /qq.com/ filter://rule|hide    # 忽略包含qq域名下的请求并不在network中显示
# /spa\-monitor\.min\.js/i filter://rule  # 忽略匹配包含spa-monitor.min.js，但在network中显示，相当于文件白名单

# baidu.com ua://{name}
# www.baidu.com whistle.inspect://eruda  // 包含www.baidu.com 用eruda
# * whistle.inspect:// 所有请求用vconsole
# https://www.zhihu.com/api/v4/creator/apply resBody://({name:1,age:2}) 拦截请求返回数据
# https://www.zhihu.com/api/v4/creator/apply resBody://{test.json}   拦截请求返回test.json
# jd.com statusCode://404
# cdnsit.jyblife.com weinre://12  调试页面样式
# www.jd.com log://{log-test.js}   输出日志在页面script之后
# www.ifeng.com ua://Mozilla/5.01
http://172.16.5.140:8097/proxy/act/index resBody://{res1.json} includeFilter://b:40020301

# http://192.168.123.28:8097/proxy/act/index statusCode://500 includeFilter://b:40020301 resDelay://10000