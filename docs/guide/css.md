Tailwind CSS

Windi CSS 按需加载的 Tailwind

UnoCSS css 新引擎

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

竖向布局不用 flex: column

样式找不到问题,找父级或子集的样式或伪类

横向排列不压缩 父级 display:flex 子集 flex-shrink: 0;

修改 line-height height 不生效 要修改 display:block

Position: absolut z-index 能不设置就不设置,设置也往小的设置 不设置默认覆盖容器的背景,不会影响文字等的展示

```
flex: 1 1 198.5px;
```

更改背景色

```javascript
proxy.$refs.mask.style['background-image'] = `url(${bigPicture.value})`;
```

### 浏览器窗口大小

![image-20220813111044986](http://image.zhuyuanzheng.top/image-20220813111044986.png)

### 响应式

1. flexible 阿里已被淘汰(viewport 已经被支持)
2. rem + vw + media 查询限制最大值 最小值(现在用这种)

750(2 倍图设计稿)中 1rem=100px 对应 iphone6/7/8 1rem=50px html 的 font-size 为 50px 100/7.5=13.3vw

<meta name="viewport" content="width=device-width, initial-scale=1.0" />

优点: 一行代码搞定 缺点:ie9 一下不兼容

### 2 倍图/3 倍图设置方案(https://juejin.cn/post/6844903845617729549#heading-40)

1. media 查询 (只适用于背景图) 分为 pc 优先和移动优先

2. image-set (只适用于背景图)

3. srcset(使用 image)

4. svg(推荐使用)

5. JavaScript 拼接图片 url(推荐使用)

   ```javascript
   const dpr = window.devicePixelRatio;
   const images = document.querySelectorAll('img');
   images.forEach(img => {
     img.src.replace('.', `@${dpr}x.`);
   });
   ```

### 1px 问题原因

是 750px 的设计稿上是 UI 设计师期待的 1px 物理像素，它对应实际 375px 稿子上的 0.5px 设备独立像素；
而 0.5px 设备独立像素对于 IOS-8 支持，对于安卓不支持；
所以安卓会将 0.5px 的设备独立像素渲染成 1px 的设备独立像素，也就是说，安卓在 375px 稿子上的设备独立像素为 1px 时，占 2px 物理像素，更粗

px 转 rem https://github.com/flashlizi/cssrem sublime 插件

px2rem-loader

postcss-px-to-viewport

### 让 z-index 生效

1. 设置元素的 position 值为 relative/absolute/fixed

2. 当 opacity 不为 1 或 0 时

3. 当 transform 不为 none 时

4. 当父元素设置 display: flex | inline-flex 时，子元素设置 z-index

### 参考链接

[重新构想原子化 CSS](https://antfu.me/posts/reimagine-atomic-css-zh)

[自动换行 超出省略号](https://www.runoob.com/w3cnote/css-nowrap-break-word.html)

[cubic-bezier playground](https://cubic-bezier.com/#.17,.67,.83,.67)

[掘金-h5 适配常见问题](https://juejin.cn/post/6885721051360133133#heading-18)
