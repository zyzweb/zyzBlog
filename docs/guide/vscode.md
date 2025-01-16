### 设置层次关系

系统默认设置（不可修改）-- 用户设置 --工作区设置 --文件夹设置

可以设置不同的工作区,开启不同的插件,比如设置 python 工作区打开 python 插件,java 工作区就不打开

### Start Extension Bisect 二等分查找插件问题

### 自定义折叠代码

```shell
/* #region */
/* #endregion */
```

### 快捷键

```shell
command k + command 0  #全部折叠
command K + command j  #全部展开
command K + command 3/4 #按层次折叠
command K + command l  #切换折叠/展开
ctrl+shift+o  #导航文件
f2   ctrl f2  #前者重命名  后者更改所有匹配项    使用前者后者用替换代替
f12 == ctrl + 鼠标左键 #alt + f12 都是查看定义前者跳后者不跳  ctrl+alt+鼠标左键  在另一个窗口打开定义 === ctrl k f12
shift + f12 #查看引用
ctrl shift p +设置参数   #修改参数
f8 #循环错误

shift+alt +a  #块注释
ctrl shift \  #匹配对应的括号
alt 左右 #光标前进后退
Ctrl+Shift+Tab  #调出最近打开的文件列表，重复按会切换到上一个
alt shift a #块注释
```

### 插件

Settings Sync 同步多台电脑配置 只需要把配置上传到 GitHub，在另一个地方下载配置即可

### 设置

```shell
"search.followSymlinks":true  #然后设置为false    解决cpu100%占用
"files.autoGuessEncoding": true    #文件自动关联编码方式
"search.location": "sidebar"   #没有搜索标签
"snippetSuggestions"   #代码片段排列顺序
"breadcrumbs.enabled": true #文件导航
"workbench.editor.enablePreview": true #是否是预览编辑器，预览为斜体
"Files:Auto Guess Encoding" #改为false 解决utf-8编码问题
```

### 调试

==调试 script 脚本==

![image-20221013232524752](http://image.zhuyuanzheng.top/image-20221013232524752.png)

### tips

Scroll To Switch Tabs 滚动切换 tabs 按 shift 不切换

vscode 中使用 git 提交代码 如果出现冲突 打开终端看输出

自动闭合标签可以用来检测标签是否闭合

格式化 vue 中的 html vetur 默认是 prettyhtml

格式化 js 代码失效

### 参考链接

[Settings Sync 插件同步 vscode 设置](https://segmentfault.com/a/1190000020894066)

[csdn-vscode 设置 snippet](https://blog.csdn.net/maokelong95/article/details/54379046)

[掘金-vscode 设置 snippet](https://juejin.cn/post/6844903678994808845)
