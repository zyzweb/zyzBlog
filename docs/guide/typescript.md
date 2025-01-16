好处: 

1. 编写代码,IDE可以提示(jsdoc也有这个作用)
2. 静态校验,提前发现错误
3. 更好的维护和重构





### decorator 装饰器(es7提出)

用来增强类的功能,是一个函数,存在于类和类的方法

参考https://es6.ruanyifeng.com/#docs/decorator







### interface 接口



```typescript
//元组   可以定义元素数量和类型 表示一个已知元素数量和类型的数组
//TS中数组元素类型必须一致，如需要不同元素，可以用元组了！
let x: [string,number] = ['hello', 2]
let fibonacci: number[] = [1, 1, 2, 3, 5]
let fibonacci: Array<number> = [1, 1, 2, 3, 5];  //数组泛型
type Lrc = Array<{
	lineTime: number,
	txt: string
}>

//对象数组
interface Goods {
  name: string
  price: number
  count: number
}

type GoodsList = Goods[]

const aaa: GoodsList = [
  {
    name: 'aaa',
    price: 1,
    count: 1,
  },
]

//枚举  用于取值被限定在一定范围内的场景,比如一周只能有七天,颜色限定为红绿蓝等

//支持可选链和??
const obj = { a: { b: [{ name: 'obj' }] } }
console.log(obj?.a?.b?.[0]?.name); // obj
const obj = { a : { name: 'obj'} }
obj?.a?.b ?? 'hello world' // hello world

const obj = {
 fun() {
   console.log('hello world')
 }
}
obj?.fun?.() // hello world
```



```typescript
// void表示没有返回值的函数
function alertName(): void {
    alert('My name is Tom');
}
//会有类型推断


//只读属性
interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any;
}

let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
};

tom.id = 9527;

// index.ts(14,5): error TS2540: Cannot assign to 'id' because it is a constant or a read-only property

//若A兼容B,那么A能够被断言为B,B也能被断言为A

//声明文件 .d.ts  使用@types统一管理第三方库的声明文件   https://github.com/DefinitelyTyped/DefinitelyTyped/
//三斜线用来声明模块间的依赖关系和import作用一样,但在书写一个全局变量的声明文件和依赖一个全局变量的声明文件必须使用 ///
//拆分声明文件的时候也要用 ///
//接口继承类」和「接口继承接口 本质一样
//泛型  指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性
```





### tsconfig.json

```shell
"allowJs": true  #允许编译js文件  
"allowSyntheticDefaultImports": true  #允许对不包含默认导出的模块使用默认导入
```







### 参考链接

[电子书-深入理解ts](https://jkchao.github.io/typescript-book-chinese/typings/types.html#%E4%BD%BF%E7%94%A8-types)

[typescript入门教程](https://ts.xcatliu.com/introduction/hello-typescript.html)

[tsconfig.json全解析](https://lq782655835.github.io/blogs/project/ts-tsconfig.html)

[Typescript 配置文件中的 target 选项 与 lib 选项的区别](https://www.bilibili.com/read/cv13643741/)

[查找类型定义文件的npm包](https://www.typescriptlang.org/dt/search?search=)

[github-DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/)
