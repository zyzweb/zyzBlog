



Tailwind CSS 



Windi CSS按需加载的Tailwind



UnoCSS css新引擎





移动端规范

```
body {
  font-family: "PingFang SC", -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Source Han Sans", "Noto Sans CJK Sc", "Microsoft YaHei", "Microsoft Jhenghei", sans-serif;
}
```

字重：400—常规、 600—中粗、700—超粗



引入字体

```css
@font-face {
  font-family: 'font';
  src: url("./font/HarmonyOS_Sans_SC_Regular.ttf");
  font-weight: normal;
  font-style: normal;
}
使用直接 font-family: "font"
```

### 模糊

filter: brightness(0.7) blur(50px);



backdrop-filter: blur(200px);





### 常见问题

竖向布局不用  flex: column

样式找不到问题,找父级或子集的样式或伪类

横向排列不压缩   父级 display:flex   子集  flex-shrink: 0;

修改line-height  height不生效 要修改 display:block

Position: absolut   z-index  能不设置就不设置,设置也往小的设置   不设置默认覆盖容器的背景,不会影响文字等的展示



```
flex: 1 1 198.5px;
```

更改背景色

```javascript
proxy.$refs.mask.style['background-image'] = `url(${bigPicture.value})`
```

### 浏览器窗口大小

![image-20220813111044986](https://image.zhuyuanzheng1.top/image-20220813111044986.png)





### 响应式

1. flexible 阿里已被淘汰(viewport已经被支持)
2. rem + vw + media查询限制最大值 最小值(现在用这种)

750(2倍图设计稿)中1rem=100px   对应iphone6/7/8 1rem=50px  html的font-size为50px  100/7.5=13.3vw

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

优点: 一行代码搞定   缺点:ie9一下不兼容





### 2倍图/3倍图设置方案(https://juejin.cn/post/6844903845617729549#heading-40)

1. media查询 (只适用于背景图) 分为pc优先和移动优先

2.  image-set (只适用于背景图)

3. srcset(使用image)

4. svg(推荐使用)

5. JavaScript拼接图片url(推荐使用)

   ```javascript
   const dpr = window.devicePixelRatio;
   const images =  document.querySelectorAll('img');
   images.forEach((img)=>{
     img.src.replace(".", `@${dpr}x.`);
   })
   ```

   

### 1px问题原因

是750px的设计稿上是UI设计师期待的1px物理像素，它对应实际375px稿子上的0.5px设备独立像素；
而0.5px设备独立像素对于IOS-8支持，对于安卓不支持；
所以安卓会将0.5px的设备独立像素渲染成1px的设备独立像素，也就是说，安卓在375px稿子上的设备独立像素为1px时，占2px物理像素，更粗



px转rem   https://github.com/flashlizi/cssrem  sublime插件

px2rem-loader

postcss-px-to-viewport



### 让z-index生效

1. 设置元素的position值为relative/absolute/fixed

2. 当opacity不为1或0时

3. 当transform不为none时

4. 当父元素设置display: flex | inline-flex时，子元素设置z-index




### 参考链接

[重新构想原子化 CSS](https://antfu.me/posts/reimagine-atomic-css-zh)

[自动换行 超出省略号](https://www.runoob.com/w3cnote/css-nowrap-break-word.html)

[cubic-bezier playground](https://cubic-bezier.com/#.17,.67,.83,.67)

[掘金-h5适配常见问题](https://juejin.cn/post/6885721051360133133#heading-18)