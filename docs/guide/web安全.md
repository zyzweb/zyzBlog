### csp  Content Security Policy  内容安全策略   主要目的是为了防止xss攻击

### 设置csp2种方式

1.在响应头中设置  

```http
Content-Security-Policy: script-src 'self'; object-src 'none';
style-src cdn.example.org third-party.org; child-src https:
```

2.设置meta标签

> ```html
> <meta http-equiv="Content-Security-Policy" content="script-src 'self'; object-src 'none'; style-src cdn.example.org third-party.org; child-src https:">
> ```

- 脚本：只信任当前域名
- `<object>`标签：不信任任何URL，即不加载任何资源
- 样式表：只信任`cdn.example.org`和`third-party.org`
- 框架（frame）：必须使用HTTPS协议加载
- 其他资源：没有限制

### 同源策略

1.限制网络请求 比如:xhr跨域请求

2.限制数据  比如:cookie indexDB  localStorage

3.限制跨域的dom操作