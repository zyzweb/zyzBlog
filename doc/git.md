# git

git merge 和 git rebase区别

1.初始

![image-20210618204542391](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210618204542391.png)



2. 在master执行git merge tmp

![image-20210618204623643](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210618204623643.png)



3. 在master执行git rebase tmp

![image-20210618204744894](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210618204744894.png)

## git stash(切换分支隐藏未提交)

1. 用 git stash apply恢复，但是恢复后，stash 内容并不删除，需要用 git stash drop来删除；
2. 用 git stash pop，恢复的同时把stash内容也删了，这时候用 git stash list就看不到任何 stash 内容了
3. 可以多次 stash ，恢复的时候，先用 **git stash list**查看，然后用 git stash apply stash@{0}或者 git stash pop stash@{0}恢复指定的stash

## 只对github设置代理

```bash
#只对github.com
git config --global http.https://github.com.proxy socks5://127.0.0.1:7890

#取消代理
git config --global --unset http.https://github.com.proxy)
```

### git设置代理

git config --global http.proxy http://127.0.0.1:1080

git config --global https.proxy https://127.0.0.1:1080

### git取消代理

git config --global --unset http.proxy 

git config --global --unset https.proxy 

**socks5不支持通过pubkey免密登录github，每次提交代码只能输入用户名和密码。http可以支持免密登录。**

### http提交不用输入密码

#### 方式一:修改当前仓库.git/config中url = https://账号:密码@github.com/zyzweb/koa-server-proxy.git` ,再提交就发现不要输入密码了；`

####  方式二: 直接在克隆仓库的时候直接 `git clone https://账号:密码@github.com/zyzweb/koa-server-proxy.git` ，这样下次提交时也不需要输入密码。

## 常见报错

![image-20210624155501618](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210624155501618.png)

取消代理即可

git config --global --unset http.proxy 

 git config --global --unset https.proxy

## 同一个仓库设置2个远程仓库

```bash
git remote rm origin  #删除远程仓库
git remote add github https://github.com/zyzweb/zyzBlog.git  #添加github仓库
git remote add gitee https://gitee.com/zyzcode/zyzBlog.git  #添加gitee仓库
git remote -v  #查看最终结果
gitee	https://gitee.com/zyzcode/zyzBlog.git (fetch)
gitee	https://gitee.com/zyzcode/zyzBlog.git (push)
github	https://github.com/zyzweb/zyzBlog.git (fetch)
github	https://github.com/zyzweb/zyzBlog.git (push)
#git add /commit保持一致  git push 分开提交
git push github master
git push gitee master
```

## 查看git配置信息

查看系统config

```
git config --system --list
```

　　

查看当前用户（global）配置

```
git config --global --list
```

 

查看当前仓库配置信息

```
git config -- local --list
```



## 设置别名alias

```shell
git config --global alias.here '!git init && git add . && git commit -m "init "' #初始化项目
git config --global alias.logs "log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative"

```

## Github 在线看代码

https://github.dev/zyzweb/zyzBlog

https://github1s.com/zyzweb/zyzBlog

