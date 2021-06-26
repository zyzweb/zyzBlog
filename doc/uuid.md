```javascript
uuid
/**
\* 生成uuid
*
\* @export
\* @returns
*/
export function generateUUID() {
 const s = [];
 const hexDigits = '0123456789abcdef';
 for (let i = 0; i < 36; i++) {
  s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
 }
 s[14] = '4';
 s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
 s[8] = s[13] = s[18] = s[23] = '-';
 const uuid = s.join('');
 return uuid;
}

const nonceStr = generateUUID().replace(/-/g, '');
const sha256 = require('js-sha256').sha256;
const sign = sha256(this.information.agentNo + nonceStr);

nonceStr 鉴权参数    sign  鉴权参数

捕获返回键
window.wrapView.headerView.leftBtnClick = this.handleClickExplain.bind(this);
"inspect": "vue-cli-service inspect > output.js"
```



Anki

在salad设置—单词管理—检查anyConnect,然后自动保存就会放在自动保存卡片了