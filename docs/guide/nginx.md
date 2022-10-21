





```yaml
#修改nginx.conf

#重定向页面  301
#REWRITE-END
server {
   location =/ {
        rewrite ^(.*)$ http://zhuyuanzheng1.top/zyzBlog/;
    }
}
```

















### 参考链接

[mac安装nginx](https://cloud.tencent.com/developer/article/1695765)

[一份简单够用的 Nginx Location 配置讲解](https://github.com/mqyqingfeng/Blog/issues/242)

[nginx入门教程](https://xuexb.github.io/learn-nginx/)
