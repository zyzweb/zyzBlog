npm i node-sass@npm:dart-sass  //用dart-sass替换node-sass

npm i @jyb/jfet -g --unsafe-perm //解决权限问题

直接安装指定版本的包不用删掉然后重新安装

@开头的包一般属于某个框架 如@vue/cli-service

C:\Windows\System32\drivers\etc\hosts  //host路径

  //全局安装的包路径

C:\Program Files\nodejs\node_modules  //使用nvm安装的node的全局包路径





### 常用命令

rimraf node_modules 删除node_modules //rm -rf node_modules

Rimraf **  //删除当前文件夹下的文件和文件夹

npm i --registry=[https://registry.npm.taobao.org](https://registry.npm.taobao.org/)  装特定镜像源的包  npm config set registry https://registry.npmjs.org/

npm i -f 强制安装

npm outdated //列出项目中所有可更新的包

npm ls -g --depth=0  //查看全局安装的包

npm ls —depth=0  //查看项目安装的包

npm uninstall -g jshint  //删除全局包

npm root -g //查看全局包的安装路径

npm ls @vue/cli -g //查看全局安装@vue/cli的版本信息 查看项目中去掉-g

npm home jquery //打开jquery主页 == npm docs jquery

https://github.com/nhn/tui.editor //打开jquery仓库

npm up 包名 //升级包 不叫包名升级所有 npm up -g 升级全局所有

npm run 可以不用打开package.json就可以查看script下的命令

npm rm 包名 从node_modules删除包 并从package.json中删掉记录 === npm un 包名

npm cache clean -f  强制清除缓存  (删掉node_modules中的.cache文件)

npm i jquery@3.0.0 安装指定版本

npm i vue --no-save 安装包不会放在package.json 默认安装会放入

npm config list 查看npm相关的信息

npm v 包名 version 查看包的最新版本 或者 npm info 包名 versions

npm v 包名 versions 查看包的所有版本信息

npm v node-sass dependencies //查看包的依赖关系

npm v node-sass repository.url  //查看包的仓库地址

cnpm 装包要加 -S -D  npm 不加默认装在dependencies

npm help install 查看某条命令的详细帮助

npm publish  //将模块发布到npmjs.com中 需要先登录

npm prune //移除不在package.json却在node_moduels中的包

npx browserslist //打印出所有浏览器版本支出情况  执行node_modules中的命令

yarn install



### npm bug

1. 如果npm i 有问题,实在无法解决,删除 package-lock.json和node_modules  然后在 npm i

1. npm WARN tar ENOENT :no such file or directory

​       执行  npm cache clean -f  和  npm i -f    强制npm获取远端资源

![image-20211120165040805](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20211120165040805.png)

​      npm i npm -g   //升级npm 

​    4.不能找到模块 卸载报错的模块然后重装





### nvm安装使用

1.先卸载本地node(之前安装的全局包不会删除)

\2. https://github.com/coreybutler/nvm-windows/releases (下载nvm-windows最新版本) // **nvm-setup.zip(用这个)**

nvm 可以显示表示安装成功  (**可以重启cmd**)

3.修改settings.txt  // 将npm node源都改为taobao

在你安装的目录下找到settings.txt文件，打开后加上

node_mirror: https://npm.taobao.org/mirrors/node/

npm_mirror: https://npm.taobao.org/mirrors/npm/





环境变量设置在用户变量里

<img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20211120164948242.png" alt="image-20211120164948242" style="zoom:30%;" />





### nvm常用命令

nvm list  查看本地安装的node版本

nvm list available 显示可下载版本的部分列表

nvm install 版本号 安装指定的版本的nodejs

nvm uninstall 版本号 删除nodejs

nvm use 版本号 使用指定版本的nodejs

nvm node_mirror https://npm.taobao.org/mirrors/node/ //设置node镜像 下载node速度快

nvm npm_mirror https://npm.taobao.org/mirrors/npm/  //设置npm镜像  下载npm速度快



### publish流程(要切换到npm网址)

1.npm login 输入账号zyz1609062132  密码zyz516194  邮箱1609062132@qq.com(若为第一次需 npm adduser )

2.npm init (不要npm init -y) 自己设定 不能发布和别人重复的包

3.npm publish

4.npm unpublish 包名@版本号 //  npm unpublish zyznizuinb@1.0.3



### nrm常用命令

nrm ls   //源列表

nrm use taobao //使用源  

nrm add company http://npm.company.com/  //添加源

nrm del company  //删除源

nrm test //测试