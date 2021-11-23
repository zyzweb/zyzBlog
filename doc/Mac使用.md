# Mac使用

双指放大缩小失效  睡眠模式再唤醒

sudo spctl --master-disable  // 系统是OS Sierra(10.12_10.13)以上,需要用终端打开 **允许任何来源**

触发角设置桌面操作方式

Option + Shift  / option / shift  进行放大缩小

finder建立smart文件夹

https://github.com/Caldis/Mos/releases/   mac鼠标辅助软件

启动3指拖移

spotlight中command + l 快速定位到词典

better touch bar  双指重按全屏/退出全屏

## 文件夹

超级右键

jetbrains 激活码  http://vrg123.com/

Removebg   人工智能抠图

腾讯lemon

FinalShell

istat  menus 网速等各种监控软件

MacZip 免费压缩软件

cheatsheet 按住command查看快捷键

SwitchHosts 

Hyper Dock   docker悬浮框

Plistedit pro

App Cleaner && Uninstaller

utools

Tuxera（NTSF硬盘读取）：https://www.tuxera.com/

IINA（播放器）：https://iina.io

Permute（格式转换）：苹果应用商店提供下载

Downie4（视频下载）：https://software.charliemonroe.net/downie/

motrix 下载软件

Alfred 效率

Adobe_Zii破解adobe软件

下载软件FDM https://www.freedownloadmanager.org/zh/   



### 执行shell脚本的方式

```shell
#方法一
chmod +x ./test.sh  #使脚本具有执行权限
./test.sh  #执行脚本

#方法二
sh test.sh   #用/bin/sh来执行
```



## 各种路径

Library：这个文件夹包含了字体、网络插件、还有其他一些App需要的文件，对Mac的所有用户都开放

 /etc/hosts   // host文件位置

/bin  //shell环境变量

/usr/bin  //系统自带的环境变量

/usr/local/bin  //用户安装的环境变量

/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin //node安装的全局环境变量

```bash
env  #查看所有环境变量
set  #显示所有本地定义的shell变量
export TEST="Hello" #设置环境变量(只在当前shell生效)
unset TEST  #清除环境变量
echo $PATH  #显示环境变量PATH
/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin
# 按照优先级进行排序,分别为node全局环境变量/用户创建的环境变量/系统自带的环境变量/shell环境变量/
```



## .DS_store

Mac下面压缩的时候总会自动生成 `.DS_store` 文件，用户可以自行选择是否需要生成，执行下面命令之后需要重启Mac生效。

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

![image-20210702181724519](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210702181724519.png)

### iphone投屏

iphone连接Mac--打开quickTime--新建影片录制--切换摄像头和麦克风即可

sudo rm ~/Library/Preferences/com.apple.appstore.plist

Aa123456

### 软链接与硬链接(https://slarker.me/mac-file-link/)

 软链接类似windows的快捷方式,硬链接类似对象的指针,修改一个地方,其他地方也失效

### homebrew

```shell
brew list #查看安装过的包
brew list nvm #查看nvm安装路径
brew install mongod  #搜索包
brew update   #更新homebrew
brew cask search qq  #搜索软件
brew cask install cheatsheet google-chrome #一键安装多个软件

#查看homebrew源
git -C "$(brew --repo)" remote get-url origin  #homebrew源
git -C "$(brew --repo homebrew/core)" remote get-url origin  #homebrew/core源
git -C "$(brew --repo homebrew/cask)" remote get-url origin  #homebrew/cask源
```



参考链接:

[mac/Linux设置和查看环境变量](https://www.jianshu.com/p/900da3657078)

[Homebrew查看并修改源配置](https://allanhao.com/2020/07/26/homebrew-source/)

[iterm2 中设置option箭头快捷键](https://www.jianshu.com/p/6f7dafc55c7e)

[无法安装应用](https://www.macwk.com/article/macos-file-damage?source=macwk-dmg-installer)

[应用签名和应用公证](https://www.macwk.com/article/macos-app-signatures?source=macwk-installer)

[安装command line tools](https://www.macwk.com/article/macos-command-line-tools-cannot-be-installed)

[mac鉴定](https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-17574713754.2.35da1f73kxwc3j&id=520817696604)

机器背面都有序列号，直接官网注册查看就好
