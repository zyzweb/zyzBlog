### 使用unc0ver软件进行

1、从https://unc0ver.dev/下载unc0ver.ipa 使用爱思助手利用appleID打包

2、进去之后直接执行,然后重启(这整个过程重复2次)

3、看到有cydia和substitute就越狱成功了

4、需要安装Appsync和afc2补丁,可以直接安装ipa文件,不用证书签名了



### 安装Appsync和afc2补丁

**Appsync作用：**越狱之后如果想要享受海量免费资源，需要安装破解补丁AppSync Unified(关闭签名) 补丁，否则越狱安装软件会失败。

**afc2作用：**安装afc2后，才能访问整个iOS设备的系统文件，获取更高的系统权限。未打afc2补丁的设备，只能访问iOS文件系统的/var/mobile/Media目录。

**Appsync安装**: 添加cydia.angelxwind.net源    插件--Appsync Unified 安装 (无签名可安装IPA)

**afc2安装**:通过unc0ver越狱后，安装的Cydia里的BigBoss源中自带了新版的afc2 补丁。afc2的全名是Apple File Conduit 2



### 相关名词

**DFU（Development Firmware Upgrade**)  开发者模式

Springboard（iPhone主页界面的管理器）

iTunes



### 屏蔽越狱检测插件

**主流有这几个:**   A-Bypass  FLYJB屏蔽越狱(目前用这个 0.2.5.6 XsF1re)    LIberty Lite

**注意:** 安装的时候要安装上插件依赖的插件才能生效



### 添加源

蚂蚁源 https://apt.cydia.pro

破解插件源  repo.hackyouriphone.org

付费插件源   repo.packix.com

小苹果  pt.cydiabc.top

贴吧源 apt.cydiaba.cn





搜索后选择安装时可以不急着确认，选择继续队列，可以添加多个要安装的插件后再按确认一起安装，这样的话避免了频繁的重启Springboard

安装后的插件如果有设置选项，通常会在 [设置] 内的一堆已经安装软件中间，如果找不到已安装的插件设置，有可能是因为没有安装PreferenceLoader这个插件，安装过后应该就可以看到插件的设置了



### 问题

**1.如果cydia打不开**

解决: 直接在执行越狱就行了 

**2.报phone rebel case**

解决:重启之后在试几次

**3.强制重启iphone**
https://support.apple.com/zh-cn/guide/iphone/iph8903c3ee6/ios

先按音量+ 在按音量- 然后一直按住power键



### iphone wifi问题

1. 关闭wifi重新连接
2. 忽略网络重新连接
3. 设置--通用--还原--还原网络设置
4. 重启手机
5. 关闭vpn
6. 抹掉手机所有数据



### 自签可以用altStore或者爱思助手ipa签名或者使用个人开发者账号的超级签(不用信任描述文件,需购买 )

### 使用altStore给uncOver自签 (https://mp.weixin.qq.com/s/oSqQx-rzMRowCqcNlhlWuA)

需连接usb线,处在同一个局域网中,然后运行altStore

1.https://altstore.io/  下载AltServer

2.iphone用数据线连接Mac  安装AltStore

3.打开mail.app  设置-通用-管理插件中启用AltPlugin. mailbundle

4.将unc0ver上传到iCloud,然后在iphone文件app中下载

5.打开AltStore添加unc0ver

6.打开AltServer 并处在同一个局域网中就可以自动续签了

**更新: 在cydia中安装AltDaemon 就可以在altStore中自己续签,不需连接电脑**



```
dpkg -i com.nablac0d3.sslkillswitch2_0.14.deb
```



### ios砸壳

```shell
#前提条件越狱,安装CrackerXI+(蚂蚁源),爱思助手打开ssh信道
#打开CrackerXI+ 打开hook 提取ipa
al  #通过通过ssh登录 输入密码  默认密码 alpine
scp  -P 2222 -r root@127.0.0.1:/var/mobile/Documents/CrackerXI ~/Desktop/  #不用登录


```





### 破解ssl-pinning

android用模拟器 

1.先在cydia安装3个依赖  

  Debian Packager
  Cydia Substrate
  PreferenceLoader

2.下载 ssl-kill-switch2.deb

 https://github.com/nabla-c0d3/ssl-kill-switch2

3.用usb连接电脑,打开爱思助手ssh通道,将文件复制到/tmp目录

scp -P 2222 /Users/zhuyuanzheng/Downloads/com.nablac0d3.sslkillswitch2_0.14.deb root@127.0.0.1:/tmp

4.安装.dep,装完之后要重启SpringBoard面板

dpkg -i com.nablac0d3.sslkillswitch2_0.14.deb

killall -HUP SpringBoard

5.在设置中打开SSL Kill Switch 2   disable Certificate Validation



### 最后推荐一个ios的博客 https://www.ios.im/archives/3.html

### 参考链接:

[威锋越狱板块](https://www.feng.com/topic/10)

[unc0ver苹果越狱常见问题整理](https://www.bilibili.com/read/cv6362750)

[unc0ver设置选项](https://www.feng.com/post/12076149)

[ios开启开发者选项](https://www.51cto.com/article/641245.html)

[ipa砸壳包](https://app.mediatrack.cn/reviews/1495753541556375552/1495753331828588544?inviteid=ryQaQOzLA)



alias python="/opt/homebrew/bin/python3"

alias python="/usr/bin/python"



objection -g com.jtjr99.jiayoubao explore





### 签名工具网站

魔力签官网 https://ios-tool.com/

gbox官网 https://gbox.run 

喵喵签官网 https://amiao.app



免费软件站

https://www.appmiu.com/

付费软件站 体验很好

https://nyxz166.cn/

[抓包大全](https://crifan.github.io/app_capture_package_tool_charles/website/)

[iOS远程控制Android远程打卡](https://www.maomandy.cn/archives/i-o-s-yuan-cheng-kong-zhi-a-n-d-r-o-i-d#%E6%9E%84%E5%BB%BAssh-server%E4%B8%8E%E5%AE%89%E8%A3%85adb)







