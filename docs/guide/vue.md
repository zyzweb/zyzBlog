









### 父子组件生命周期(应用场景在子组件加v-if等数据请求完了之后在渲染子组件)

```shell
#加载渲染过程
父beforeCreate->父created->父beforeMount->子beforeCreate->子created->子beforeMount->子mounted->父mounted
#销毁过程
父beforeDestroy->子beforeDestroy->子destroyed->父destroyed
#简易过程
父create->子created->子mounted->父mounted
```



### 单一组件生命周期

```shell
beforeCreate
created
beforeMount
mounted
beforeUpdate
updated
activated
deactivated
beforeDestroy
destroyed
errorCaptured
```



### vue router 原理

1. hash模式

   > 通过hashchange事件监听然后做对应操作
   >
   > location.hash跳转



2. history模式

   > 通过history.popState,当history变化时触发
   >
   > history.replaceState修改浏览器历史纪录中当前纪录
   >
   > history.pushState 浏览器历史纪录添加记录















### 参考链接

[Vue3 AST测试网址 ](https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+Iiwib3B0aW9ucyI6e319)

[关于 Vue2 不能 watch 数组 和 对象变化的解决方案](https://ainyi.com/51)

[Vue2如何监听数组的变化](https://juejin.cn/post/6918652111542714381)
