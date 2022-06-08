一眼能看出来的除外

1.看能不能抓包,安卓packet capture;ios stream;windows fiddler;

macOs charles; whislte; noHost判断出前后端问题

2.养成规范的代码规范,也便于debug

3.css可以在element上删除,采用排除法,vue中同理删除watch,template;

4.断点调试

有些样式容易消失利用下面断点

setTimeout(() => {debugger}, 2000)

5.看本地能不能复现,不能复现就用生产的sourceMap

6.前端建立性能和错误监控系统,有时候也可以帮助排查,例如:sentry

7.熟悉流程业务也是帮你快速定位问题的关键,平时多看看了解一下系统

8.界面要用弹窗给出报错信息

9.代码多考虑格式对不对，不对就提示

10.兼容性问题可以多用几台手机,或者用云平台测,例如:岩鼠



这个功能正常情况下用处不大，普通的异常会在控制台显示，在控制台也能定位过去，可以定位过去之后再手工加断点， 但是对于catch 之后没有throw的代码，在控制台是看不到的，但是这个异常自动断点功能仍然能捕获到

<img src="http://image.zhuyuanzheng1.top/image-20220608221634694.png" alt="image-20220608221634694" style="zoom:33%;" />





### chrome devtools

inspect($('#juejin'))  定位到element

$$('#juejin')  相当于console.dir



### 微信webview调试

微信调试网页，正常来说你可以使用[微信开发者工具](https://link.juejin.cn?target=https%3A%2F%2Fmp.weixin.qq.com%2Fdebug%2Fwxadoc%2Fdev%2Fdevtools%2Fdownload.html)来在电脑端进行网页与微信的调试。当这种情况无法满足，你需要在真机上排查问题时，你需要使用腾讯 x5 开发的 [TBS Studio](https://link.juejin.cn?target=https%3A%2F%2Fx5.tencent.com%2Ftbs%2Fguide%2Fdebug%2Fseason1.html) 进行调试。它本质上和 `chrome://inspect` 方法类似，只是它为线上的微信包提供了 debug 模式，并将操作简单化。具体的使用方法可以参考官方文档：[x5.tencent.com/tbs/guide/d…](https://link.juejin.cn?target=https%3A%2F%2Fx5.tencent.com%2Ftbs%2Fguide%2Fdebug%2Fseason1.html)



### 参考链接:

 [调试element-ui源码](https://juejin.cn/post/7023254414009827365)

[本地sourcemap调试线上代码](https://tingsven.com/2019/09/11/Chrome-Devtool-Mapping-Sourcemap.html)

[掘金-玩转Chrome DevTools](https://juejin.cn/post/6844903844573347854)

[付费监控-fundebug](https://www.fundebug.com/)
