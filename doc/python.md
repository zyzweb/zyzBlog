用python 和pip3命令

### 安装

```shell
#	先安装xcode  command line tools homebrew
brew install python3  #安装python3
where python3.9  #找到python3.9
open ~/.bash_profile #打开.bash_profile 填写下方的(路径是上面的)

alias python=/opt/homebrew/bin/python3.9
export PYTHON_HOME=/opt/homebrew/bin/python3.9
export PATH=$PATH:$PYTHON_HOME/bin

在.zprofile中填写一样的,把python3作为默认的python
```

### pip命令(都是全局包没有局部包一说)

```shell
#配置文件位置  ~/.pip/pip.conf
pip --version #查看pip版本
pip list  #查看已经安装的包
pip3 show click #查看包的位置  /opt/homebrew/lib/python3.9/site-packages
pip3 uninstall numpy #删除包
pip install numpy  #安装包
```

### 执行python

```shell
# 方式一
python do_generator.py 

#方式二 
#指定python所在路径，修改文件为可执行文件，然后直接运行文件
#!/usr/bin/env python3    
print('Hello, world')

#方式三 
#vscode code runner  可以直接执行


 #!/usr/bin/env node
 #!/bin/sh
```



