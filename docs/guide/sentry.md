## 安装环境要求

python3

docker

docker-compose

8gRAM

20gDisk



## 安装方式

1. docker(推荐)

```shell
git clone https://github.com/getsentry/self-hosted.git #拉取代码
cd self-hosted
./install.sh #花费时间会比较久
docker-compose up -d  #启动服务
http://localhost:9000  #访问默认端口9000
登录之后会有一个设置页面输入必需的配置，需要你输入一些必需的配置，如 Root URL、 SMTP 服务器等，具体配置参数的意思可以参见官方文档
修改配置需要在self-hosted/sentry/config.yml更改,更改之后要重启 docker-compose down && docker-compose up -d
```

2. python



## 在前端项目中使用



```javascript
//Sentry 配置应在应用程序的生命周期中尽早进行,通常在index.html中引入或main.js
Sentry.init({
  // Sentry 项目的 dsn，可从项目设置中获取
  dsn: "https://xxxxxx@161.xxx.xxx.xxx:9000/2",
  // 初始参数配置内容
  integrations: [new Integrations.BrowserTracing()],
  // 触发异常后发送给 Sentry 的概率
  tracesSampleRate: 1.0,
  // 控制应捕获的面包屑(行为栈)的总量
  maxBreadcrumbs: 20,
  // 规定上下文数据结构的深度，默认为 3
  normalizeDepth: 100,
  // 版本信息
  release: "common@1.0.0",
  // 环境信息
  environment: process.env.NODE_ENV,
  // 钩子函数，在每次发送 event 前触发
  beforeSend(event) {
    // 网页应用刷新后设置的变量会消失，所以我选择在 beforeSend 触发时插入用户信息
    event.user = {
      userNick: "xiaohu",
    };
    return event;
  },
});
```

为保证邮箱（SMTP 服务器）配置正确，最好测试一下，进入 admin -> Mail 发送一封测试邮件

<img src="https://image.zhuyuanzheng1.top/image-20220816010637412.png" alt="image-20220816010637412" style="zoom:20%;" />



## 常见问题

1. 如果安装过程中没有创建管理员账号和密码

```shell
docker-compose run --rm web createuser  #创建管理员账号 密码
```

2. 判断是否验证成功看请求是否包含sentry_key的get请求

## 参考链接

[sentry-集成sourcemap](https://blog.csdn.net/weixin_34996214/article/details/112278553)

[删除sentry](https://segmentfault.com/q/1010000038449410)

[掘金-sentry最佳官方实践](https://juejin.cn/post/7007607369962094599)

[sentry-vue接入](https://segmentfault.com/a/1190000041524501)
