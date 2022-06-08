实现版本有node-sass基于libsass(基于c++)  sass基于dart-sass(基于dark)  ruby-sass(已抛弃)







安装node-sass需要通过github下载binding.node,下载失败会尝试在本地编译binding.node,需要用到python

binding.node是二进制文件在npm库中没有





`node-sass` 是用 `node` (调用 `cpp` 编写的 `libsass`) 来编译 `sass`。

`dart-sass` 是用 `drat VM` 来编译 `sass`。

`node-sass` 是实时自动编译的，`dart-sass` 需要保存后才会生效



### css预处理时间线

- 2006 年底，Sass 问世，取义为 “Syntactically Awesome Style Sheets ”（即“语法上很棒的样式表”）。此版本是基于 Ruby 实现的编译器。最早是为了配合 HAML 而产生的（估计你都没听过这门语言，你可以想象成类似 Sass 缩进语法版本的 HTML）。这个时代前后端不分离才是主流，HAML 和 Sass 都是为了解决后端开发 Web 时的一些痛点而提出来的。
- 2007 年中，Less 问世，取义为 “ Leaner Style Sheets ”（即“更精简的样式表”）。这个就是基于 JS 实现的编译器，上手难度比 Sass 要低很多，所以迅速流行起来 —— Less 完全兼容 CSS 语法、还不用安装 Ruby 环境，那个时候 jQuery 还是主流呢，你让前端程序员懂怎么用 Ruby 可太难了。
- 2009 年中，Node.js 横空出世。记住这个里程碑的时间点。
- 2010 年初， Stylus 问世。这是一个来自 Node.js 社区的项目，一开始的设计目标就是与 Node.js 相结合，此时的 Sass 也好、Less 也罢，都与 Node.js 集成起来还比较麻烦，所以 Stylus 一开始也收获了一批拥趸。
- 同年年中，Sass 社区受到 Less 和 Stylus 的影响（主要是 Less），发布了 SCSS。注意，官方的称呼里 Sass 后三个字母一直就是小写的，而 SCSS 一直就是全大写的，因为 SCSS 是 “ Sassy CSS” 的缩写。Sass 和 SCSS 都是用的同一个编译器。至于二者语法上的区别，前面 [@唯一丶](https://segmentfault.com/u/weiyi_5b04fb4aa815a) 已经提到过了，不再赘述。
- 2012 年初，Sass/SCSS 出现了基于 C++ 实现的新版编译器，即 node-sass。
- 2016 年底，Sass/SCSS 出现了基于 Dart 实现的新版编译器，即 dart-sass。



