(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{701:function(t,v,_){"use strict";_.r(v);var a=_(17),r=Object(a.a)({},(function(){var t=this,v=t.$createElement,_=t._self._c||v;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h3",{attrs:{id:"_5g"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_5g"}},[t._v("#")]),t._v(" 5g")]),t._v(" "),_("p",[t._v("独立5g会使用SA,不开独立5g会使用NSA")]),t._v(" "),_("p",[t._v("判断是否有公网ip,登录路由器查看wan口ip和百度ip对比是否一致")]),t._v(" "),_("p",[t._v("有了公网ip不用做NAT(转发)和端口映射 (家用的公网IP不是固定IP，定期变化)")]),t._v(" "),_("p",[t._v("路由器分为wan口和lan 前者对外,后者对内")]),t._v(" "),_("h3",{attrs:{id:"需要公网ip的情况"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#需要公网ip的情况"}},[t._v("#")]),t._v(" 需要公网ip的情况:")]),t._v(" "),_("p",[t._v("远程桌面、远程SMB等服务时，")]),t._v(" "),_("h3",{attrs:{id:"概念"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念:")]),t._v(" "),_("p",[t._v("DHCP(Dynamic Host Configuration Protocol)动态主机配置协议,主要作用是集中的管理、分配IP地址，使网络环境中的主机动态的获得IP地址、Gateway地址、DNS服务器地址等信息，并能够提升地址的使用率")]),t._v(" "),_("p",[_("strong",[t._v("DDNS")]),t._v("(动态域名解析):Dynamic DNS,将用户的动态IP地址映射到一个固定的域名解析服务,路由器上要有ddns客户端")]),t._v(" "),_("p",[_("strong",[t._v("PPPoE")]),t._v(": 宽带拨号上网(分配的一般是动态ip) 家里光猫是用这种方式")]),t._v(" "),_("p",[_("strong",[t._v("NAT:")]),t._v("   (Network Address Translation)网络地址转换,主要用来解决ipv4不够的问题,也就是内网穿透")]),t._v(" "),_("p",[_("strong",[t._v("调制解调器")]),t._v("，在通信领域指的是进行信号转换、编码解码的设备，很多地方称之为猫")]),t._v(" "),_("p",[t._v("ARP(address resolution protocol)  将ip转换为mac地址")]),t._v(" "),_("p",[t._v("TCP(transfer control protocol) 传输控制协议  有确认号和标志位 "),_("strong",[t._v("http https FTP SSH")])]),t._v(" "),_("p",[t._v("UDP(user Datagram protocol) 用户报文协议  不会建立连接是无连接的传输协议 包括: "),_("strong",[t._v("DNS DHCP")])]),t._v(" "),_("p",[t._v("TLS就是SSL的新版本3.1")]),t._v(" "),_("p",[t._v("QOS (quality of service) 服务质量 就是在宽带不足是,优先保证使用 比如:满速下载时候玩游戏")]),t._v(" "),_("p",[t._v("AP(WirelessAccessPoint)  无线访问接入点")]),t._v(" "),_("p",[t._v("airdrop 蓝牙连接wifi传输   Airdrop是系统级别的服务，本地P2P WiFi 通讯，无需WiFi基站和3G")]),t._v(" "),_("p",[t._v("WOL(Wake-on-LAN) 网络唤醒或远程唤醒")]),t._v(" "),_("p",[t._v("LAN(local area network)  局域网")]),t._v(" "),_("p",[t._v("WAN(Wide Area Network)  广域网")]),t._v(" "),_("p",[t._v("旁路由的目的是在主路由的一旁进行部分功能服务，比如DNS，DHCP，本地代理等。甚至进行辅助接入部分其他网段的网络。但不负责主要网络的流量接入等")]),t._v(" "),_("p",[t._v("ddns需要路由器支持 自带ipv6隧道(可以给内网每一台机器分配公网ipv6)")]),t._v(" "),_("h3",{attrs:{id:"拨号上网的三种方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#拨号上网的三种方式"}},[t._v("#")]),t._v(" 拨号上网的三种方式:")]),t._v(" "),_("p",[t._v("1.静态ip")]),t._v(" "),_("p",[t._v("一般企业或者专线,费用比较贵")]),t._v(" "),_("p",[t._v("2.动态ip")]),t._v(" "),_("p",[t._v("一般通过DHCP来上网")]),t._v(" "),_("p",[t._v("3.pppoe拨号")]),t._v(" "),_("p",[t._v("通过宽带账号密码来上网,也叫ADSL拨号、宽带拨号,现在光猫和路由器可以拨号了,以前不能需要在电脑上拨号上网")]),t._v(" "),_("p",[t._v("SMB 服务器 (Windows网络邻居)")]),t._v(" "),_("p",[t._v("动态路由: BGP")]),t._v(" "),_("p",[t._v("ARP通过广播信息来获取mac地址")]),t._v(" "),_("p",[t._v("Ip = 网络号(标识一个子网) + 主机号")]),t._v(" "),_("p",[t._v("子网掩码用来标识子网,必须跟ip地址一起存在")]),t._v(" "),_("p",[t._v("不在同一网段通过路由协议进行通信")]),t._v(" "),_("p",[t._v("路由协议包含 静态路由  动态路由")]),t._v(" "),_("p",[t._v("cookie保存在客户端(临时可被清除),session存在服务端(永久,设置超时时间,清除sessionID)")]),t._v(" "),_("p",[t._v("花生壳的内网穿透就是域名转发(域名转到内网ip)和端口映射(80端口转发到8097端口)")]),t._v(" "),_("h3",{attrs:{id:"判断是否公网ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#判断是否公网ip"}},[t._v("#")]),t._v(" 判断是否公网ip")]),t._v(" "),_("p",[t._v("百度搜ip出来的ip和路由器后台的ip一致即为公网ip")]),t._v(" "),_("h3",{attrs:{id:"家里路由器地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#家里路由器地址"}},[t._v("#")]),t._v(" 家里路由器地址:")]),t._v(" "),_("p",[t._v("http://192.168.123.1/    http://192.168.1.2:8000/  (路由器)")]),t._v(" "),_("p",[t._v("http://192.168.1.2:8000/  (光猫)")]),t._v(" "),_("h3",{attrs:{id:"内网ip"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#内网ip"}},[t._v("#")]),t._v(" 内网ip:")]),t._v(" "),_("ol",[_("li",[t._v("10.0.0.0 到 10.255.255.255")]),t._v(" "),_("li",[t._v("172.16.0.0 到172.31.255.255")]),t._v(" "),_("li",[t._v("192.168.0.0 到192.168.255.255")])]),t._v(" "),_("p",[t._v("https://www.ip138.com/ 可以查是否是公网ip")]),t._v(" "),_("p",[t._v("公网ip作用:  可以直接访问,减少NAT,降低延时,远程访问,NAS")]),t._v(" "),_("h3",{attrs:{id:"路由器2种模式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#路由器2种模式"}},[t._v("#")]),t._v(" 路由器2种模式:")]),t._v(" "),_("p",[t._v("桥接和路由(一般为默认),光猫是路由,下面连接路由器,设备通过路由上网,路由器就相当于二级路由,如果不是公网ip的话就相当于三级路由了")]),t._v(" "),_("p",[t._v("要实现外网访问路由首先要在本地起个客户端,每隔一段时间去请求本地对应的公网ip然后调用阿里云ddns api进行dns解析设置,")]),t._v(" "),_("p",[t._v("因为运营商封掉了80和443所以要用端口转发本地的80端口")]),t._v(" "),_("h3",{attrs:{id:"天翼网关2-0超级管理员账号"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#天翼网关2-0超级管理员账号"}},[t._v("#")]),t._v(" 天翼网关2.0超级管理员账号:")]),t._v(" "),_("p",[t._v("telecomadmin      nE7jA%5m")]),t._v(" "),_("p",[t._v('用PPPoE,路由器获得ip地址,变成了网关,原来电信的网关变成了"猫"modem')]),t._v(" "),_("h3",{attrs:{id:"mac远程控制windows"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#mac远程控制windows"}},[t._v("#")]),t._v(" mac远程控制windows")]),t._v(" "),_("p",[t._v("前提条件   windows版本是专业版或者企业版  有公网ip")]),t._v(" "),_("p",[t._v("windows需要设置专用网络和使用管理员权限的账户")]),t._v(" "),_("p",[t._v("windows默认远程桌面端口3389")]),t._v(" "),_("h3",{attrs:{id:"参考链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考链接"}},[t._v("#")]),t._v(" 参考链接:")]),t._v(" "),_("p",[_("a",{attrs:{href:"http://test-ipv6.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("测试是否是ipv6"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://ipstack.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("IP地理位置查询"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/43391739",target:"_blank",rel:"noopener noreferrer"}},[t._v("局域网共享 Windows 电脑文件夹"),_("OutboundLink")],1)]),t._v(" "),_("p",[_("a",{attrs:{href:"https://www.right.com.cn/forum/",target:"_blank",rel:"noopener noreferrer"}},[t._v("恩山论坛"),_("OutboundLink")],1)]),t._v(" "),_("p",[t._v("[5G SA和NSA区别")]),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220608224609720.png",alt:"image-20220608224609720"}}),t._v(" "),_("img",{staticStyle:{zoom:"33%"},attrs:{src:"http://image.zhuyuanzheng1.top/image-20220608224636851.png",alt:"image-20220608224636851"}}),t._v(" "),_("p",[_("strong",[t._v("要用微软账户登录才能远程访问")])])])}),[],!1,null,null,null);v.default=r.exports}}]);