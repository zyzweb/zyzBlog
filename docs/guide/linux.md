

linux分为“商业公司维护的发行版本”和“社区组织维护的发行版本”两类；商业公司维护的发行版本以Redhat为代表，社区组织维护的发行版本以Debian为代表

centOS是基于redhat的免费版

Ubuntu是基于Debian的免费版



RedHat系列: Redhat、Centos、Fedora等   yum

Debian系列：Debian、Ubuntu等  apt-get



### 几种文件格式

tar只是归档没有压缩

tgz是tar.gz的简写



### mac上双击运行sh文件

1. chmod +x xxx.sh修改文件权限
2. 右键.sh文件 ->显示简介 ->打开方式->拉动到最下面选择其他

- 底部启用右边的 推荐的应用程序更改为 所有应用程序
- 找到 终端app 然后点击添加即可



```shell
ctrl+z，bg 编号 #让进程在后台跑着   
```





### 常用命令

```shell
whoami #查看用户名
echo "test content" > index.html  #创建或覆盖内容
echo "test content" >> index.html #追加内容
cp –r website/ static  # -r：若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录和文件
mv /home/www/index.html   /home/static/index2.html  #移动又重命名
useradd good #设置用户good
passwd good #设置密码good
tail -f filename  #查看日志文件,不不断变化的文件显示在屏幕上
top    #查看系统信息比如 cpu 内存占用  类似任务管理器
groupadd  #创建一个新的工作组，新工作组的信息将被添加到系统文件中
adduser  #添加用户
su git #切换到git用户
make  #通用构建工具，能满足一切构建需求,能够设置谁先编译谁后编译  linux自带,mac需要安装command line tools
```

### 创建镜像

```shell
#方法一: 从已经创建的容器中更新镜像，并且提交这个镜像(可以通过docker images查看)
docker commit -m="has update" -a="zhuyuanzheng" 6a83dd536888 zhuyuanzheng/good:v2

#方法二: 使用 Dockerfile 指令来创建一个新的镜像

```









**ssh** secure shell

sshd是ssh的服务端  路径在/etc/ssh/sshd_config





### 参考链接

[csdn-详解sshd远程连接服务](https://blog.csdn.net/qq_36417677/article/details/102561933)
