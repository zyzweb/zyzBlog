# 阿里云ECS

 1核2G内存1M

Intel(R) Xeon(R) Platinum 8163 CPU @ 2.50GHz

- 总核数 = 物理CPU个数 × 每颗物理CPU的核数

- 总逻辑CPU数 = 物理CPU个数 × 每颗物理CPU的核数 × 超线程数

- ```shell
  cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c #查看cpu型号
  ```

  

## 远程连接centOS(windows Server 使用远程桌面连接)

```bash
ssh root@47.107.149.52 #输入yes 输入密码即可  ctrl + d 退出
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh   #安装centOS宝塔7.6版本(注意要开启安全组端口)
```

![image-20210627153542548](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210627153542548.png)

Zz123456.

## 安装nginx

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



## 常见问题

不重要的情况直接强制停止,手动停止要关闭很多链接

更换系统之后由于指纹改变了,在通过本地ssh登录不上服务器,需要把.ssh中的known_hosts文件删除重新登录

epel(Extra Packages for Enterprise Linux ) 是yum的一个源

/usr/share/nginx/html   //nginx 路径

 /etc/nginx/nginx.conf`  //nginx 配置

chmod 777  //改变文件权限