### 推荐使用ssh登录

快速克隆  https://ghproxy.com/https://github.com/JDHelloWorld/jd_scripts.git

集中式—分布式

免费集中式 cvs-svn-git

### 设置代理

```bash
#只对github.com(不起作用)
git config --global http.<https://github.com.proxy> socks5://127.0.0.1:7890
#取消代理
git config --global --unset http.<https://github.com.proxy>

#ssh代理 (修改 ~/.ssh/config 文件)
Host github.com
    User git
    ProxyCommand nc -v -x 127.0.0.1:7890 %h %p
    
#设置全局代理
git config --global http.proxy <http://127.0.0.1:7890>
git config --global https.proxy <https://127.0.0.1:7890>

#取消全局代理
git config --global --unset http.proxy
git config --global --unset https.proxy 

#socks5不支持通过pubkey免密登录github，每次提交代码只能输入用户名和密码。http可以支持免密登录。(现已失效github只支持token和ssh登录,不支持账号密码登录)
```

### 免密登录的2种方式

- 修改当前仓库.git/config中url = https://账号:密码@github.com/zyzweb/koa-server-proxy.git,再提交就发现不要输入密码了；
- 直接在克隆仓库的时候直接 git clone https://账号:密码@github.com/zyzweb/koa-server-proxy.git ，这样下次提交时也不需要输入密码。

### 同一个仓库设置多个远程仓库

```bash
git remote rm origin  #删除远程仓库
git remote add github <https://github.com/zyzweb/zyzBlog.git>  #添加github仓库
git remote add gitee <https://gitee.com/zyzcode/zyzBlog.git>  #添加gitee仓库
git remote -v  #查看最终结果
gitee	<https://gitee.com/zyzcode/zyzBlog.git> (fetch)
gitee	<https://gitee.com/zyzcode/zyzBlog.git> (push)
github	<https://github.com/zyzweb/zyzBlog.git> (fetch)
github	<https://github.com/zyzweb/zyzBlog.git> (push)
#git add /commit保持一致  git push 分开提交
git push github master
git push gitee master
```

### Github 在线看代码

1. https://github.dev/zyzweb/zyzBlog
2. https://github1s.com/zyzweb/zyzBlog

### 常见问题:

### 问题一:

<img src="http://image.zhuyuanzheng1.top/image-20220608213625515.png" alt="image-20220608213625515" style="zoom:50%;" />

**解决方案**

```bash
#取消代理即可
git config --global --unset http.proxy
git config --global --unset https.proxy
```

### 问题二:

git did not exit cleanly (exit code 128) git torroiseGit

<img src="http://image.zhuyuanzheng1.top/image-20220608234311883.png" alt="image-20220608234311883" style="zoom:45%;" />

**解决方案:**

勾选No Checkout LFS

### 问题三:

只想自己更改但是不提交

**解决方案:**

```bash
git update-index --assume-unchanged src/module/KDEanalysisReport/view/tradePolicy/test.vue #取消跟踪
git update-index --no-assume-unchanged .prettierrc.js  #增加跟踪
```

### 问题四:

更改.gitignore不生效

**解决方案:**

```bash
#之前没有被track设置有效,但是之前被track之后在更改就没有用了
#解决方案如下
git rm -r --cached .  #清除缓存
git add .
git commit -m 'update .gitignore'
```

### 问题五:

文件名大小写不敏感(没有被git跟踪)

**解决方案一:**

```bash
git config core.ignorecase false #设置大小写敏感
```

**解决方案二:**

```bash
git rm 
git add  
git commit -m "rename file"  #先删除文件，再添加进去（需要先备份文件夹防止出错)
```

**`Win10`更新后支持对某个文件夹设定是否是大小写敏感的；使用命令**

```bash
fsutil.exe file SetCaseSensitiveInfo dirname enable/disable
```

### git工作流

1. 主干开发
2. git flow(现在使用文件夹和分支重复)  周期长,质量要求高
3. github flow  基于主干分支拉feature开发,合并回主干分支,直接上线
4. gitlab flow  带生产分支,基于主干分支拉feature开发,合并回主干分支,然后在合并会生产分支

### 选择合适的分支集成策略

- git merge
- git rebase
- git merge —squash

### git merge git merge –squash git rebase 区别

git merge –squash dev #将dev中的所有提交合并到一个commit中(精简版的rebase)

git merge #会有多个commit信息

git rebase #可能合并多次

### git merge 和 git rebase区别

1.初始

<img src="http://image.zhuyuanzheng1.top/image-20220607224113396.png" alt="image-20220607224113396" style="zoom:33%;" />

1. 在master执行git merge tmp

<img src="http://image.zhuyuanzheng1.top/image-20220607224044889.png" alt="image-20220607224044889" style="zoom:33%;" />

1. 在master执行git rebase tmp

<img src="http://image.zhuyuanzheng1.top/image-20220607224159928.png" alt="image-20220607224159928" style="zoom:33%;" />

### 设置公私钥

```bash
cd ~/.sshls -al  #查看有无公私钥#没有公私钥的话生成公私钥
ssh-keygen -t rsa -C "zyz1609062132@gmail.com" #一路enterc
cat ~/.ssh/id_rsa.pub  #复制到github中,可以不用填title
ssh -T git@github.com #测试ssh 用ssh链接下载才能用ssh提交
```

