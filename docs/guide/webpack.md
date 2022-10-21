### module、chunk、bundle的区别

<img src="https://image.zhuyuanzheng1.top/image-20220507143912301.png" alt="image-20220507143912301" style="zoom:50%;" />

module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：

我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。





- [**Loaders**](https://www.webpackjs.com/concepts/loaders): loader 允许你在 `require()` 或“加载”的文件之前，先预处理文件。就像“任务执行器(task-runner)”

- [**插件(Plugin)**](https://www.webpackjs.com/concepts/plugins): 一个含有 `apply` 属性的 JavaScript 对象。该 `apply` 属性会在 webpack 编译时被调用，并能在整个编译生命周期访问。这些插件包通常以某种方式扩展编译功能。
- [**热模块替换(Hot Module Replacement(HMR))**](https://www.webpackjs.com/concepts/hot-module-replacement): 一个修改、添加或删除模块(modules)的过程，而正在运行中的应用程序无需重载加载整个页面



chunk，app.js是业务代码，vendor则是公共的第三方代码,例如vue，manifest.js则是运行时

第三方库很少改,可以缓存起来提高性能



### tree shaking

**有副作用一定会被打包进bundle**

tree shaking 只支持 esm

最早由rollup提出,webpack2中开始支持,webpack4扩展了tree shaking检测能力

在package.json中使用sideEffects来配置副作用(比如polifill影响全局作用域)  

 usedExports依赖terser进行副作用检测 (使用/*#__PURE__*/)



webpack5内置了terser-webpack-plugin,webpack4需要安装

webpack5支持持久缓存,webpack4只能缓存在内存中



Module Federation webpack5  作用微前端 减少编译体积

mfsu   Module Federation Speed Up  umi使用(基于Module Federation)



### code-splitting(代码分割)

**作用**:允许开发者将代码分割成不同的包,然后可以按需加载或并行加载这些包,它可以用来实现更小的包,并控制资源加载优先级,如果使用正确，将对加载时间产生重大影响。

vue 路由组件和代码分割一起工作,动态导入组件(类似vue异步组件)

webpack external  外部引入插件也实现了代码分割的效果

### webpack执行流程

webpack启动后会在entry里配置的module开始递归解析entry所依赖的所有module，每找到一个module, 就会根据配置的loader去找相应的转换规则，对module进行转换后在解析当前module所依赖的module，这些模块会以entry为分组，一个entry和所有相依赖的module也就是一个chunk，最后webpack会把所有chunk转换成文件输出，在整个流程中webpack会在恰当的时机执行plugin的逻辑





### webpack5与webpack4 tree-shaking区别:

1.webpack5支持了commonjs的tree-shaking而webpack4不支持
2.webpack4需要手动开启,webpack5自动开启
3.webpack4不会分析模块的导出和引用之间的依赖关系;webpack 5 可以对模块中的标志进行分析,找出导出和引用之间的依赖关系,使得tree-shaking更彻底





dll-plugin把公共库打包成一个单独的库文件,以后只用打包业务代码,类似vite的预构建



hash的目的就是为了利用缓存

### 区分hash，contenthash，chunkhash

- hash：每次构建会生成一个hash。和整个项目有关，只要有项目文件更改，就会改变hash  (一般不用)
- contenthash：和单个文件的内容相关。指定文件的内容发生改变，就会改变hash。MiniCssExtractPlugin提取css,使用
- chunkhash：和webpack打包生成的chunk相关。每一个entry，都会有不同的hash (输出文件一般使用)







**plugin**

可以做的事情: 代码转换.文件优化代码分割.模块合并.自动刷新.代码校验.自动发布

webpack有内置插件和通过npm安装的第三方插件

htmlwebpackplugin 作用可以在src目录设置一个模板然后build时在dist文件夹生成对应的模板,并且可以对生成的模板(index.html)进行操作,比如删掉引号 变成一行,并且把对应的js css 引入进来

mini-css-extract-plugin  webpack抽离css插件

optimize-css-assets-webpack-plugin  压缩抽离的css

clean-webpack-plugin 删掉在打包

copyWebpackPlugin 复制进dist目录

bannerPlugin 内置  版权声明插件

------

**loader**

babel-loader @babel/core  @babel/preset-env  //将es6转es5

@babel/plugin-transform-runtime  //运行时的包

@babel/polyfill  //解析实例方法

url-loader //图片转为base64，减少请求书,但比原文件大1/3，http请求可以进行缓存

scss-loader将scss转换为css,用css-loader来读取css,用style-loader来插入style标签

vue-loader是一个webpack loader 只是专门用来解析 .vue文件

### file-loader与url-loader [链接](https://blog.csdn.net/wu_xianqiang/article/details/104558773)

file-loader 可以指定要复制和放置资源文件的位置，以及如何使用版本哈希命名以获得更好的缓存。此外，这意味着 你可以就近管理图片文件，可以使用相对路径而不用担心部署时 URL 的问题。使用正确的配置，webpack 将会在打包输出中自动重写文件路径为正确的 URL。

url-loader 允许你有条件地将文件转换为内联的 base-64 URL (当文件小于给定的阈值)，这会减少小文件的 HTTP 请求数。如果文件大于该阈值，会自动的交给 **file-loader** 处理

------

**5个部分**

entry 定义项目打包的入口文件一般为main.js

output

loader  webpack只能处理js文件 ,loader可以将其他文件转化成webpack能够处理的模块

plugin  打包优化和压缩 定义环境变量 很多功能

mode  development  production

------

webpack立刻读取webpack.config-.js文件，生成到dist目录下

webpack-dev-server 运行src下的代码，虚拟出build.js 测试

<img src="https://image.zhuyuanzheng1.top/image-20220612210931777.png" alt="image-20220612210931777" style="zoom:50%;" />

在全局安装babel-cli 然后运行命令 babel 路径名 可以将es6转换为es5  还可以用babel网址进行转换



webpack可以更改webpack.config.js文件名称 webpack --config 文件名

npm run dev (webpack-dev-server) 只是将项目运行在内存中然后运行,不会生成dist目录 默认8080

esllint eslint-loader 在打包之前进行代码的检验  写代码的时候可以关掉

webpack可以实现多页应用,创建多个js入口,对应多个出口,生成多个html页面,并且对应各自的js文件

webpack npm run build 可以时时监控 文件变化然后进行打包

将webpack放在服务端启动,他们公用端口,localhost:3000/user 就是直接访问服务端  不加/user就相当于访问的是 npm run dev这个中的index.html

https://segmentfault.com/a/1190000017066322  webpack4 optimization

webpack-merge 将相同配置抽取出来 用来将 webpack.base.conf.js和webpack.dev.conf.js合并

cp-cli(复制一个文件到另一个文件)   eg:   "build:ui": "cp-cli src/plugins  lib/plugins"

cross-env能跨平台地设置及使用环境变量

http://vuejs-templates.github.io/webpack/

Webpack 有两种组织模块依赖的方式，同步和异步。异步依赖作为分割点，形成一个新的块

loader它本身是一个函数，接受源文件作为参数，返回转换的结果

开启监听模式后，没有变化的模块会在编译后缓存到内存中，而不会每次都被重新编译，所以监听模式的整体速度是很快的

webpack-dev-serve是基于express的一层封装 express类似于jquery 为了简化操作,它将在 localhost:8080 启动一个 express 静态资源 web 服务器，并且会以监听模式自动运行 webpack  并且通过一个 socket.io 服务实时监听它们的变化并自动刷新页面。

**除了用webpack-dev-serve还可以用express webpack-dev-middleware 自己来配置服务器**

webpack --watch 会用terser-webpack-plugin替换掉uglifyjs-webpack-plugin解决uglifyjs不支持es6语法问题时监控代码,发生更改会重新编译

webpack-cli init

babel-loader

drop_console:true 压缩时将console去掉

环境变量 .env  https://segmentfault.com/a/1190000015133974

打包最好只打包自己的源代码

通过配置webpack externals可以在我们代码中通过import导入的时候，不去把node modules里面的文件打包进去

可以零配置 npx webpack  webpack 可以把node js代码 打包成在浏览器运行的代码(可以打包require)

webpack会调用webpack-cli



loader种类:  pre前面执行的loader normal普通loader内联loader后置

暴露全局

1. expose-loader 暴露在window上
2. providePlugin合每个入提供一个$
3. 引入不打包

给某一类文件加上cdn

 

### sourcemap(文件出错了会标识当前报错的列和行)

1. devtool:'source-map'，//增加映射文以帮我们调试源代码  不会产生单独的文件但是可以显示行和列

2. devtool:'eval-source-map'，//不会产生列但是是一个单独的映射文件

3. devtool:'cheap-module-source-map'，//产生后你可以保留起来  不会长生文件集成在打包后的文件中不会产生列

4. devtool：'cheap-module-eval-source-map'

   

采用多线程打包 Happypack 第三方模块,现在用thread loader代替

scope hosting 自动优化一些简单的代码

bin目录下 npm link

AST(abstract syntax tree)抽象语法树



### 参考文章

[webpack运行原理](https://github.com/ShowJoy-com/showjoy-blog/issues/7)

[mfsu介绍](https://zhuanlan.zhihu.com/p/385272270)

[webpack5与webpack4 tree-shaking对比](https://blog.csdn.net/gtLBTNq9mr3/article/details/112504161)

[电子书-深入浅出webpack](https://webpack.wuhaolin.cn/)





权限判断用位运算

