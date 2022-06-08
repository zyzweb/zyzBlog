可以创建还原点,有问题可以还原,不会删除文件,安装的软件可以会没有

系统镜像下载   https://msdn.itellyou.cn/

更新系统可用检测更新或者官网下载更新助手  可以删除更新

COEM版

Windows 10中的Universal Windows Platform   windows通用应用平台  可以在所有win10运行

[X86](https://baike.baidu.com/item/X86)，[ARM](https://baike.baidu.com/item/ARM/7518299)平台

拖住来回移动,最小化其他窗口

可以自定义操作中心

win + i 设置

登录微软账号可以同步系统设置

数字许可证 产品密钥可以激活

https://zhidao.baidu.com/question/2144266267442025028.html   win10 windows defender无法开启病毒和威胁防护

控制面板  组策略  注册表   

mmc控制台

Regedit 注册表

msconfig  系统设置

启动项 任务管理器

ssd不需要磁盘清理 ssd发热较高

系统慢的原因

1.启动项太多  2.服务项太多  3.开启了动画效果 4.硬件驱动落后,硬件老化

win10可以自动更新驱动

显卡驱动一般越新越好,但是也要看兼容性   amd更新比n卡好,因为都是同一架构

备份在移动硬盘

模具就是笔记本电脑的外壳

质保2年 3kg

开启windows最高性能模式

https://mp.weixin.qq.com/s/sFC3Y70_ejcgM69-nyx69A

Legacy就是bios

设置默认程序 方法1: 设置默认程序 按文件类型    方法2: 属性 打开方式设置 找到程序的exe文件

删除服务 sc delete + 服务名

------

磁盘空间分析  软媒清理大师

软件数据在  programDate 或者  AppData/Roaming

软媒设置大师 多系统配置 设置开机启动项

------

C:\ProgramData\Microsoft\Search\Data\Applications\Windows文件夹里有一个Windows.edb  索引文件

磁盘清理   资源管理器—C盘--属性—磁盘清理—清理系统文件—勾选选项—确定

pagefile.sys  虚拟内存

取消虚拟内存

此电脑一属性一高级系统设置---高级一性能一设置一高级一虚拟内存一更改--无分页文件

将系统变量文件移至非系统盘。过程是：此电脑一属性一高级一环境变量。但这两个动作清理系统空间有限。

结束进程/结束进程树 前者只结束当前进程 后者结束和当前进程相关的进程

将 exe文件添加到服务自启动

查看win10版本号  打开cmd  slmgr/dlv

<img src="http://image.zhuyuanzheng1.top/image-20220608234006089.png" alt="image-20220608234006089" style="zoom:50%;" />

机械硬盘 从E盘转D盘 50MB/S(30-70左右)

删除800项目/S

------

**win10安全模式进入方法**

1、打开开始菜单，点击电源选项，注意不要直接点重启。先按住“Shift键”，再点重启。

2、重启后会进入一个蓝色的选项界面，依次选择“疑难解答”-“高级选项”-“启动设置”。

3、在启动设置界面，点“重启”，再使用数字键或功能键，选择相对应的“启用安全模式”选项，即可进入win10安全模式。

桌面假死 进入任务管理器重启资源管理器

------

**windows版本**

\* 家庭版：供家庭用户使用，无法加入Active Directory 和 Azure AD，不允许远程链接；

\* 专业版：供小型企业使用，在家庭版基础上增加了域账号加入、bitlocker、企业商店等功能；

\* 企业版：供中大型企业使用，在专业版基础上增加了 DirectAccess，AppLocker 等高级企业功能；

\* 教育版：供学校使用 （学校职员、管理人员、老师和学生） 其功能几乎和企业版一样，针对学校授权而已；

\* LTSB 版：无 Edge 浏览器、应用商店、小娜，无磁贴程序，可选是否下载和安装补丁，其它版都不能自选补丁，适合办公！（最近，又出了个 LTSC 2019，大致可以看作是 LTSB 的升级版想了解的朋友可以阅读 这篇文章）。

------

windows凭据保存账号密码

------

提取激活码

ADIA64 可以提取oem激活码

微软账号自动同步

------

新硬盘换了之后  wepe进入傲梅分区助手  克隆硬盘 格式化之前的硬盘  不用重装系统和软件

windows删除多余用户文件夹 https://blog.csdn.net/djstavaV/article/details/112261860

------

9BNC7-MKJTK-4RDVY-G37HG-QYFDP win10专业版激活可重装



#### 删除系统管理员账户(administrator)

```cmd
net user administrator /active:no
```



### 参考链接:

[windows删除多余用户及其文件夹](https://blog.csdn.net/djstavaV/article/details/112261860)