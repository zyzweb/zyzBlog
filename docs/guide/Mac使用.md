### 安装ios/ipados app



Anki

下载Anki客户端安装AnkiConnect插件,登录自己的账号

在salad设置—单词管理—检查anyConnect,然后自动保存就会放在自动保存卡片了



2台电脑互传文件用http-server不用啥远程桌面 共享文件夹啥的

先压缩zip在传输



Sudo -i  以管理员运行命令



1. 直接在macos AppStore上下载
2. 通过imazing上导出ipa文件安装

需要更改启动磁盘安全性级别—降低安全性

zeplin  ps插件连接不上,直接在zeplin设置中重新安装即可  打开zeplin才能接收



双指放大缩小失效  睡眠模式再唤醒



触发角设置桌面操作方式

Option + Shift  / option / shift  进行放大缩小



https://github.com/Caldis/Mos/releases/   mac鼠标辅助软件

启动3指拖移

spotlight中command + l 快速定位到词典

better touch bar  双指重按全屏/退出全屏

克隆网站

仿站小工具   httrack(开源,跨端)   SiteSucker   小飞兔整站下载

omi NTFS磁盘专家(不用这种)

mac上用exfat格式windows和mac系统都能使用,在磁盘工具抹掉格式化



### 打开选项进入系统恢复模式

1. 关机成功并等待10秒后，长按开机键，直到出现"**正在载入启动选项**"的文字后松开开机键，进入系统恢复模式
2. 实用工具
3. 启动安全性实用工具
4. 降低安全性



### 打开选项进入安全模式



## 文件夹

超级右键(用Qmenu  MenuHelper   超级右键lite 替代)

