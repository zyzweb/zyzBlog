## DPR(devicePixelRatio)

window.devicePixelRatio = physical pixels / dips(device-independent pixels)

**所谓的 2 倍图 3 倍图也就是值的是屏幕 DPR 的值**

DPR 可以为小数也可以为整数 <mark>苹果提出视网膜屏幕开始，才出现设备像素比这个概念</mark>

屏幕缩放比例和浏览器缩放都会影响 devicePixelRatio 的值,在控制台会实时更新

笔记本分辨率 1920\*1080 放大 1.25 1920/1.25=1536 chrome 缩放 80% 为 1920 1/1.25/0.8=1

## 尺寸和分辨率

1k 分辨率 1920\*1080

2k 分辨率 2048\*1024

4k 分辨率 4096* 2160 3840* 2160（4K）1920\*1080 (1k)

MacBook Pro (Retina, 15-inch, Mid 2015) 15.4 英寸 (2880 x 1800) 1440x900

MacBook Pro(2021 m1 pro) 16 寸 3456 × 2234 1728x1117 **window.screen.width**

lg v40 6.4 寸 1440x3120 412x892

iphone6.7.8 都是 4.7 750x1334 375x667 **ppi326**

iphone6.7.8 plus 5.5 1920x1080 414x736 **DPR 3**

iphoneX 5.8 1125x2436 375x812 DPR 3

Iphone13 6.1 1170x2532 390x844 DPR 3

小米 9 6.39 2340x1080 393x851

## 常用术语

**pt**: point，点，印刷行业常用单位，等于 1/72 英寸

**ppi** pixel per inch 每英寸<mark>像素数</mark> 超 **300**人眼无法辨别针对屏幕固定 **决定屏幕清晰度,越大屏幕越清晰细腻**(人眼距离屏幕的距离也影响屏幕清晰度,越近要求 ppi 越高)

**dpi** dot per inch 每英寸<mark>点数</mark> 主要是对于打印机和鼠标,可调节 越大图片越细腻

**DPR**(device px ratio)设备像素比 物理像素/逻辑像素 缩放 100% === 几倍图 <mark>window.devicePixelRatio</mark>

**retina 屏幕** 屏幕的 ppi 高，肉眼分辨不出,一般指 ppi>326 的屏幕

**dp**: dip，Density-independent pixel, 是安卓开发用的长度单位，1dp 表示在屏幕像素点密度为 160ppi 时 1px 长度

\*sp\*\*: scale-independent pixel，安卓开发用的字体大小单位。

## 注意点:

- pt 与 px 可以换算
- dpi 最初是用在印刷上的,ppi 是电子屏幕 可认为 dpi = ppi
- 在移动端页面开发中尝试用到元信息配置<meta name="viewport" width="device-width">，添加这段代码后我们发现之前缩放的页面被放大了其实它的含义就是将视口设置为：CSS 像素=设备像素，即我们在页面中设置的 1 个 CSS 像素大小就等价于 1 个设备像素大小，在 PC 上看不到效果，但在移动端页面开发中我们就能看到很大的差异<img src="http://image.zhuyuanzheng.top/image-20220608233128495.png" alt="image-20220608233128495" style="zoom:33%;" />

设计工具排行榜 https://uxtools.co/tools/design

### 常见名称

ui

ue

ux

## figma

核心优势是支持 windows mac 团队协作好 社区完善 对性能要求不高

### 插件

figma Ex 字体选择

Heron Handoff 导出设计稿标注

Figma to HTML, CSS, React & more! 任何网站转化成 figma 设计稿

figma-icon-automation icon github npm

Chinese Font Picker 中文字体选择器

Unsplash 可商用图片资源
SmoothShadow 阴影调整器
Ul Faces 生成用户头像
Find and Replace 文本替换
Icons&Icons 图标资源库
Chinese User Data Generator 中文用户数据生成器

https://www.figma.com/downloads/ web 端使用本地字体

https://www.figma.cool/ figma 中文社区 dd

shift + 0 显示 100%

shift + 1 显示全部

### 字体

### 渐变

线性 径向 角度 菱形

躁光
对比度
饱和度
白平衡
看色
高光
阴影

纹理

描边

蒙版 对图像进行裁切 上层为图像，下层为遮罩

图层放在下面

图层模糊 背景模糊

### 1 倍图 2 倍图 === dpr

1 倍图 10\*10

2 倍图 20\*20

3 倍图 30\*30

pc 端 1920\*1080 用 1 倍图

移动端 750*1334 实际分辨率是 375 * 667 所以默认是 2 倍图

倍数越高在高分辨率屏幕下才越不容易模糊,也可以用 3 倍图适配所有,就是有点占空间

png24 位、png8 位

### pt 与 px

pt 是 1/72 英寸,是一个物理长度,px 是一个虚拟长度,2 者通过 DPI 联系(每英寸像素数)

Windows 系统默认是 96dpi，Apple 系统默认是 72dpi

windows 系统中 1pt = 96px/72 = 4/3 px

mac 系统中 1pt = 1px(1 倍图) 1pt=2px(2 倍图) 1pt=3px(3 倍图)

一倍图设计，切 svg 传阿里，前端想用几倍图自己去下就完事

插画是手绘的一种

## 色域

色域是对一种颜色进行编码的方法，也指一个技术系统能够产生的颜色的总和。由于技术限制，目前显示设备无法完全覆盖人眼所能观察到的可见光范围，为了表明不同设备所能呈现的色彩范围，就有了各种色域标准， 像 AdobeRGB、sRGB、Display P3 等的都是不同的色域标准

## ui 资源

<img src="http://image.zhuyuanzheng.top/image-20220817144336006.png" alt="image-20220817144336006" style="zoom:50%;" />

### 参考链接

[figmacode 专栏](https://figmacode.com/post/preparing)

[xd 下载安装](https://xclient.info/s/adobe-xd-cc.html) 密码 xclient.info

[figma 中文社区](https://www.figma.cool/)

[及时设计-设计知识手册](https://js.design/blogs/content/intro)

[设计理论-格式塔原理](https://zhuanlan.zhihu.com/p/52413528)

[android 设计规范](https://www.woshipm.com/ucd/895045.html)

[2022 年 iOS 设计规范](https://zhuanlan.zhihu.com/p/474522998)
