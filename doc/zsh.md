### 下载zsh

```shell
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
zsh --version   #查看是否安装成功
```

### 开启zsh

1. Mac自带ZSH，切换开启,(zsh + oh my zsh)

```bash
chsh -s /bin/zsh
```

2. windows可参考链接



### 设置别名

1.找到配置文件 /Users/zhuyuanzheng/.zshrc

```shell
#添加别名
alias mm="npm run mock"
alias dd="npm run dev"

alias   #查看所有别名
常见别名
gb='git branch'
gba='git branch -a'
gcb='git checkout -b'
gco='git checkout'
gl='git pull'
gp='git push'
gm='git merge'
grv='git remote -v'
gst='git status'
```

### 设置插件

插件有自带插件和第三方插件,

自带的插件在.zshrc设置之后重启配置

第三方插件git clone之后放在custom/plugins,在.zshrc中设置之后重启配置



### 卸载zsh

```bash
uninstall_oh_my_zsh
```



### 参考链接:

[Windows安装真正的zsh——不是在WSL子系统下哦~](https://blog.csdn.net/Chuancey_CC/article/details/118223562)

[ohmyzsh文档](https://github.com/ohmyzsh/ohmyzsh/wiki)

