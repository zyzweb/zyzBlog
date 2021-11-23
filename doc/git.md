#  git





### 设置代理

```bash
#只对github.com
git config --global http.https://github.com.proxy socks5://127.0.0.1:7890
#取消代理
git config --global --unset http.https://github.com.proxy

#ssh代理 (修改 ~/.ssh/config 文件)
Host github.com
    User git
    ProxyCommand nc -v -x 127.0.0.1:7890 %h %p
    
#设置全局代理
git config --global http.proxy http://127.0.0.1:7890
git config --global https.proxy https://127.0.0.1:7890

#取消全局代理
git config --global --unset http.proxy 
git config --global --unset https.proxy 

#socks5不支持通过pubkey免密登录github，每次提交代码只能输入用户名和密码。http可以支持免密登录。(现已失效github只支持token和ssh登录,不支持账号密码登录)
```



### 免密登录的2种方式

**方式一:**

​	修改当前仓库.git/config中url = https://账号:密码@github.com/zyzweb/koa-server-proxy.git,再提交就发现不要输入密码了；

**方式二:** 

​	直接在克隆仓库的时候直接 git clone https://账号:密码@github.com/zyzweb/koa-server-proxy.git ，这样下次提交时也不需要输入密码。



### 同一个仓库设置多个远程仓库

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



## Github 在线看代码

- [ ] 

1 .

2 https://github.dev/zyzweb/zyzBlog

3 https://github1s.com/zyzweb/zyzBlog

### 常见问题:

##### 问题一:

![image-20210624155501618](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210624155501618.png)

**解决方案**

```shell
#取消代理即可
git config --global --unset http.proxy 
git config --global --unset https.proxy
```



##### 问题二:

git did not exit cleanly (exit code 128)  git torroiseGit  

<img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20211104124518309.png" alt="image-20211104124518309" style="zoom: 50%;" />



**解决方案:**

​	勾选No Checkout  LFS



##### 问题三:

只想自己更改但是不提交

**解决方案:**

​	

```shell
git update-index --assume-unchanged src/module/KDEanalysisReport/view/tradePolicy/test.vue #取消跟踪
git update-index --no-assume-unchanged .prettierrc.js  #增加跟踪	
```



##### 问题四:

​	更改.gitignore不生效

**解决方案:**

```bash
#之前没有被track设置有效,但是之前被track之后在更改就没有用了
git rm -r --cached .  #清除缓存
git add .
git commit -m 'update .gitignore'
```



##### 问题五:

​	文件名大小写不敏感

**解决方案一:**

 

```shell
git config core.ignorecase false #设置大小写敏感
```

**解决方案二:**

```shell
git rm ; git add  ;  git commit -m "rename file"  #先删除文件，再添加进去（需要先备份文件夹防止出错)
```

**`Win10`更新后支持对某个文件夹设定是否是大小写敏感的；使用命令**

```bash
fsutil.exe file SetCaseSensitiveInfo dirname enable/disable
```

 





49没看懂

53





### git merge  git merge --squash  git rebase 区别

git merge --squash dev  #将dev中的所有提交合并到一个commit中

git merge  #会有多个commit信息

git rebase  #可能合并多次



### git merge 和 git rebase区别

1.初始

<img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20211104130617448.png" alt="image-20211104130617448" style="zoom: 25%;" />



2. 在master执行git merge tmp

<img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20211104130703376.png" alt="image-20211104130703376" style="zoom: 25%;" />



3. 在master执行git rebase tmp

<img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210618204744894.png" alt="image-20210618204744894" style="zoom: 25%;" />









### 设置公私钥

```bash
cd ~/.ssh
ls -al  #查看有无公私钥
#没有公私钥的话生成公私钥
ssh-keygen -t rsa -C "zyz1609062132@gmail.com" #一路enter
cat ~/.ssh/id_rsa.pub  #复制到github中,可以不用填title
ssh -T git@github.com #测试ssh 用ssh链接下载才能用ssh提交
```



### git命令

