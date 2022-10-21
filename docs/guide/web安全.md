### csp  Content Security Policy  内容安全策略   主要目的是为了防止xss攻击,是解决xss的最优解

### 设置csp(2种方式)

**实质就是白名单制度，开发者明确告诉客户端，哪些外部资源可以加载和执行，等同于提供白名单。它的实现和执行全部由浏览器完成，开发者只需提供配置**

1.在响应头中设置  ([Ignore X-Frame headers](https://chrome.google.com/webstore/detail/ignore-x-frame-headers/gleekbfjekiniecknbkamfmkohkpodhe)插件可以屏蔽该响应头)

```http
Content-Security-Policy: script-src 'self'; object-src 'none';
style-src cdn.example.org third-party.org; child-src https:
```

2.设置meta标签



```html
<meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">
```

- 脚本：只信任当前域名
- `<object>`标签：不信任任何URL，即不加载任何资源
- 样式表：只信任`cdn.example.org`和`third-party.org`
- 框架（frame）：必须使用HTTPS协议加载
- 其他资源：没有限制



### 同源策略

1.限制网络请求 比如:xhr跨域请求

2.限制数据  比如:cookie indexDB  localStorage

3.限制跨域的dom操作





### meta标签

seo  设置description,用于爬虫生成索引

位于head标签内

name/http-equiv为key  content为值

<meta http-equiv="Expires" contect="-1"> 网页在任何时候都不能被Cache存储
### CSRF 

Cross Site Request Forgery    是一种劫持受信任用户向服务器发送非预期请求的攻击方式

一般是攻击者借助受害者的 Cookie 骗取服务器的信任，在受害者毫不知情的情况下以受害者名义伪造请求发送给受攻击服务器，从而在并未授权的情况下执行在权限保护之下的操作

比如自动提交表单,进行评论等



csrf条件

1.  目标站点一定要有CSRF漏洞
2.  用户要登录过目标站点,并且在浏览器上保持有该站点的登录状态
3.  需要用户打开一个第三方站点,可以是黑客的站点,也可以是一些论坛。



### csrf防御手段:

1. 设置cookie的SameSite属性 (samesite还有跟踪分析的作用)

   > chrome80以后默认值为Lax,解决办法是set-cookie设为none,开启secure

2. 在请求头中使用Origin和Referer进行同源检测

   > **origin在302重定向中不会存在 因为浏览器不想泄漏敏感信息**
   >
   > **HTTPS 页面跳转到 HTTP 页面，所有浏览器 Referer 都丢失**

3. 将所有请求都加上验证码

4. 添加 csrfToken 验证



### xss防御手段:

1. 开启csp
2. 给cookie添加httponly





httponly主要是为了防止xss攻击,samesite(如果是从第三方站点发起的请求,那么需要浏览器禁止发送某些关键 Cookie数据到服务器)主要是为了防止csrf攻击,csrf token  请求头的origin和refer也可以防止csrf攻击





### cookie属性

HttpOnly  document.cookie 不能访问到,只能作用于服务器  能防止xss攻击

Secure  只能通过https协议传输






### 参考链接

[阮一峰-Content Security Policy 入门教程](http://www.ruanyifeng.com/blog/2016/09/csp.html)

[阮一峰-Cookie 的 SameSite 属性](https://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html)

[跨站与跨域](https://web.dev/i18n/zh/same-site-same-origin/)

[vue3文档-安全](https://cn.vuejs.org/guide/best-practices/security.html)







- [web端安全防御手册](#web端安全防御手册)
  - [一、Cookie使用](#一cookie使用)
  - [二、xss防御(含sql注入)](#二xss防御含sql注入)
  - [三、跨域请求](#三跨域请求)
  - [四、其他安全问题](#四其他安全问题)
  - [五、检测工具、服务、安全组织](#五检测工具服务安全组织)
    - [1)、工具篇](#1工具篇)
    - [2)、服务篇](#2服务篇)
    - [3)、安全组织](#3安全组织)
- [Boomplay Web端安全改造优先级及时间点](#boomplay-web端安全改造优先级及时间点)

# web端安全防御手册
> 本文档主要用于说明web端日常开发中经常遇到的一些安全问题，以及常见的解决方案，再加上一些辅助检测工具的使用说明。  

## 一、Cookie使用
1. **敏感信息存储**   
   如用户的手机号、姓名等信息<u>不能明文存储</u>；*非必要数据*，~~不要存储在cookie中~~；
2. **http-only属性**  
   sessionid、csrf_token、session_token这些仅仅存在于会话期间的cookie,请设置cookie头信息为<mark>http-only</mark>。
3. **关于跨站cookie属性SameSite设置说明**  
    SameSite 可以有下面三种值：  
      ①Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。  
      ②Lax 允许部分第三方请求携带 Cookie  
      ③None 无论是否跨站都会发送 Cookie

      之前默认是 None 的，<mark>Chrome80</mark> 后默认是 Lax。  
     
      >默认值由None 改成 Lax ,对一些现有业务影响很大:  
      我们以 www.boomplay.com 域名下页面中访问 api.boomplay.com下服务为例说明三种属性的cookie传值情况  
        ![说明](https://camo.githubusercontent.com/feff36574753ce4c04ddfe9769e623ad671a539ac8792a40f8aff34909ee8114/68747470733a2f2f67772e616c6963646e2e636f6d2f7466732f54423172473448794b4832674b306a535a4645585863714d7058612d313430302d3532382e706e67)  
      所以请在cookie头中<mark>明确</mark>设置SameSite属性值为:<u>Strict</u>(确定不需要跨站传输的)或者<u>None</u>(确定需要跨站传输)之一  
     
      **notice**:*请注意跨站跟跨域不是同一个概念。*   
      文献参考：https://github.com/mqyqingfeng/Blog/issues/157


4. **其他cookie属性设置**  
   ①非会话期cookie请通过Expires或者Max-Age设置过期时间  
   ②HTTPS协议加密的请求，请设置cookie的Secure属性

## 二、xss防御(含sql注入)
  >重要理念：任何用户可以输入的任何信息，都是不可信的
  1. **用户输入内容做严格长度限制**  
      限制用户输入内容长度，可以减少xss的危害性，长度越短，xss可操作空间越小。
  2. **x-xss-protection**  
      返回html内容的服务器端:http响应头添加x-xss-protection: 1; mode=block   
      该http头信息已经得到<u>部分浏览器</u>支持，可以对xss做出拦截。

  3. **csp**  
        [Content Security Policy](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CSP) 的规则相对复杂，使用的时候，必须经过严格测试。
        csp虽然已经得到较多浏览器支持，但是规则复杂，一不小心把自己的功能给禁用掉了。目前各大型互联网公司在各自服务中应用者少。暂时持观望态度，某些简单场景可以考虑。
        [Github-csp-journey](https://github.blog/2016-04-12-githubs-csp-journey/)是先行者之一，但是目前也放弃了该方案。(待准备更规范易用)
    
  4. **转码过滤**    
      xss产生的可能性非常多，关键点是要对所有可能存在用户输入的地方做转码过滤。用户输入的地方包括但不限于：重定向、富文本输入、简单输入框、评论框、搜索框、URL地址参数、自定义样式等等。  
      ①服务器防止sql注入攻击转码  
      ②客户端输出文本内容做html标签转义(如url地址参数、评论、搜索等)  
      ③富文本内容做白名单过滤(参考[xssjs](https://www.npmjs.com/package/xssjs))
   
      **xss总结**：上述几条策略中，没有银弹，xss防护不能一劳永逸。实际项目需要结合上述几条一起使用，减少xss的可能性，<mark>每一条都很重要</mark>。   
      关于可能引发的场景请参考,内有非常详细的列举：  
      ①[firing-range](https://public-firing-range.appspot.com/)
      ②[owasp官方整理的xss-prevention-rules](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html#xss-prevention-rules)

      引文，仅供学习：https://segmentfault.com/a/1190000016551188


## 三、跨域请求
  跨域请求常常跟xss一起使用，会造成很大的危害，如发广告、盗取用户重要信息、甚至是盗耍银行卡等
  1. **cors(access-control-allow-origin头)**  
      非静态资源文件的access-control-allow-origin相应头，请针对业务需要设置特定域名。非特殊情况，严禁使用通配符*
  2. **csrf token**  
      csrf防御已经是各大互联网公司的常规操作。建议服务器端接口请求，做csrf token校验。  
      类似实现方案有：①json web token(非可回放请求) ②某讯的基于cookie的time33 hash  token(可回放请求)

     引文，仅供学习：https://segmentfault.com/a/1190000016659945

## 四、其他安全问题
  1. **数据加密传输**   
      <mark>!</mark>除了全站使用https传输外，还应该对于敏感用户数据，如用户名、密码、手机号、短信验证码等做二次加密传输  
      包括管理端敏感数据传输也需要加密。 
      敏感数据的字段名称不要直接用username、password这种容易理解的单词，建议混淆一下名字(防止代理人机器分析) 。  
      邮箱、手机号、用户名等做随机秘钥的对称加密。  
      密码做MD5类非对称加密后在，再做基于随机秘钥的二次对称加密。

  2. **HSTS**   
      [HTTP Strict Transport Security](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)（通常简称为HSTS）是一个安全功能，它告诉浏览器只能通过HTTPS访问当前资源，而不是HTTP。strict-transport-security: max-age=3600
  3. **点击劫持**  
      强烈建议在不允许第三方iframe加载的页面添加http相应头，[X-Frame-Options](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/X-Frame-Options) 值为：x-frame-options: SAMEORIGIN 表示只允许同源网站加载。特别是管理后台的网站，一旦发生点击劫持，被骗取管理员用户名，密码，会非常危险。 
  4. **第三方库安全**  
      我们在实际开发项目中会或多或少都会用到一些第三方库，建议通过开发工具自动检测能力去发现旧版本的第三方库的安全问题，即时更近修复。

## 五、检测工具、服务、安全组织
  ### 1)、工具篇  
   1. https://www.zaproxy.org/ (owasp官方安全渗透测试工具)
   2. [xss脚本](https://github.com/0xsobky/HackVault/wiki/Unleashing-an-Ultimate-XSS-Polyglot)
   3. [easyXssPayload构造xss的脚本](https://raw.githubusercontent.com/TheKingOfDuck/easyXssPayload/master/easyXssPayload.txt)
   4. [开发工具安全插件](https://snyk.io/ide-plugins/)  该工具提供方为 [snyk.io](https://snyk.io/) ,可以在常用的开发工具中，自动检测代码安全问题，非常好用，<mark>强烈推荐</mark>

  ### 2)、服务篇  
   1. https://webpagetest.org/ (在线网站性能测试及安全扫描，安全扫描为snyk提供)
   2. https://observatory.mozilla.org (mozilla在线网站安全扫描，功能比较简单，可以快速扫描)  

  ### 3)、安全组织  
   1. [The Open Web Application Security Project](https://owasp.org/)
   2. https://www.freebuf.com/


# Boomplay Web端安全改造优先级及时间点

| 安全类型     | 优先级 | 改造完成时间 |
| ------------ | ------ | ------------ |
| xss防御      | 高     | 2021年11月   |
| 敏感信息存储 | 高     | 2021年11月   |
| 数据加密传输 | 高     | 2021年11月   |
| CORS         | 高     | 2021年12月   |
| 点击劫持     | 中     | 2021年12月   |
| COOKIE使用   | 中     | 2022年1-2月  |
| CSRF         | 中     | 2022年1-3月  |
| 第三方库安全 | 中     | 2022年1-3月  |
| HSTS         | 低     | 2022年1-3月  |



