### http   通过浏览器和服务的数据交互,进行超文本（文本、图片、视频等）传输数据的一种双向规定协议



### 请求头

```shell
X-Requested-With   #用来判断是否是ajax请求   req.headers['x-requested-with'].toLowerCase() == 'xmlhttprequest'
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: cross-site
Connection: keep-alive
authority: music-202.boomplaymusic.com
dnt: 1
pragma: no-cache
sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "macOS"
scheme: https
Pragma: no-cache #http1.0字段   === Cache-Control: no-cache  已弃用
Expires  #http1.0字段  表示缓存到期时间，绝对时间   Expires: Thu, 10 Nov 2017 08:45:11 GMT
Accept-Encoding: gzip #将客户端能够理解的内容编码方式——通常是某种压缩算法——通知给服务器,服务器在响应头Content-Encoding回应
# 参考HTTP Basic, Session, Token 三种认证方法简介
Authorization: Basic YWxhZGRpbjpvcGVuc2VzYW1l  #http认证
Range: "bytes=0-"  #配合响应头Content-Range 使用进行断点续传(需要客户端和服务端都支持)
```



















### 响应头 

[csp](web安全.md)

```shell
Cache-Control  #http1.1字段用来替代Expires 相对时间 Cache-control: max-age=2592000
Etag: W/"10b-8t2l8mlmqyyCZ/MRXPftfo1q0TA"  #协商缓存标识

# vary参考掘金- https://juejin.cn/post/6844903981907443720  
# 类似控制cdn缓存
vary: Accept-Encoding #让代理服务器的缓存命中更多的决定因子，而不仅仅是依据请求 URL 和请求方法来决定 是否命中

X-Frame-Options #设置页面是否能在iframe中加载  DENY(都不能加载)  SAMEORIGIN(只有同域名可以)
Content-Encoding: deflate, gzip  #让客户方知道需要以何种顺序解码响应消息才能获得原始信息,配合请求头Accept-Encoding使用
Content-Security-Policy: script-src 'self'; object-src 'none';
Content-Disposition: #判断是下载还是展示  inline(展示)默认   attachment(下载)
Content-Range:"bytes 0-1048575/115629035" #配合请求头Range进行断点续传(需要客户端和服务端都支持)
```







### http 1.x

http1.0 一个tcp请求只能包含一个http请求   websocket也是基于tcp连接

http1.1支持持久连接一个tcp请求可以包含多个http请求  http1.1在http1.0的基础上增加了请求头响应头



### http2

必须使用https,在建立 TLS 连接后,发送一个HTTP2的连接确认消息,确认后,客户端服务器使用HTTP2进行连接通讯

在HTTP1同一个域名请求数量（Chrome 下一般是六个）

HTTP2 中引入了**多路复用**,只通过一个TCP连接就可以传输所有的请求数据。绕过浏览器限制同一个域名下的请求数量的问题

**服务器推送** 服务器可以把html返回给客户端时同时返回css js

**头部压缩**

存在的问题: TCP协议的局限性导致了http2无法解决队头阻塞的问题,在丢包率很高的网络环境中,http2可能比http1差



### http3

允许主动缓存

需要客户端和服务端同时支持才行

2022年6月7日标准正式发布

抛弃TCP使用UDP + QUIC 保证数据传输可靠

需要先建立好HTTP2连接,然后发送HTTP2扩展帧,这个帧包含IP和端口,浏览器收到扩展帧,使用该IP和端口,使用QUIC建立连接,如果成功断开HTTP2升级为HTTP3



**QUIC协议特性**

- QUIC协议提供类似于HTTP2的流功能
- QUIC协议使用流ID取代IP和端口,这样就能实现连接迁移。例如说从4G信号切换到wifi,下层的IP和端口变了,但是由于QUIC的流ID没有变,这个连接不会变,可以继续使用这个连接

响应头一般会有Alt-Svc: h3

通过打开chrome  flags   Experimental QUIC protocol

通过 https://http3check.net/      https://geekflare.com/tools/http3-test可以检测是否支持http3



### 状态码

```shell
1xx  #消息
2xx  #成功 
3xx  #重定向
4xx  #请求错误
5xx  #服务器错误

200  #成功或者强缓存  
206  #ajax请求媒体资源返回的状态码    particle content 部分内容   断点续传/多线程下载
301  #永久重定向
302  #临时重定向
304  #数据未做修改,客户端使用缓存数据  协商缓存
101  #切换协议,只能切换到高级协议
204  #请求发送成功但是页面不刷新

#301和302区别
301永久重定向浏览器会记住,浏览器请求a 跳转到b 下次请求a直接到b
302临时重定向浏览器不记忆,浏览器请求a 跳转到b 下次请求a 还是先到a然后到b
```









可以自己写个后台来学习http协议



### 参考链接



[X-Requested-With](https://blog.csdn.net/HeatDeath/article/details/79168614)

[mdn-http各字段含义](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Cache-Control)