```shell
### 查看git配置信息
git config --system --list  #查看系统config
git config --global --list  #查看当前用户（global）配置
git config -- local --list  #查看当前仓库配置信息

#设置用户名和邮箱
git config --global user.name 'zyz1609062132'
git config --global user.email '[zyz1609062132@gmail.com](mailto:zyz1609062132@gmail.com)'

#设置别名
git config --global alias.here '!git init && git add . && git commit -m "init "' #初始化项目
git config --global alias.logs "log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative"

git mv readme readme.md  //重命名(文件/文件夹) oldName newName
git 粘贴 //滚轮键
git init cc #创建cc文件夹建立仓库
git remote -v  #查看远程仓库地址
git status #查看冲突文件  查看当前工作区的信息，比如当前所在分支, 当前工作区中有多少 更改、删除的文件 以及 尚未追踪的文件和远程分支相比落后多少个版本等等之类的信息
git add #将文件修改添加到暂存区
git rm #将文件从本地移除(和git mv 类似直接操作)

git commit #提交项目修改到本地仓库 **git commit -am'666'一步**

#将本地master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了
#simple只推送当前分支,matching会推送所有有对应的远程分支的本地分支,git2.0之前默认采用matching,现在改为默认采用simple
#默认的origin可以省略
git config --global push.default matching/simple
git push <远程主机名> <本地分支名>:<远程分支名>
git push #将当前分支推送到远程
git push -f #强制覆盖远程仓库
git push origin --delete dev #删除远端分支
git push origin dev #将本地dev分支推送到远端,如果远程没有则新建
git push -u origin master # -u设置了一个默认的远程主机
git push --all origin   #不管是否存在对应的远程分支，将本地的所有分支都推送到远程

git checkout dev #切换到dev分支  === git switch dev
git checkout -b dev origin/dev #本地创建dev并和远端dev关联
git checkout -b dev #基于master创建并切换到 dev分支
git checkout -b dev 415c5c8086e16399 = git branch dev +git checkout dev **415c5c8086e16399**  #根据commit id创建并切换为dev分支

git branch -u origin/release_act_team_getNew  #本地分支与远程分支关联
git branch --unset-upstream  #本地分支与远程分支解除关联
git branch  #查看本地分支  git branch aa 创建aa分支
git branch -d dev #删除本地dev分支  不行的话就git branch -D dev
git branch -a #查看所有分支

#将新的提交放在另一个分支的上面,有冲突,先解决冲突,git add . git rebase --continue
git rebase 
git rebase --continue #解决冲突之后继续变基础
git rebase --abort  #终止变基

git pull = git fetch +git merge
git pull origin dev #将远程的分支和本地的分支进行合并
git pull = git fetch + git merge
git pull报错    ：wq  #强制性写入文件并退出
git help git帮助
git fetch origin dev #将远程dev分支拉到本地
git merge dev  #合dev分支到当前分支

git log #查看所有提交过的版本信息 **退出 q**  **git log --oneline  git log n3** 
git reflog #可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作) **一般用 git log**

git tag #查看所有tag
git tag v1.0 #打tag   
git tag v1.0 471fd27  #根据commitId 打tag
git tag -d v1.0 #删除标签
git show v2.0 #可以查看commitID 然后 git reset --hard commitID 回退
git push origin --tags #将本地tag推送远程(git push不会推送tag)
git update-git-for-windows  #windows升级git 
git help --web branch #网页查看git branch 用法
gitk  #git图形化

# 暂存
git stash #暂存提交(可以使用多次)
git stash list #查看暂存列表
git stash apply #恢复最近一次暂存但不删除此记录
git stash pop #恢复最近一次暂存且删除此记录
git stash drop #删除最近一次暂存
git stash clear #删除所有暂存
git stash apply stash@{0} #恢复指定的暂存(0位最近一次)但不删除此记录
git stash pop stash@{0} #恢复指定的暂存(0位最近一次)且删除此记录

#指令简写
-d  --delete：删除
-D  --delete --force的快捷键
-f   --force：强制
-m  --move：移动或重命名
-M  --move --force的快捷键
-r   --remote：远程
-a   --all：所有

#修改当前分支的commite信息
git commit --amend   
#修改当前分支之前的commit信息 进入之后改为reward,在修改commit信息
git rebase -i 27d28137j(要修改commit的上一个)   
#多个commit合并为一个commit
git rebase -i 27d28137j(要合并commit的上一个)    #修改当前分支之前的commit信息 进入之后改为s,在增加一个commit信息

#回退
git cherry-pick  4c805e2 #合并其他分支的某次提交到当前分支
git revert 4c805e2 #回滚某个commit(删除某个commiit)
git reset --hard  4c805e2/HEAD^ #回退所有(工作区 暂存区 仓库都为恢复之后的版本) 指定版本/前一版本
git reset --soft  4c805e2#回退到暂存区(工作区和暂存区为恢复之前的版本,仓库为恢复之后的版本) === git reset 4c805e2
git reset --mixed 4c805e2 #回退到工作区(工作区为恢复之前的版本,暂存和仓库为恢复之后的版本)

git reset HEAD  #撤销暂存区的修改,放回工作区(取消暂存)
git restore --staged #取消暂存
git checkout --index.html   #将工作区恢复到暂存区(丢弃工作区修改)
git restore index.html  #丢弃工作区改动
```



