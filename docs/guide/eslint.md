ESLint 可以通过 .eslintrc 或 package.json 中的 eslintConfig 字段进行配置。

vue cli3中关闭eslint检测  vue.config.js  中添加 lintOnSave:false   关闭服务器端





代码注意点

[ ( ` 以这三个开头的时候注意要加一个分号

eslint插件都是eslint-plugin开头的

 extends中是预定义规则

quotes: ["warn", "double"], 必须是双引号,否则视为error

semi: "warn", 必须没有;否则视为warn

可以在不同的文件夹放.eslintrc文件

没有指定代码风格默认extends:eslint:recommended

```shell
/* eslint-disable */  #忽略全文
/* eslint-enable */  #取消忽略全文

@ts-ignore #当行忽略
@ts-nocheck #忽略全文
@ts-check  #取消忽略全文
#用eslint对typescript进行检测需要安装如下包
typescript
eslint   
@typescript-eslint/eslint-plugin  # 提供typescript语法规则
@typescript-eslint/parser  # 解析typescript



eslint
eslint-config-airbnb-base
eslint-config-prettier
eslint-plugin-import
eslint-plugin-prettier
eslint-plugin-vue



husky
lint-staged
```

### husky(git hook工具,能够提供钩子)

```shell
npm install husky --save-dev  #安装依赖
#husky支持的钩子 常见的有pre-commit pre-push commit-msg  详细看https://git-scm.com/docs/githooks
# 方法一放在package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "npm run test",
      "pre-push": "npm  run test",
    }
  }
}

# 方法二放在.huskyrc，.huskyrc.json，.huskyrc.js  .husky目录
```

### commitlint(提供提交规范和对规范的校验) 

```shell
npm install --save-dev @commitlint/config-conventional @commitlint/cli  #安装依赖
#配置文件commitlint.config.js 或 .commitlintrc.js
```

### lint-staged(文件过滤工具,过滤出暂存区文件,只是一个平台不提供格式化功能) 依赖husky   

```shell
#package.json中引入或者.lintstagedrc、lint-staged.config.js
"lint-staged": {
    "*.js": ["eslint --fix", "git add"]
  }
