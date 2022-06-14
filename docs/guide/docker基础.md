### 基础架构发展史

- 90年代是传统服务器；
- 2000年开始流行虚拟化技术;(VMware virtualbox)
- 2005年-2015年云技术Cloud开始流行；
- 2015年以后Container(容器) 时代 (docker)
- 

### 基础概念

镜像  容器   仓库    

镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例

仓库用来储存镜像



### https://hub.docker.com/  类似github

### docker切换国内源

<img src="http://image.zhuyuanzheng1.top/image-20220608230235173.png" alt="image-20220608230235173" style="zoom:33%;" />

```shell
#将下面的配置添加到上面,然后重启docker
#https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors  获取阿里云dock加速地址
{
  "debug": true,
  "experimental": false,
  "registry-mirrors": [
    "https://docker.mirrors.ustc.edu.cn",
    "https://hub-mirror.c.163.com",
    "https://vs83pkv4.mirror.aliyuncs.com"  
  ]
}

#linux换源  或者在宝塔面板软件管理操作
vim /etc/docker/daemon.json  #增加文件
#复制如下内容:
{
   "registry-mirrors": [
       "https://mirror.ccs.tencentyun.com"
  ]
}
sudo systemctl restart docker #重启docker
docker info #查看换源是否成功
```



## docker常用命令行

```bash
Ctrl + d /exit #退出当前容器
docker images  #列出本机所有镜像
docker ps #查看容器是否在运行及其他状态  running/Up 运行中  exited  停止  
docker ps -a #查看所有docker容器(包括已经停止的)
docker logs  2b1b7a428627  #在宿主机查看容器输出
docker stop  2b1b7a428627  #停止容器
docker pull ubuntu #载入镜像  docker pull whyour/qinglong:2.10.6 拉取指定镜像
docker pull docker.fe.jyb.com/jfet
docker exec -it 9b302e5d383c /bin/bash   #进入容器(退出不会导致容器退出)
docker exec --help    #查看某个命令的帮助说明,其他命令行也类似
docker port cafb276b7800   #查看指定容器的端口映射情况
docker search mysql   #搜索镜像
docker rm $(docker ps -aq)  #删除所有容器 -aq就是-a -q 类似 -am(git提交) 要先停止才能删除
docker stop $(docker ps -aq)  #停止所有容器
docker rmi 9873176a8ff5   #删除镜像(通过镜像id)
docker run -it --rm  ubuntu  cat etc/resolv.conf  #查看ubuntu容器的dns
docker run --name nginx-test -p 8080:80 -d nginx  #以name为nginx-test,本地端口代理容器80端口,在后台启动容器
service docker start  #启动docker服务
docker info #查看docker详细信息

#docker-compose 命令
docker-compose pull #更新镜像(要切换到指定文件夹)
docker-compose up -d #启动并运行整个应用程序(在后台)
docker-compose down #停止
docker-compose --version  #查看docker-compose版本
```

docker-compose可以调用dockerfile和docker-compose.yml 运行多个容器

docker compose  代替了手写docker的各个步骤



```yml
gitlab:
  image: 'gitlab/gitlab-ce:latest'
  restart: always
  hostname: '47.107.149.52'  #改成你部署的服务器(宿主机)的固定ip地址
  environment:
    GITLAB_OMNIBUS_CONFIG: |
      external_url 'http://47.107.149.52'
      # Add any other gitlab.rb configuration here, each on its own line
  ports:
    - '5678:80'    #映射到本机的80端口防止端口占用 访问地址就是http://47.107.149.52
    - '7443:443'
  volumes:  #映射宿主机的文件目录到运行的镜像里面 保证镜像的重启等不会造成数据的丢失
    - '/data/gitlab/config:/etc/gitlab'
    - '/data/gitlab/logs:/var/log/gitlab'
    - '/data/gitlab/data:/var/opt/gitlab'

gitlab-runner:
  image: gitlab/gitlab-runner
  restart: unless-stopped
  privileged: true
  volumes:
    - /data/runner/gitlab-runner:/etc/gitlab-runner
    - /var/run/docker.sock:/var/run/docker.sock  #宿主机机的docker.sock映射到镜像里面
    - /usr/bin/docker:/bin/docker #宿主机的docker可执行映射到镜像里面 后面build的时候会用到

```

