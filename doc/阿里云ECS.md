# 阿里云ECS

## 远程连接centOS(windows Server 使用远程桌面连接)

```bash
ssh root@47.107.149.52 #输入yes 输入密码即可  ctrl + d 退出
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh   #安装centOS宝塔7.6版本(注意要开启安全组端口)
```

![image-20210627153542548](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210627153542548.png)

Zz123456.

## 常见问题

不重要的情况直接强制停止,手动停止要关闭很多链接

更换系统之后由于指纹改变了,在通过本地ssh登录不上服务器,需要把.ssh中的known_hosts文件删除重新登录