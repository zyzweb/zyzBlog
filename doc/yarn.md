还是用yarn 1.x ,yarn 2.x和3.x没有node_modules和npm pnpm有兼容问题

yarn workspace monorepo

```shell
yarn set version berry  #升级yarn到3.x
yarn set version classic  #1.22.19
yarn set version latest #升级至最新的发布版本
yarn --version #查看版本
```

### yarn降级

删掉 .yarn .yanrc 这些文件,在重新安装





### 常见问题

lerna ERR ! yarn install --mutex network:42424 --non-interactive -- hoist exit

Yarn 版本问题

npm rm yarn

npm i -g yarn@1.22.0

npm i -g yarn@1.21.1



### 参考链接

[升级Yarn 2，摆脱node_modules](https://segmentfault.com/a/1190000040520326)

