## wifi连接

1.你的WiFi防护等级是WPA2或者更低等级，苹果认为WPA3（个人级）才是安全的，如果你的路由器管理没有这个选项，那只能说明你的路由器功能不够保护你的安全；

2.你的路由器防火墙未开启，导致苹果认定这个WiFi会有窃取信息的危险；

3.你未开启私有地址（个人MAC随机重置），MAC是链接WiFi的通行证，一般来说，每一个设备都有一个专用的MAC地址，但这样导致了一个问题——如果这个地址暴露，你后面的所有操作都会被窃听，所以苹果针对这个问题推出了私有地址功能：在每一次重新链接WiFi时都随机生成一个新的地址，这样就可以最大程度保证你的隐私安全



```python
#!/usr/bin/env python
# -*- coding: UTF-8 -*-
import re
import requests

if __name__ == '__main__':
    session = requests.session()

    base_headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.71 Safari/537.36 OPR/35.0.2066.23 (Edition beta)', 'Referer': 'http://blog.bbzhh.com'}
    session.headers = base_headers
    resp = session.post('http://深信服认证主机IP/webAuth/',{'username':'用户名','password':'密码','rememberPwd':'1','pwd':'密码','secret':'true'})
    print unicode(resp.text).encode('utf8')
```





### 清除dns缓存

输入：ipconfig /flushdns 释放DNS缓存

输入：netsh winsock reset 重置Winsock目录
