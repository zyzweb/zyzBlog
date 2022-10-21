### 下载zsh

```shell
$ sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
zsh --version   #查看是否安装成功
```

### 开启zsh

1. Mac自带ZSH，切换开启,(zsh + oh my zsh)

```bash
chsh -s /bin/zsh  #切换zsh
chsh -s /bin/bash  #切换bash
```

2. windows可参考链接



### 修改自定义标题

```shell
#参考https://www.jianshu.com/p/8b335f523e59
#.zshrc增加下面

# Uncomment the following line to disable auto-setting terminal title.
DISABLE_AUTO_TITLE="true"
# 设置标题栏
function precmd () {
  print -Pn - '\e]0;%1~\a'
}
```





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



### 常用插件

```shell
extract  #解压支持各种格式  自带的unzip也可以解压
cp #文件复制工具，替代cp和mv命令   cp ggg.js ../a     mv剪切
vi-mode  #vim插件
autojump  #没有使用 (和z一样,但是用j跳转)
z
zsh-autosuggestions  #自动建议 (和fish共存)
zsh-syntax-highlighting  #语法高亮
nvm #自动切换node版本
history  #h 查看历史命令
sudo #按2下esc自动补上sudo
```



### 常用命令

```bash
zsh --version  #5.8 zsh版本omz
zsh_stats  #使用频率前 20 的命令
source ~/.zshrc  #重启zsh
omz update  #更新ohmyzsh
```



### 卸载zsh

```bash
uninstall_oh_my_zsh
```



### 参考链接:

[Windows安装真正的zsh——不是在WSL子系统下哦~](https://blog.csdn.net/Chuancey_CC/article/details/118223562)

[ohmyzsh文档](https://github.com/ohmyzsh/ohmyzsh/wiki)

