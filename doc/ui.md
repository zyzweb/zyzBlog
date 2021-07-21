## DPR(devicePixelRatio)

window.devicePixelRatio = physical pixels / dips(device-independent pixels)

**所谓的2倍图3倍图也就是值的是屏幕DPR的值**

DPR可以为小数也可以为整数

屏幕缩放比例和浏览器缩放都会影响devicePixelRatio的值,在控制台会实时更新

笔记本分辨率 1920*1080 放大1.25 1920/1.25=1536 chrome缩放80% 为1920  1/1.25/0.8=1

## 尺寸和分辨率

MacBook Pro (Retina, 15-inch, Mid 2015) 15.4英寸 (2880 x 1800)   1440x900

lg v40  6.4寸1440x3120    412x892

iphone6.7.8都是4.7  375x667   1334x750 **ppi326**

iphone6.7.8 plus 5.5 1920x1080  414x736  **DPR 3**

小米9 6.39  2340x1080  393x851

iphonex  5.8  2436x1125  375x812

## 常用术语

**pt**: point，点，印刷行业常用单位，等于1/72英寸

**ppi** pixel per inch  每英寸的像素数 超 **300**人眼无法辨别针对屏幕固定  **决定屏幕清晰度,越大屏幕越清晰细腻**(人眼距离屏幕的距离也影响屏幕清晰度,越近要求ppi越高)

**dpi**  dot per inch 每英寸点数 主要是对于打印机和鼠标,可调节 越大图片越细腻

**DPR**(device px ratio)设备像素比  物理像素/逻辑像素  缩放100%

**retina屏幕**  屏幕的ppi高，肉眼分辨不出,一般指ppi>326的屏幕

**dp**: dip，Density-independent pixel, 是安卓开发用的长度单位，1dp表示在屏幕像素点密度为160ppi时1px长度

*sp**: scale-independent pixel，安卓开发用的字体大小单位。

## 注意点:

- pt与px可以换算

- dpi最初是用在印刷上的,ppi是电子屏幕 可认为 dpi = ppi
- 在移动端页面开发中尝试用到元信息配置<meta name="viewport" width="device-width">，添加这段代码后我们发现之前缩放的页面被放大了其实它的含义就是将视口设置为：CSS像素=设备像素，即我们在页面中设置的1个CSS像素大小就等价于1个设备像素大小，在PC上看不到效果，但在移动端页面开发中我们就能看到很大的差异

------

![image-20210719211559970](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210719211559970.png)

## XD下载安装

https://xclient.info/s/adobe-xd-cc.html

密码   xclient.info

