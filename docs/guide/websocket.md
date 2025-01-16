特点 其特点包括：

1. 建立在 TCP 协议之上，服务器端的实现比较容易。
2. 与HTTP协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用HTTP协议，因此握手时不容易屏蔽，能通过各种HTTP 代理服务器。
3. 数据格式比较轻量，性能开销小，通信高效。
4. 可以发送文本，也可以发送二进制数据。
5. 没有同源限制，客户端可以与任意服务器通信。

使用方法

- 直接用h5的 new Websocket()
- 用ws库
- 用websocket库
- [用socket.io](http://xn--socket-2w4o.io)  (推荐使用 包括客户端和服务端)

socket与websocket unix的socket区别

- socket处于应用层和传输层之间,websocket跟http一样属于应用层协议
- socket 和websocket都是双向的
- unix的socket是在操作系统进程间进行通信的