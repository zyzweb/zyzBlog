# Mac使用

双指放大缩小失效  睡眠模式再唤醒

sudo spctl --master-disable  // 系统是OS Sierra(10.12_10.13)以上,需要用终端打开 允许任何来源

触发角设置桌面操作方式

Option + Shift  / option / shift  进行放大缩小

finder建立smart文件夹

https://github.com/Caldis/Mos/releases/   mac鼠标辅助软件

启动3指拖移

## 文件夹

超级右键

jetbrains 激活码  http://vrg123.com/

Removebg   人工智能抠图

腾讯lemon

MacZip 免费压缩软件

cheatsheet 按住command查看快捷键

SwitchHosts 

Plistedit pro

utools

Tuxera（NTSF硬盘读取）：https://www.tuxera.com/

IINA（播放器）：https://iina.io

Permute（格式转换）：苹果应用商店提供下载

Downie4（视频下载）：https://software.charliemonroe.net/downie/

motrix 下载软件

Alfred 效率

Adobe_Zii破解adobe软件

下载软件FDM https://www.freedownloadmanager.org/zh/   

## 各种路径

Library：这个文件夹包含了字体、网络插件、还有其他一些App需要的文件，对Mac的所有用户都开放

 /etc/hosts   // host文件位置

/bin  //shell环境变量

/usr/bin  //系统自带的环境变量

/usr/local/bin  //用户安装的环境变量

/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin //node安装的全局环境变量

```bash
$ echo $PATH
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
sudo discoveryutil mdnsflushcache
sudo discoveryutil udnsflushcaches
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

