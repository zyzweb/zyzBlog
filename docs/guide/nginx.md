```yaml
#修改nginx.conf

#重定向页面  301
#REWRITE-END
server {
location =/ {
rewrite ^(.*)$ http://zhuyuanzheng.top/zyzBlog/;
}
}
```

### 参考链接

[mac 安装 nginx](https://cloud.tencent.com/developer/article/1695765)

[一份简单够用的 Nginx Location 配置讲解](https://github.com/mqyqingfeng/Blog/issues/242)

[nginx 入门教程](https://xuexb.github.io/learn-nginx/)
