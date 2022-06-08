```bash
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --auto-open-devtools-for-tabs  #自动打开devtools
open -n /Applications/Google\ Chrome.app/ --args --disable-web-security  --user-data-dir=/Users/zhuyuanzheng/Downloads/cors-chrome   #打开跨域浏览器 
```

Element  左右折叠/展开元素



Link grabber chrome插件可以一键获取页面所有链接

**[达达划词翻译](https://chrome.google.com/webstore/detail/达达划词翻译/cajhcjfcodjoalmhjekljnfkgjlkeajl)**   与扇贝同步

**[一文多发，OpenWrite助手](https://openwrite.cn/plugin-chrome/)**

掘金、博客园等自媒体平台，一键群发文章

Performance 的关键是火焰图可以精确到每个函数的调用                          从        慢慢买               x

用wasd来进行放大缩小和左右移动

rendering 可以查看那个元素有滚动性能问题  高亮重绘元素 显示元素border

## 常见名称

Web Vitals Core Web Vitals顾名思义就是Google用来评断各别网页「整体使用者体验」的重要指标；使用这些指标来测量网页的

SOA Services Oriented Architecture  面向服务的架构 (chrome的架构方向)

UDP  User Datagram Protocol  用户数据包协议

TCP( Transmission Control protocol,传输控制协议)是一种面向连接的、可靠的、基于字节流的传输层通信协议。



<img src="http://zhuyuanzheng1.top/image-20220601133800451.png" alt="image-20220601133800451" style="zoom:15%;" />

每个tab页有一个渲染进程,包含了排版引擎Bink和js引擎v8,并且渲染进程是运行在沙箱模式下

IP通过P地址信息把数据包发送给指定的电脑,而UDP通过端口号把数据包分发给正确的程序

浏览器的三级缓存机制  memory cache disk cache sevice worker的cache

CSS和JS下载都是异步的会在解析DOM的过程中下载 



合成线程会将图层划分为图块(tile),然后合成线程会按照视口附近的图块来优先生成位图,实际生成位图的操作是由栅格化来执行的。

栅格化是指将图块转换为位图。而图块是栅格化执行的最小单位。

javascript的执行机制:先编译,再执行

调用栈是 JavaScript引擎追踪函数执行的一个机制

记录当前执行状态的指针称为ESP

生成AST有2个阶段 词法分析(token)和语法分析(parse)

在执行 Parse hTml的时候,如果遇到 Javascrip脚本,那么会暂停当前的HTML解析而去执行js脚本。

最开始只有同步任务;,为了加入其他任务引入了循环语句和事件系统;为了接受其他线程发送过来的任务,引入了消息队列;为了提高消息队列的实时性和效率引入了微任务(最开始只有宏任务);其他进程和渲染进程通信先通过IPC把任务发送给渲染进程的IO线程,IO线程在通过消息队列把任务添加到主线程中,所以页面的执行机制是消息队列和事件循环

一个线程可以同时拥有多个协程,但是在一个线程上同时只有一个协程能运行

JavaScrip文件的下载过程会阻塞DOM解析

async和 defer虽然都是异步的,不过还有一些差异,使用async标志的脚本文件一旦加载完成,会立即执
行,可能会阻塞页面解析;使用了defer标记的脚本文件,需要等到 DOMContentloaded事件之后执行,不会阻塞html解析

渲染引擎在遇到Java scriρt脚本时,不管该脚本是否操纵了 CSSOM,都会执行CSS文件下载,解析操作,再执行 Java script
脚本。

染引擎生成一帧图像有三种方式:重排、重绘和合成。其中重排和重绘操作都是在渲染进程的主线程上执行的,比较耗时;而合成操作是在渲染进程的合成线程上执行的,执行速度快,目不占用主线程,使用will-change优化动画

“让其运行在主线程之外”就是 Service Worker来自 Web Worker的一个核心思想。不过 Web Worker是临
时的,每次 Java scrip脚本执行完成之后都会退出,执行结果也不能保存下来,如果下次还有同样的操作
就还得重新来一遍。所以 Service Worker需要在 Web Worker的基础之上加上储存功能。

在TCP传输过程中,由于单个数据包的丢失而造成的阻塞称为TCP上的队头阻塞

网络延迟又称为RTT( Round Trip Time)。我们把从浏览器发送一个数据包到服务器,再从服务器返回数据包到浏览器的整个往返时间称为RTT(如下图)。RTT是反映网络性能的一个重要指标。

http0.9只是为了传输html;http1.0增加了多种文件类型,状态码,cache,userAgent;http1.1 增加了长连接,host,cookie,chunk transfer和安全机制;http2增加了多路复用(通过二进制分帧层实现),实现了服务器推送;http3(兼容不好)(为了解决TCP队头阻塞,基于UDP,提出了QUIC协议

这就需要在安全和自由之间找到一个平衡点,所
以我们默认页面中可以引用任意第三方资源,然后又引入CSP策略来加以限制;默认 XmlHttp Request和
Fetch不能跨站请求资源,然后又通过CORS策略来支持其跨域。

CSRF Cross-site request forgery,所以又称为“跨站请求伪造”

csrf条件

1.  目标站点一定要有CSRF漏洞
2.  用户要登录过目标站点,并且在浏览器上保持有该站点的登录状态
3. 需要用户打开一个第三方站点,可以是黑客的站点,也可以是一些论坛。

httponly主要是为了防止xss攻击,samesite(果是从第三方站点发起的请求,那么需要浏览器禁止发送某些关键 Cookie数据到服务器)主要是为了防止csrf攻击,csrf token  请求头的origin和refer也可以防止csrf攻击



### firefox

可以在新标签打开post请求



### 参考链接

[站点隔离](https://www.bisend.cn/blog/google-chrome-site-isolation)

[跨域chrome创建快捷方式](https://juejin.cn/post/6844903929520586766)

[CORB](https://juejin.cn/post/6844903831373889550)   https://juejin.cn/post/6844903664008560647

[chromestatus](https://chromestatus.com/feature/5629709824032768)

