一. 建立仓库zyzBlog并新建master和gh-pages分支(**github现在默认分支为main分支,但是workflow默认为master需注意**)

二 . 在仓库设置环境变量(代码需和仓库设置保持一致)

创建github个人访问令牌

```yaml
ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
```

三、配置workflows设置

```yaml
# ci.yml
name: GitHub Actions Build and Deploy Blog
on:
  push:
    branches:
      - master #触发分支,其他分支提交不触发
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest   #虚拟机环境包含了nodejs
    steps:
    - name: Checkout
      uses: actions/checkout@master
    - name: Install and Build
      run: |
        npm install
        npm run build
    - name: Deploy github pages
      uses: JamesIves/github-pages-deploy-action@releases/v3
      with:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        BRANCH: gh-pages
        FOLDER: dist   #打包之后目录
        
    
```

四、注意事项

1. 日志默认保存30天
2. package.json添加homepage字段,部署后的根目录

```json
"homepage": "https://zyzweb.github.io/zyzBlog",
```

3. 只需设置环境变量,不需要设置仓库变量
4. github官方action地址 [github.com/actions](https://github.com/actions),还有[官方市场](https://github.com/marketplace?type=actions),[awesome actions](https://github.com/sdras/awesome-actions)仓库
5. GitHub Actions可免费用于公共仓库。对于私有仓库，它具有按需付费的机制
5. 

### 生成公钥和私钥的2种方法

1.阿里云的 ECS 控制台，在左侧菜单找到 < 网络与安全 > < 密钥对 >

2.通过命令  ssh-keygen



一般来说著名的linux系统基本上分两大类：
1.RedHat系列：Redhat、Centos、Fedora等
2.Debian系列：Debian、Ubuntu等
RedHat 系列
1 常见的安装包格式 rpm包,安装rpm包的命令是“rpm -参数”
2 包管理工具 yum
3 支持tar包
Debian系列
1 常见的安装包格式 deb包,安装deb包的命令是“dpkg -参数”
2 包管理工具 apt-get
3 支持tar包

