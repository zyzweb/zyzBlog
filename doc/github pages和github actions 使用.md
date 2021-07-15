# 	github pages和github actions 使用

### 一、建立仓库zyzBlog并新建master和gh-pages分支(**github现在默认分支为main分支,但是workflow默认为master需注意**)

### 二、在仓库设置环境变量(代码需和仓库设置保持一致)

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
    runs-on: ubuntu-latest   #虚拟机环境
    steps:
    - name: Checkout
      uses: actions/checkout@master
    - name: Install and Build
      run: |
        npm install
        npm run build
    - name: Deploy
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

