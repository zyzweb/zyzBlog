(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{616:function(t,s,a){"use strict";a.r(s);var n=a(17),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"推荐使用ssh登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#推荐使用ssh登录"}},[t._v("#")]),t._v(" 推荐使用ssh登录")]),t._v(" "),a("p",[t._v("快速克隆  https://ghproxy.com/https://github.com/JDHelloWorld/jd_scripts.git")]),t._v(" "),a("p",[t._v("集中式—分布式")]),t._v(" "),a("p",[t._v("免费集中式 cvs-svn-git")]),t._v(" "),a("h3",{attrs:{id:"设置代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置代理"}},[t._v("#")]),t._v(" 设置代理")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#只对github.com(不起作用)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com.proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" socks5://127.0.0.1:7890\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#取消代理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset http."),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com.proxy"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#ssh代理 (修改 ~/.ssh/config 文件)")]),t._v("\nHost github.com\n    User "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v("\n    ProxyCommand "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nc")]),t._v(" -v -x "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("127.0")]),t._v(".0.1:7890 %h %p\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置全局代理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global http.proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("http://127.0.0.1:789"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global https.proxy "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://127.0.0.1:789"),a("span",{pre:!0,attrs:{class:"token operator"}},[a("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("0")]),t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#取消全局代理")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset http.proxy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset https.proxy \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#socks5不支持通过pubkey免密登录github，每次提交代码只能输入用户名和密码。http可以支持免密登录。(现已失效github只支持token和ssh登录,不支持账号密码登录)")]),t._v("\n")])])]),a("h3",{attrs:{id:"免密登录的2种方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#免密登录的2种方式"}},[t._v("#")]),t._v(" 免密登录的2种方式")]),t._v(" "),a("ul",[a("li",[t._v("修改当前仓库.git/config中url = https://账号:密码@github.com/zyzweb/koa-server-proxy.git,再提交就发现不要输入密码了；")]),t._v(" "),a("li",[t._v("直接在克隆仓库的时候直接 git clone https://账号:密码@github.com/zyzweb/koa-server-proxy.git ，这样下次提交时也不需要输入密码。")])]),t._v(" "),a("h3",{attrs:{id:"同一个仓库设置多个远程仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同一个仓库设置多个远程仓库"}},[t._v("#")]),t._v(" 同一个仓库设置多个远程仓库")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" origin  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" github "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com/zyzweb/zyzBlog.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加github仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" gitee "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://gitee.com/zyzcode/zyzBlog.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#添加gitee仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看最终结果")]),t._v("\ngitee\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://gitee.com/zyzcode/zyzBlog.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngitee\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://gitee.com/zyzcode/zyzBlog.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngithub\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com/zyzweb/zyzBlog.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fetch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ngithub\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("https://github.com/zyzweb/zyzBlog.git"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("push"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#git add /commit保持一致  git push 分开提交")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push github master\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push gitee master\n")])])]),a("h3",{attrs:{id:"github-在线看代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github-在线看代码"}},[t._v("#")]),t._v(" Github 在线看代码")]),t._v(" "),a("ol",[a("li",[t._v("https://github.dev/zyzweb/zyzBlog")]),t._v(" "),a("li",[t._v("https://github1s.com/zyzweb/zyzBlog")])]),t._v(" "),a("h3",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题:")]),t._v(" "),a("h3",{attrs:{id:"问题一"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题一"}},[t._v("#")]),t._v(" 问题一:")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220608213625515.png",alt:"image-20220608213625515"}}),t._v(" "),a("p",[a("strong",[t._v("解决方案")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#取消代理即可")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset http.proxy\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --unset https.proxy\n")])])]),a("h3",{attrs:{id:"问题二"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题二"}},[t._v("#")]),t._v(" 问题二:")]),t._v(" "),a("p",[t._v("git did not exit cleanly (exit code 128) git torroiseGit")]),t._v(" "),a("img",{staticStyle:{zoom:"45%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220608234311883.png",alt:"image-20220608234311883"}}),t._v(" "),a("p",[a("strong",[t._v("解决方案:")])]),t._v(" "),a("p",[t._v("勾选No Checkout LFS")]),t._v(" "),a("h3",{attrs:{id:"问题三"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题三"}},[t._v("#")]),t._v(" 问题三:")]),t._v(" "),a("p",[t._v("只想自己更改但是不提交")]),t._v(" "),a("p",[a("strong",[t._v("解决方案:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-index --assume-unchanged src/module/KDEanalysisReport/view/tradePolicy/test.vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#取消跟踪")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-index --no-assume-unchanged .prettierrc.js  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#增加跟踪")]),t._v("\n")])])]),a("h3",{attrs:{id:"问题四"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题四"}},[t._v("#")]),t._v(" 问题四:")]),t._v(" "),a("p",[t._v("更改.gitignore不生效")]),t._v(" "),a("p",[a("strong",[t._v("解决方案:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#之前没有被track设置有效,但是之前被track之后在更改就没有用了")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解决方案如下")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r --cached "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#清除缓存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'update .gitignore'")]),t._v("\n")])])]),a("h3",{attrs:{id:"问题五"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题五"}},[t._v("#")]),t._v(" 问题五:")]),t._v(" "),a("p",[t._v("文件名大小写不敏感(没有被git跟踪)")]),t._v(" "),a("p",[a("strong",[t._v("解决方案一:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config core.ignorecase "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置大小写敏感")]),t._v("\n")])])]),a("p",[a("strong",[t._v("解决方案二:")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rename file"')]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#先删除文件，再添加进去（需要先备份文件夹防止出错)")]),t._v("\n")])])]),a("p",[a("strong",[a("code",[t._v("Win10")]),t._v("更新后支持对某个文件夹设定是否是大小写敏感的；使用命令")])]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("fsutil.exe "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("file")]),t._v(" SetCaseSensitiveInfo "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirname")]),t._v(" enable/disable\n")])])]),a("h3",{attrs:{id:"git工作流"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git工作流"}},[t._v("#")]),t._v(" git工作流")]),t._v(" "),a("ol",[a("li",[t._v("主干开发")]),t._v(" "),a("li",[t._v("git flow(现在使用文件夹和分支重复)  周期长,质量要求高")]),t._v(" "),a("li",[t._v("github flow  基于主干分支拉feature开发,合并回主干分支,直接上线")]),t._v(" "),a("li",[t._v("gitlab flow  带生产分支,基于主干分支拉feature开发,合并回主干分支,然后在合并会生产分支")])]),t._v(" "),a("h3",{attrs:{id:"选择合适的分支集成策略"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择合适的分支集成策略"}},[t._v("#")]),t._v(" 选择合适的分支集成策略")]),t._v(" "),a("ul",[a("li",[t._v("git merge")]),t._v(" "),a("li",[t._v("git rebase")]),t._v(" "),a("li",[t._v("git merge —squash")])]),t._v(" "),a("h3",{attrs:{id:"git-merge-git-merge-squash-git-rebase-区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-git-merge-squash-git-rebase-区别"}},[t._v("#")]),t._v(" git merge git merge –squash git rebase 区别")]),t._v(" "),a("p",[t._v("git merge –squash dev #将dev中的所有提交合并到一个commit中(精简版的rebase)")]),t._v(" "),a("p",[t._v("git merge #会有多个commit信息")]),t._v(" "),a("p",[t._v("git rebase #可能合并多次")]),t._v(" "),a("h3",{attrs:{id:"git-merge-和-git-rebase区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-merge-和-git-rebase区别"}},[t._v("#")]),t._v(" git merge 和 git rebase区别")]),t._v(" "),a("p",[t._v("1.初始")]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220607224113396.png",alt:"image-20220607224113396"}}),t._v(" "),a("ol",[a("li",[t._v("在master执行git merge tmp")])]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220607224044889.png",alt:"image-20220607224044889"}}),t._v(" "),a("ol",[a("li",[t._v("在master执行git rebase tmp")])]),t._v(" "),a("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220607224159928.png",alt:"image-20220607224159928"}}),t._v(" "),a("h3",{attrs:{id:"设置公私钥"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置公私钥"}},[t._v("#")]),t._v(" 设置公私钥")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" ~/.sshls -al  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看有无公私钥#没有公私钥的话生成公私钥")]),t._v("\nssh-keygen -t rsa -C "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"zyz1609062132@gmail.com"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#一路enterc")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.ssh/id_rsa.pub  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#复制到github中,可以不用填title")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ssh")]),t._v(" -T git@github.com "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#测试ssh 用ssh链接下载才能用ssh提交")]),t._v("\n")])])]),a("h3",{attrs:{id:"git命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git命令"}},[t._v("#")]),t._v(" git命令")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("### 查看git配置信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --system --list  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看系统config")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global --list  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前用户（global）配置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --list  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看当前仓库配置信息(包含全局和本地,优先用本地)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 设置本地仓库用户名和邮箱(在项目仓库进行设置)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zhuyuanzheng'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yuanzheng.zhu@jyblife.com'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置全局用户名和邮箱")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.name "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'zyz1609062132'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global user.email "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'[zyz1609062132@gmail.com](<mailto:zyz1609062132@gmail.com>)'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#设置别名")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.here "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!git init && git add . && git commit -m \"init \"'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#初始化项目")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.logs "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"log --graph --pretty=format:'%C(yellow)%h%Creset -%Cred%d%Creset %s %Cgreen| %cr %C(bold blue)| %an%Creset' --abbrev-commit --date=relative\"")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("mv")]),t._v(" readme readme.md  //重命名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("文件/文件夹"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" oldName newName\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init cc "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建cc文件夹建立仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看远程仓库地址")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看冲突文件  查看当前工作区的信息，比如当前所在分支, 当前工作区中有多少 更改、删除的文件 以及 尚未追踪的文件和远程分支相比落后多少个版本等等之类的信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将文件修改添加到暂存区")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#提交项目修改到本地仓库 **git commit -am'666'一步**")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将文件从本地移除(和git mv 类似直接操作)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" -r "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除文件夹")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将本地master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数直接使用git push")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#simple只推送当前分支,matching会推送所有有对应的远程分支的本地分支,git2.0之前默认采用matching,现在改为默认采用simple")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#默认的origin可以省略")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global push.default matching/simple\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程主机名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("本地分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("远程分支名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将当前分支推送到远程")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -f "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#强制覆盖远程仓库")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --delete dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除远端分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将本地dev分支推送到远端,如果远程没有则新建")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push -u origin master "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -u设置了一个默认的远程主机")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push --all origin   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#不管是否存在对应的远程分支，将本地的所有分支都推送到远程")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#切换到dev分支  === git switch dev")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev origin/dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#本地创建dev并和远端dev关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#基于master创建并切换到 dev分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b dev 415c5c8086e16399 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch dev +git checkout dev **415c5c8086e16399**  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#根据commit id创建并切换为dev分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -u origin/release_act_team_getNew  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#本地分支与远程分支关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch --unset-upstream  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#本地分支与远程分支解除关联")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看本地分支  git branch aa 创建aa分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除本地dev分支  不行的话就git branch -D dev")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -a "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看所有分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将新的提交放在另一个分支的上面,有冲突,先解决冲突,git add . git rebase --continue")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --continue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#解决冲突之后继续变基础")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase --abort  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#终止变基")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch +git merge\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将远程的分支和本地的分支进行合并")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch + "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull报错    ：wq  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#强制性写入文件并退出")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" git帮助\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin dev "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将远程dev分支拉到本地")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#合dev分支到当前分支")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看所有提交过的版本信息 **退出 q**  **git log --oneline  git log n3**")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reflog "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以查看所有分支的所有操作记录（包括已经被删除的 commit 记录和 reset 的操作) **一般用 git log**")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看所有tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.0 471fd27  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#根据commitId 打tag")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -d v1.0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除标签")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v2.0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#可以查看commitID 然后 git reset --hard commitID 回退")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将本地tag推送远程(git push不会推送tag)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" update-git-for-windows  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#windows升级git")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("help")]),t._v(" --web branch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#网页查看git branch 用法")]),t._v("\ngitk  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#git图形化")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 暂存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#暂存提交(可以使用多次)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash list "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看暂存列表")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#恢复最近一次暂存但不删除此记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#恢复最近一次暂存且删除此记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash drop "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除最近一次暂存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clear")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除所有暂存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash apply stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#恢复指定的暂存(0位最近一次)但不删除此记录")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" stash pop stash@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#恢复指定的暂存(0位最近一次)且删除此记录")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改当前分支的commite信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改当前分支之前的commit信息 进入之后改为reward,在修改commit信息")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i 27d28137j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("要修改commit的上一个"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#多个commit合并为一个commit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" rebase -i 27d28137j"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("要合并commit的上一个"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#修改当前分支之前的commit信息 进入之后改为s,在增加一个commit信息")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回退")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" cherry-pick  4c805e2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#合并其他分支的某次提交到当前分支")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" revert 4c805e2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回滚某个commit(删除某个commiit)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --hard  4c805e2/HEAD^ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回退所有(工作区 暂存区 仓库都为恢复之后的版本) 指定版本/前一版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --soft  4c805e2"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回退到暂存区(工作区和暂存区为恢复之前的版本,仓库为恢复之后的版本) === git reset 4c805e2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset --mixed 4c805e2 "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#回退到工作区(工作区为恢复之前的版本,暂存和仓库为恢复之后的版本)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#撤销暂存区的修改,放回工作区(取消暂存)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" restore --staged "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#取消暂存")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout --index.html   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#将工作区恢复到暂存区(丢弃工作区修改)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" restore index.html  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#丢弃工作区改动")]),t._v("\n")])])]),a("h3",{attrs:{id:"注意点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意点"}},[t._v("#")]),t._v(" 注意点:")]),t._v(" "),a("p",[t._v("git checkout – readme.txt 丢弃工作区改动")]),t._v(" "),a("p",[t._v("有两种情况:")]),t._v(" "),a("p",[t._v("一种是readme.txt自修改后还没有被放到暂存区，现在撤销修改就回到和版本库一模一样的状态；")]),t._v(" "),a("p",[t._v("一种是readme.txt已经添加到暂存区后，又作了修改，现在撤销修改就回到添加到暂存区后的状态")]),t._v(" "),a("h3",{attrs:{id:"小技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小技巧"}},[t._v("#")]),t._v(" 小技巧")]),t._v(" "),a("p",[t._v("github网址后面"),a("a",{attrs:{href:"http://cnpmjs.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("cnpmjs.org"),a("OutboundLink")],1),t._v(" 下载快")]),t._v(" "),a("p",[t._v("建议使用ssh,速度比https快")]),t._v(" "),a("p",[t._v("本地没有分支 远程有分支 git checkout dev //直接切换为远程分支")]),t._v(" "),a("p",[t._v("git的三种核心对象commit tree blob")]),t._v(" "),a("p",[t._v("commit 包含 tree(文件夹) blob(文件)")]),t._v(" "),a("p",[t._v("Commit 包含tree,tree里可以包含tree或者blob,blob包含具体的文件")]),t._v(" "),a("p",[t._v("tag是对commit的封装")]),t._v(" "),a("p",[t._v("merge request pull request  功能一样,叫法不同")]),t._v(" "),a("p",[t._v("HEAD指向branch,branch指向commit")]),t._v(" "),a("p",[t._v("vscode本身就集成了github;会自动登录授权获取token,webstorm安装github插件也可以")]),t._v(" "),a("p",[t._v("开源项目先fork,然后在本地贡献代码 pull request fork最后也删除")]),t._v(" "),a("p",[t._v("修改内容较少可以直接在网站上修改,然后本地pull")]),t._v(" "),a("p",[t._v("每个项目都有3个设施来辅助这个项目 "),a("strong",[t._v("issues 主页 wiki")])]),t._v(" "),a("p",[t._v("issues 先讨论在插入代码,和pull request相反")]),t._v(" "),a("p",[a("strong",[t._v("github网页创建分支和删除分支")])]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220608213459851.png",alt:"image-20220608213459851"}}),t._v(" "),a("p",[a("strong",[t._v("迁入新仓库")])]),t._v(" "),a("p",[t._v("背景:vue从2.0更新到3.0，新建一个git仓库B,旧库是A。现在需要把A仓库的一个分支同步到B的主分支上")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("B仓库克隆到本地，git clone xxx(仓库地址)")])]),t._v(" "),a("li",[a("p",[t._v("在本地添加远程A，git remote add demo xxx(A的地址) demo是别名")])]),t._v(" "),a("li",[a("p",[t._v("从远程仓库下载 git fetch demo")])]),t._v(" "),a("li",[a("p",[t._v("下载成功之后，将demo仓库的分支(比如ment)作为新的分支(development)在本地新建, git checkout -b development demo/ment")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("注: git branch -a 可以查看所有分支(本地和远程)\n")])])])]),t._v(" "),a("li",[a("p",[t._v("切回本地master分支 git checkout master")])]),t._v(" "),a("li",[a("p",[t._v("把development 分支合并到master上 git merge development,如果出现 refusing to merge unrelated histories的错误,原因是两个仓库不同造成的, 需要在后面加上 –allow-unrelated-histories进行允许合并")])])]),t._v(" "),a("p",[a("strong",[t._v("如何快速上传一个项目到github上?")])]),t._v(" "),a("ul",[a("li",[t._v("可以先在github上建立仓库,让后clone到本地")]),t._v(" "),a("li",[t._v("先创建本地仓库然后把本地代码传到远程仓库,需要把本地仓库和远程仓库做一个连接")])]),t._v(" "),a("p",[t._v("git init")]),t._v(" "),a("p",[t._v("git remote add origin +远程仓库地址")]),t._v(" "),a("p",[t._v("git remote -v 查看远程仓库地址")]),t._v(" "),a("p",[t._v("git remote rm origin 删除远程仓库地址 //如果原来有远程仓库地址需先删除")]),t._v(" "),a("p",[t._v("然后点击同步就可以了")]),t._v(" "),a("p",[t._v("git pull –rebase origin master")]),t._v(" "),a("p",[t._v("git push -u origin master")]),t._v(" "),a("h3",{attrs:{id:"github搜索技巧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#github搜索技巧"}},[t._v("#")]),t._v(" github搜索技巧")]),t._v(" "),a("p",[t._v("t 搜索文件名称")]),t._v(" "),a("p",[t._v("s / 聚焦搜索")]),t._v(" "),a("p",[t._v("寻找demo 按更新日期排序")]),t._v(" "),a("p",[t._v("寻找架构 技术栈 + boilerplate 又或者是 starter 等关键词进行搜索 // vue boilerplate vue vuex boilerplate")]),t._v(" "),a("p",[t._v("寻找 数据与爬虫工具 // scrapy "),a("a",{attrs:{href:"http://dianping.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("dianping.com"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("寻找 干货资源 类型 + 笔记 // 操作系统 笔记")]),t._v(" "),a("h3",{attrs:{id:"常见问题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题-2"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("p",[t._v("别人提交代码冲突,都接收自己的了")]),t._v(" "),a("p",[t._v("方法一: git reset --soft 之前的commit   然后在git pull 解决冲突")]),t._v(" "),a("p",[t._v("方法二: 让别人在提交一次 在合并一次解决冲突(推荐)")]),t._v(" "),a("h3",{attrs:{id:"参考链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.blog/2020-12-15-token-authentication-requirements-for-git-operations/",target:"_blank",rel:"noopener noreferrer"}},[t._v("github不接受账号密码,只接收token或者ssh"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://docs.github.com/cn/get-started",target:"_blank",rel:"noopener noreferrer"}},[t._v("github文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://juejin.cn/post/7021044496787832862",target:"_blank",rel:"noopener noreferrer"}},[t._v("git常见问题总结"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://learngitbranching.js.org/?locale=zh_CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("learn git Branching小游戏"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000015953265",target:"_blank",rel:"noopener noreferrer"}},[t._v("git钩子husky和pre-commit"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);