pm2(Process Manager 2)是一个node包,是node程序的部署神器,支持多种脚本语言（ruby，python，bash等等）

提供了性能/进程实时监控，负载均衡（仅限于node.js），自动重启，日志管理等等

是脚本的进程管理,可以加入开机自启和关闭自启

```bash
npm install pm2 -g #全局安装pm2
sudo pm2 startup  #把pm2加入开机启动(由于需要修改plist需要sudo权限)
pm2 list #查看所有pm2任务
sudo pm2 delete <task name> #删除pm2任务
```

