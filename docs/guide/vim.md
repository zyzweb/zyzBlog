vi和vim都是Linux中的编辑器，不同的是vim比较高级，可以视为vi的升级版本。 vi使用于文本编辑，但是vim更适用于coding



 vi有4个模式：插入模式、命令模式、普通模式。 插入模式：在此模式下可以输入字符，按ESC将回到命令模式  

可视模式v



```shell
#mac和linux自带
#配置文件  ~/ .vimrc ("开头为注释)
vim --version #查看版本
where vim #/usr/bin/vim

Vim [fileName] #编辑/新建文件
i, o,a  #进入输入模式
i #前面插入 
a #append  后面插入
o #下一行插入  O上一行插入 

X命令模式删除右边字符
backpace删除左边
:wq #保存退出
:q #退出
:q! #强制退出(不会保存修改)
:w [fileName] #保存文件名
: #切换到底线命令模式，以在最底一行输入命令(要先按esc)
Esc #退出底线命令模式/退出输入模式
0 #移动到行首 
b #前移一个单词  
2w #向前移动2个单词  w移动一个单词
3e #移动到第3个单词结尾  e移动一个单词结尾  end

dw #删除单词(包含空格)  delete wo rd
dd #删除一整行  可以3dd
de #删除单词(不包含空格)
d$ #从当前位置删除到结尾  $正则匹配结尾
x  #删除单个字符

#复制和粘贴
u #撤销上次命令  U撤销整行操作  undo 
p #粘贴  paste
yy #复制1行  yank  yaw 复制一个单词  yank all word 

#修改
rx #替换当前为x    replace
ce #修改到当前单词   change  cw  c2e  c$

#搜索和替换
/  #搜索(从前往后搜)  n下一个  N上一个 
?  #搜索(从后往前搜)
%  #匹配 ([{ 
:s/aaa/bbb #将所在行的aaa替换为bbb(替换一个)  :s/aaa/bbb/g (替换所有)

#光标的历史
control o # 前一个光标位置
control i # 后一个光标位置
control w # 切换窗口

#移动光标
hjkl 
gg  #开头  5gg 第5行
G #结尾
f a #移动到最近的a 

#写入文件
echo sss > a.json
node -version > b.json
```

<img src="https://image.zhuyuanzheng1.top/image-20220526220411169.png" alt="image-20220526220411169" style="zoom:50%;" />



### vim-plug管理插件

```shell
#vim-plug本身也是vim插件,用插件管理插件
#安装vim-plug(Unix下)
curl -fLo ~/.vim/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
    
#安装插件,把插件放在 begin和end中间,然后在vim中使用::命令调用
#~/.vimrc中
call plug#begin('~/.vim/plugged')
Plug 'mhinz/vim-startify'
call plug#end()

#删除插件,将.vimrc中的插件删除,然后在vim中使用:PlugClean命令调用

#更新插件  
:PlugUpdate  #只检查vim插件的更新,不能检查vim-plug的更新
:PlugUpgrade  #检查vim-plug的更新

:PlugStatus #查看插件状态
```



