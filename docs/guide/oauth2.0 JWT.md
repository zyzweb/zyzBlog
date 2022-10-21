SSO是Single Sign On的缩写

OAuth是Open Authority的缩写



### HTTP Basic,Session,Token 认证方式

### HTTP Basic

- 不安全：认证身份信息用明文传送，因此需结合 https 使用。
- 效率低：服务端处理请求时，每次都需要验证身份信息，如用户名和密码

### Session

- 较安全：客户端每次请求时无需发送身份信息，只需发送 SessionID。
- 较高效：服务端无需每次处理请求时都要验证身份信息，只需通过 SessionID 查询 Session 对象。

- 扩展性差，Session 对象保存在服务端，如果是保存在多个服务器上，有一致性问题，如果保存在单个服务器上，无法适应用户增长。
- 基于 Cookie 的 SessionID 不能跨域共享，同一用户的多个客户端（如浏览器客户端和 APP）不能共享 SessionId。
- 基于 Cookie 的 SessionID 易被截获生成 CSRF 攻击

### Token (最常用)

- Token 只保存在客户端，因此不影响服务端扩展性
- 为用户生成的 Token 可以在多个客户端共用
- Token 包含了用户的全部信息，不只是如 SessionID 类似的一个 ID 值，因此会增加每次请求包的大小。



### JWT

最流行的跨域认证解决方案,属于**token认证方式**

是一种校验方式,由3部分组成  自己定义的加密串 + 用户id + JWT自带的部分   

JWT是明文的所以不要把用户密码带进去

比较长用.隔开,jwt内部是没有换行的 <mark>Header.Payload.Signature</mark>

<img src="https://image.zhuyuanzheng1.top/image-20220808210143589.png" alt="image-20220808210143589" style="zoom:33%;" />







### JWT与OAuth2

JWT是一种认证协议,OAuth2是一种授权框架

最大的区别是使用场景不一样  

OAuth2 用在使用第三方账号登录的情况(比如使用 weibo, qq, github登录某个app

JWT用在前后端分离，需要简单的对后台API进行保护时使用，前后端分离无 session,，频繁传用户密码不安全





### 参考链接

oauth2.0

https://www.ruanyifeng.com/blog/2019/04/oauth-grant-types.html

https://www.ruanyifeng.com/blog/2014/05/oauth_2_0.html

https://www.ruanyifeng.com/blog/2019/04/oauth_design.html

[阮一峰-jwt入门教程](https://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html)

