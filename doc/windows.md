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

![img](data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAc0AAAHpCAIAAABvGvBqAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAFg0SURBVHhe7Z1pduNIsqXrT5/uLcVbkLajWo1WkTuIxby2eXBzkCCDiNRwv1OVdDe3CSBwhSAh6D//+zS///s///mf//622R0+3s77/g0eah4AAI75z3/+888//9ikQEZaosFeZ0kV//P2YZMhSjZ9SKqu1VnuVyld3+Sh5hsc2aoMAwDgR/HPP//8n//7/+i/Nheq8eB6tskiC8l/yvwZzbxQZ1lkXeeo1VdJHm/1LtewHzne4pkYAMCn5Z8utcv0QGdZB0IXScje3uj/pgu09rhkXqezT7VzAt4F0FkAwEn+cW2NgS0c6mwVApbZj5zHKE0iov+1f7sX0eMrzSQXqj2L+DqvLlYuZdhKofg3skrkePsQI83X7Ulnsea0tK1kpNEMJbB4sYtBxpbcPAAAX59/RGEXkSWOdDbVg1SBX2muimPzqi8iHGkMP7PZxASrDG1m6SPZ/xCegge5dgAniQ6UXoXhLOmTObvd+6keHfVfUMdeNFJtMh0lBwB8Yf55VGdZCkzkVDpsQOphUkKG1JeQF/evNiKmiz2y+CvJ7H9/y38iFccQLWzCCarire5eQMlZt+d0sQfDHoajTdv0f5QcAPBV+efxzw0IUgf5vMD1YZ3T0LSiCow7LKIT08Ue/jYoCvuRpQSud09tKbv0tFYhODylLWfdntPFHgx7GA43TWE/7/8oOQDgS/JP19ZlekNnWTfe3kT3tvPUiiowZNUxGUNK2NVd2N5y+oQj/8dS6thWfv/3vyXPKk9kS1Okq9U//sumHpszHsVCmXT/ZNjTcLBpm/6PkgMAvh7/jAtYohpv6azoRpWDPk+tCEUhyOpjcRfkW7KmQEFJzwl9zuNdQHEPJM7I9bSqjed9tdjfNgUsQXah9DxEM+w3bfYfyXUKAPi60Kn8TxdZhYy0RIObOvsjGLoJAAAvBToLnQUAXAt0FjoLALgW6CwAAFwLdBYAAK4FOgsAANcCnQUAgGuBzgIAwLVAZwEA4FqgswAAcC3QWQAAuBboLAAAXAt0FgAArgU6CwAA1wKdBQCAa4HOAgDAtUBnAQDgWqCzAABwLdBZAAC4FugsAABcC3QWAACuBToLAADXAp0FAIBrgc4CAMC1QGcBAOBaoLMAAHAt0FkAALgW6CwAAFwLdBYAAK4FOgsAANcCnQUAgGuBzgIAwLVAZwEA4FqgswAAcC3QWQAAuBboLAAAXAt0FgAArgU6CwAA1wKdBQCAa4HOAgDAtUBnAQDgWk7q7O/3X28fm/Eng1r79f7bJgAA8Ck4qbMfbyGtH2//2clsN3+8db3baTPZ/kOYo3qYraLrlF55+1h9otImmPC60pJWqUji3iwx/QAA4Enu62woHPP2VmeMSZTLrAnsgc42Jdx6LAoXM00o0+aRE+rg169f7WcAm6JI1dmyTb0Lp9W4Aycrzp57k/jGElHylP4Y8p8WcaQ+u+GgxD68Ox+UAAD8KaeuZ0M16VSspx+d5bGwPVeJX+8fIa7kU/QyEoRYEG8fUYwplSPOgr2UJKJJSpR5NvWzDBFbaii1iQ0tVSBBVd3ZoONlV91cmnmS3DJnbGvi/+zIWpMIv+E8iwIAnueEzv5+f6OTeSN/YeIzVYbx8cIqZOThJ6740FwEOM7mPNmLa0lDZ74LXnUYhB/T3HLl1/v78uNgycfNyE8FmytsXW1Mtl6HXK9631gyqodDtsUzLXMtOF7arAzTjcQAgCe4r7N01qkYMXb+NRnl05Lgi0UWZGGns4LlqbC2RBGasK/KTcmiQ1kKX0Mqu6kJVRHn3hKNpWOftF55zj8C3m/peYGLmyMNI1cxMzeWjI2VNuDYwkPqUTbQU3OOMh20hAfOsygA4I84+T0Yn315PnZF+Hj3jwOSZU6nrojd6iapRDlJhlnVZEpunJ2t4a2R7k2CbUsaUJkWRXrQNiTbu6XoPZnIWJJTkkO+7kXDSFbHxI0lo+RRhqFZeJw/97pa8tqZCkJ33vsAAP6AB3RWVEpOSJKmvBwURKxcyTqioH5tKOJQ0Xyk1LRSTu9RIXLb5wbmniK5L55XaxpQwygi8gicwiZpLsYDyLeEhTMF1g24sWRUD2adrxbpfzMWhoGYCY3ifOgDAHia+zpLJ15XLFWJfiKn3inrnE5f927SmCmKh5zsRMlvq/JiY4ruPspRXxql/3UfTuHOaqN1zlpQ95pzhWN8OccUNHbB0ZJS8xDLlDh2sIzx8TgvjRJL+NZ58QEAvIIHPzfg87Cc3HFOPqCzejKbhCXuUSqUAjTkkTippyVpZdi2GiyBjeRFk4kzXWtPQSIyMJGAvW/ZFJ4JZiobcWOJ6Xl4dam2tbSMw1BLjPARvfEBAPw5D+ks36FVlKAoz02dlfOZ5qEzshZnuXrSoihgK6Be+lmq3h6WadRPJmVRgjJ3ERkZcRWCCzXnXtS6sTEAAPwRp3UWAADAU0BnAQDgWqCzAABwLdBZAAC4FugsAABcC3QWAACuBToLAADXAp0FAIBrgc4CAMC1QGcBAOBaoLMAAHAt0FkAALgW6CwAAFwLdBYAAK4FOgsAANcCnQUAgGuBzgIAwLVAZwEA4FqgswAAcC3QWQAAuBboLAAAXAt0FgAAruURna1/jHsif8ub11/yN7n574XfKFa53dbnR3bc+Mvm93lgF92Aqj9U2vf2tvprWgLgu3FaZ1UNFuScshU/v86cuH6yKpwgQvhUfUxzerI/w6vbNgmW/F4ZDg3ON0RhL+v+GWizntLZ5PF3DIAfximdFQlZTqXl/Px407OvqQ2zFZF2alIo4W735GzyeMQRqXll6zJ9Lu+oqxRzVnpe1/1zlC09xey3vZkAgMl9nfXTKLWDR3lm8XqlnHIuPezST85ybvKJ/l4FTkds9mpvH1KSyCxu+c/bW575pZcSLEuZOazpvXP24ZF5xTdWIEeeyGZSf1Zh156hoTG3TEuHy7R0MzLbqicsW+6YX0kShFdsUFhyb2vgUrhkO9sSAN+fx74H03NknJdyUrXzxi9vD+GzUPLQgF71vzVPnLFSU4c1qEmHjKsxxiVNXDVbkVgy6jzHUVNYYwqWVSA3GXNwTeQOZeyuLYENl2prcZ/vM9Pq2G9JlF2Tbtqo+TnrElizu7GG5JiDN0EAfHdO6iyfFhvsTMnVX+8fcm6yzupIHDZQDK/SiyTRE9SMTJzGMSB8vdp4Mo0+49b4VYRf1d+T8FK9rKo/GyjaSBtDMaVGQ9MZ5uTVmW17MtASLZ6g5aXDZRo59pmrlSKXLMwmeNtGc6GJpgorR/i6G3vWnbW2BMA3577O0slBJ3f5BNWhM0XOGjnP3lSk/OzpirZFFlOL5RwsJ2IMNyenVHQbO1jNYoyZhpR+Fvknv1CctEcuT25QhlKjYb01aqP79rJA9W2QRwg3kVPPEbmEndV749ilWg/etdEt5K8ZIrCuu7Fn3Vm9JQB+AGc/N6giZNCZYmcPveh6nEjufutsImdWcFtmz1/lhC6p5slJrx7IQx0X4+IQPyVo7D8RKPGHpmUHttRCZcxt7uwrnqbCbbg/j92hjCmjjarDxzsPlg6PGt5nrq1aBC+qjUc6HFtUs2kbxSJxS/7M+kRLAPwEzussi+JKnqGLDvdpPesKkrOeeD2hTfYnp3gL9Xuw7LKUq9VbJ+Ft+UulWlT8NCjNzUHI3hIuV9w4kZKeZItJ2aioUudz6sk3mctq9uZ+9OPGOqtuxmijWpbvwcoqz0o2L3WvJQC+Py+4nhVy3c6vXPo6tC3akBt5zxMAAIKzOvtD4EuzAwGlnx/xowYyCwA4D3QWAACuBToLAADXAp0FAIBrgc4CAMC1QGcBAOBaTuls/Xrd720qtnpbpCA+w/oQ/MV/fL1/m3ojwLfmgX0Cfjh/dvad4i+U+D48orO0Yyd64vd9blpMYQey0KWR80Y0i8ljb19P9md49bqplvxGGY4KHmv+Lo/vjwNKkyd318tKE+veK/ODvUfmpU+Kqe1ECkmwblM1kmey26LanTiz0920OlHSL41mI8OSJTZkNqaW0iOno2kpZRSfDVHiOv5Cie/DfZ2NY0EPls31rDEPBWY5xBQ7eBTK6L8XK7N9yDGPRxxBbVmmcgxl+lyu8P4pZp6+8vBru+p5ntlJLyqt9AZoppmP997c2xGkREb2rL+yzfBiHFXheURNFXnupd1lJVsaf7+/8fDGhswUWqBYa0e7XAdEiev4CyW+Dw99bkB7dmWzp/nI6AfD3mKh/HZ93efPlg1xyKlsAv1H2HSuJsngz6iNNe1p2R5JaClO7xOFlpqBM7fAXu7tYyldkpe26X0TE3n4sjpvqB1YPU3SA8KN1lrHGWV0z/e6gd6cWWrpLebQ/e6lnVllfWy/5Gl+FKluM4Vair3nnLkcCjHEQUq4zUPSx1MeuZ04btVNVsBdzuqs7N53u5bt17S6/32X8xodnMWyJQ4fzaH/rcdRvIuSXoc1qB08Mq7GGJc0cSFiRWLJqPMcR01hjZkGwm30Wg9oGVptxoZcYJsjmo3VKFYyxzoPPDWv+9iRmGKNCt5IpjdKaXfJIS9agtJNJp3kWhRaKzJuKyWNxTvyqSc3ZMu6kgloHiw5FQ54owOkrd1Na3kjqrhWSoBBceo3G9Ma+boknbkEztMrS2Y1bdqK7Fu3nbEU9iG5LWnBIfd1lva073Z5AzrxdvDA3xXVYfbeHRSKvVsWaW+av4VhqAPC16uNJ9Pos9aS9uVJeKl2qKs+1s1bt4BiSo1M3/BGWkM0oVRaM6H1NUW6iLUuR8KamRykx001mxQ0ufp5Zk9gixnnDr6SkDUXD4YTbyo63Xr7Ki0um9C2sGyjeXI2f2W/TBCeR5DD8s914m5ahe26S91jYQ0oGzIbS4s59aQzFzPTZAkdx7J2y8hydYvcG2OGKbxe3cAdHvzcwN8IfXW7DnK/p2LdeC/kHfzyz5/trQgREkkYtW7cq4mcLDasy7IOa2Zy4JCeWavZZCHXJE3NxdDcdkim7MmFYtoPN2jlUnDjrj40oLVlE2JJiTzhSRb9CEbsmWAJnJgDt5OOd9MmFr+vMwPITzufAdUibtxT7qJd8V2aLKFjWaZX84uk1S1yb4y9C6W6gTu8UGd5oFTFOobf9rx84jf0Sz5/lte9rBZ2lxIZ/cSAyKe7Fi8dZpqynNVrG+SwZpbo7ImRhwQLNWF3XHdI8eSh+91ouw53UN/tTRZL6ZTDS6q+Cerssexq6+kp8dPMZZdUnXQoJe6l3exScXQrzZ77HiwtPGv7a+YSStf+6OJyhFjO6LK0Wd0i987IIV5ZKzQ3cIeXfA+m9uOdXt+kgoTVd7TmiHexvp3+rpu3UL/zyQZLuVq9dRLelr9UqkXFT4OaOYlERCnM3vIFF1O3oZl4HoueKZ8P6/48ifK1D1q3mpFZPiEPByObLCtk7A03j1I6k9siz4vbOqwdFqTCspCNjbctsYXim67kGZNSN821Qi0RkEOYpS7P7qYtecsmpdHcJGHAxsiWvoS4kyWKMuKR2WtPjSwSmSMqcnq5/dOHI/fWOCo0N3CH+zorb46/Af1Npl1Pe9qs/iaufKH3QrfnmHPX6cG/diDyKXGmU/a7psN7exKAH8Wp69mfww3lIdV8SGX/us7WH3T366r3Rf1BZgGoQGfBT6P+QCLwEwFcDnQWAACuBToLAADXAp0FAIBrua+z5auh+vVG+e6dP++aH3LZp2D49AsA8MM5dT1L+iq33DmknXYPtsMe/JtW5sD8HYElNX/wLoDXQz18rZ8mn7nh7Rv65+8yZfhrxyQAK6c/N4hrWRnQf0RM42bsRvgO4gzX4964fQ5lrU3S22dghLJPKxlF3RpZWky3HJynsVHJvlbnjI/Cnrm8NnivvcmmYYMrnc1yyJLEt/Pc/iTvuSe6seef2dYdJBYfp3sE3Miw6xCAh7mvs3aItuOTn4dHRyDZVHKHR6GcIHKK6JEbA0ICDw9o+y2/9fQy+hnYOV4rbegrtyCjjInR7QaIyLbl9qpy00f3q29JtOXcbW+yLSdllt+KfZiRJHZsNJ6WHBXG9jFhvJHfR5lgN2K3nn9mmBYA/owz17N0tImcxrH39sYfJMRvgslxXA/H8B2E44yQOb/20yBxH4Kile0v3aqB3A8ybVbcVJeWFlsDDXH06kvmkjD6W+Vw008ii/EU1Fuu0d5hIee44chhZCpxu5tZKElqPgr2JGoqi5F4+4ZWI9GaXLPRS7jqWqSRHOEfrBl2FgD+iEc+N7CjVc4x/nz240hOyffg6IwjeD3c6+mxJ455HtRTUcYl3oZcwZ9D3VK30pysOtCijWsZgQ3bzeImfIXHxanVcrKGsPUxzDUi2He7Udv2lkIB2Q8abkn6UuMos1CS0DD80iz1cwt4wb14ScZbo1LyM0u2bC1TpC28a8Ylw9YCwB9wWmcZOnDLSUjEYahXtnxgLyznKR2/caq1JZrfOqb5uHf/Fmpxa2X7BNlS1uRsX5oi2JrOAn/zly3VBrKYru8aEkatjAxz81kyR2JPKuuWvhbiSavUCy1pMy/T8tRu2kJwO7NQktAwFmycJvfbtnPcY82/ySbe2lK8gz1ecdvMsMsJwJ9wRmdJROvdBgQfhvXYpbEdoO2oXOfhWAZKHtqT5WDvU+ti8WFqhRxvHJWlodrSYYzRQq0hZnRqK9V+IzcvdfrDYn28ptgXqtQsteEe0RaE+5mFsjjzkSWzSiM9l1XdGo2ef8lmYyYXe7yh7jPDzZwAPMMJnaXjTg41+87IPpSlAzCOXffwV2edl8O2Hr/k1q/GKrS4nCLsbiaJlHEx2jdDbLGkVKwElErxCNEarkQMLfWVAe+KTZ5eK2c8qv7pc0htxv3NRpbe3r5Q46BhouRvbrJPT2QWapIc+zbEtkRtfzWTjrdGhefR18gW5FLzsvsRw31muJETgKe4r7N0rPFBbS/6ysdf/uD3JTksF/x8MOgQVgsNkjyUOUM/sJujrWWd8g1JMXrNiK2Wg/TucmwQerRCHtyHEqVGLU8k/zgwt9XngOrmaSxFTAXx2hVqkMOuYYJ3YjGs+/RuZqEniRxhypZ9o0qd7Rt643uwmS0MzSfi5/LsZ1oA+BPu66xcv9KBR4elHvl8W00ekPUPwdB6HtvEOgcAgB/IQ9+DAQAAeBjoLAAAXAt0FgAArgU6CwAA1wKdBQCAa4HOAgDAtTyss3qH10Le6riS9x+KjzwSpbFN9mPvWqS9+9e2/W/WeoIr2qOc20PutfydKuArcUpn9cDZI4dTvVHWfl+sjC1cPepyxh0LNdFON0rmiWyZuXlG1uSzXDS+Ek6RPMMkaNkt5ubWpSU23+xSIK9ZzSxL9a1ly0Fpq+X9GunIC8/vHMZTb4rfx9oTZrUTjOqUpcWvGziqrBlyEyNwdrZWAeC0zt45cujYKidXOuc4PA51th7xN6Bj3xPlSULhtzVh6X9aBpTeXGJ040mvpSt95Y6KizSY5+Ihm6pGJozRuSfPHpZeK4glS9x6Fu1sc9feflecZdZ4iE31kmezgWuVDIwVMvVGdj2ueQB4QmfpWPNjs6mo/FCfkEddPPrcQLPSITpYj1nyiaPfG2G4Cs/5dYlZPIlpIbK6Nh1ZhrfXcqqz0UwyiWfITqJy/ILpJmN0sVbfWYJRetZy1prHWaunt3Xc3uKttEqF2d7alrDJE6b9Vm2Wa6ejSl2kWM9xa8to7aAJ8NM5rbPx27V0cOnBVtQ3bEQV5RjXo3ZHSfD7t0ZzyCYmjvVbB31nHvx7S0tHhtJ7y7xuTOtE2m6nmWXKhJ2anruQMaccz5nl1WYw1n6StfS2lsElW5LjtJmwZuSErT1eW+Y+LsNCSZbtcV99V2zysPfSKyer1WvXCnt40KhSioQjV1FsKTOyiw7XKgA8cj0bB56J51ZPD8ZygP769SYPSlgQD0puRzx5LPLSoQTqGQPjxPE9XdyyCyabNhKPMXVrq+snYSfOO/KPfjULL1nm5sCYk7hYzTSZoRek5ZgdZbYUxcKElelJhWpaMmtZmdrOIQdbGZnYYC4aY5DTknbXnrhYajVt8rRN6Xh1YvXiJau3rRLOdSxkJhoJeZDc6AX8WM7oLB1mfDj60abTKqdxtE3YiQPlMKR/v/p51MI1J/1DcY/HCFRK5zFQvLubLDGEWejlMDoz02iN39oEycyrndvx3kdt1BNlg756WJvZlOYLtlmL2WW6md2xvuxFqc0Laribrzt4ezWbjDd53HdLJFi9aqKbVWb66i6Qu7lMZwDO6KxrIh1L5Vgsx1keZERVUBnLIz89lg/fjpg3sivpbxzh9VCXrDFbmI8cnRbOFgni+yUhWiDnpReCM5TCZx5ou1A8eajjktbiMtwD6NUs96ibULP4uJZLtsaFyDzbm7siBkTfx0Zx4GFG9V2xyUMr0auYdm9E9qiUzAdV1OJxm8PGKanXKgCc0Vk6qMZxQzY/QIl+ZA2dlVGP6F6zxOpdoGJx9CcZTqHjOA/XSDotElhtw6UV9Bpk7NU2mZXhGZTK5bupG/XVJefMQW6hlD6sNePZdd0IZzQ329s5rft4cHJXbPIM06xOlraVywYeV6kZumUWGVUAOKOzInl5FK+0TwMYu4ZdDlEyHKXhzxQigXvgUAUAfBdOfQ8GAADgaaCzAABwLdBZAAC4FugsAABcC3QWAACuBToLAADXck5nj36NwInbCAfdDwAAfh5P6awIa1XQsa4MPe430HpMJGtyfecOWvdNt2nJcsXGbtlVNnT0E+FMoU3ptRAzLZWnC1WeS3KyEBv/rP/OZuevIfWAMaf7bxlRWvWUBmWeFnEcR8uN/ufSc5YJ+5QNGyFz80/sRqFnHlsLLuS+zsabSG+SP9GoIO+Sv62TcsQw9ObG2xpvOw3ULQaEHAZLdMCLEaIJbz9vVJGc7amj9x7heqrQtMxC09KZhc5YFp5LcqoQmx7rnwZqyKWFsfP3dXUQ3HvLbrVKIYsxLVHSOe5/9vmcZYU9luNz7SGTxOjkbuyZs4WjZsAreex6lt4uf6MacT07Bx1KkHZ/h+k1Doua3o8Xfm3ZfIFZD5Oo0EoVanBy33pYKFgsM+W+CDMLnbHoOHguyQOF6kLnMISgtTafWPQuCb3uK97qhtgtzkbSMteCsVRzH+2xMxYdr1S/gIwWEDtk+pnlsFBZyHwlI7iOl+nsmz3OcGE5nJb3V8fxRq/vePWuVDuNNYgHtSAnG49wJSKgsjWeLLSzMDPntDi0shQ6Y9FxcCbkOYuO+6SxDeHB3C0TD9gloXfRWNNEmS2b1fXoapbd0cI5NoU3fT5n0fFKX+PZ0oPvkmpjPPCwUJ1QEnNi65oKvJqzOivvLB+J28PjketZySSU91yHMTDyYOgsR1Lz8cNGKtlKy8MLfSN469wiYYIlicA6ZtizGVYLT3uhauHxrUJnLC9JcsaiY578yY7qIUbZ+beSLMfC8VtmsLHt/GFoFslh4b2Srq2GmOv4OQu/nOicYaP4ZJbud2Y3zggpHU/OBddx9vNZfSfonRqHAMFv4CEtoL3vDr3j6hQDZevM1ANmPSsiS01WxzV4na2cKlRolpn6uNgsdMai4+C5JA8UqgudwxCBLNuwJd/JJMddFFanGdQttcXR7mKYfT5n0fFK7yvQHmgxA9U0Ig4L7TO3lOAiHvrc4OgtsTdcvfzd58E4mrYZakQcB3xQbI4KJY8YCpGE/oWBLIklfcJJKHYez3YqZwpNi1ILKdMSzEJnLAvPJTlfKO2DGXK0WwKyL+aZZPfs4FOykKmEZUocO1jtG/2n8/EeO2PZkm7saCM2SkiGuolel2RHhWrm4GYv4FU8orP0Po23iaG3SuzlQ4NxIWvMg4LweIsz0o+PjzWKbUJUieCsuzH1o60V3B9vZwpt67RCyrQUZqEzloXnkpwtxNZmqMyQ/W4Jdjv/fpJd1IalVYpaXLcWxeN2pW04+3zOsqF3PppKi/Wfc+ZoNzIt80wMLuS+zuobUv4Q44rLa7y55mbvJN5HAMDP5tz1LAAAgGeBzgIAwLVAZwEA4FqgswAAcC3QWQAAuBboLAAAXMujOvtRfpWgEPd0Nbb3gVGGnT1uvvX7wRwx+61/uzpmj6RlfFDrYQ62GgAATnBfZ/cSmogAkdMQolDO2xlCR5W3j1RcIicpn25rjrr+3jXaqX7OqsG3NPlKnaXcjtY4aCy336mOkgU/CwD4lJy/no3fAWTWk57mN3U2F1kQXE/oVZ2aYh5PCNGTTncw1rgNVaZkNrYguLn4B/DWtB6kyr6xGzpLS9BYAD4vp3X29+/f9betl9Oaz/RJ6ALriTwZznWEIcNvXedfNROTSLAtO5TEsnOw62e0oAaNYcumE3Fke/SjhE7pWPO1DG7yVV5yWzf6M/XIor1kcBiKKsqoZatQwGyMvPf9V28AwCfklM6GUGw4c4qrnkYW1Q0WkLe86swL0HYpGhOSGY7btNId7CVY55VUKG5GvMg9NinHvsyWyFaN6Vc2T2y0WvL5kGnJOh6cRUY0wV54qB0An5+TOnvzXBZ1MdhRhMdhlVAHeUSC2AxeYvVojwjnK8NSbeqszm06HVpxRR13uJ6lmuWI8Zm/cvJY3hjncG0nonsyyiX4ltN8aYzdfdXgIP5bJIsZAPDJeI3OpjzwiBQhxYZGHx/xkUHY1mEmIaNqjpFm9nVBKnSHmpNZ5x3Vs6JmZUj4zF+5t1jeGOewRSxQAutdId+Y65qXYOqqYvFcYlkBAHwmzugsnchHUiHc09k6OBpq6G9S5KotJbf5+jxCVwd6Mf0NSroBa1X9w3ccbgnLOHoyabNFNfLI4jfDTELR/hfzjMwh0NQ9Z2N9VchmaFQ8AQCfixM6m6fzAXyWO+wp8uHo6d9MlVAH0ktCPlqoimEyaiU2WuI6qx7HYsMd7DZD4lpYbk74k8lcYkPkHjIxsqmsjmGElHl2ktUYC2bWxjINwwnII/LI6m77AAD/Ovd1Ni4YD0kPHdE5n2JTlGJQllknaNxCQ1C8QtekJO65PXaQnAAA8C9w6vNZAAAATwOdBQCAa4HOAgDAtUBnAQDgWqCzAABwLdBZAAC4lgd1lm+cGjdJ2U1V9SauOgYAgB/NCZ09uilVUDUlWZVfMYjHVhVEgx3KpREtaXM5gAPMz2+tZZqaFx+B5+bQ6k2vmLufGrZRWT6Lh41dDmvxwibmKE+dh8/qcdPnoSimdZguaez755yPwWYx+boxUrlhk2fx2VQfWYpTbNm2QzaGxyZqsTy/FcNytxZzImpT/Uw/w+dMdYXNYvJ1Q2yZJhKNzBsfJTITa38Ke5SQex0Sm+0iljzXcEpnl9YD6rvvrmg3Vzq0TWqPASHBW/dA81sfNNl1tPrQuP3iqlNL9ygeR3tLiezcf3mWLIfeTkSNfrLWjaqjVnr4aJPnuSgejN9B7u1kVGQcPrS0JFYkvbcRUB7zyR6VTa3hM6tP38zjo01mNvVtH/tw5knIxwxZX5m1NtXP1Jp79dRxuFo21WfUzPzce0rLfS3DYzR8lJp506ks78+mvjU1T/rEaOS5jIc+N+jb4HCzbKZXecYsbVihB8R7EAPFt9xzdcgqv+ZqK0ussvgInrUifuHSoqr7sqk9SnH33ZqyrtQCuRX384RPdfH4kSd5PKrNwseoi7QmOVefpFbVyfLuVJfmzGxqDZ9th+Hia+FjKTeZlbqQhHXNE9DckuTIqK5aa1p0LMTiYa1ZIn3m0rDUdFZ9kzCo7kJzlsmN9zS3IpjbNX2IlrnWbN6Row19u5iWZ1dd6LOLuK+z1MUtYh9wv6KzaZnEpq7790ac7bjcfzQyImT4CJs9SB5pWaJqDz20RRnhwYv+eUmtPqOWfmi9Bh3m6bVsiU0ZuAt6Jqp16B7uQ4vh7I6rjy3VedTPNhSaey0etm3f1Bo+m+pZgoMWL51uMm8mTjX2PA63dX4rpkXHzM1avFjnQUSN6mf62UQFpZ9ZneJ4Zi8Bp/NNorGRLm5zy8bHUtpLzAnuItyW9sIe5jWPmnotpuS5jrPXs3VLmPwwgdu8xRJmmxQDo+6NRo1YPdx05DP2YDOMqLqNy7inkRA38apXrfU3UdWUBcx6lKfWIngmu9We8D3yGM9F9Zlj7WRQbd8wn4RTiYVWNGV3qaV47GvqNWtNH1lU0kCj21s6M+vY1wucq7TY8yh1wuMTW7FYdHymFsOGDKpRvDKqP79Xaz8Be4sLrepii5ntKu6U5aej++wy07C9p0rJkYljPPMcVe+zizins9xK7SU2YoHt7+/vthRbmNStrxlyH3SkcKPVlSzHPuserPNNFP9Y9+XS+60sTN2UHK9eTLHRMDdYo3Z5dlkUS7DJ82wUcxCpLnWRLJlBqGkUsXBQR716pRocYUut4WNjYRgowX5LN5mV3lGfbfLIqHvVJg5qTQsNztUywrBENU8dD8um+oyamQuRpqPeh3GamJbvbddRZqUlqNVqYcoz/qIAwWf3vnoNvowHPp+l3hj+oTLb0h2k9o83/ZfIpvnYvnVD72+p7D89Kt90f3Fc2e9E+CjLHjzaoSWzO5REM0mvWR0ybFurGrsrD2cesiy1ggjf5nkiSik90Hjdz7nq8dOn/hG5kpjJojWVUKbmtas1fe4fCVnUnWZmpeTncc+3yWNDDyHKNDpca20tls6ZteZenVGZeVafltlP8VkyP/uezmPDnd10/lwmFkstl+MRFoZZXal5LuOR78GoUf658PEhPy2iNTFT29QvP6CQx+/iuemdlmN3JH2bc9agCF+J4LVE8WGWPbisBsXOEUvmJSpqC7YSxgjb1ur9ZKbwXPJsas1KI89zUcpBh2Ga+2f6bIoptFC3tNYlRtj+veim+4ZiioqbzETd9oxhNG7mYdPjW7FaztVaE++iZvVpub9Xd5lnYoMWYg/UsTCjMvfRdgWZ7cClvl/b7VIyz6Y60/NcxAmdPdhMNrfdKn7Fx+Iu3wQAAPjUPHI9CwAA4HGgswAAcC3QWQAAuBboLAAAXAt0FgAArgU6CwAA13JaZz/KzXFxrxpRbtsis7j46x5KtLvVq+ZMtnlqK4X8VWC7o8y50QwAAFzOfZ2dAsi/7SVSWQWV3UI/2+RAQhPPNeQ3lPN2BnFKF/5liSKtB491nCm5fM1iji7aLUtRcnWUwNwAXh+bAwD4mZy6no3fuzPRIlFhA4mJ2llVVjFbhIfJNASttxDL2ag6m4upYZJQnY6ltU0GrQ3uWTPHyHvOJTK1rY2tIruZizMAAJz83EDEiuQjREce+aCzG0LWJOn379+hSREcsDZNIljF1cN4RpDht65/kFyKSSTYlh1Jwvk3fZK5WClQ22Lv1mD4jZUChZPTLQ8AwA/kvs5O/dMnyajyqQ9Ly6QL2CEb9RuonkYWrcuqSK14eOr9s9ezhJcIo22az++IqIZDZQEAhdPfg1VIbFzpqkiFmWmTO2IX6sawo4mbwmnUYTzvjJfIl4XfLER/Atqd0hwdyznhBkr7avDOfGFosiT4G38FAwDwlTijs1UFRdtITkxKjq8c04e5q7O+rKMM1tHHR35M0VLXKpGEjNarcqs0+cZyHVO2RS7NQC8tXwniuuRiLwAAoJzT2SpFqiQmJH2pClDTqQzYc09n6+BoqKG/SZG7RJYWN1CCXE4NJbMM6wfKtsajvmlpNzPlgdICAJxnr2f5n8c2Y1KGjJAfJvXrgFqBPTldoCWaqRKCRoJKyEcLVeRMZ0eHSuuzNuLWsPScZhR4hS3FY5kCAH4yf3g9K1RRSQVK+bp9Rcmkh46ywFJqpSzTkLtooUsjAADwL/DU92AAAABOA50FAIBrgc4CAMC1QGcBAOBaoLMAAHAt0FkAALiWEzob9+oTm9us/PapI369xy8O5E1fFU9Yc8uY3Lf3ZG2a2HDcVyTdJbIw81GPTSrcLAYAOMup69m4vdUF8wxdxNbIdk8tudKsBvh4W/CRLialslWhF1NPoguo91F7W2cAAHCTc58bqLA0PTJUb0j5Cmq7LUZNZ9lXfpErApbgXeWkS2Nw0IBVzpQ0VZsH0CtNa81zjw4HAIAdD3w+S2Jq8jJ0phhC3epAtYon7rmm4OT83K3NJwubWh/vb90oRRbHaKCz65WtNKL5kPvNT421dwAAuMV9nVWVbMoyhGanXVWZcuKeeQUcTl3KVtVkNEgWyPnwQtYQlx2tV8EWKtxKZKBJdgeZBQA8xLnrWZGWlMaKaM4zOruIlWiaB8ikOFjpSGxL4hb2lajZycqSlVxGLxrKdeSJ5pZJvw9k6+INAAC3eEBnbUwMYeoSrOrWZM6E6z0+5+wpaDn/uqN5U86MNziK/0TNKaFrDQx4tfw9SWvdkAIf7/27OSnPTwQ7UxwAAJxHdDZu8OoiSQwD0SRKlExzqGeL0IkH0Kus+augE4uyFVX3ooMdzzfxleKR/TR9rzlofLMeAABsOauzTWGaSB7R9CoifLBJoZpGYbHCyqYTGvGgRZkGakC6Jodt+oJlUDjD0FH3kEVd4X3RfAAA4CandLZJJnEoYIzr1VQjVqgNnos17W39sICz5WcImVu4J3cHBf3KWgeRU/qIEO2Ke+LqSym2eNsAAHCbc9ezAAAAngU6CwAA1wKdBQCAa4HOAgDAtUBnAQDgWv6Gzuo9Az6Mb+7LXQvzG33Gvvu/d1cBAAB8as7prEliqGSVSyXuh2qEEwXw77CaWRZ+92fBsAf/rpc5MKXE/k6yal17oxdL8ymVWjZXd+nYsnVj9xv/Auo+WvmE+wyAr8rrdHZowerUo+k/dkbvRGRXYDEQWXTIfP4W70wVZA/mkYZFaNoNs14sGz9jKXCZSN8mRPRQ6o0sLYhr2cTLGhQ3LeI42VSh2GN/AMBZ7utsnqhTu2htf4IbskjOcraGgBCcilclES8Mj4Ke6+J6XEaWuRMbrPMN/AADHVBW8SHfnbCQmarYigs+G3V0xhJwrbWG5De/aIoYW2s+5G8pJPLXr1GFoOBZeroFG52tlQAAT/Po9ayc7voYq3YO7q+5/LSWYcx58EbBNIuwRQNK7A1qUYqQ3hgO3c1HiwavSbmtEtHqr/f3cWkn5kctWzFTWFSpDkVo0+Ro3vZCybS5tUtaGG2f6a5z0NptcQYAnOC0zrK01uvZvCpjgbhBnL0SZFAa/ny2PlO7Qb51QUuwpalFlYaIsME6vwF5mJbkpkRiMvHYXhh2rx7nLIEtLVTP2Cwb2AsFSpfUSt8gzrhs4vDZWPaNBN7RDAQAPMYZnaUzTU87P9Nz4KRhN0qqjf5xTeJtZzPNrIKe5ckurxkXnbWAEGR1ysAtvHFznaySOkTGDQkX7KYzFqd1VSayrxW+iLYm5MW96lYLXKVtwjBsLCtzA43SHADgKe7rLJ9my5k+z7007EYsDfVuA4Lz1VPbBG1NvM0WLDqr6zYognWoMOR6tCb98HqneVvPhTMWpYnlsm2xVrdBEK8WyqybMTfrxoYqtrnrXwNiluYAAA/z6OezdMrR6Sifz8YCn8WHsJ+fqvb1kGVjFXHFcI/1pM55W6FJZmdWRWJZt9xryoAWvLwRQsP5+xoVUIN/xZU+ZywLS2lRORsTRWctnbxQkHgt3lqlWJYpMS2NXPYSlVEOAPAgT3wPRkM/Hzfn5bGpBdF/6PSl/zYJ4YEKZaILIqRr4kqkkGbLH12wBc7sJkVSBroWtrUULXj09DljSUYnZGhz24CSbDTe0nLCYiitGtMSSKM1Gxuq81oMAPAw93WWz2I7FfOck9OTWX+3YIN+CquxmoxvRPJzuasirbez2uamNFF1IT7YMDyLVjvUmH8D3gTfwtyc3iHbq2XV2bGXnmStE+h+kxKjNgDgYc5dz4JPBivhK6T2NiTEUFkA/hzoLAAAXAt0FgAArgU6CwAA1wKdBQCAa4HOAgDAtZzQWbs7quBfQm/uLxLn57+k5vCT0S//Mjxvs1qxOnNHBHYP1HoPwHJXlP7+gu4123e4bwqA788D17NNEkQmTCsClz4WpEVxhC6NrGvhdRRyTE/2YtYtE9x49EosUjtUlJWW3f2JPCX0Fm1X6ZTJ5NNCLFEAgH+J+zq7vYhToUiVoBFb86QWw6qDbAwf0iDCPUgTVu87PB5xE1eqA7iUbuSWAznrOruWWH7HY781uiPLE2ZzJ/oemJYZBQD49zh3PUunrf7OVfw6qFjkPyof8uDujjy0tctHKgJHcYythkCw2SUjH+udOdzCv2UWZlEVpQTLUmYOa3q7j6Gbc2NYGFeqnpbM0WND/fXhEBYbvXkNzrHmZdhuTZShxU+LjpsrAODf477OmmqEzqpmiODSiTzO450tiVNf3dyZXlN6NFzK6rAGhYzwuoyrMcYlTVw1W5FYGnD0lih+gyhnrQh9ai1zH/Ywb9JciZuq3eHa1rRthY/JPC067hMAwL/GC65nOztbgZZZFNxLRc+MTBHIJhiy3iSSJtPoM4qQVxEwVTFPwkt+ddmhFc+0H7ZxUEVyEcxlSlCGatKEfRM2kJt71AQ6nhYd1ygAwL/I6c9n7R/5JAk+C50125487RVRApJrs4vEFJ2JYbG5enTdIAfJUR1zpiFFYbOkQH5+DRqQn1v2Qx7rVnUy8S2dXYM1qzTSgjZwqDVRhhxLkdOi4+YKAPj3OHc9K4rB/9aNk5jO4X49S2NZVJvPNoiwRCJ2rF/X0KqOY0CU3B7IQx0X4+LAyITG+tAwXvj40LTsYGGKNrbFO+FE3lRQxTSE3TeilYiSpTYN74thdcqxi+q0KKdSAwAu54zOsgDR+cqiwd9s5alLJ7JOyhndbE1lHNGzSMJuJSUt6iQGBPlYJvEW6vdgklFYVManrZfwzqoDCtitbs1dZzlxKVUaEnIDeIXd9UNvTdv6LLA9C0eOME0L06MAAP8Wp74H05PVRIPOXno1sWKLGvJkT6HwlS+AN3/E+nd3JryT1g3uOiv7rGljrPIEkgjAN+Xs5wYAAACeAzoLAADXAp0FAIBrgc4CAMC1QGcBAOBaoLMAAHAtJ3R23vLktyPRynozkjhffzOX3Va2wWrPpgNpOe5WC5Z7XfGsWADAi3jgerbJjEiP6U9A4iUuLHKLijm8ZGg2j2HiBtNFBavPZO1CcOPRKzGKLDXwrFgAwEu4r7PbC8P2fAOCRmxNoRDDEEdSk9UWJo7wBGSsorOGsSjdgH21oS0Hcrb5nYKC/tZWsG6FohuNZ8UCABrnrmdJCl7y/NnQlsRMfYVmVXQ2YVr6xrAw/71PftohnhULALic+zprSvSa589atqJPrDapZgYZa5KmSArr0haJO1xVNPciv/N6luaUiK80JQjPigUAPMULrmc7O9sKi0qqHQkaSVkTr1M66x774b6RKpI3dZahDNWkCZfWJuTmHjWBjqdFxzUKAPDNOP357KueP+u4dtor60y6+qJB01WDrPTxUDJuqEVqjT5dgzWrbGgL2sCh1kQZ2iZNi46bKwDge3HuelZUiP/9HMJAutCvZ2ksi2rz2YLeLMWQg+pKqg2rmC/XMbuuyXj9gBLmw6SKqY7DbZHd2IIYlKZvUZ1y7Js5Lcqp1ACAL8kZnTXRYyH64+fPpkCaf5UbDvFZOm6yNKJiZ2vuOtuSLzpLSDsCr7C7fkB9a/vUnoUjR5imhelRAIDvxKnvwVQATIhIEejVZJAtakgBSfHxlRfjhY7As2IBAJ+Js58bAAAAeA7oLAAAXAt0FgAArgU6CwAA1wKdBQCAa4HOAgDAtZzV2bi76+hurXmbVN5CdQCFxKrn55umFnAPFQDgS3NSZ0kG/XkqCyauoplVJKs6uuYS1Vx1lihSniw+lawWHl5oKH7miKj1ZwUtiOmuA3OQc27AfqmHJ6P/w2aUJc8IBwB8Bs7p7PxdqQU6w6tukDx0WdFwNr+ZFiS0dpx/yVT4eLcQFxvWJPUlSxSk/OXRrrFSRoptwV2HmXN2ksylGe7M/rOFHDkjzwwHAHwOzuisn8Fyanf0fOaFdmaTocpI1dlizqk59AJu8tKtQoHXyMdehKY0ZYGGYScfd8+Fuw5GyVnYW4W+VGc85tTVpv2TZW3GnY0SM8N1DAD417mvs3wC7/+Va7AcEPXEJlMNoPPeqQ+fyVHqbIRtTHvIwyUoenDbmKQCsTX803zXQWkFnK1RWZZ2nmSLErZ+0ExS8mzCAQCfg/s6S//0tafO8um7wKc2/9tYVHGzTtDCcj37+/2tTrnGvevZI0iJDoQmxpI1c3CEZC8PFyfbAw5Mz8mUTlbm0gw/6H/XTKHk2YYDAD4Dpz6fpfP2QEIcV1JjCVh01g3plTobYRvTAi1VsapTkqfsZ/EzyGouOWrcdOg5+6yxX9pZq631z9DiQY8eczMcAPBv8pDO+tVVkmd2O7E9wChx1ZxeKarmxriphiS0sGgJR6tv15m0F9KFRrsKtx1qztlJcLS0bSmNvX9iGIyljaNwAMC/yoM6285fNxP3dFZXF3NOU2frOmMmepnSU4j8Om1Z2BqGCDNLW2TuOgjVuuvEOFqq4Ty2FR4KI/XGmal5NuEAgE/BS69n5zrRhEcJQfC1RaaZvyMa1PGmv8JdBwAAuMMpnQUAAPA00FkAALgW6CwAAFwLdBYAAK4FOgsAANfyNXS23L/k9z4w5TYFvtVh3plgN0BcessCAADc5oTOxh1WA1W5cTdX+7veonHHKVID271dVU0Vsqx5/fd3DfbgXxE2B6bl4Ca0RMlOzdtwbEY8imFz19mGvdIztBIJuAln7w0A+G78wfXsEMb3nTiK5d4r0cXs483tlXCXAf3HBGsngyW18fv3b9NCX1ulMe2a0eYndFallPybJ82tQyf20eoKAPi+nNFZl5+FkB+Wq0o6e+QUnEDWawYydHdRVClV7axY5quSOzwK7Up4g22I5JJ21GDzOzorNSWOUMHVMZM/MDRLpIwIAMB35zU6K/9e12u15ryL3KlW2CSgRvm4L/DgjT9I4GcHRhdNumqSBikfNUr05fWHBeEXn1aCMo4rZ7btKH4S3Trv+wgA8N05qbMmHwuhcL/e3+n/8vhE0ZAiWiQoh/EKeTSdlb+44DrUJKkmkrxv/sjGSQsULFoCec2bDE0ks46jHWWZBpSgLDQvrrW7iGab7p591wCAb8jLPjfgsSkXC4kuZeQ2R89gqBtZZLB819UT0aUp6ZavazZWuAXyF+tsQOA1WqKKnir68mQHkY0Iukm0f84dAPAN+AOdDZpkiPMUEVesBXOrwualdOgr9LpcHrK9aCOPOXRtdp0zO1tnbsAeymTtdDy6/gBxwbfSZ0sAAL46f6azutLFhOUkNcRH2xzhFoPhZitut6+VzMqFLTA81gw6p/9ac1u8hk1XvMZNYhsqxRiNWHtbfwDAN+SMzh5Lgi60ZRGSsISspL4Uwq0qdXOjMHaxaE8ir/Qf8jWHzM/mhV5Yxfm9SPSG3RZz5gdD2ob59SzhMwDAT+CUzi5yURBpWVdVA431Vwc2bHQ5U1oFeiGbChVbSatc1niRaiwZHJ2XhnK1GHffWTW8WONwtzDZuDpHI609AMD355zOAgAAeBboLAAAXAt0FgAArgU6CwAA1wKdBQCAa4HOAgDAtUBnAQDgWqCzAABwLdBZAAC4FugsAABcC3QWAACuBToLAADXAp0FAIBrgc4CAMC1QGcBAOBaoLMAAHAt0FkAALgW6CwAAFwLdBYAAK4FOgsAANcCnQUAgGv5GzrLf1fW/shr/XOv5W/B8h+OnX8G1v6c7IN/HxZ/URYA8Lk4p7OslBuqnpHL+NvbHKZGXq1/upsif7+/VX+J73+CfJVL/cPiwq7awV/5Hn4AAPBXOa2z4xoxbDQwSROKWnaJqwFvHxm1E8LwLZCO/vrVSjmaoVwfJ1sjAAD8RV5yPcvLPLbXRSRpKlpXk7y9F1deGB6FGzJawfUsAOBT8ufXs0Mc+QOCxVt8IwkP3viDhI8Uz/KZABO+DldhC78uuJDevp7lQEguAOBf4L7O7q8xg9CulLlFC10wq5ls/PnsxyqnDvnWBQ3duwa4ngUAfEpOXc/Wi8Ipdousyuez7LVzrraPN2KR6SUXw/4f7yWp2QNPcft6FgAA/iVO6qxJGkHaaCNGRJO0j8SMFI3WWNRMTIumytqixr85bYigfW5QYoScrysTXM8CAD4lT1zP0n9k6spnq/LCtvdlvXr2gBRB98gYZZfD9DNoAQy7hDF6BwCAf4fzOpsCZzdlLfrlgkZ+KnKhkTbwubxyhinZPLAigS6Ey6KbbtZMufjxTgNthXNqwRYJAAB/h/s66/rKcsaqJp8bsGLpgpl9WHSQndmiptQ8iv6VmseLHya3JcbIuY+8nYTNmt3SF1oyAAD4Nzh1PQsAAOBpoLMAAHAt0FkAALgW6CwAAFwLdBYAAK7le+ns77hx4RKWe8rG3RHneT4SAPDleFRnP8rvcBXKjav9vqu8X6vF2X1YSr0bq/+6GaNhkdZu3i1E3nVB2ejZwUYknGmrg7TA9v5Str5tGS2PMsvucW63AwD40tzXWdacY0Qg0uXto13z2eREitCqDGkSpq9i9SUhJyyev7o8Vj09EDhFg47b5PVMsD6PnKhl8JBcAEDjlM6mdrHY6Ex+h1YFosnEZmJyxzImMalbmTji2Nxws6UInXVHyUETy0UjL1bTWwLanN/RnREbGIPOgXlL2/odY/OUO1EAgK/Mmc8NWBvyMtKUggymWPzbXGISYVuERATkQFwU07DUWXnNam4O95u610oNt10j6XRbZ/WF/8vPKJ/ooqTj1wUX0q0Q31VnAMBX5oTOqp4WoWMjTedTDfuIsMmxjqh4pfz9en9fpVBDNYW4rypGC2nS7ozas7rEQ24YNlX/NXEiXtIC+WRIm3iF2sBkp/RE9AQA+H6c0FmVhvGhJAsKSUt/4GHTMVdHZqdhTVzc1V5dwrpZrPyfkHj3S6ZlgRw29YmDSDfLq/QRGRKy4iG5AIAt93X246P+S30/TKVYJcYFpDori7gs09W/XJrKkq1n1MGFojVQ24o6xSi2e3JH66TvVFaLi3sZkod1dQNczwLw8zjz+WyVj/3QNIcUmXSkKE0qFzmbpDTS1wRo82U9p7Ba8mJjDSjFlKMGmK3IhXeP3EDJiOhGtzmH5GGtbQqNzOwSxt4mAOB7cVZnTS4WqlCwBPFHC1VRUj9cgSphE1nqSrP4mwaKVZfov9xBi2LbauhZVjkrDndlltCidlUr2TSBJ/Z0SyE30yvZc3E8JFesAIBvximd3ePqoUMTC7OwocmgGxYWadl78Zdj/vEwJTQnDZVJWZQ0rF1GK5DmgnlMDV6wYPaioiWvLEQ3MpiF2ExWfhkbWXIBAL4hf6CzAAAATgCdBQCAa4HOAgDAtUBnAQDgWqCzAABwLZ9IZ9dv/Pu3+qfoIU8kAACAl3OBzn6UpxFu4RubtgJowthfXH/trqjCuBWr3U7VfyHYW4qY6rtt5uegu+KH74Qt9VCOvUSDf3dfvfz9Otqilxf6ubxIZ/UdOUDfKFbXPbyeCW483XU5HhadFV12cebpG/9OwHKcFJ21QUYUolLbsFauwJvmOXIzM/+MrMY7tci6rRuFtqtKNpObuMbRPDN4C27JBOfPtzNFGa51NmfAQXWD1yS7QjfZdRvkvic3z0jGO21zUwUKnJZa2WtPy4bSSVZKy2C/gRwY8/0WtULgz3iZzupbcu3TXRe6zkYLrK88tbRxENVjvTyPfNtADYpV8twd/2T2PrhE9GSN8PLy/HH2k9+fE8+7tUqBgDNE+FhVOIemyNH0TsvGa1f6NqeK8tJ4KvsJJK62uyQ53hcH7LotZL6SmYbn257OYaGKS7PTsiE7yZZLdyvyO4cycGXlsL7fZpPMjaTgUV75uQG/kyv5/tHbu3kz3awv/N/90135uOCXcWlg6BGxXyuHSx47T+gsQc7rIZkem0WCrPK0x2xC/PLBZidqxQrbOEySWr4Mo1Hb4BbGoxomRASF1F+aJrs4Zm4nI9YV435Rw9ed2svG3RK1PdmT7AvdTju6VZvCf0SJg3oKCXHTLmcyOyqWKB1MS2lGwmJG0937pUOjl657aplJXY/TqKMs4DlepLP8ttFxeeHTXZl+AbtOiWkh0ugtcNqwzjKEHHltYJB3L5EOnH1msoiySBFqsERnaq1LloRHnJmHxbvlFnIaP8fcOTKVBJKUC3r85nTLDlZOFGW8hsAxfQtXrN5StibZFLqfVlxKBCf0AryUiarVk97OT6vLYrVIHqFlFrIZX4shOemgLMZu4Az7ftzDaFOpa7PMEIXAn/Py78H4DayHSkALuyPAzfIq4hcZEsu1yOhUVTlgJiXcnpTw1OcGzDj4sgnue7OFZGYPXvVX9jIzcaYWea+paVU37u2NM3HeCrlnCSsqPllVRzFI9z4WSi+axouUmThkJC8cFWVsXWgLwpKWHNR38SxJNoXupqWpOXiiKMRkfMm081jSCp4xmRah5DZGVkViw5tWI8zGM5NC9lut0HKuRo6jZOAJXqKz9Xiob72Z1DZVsUPrd57uuqaYGaeFcGP5i2bSnR1aOSrEkdcOQXFeKpSS+wMzQmhZ/5yvJMxMZ2ptm1TMjV5adI+33LWCj+lV3WqGMAbmTi8b9+RkUeZ2vQa7djxwSbIUupN2023NV9sqmTS1cVyhZ2KmxWgZBbVsA6JiXTXjrpt91WZt9SPHLhl4khdez9L7Mtm/lztIsAh6Y+kQIE/RrzI0l1iPqbMtX2gxlMNjNV0kVaLb2jb5lA0yjh3K92BaSpb92E3zmVp1qUMrmocjfJv0y49YijV+tTyx2L2iE7HZJuwS8GjX07miTLHLSkziq5sdLUVPsil0L21mq90Wk49L2ZKzOK+UZozFMvbt1pL5vf3esiYMW+lNA8jHEzQylthvURYCf8xLdXZ9W+hNizf9UCgSfo/pwD58uisnSaHaFWRapdKBojHVZ6mhhIOWNHblWi4iA8yb8kdc8U3ziVrhQlG2Es5ZnBe7LTPWFpTiE4uRIZLu3AW5PTlrF84UZbhYmc/ut9R2iSXJLHQv7ey2RNj3YOrm6zSUf5aoy1GvS5/EsETpSDIts/2aJlazjSUgMgpZn91q2c0W1ULgD/lL17N7SSxYMHvRIZCHjS7onBZalpG0+Bo9F8Ex8vmszQkr3f0eYNR4OXf3HgDgM/Py78F+Iu3i4NXQjwGoLABfGugsAABcC3QWAACuBToLAADXAp0FAIBrgc6+iH7XwfX3IAAAvgwv0ln+xn2PflfO6/Vb84+8kTSw+6sI9iwZ07Pd4PT3tGx2u7+lzPmTR9/S4pK6IqG8/szGz80AAPwNLr6erXrUFWSe9O6rry4kVVC6usWTDwe1kigTO4pw13imGWWirH6cplbrnWiT2an8Yg8Xbg1GTAwywpBmV8TZVrzq0s45ngraw7vqgVzrvog9nTtC5+E1LQB8XV6ls0MyFJOUPC2PlcR97dUTRuIaSZY8EZlem1w1VdaVcXvoJsOO+su+JegMIZWCz+wXJ5979K1sUOuuJFCyTt124lzjS7Y/oe7Y20ivfcevezqT+WhaAPjK/B2d1WE7YbpSMW7RV08YiSNALLXeqG0ncj+fyevmc2DXsz9gN9UyctkQ4TsyZebvW8IDbYWGnMU3l6LrJmo+o2wvLUk6dslqRIvhFUp5/OBU70AQTx5kjl7RjMPL3dhSKtTkNF5rt3IymhYAvjAv1Fk70xbWc8rpOnsYbpBvUyf5bexy5vZTkc5S/oi0lyYvMnAhc2YvMbgfGbSUzDq93XVKTAuRRq7LcO22JVNDtI3NQmlV2Jac6HbqoCpjr9As5Cljfx0Ubx7Wrdz1VJNzzvE4WmmtGjYWAL4sf+96Vj34jFuxQPfVV08Yif3EY8JiLvacI4dd+Z+q7RylRJZX7PzK0WYO2L5RuUXTpsTV9grmxv53H32rpQfmkquShlJwHh2Jwx7fSX3I4x7H6euqjLXmpkDxrlnXmVPcJaVltCbIZAb3mxYAvjIX62yyOuyUSi366rOIi4CSSYcjVZ6/RSNophNa3T4HNrH4ylJjlNxYCDfeffQt95QfFRfchV65aVn3ljWhz3ZIlO0rKRKTsYnNtXpac2VOFO/h2z2Fmrx6yLhtwIFFFwH4olyvs7ay6tDQpcggKzHr5mZxRio6Nc1CIz9LKSwT5FVamPP2BV7vFbxGlO4lucotWkz2Yeki6ZJV8MWi1CE87l4yNsjetqMqVu4iJy0cp54fH+o/KpTUPPTFOq4U9zq2kr3y3gLAV+ZVOkunxsHp4OKwLK8GOqHi7KuPLgw7nXuBn7MCeYzceW7yiSqz6kYOnqKYs0LLL+haSRDDQklbN8jwHZE+6pK5soFKZlmq9ilv6DpP1tI0FmcuacYIkK8L1RgdyXQ6L17RwNIMTy2Q6VmrIYKmBYCvy8t0tpwZC3yi0CKfU0c+fGaX9TeaapBO7WS2M45OWrFksutPRarZiiyKZ824bAjeZsAxtx99O7IuWXJ9CQQAfGZep7MAAAB2QGcBAOBaoLMAAHAt0FkAALgW6CwAAFzLV9bZ/o3++H4fAAA+BZ9VZz/qrajC/lYq508e+XqepYcp7asF4g8AeJnOkpCFBImosbyQysybW5tRJsrqx2mqRu00LmXs6Ue+MlGptLNpKNPYKyeTJ9rU7Wnpt+UGve9swm3T0mjh6RvGG+GbJc7G5OZPS+UPmwfgB/ByneXTqpxi/cmjBDv67/FH0Bm6zvrsjx756kQQN+xFOEFxTbmQdDZU8cnWIr0NtuUqkrbtpI93yxUNTEsww8kSm6DcCN/Ush3JiWUUA/ZZMv9h8wD8FF6ss/1clHP+sz7ytUB+apSGZ3QgaaQ5WfFkaTbiF7/SyAE8W1MybJ9dTever5tjWyYH4cxYIoNvYixsdgixzzqtez8AfgKv1Nkv+8jX0KbSGRtHek9jr56s1YxMPNiWG5DXlKBp3LoRza57lFm7PwonyhIPSzBNI88+wdY6jftgAH4EL9RZ+RdkO7ntJOVTzF/5VDNzwPbNvylTvYRlSqSkNMyN/e8+8lWpOmtJiI0qeBp75Q2hbS6SFultsC034LLdjTftniWY4QwFRFs3w7dLnJPD6bVuXMno/GHzAPwAXvy5gZ+eSpyYcp59ske+Fqi4GnedVTK5vM5kYbHBttyAvIoM9RkzLY2D5bpVR+E3ljS8OmzeI6KnmAlvlADgh/Dy78F45OcVnWJm5JMtLvvC/Ake+SqopBDFcYtW1etkzWtpvDmyaPl3XVoKHcBR7jZbmJaFHm5/W4KN3uRR+FyKd6SGx870N7CRDruE0wLAz+P1OqtnnszqSRZa1s49FS7GFxMXtUgQw0JJK4l7Go2pPuqy5AqH2vACLWWXrSohWbVfs1sr9mJwjl1+trubZnGs/YJblrQ5DXcz3QifSzNc01dLhCuPNg/Az+NVOvt66Pxtp+XQWTmFywkvIW0uMbcf+fokXT6Iki90qQONAeCn8nl1FgAAvgfQWQAAuBboLAAAXAt0FgAArgU6CwAA1/KVdbbfXjBuNgAAgE/BZ9XZj+UOVb1Ha97X5Tz3/Nkl5+a+MIsZhF9LAa0HAExepbOkSKE3ok6sN3InaVMyohlloqx+nKaK1k4TU9eee/7skvNeTack6R75C24rZUNzU6Oa7DFnWzJx33SblixXbOyW7WVDRy2fKLRJcrKZpO4ZzbJaPKWxzbKpcq//fdpN/wybF1Nwr9DkxH6bu2UXNeE8tuwpDco8LeJ4YtcFc+k5y4R9csNO7KJTPsxB5lvNvJqX6yxvhW8TjdvTSRl2JMQ3gs6wKpqXe/L5s/ke0fp7mRjiX5N0JEmv0VLWN5bhXeHtc5jHq1cMCMnSgxNejBBN6JueS7nmSM72Vtx7LOwstCu9Jtn4lNEeilnWpyWgZJtmiVFl7pbNjnI87a5/hu0H5+Um5EYh5cx+I9NS7+6TfKXLccIJFLIY0xIlneP+Z5/PWVbY4+6DjOcbem439szZwlEzl/Bine2900Z+7ufPplpXaxJhc8D0rDXJSEiGDPS+6FW9YqCQcxw3pVwuMLlxSlRopQo1OLlv1ULTomPBFjc+ZNo2kyzbTkyLcZjsRpW5NCxhoMFuG2W9HcbJQYgwCg0sepfkcCf0moPd4mwkLXMtGEs1t/b5nEXHK9UvGVYyrCnM57BQWajR5DPrXcQrdfbrPX/Wzd2a0Hr/3DeQuJZV/oCNZxkJyeB9UZhtcbzRMTCqd6XaaaxBPPCOGE7mF+g1SwRUtsZdoWnRMePzjc9RMwl5GL4+Lcq6l5JdFW6gp5gWIdNu+pdlNtrLyjbkoNDAA3ZJqJ6xpokyWzaruYFOsfDw/q5TZp/PWXS8sl0rRh7uugofet0XqpN8H9k6k13EC3VWLs9b47bhvkG+uWYO2L75l1AqprBMCa65wdzY/97zZy0DH2ijPBNhc8DUBjSeLDKIx2Y5uo2G13LvHBg0L2WSuud2e5ENUslWWh5eaFV4OSwSJliSCNTxtOi4JtlGrc2IKQoV5kYft9+TbKoEvNbTdktNS+NYsDGl09XIywGt9BoSsKcYeohBCY/3m46FvkElap+WjbGbmGFoFslh4b2Srq2GmOv4OQu/nOi8bWzAbiXqzG7smTlCSo/rwgt58ecGfSfExsrO+FzPn+VOeWcv6w3z2VPS13gdjtbIvFgI2mgNi4GydWa4IXece8yy1GR1XIPX2costC29JNn4HDWzY64Xy81+b1Y5n3b0Tz+j7d12lky7TS7M0sqyMSeTLFF7VqcZ1C21xdHuYph9PmfR8Urvq88a0dXic1hon4ush728nJd/D8Yj36jcEt7S+OEVZv9oe78nVKtoRRe6dHGVW7SY7MPSedK53rA3VL1soqXVPVqKJp3eLLEtUVNGPHnO09nhxQiRhLEPeUks6RNOQrHzeLZTmYW2liXJrajeTLB7YO5qsbE3P5lV5m6ZFhuXtDkdze6734VsC1XIvphnkt1uufOWKZlKWKbEscPhrgvSOft8xrIl3WS8OG6P88XnqFDNHNzs5eW8Xmd1s2RW9wQ5bHYiWY2xH2ytJIhhoaSVxD3NopCEungufR1hhsdFZe0ofXWutAx1w5VpIaKxmqi8+xQ0jgW2CVEwgjeN1a440uet4KghzEKrZZdkRu2bKcz1TQSZtl0GI+a5tJv+leMGZsimUCWWhaP9tibZRW3gRKXsbHtrUTxuV9qGs8/nLBtq59GBoP3uukqOdiNTM480f4dX6ezroZ3Tjoehs7LD1v3Zdx7HHD1/VgeyviQ2vGC8d+YWGcIjCsd7uB7KAIAfzOfVWQAA+B5AZwEA4FqgswAAcC3QWQAAuBboLAAAXMtrdLbcOFG/8y+3CPA38fVrfyW/ugcAgO/Ky65nSV/bswBIO5dfPmWP5Tds7gtsl20NYFVfUJ87DnHXVfxCdyXKXIBsOu0Kf62s96utcwDAV+elnxuEKMog1W4nHOFrhAh2xVvcXEkb1eeWgypY/a9xT9q4t8ya21WrCts07B+ebUJEsgiFzgLw3XiJzpJYiDakAtk1IykK2VRyh0eB1lxe2F8efdUoDhMpcUugqoP9/l6RdeYoUhu+/WRMdtFVsiyJ2GfNLSktXSQjlpaqtAMAvjKvup4VKTM909kbf5BQfmeKZKQKR/gaVWe3buZABpMhxk3sc8bhjf5Xq3Y4VLvosH2GmbUuLkIb2z5RAaafRdYsOZp3bsaNTgEAX4hXf26gqkGIAr2tv/WarDpSruaKYBe3jf500ykH7YcMVisQxwPYPXI6bqTXiJ2Om0pELWY9xmCzGQCAL81LdZap+kD/RqcLSNcUFZCN8Ii/y43F+3domS71x8KYKknnHGQs/7FPEGwsjgdwSuvC4J8KZqHFiK3jitSwcZ2UHy76sFyKzc3oJQEAX5VX6Sypw/KXB1gt6r+jaczCseqHz13pYl0N6b7Rn2466cD/tatsVlpVW4s9gOKLzvZZm9btrbT01o0Ta0V0leoFAPi6vEhnXTviWybRDlYOFxj3WFSmRJq6dH1Jd8tJBnNj3MQ+JxzcxIb6ZVu97N7AKb0pGi+uuXogs0sIeXkypuisDHIzqhcA4OvyGp01UXBtkFf6D+kJ/bfLBpsXZMHlJhyVnB7rj5nOOqQhfXWJpkdCGdJYfh4Q6s3rwlqYGDnJ0OZcun6KnV0CAL4Hr9FZ0Qa9TlPNqX8qzITEprTe1GidO5qHU5U0i/6Ej2R4wMGL8qv9zsK2iT+FRdkTp0D3NtleLZvNAAB8aV7+PRgAAIAGdBYAAK4FOgsAANcCnQUAgGuBzgIAwLX8NZ21O2sBAOCn8Tqd1du6Ar91KtEbluJWqwa7eoKNhy3b5G8/PfYM1LTcjuWvlfVOLdy5BcDP4mU6G9ereZ+okaKyCMxOijeCaW4aXP9r3JKt1OzI6/1l0HOWAleJ/G1CRAsReqthAMD340U6608JaHJT1WZHczkWH3MTh/i9XpUu41C2xrNiaaAlUw2HpS5Z6hkVcOa1Pru5H54wC8CP5yU6K7pCkN74sOH/0l/0iHxTaExne7yb2I0cnnt6LMNrLZQMs5vowF1DaI0RdePSVAUYT5gFALzsc4Pf7+8mGi5GKicpTUOTmtBsxKebePbU02MJjrC0FlwCFgtNYzHiZlRgSwvVMzbcBptNBQB8Y16js6E19iSDd/4AQf6xTVd1LiYhN04TmhQfzSRUPRIHGct/7J/yNl4yN/jCMusYXKcHuYVeY6GOmRnl0ErWKJPyUQGeMAvAD+Vl17MF1ZEhIyYv/lnnIjQb8ekmnfF/H3h6LMVOjVXKTwBDLTWELEvmGaW0FtqGlbUiuso2FQDgm/E6nVUR4Qd1DVRmWG7oQjf1qMmRiRGrXOImdjORIhMbTj09lhyXhRB5riNr08IDtbnMTp+FpdAixkVnLZ28UFD1AgB8V16js6yBTTNEq/jbryI/7FTVqAvNsfiYKdQqfMJXl2i6iKBJs6FrYYsy08KZumX6JKMuGdqc28MTZgH4ubz6cwMTpBASkSxRGP+LX0SoVtGbjfh0udvr7JVPjz0Db4oXj83ayH21QGcB+Flc8fksAACABDoLAADXAp0FAIBrgc4CAMC1QGcBAOBaoLMAAHAtL9LZuAVrsLuF6WP7S1WP5biIfWtE3IyVd2+128nsZrO6arTucU8XAD+Pi69ni6xsFMgwF78tlqlyNKSJMvWsHCYqvTh2Y9Hx1a9S2ygUnbVBc5RfGaNm/GELMmQXcT7eduFWOwCAL8+rdPaeOrVhY6tb1XkEhs5SRFxSsqT9Wh5mwI6E+EbQ5KYKUsK6Xh5aU/rVh5Xxo2Y3ubLswU4CAHxv/qbOmu4MUrfMsLIIpEmmvRiss+PxCfK7v2rp3sccboiHb3TWNs3jxg8Gg+0fcyNPtQUA+Lq8UGdNNhZCRY7UJ6gKV51HIGve21t/hgBHk4HbSPFTg/upGi65BrWLgNMyvBLtdM/fv9nojg31p/JrYu7oXj8AgC/PX/7cQLVuwQKPtLWOBZGnX/uHt7DQ+SvnNXPA9rzyNNS4Q2O5A352rDwMJtqhqMjj22Wlx66YZdky3AAA35GLdTZRh6GZJXCrwcISQ46mZ2WFZjrhNPLYREkb5oLF78l+AvuOS2NyvXjWjGS2tgWxczCLtD31ZuW4GwDAN+B6nbUV1akbOkuDXKt+IyZVTTQ1VM+MNErtCnM8Q1bWD3olaHW7aF1kGfN0f26Fi9Iry6nbMteS+KgOAODb8SqddR2a6IItixqtuCaVBDXbyFxdSa5UU2kQxqJvxZy1bwnckf75ZmSwerKdv9xSc7QmxVqiJfFRHQDAt+NlOqvKskP1yXUoxNAwvakCRogfLWmGSwUpqhxgDZue9ibFIU28LfaHHsTYHEJYveC6JwAA35TX6SwAAIAd0FkAALgW6CwAAFwLdBYAAK4FOgsAANcCnQUAgGuBzgIAwLVAZwEA4FqgswAAcC3QWQAAuBboLAAAXAt0FgAArgU6CwAA1wKdBQCAa4HOAgDAtUBnAQDgWqCzAABwLdBZAAC4FugsAABcC3QWAACuBToLAADXAp0FAIBrgc4CAMC1QGcBAOBaoLMAAHAt0FkAALgW6CwAAFzJ//7v/weex2zXKXJJ1QAAAABJRU5ErkJggg==)

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