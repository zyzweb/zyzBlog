(self.webpackChunkvuepress_blog=self.webpackChunkvuepress_blog||[]).push([[3443],{8690:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>e});const e={key:"v-01e97df1",path:"/doc/docker%E5%9F%BA%E7%A1%80.html",title:"docker基础",lang:"zh",frontmatter:{},excerpt:"",headers:[{level:2,title:"1. 基础概念",slug:"_1-基础概念",children:[]},{level:2,title:"2. https://hub.docker.com/  类似github",slug:"_2-https-hub-docker-com-类似github",children:[]},{level:2,title:"3.docker切换国内源",slug:"_3-docker切换国内源",children:[]},{level:2,title:"docker常用命令行",slug:"docker常用命令行",children:[]}],filePathRelative:"doc/docker基础.md",git:{updatedTime:1625044702e3,contributors:[{name:"zhuyuanzheng",email:"yuanzheng.zhu@jyblife.com",commits:1}]}}},5568:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>p});const e=(0,a(6252).uE)('<h1 id="docker基础"><a class="header-anchor" href="#docker基础">#</a> docker基础</h1><h2 id="_1-基础概念"><a class="header-anchor" href="#_1-基础概念">#</a> 1. 基础概念</h2><p>镜像 容器 仓库</p><p>镜像（Image）和容器（Container）的关系，就像是面向对象程序设计中的类和实例</p><p>仓库用来储存镜像</p><h2 id="_2-https-hub-docker-com-类似github"><a class="header-anchor" href="#_2-https-hub-docker-com-类似github">#</a> 2. https://hub.docker.com/ 类似github</h2><h2 id="_3-docker切换国内源"><a class="header-anchor" href="#_3-docker切换国内源">#</a> 3.docker切换国内源</h2><p><img src="https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210627214800444.png" alt="image-20210627214800444"></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>#将下面的配置添加到上面<span class="token punctuation">,</span>然后重启docker\n#https<span class="token operator">:</span><span class="token comment">//cr.console.aliyun.com/cn-hangzhou/instances/mirrors  获取阿里云dock加速地址</span>\n<span class="token punctuation">{</span>\n  <span class="token property">&quot;debug&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;experimental&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;registry-mirrors&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token string">&quot;https://docker.mirrors.ustc.edu.cn&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;https://hub-mirror.c.163.com&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;https://vs83pkv4.mirror.aliyuncs.com&quot;</span>  \n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>docker info <span class="token comment">#查看换源是否成功</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="docker常用命令行"><a class="header-anchor" href="#docker常用命令行">#</a> docker常用命令行</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>Ctrl + d /exit <span class="token comment">#退出当前容器</span>\ndocker images  <span class="token comment">#列出本机所有镜像</span>\ndocker <span class="token function">ps</span> <span class="token comment">#查看容器是否在运行及其他状态  running/Up 运行中  exited  停止  </span>\ndocker <span class="token function">ps</span> -a <span class="token comment">#查看所有docker容器(包括已经停止的)</span>\ndocker logs  2b1b7a428627  <span class="token comment">#在宿主机查看容器输出</span>\ndocker stop  2b1b7a428627  <span class="token comment">#停止容器</span>\ndocker pull ubuntu <span class="token comment">#载入镜像</span>\ndocker <span class="token builtin class-name">exec</span> -it 243c32535da7 /bin/bash   <span class="token comment">#进入容器(退出不会导致容器退出)</span>\ndocker <span class="token builtin class-name">exec</span> --help    <span class="token comment">#查看某个命令的帮助说明,其他命令行也类似</span>\ndocker port cafb276b7800   <span class="token comment">#查看指定容器的端口映射情况</span>\ndocker search mysql   <span class="token comment">#搜索镜像</span>\ndocker <span class="token function">rm</span> <span class="token variable"><span class="token variable">$(</span>docker <span class="token function">ps</span> -aq<span class="token variable">)</span></span>  <span class="token comment">#删除所有容器 -aq就是-a -q 类似 -am(git提交) 要先停止才能删除</span>\ndocker stop <span class="token variable"><span class="token variable">$(</span>docker <span class="token function">ps</span> -aq<span class="token variable">)</span></span>  <span class="token comment">#停止所有容器</span>\ndocker rmi 9873176a8ff5   <span class="token comment">#删除镜像(通过镜像id)</span>\ndocker run -it --rm  ubuntu  <span class="token function">cat</span> etc/resolv.conf  <span class="token comment">#查看ubuntu容器的dns</span>\ndocker-compose up -d <span class="token comment">#启动并运行整个应用程序(在后台)</span>\ndocker run --name nginx-test -p <span class="token number">8080</span>:80 -d nginx  <span class="token comment">#以name为nginx-test,本地端口代理容器80端口,在后台启动容器</span>\ndocker-compose --version  <span class="token comment">#查看docker-compose版本</span>\n<span class="token function">service</span> docker start  <span class="token comment">#启动docker服务</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p>docker-compose可以调用dockerfile和docker-compose.yml 运行多个容器</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">gitlab</span><span class="token punctuation">:</span>\n  <span class="token key atrule">image</span><span class="token punctuation">:</span> <span class="token string">&#39;gitlab/gitlab-ce:latest&#39;</span>\n  <span class="token key atrule">restart</span><span class="token punctuation">:</span> always\n  <span class="token key atrule">hostname</span><span class="token punctuation">:</span> <span class="token string">&#39;47.107.149.52&#39;</span>  <span class="token comment">#改成你部署的服务器(宿主机)的固定ip地址</span>\n  <span class="token key atrule">environment</span><span class="token punctuation">:</span>\n    <span class="token key atrule">GITLAB_OMNIBUS_CONFIG</span><span class="token punctuation">:</span> <span class="token punctuation">|</span><span class="token scalar string">\n      external_url &#39;http://47.107.149.52&#39;\n      # Add any other gitlab.rb configuration here, each on its own line</span>\n  <span class="token key atrule">ports</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> <span class="token string">&#39;5678:80&#39;</span>    <span class="token comment">#映射到本机的80端口防止端口占用 访问地址就是http://47.107.149.52</span>\n    <span class="token punctuation">-</span> <span class="token string">&#39;7443:443&#39;</span>\n  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>  <span class="token comment">#映射宿主机的文件目录到运行的镜像里面 保证镜像的重启等不会造成数据的丢失</span>\n    <span class="token punctuation">-</span> <span class="token string">&#39;/data/gitlab/config:/etc/gitlab&#39;</span>\n    <span class="token punctuation">-</span> <span class="token string">&#39;/data/gitlab/logs:/var/log/gitlab&#39;</span>\n    <span class="token punctuation">-</span> <span class="token string">&#39;/data/gitlab/data:/var/opt/gitlab&#39;</span>\n\n<span class="token key atrule">gitlab-runner</span><span class="token punctuation">:</span>\n  <span class="token key atrule">image</span><span class="token punctuation">:</span> gitlab/gitlab<span class="token punctuation">-</span>runner\n  <span class="token key atrule">restart</span><span class="token punctuation">:</span> unless<span class="token punctuation">-</span>stopped\n  <span class="token key atrule">privileged</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n  <span class="token key atrule">volumes</span><span class="token punctuation">:</span>\n    <span class="token punctuation">-</span> /data/runner/gitlab<span class="token punctuation">-</span>runner<span class="token punctuation">:</span>/etc/gitlab<span class="token punctuation">-</span>runner\n    <span class="token punctuation">-</span> /var/run/docker.sock<span class="token punctuation">:</span>/var/run/docker.sock  <span class="token comment">#宿主机机的docker.sock映射到镜像里面</span>\n    <span class="token punctuation">-</span> /usr/bin/docker<span class="token punctuation">:</span>/bin/docker <span class="token comment">#宿主机的docker可执行映射到镜像里面 后面build的时候会用到</span>\n\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p>进入gitlab文件夹里面启动docker</p><p>卡住 重启系统 结束进程</p>',16),p={render:function(n,s){return e}}}}]);