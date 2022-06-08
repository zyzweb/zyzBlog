抓包原理:复制网卡数据,不是mitm,不用安装证书

本身不支持https http2数据的解密,需要获取到加密秘钥然后保存在wireshark中

要开启混杂模式,否则可能抓取不到要的数据包



抓包过滤器在抓取数据包前设置

显示过滤器在抓包之后设置(一般这个就行)

视图更改时间显示



### 数据包详情

* Frame:  物理层的数据帧概况
* Ethernet II: 数据链路层以太网帧头部信息
* Internet Protocol Version 4: 互联网层IP包头部信息
* Transmission Control Protocol: 传输层T的数据段头部信息，此处是TCP
* Hypertext Transfer Protocol: 应用层的信息，此处是HTTP协议





### 参考链接:

[fiddler抓包教程](https://www.52pojie.cn/forum.php?mod=viewthread&tid=1171662&highlight=Fiddler)