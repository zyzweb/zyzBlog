### module、chunk、bundle的区别

<img src="http://image.zhuyuanzheng1.top/image-20220507143912301.png" alt="image-20220507143912301" style="zoom:50%;" />

module，chunk 和 bundle 其实就是同一份逻辑代码在不同转换场景下的取了三个名字：

我们直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。





- [**Loaders**](https://www.webpackjs.com/concepts/loaders): loader 允许你在 `require()` 或“加载”的文件之前，先预处理文件。就像“任务执行器(task-runner)”

- [**插件(Plugin)**](https://www.webpackjs.com/concepts/plugins): 一个含有 `apply` 属性的 JavaScript 对象。该 `apply` 属性会在 webpack 编译时被调用，并能在整个编译生命周期访问。这些插件包通常以某种方式扩展编译功能。
- [**热模块替换(Hot Module Replacement(HMR))**](https://www.webpackjs.com/concepts/hot-module-replacement): 一个修改、添加或删除模块(modules)的过程，而正在运行中的应用程序无需重载加载整个页面



chunk，app.js是业务代码，vendor则是公共的第三方代码,例如vue，manifest.js则是运行时

第三方库很少改,可以缓存起来提高性能



tree shaking 只支持 esmodule

webpack5内置了terser-webpack-plugin,webpack4需要安装

webpack5支持持久缓存,webpack4只能缓存在内存中



Module Federation webpack5  作用微前端 减少编译体积

mfsu   Module Federation Speed Up  umi使用(基于Module Federation)



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



### 参考文章

[webpack运行原理](https://github.com/ShowJoy-com/showjoy-blog/issues/7)

[mfsu介绍](https://zhuanlan.zhihu.com/p/385272270)

[webpack5与webpack4 tree-shaking对比](https://blog.csdn.net/gtLBTNq9mr3/article/details/112504161)

[电子书-深入浅出webpack](https://webpack.wuhaolin.cn/)