```







### stylelint











## 代码提交规范

### 1. git Husky 和 eslint

项目开发一般使用了 eslint ，但是不能保证组员提交代码之前都将 eslint 中的问题解决掉了：

- 也就是我们希望保证代码仓库中的代码都是符合 eslint 规范的；

- 那么我们需要在组员执行 `git commit ` 命令的时候对其进行校验，如果不符合 eslint 规范，那么自动通过规范进行修复；

那么如何做到这一点呢？可以通过 Husky 工具：

- husky 是一个 git hook 工具，可以帮助我们触发 git 提交的各个阶段：pre-commit、commit-msg、pre-push

如何使用 husky 呢？

这里我们可以使用自动配置命令：

```shell
npx husky-init && npm install
```

注意：

```shell
如果在编辑器终端安装需要把&&放在引号""里面。
```

这里会做三件事：

1.安装 husky 相关的依赖：

![huksy](http://static01.imgkr.com/temp/627e32430c174e14b5e1bca9059e3d59.jpg)

2.在项目目录下创建 `.husky` 文件夹：

```
npx huksy install
```

![huksy](https://tva1.sinaimg.cn/large/008i3skNgy1gsqq16zo75j307703mt8m.jpg)

3.在 package.json 中添加一个脚本：

![package.json](https://tva1.sinaimg.cn/large/008i3skNgy1gsqq26phpxj30dj06fgm3.jpg)

接下来，我们需要去完成一个操作：在进行 commit 时，执行 lint 脚本：

![pre-commit](http://static01.imgkr.com/temp/7fea73aa8ecd421fae9143a34054c7e4.jpg)

这个时候我们执行 git commit 的时候会自动对代码进行 lint 校验。

### 2. git commit 规范

#### 2.1. 代码提交风格

通常我们的 git commit 会按照统一的风格来提交，这样可以快速定位每次提交的内容，方便之后对版本进行控制。

![](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw17gaqjj30to0cj3zp.jpg)

但是如果每次手动来编写这些是比较麻烦的事情，我们可以使用一个工具：Commitizen

- Commitizen 是一个帮助我们编写规范 commit message 的工具；

1. 安装 Commitizen

```shell
npm install commitizen -D
```

2. 安装 cz-conventional-changelog，并且初始化 cz-conventional-changelog：

```shell
npx commitizen init cz-conventional-changelog --save-dev --save-exact
```

这个命令会帮助我们安装 cz-conventional-changelog：

![image-20210723145249096](https://tva1.sinaimg.cn/large/008i3skNgy1gsqvz2odi4j30ek00zmx2.jpg)

并且在 package.json 中进行配置(自动生成)：

![](https://tva1.sinaimg.cn/large/008i3skNgy1gsqvzftay5j30iu04k74d.jpg)

这个时候我们提交代码需要使用 `npx cz`：

- 第一步是选择 type，本次更新的类型

| Type     | 作用                                                                                   |
| -------- | -------------------------------------------------------------------------------------- |
| feat     | 新增特性 (feature)                                                                     |
| fix      | 修复 Bug(bug fix)                                                                      |
| docs     | 修改文档 (documentation)                                                               |
| style    | 代码格式修改(white-space, formatting, missing semi colons, etc)                        |
| refactor | 代码重构(refactor)                                                                     |
| perf     | 改善性能(A code change that improves performance)                                      |
| test     | 测试(when adding missing tests)                                                        |
| build    | 变更项目构建或外部依赖（例如 scopes: webpack、gulp、npm 等）                           |
| ci       | 更改持续集成软件的配置文件和 package 中的 scripts 命令，例如 scopes: Travis, Circle 等 |
| chore    | 变更构建流程或辅助工具(比如更改测试环境)                                               |
| revert   | 代码回退                                                                               |

- 第二步选择本次修改的范围（作用域）

![image-20210723150147510](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8ca15oj30r600wmx4.jpg)

- 第三步选择提交的信息

![image-20210723150204780](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8mq3zlj60ni01hmx402.jpg)

- 第四步提交详细的描述信息

![image-20210723150223287](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw8y05bjj30kt01fjrb.jpg)

- 第五步是否是一次重大的更改

![image-20210723150322122](https://tva1.sinaimg.cn/large/008i3skNgy1gsqw9z5vbij30bm00q744.jpg)

- 第六步是否影响某个 open issue

![image-20210723150407822](https://tva1.sinaimg.cn/large/008i3skNgy1gsqwar8xp1j30fq00ya9x.jpg)

我们也可以在 scripts 中构建一个命令来执行 cz(npx cz 或者 yarn/npm commit)：

![image-20210723150526211](https://tva1.sinaimg.cn/large/008i3skNgy1gsqwc4gtkxj30e207174t.jpg)

### 3. 代码提交验证

如果我们按照 cz 来规范了提交风格，但是依然有同事通过 `git commit` 按照不规范的格式提交应该怎么办呢？

- 我们可以通过 commitlint 来限制提交；

1. 安装 @commitlint/config-conventional 和 @commitlint/cli

```shell
npm i @commitlint/config-conventional @commitlint/cli -D
```

2. 在根目录创建 commitlint.config.js 文件，配置 commitlint

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
}
```

3. 使用 husky 生成 commit-msg 文件，验证提交信息：

```shell
npx husky add .husky/commit-msg "npx --no-install commitlint --edit $1"
```



https://github.com/Zhengqbbb/cz-git



提供一套eslint规范



### 参考链接

[简书-eslint入门学习整理](https://www.jianshu.com/p/f2f06a0e154b)

[segmentfault-代码风格自动化](https://segmentfault.com/a/1190000017790500)