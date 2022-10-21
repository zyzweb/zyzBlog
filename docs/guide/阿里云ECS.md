 1核2G内存1M

Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz

- 总核数 = 物理CPU个数 × 每颗物理CPU的核数

- 总逻辑CPU数 = 物理CPU个数 × 每颗物理CPU的核数 × 超线程数

- ```shell
  cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c #查看cpu型号
  ```


### 远程连接centOS(windows Server 使用远程桌面连接)

```bash
ssh root@47.107.149.52 #输入yes 输入密码即可  ctrl + d 退出
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh   #安装centOS宝塔7.6版本(注意要开启安全组端口)
```

<img src="https://image.zhuyuanzheng1.top/image-20220608213921220.png" alt="image-20220608213921220" style="zoom:50%;" />



### 安装nginx

```shell
#配置epel源
sudo yum install -y epel-release
#安装nginx
sudo yum install -y nginx
#开启80 443端口
systemctl start nginx #启动ng
systemctl stop nginx  #停止ng
systemctl restart nginx #重启ng
systemctl status nginx #查看ng状态
systemctl enable nginx #设为开机启动
systemctl disable nginx #禁止开机启动
```



### 常见名称

CNAME（Canonical Name）记录即别名记录，用来把一个域名解析成另一个域名，再由另一个域名提供源站服务

DDNS (dynamic domain name system) 动态域名解析





### 开通CDN

1.在阿里云控制台打开cdn服务

2.;源站信息填ip,配置缓存策略

3.设置域名解析使用CNAME   zhuyuanzheng.top解析成zhuyuanzheng.top.w.kunlunca.com





### 域名购买

* 买新的    去阿里云域名注册

* 买已有   阿里云域名交易

  

### 域名和备案注销

分为注销主体和注销网站,注销主体之后所有网站都注销了

主体在阿里云,网站在腾讯云



### 常见问题

备案域名与ip要保持一致

不重要的情况直接强制停止,手动停止要关闭很多链接

更换系统之后由于指纹改变了,在通过本地ssh登录不上服务器,需要把.ssh中的known_hosts文件删除重新登录

epel(Extra Packages for Enterprise Linux ) 是yum的一个源

/usr/share/nginx/html   //nginx 路径

 /etc/nginx/nginx.conf`  //nginx 配置

chmod 777  //改变文件权限