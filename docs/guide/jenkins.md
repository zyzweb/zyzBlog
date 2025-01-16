### 安装jenkins(mac  通过 homebrew)

1. 需要先安装jdk
2. brew install jenkins
3. brew services start jenkins  #启动jenkins
4. http://localhost:8080  #打开服务
5. 安装默认推荐的插件(安装完之后需要重启)
6. 安装NodeJS Plugin



### 常用命令

```shell
brew install jenkins #安装最新jenkins
brew install jenkins@YOUR_VERSION  #安装指定版本jenkins 
brew services start jenkins  #启动jenkins
brew services stop jenkins  #停止jenkins
brew services restart jenkins    #重启jenkins   或者用  http://localhost:8080/restart
brew upgrade jenkins   #更新jenkins
```



admin 密码  位于/Users/zhuyuanzheng/.jenkins/secrets/initialAdminPassword

b9f3c628df324e94a4a659d8c926cbb9