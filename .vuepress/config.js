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
  base: "/zyzBlog/",
  description: "用Vupress架Blog",
  themeConfig: {
    logo: 'https://gitee.com/zyzcode/gitee-pic/raw/master/20210626141637.png',
    navbar: [
      // NavbarItem
      // {
      //   text: 'guide',
      //   link: '/guide/1.md',
      // },
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
        children: ["/doc/常见报错.md", "/doc/常用css mixin.md"],
      },
      {
        isGroup: true,
        text: "Web",
        children: ["/doc/创建自定义事件.md", "/doc/翻墙vpn.md", "/doc/api.md"],
      },
    ],
  },
};
