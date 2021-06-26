# koa

在koa中，一切的流程都是中间件，数据流向遵循洋葱模型，先入后出，是按照类似堆栈的方式组织和执行的

数据先进入第一个中间件,最后从第一个中间件流出

koa2与koa1的最大区别是koa2实现异步是通过async/awaite，koa1实现异步是通过generator/yield，而express实现异步是通过回调函数的方式

koa2与express 提供的API大致相同，express是大而全，内置了大多数的中间件，更让人省心，koa2不绑定任何的框架，干净简洁，小而精，更容易实现定制化，扩展性好

## 异步的发展历程   回调函数--promise--Generato/yield--async/await(es7)

