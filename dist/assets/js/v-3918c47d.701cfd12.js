(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[3264],{4463:(e,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>n});const n={key:"v-3918c47d",path:"/doc/Mac%E4%BD%BF%E7%94%A8.html",title:"Mac使用",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"文件夹",slug:"文件夹",children:[]},{level:2,title:"各种路径",slug:"各种路径",children:[]},{level:2,title:".DS_store",slug:"ds-store",children:[]},{level:2,title:"更改帐户名、主机名、计算机名",slug:"更改帐户名、主机名、计算机名",children:[]},{level:2,title:"App Store 访问加速",slug:"app-store-访问加速",children:[]},{level:2,title:"常见问题",slug:"常见问题",children:[]},{level:2,title:"设置默认的编辑器",slug:"设置默认的编辑器",children:[]},{level:2,title:"清dns缓存",slug:"清dns缓存",children:[]},{level:2,title:"刷新dns",slug:"刷新dns",children:[{level:3,title:"Magic Trackpad 2代   https://community.folivora.ai/   配合BetterTouchTool",slug:"magic-trackpad-2代-https-community-folivora-ai-配合bettertouchtool",children:[]}]},{level:2,title:"删除自带ABC",slug:"删除自带abc",children:[]},{level:2,title:"钥匙串",slug:"钥匙串",children:[{level:3,title:"命令行修改dns",slug:"命令行修改dns",children:[]},{level:3,title:"iphone投屏",slug:"iphone投屏",children:[]}]}],filePathRelative:"doc/Mac使用.md",git:{updatedTime:1628163704e3,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:6}]}}},1223:(e,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>l});const n=(0,a(6252).uE)('<h1 id="mac使用"><a class="header-anchor" href="#mac使用">#</a> Mac使用</h1><p>双指放大缩小失效 睡眠模式再唤醒</p><p>sudo spctl --master-disable // 系统是OS Sierra(10.12_10.13)以上,需要用终端打开 允许任何来源</p><p>触发角设置桌面操作方式</p><p>Option + Shift / option / shift 进行放大缩小</p><p>finder建立smart文件夹</p><p>https://github.com/Caldis/Mos/releases/ mac鼠标辅助软件</p><p>启动3指拖移</p><h2 id="文件夹"><a class="header-anchor" href="#文件夹">#</a> 文件夹</h2><p>超级右键</p><p>jetbrains 激活码 http://vrg123.com/</p><p>Removebg 人工智能抠图</p><p>腾讯lemon</p><p>FinalShell</p><p>istat menus 网速等各种监控软件</p><p>MacZip 免费压缩软件</p><p>cheatsheet 按住command查看快捷键</p><p>SwitchHosts</p><p>Hyper Dock docker悬浮框</p><p>Plistedit pro</p><p>App Cleaner &amp;&amp; Uninstaller</p><p>utools</p><p>Tuxera（NTSF硬盘读取）：https://www.tuxera.com/</p><p>IINA（播放器）：https://iina.io</p><p>Permute（格式转换）：苹果应用商店提供下载</p><p>Downie4（视频下载）：https://software.charliemonroe.net/downie/</p><p>motrix 下载软件</p><p>Alfred 效率</p><p>Adobe_Zii破解adobe软件</p><p>下载软件FDM https://www.freedownloadmanager.org/zh/</p><h2 id="各种路径"><a class="header-anchor" href="#各种路径">#</a> 各种路径</h2><p>Library：这个文件夹包含了字体、网络插件、还有其他一些App需要的文件，对Mac的所有用户都开放</p><p>/etc/hosts // host文件位置</p><p>/bin //shell环境变量</p><p>/usr/bin //系统自带的环境变量</p><p>/usr/local/bin //用户安装的环境变量</p><p>/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin //node安装的全局环境变量</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token builtin class-name">echo</span> <span class="token environment constant">$PATH</span>\n/Users/zhuyuanzheng/.nvm/versions/node/v14.17.0/bin:/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin\n<span class="token comment"># 按照优先级进行排序,分别为node全局环境变量/用户创建的环境变量/系统自带的环境变量/shell环境变量/</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="ds-store"><a class="header-anchor" href="#ds-store">#</a> .DS_store</h2><p>Mac下面压缩的时候总会自动生成 <code>.DS_store</code> 文件，用户可以自行选择是否需要生成，执行下面命令之后需要重启Mac生效。</p><ul><li><p>禁止 <code>.DS_store</code>生成：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defaults write com.apple.desktopservices DSDontWriteNetworkStores -bool TRUE\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>恢复 <code>.DS_store</code>生成：</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>defaults delete com.apple.desktopservices DSDontWriteNetworkStores\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ul><h2 id="更改帐户名、主机名、计算机名"><a class="header-anchor" href="#更改帐户名、主机名、计算机名">#</a> 更改帐户名、主机名、计算机名</h2><ol><li><p>帐户信息修改</p><p><code>System Preferences &gt; Users &amp; Groups &gt; 右单击当前用户 &gt; Advanced Options</code></p><p>注意：用了一段时间的电脑不建议修改，可能会导致很多软件要重新安装。</p></li><li><p>主机名修改</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">sudo</span> scutil --set HostName MacBookPro\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li><li><p>计算机名修改</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token function">sudo</span> scutil --set ComputerName MacBookPro\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div></li></ol><h2 id="app-store-访问加速"><a class="header-anchor" href="#app-store-访问加速">#</a> App Store 访问加速</h2><p>为网络添加DNS</p><blockquote><p>208.67.222.222</p><p>208.67.220.220</p><p>114.114.114.114</p></blockquote><p>具体设置位置为：<code>System Preferences &gt; Network &gt; Wi-Fi &gt; Advanced &gt; DNS</code></p><h2 id="常见问题"><a class="header-anchor" href="#常见问题">#</a> 常见问题</h2><blockquote><p>问：CSV文件打开乱码 答：有时候程序导出来的csv文件在mac下用excel打开会乱码，此时可以用Numbers试试。</p><p>问：把正在下载系统的mac放着充电，过了一天风扇很厉害强制关机，然后一直开不了 答：估计是安装系统过程进入了休眠导致系统没有安装完，插入系统U盘一般可以解决。</p></blockquote><h2 id="设置默认的编辑器"><a class="header-anchor" href="#设置默认的编辑器">#</a> 设置默认的编辑器</h2><p>很多应用调用默认编辑器时会使用<code>$EDITOR</code>这个环境变量，因此我们可以设置该变量为我们喜欢的编辑器。</p><p>例如设置默认编辑为atom：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">EDITOR</span><span class="token operator">=</span>atom\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或者，右单击某种扩展名的文件来改变其默认打开程序：</p><blockquote><p>&quot;Get Info&quot; -&gt; &quot;Open with:&quot; -&gt; (Select Atom) -&gt; &quot;Change All&quot;</p></blockquote><h2 id="清dns缓存"><a class="header-anchor" href="#清dns缓存">#</a> 清dns缓存</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>dscacheutil -flushcache <span class="token function">sudo</span> discoveryutil udnsflushcaches\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="刷新dns"><a class="header-anchor" href="#刷新dns">#</a> 刷新dns</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">killall</span> -HUP mDNSResponder\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>使用爱思助手签名ipa文件(选择appID 签名7天)然后应用游戏--导入安装(选择签名后的ipa不是原来的ipa安装)</p><p>加盟编号1024</p><h3 id="magic-trackpad-2代-https-community-folivora-ai-配合bettertouchtool"><a class="header-anchor" href="#magic-trackpad-2代-https-community-folivora-ai-配合bettertouchtool">#</a> Magic Trackpad 2代 https://community.folivora.ai/ 配合BetterTouchTool</h3><p>使用教程 https://blog.csdn.net/guang_s/article/details/106940265</p><h2 id="删除自带abc"><a class="header-anchor" href="#删除自带abc">#</a> 删除自带ABC</h2><ol><li>首先关闭sip(System Integrity Protection ) 系统完整性保护https://www.163.com/dy/article/FTQGK3G80544QFPE.html</li><li>安装plistEdit Pro</li><li>删除ABC输入法,重启电脑 https://bin.zmide.com/?p=421</li></ol><h2 id="钥匙串"><a class="header-anchor" href="#钥匙串">#</a> 钥匙串</h2><p>git输入账号密码之后会自动保存在钥匙串中,双击登录,输入2次密码,始终允许,就可以查看密码,下次用git提交就不用输入密码了</p><p>windows上也有密码储存功能,关于git提交不用设置ssh,以后都用https</p><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210624162259068.png" alt="image-20210624162259068"></p><h3 id="命令行修改dns"><a class="header-anchor" href="#命令行修改dns">#</a> 命令行修改dns</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>networksetup -listallnetworkservices <span class="token comment">#查看有哪些网络</span>\nnetworksetup -setdnsservers Wi-Fi <span class="token number">114.114</span>.114.114 <span class="token number">8.8</span>.8.8  <span class="token comment">#设置wifi的dns</span>\nnetworksetup -getdnsservers Wi-Fi   <span class="token comment">#查看dns有没有设置成功</span>\ndscacheutil -flushcache   <span class="token comment">#刷新dns</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>查看mac地址和局域网ip</p><p>option + 单击wifi</p><p>BSSID为wifi mac地址</p><p>ESSID为wifi名称</p><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210702181724519.png" alt="image-20210702181724519"></p><h3 id="iphone投屏"><a class="header-anchor" href="#iphone投屏">#</a> iphone投屏</h3><p>iphone连接Mac--打开quickTime--新建影片录制--切换摄像头和麦克风即可</p><p>sudo rm ~/Library/Preferences/com.apple.appstore.plist</p><p>Aa123456</p>',80),l={render:function(e,s){return n}}}}]);