[power menu](https://www.macwk.com/soft/power-menu)

jetbrains 激活码  http://vrg123.com/

Removebg   人工智能抠图

腾讯lemon

Qspace 访达增强

FinalShell

istat  menus 网速等各种监控软件

MonitorControl 控制外接显示器亮度

MacZip 免费压缩软件

cheatsheet 按住command查看快捷键

SwitchHosts 

Hyper Dock   docker悬浮框

Plistedit pro

App Cleaner && Uninstaller

utools

Tuxera（NTSF硬盘读取）：https://www.tuxera.com/  用omi ntfs

IINA（播放器）：https://iina.io

Permute（格式转换）：苹果应用商店提供下载

Downie4（视频下载）：https://software.charliemonroe.net/downie/

motrix 下载软件

Alfred 效率

Adobe_Zii破解adobe软件

下载软件FDM https://www.freedownloadmanager.org/zh/ 



### finder 访达使用

```shell
finder建立smart文件夹
#在当前文件夹搜索
访达 -- 偏好设置  -- 高级  --  执行搜索时更改为搜索当前文件夹
option command delete #删除文件不经过废纸篓
```



### 常用设置命令行

```shell
sudo spctl --master-disable   #系统是OS Sierra(10.12_10.13)以上,需要用终端打开 允许任何来源
pwpolicy -clearaccountpolicies  #更改为1位密码
/usr/sbin/softwareupdate --install-rosetta --agree-to-license #安装Rosetta2 (不用单独安装)

#苹果系统有一个GateKeeper保护机制（自 OSX 10.5 加入）。从互联网上下载来的文件，会被自动打上com.apple.quarantine标志，翻译过来就是免疫隔离，系统根据这个附加属性对这个文件作出限制。在安装软件的时候需要移除quarantine属性
sudo xattr -r -d com.apple.quarantine #移除下载镜像的Quarantine属性(加空格 拖动dmg文件)

#APFS mac系统  ntfs windows  exFAT2个系统都支持
chkdsk /f D:   #在cmd输入在windows上修复ntfs文件系统(以D盘为例) 

```



### 执行shell脚本的方式

```shell
#方法一(更改.sh格式默认应用为terminal或iterm2可以双击执行)
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本

#方法二
sh test.sh   #用/bin/sh来执行

#方法三
vscode  Code Runner

#方式四
sh #进入交互式命令行执行  control + d 退出
```

### 执行node脚本方式(python同理)

```shell
#方法一(更改.js格式默认应用为terminal或iterm2可以双击执行)
chmod +x ./test.js  #使脚本具有执行权限
#在第一行添加如下
#!/usr/bin/env node 
./test.js  #执行脚本

#方法二
node test.js   #用/bin/sh来执行

#方法三
vscode  Code Runner

#方式四
node #进入交互式命令行执行  control + c 退出
```



## 各种路径



```shell
/usr/local/bin/code   #code安装路径    
/usr/local/bin/webstorm  #webstorm安装路径


Library #这个文件夹包含了字体、网络插件、还有其他一些App需要的文件，对Mac的所有用户都开放

/etc/hosts  #host文件位置
/opt/homebrew/bin
/opt/homebrew/bin
/Users/zhuyuanzheng/.avn/bin
/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin
/usr/local/bin
/usr/local/bin
/usr/bin:/bin
/usr/sbin
/sbin
/Library/Apple/usr/bin
/opt/homebrew/bin/python3.9/bin

/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin #node安装的全局环境变量
/usr/local/bin #用户安装的环境变量
/usr/bin #系统自带的环境变量
/bin #shell环境变量
/usr/sbin
/sbin
```



```bash
env  #查看所有环境变量
set  #显示所有本地定义的shell变量
export TEST="Hello" #设置环境变量(只在当前shell生效) (在.zshrc中设置)
unset TEST  #清除环境变量
echo $PATH  #显示环境变量PATH (vscode的code环境变量在/usr/local/bin中) webstorm环境变量也在
/Applications/WebStorm.app/Contents/MacOS/webstorm #不用环境变量用绝对路径也行
/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
# 按照优先级进行排序,分别为node全局环境变量/用户创建的环境变量/系统自带的环境变量/shell环境变量/
```

​        

## .DS_store

Mac下面**压缩**的时候总会自动生成 `.DS_store` 文件，用户可以自行选择是否需要生成，执行下面命令之后需要重启Mac生效。

- 禁止 `.DS_store`生成：

  ```
  defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE
  ```

- 恢复 `.DS_store`生成：

  ```
  defaults delete com.apple.desktopservices DSDontWriteNetworkStores
  ```

## 更改帐户名、主机名、计算机名

1. 帐户信息修改

   `System Preferences > Users & Groups > 右单击当前用户 > Advanced Options`

   注意：用了一段时间的电脑不建议修改，可能会导致很多软件要重新安装。

2. 主机名修改

   ```bash
    sudo scutil --set HostName MacBookPro
   ```

3. 计算机名修改

   ```bash
    sudo scutil --set ComputerName MacBookPro
   ```

查看端口  

lsof -i:8080

杀死端口

kill -9 4324 (pid)



## App Store 访问加速

为网络添加DNS

> 208.67.222.222 
>
> 208.67.220.220 
>
> 114.114.114.114

具体设置位置为：`System Preferences > Network > Wi-Fi > Advanced > DNS`

## 常见问题

> 问：CSV文件打开乱码 答：有时候程序导出来的csv文件在mac下用excel打开会乱码，此时可以用Numbers试试。
>
> 问：把正在下载系统的mac放着充电，过了一天风扇很厉害强制关机，然后一直开不了 答：估计是安装系统过程进入了休眠导致系统没有安装完，插入系统U盘一般可以解决。

## 设置默认的编辑器

很多应用调用默认编辑器时会使用`$EDITOR`这个环境变量，因此我们可以设置该变量为我们喜欢的编辑器。

例如设置默认编辑为atom：

```bash
export EDITOR=atom
```

或者，右单击某种扩展名的文件来改变其默认打开程序：

> "Get Info" -> "Open with:" -> (Select Atom) -> "Change All"

## 清dns缓存

```bash
dscacheutil -flushcache sudo discoveryutil udnsflushcaches
```

## 刷新dns

```bash
sudo killall -HUP mDNSResponder
```

使用爱思助手签名ipa文件(选择appID 签名7天)然后应用游戏--导入安装(选择签名后的ipa不是原来的ipa安装)

加盟编号1024

### Magic Trackpad 2代   https://community.folivora.ai/   配合BetterTouchTool

使用教程  https://blog.csdn.net/guang_s/article/details/106940265

## 删除自带ABC

1.  首先关闭sip(System Integrity Protection ) 系统完整性保护https://www.163.com/dy/article/FTQGK3G80544QFPE.html
2.  安装plistEdit Pro 
3.  删除ABC输入法,重启电脑  https://bin.zmide.com/?p=421

## 钥匙串

git输入账号密码之后会自动保存在钥匙串中,双击登录,输入2次密码,始终允许,就可以查看密码,下次用git提交就不用输入密码了

windows上也有密码储存功能,关于git提交不用设置ssh,以后都用https

![image-20210624162259068](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210624162259068.png)

### 命令行修改dns

```bash
networksetup -listallnetworkservices #查看有哪些网络
networksetup -setdnsservers Wi-Fi 114.114.114.114 8.8.8.8  #设置wifi的dns
networksetup -getdnsservers Wi-Fi   #查看dns有没有设置成功
dscacheutil -flushcache   #刷新dns
```

查看mac地址和局域网ip

option + 单击wifi

BSSID为wifi mac地址  

ESSID为wifi名称

<img src="https://image.zhuyuanzheng1.top/image-20220608232942825.png" alt="image-20220608232942825" style="zoom:33%;" />

### iphone投屏

iphone连接Mac--打开quickTime--新建影片录制--切换摄像头和麦克风即可(不用连接,同一局域网也可以)

sudo rm ~/Library/Preferences/com.apple.appstore.plist

Aa123456

### 软链接与硬链接(https://slarker.me/mac-file-link/)

 软链接类似windows的快捷方式,硬链接类似对象的指针,修改任意一个地方,另一个也会跟着改变



```shell
ln -s /Users/zhuyuanzheng/Desktop/top.png /Users/zhuyuanzheng/Downloads/top.png  #创建软链接
rm -rf /Users/zhuyuanzheng/Downloads/top.png  #删除软链接 (加/会把原文件也删除)
ln -snf /Users/zhuyuanzheng/Desktop/top.png /Users/zhuyuanzheng/project/top.png   #修改软链接

ln ~/Dropbox/surge.conf ~/.surge.conf #创建硬链接
```

### QuickLook预览

```shell
#插件路径  /Users/zhuyuanzheng/Library/QuickLook  .qlgenerator格式
BetterZipQL #查看压缩包
ProvisionQL  #查看ipa配置
QLColorCode  #语法高亮
QLStephen  #打开纯文本(没有文件格式)
QuickLookJSON #json
qlvideo  #查看视频

```



### xcode

```shell
xcode-select -p  #查看是否安装了xcode   /Applications/Xcode.app/Contents/Developer
xcode-select --install   #安装command line tools 
```



### homebrew

<img src="https://image.zhuyuanzheng1.top/image-20220427170851078.png" alt="image-20220427170851078" style="zoom:35%;" />

```shell
#/opt/homebrew  homebrew安装地址
brew list #查看安装过的包
brew search python #查询包
brew uninstall python@3.9 #卸载
brew list nvm #查看nvm安装路径
brew install mongod  #搜索包
brew install --cask firefox  #安装cask软件
brew update   #更新homebrew版本
brew cask search qq  #搜索软件
brew cask install cheatsheet google-chrome #一键安装多个软件
brew -v  #查看brew版本
brew update          # 更新brew版本
brew pin formula     # 锁定某个包,更新所有时，不更新
brew unpin formula   # 取消锁定
brew upgrade formula # 更新某个
brew upgrade   #更新所有包
brew config  #查看配置
brew cleanup # 清除所有旧版本
brew cleanup formula # 清除某个软件的旧版本
brew cleanup -n # 查看了可清除的旧版本

#查看homebrew源
git -C "$(brew --repo)" remote get-url origin  #homebrew源
git -C "$(brew --repo homebrew/core)" remote get-url origin  #homebrew/core源
git -C "$(brew --repo homebrew/cask)" remote get-url origin  #homebrew/cask源

#安装java
brew tap AdoptOpenJDK/openjdk
brew cask install homebrew/cask-versions/adoptopenjdk8 
```

### 替换和重置homebrew源

```shell
#替换brew.git:
cd "$(brew --repo)"
git remote set-url origin https://mirrors.ustc.edu.cn/brew.git

#替换homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-core.git

#替换homebrew-cask.git:
cd "$(brew --repo)"/Library/Taps/homebrew/homebrew-cask
git remote set-url origin https://mirrors.ustc.edu.cn/homebrew-cask.git

#替换Bottles源:  在  .zprofile文件中添加
export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles/bottles #ckbrew
eval $(/opt/homebrew/bin/brew shellenv) #ckbrew
或者下面
echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.ustc.edu.cn/homebrew-bottles' >> ~/.zshrc
source ~/.zshrc

#重置brew.git:
cd "$(brew --repo)"
git remote set-url origin https://github.com/Homebrew/brew.git

#重置homebrew-core.git:
cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
git remote set-url origin https://github.com/Homebrew/homebrew-core.git

#重置homebrew-cask.git:
cd "$(brew --repo)"/Library/Taps/homebrew/homebrew-cask
git remote set-url origin https://github.com/Homebrew/homebrew-cask

#重置Bottles源
删掉.zprofile文件中的内容
```

### 删除邮件的插件

删除 /Library/Mail 下的所有的 包括Bundles  重启邮件



### homebrew安装(不能翻墙时使用)

/bin/zsh -c "**$**(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

选择1中科大镜像源



报错 **Checksum mismatch**

删除`Archive:`后面路径下的文件 rm -rf /Users/aici/Library/Caches/Homebrew/portable-ruby--2.6.3.mavericks.bottle.tar.gz 然后再重新使用 brew update 命令 如果还是不行考虑下搭一个全局梯子



报错 brew: command not found

echo "export PATH=/opt/homebrew/bin:$PATH" >> ~/.zshrc



### 查看密码

```shell
#https://github.com/rauchg/wifi-password
brew install wifi-password
wifi-password
```

### 安装git

方法一: 安装xcode IDE里面自带了git

方法二:Homebrew,需要配置源

方法三:Binary installer 直接下载安装pkg,需按住control(不是最新版本)



### 参考链接

[MAC 设置环境变量PATH 和 查看PATH](https://www.jianshu.com/p/acb1f062a925)

[关闭SIP](https://zhuanlan.zhihu.com/p/360711896)

[内核扩展与系统扩展](https://bynss.com/apple/638734.html)

[anki-麦克米伦7000高频词记忆卡](https://zhuanlan.zhihu.com/p/27063304)