进入gitlab文件夹里面启动docker

卡住 重启系统 结束进程



### 将下面的配置添加到上面,然后重启docker

\#https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors  获取阿里云dock加速地址 { "debug": true, "experimental": false, "registry-mirrors": [ "https://docker.mirrors.ustc.edu.cn", "https://hub-mirror.c.163.com", "https://vs83pkv4.mirror.aliyuncs.com" ] }

linux安装docker

```bash
curl -fsSL [get.docker.com](<http://get.docker.com/>) -o [get-docker.sh](<http://get-docker.sh/>)   #下载安装文件
sh [get-docker.sh](<http://get-docker.sh>)  #安装docker 
docker version #查看docker版本
systemctl start docker  #启动docker(客户端 服务端)
docker container run nginx #安装nginx容器 没有会去docker hub安装
docker container ls  #查看所有容器(只有打开的容器) docker container ls -a  查看全部容器
docker container stop 3e #停止容器
docker build -t jfet:latest .  #构建镜像  Dockfile在根目录
docker image save nginx -o ngingx.image  #导出镜像
docker image load -i ./nginx.image #导入镜像
docker image history 3e  #查看镜像的层数
```

```shell
#同个镜像跑多个容器,或者一个容器一个容器开
#docker-compose.yml

version: '2.0'
services:
##第一个青龙
  q1:
    image: whyour/qinglong:2.10.6
    container_name: ql1
    restart: always
    volumes:
       - ./ql1/config:/ql/config
       - ./ql1/scripts:/ql/scripts
       - ./ql1/repo:/ql/repo
       - ./ql1/log:/ql/log
       - ./ql1/db:/ql/db
       - ./ql1/jbot:/ql/jbot
       - ./ql1/raw:/ql/raw
    ports:
       - 5801:5700
##第二个青龙
  q2:
    image: whyour/qinglong:latest
    container_name: ql2
    restart: always
    volumes:
       - ./ql2/config:/ql/config
       - ./ql2/scripts:/ql/scripts
       - ./ql2/repo:/ql/repo
       - ./ql2/log:/ql/log
       - ./ql2/db:/ql/db
       - ./ql2/jbot:/ql/jbot
       - ./ql2/raw:/ql/raw
    ports:
       - 5802:5700
```

windows和mac安装自带了,linux需要自行安装,有命令和yml文件

### 导入image的3种方式

1. pull from registry  [hub.docker.com](https://hub.docker.com/)   https://quay.io/
2. Dockfile online
3. 自有文件导入



gitlab 管理员账号密码   root   secret_pass



### 查看docker网桥

```shell
ifconfig
```

![image-20220425133215694](http://image.zhuyuanzheng1.top/image-20220425133215694.png)



### 常见问题 

```shell
#重启docker失败
systemctl reset-failed docker   #关闭
systemctl start docker    #启动
```

### 容器代理

1.容器用docker内的代理

2.容器用docker外的代理

### 参考链接

[修改docker中gitlab的root账号的密码](https://blog.csdn.net/daqiang012/article/details/118765409)

[gitlab-ci入门](https://segmentfault.com/a/1190000040801945)

[docker部署gitlab](https://juejin.cn/post/6844904185079545863)

[docker部署gitlab2](https://juejin.cn/post/6844903984554049544)

[搭建私有docker库](https://cloud.tencent.com/developer/article/1718368)





```
docker run -dit \
  -v $PWD/ql:/ql/data \
  -p 5701:5700 \
  --name qinglong \
  --hostname qinglong \
  --restart unless-stopped \
  whyour/qinglong:2.10.12
```

```
docker run -dit \
  -v $PWD/ql1/config:/ql/config \
  -v $PWD/ql1/log:/ql/log \
  -v $PWD/ql1/db:/ql/db \
  -v $PWD/ql1/repo:/ql/repo \
  -v $PWD/ql1/raw:/ql/raw \
  -v $PWD/ql1/scripts:/ql/scripts \
  -v $PWD/ql1/jbot:/ql/jbot \
  -v $PWD/ql1/deps:/ql/deps \
  -p 5703:5700\
  --name ql1 \
  --hostname ql1 \
  --restart unless-stopped \
  whyour/qinglong:2.10.12
```





