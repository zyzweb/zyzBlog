# homebrew安装



/bin/zsh -c "**$**(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"

选择1中科大镜像源



报错 **Checksum mismatch**

删除`Archive:`后面路径下的文件 rm -rf /Users/aici/Library/Caches/Homebrew/portable-ruby--2.6.3.mavericks.bottle.tar.gz 然后再重新使用 brew update 命令 如果还是不行考虑下搭一个全局梯子



