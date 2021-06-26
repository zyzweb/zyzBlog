module.exports = {
  lang: "zh",
  title: "zyz Blog",
  head: [
    [ "link", 
      { 
        rel: "icon", href: "https://gitee.com/zyzcode/gitee-pic/raw/master/20210626141637.png",
      }
    ],
    ["script",
      { 
        src: "https://kit.fontawesome.com/e6a339ae70.js",crossorigin: "anonymous",
      }
    ]
    // ["style",{ src: "/blog-vuepress/style/base.css"}]
  ],
  dest: "dist",
  public: "public",
  base: "/zyzBlog/",
  description: "用Vupress架Blog",
  themeConfig: {
    logo: 'https://gitee.com/zyzcode/gitee-pic/raw/master/20210626141637.png',
    navbar: [
      {
        text: '前端网站导航',
        children: [
          {text: '前端网站导航', link: 'https://zyzweb.github.io/zyzBlog/前端网站导航.html'},
          {text: 'css常用技巧', link: 'https://zyzweb.github.io/zyzBlog/css常用技巧.html'},
          {text: 'vuejs网站导航', link: 'https://zyzweb.github.io/zyzBlog/vuejs网站导航.html'},
        ]
      },
      {
        text: '读书笔记',
        link: '/read/index.html'
      },
      {
        text: '做过的项目',
        children: [
          {text: '网易音乐播放器', link: 'https://zyzweb.github.io/zyzBlog/music/index.html'}
        ]
      },
      {
        text: 'gitee链接',
        link: 'https://gitee.com/zyzcode/'
      }

      // NavbarItem
      // {
      //   text: '',
      //   link: ''
      // }

      // NavbarGroup
      // {
      //   text: 'Group',
      //   children: ['/group/foo.md', '/group/bar.md'],
      // },
      //'/guide/1.md',
    ],

    sidebar: [
      {
        text: "Home",
        link: "/",
        children: [
          {
            text: "github链接",
            link: "https://github.com/zyzweb",
            children: [],
          },
        ],
      },
      {
        isGroup: true,
        text: "Guide",
        children: [
          "/doc/常见报错.md", 
          "/doc/常用css mixin.md", 
          "/doc/创建自定义事件.md", 
          "/doc/翻墙vpn.md",
          "/doc/快捷键.md",
          "/doc/快速定位bug.md",
          "/doc/浏览器加载外部脚本(油猴等).md",
          "/doc/配置全局代理(浏览器代理用SwitchyOmega).md",
          "/doc/搜索.md",
          "/doc/提交规范.md",
          "/doc/性能优化.md",
          "/doc/需求和项目.md",
          "/doc/总结.md",
          "/doc/api.md",
          "/doc/chrome插件下载.md",
          "/doc/git.md",
          "/doc/github pages和github actions 使用.md",
          "/doc/github.md",
          "/doc/homebrew安装.md",
          "/doc/koa.md",
          "/doc/Mac 安装git.md",
          "/doc/Mac使用.md",
          "/doc/node.md",
          "/doc/node调试.md",
          "/doc/switchyomega.md",
          "/doc/whistle调试.md",
          "/doc/Xcode下载.md",
        ],
      },
    ],
  },
};
