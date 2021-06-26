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
        link: 'https://zyzweb.github.io/zyzBlog/read/index.html'
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
          {text: '常见报错', link: '/doc/常见报错.md'},
          {text: '常用css mixin', link: '/doc/常用css mixin.md'},
          {text: '创建自定义事件', link: '/doc/创建自定义事件.md'},
          {text: '翻墙vpn', link: '/doc/翻墙vpn.md'},
          {text: '快捷键', link: '/doc/快捷键.md'},
          {text: '快速定位bug', link: '/doc/快速定位bug.md'},
          {text: '翻墙浏览器加载外部脚本(油猴等)vpn', link: '/doc/浏览器加载外部脚本(油猴等).md'},
          {text: '配置全局代理(浏览器代理用SwitchyOmega)', link: '/doc/配置全局代理(浏览器代理用SwitchyOmega).md'},
          {text: '搜索', link: '/doc/搜索.md'},
          {text: '提交规范', link: '/doc/提交规范.md'},
          {text: '性能优化', link: '/doc/性能优化.md'},
          {text: '需求和项目', link: '/doc/需求和项目.md'},
          {text: '总结', link: '/doc/总结.md'},
          {text: 'api', link: '/doc/api.md'},
          {text: 'chrome插件下载', link: '/doc/chrome插件下载.md'},
          {text: 'git', link: '/doc/git.md'},
          {text: 'github pages和github actions 使用', link: '/doc/github pages和github actions 使用.md'},
          {text: 'github', link: '/doc/github.md'},
          {text: 'homebrew安装', link: '/doc/homebrew安装.md'},
          {text: 'koa', link: '/doc/koa.md'},
          {text: 'Mac 安装git', link: '/doc/Mac 安装git.md'},
          {text: 'Mac使用', link: '/doc/Mac使用.md'},
          {text: 'node', link: '/doc/node.md'},
          {text: 'node调试', link: '/doc/node调试.md'},
          {text: 'switchyomega', link: '/doc/switchyomega.md'},
          {text: 'whistle调试', link: '/doc/whistle调试.md'},
          {text: 'Xcode下载', link: '/doc/Xcode下载.md'},
        ],
      },
    ],
  },
};