### 注意点:

git checkout -- readme.txt 从暂存区恢复到工作区 

有两种情况:

一种是readme.txt自修改后还没有被放到暂存区，现在，撤销修改就回到和版本库一模一样的状态；

一种是readme.txt已经添加到暂存区后，又作了修改，现在，撤销修改就回到添加到暂存区后的状态



### 小技巧

github网址后面[cnpmjs.org](http://cnpmjs.org) 下载快

建议使用ssh,速度比https快

本地没有分支 远程有分支  git checkout dev //直接切换为远程分支

commit 包含 tree(文件夹) blob(文件)

tag是对commit的封装

git的三种核心对象commit  tree blob

Commit 包含tree,tree里可以包含tree或者blob,blob包含具体的文件

HEAD指向branch,branch指向commit

vscode本身就集成了github;会自动登录授权获取token,webstorm安装github插件也可以

提交时候的用户名就是全局设置的用户名

 Git merge 和git rebase都会产生一个新的commit

git flow的核心是 pull request

开源项目先fork,然后在本地贡献代码 pull request  fork最后也删除

修改内容较少可以直接在网站上修改,然后本地pull

每个项目都有3个设施来辅助这个项目 **issues 主页  wiki**

issues 先讨论在插入代码,和pull request相反



**github网页创建分支和删除分支**

<img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20211104124722550.png" alt="image-20211104124722550" style="zoom:50%;" />



**迁入新仓库**

背景:vue从2.0更新到3.0，新建一个git仓库B,旧库是A。现在需要把A仓库的一个分支同步到B的主分支上

1.B仓库克隆到本地，git clone xxx(仓库地址)

2.在本地添加远程A，git remote add demo xxx(A的地址)  demo是别名

3.从远程仓库下载 git fetch demo

4.下载成功之后，将demo仓库的分支(比如ment)作为新的分支(development)在本地新建, git checkout -b development demo/ment

  注: git branch -a 可以查看所有分支(本地和远程)

5.切回本地master分支 git checkout master

6.把development 分支合并到master上 git merge development,如果出现 refusing to merge unrelated histories的错误,原因是两个仓库不同造成的, 需要在后面加上 --allow-unrelated-histories进行允许合并



**如何快速上传一个项目到github上?**

方法一: 可以先在github上建立仓库,让后clone到本地

方法二:先创建本地仓库然后把本地代码传到远程仓库,需要把本地仓库和远程仓库做一个连接

git init

git remote add origin +远程仓库地址   git remote -v 查看远程仓库地址 

git remote rm origin 删除远程仓库地址 //如果原来有远程仓库地址需先删除

然后点击同步就可以了

git pull --rebase origin master

git push -u origin master





免费集中式 cvs-svn



### github

t 搜索文件名称

s / 聚焦搜索

寻找demo 按更新日期排序

寻找架构  技术栈 + boilerplate 又或者是 starter 等关键词进行搜索  // vue boilerplate  vue vuex boilerplate  

寻找 数据与爬虫工具   // scrapy dianping.com

寻找 干货资源  类型 + 笔记   // 操作系统 笔记





### 参考链接

[github不接受账号密码,只接收token或者ssh](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)

[github文档](https://docs.github.com/cn/get-started)

