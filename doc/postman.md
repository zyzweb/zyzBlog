### 接口依赖问题:

比如a -- b,b需要a返回的releaseId

**1.设置全局变量releaseId**

![image-20210824180749409](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210824180749409.png)

**2.将a请求返回的releaseId赋值到全局变量releaseId上**

![image-20210824180956045](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210824180956045.png)

**3.b请求直接引用全局变量releaseId**

![image-20210824181025569](https://gitee.com/zyzcode/gitee-pic/raw/master/image-20210824181025569.png)

4.run collection一键顺序执行postman请求