(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[537],{7087:(p,e,a)=>{"use strict";a.r(e),a.d(e,{data:()=>s});const s={key:"v-72f011d4",path:"/doc/%E5%BF%AB%E6%8D%B7%E9%94%AE.html",title:"快捷键",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"系统",slug:"系统",children:[{level:3,title:"Oh My Zsh",slug:"oh-my-zsh",children:[]}]},{level:2,title:"snipaste",slug:"snipaste",children:[]},{level:2,title:"zsh",slug:"zsh",children:[]},{level:2,title:"terminal",slug:"terminal",children:[]},{level:2,title:"webstorm",slug:"webstorm",children:[]},{level:2,title:"iTerms快捷键",slug:"iterms快捷键",children:[{level:3,title:"特点",slug:"特点",children:[]}]},{level:2,title:"vscode",slug:"vscode",children:[]},{level:2,title:"Vim(分为命令模式  输入模式  底线命令模式 )",slug:"vim-分为命令模式-输入模式-底线命令模式",children:[]},{level:2,title:"linux命令",slug:"linux命令",children:[]},{level:2,title:"markdown",slug:"markdown",children:[]},{level:2,title:"Homebrew",slug:"homebrew",children:[]},{level:2,title:"ps",slug:"ps",children:[{level:3,title:"utools",slug:"utools",children:[]},{level:3,title:"chrome",slug:"chrome",children:[]},{level:3,title:"finalShell",slug:"finalshell",children:[]}]}],filePathRelative:"doc/快捷键.md",git:{updatedTime:1628163704e3,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:7}]}}},9194:(p,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>n});const s=(0,a(6252).uE)('<h1 id="快捷键"><a class="header-anchor" href="#快捷键">#</a> 快捷键</h1><p>google浏览器</p><p>/ 回到搜索页</p><h2 id="系统"><a class="header-anchor" href="#系统">#</a> 系统</h2><p>Command + enter 最大化/最小化</p><p>按住全屏按钮不放 //进入分屏 退出分屏 esc</p><p>control command f //进入全屏/退出全屏</p><p>command option d //dock栏自动显示/隐藏</p><p>重命名 enter</p><p>control command 空格 // 打开emoj</p><p>按住command可以拖动菜单</p><p>按住command可以显示路径,双击可以在finder中打开</p><p>按住option可以关闭同个程序的多个窗口</p><p>fn + delete 向后删除</p><p>command + 双击 fider中用新tab打开文件夹</p><p>Command + i //显示文件/文件夹信息</p><p>查看隐藏文件夹 Cmd + Shift +.</p><p>按住optinon 强制退出</p><p>command option i 统计多个文件信息</p><p>空格 预览</p><p>command + 上 访问上层文件夹</p><p>cat /etc/shells // 查看系统当前 shell</p><p>echo $SHELL //查看当前环境shell (mac默认是bash)</p><p>chsh -s /bin/zsh //修改默认shell</p><p>shift command G //前往指定路径</p><p>echo $PATH //输出环境变量</p><p>command + q //退出软件</p><p><code>命令1;命令2</code> 多个命令一起执行</p><p><code>命令1&amp;&amp;命令2</code> 命令1成功，才会执行命令2</p><p><code>命令1||命令2</code> 命令1不成功，才会执行命令2</p><p><code>命令1 | 命令2</code> 命令1的正确输出作为命令2的操作对象</p><p>hostname // zhuyuanzhengdeMacBook-Pro 查看主机名</p><p>scutil --get ComputerName //朱原正的MacBook Pro 查看computerName</p><p><code>scutil</code> 是个可动态访问 macOS 系统信息的交互式工具</p><ol><li>scutil --proxy //查看代理配置</li><li>scutil --dns //查看 DNS 配置</li><li>scutil --nwi //查看网络配置</li></ol><p>ifconfig // 查看局域网ip和mac地址</p><h3 id="oh-my-zsh"><a class="header-anchor" href="#oh-my-zsh">#</a> Oh My Zsh</h3><p>Command + r 清屏</p><p>command + u //删除当前行</p><p>Control + f //命令提示符直接补全 <strong>直接回车就行</strong></p><p>tab按2次 //进入补全目录</p><p>z growing // 按回车直接跳到~/project/boxes-template/development/act_self_growing_show</p><p>cd ~/.oh-my-zsh/themes &amp;&amp; ls //查看oh-my-zsh主题</p><p>uninstall_oh_my_zsh // 卸载oh-my-zsh</p><p>z自动跳转 插件 按 z + 最终目录</p><p>history查看历史命令插件 // h</p><p>zsh_stats //查看频率最高的20条命令</p><p><strong>source ~/.zshrc</strong> //修改主题和插件之后重启配置文件</p><p>~/.oh-my-zsh/themes //主题文件</p><p>~/.oh-my-zsh/plugins //插件</p><p>~/.oh-my-zsh/custom/plugins //第三方插件</p><h2 id="snipaste"><a class="header-anchor" href="#snipaste">#</a> snipaste</h2><p>Shift 双击缩略图</p><h2 id="zsh"><a class="header-anchor" href="#zsh">#</a> zsh</h2><h2 id="terminal"><a class="header-anchor" href="#terminal">#</a> terminal</h2><p>control + L清屏</p><p>control + u 清除1行</p><p>mkdir dirname //创建目录</p><p>rmdir dirname //删除目录</p><p>mvdir dir1 dir2 //移动或重命名一个目录 如果 dir2 目录已存在，那么该命令将 dir1 目录移动到名为 dir2 的目录下。否则，dir1 目录将被重命名为 dir2</p><p>pwd //显示当前目录的路径名</p><p>cat [fileName]//显示文件内容</p><p>rm [fileName] //删除文件或目录</p><p>cp file1 file2 // 将file1复制为file2</p><p>cal 8 1996 //显示日历</p><p>telnet hpc.sp.net.edu.cn //远程登录 hpc.sp.net.edu.cn</p><p>env //显示当前所有设置过的环境变量</p><p>echo $SHELL //输出系统使用的shell</p><p>alias //查看已设置的别名</p><p>alias dd=&#39;npm run dev&#39; //设置别名</p><p>alias cnblogs=&#39;open https://cnblogs.com&#39; //打开博客园</p><p>. 当前目录</p><p>.. 上级目录</p><p>-前一次目录</p><p>~用户目录</p><p>/ 根目录</p><p>Touch [fileName] //新建文件</p><h2 id="webstorm"><a class="header-anchor" href="#webstorm">#</a> webstorm</h2><p>后缀补全 设置提示补全</p><p>command + shift + k 提交并推送(<strong>自定义</strong>)</p><p>command + shift + \\ 向右拆分(<strong>自定义</strong>)</p><p>command + shift + i 打开/关闭终端 (<strong>自定义</strong>)</p><p>command + shift + h 显示历史记录 (<strong>自定义</strong>)</p><p>command + 上滑 关闭其他选项卡(<strong>自定义</strong>) 鼠标快捷键</p><p>F4 //快速文档跳转到mdn(<strong>自定义</strong>)</p><p>command + shift + t //重新打开关闭的选项卡(<strong>自定义</strong>)</p><p>静默搁置就是还原所有未提交更改</p><p>Option 光标上下 扩大/收缩选区</p><p>option + 回车 警告代码快速给出自动修正</p><p>alt + command + 光标 前进后退</p><p>conmand+ 加号涨开代码块</p><p>Control + shift + j 多行变一行</p><p>command + shift + / // 注释块代码</p><p>command + shift + u // 大小写自动转</p><p>command + e 打开最近文件</p><p>command + k 提交commit</p><p>command + option + t 挂上if else/包裹标签</p><p>Ctrl shift v 剪切板历史</p><p>Command shift 上下切换位置</p><p>control + space 显示建议</p><p>Alt + f7 在所有位置查找用法</p><p>control control 运行命令</p><p>Alt + enter改进和优化代码的意图操作</p><p>F2 在错误之间跳转</p><p>Alt + 上 选择范围</p><p>Shift+Alt+Up 向上移动行</p><p>Ctrl+drag 先选中，按ctrl拖动也是复制</p><p>Ctrl+Shift+C 复制文件路径名</p><p>command+ alt + L格式化</p><p>command + r 替换</p><p>https://plugins.jetbrains.com/webstorm 插件</p><p>f6下一个差异</p><p>f7上一个差异</p><p>//git 操作</p><p>command + k // 填写代码提交记录</p><p>command + option + k // 提交代码</p><p>command + option + z // 撤销当前代码改动</p><p>command + d // 选中两个文件进行对比，充当文件夹 diff 工具</p><h2 id="iterms快捷键"><a class="header-anchor" href="#iterms快捷键">#</a> iTerms快捷键</h2><p>command + r 清屏</p><p>Control + a //移动到最左边</p><p>control + e //移动到最右边</p><p>ctrl + u 清空当前行</p><p>command+f 输入之后 tab</p><p>command+shift+h 剪切板历史记录</p><p><code>⌘ + 数字</code>: 切换标签页，<code>⌘ + 方向键</code> 按方向切换标签页</p><p><code>⌘ + enter</code>: 切换全屏</p><p><code>⌘ + d</code>: 垂直分屏，<code>⌘ + shift + d</code>: 水平分屏。使用<code>⌘ + ]</code>和<code>⌘ + [</code>在最近使用的分屏直接切换.而<code>⌘ + opt + 方向键</code>切换到指定位置的分屏。</p><p><code>⌘ + t</code> :新的标签页</p><p>Command + w 关闭标签页</p><h3 id="特点"><a class="header-anchor" href="#特点">#</a> 特点</h3><ol><li><p>快捷键非常丰富（不一一详细列举，只列了几个目前常用的）</p></li><li><p>兼容性好</p><p>这一点在远程连接服务器的时候才可以体验到，默认的系统终端有时候会出现乱码问题。</p></li></ol><h2 id="vscode"><a class="header-anchor" href="#vscode">#</a> vscode</h2><p>在快捷键中输入插件名字可以查看插件的命令和对应的快捷键</p><p>vue-helper</p><p>Option + x 选择2个引号间的数据或者props的数据 command + r</p><p>option shift enter 自动完成添加引号</p><p>command + 单击 跳转</p><p>option + f12 预览不跳转</p><p>option + command + 单击 右侧打开</p><p>shift + f12 查看引用</p><h2 id="vim-分为命令模式-输入模式-底线命令模式"><a class="header-anchor" href="#vim-分为命令模式-输入模式-底线命令模式">#</a> Vim(分为命令模式 输入模式 底线命令模式 )</h2><p>Vim [fileName] //编辑/新建文件</p><p>i, o,a //进入 输入模式</p><p>X命令模式删除右边字符</p><p>backpace删除左边</p><p>:wq //保存退出</p><p>:q //退出</p><p>:w [fileName] //保存文件名</p><p>: 切换到底线命令模式，以在最底一行输入命令(要先按esc)</p><p>Esc //退出底线命令模式/退出输入模式</p><h2 id="linux命令"><a class="header-anchor" href="#linux命令">#</a> linux命令</h2><p>which webstorm/ which node //查看路径</p><p>man + pwd //与-h/--help 作用相等</p><p>top // 查看cpu 内存 进程的状态</p><p>free //查看内存状态 free -m //MB为单位 free -h //GB为单位</p><p>echo &#39;node_modules&#39; &gt;&gt; .gitignore //添加.gitignore</p><p>echo &#39;# Hello VuePress&#39; &gt; test.js</p><h2 id="markdown"><a class="header-anchor" href="#markdown">#</a> markdown</h2><p>H1-h6 把目录放在大纲中</p><p>--- + 回车 //横线</p><p>*** +回车 //横线</p><p><a href=""></a> // 文字 url</p><p><img src="" alt="我的照片"> //图片</p><p>command + [ //减少缩进</p><p>command + ] //增加缩进</p><p>-+空格 //无序列表</p><p>1.+空格//有序列表</p><p>command + / //看源码</p><p>command + b // 加粗</p><p>command + i // 斜体</p><p>表格</p><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token table"><span class="token table-header-row"><span class="token punctuation">|</span><span class="token table-header important">  表头   </span><span class="token punctuation">|</span><span class="token table-header important"> 表头  </span><span class="token punctuation">|</span>\n</span><span class="token table-line"><span class="token punctuation">|</span>  <span class="token punctuation">----</span>  <span class="token punctuation">|</span> <span class="token punctuation">----</span>  <span class="token punctuation">|</span>\n</span><span class="token table-data-rows"><span class="token punctuation">|</span><span class="token table-data"> 单元格  </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span>\n<span class="token punctuation">|</span><span class="token table-data"> 单元格  </span><span class="token punctuation">|</span><span class="token table-data"> 单元格 </span><span class="token punctuation">|</span>\n</span></span></code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="homebrew"><a class="header-anchor" href="#homebrew">#</a> Homebrew</h2><p>本地软件库列表：brew ls</p><p>查找软件：brew search google（其中google替换为要查找的关键字）</p><p>查看brew版本：brew -v 更新brew版本：brew update</p><p>安装cask软件：brew install --cask firefox 把firefox换成你要安装的</p><h2 id="ps"><a class="header-anchor" href="#ps">#</a> ps</h2><p>command + e //合并图层 == 转换成智能对象 (任意选择图层然后导出)</p><p>command + d 去除虚线</p><p>视图--标尺 //去除排线</p><p>https://github.com/webmproject/WebPShop 下载webP插件 下载之后拷贝到路径 /Applications/Adobe Photoshop/Plug-ins</p><h3 id="utools"><a class="header-anchor" href="#utools">#</a> utools</h3><p>esc 回到初始状态</p><p>全局快捷键冲突,在键盘设置中修改软件快捷键</p><p>clear 关闭所有后台插件</p><p>ctrl + d 窗口分离</p><h3 id="chrome"><a class="header-anchor" href="#chrome">#</a> chrome</h3><p>command + + //窗口放大</p><p>command + shift + + //devtools放大</p><p>commandl+L //选中地址栏内容</p><p>control + e //移动到行尾</p><p>control+a //移动到行首</p><h3 id="finalshell"><a class="header-anchor" href="#finalshell">#</a> finalShell</h3><p>终端: at命令历史 双击ctr切换到命令输入框 命令输入框 at命令历史 ab补全 双击ctr切换到终端 列表窗口 backspace上一级目录 at/tab/esc关闭窗囗 上下箭头选择行</p>',196),n={render:function(p,e){return s}}}}]);