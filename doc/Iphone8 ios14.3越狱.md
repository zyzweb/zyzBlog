# Iphone8 ios14.3越狱

## 使用unc0ver软件进行

1、从https://unc0ver.dev/下载unc0ver.ipa 使用爱思助手利用appleID打包

2、进去之后直接执行,然后重启(这整个过程重复2次)

3、看到有cydia和substitute就越狱成功了

4、需要安装Appsync和afc2补丁,可以直接安装ipa文件,不用证书签名了

## 安装Appsync和afc2补丁

**Appsync作用：**越狱之后如果想要享受海量免费资源，需要安装破解补丁AppSync Unified 补丁，否则越狱安装软件会失败。

**afc2作用：**安装afc2后，才能访问整个iOS设备的系统文件，获取更高的系统权限。未打afc2补丁的设备，只能访问iOS文件系统的/var/mobile/Media目录。

**Appsync安装**: 添加cydia.angelxwind.net源    插件--Appsync Unified 安装 (无签名可安装IPA)

**afc2安装**:通过unc0ver越狱后，安装的Cydia里的BigBoss源中自带了新版的afc2 补丁。afc2的全名是Apple File Conduit 2

## 相关名词

**DFU（Development Firmware Upgrade**)  开发者模式

Springboard（iPhone主页界面的管理器）

iTunes

## 屏蔽越狱检测插件

**主流有这几个:**   A-Bypass  FLYJB屏蔽越狱(目前用这个 0.2.5.6 XsF1re)    LIberty Lite

**注意:** 安装的时候要安装上插件依赖的插件才能生效

## 添加源

蚂蚁源 https://apt.cydia.love/

破解插件源  repo.hackyouriphone.org

付费插件源   repo.packix.com

小苹果  pt.cydiabc.top

贴吧源 apt.cydiaba.cn





搜索后选择安装时可以不急着确认，选择继续队列，可以添加多个要安装的插件后再按确认一起安装，这样的话避免了频繁的重启Springboard

安装后的插件如果有设置选项，通常会在 [设置] 内的一堆已经安装软件中间，如果找不到已安装的插件设置，有可能是因为没有安装PreferenceLoader这个插件，安装过后应该就可以看到插件的设置了

## 问题

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

### 使用altStore给uncOver自签 (https://mp.weixin.qq.com/s/oSqQx-rzMRowCqcNlhlWuA)

需连接usb线,处在同一个局域网中,然后运行altStore

1.https://altstore.io/  下载AltServer

2.iphone用数据线连接Mac  安装AltStore

3.打开mail.app  设置-通用-管理插件中启用AltPlugin. mailbundle

4.将unc0ver上传到iCloud,然后在iphone文件app中下载

5.打开AltStore添加unc0ver

6.打开AltServer 并处在同一个局域网中就可以自动续签了

**更新: 在cydia中安装AltDaemon 就可以在altStore中自己续签,不需连接电脑**

 



### 最后推荐一个ios的博客 https://www.ios.im/archives/3.html

### 参考链接:

[威锋越狱板块](https://www.feng.com/topic/10)

[unc0ver苹果越狱常见问题整理](https://www.bilibili.com/read/cv6362750)

[unc0ver设置选项](https://www.feng.com/post/12076149)

