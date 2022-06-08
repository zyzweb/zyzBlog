### 接口依赖问题:

比如a -- b,b需要a返回的releaseId

**1. 设置全局变量releaseId**

<img src="http://image.zhuyuanzheng1.top/image-20220608232138686.png" alt="image-20220608232138686" style="zoom:33%;" />

**2. 将a请求返回的releaseId赋值到全局变量releaseId上**

<img src="http://image.zhuyuanzheng1.top/image-20220608232156956.png" alt="image-20220608232156956" style="zoom:33%;" />

**3. b请求直接引用全局变量releaseId**

<img src="http://image.zhuyuanzheng1.top/image-20220608232219906.png" alt="image-20220608232219906" style="zoom:33%;" />

4. **run collection一键顺序执行postman请求**