# 快速定位bug

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

![image-20210622142356613](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210622142356613.png)

https://juejin.cn/post/6844903844573347854

https://www.fundebug.com/
