(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{554:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"wifi连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wifi连接"}},[s._v("#")]),s._v(" wifi连接")]),s._v(" "),t("p",[s._v("1.你的WiFi防护等级是WPA2或者更低等级，苹果认为WPA3（个人级）才是安全的，如果你的路由器管理没有这个选项，那只能说明你的路由器功能不够保护你的安全；")]),s._v(" "),t("p",[s._v("2.你的路由器防火墙未开启，导致苹果认定这个WiFi会有窃取信息的危险；")]),s._v(" "),t("p",[s._v("3.你未开启私有地址（个人MAC随机重置），MAC是链接WiFi的通行证，一般来说，每一个设备都有一个专用的MAC地址，但这样导致了一个问题——如果这个地址暴露，你后面的所有操作都会被窃听，所以苹果针对这个问题推出了私有地址功能：在每一次重新链接WiFi时都随机生成一个新的地址，这样就可以最大程度保证你的隐私安全")]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/usr/bin/env python")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -*- coding: UTF-8 -*-")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" re\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" requests\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__main__'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    session "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" requests"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n    base_headers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'User-Agent'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/48.0.2564.71 Safari/537.36 OPR/35.0.2066.23 (Edition beta)'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Referer'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://blog.bbzhh.com'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("headers "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" base_headers\n    resp "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" session"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("post"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://深信服认证主机IP/webAuth/'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户名'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'password'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'rememberPwd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'pwd'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'密码'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'secret'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'true'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("unicode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("resp"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("text"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'utf8'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h3",{attrs:{id:"清除dns缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#清除dns缓存"}},[s._v("#")]),s._v(" 清除dns缓存")]),s._v(" "),t("p",[s._v("输入：ipconfig /flushdns 释放DNS缓存")]),s._v(" "),t("p",[s._v("输入：netsh winsock reset 重置Winsock目录")])])}),[],!1,null,null,null);t.default=e.exports}}]);