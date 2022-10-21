**本文参加了由**[公众号@若川视野](https://lxchuan12.gitee.io) **发起的每周源码共读活动，**[点击了解详情一起参与。](https://juejin.cn/post/7079706017579139102)



### 核心代码

```javascript
export default function arrify(value) {
	if (value === null || value === undefined) {
		return [];
	}

	if (Array.isArray(value)) {
		return value;
	}

	if (typeof value === 'string') {
		return [value];
	}

	if (typeof value[Symbol.iterator] === 'function') {
		return [...value];
	}

	return [value];
}
```

### 关键点

1. 具有Iterator的接口的数据结构的Symbol.iterator属性是一个函数
2. 扩展运算符（...）会调用默认的 Iterator 接口
3. 字符串有iterator接口但是没有扩展运算符



#### 迭代器的三个作用

1. 为各种数据结构，提供一个统一的、简便的访问接口；

2. 使得数据结构的成员能够按某种次序排列；

3. ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费



#### for of的优点

1. 跟for in一样简洁
2. 不同于`forEach`方法，它可以与`break`、`continue`和`return`配合使用
3. 提供了遍历所有数据结构的统一操作接口



#### 原生具备 Iterator 接口的数据结构

- Array
-  Map
- Set
-  String
- TypedArray
- 函数的 arguments 对象
- NodeList 对象

> xo底层封装了eslint,做代码格式检验,校验通过才能继续下一步
>
> ava是一个测试框架,可以并发执行,类似mocha
>
> tsd用来检测typescript类型定义
>
> 

### 其他

<img src="https://image.zhuyuanzheng1.top/image-20220602151522040.png" alt="image-20220602151522040" style="zoom:70%;" />

<img src="https://zhuyuanzheng1.top/image-20220602151657665.png" alt="image-20220602151657665" style="zoom:57%;" />

<img src="https://image.zhuyuanzheng1.top/image-20220602153002270.png" alt="image-20220602153002270" style="zoom:67%;" />

<img src="https://image.zhuyuanzheng1.top/image-20220602153108708.png" alt="image-20220602153108708" style="zoom:57%;" />



### 参考链接

[阮一峰iterator](https://es6.ruanyifeng.com/#docs/iterator)

[npm包-xo](https://www.npmjs.com/package/xo)

[npm包-tsd](https://www.npmjs.com/package/tsd)

[迭代器与生成器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators#%E7%94%9F%E6%88%90%E5%99%A8%E5%87%BD%E6%95%B0)