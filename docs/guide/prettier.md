支持多语言,如 js jsx  vue  flow  ts  html  css等

原理:将代码解析为AST然后重新组装



### 常用命令

```shell
#可配合husky和lint-staged使用
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,json,css,md}": ["prettier --write", "git add"]
  }
}
prettier --write   #直接改写文件
```

