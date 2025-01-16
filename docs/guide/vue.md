



vue的核心是virtual dom和responsive,virtual dom的核心是diff算法，diff算法的核心是patchVnode和updateChildren  特点是同级比较,深度优先;responsive的核心是数据劫持,v2是用Object.defineProperties(),缺点是**深度监听低效以及不能动态监听复杂数据**,所以v3采用了proxy来代替;通过响应式系统触发数据的改变,接着通过virtual dom进行高效的dom更新



如果没有key，很容易出现就地复用的情况，导致更新出问题。如果用index做key，解决了key冲突的问题但是没有解决复用的问题。推荐用唯一标识做key比如id。diff算法是通过tag和key来确定vnode的





监听机制Proxy，支持tree-shaking（记录标识去除没使用的代码，最后生成，缩小体积）， fragment（一个组件包含多个根节点）和protal（在Dom中渲染一个subtree，而不需要在一个组件中）；插槽机制增强。产生的插槽都是函数，只会在子组件中重新渲染；自定义render



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





### vue2与vue3 区别

1. Object.defineProperty变为proxy

2. options api 变为 composition api

3. vue2是用Facebook的flow在某些情况下类型推断有问题,vue3用ts做类型推断

4. diff算法和渲染算法改变 

   > diff算法不再像vue2那样比对所有dom，而采用了block tree的做法
   >
   > 重新渲染的算法里也做了改进，利用了闭包来进行缓存



5. 生命周期钩子写法有变

6. v-model语法糖有变化

> 在vue2.0中v-mode语法糖简写的代码 `<Son :value="msg" @input="msg=$event" />`
>
> 在vue3.0中v-model语法糖有所调整：`<Son :modelValue="msg" @update:modelValue="msg=$event" />`

7. vue3可以使用fragment,vue2必须要有一个根元素



深度选择器用   :deep()



### vue2用vue3语法

@vue/composition-api





proxy.$router.push() === useRouter().push()

proxy.$route.query === useRoute().query



### 参考链接

[vue3-jsx-playground](https://vue-jsx-explorer.netlify.app/#const%20App%20%3D%20()%20%3D%3E%20%3Cdiv%3EHello%20World%3C%2Fdiv%3E)

[vue3-template-playground](https://template-explorer.vuejs.org/#eyJzcmMiOiI8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+Iiwib3B0aW9ucyI6e319)

[vue sfc playground](https://sfc.vuejs.org/#eNo9j71uwzAMhF+F5eIWqCV0NZQA3foGXbikjpw40B9EOR0EvXspp8imu9N9OFb8TEndN4sTGp7zmgqwLVs6Ulh9irlAhWwXaLDk6GGQrwMFCnMMXMDzBQ49fx2+rHMRvmN255fhjYLRD5yARBTrkzsVKwrAXD+Ote7l1owWtbtrSFuB++jj2boDoeSEEhn9bOM7PlaN/pTUjWOQ3bW36T9gwgl2p3uytmvCaymJJ615mfu1N1YxX7S8VN5CWb1Vlv34k+Mv2yxgwo5oFBq2P3/sZE8=)

[Vue3 AST测试网址 ](https://vue-next-template-explorer.netlify.app/#eyJzcmMiOiI8ZGl2PkhlbGxvIFdvcmxkPC9kaXY+Iiwib3B0aW9ucyI6e319)

[关于 Vue2 不能 watch 数组 和 对象变化的解决方案](https://ainyi.com/51)

[Vue2如何监听数组的变化](https://juejin.cn/post/6918652111542714381)

[Vue为何采用异步渲染](https://cloud.tencent.com/developer/article/1793444)

[vue源码解析](https://vue3js.cn/)

[vuemastery](https://www.vuemastery.com/)

[vueschool](https://vueschool.io/)

[udemy](https://www.udemy.com/)

[Vue3 入门指南与实战案例](https://vue3.chengpeiquan.com/)







https://juejin.cn/post/7058201396113309703    默认模板配置



[vue2迁移vue3](vue3 + element plus + vite 迁移实践)
