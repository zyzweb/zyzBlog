### 用npm + pm2 部署

```shell
npm i -g verdaccio
vim /root/.config/verdaccio/config.yaml
#在配置文件的最后一行加上listen: 0.0.0.0:4873, 默认没有这一行的，只能在本机访问，添加后可以通过外网访问


nrm add myTencentCloud http://42.193.248.139:4873/  #添加源
nrm use myTencentCloud  #使用源
npm adduser --registry http://42.193.248.139:4873/   #添加用户  设置用户名和密码
npm npm whoami  #确认是否添加成功
npm publish --registry http://42.193.248.139:4873/   #发布  
```













### 用docker部署  (docker可以,docker-compose暂时有问题)

```shell
docker pull verdaccio/verdaccio  #拉取镜像
docker run -it --rm --name verdaccio -p 4873:4873 verdaccio/verdaccio  #启动容器


#docker-compose.yml (暂时有问题)
version: '3'
services:
  verdaccio:
    image: verdaccio/verdaccio
    container_name: "verdaccio"
    network--mode: "bridge"
    environment:
      - VERDACCIO_PORT=4873
    ports:
      - "4873:4873"
    volumes:
      - "/home/verdaccio/storage:/verdaccio/storage"
      - "/home/verdaccio/conf:/verdaccio/conf"
      - "/home/verdaccio/plugins:/verdaccio/plugins"  
    network_mode: "bridge"
```



### 常用配置

```yaml
# 素有包的保存路径
  storage: /verdaccio/storage/data
  # 插件的保存路径
  plugins: /verdaccio/plugins

  # 通过web访问
  web:
    title: Verdaccio

  # 账号密码文件，初始不存在
  auth:
    htpasswd:
      file: /verdaccio/storage/htpasswd
      # max_users：1000
      # 默认1000，允许用户注册数量。为-1时，不能通过 npm adduser 注册，此时可以直接修改 file 文件添加用户。

  # 本地不存在时，读取仓库的地址
  uplinks:
    npmjs:
      url: https://registry.npmjs.org

  # 对包的访问操作权限，可以匹配某个具体项目，也可以通配
  # access 访问下载；publish 发布；unpublish 取消发布；
  # proxy 对应着uplinks名称，本地不存在，去unplinks里取

  # $all 表示所有人都可以执行该操作
  # $authenticated 已注册账户可操作
  # $anonymous 匿名用户可操作
  # 还可以明确指定 htpasswd 用户表中的用户，可以配置一个或多个。
  packages:
    '@*/*':
      access: $all
      publish: $authenticated
      unpublish: $authenticated
      proxy: npmjs
    
    '**':
      access: $all
      publish: $authenticated
      unpublish: $authenticated
      proxy: npmjs

  # 服务器相关
  sever:
    keepAliveTimeout: 60

  middlewares:
    audit:
      enabled: true

  # 日志设定
  logs: { type: stdout, format: pretty, level: http }
```







### 参考链接

[verdaccio中文文档](https://verdaccio.org/zh-CN/docs/what-is-verdaccio)

[npm私服搭建—verdaccio方案及其最佳实践](https://developer.aliyun.com/article/906143)



