pm2(Process Manager 2)是一个node包,是node程序的部署神器,支持多种脚本语言（ruby，python，bash等等）

提供了性能/进程实时监控，负载均衡（仅限于node.js），自动重启，日志管理等等

是脚本的进程管理,可以加入开机自启和关闭自启



```bash
#pm2启动的服务都是在后台运行
#配置文件  ~/.pm2
npm install pm2 -g #全局安装pm2
sudo pm2 startup  #把pm2加入开机启动(由于需要修改plist需要sudo权限) 加入新的任务都要执行 pm2 save sudo pm2 startup
pm2 unstartup  # 移除开机自启动
pm2 update #更新

#查看
pm2 list #查看所有pm2任务
pm2 logs # 查看日志
pm2 show app_name|app_id # 查看进程详情
pm2 monit  # 查看CPU和内存资源占用

#重启
pm2 restart app_name|app_id  # 重启
pm2 restart all  # 重启所有进程，相当stop+start

#删除
pm2 delete app_name|app_id #删除pm2任务
pm2 delete all # 从列表中删除全部进程
pm2 kill # 杀死守护进程

#停止
pm2 stop app_name|app_id
pm2 stop all  # 停止所有

#启动
pm2 start app.js  # 启动  或者 pm2 start ./index.js
pm2 start app.js -i 4 # 启动4个应用实例，自动负载均衡
pm2 start app.js --watch  # 监听文件变化，配合pm2 logs，方便本地开发

#批量启动(以restart模式启动，可以多次执行)
#新建server.json
{
    "apps": [{
        "name": "appA",
        "script": "./appA.js",
        "watch": false
    }, {
        "name": "appB",
        "script": "./appB.js",
        "watch": false
    }]
}
# 再执行：
pm2 start server.json
```





### 参考链接

[pm2冷门技巧](https://blog.csdn.net/sinat_17775997/article/details/116190210)
