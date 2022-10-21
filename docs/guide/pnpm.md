perfomance npm

支持 node 14+

特点: 安装速度快 占用磁盘小 更安全

pnpm workspace monorepo

```shell
pnpm install axios --filter zyzweb-one  #monorepo在packages/zyzweb-one安装axios
pnpm link ../../axios  #pnpm link  硬链接  npm link 是软链接

```



### 常用命令

```shell
npm install -g pnpm  #安装pnpm
npm up -g pnpm  #全局升级pnpm(无效)
pnpm add -g pnpm #升级pnpm(有效)
pnpm store prune #删除不再被引用的包
pnpm import  #从package-lock.json  yarn.lock  生成 pnpm-lock.yaml
pnpx 代替 npx
```

dd
