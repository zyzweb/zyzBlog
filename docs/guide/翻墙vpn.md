## 机场推荐

https://github.com/yanue/V2rayU/releases (v2ray)

https://dashboard.blinkload.zone/auth/register?code=PmBT(机场)

https://agentneo.tech/pricing(机场)

魅影极速 https://docs.maying.co/

https://doubibackup.com/ 逗比根据地(翻墙教程)

[https://vpnso.com/wiki/index.php/Chrome%E6%8F%92%E4%BB%B6%E6%95%99%E7%A8%8B](https://vpnso.com/wiki/index.php/Chrome插件教程) sslspeedy

https://1997o.com/wiki/BuyFaq 购买链接

https://1997o.com/main.php

## 常见 vpn 协议:

- [L2F](https://zh.wikipedia.org/wiki/L2F)
- [L2TP](https://zh.wikipedia.org/wiki/第二层隧道协议)(干扰严重)
- [PPTP](https://zh.wikipedia.org/wiki/點對點隧道協議)(基本死了)
- [IPsec](https://zh.wikipedia.org/wiki/IPsec) （如 Cisco IPSec VPN）
- [SSL VPN](https://zh.wikipedia.org/w/index.php?title=SSL_VPN&action=edit&redlink=1)
- [AnyConnect](https://zh.wikipedia.org/wiki/AnyConnect)（Cisco SSL VPN）

Virtual Private Server vps 虚拟专用服务器

Virtual Private Network vpn 虚拟私人网络

vpn 主要目的是用来加密传输 安全第一位

ss/ssr 目的就是为了翻墙 穿透防火墙第一位

2016 年 google 发布 拥塞算法 BBr 可以提高服务端的上传速度 也就是下载速度

bbr plus

ss( shadowsocks 影梭 作者被请喝茶 国外一个人在维护) - ssr(破娃姐姐 ss 升级版加入了**混淆协议**兼容 ss) shadowsocks-R

**ss 和 ssr**它的原理都是一样的，就是 socks5 代理。socks 代理只是简单的传递数据包，而不必关心是何种协议，所以 socks 代理比其他应用层代理要快的多。socks5 代理是把你的网络数据请求通过一条连接你和代理服务器之间的通道，由服务器转发到目的地，这个过程中你是没有通过一条专用通道的，只是数据包的发出，然后被代理服务器收到，整个过程并没有额外的处理。通俗的说，现在你有一个代理服务器在香港，比如你现在想要访问 google，你的电脑发出请求，流量通过 socks5 连接发到你在香港的服务器上，然后再由你在香港的服务器去访问 google，再把访问结果传回你的电脑，这样就实现了翻墙。但是，要注意：ss/ssr 只是代理 socks5 ， 其它方式实现的不进行代理，如：QQ 基于 socks5 通信，就能够进行代理，并且改变 登录地址，而其它软件不是基于 socks5 代理就无法实现代理。

VMess 是 V2Ray 原创的加密通讯协议。V2Ray 原生支持 Socks、HTTP、Shadowsocks、VMess 等协议。在一个进程中可以配置不同的端口使用不同的协议进行通讯；通过不同的传入和传出协议组合，灵活转换通讯格式。

VMess 是一个无状态协议，即客户端和服务器之间不需要握手即可直接传输数据，每一次数据传输对之前和之后的其它数据传输没有影响。 VMess 的客户端发起一次请求，服务器判断该请求是否来自一个合法的客户端。如验证通过，则转发该请求，并把获得的响应发回给客户端。 VMess 使用非对称格式，即客户端发出的请求和服务器 端的响应使用了不同的格式。

相比传统的 VPN (IKE, IPSec, PPTP…)，Shadowsocks 协议具有更好的灵活性和隐蔽性，且搭建相对简单，因此可以拥有相对传统 VPN 更快的速度和更高的稳定性；另对比 V2Ray 这种科学上网的集合体，Shadowsocks 在服务端更加轻量，单一协议完善程度更高；在移动端有更丰富的客户端选择，兼容性和灵活性更优。

机场买的 ss/ssr vps 买了 有 ip 端口 加密方式 利用 ssr/ss 翻墙

搬瓦工 需要先注册账号 不然选项少 最好选 特刷 320G KVM PROMO V3-消杉矶-CN2 (cn2)

vps 作用 翻墙 建网站 网盘

pac(proxy auto config) 白名单不会走代理 智能模式

Ec2 S3 RDS

可以通过 ssr 分享链接

### 名称解释

MITM A man in the middle (MITM) attack 中间人攻击

## 连接方式

**直连模式**

会关闭系统 HTTP 代理，你的所有 HTTP 上网流量都不会通过 SSR 代理，在此模式下你只能使用 Socks5 代理方式连接 SSR 代理

**PAC 模式(proxy auto config) 白名单不会走代理 智能模式**

会修改系统 IE 代理，使用 PAC 文件控制代理。PAC 文件包含了规则列表，可以控制哪些流量走 SSR，哪些不走（例如国内流量直连，国外走代理），做到智能代理。但是实际上此功能已经可以被“代理规则”设置完全代替（除非你一定要用 gfwlist），因此一般不用这一模式。

PAC 文件为 SSR 根目录下的 pac.txt。

**全局模式**

会开启系统 HTTP 代理，你的所有 HTTP 上网流量将会通过 SSR 代理。

注意：仅能代理 HTTP 流量，即浏览网页的流量——例如浏览器浏览网页，或者某些应用程序的应用内网页（比如 QQ 的群文件、群公告这些就是），或者某些比较奇葩的使用 HTTP 方式进行通信的程序（比如 Steam 版的影之诗）。

sslspeedy2 购买地址 https://1937o.com/main.php 插件官网 [https://vpnso.com/wiki/%E9%A6%96%E9%A1%B5](https://vpnso.com/wiki/首页)

## **翻墙方法**

### chrome

#iGG 谷歌访问助手

### macOS

V2RayX V2RayU clashX surge(收费)

### ios

1.surge 是 ios 系统翻墙方式 主要目的是网络调试,翻墙只是次要功能 [https://medium.com/@scomper/surge-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6-a1533c10e80b](https://medium.com/@scomper/surge-配置文件-a1533c10e80b)

2,ShadowRocket（小火箭） 支持 ssr (18rmb)

3.Wingy 免费

4.vpn plus

5.potatso Lite (app store 美国 id)

6.QuantumultX

7.6Quantumult

### android

1.SSR-android

windows

SSR-Win

- 鼠标中键打开服务器详细信息

- 一般情况不用自动更新订阅设置

  chrome 插件 SwitchyOmega

编辑服务器删除服务器---SSR 服务器订阅设置---更新 SSR 服务器订阅(不通过代理)

负载均衡会轮流使用每个节点

负载均衡测速度 双击连接上的数字关闭连接 点击节点名称切换节点

SwitchyOmega 设置两个情景模式 proxy(socks5 127.0.0.1 1080) auto-switch

规则列表网址 https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt

ssr(shadowSocksR) 系统代理模式-直连模式 代理规则-全局

有问题: 管理员权限运行 cmd 命令行，输入 netsh winsock reset，重启电脑后解决

aff (affiliate)推广链接

原生 IP / 本土 IP：是指 VPS 所被分配到的 IP 的注册地址和 VPS 所在的国家 / 地区一致的 IP。

广播 IP：VPS 所被分配的 IP 的归属地，不符合该 VPS 所在的地理位置。即，这是从另一个国家 / 地区广播过来的 IP

中转：将数据从一个服务器重定向到另外一个服务器。

BGP：BGP 在机场的语境下通常是一个 IP 在多个运营商的网络中均为直连，不经过第三运营商，利用 ipt­a­bles 或相关软件通过将去海外 VPS 的流量加一层国内转发。所以，BGP 是中转的一种。BGP 中转服务器到海外流量的转发可以通过公网，内网等途径

ios 软件 Potatso Lite 下载 复制到 safari

itms-services://?action=download-manifest&url=https://raw.githubusercontent.com/xcxnig/ssr-download/master/potatso-lite.plist

翻墙发展进程 vpn--shadowdocks

翻墙方式

软件(vpn)

路由器(硬路由) 软路由性能强大(cpu 性能强的路由器,可以加解密更多的流量)

网关(clash 和 surge)

cn2 中国电信下一代网络 163 骨干网的升级版

qos 服务质量可以动态调节网络传输优先级

cn2 有 qos

单线 cn2 还是双线

## 测速

延迟测试方法 CONNECT

使用 speedtest.net 开启全局代理之后测试

谷歌云速度 最快 20 万 kbps

youtube 最高 7w hkpro8

iphone 8 极限速度 180mb/s **场景模式选择代理**

[部分应用不能抓包](https://www.cnblogs.com/lulianqi/p/11380794.html) 参考下面文章 其他思路 用 surge clash wireshark

https://www.cnblogs.com/lulianqi/ (网络测试)

mac 用[clashX](https://github.com/yichengchen/clashX/releases)

## 翻墙协议的几种方式

1.vpn(基本已经不用)

2.ss(用的少)

2.ssR(谷歌云主要在用)

4.v2Ray(目前比较主流,特点支持协议和算法多,弹性大,相对 ss/ssR 更安全,使用 vmess+tls 加密)

现在更新到 vless 比 ssr 速度要快一点

5.torjan (相当于 v2Ray 的简化版,只支持 websocket+tls,速度比 v2Ray 速度快一些)

torjan-go 速度更高

6.xRay 目前最好

ios i2Ray (3.99 美元) Shadowrocket(2.99 美元)(性价比高)

bbr 加快了服务端上传速度,bbrPlus 是升级版效果更好

中转机场比直连好，提高了抗封锁能力和提高了从国内到国外这一段速度

墙负责审查，qos 负责限速

BGP 和 LEPL 都是中转机场,相对应直连机场效果更好

BGP 保证了各个不同宽带服务商连接的速度

BGP 保证了各个不同宽带服务商连接的速度，但是还是要过墙，IPLC(专线)不会过墙，专线

BGP 和 IPLC 比较稳定 不会经常要切换节点

软路由是 linux 系统可以 100%对科学上网加解密 客户端和硬路由都达不到,软路由的速度还是最快

## Shadowrocket 更新方法(更新其他非自己 appID 购买的 app 也是同理)

储存空间--卸载 app,不删除数据,然后找一个美区已购买账号,purchase 中找到然后下载最新版

shadowsocksX-NG-R8--服务器设置--删除服务器选项

clashX 支持 V2ray/trojan 协议

clashX 设置全局代理,取消系统代理,然后在 Switch Omega 中切换

clashX 设置规则,设置系统代理,配置文件进行如下设置

PROCESS-NAME,Google Chrome Helper,🔰 国外流量

### Quantumult X

http=172.16.5.68:8899, fast-open=false, udp-relay=false, tag=http-whistle

http=172.16.5.68:8899, username=name, password=pwd, fast-open=false, udp-relay=false, tag=http-whistle

```shell
QuantumultX 支持5/6位的Cron表达式，如：
⏰ 五位 → * * * * * → 分 时 日 月 年
⏰ 六位 → * * * * * * → 秒 分 时 日 月 年
```

导入配置之后要解除关联不然会覆盖本地更改

自动测速

- z 长按要修改的策略组-点击编辑，点击类型，修改为最后一个 url-latency-benchmark

虚线圆环 表示有二级菜单 长按可进入

相同规则下，本地规则将覆盖远程规则，优先生效

UI 中的添加 只支持输入简单 ss 信息

**引用**支持 ss，ssr 订阅，以及 Quanx 格式的 vmess / https / trojan 订阅

**使用解析器后则支持其它任何格式订阅**

[重写的几种用法](https://github.com/crossutility/Quantumult-X/blob/master/rewrite.md)

boxjs 是一个多会话管理器,可以同时用多个账号签到

## 规则

AutoProxy https://github.com/gfwlist/gfwlist

DNSMasq https://github.com/felixonmars/dnsmasq-china-list

PAC https://github.com/breakwa11/gfw_whitelist

ACL

[lhie1 大佬规则](https://raw.githubusercontent.com/lhie1/Rules/master/Shadowrocket/Complete.conf)

机场使用 cf(cloud flare) 百度 cdn 验证没办法签到

IP-CIDR 列表 老 CN-ip-cidr.txt

GeoIP2 数据库 新 Country.mmdb (Surge, Shadowrocket,QuantumultX, Clash)

TUN 模式 Quantumult X/Surge/Clash 均可开启，相当于开启一个虚拟网卡

网易云要解锁需要专门的节点的，不是搭了策略就行

透明代理:不让客户端感觉到自己被代理了,比如路由器翻墙,手机连接路由器上网

**clahs,dns 配置**

redir-host: Clash 先将域名进行解析，再将具体的 IP 地址响应给客户端，并且记录其对应关系。

fake-ip: 不进行 DNS 解析，而是直接生成一个“假 IP”并响应给客户端，再记录对应关系。

这可以有如下两个好处：

- 如果最后判定为代理，则有可能节省一次本地的 DNS 请求
- 不需要担心 DNS 污染（因为配置文件中的 DNS 仅用作规则判定）

#### quanx 导入免流骚节点

1. 复制订阅定制(不用转换)
2. quanx 资源路径 填入 打开资源解析器 (关闭 vpn 开关)
3.

### switchyOmega

_AutoProxy_ _规则列表网址：_ https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt

gfwlist 如果不行可以找镜像站

**如果有其他代理,将 switchyOmega 改为系统代理,然后可以在外部情景模式中导入其他代理的设置**

开启开解切换,修改快捷键 command + e

设置颜色 红黄蓝黑

<img src="http://image.zhuyuanzheng.top/image-20220608232719056.png" alt="image-20220608232719056" style="zoom:33%;" />

设置 AutoProxy 然后把不在里面的加入进来,随时可以增删

PAC proxy auto config

速蛙云线路检测

## 参考链接:

[gfwlist](https://github.com/gfwlist/gfwlist)

[订阅转换器-V2ray,Clash,SSR,SS 等订阅链接在线转换](https://subconverter.speedupvpn.com/)

[订阅转换](<[https://acl4ssr.netlify.app/](https://www.youtube.com/redirect?event=video_description&redir_token=QUFFLUhqbnh2bFI1QXVsZlVhY2hjaEkwUTVuVmdHeEtGUXxBQ3Jtc0ttZzVxZkFRRWtFak41dEJOWkQySTlxMFV2OHVnSlV1OVlMVWZnbnBkcGkxeDNfTHpjRlZyei0waXRlNS1UQ1duYl9ZRnF4dU9qS0hUZHVmVGUyMXh5NjBHSUtrWHctamM4ZndCZ3hmMHR4eTloZXRyRQ&q=https%3A%2F%2Facl4ssr.netlify.app%2F)>)

[iphone testflight 翻墙](https://github.com/bannedbook/fanqiang/wiki/iphone%E7%BF%BB%E5%A2%99)

[订阅转换 vmess](https://dove.589669.xyz/web)

[各大影视软件 VIP 视频解析](https://www.appmiu.com/fortune/12259/)

[多开微信恢复聊天记录](https://www.appmiu.com/apple/12953/)

[cron 表达式指南](https://www.kejiwanjia.com/jiaocheng/zheteng/notes/1958.html)

[机场配置指南-Surgio](https://surgio.js.org/guide/custom-provider.html#shadowsocks-json-subscribe)
