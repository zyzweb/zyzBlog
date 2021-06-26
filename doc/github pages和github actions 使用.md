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

