# docker基础

## 1. 基础概念

镜像  容器   仓库    

镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例

仓库用来储存镜像

## 2. https://hub.docker.com/  类似github

## 3.docker切换国内源

![image-20210627214800444](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210627214800444.png)

```json
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
```

```bash
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
docker pull ubuntu #载入镜像
docker exec -it 243c32535da7 /bin/bash   #进入容器(退出不会导致容器退出)
docker exec --help    #查看某个命令的帮助说明,其他命令行也类似
docker port cafb276b7800   #查看指定容器的端口映射情况
docker search mysql   #搜索镜像
docker rm $(docker ps -aq)  #删除所有容器 -aq就是-a -q 类似 -am(git提交) 要先停止才能删除
docker stop $(docker ps -aq)  #停止所有容器
docker rmi 9873176a8ff5   #删除镜像(通过镜像id)
docker run -it --rm  ubuntu  cat etc/resolv.conf  #查看ubuntu容器的dns
docker-compose up -d #启动并运行整个应用程序(在后台)
docker run --name nginx-test -p 8080:80 -d nginx  #以name为nginx-test,本地端口代理容器80端口,在后台启动容器
docker-compose --version  #查看docker-compose版本
service docker start  #启动docker服务
```

docker-compose可以调用dockerfile和docker-compose.yml 运行多个容器



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