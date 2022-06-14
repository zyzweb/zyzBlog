module.exports = {
  title: "zyz Blog",
  description: "zyz Blog",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    lastUpdated: "上次更新",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "冴羽的 JavaScript 博客",
        items: [
          { text: "Github", link: "https://github.com/mqyqingfeng" },
          { text: "掘金", link: "https://juejin.cn/user/712139234359182/posts" },
        ],
      },
    ],
    sidebar: [
      {
        title: "Guide",
        path: "/guide/阿里云ECS",
        collapsable: false, // 不折叠
        children: [
          { title: "阿里云ECS", path: "/guide/阿里云ECS" },
          { title: "安装java环境", path: "/guide/安装java环境" },
          { title: "小程序 微信公众号", path: "/guide/小程序 微信公众号" },
        ],
      },
    ],
  },
};