### git命令

```bash
### 查看git配置信息
git config --system --list  #查看系统config
git config --global --list  #查看当前用户（global）配置
git config --list  #查看当前仓库配置信息(包含全局和本地,优先用本地)

## 设置本地仓库用户名和邮箱(在项目仓库进行设置)
git config user.name 'zhuyuanzheng'
git config user.email 'yuanzheng.zhu@jyblife.com'

#设置全局用户名和邮箱
git config --global user.name 'zyz1609062132'
git config --global user.email '[zyz1609062132@gmail.com](<mailto:zyz1609062132@gmail.com>)'

#设置别名
git config --global alias.here '!git init && git add . && git commit -m "init "' #初始化项目
git config --global alias.logs "log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative"

git mv readme readme.md  //重命名(文件/文件夹) oldName newName
git init cc #创建cc文件夹建立仓库
git remote -v  #查看远程仓库地址
git status #查看冲突文件  查看当前工作区的信息，比如当前所在分支, 当前工作区中有多少 更改、删除的文件 以及 尚未追踪的文件和远程分支相比落后多少个版本等等之类的信息
git add #将文件修改添加到暂存区
git commit #提交项目修改到本地仓库 **git commit -am'666'一步**
git rm #将文件从本地移除(和git mv 类似直接操作)
git rm -r #删除文件夹

#将本地master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数直接使用git push
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

git checkout – readme.txt 丢弃工作区改动

有两种情况:

一种是readme.txt自修改后还没有被放到暂存区，现在撤销修改就回到和版本库一模一样的状态；

一种是readme.txt已经添加到暂存区后，又作了修改，现在撤销修改就回到添加到暂存区后的状态

### 小技巧

github网址后面[cnpmjs.org](http://cnpmjs.org/) 下载快

建议使用ssh,速度比https快

本地没有分支 远程有分支 git checkout dev //直接切换为远程分支

git的三种核心对象commit tree blob

commit 包含 tree(文件夹) blob(文件)

Commit 包含tree,tree里可以包含tree或者blob,blob包含具体的文件

tag是对commit的封装

merge request pull request  功能一样,叫法不同

HEAD指向branch,branch指向commit

vscode本身就集成了github;会自动登录授权获取token,webstorm安装github插件也可以

开源项目先fork,然后在本地贡献代码 pull request fork最后也删除

修改内容较少可以直接在网站上修改,然后本地pull

每个项目都有3个设施来辅助这个项目 **issues 主页 wiki**

issues 先讨论在插入代码,和pull request相反

**github网页创建分支和删除分支**

<img src="http://image.zhuyuanzheng1.top/image-20220608213459851.png" alt="image-20220608213459851" style="zoom:50%;" />

**迁入新仓库**

背景:vue从2.0更新到3.0，新建一个git仓库B,旧库是A。现在需要把A仓库的一个分支同步到B的主分支上

1. B仓库克隆到本地，git clone xxx(仓库地址)

2. 在本地添加远程A，git remote add demo xxx(A的地址) demo是别名

3. 从远程仓库下载 git fetch demo

4. 下载成功之后，将demo仓库的分支(比如ment)作为新的分支(development)在本地新建, git checkout -b development demo/ment

   ```
   注: git branch -a 可以查看所有分支(本地和远程)
   ```

5. 切回本地master分支 git checkout master

6. 把development 分支合并到master上 git merge development,如果出现 refusing to merge unrelated histories的错误,原因是两个仓库不同造成的, 需要在后面加上 –allow-unrelated-histories进行允许合并

**如何快速上传一个项目到github上?**

- 可以先在github上建立仓库,让后clone到本地
- 先创建本地仓库然后把本地代码传到远程仓库,需要把本地仓库和远程仓库做一个连接

git init

git remote add origin +远程仓库地址

git remote -v 查看远程仓库地址

git remote rm origin 删除远程仓库地址 //如果原来有远程仓库地址需先删除

然后点击同步就可以了

git pull –rebase origin master

git push -u origin master

### github搜索技巧

t 搜索文件名称

s / 聚焦搜索

寻找demo 按更新日期排序

寻找架构 技术栈 + boilerplate 又或者是 starter 等关键词进行搜索 // vue boilerplate vue vuex boilerplate

寻找 数据与爬虫工具 // scrapy [dianping.com](http://dianping.com)

寻找 干货资源 类型 + 笔记 // 操作系统 笔记



### 常见问题

别人提交代码冲突,都接收自己的了

方法一: git reset --soft 之前的commit   然后在git pull 解决冲突

方法二: 让别人在提交一次 在合并一次解决冲突(推荐)



### 参考链接

[github不接受账号密码,只接收token或者ssh](https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/)

[github文档](https://docs.github.com/cn/get-started)

[git常见问题总结](https://juejin.cn/post/7021044496787832862)

[learn git Branching小游戏](https://learngitbranching.js.org/?locale=zh_CN)

[git钩子husky和pre-commit](https://segmentfault.com/a/1190000015953265)
