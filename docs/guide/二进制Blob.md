### ArrayBuffer Blob  Buffer  File FileReader

Blob、ArrayBuffer、File可以归为一类，它们都是数据

- **Blob**: 前端的一个专门用于支持文件操作的二进制对象,非Javascript特有，计算机通用对象
- **File**: 继承了Blob的所有属性,可以看成是特殊的Blob
- **ArrayBuffer**：前端的一个通用的二进制缓冲区，类似数组，但在API和特性上却有诸多不同(比Blob处理更加精细)
- **Buffer**：Node.js提供的一个二进制缓冲区，常用来处理I/O操作
- **FileReader**  算是一种工具，用来读取数据
- **FormData **可以看做是一个应用数据的场景使用FormData我们可以异步上传一个二进制文件，而这个二进制文件，就是Blob对象
- 

### **file Blob String base64 ArrayBuffer可以相互转化**



<img src="http://image.zhuyuanzheng1.top/image-20220608220413007.png" alt="image-20220608220413007" style="zoom:33%;" />



**Blob与ArrayBuffer的关系**

- `ArrayBuffer`是底层二进制数据，可以借助工具进行读写，而`Blob`是对底层二进制数据的封装，我们拿到的就是一个整体，能够读取他的大小，类型，但是不能看到细节
- Blob可以接受一个`ArrayBuffer`作为参数生成一个`Blob`对象，此行为就相当于对`ArrayBuffer`数据做一个封装，之后就是以整体的形式展现了
- Blob作为一个整体文件，适合用于传输；而只有需要关注细节（比如要修改某一段数据时），才需要用到`ArrayBuffer`



### 断点续传  分片下载



### 参考链接:

[聊聊JS的二进制家族：Blob、ArrayBuffer和Buffer](https://zhuanlan.zhihu.com/p/97768916)

[ArrayBuffer 与 Blob对象](https://juejin.cn/post/6844904022206332941)

[断点下载](https://segmentfault.com/a/1190000022164750)



