HTTP协议（超文本传输协议）

HTTPS协议 （安全套接字层超文本传输协议）http + SSL

ca(数字证书颁发机构)申请证书,根证书需要浏览器和操作系统信任

免费版digicert(DV)  www.digicert.com 

收费的OV/EV 需要身份证认证

1.购买证书

2.申请证书  (阿里云控制台申请)

3.下载对应服务器类型的证书

4.上传证书到服务器

5.修改nginx.conf

``` shell
server {
    listen 443 ssl;
    server_name ts.yayujs.com; #替换成证书绑定的域名。
    ssl_certificate cert/6982037_ts.yayujs.com.pem;  #替换成已上传的证书文件的目录和名称。
    ssl_certificate_key cert/6982037_ts.yayujs.com.key; #替换成已上传的证书私钥文件的目录和名称。
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1.1 TLSv1.2 TLSv1.3;
    ssl_prefer_server_ciphers on;
  
  	location ^~ /learn-typescript/ {
    	alias /home/www/website/ts/;
  	}
  	location / {
    	alias /home/www/website/ts/;
	    index index.html;
  	}
}
```

6.重启nginx  systemctl restart nginx





### https证书

<img src="https://image.zhuyuanzheng1.top/image-20220608231535966.png" alt="image-20220608231535966" style="zoom:33%;" />

