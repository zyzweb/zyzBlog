### 接口依赖问题:

比如 a -- b,b 需要 a 返回的 releaseId

**1. 设置全局变量 releaseId**

<img src="http://image.zhuyuanzheng.top/image-20220608232138686.png" alt="image-20220608232138686" style="zoom:33%;" />

**2. 将 a 请求返回的 releaseId 赋值到全局变量 releaseId 上**

<img src="http://image.zhuyuanzheng.top/image-20220608232156956.png" alt="image-20220608232156956" style="zoom:33%;" />

**3. b 请求直接引用全局变量 releaseId**

<img src="http://image.zhuyuanzheng.top/image-20220608232219906.png" alt="image-20220608232219906" style="zoom:33%;" />

4. **run collection 一键顺序执行 postman 请求**
