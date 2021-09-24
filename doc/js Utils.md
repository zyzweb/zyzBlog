```javascript
// noinspection JSDuplicatedDeclaration,ES6ConvertVarToLetConst
/**
 *  0: ios
 *  1: android
 *  2: 其它
 */
function getOSType() {
  let u = navigator.userAgent, app = navigator.appVersion;
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  let isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  if (isIOS) {
    return 0;
  }
  if (isAndroid) {
    return 1;
  }
  return 2;
}

/**
 * 判断是否在微信
 * 判断是否在钉钉看有没有dingtalk字符串
 * @returns {boolean}
 */
function isweixin() {
  const ua = window.navigator.userAgent.toLowerCase();
  return ua.search("micromessenger") > -1;
}

/**
 * 判断2个数组是否相等
 * @param {array} a 数组1
 * @param {array} b 数组2
 */
function isArrayEqual(a,b,res=true) {
  if(a.length !== b.length) return (res = false)
  const s = new Set(b)
  if(a.find(x => !s.has(x))) return (res = false)
  return res
}

/**
 * 将小数转化为百分数
 * @param  number 小数
 * @param  digit 保留位数
 */
function numPercentage(number, digit=2) {
  return (Math.abs(Number(number) * 100)).toFixed(digit) + '%'
}


/**
 * 函数防抖
 * @param { function } func

 * @param { number } wait 延迟执行毫秒数

 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
export function debounce(func,wait,immediate) {
  let timeout;
  return function () {
    let context = this;
    let args = arguments;

    if (timeout) clearTimeout(timeout);
    if (immediate) {
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow) func.apply(context, args)
    }
    else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }

  }
}
/**
 * 倒计时(剩余时间)
 * @param { number }毫秒数
 */
timeLeft(hmin) {
  if(hmin < 1000) return '00:00:00'
  let time = parseInt(hmin/1000);
  let hour = Math.floor(time/60/60);
  time = time - hour * 60 * 60
  if(hour < 10) {
    hour = '0' + hour
  }
  let min = Math.floor(time/60);
  time = time - min * 60;
  if(min < 10) {
    min = '0' + min
  }
  if( time < 10) {
    time = '0' + time
  }
  return `${hour} 小时 ${min} 分 ${time} 秒`
}

// 时间格式化
formatDay(val) {
  const date = new Date(val)
  if (!!date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hours = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    if (hours < 10) {
      hours = '0' + hours
    }
    if (minutes < 10) {
      minutes = '0' + minutes
    }
    if (seconds < 10) {
      seconds = '0' + seconds
    }

    return `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`
  }
}

/**
 * 函数节流
 * @param { function } func 函数

 * @param { number } wait 延迟执行毫秒数

 * @param { number } type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait ,type) {
  let previous, timeout;
  if(type===1){
    previous = 0;
  }else if(type===2){
    timeout = null;
  }
  return function() {
    let context = this;
    let args = arguments;
    if(type===1){
      let now = Date.now();

      if (now - previous > wait) {
        func.apply(context, args);
        previous = now;
      }
    }else if(type===2){
      if (!timeout) {
        timeout = setTimeout(() => {
          timeout = null;
          func.apply(context, args)
        }, wait)
      }
    }

  }
}

/**
 * 判断数据类型
 * @param {*} target
 */
function type(target) {
  let ret = typeof(target);
  let template = {
    "[object Array]": "array",
    "[object Object]":"object",
    "[object Number]":"number - object",
    "[object Boolean]":"boolean - object",
    "[object String]":'string-object'
  };

  if(target === null) {
    return 'null';
  }else if(ret == "object"){
    let str = Object.prototype.toString.call(target);
    return template[str];
  }else{
    return ret;
  }
}

//修改对象数组里的对象属性名
//1）JSON.stringify()把json对象转成json字符串；
//2）使用正则的replace()方法替换属性名；
//3）JSON.parse()把json字符串又转成json对象。
JSON.parse(JSON.stringify(data).replace(/name1/g, 'new_name1').replace(/name2/g, 'new_name2').replace(/name3/g, 'new_name3')...)   

/**
 * 日期格式化
 * @param {String} str 格式为yyyymm或者yyyymmdd
 * @return {String} 2021-09-12/2021-09
 */
function formatDate(str) {
  /* eslint-disable arrow-body-style */
  return str.replace(/(\d{4})(\d{2})(\d{2})?/g, function ($1, $2, $3, $4) {
    return !$4 ? $2 + '-' + $3 : $2 + '-' + $3 + '-' + $4;
  });
}
formatDate('20210912') //"2021-09-12"
formatDate('202109') //"2021-09"

/**
 * 各种日期格式化
 * @param date
 * @return {string}  8月7日
 */
function formatTime(date) {
  if(!!date){
    if(!(date instanceof Date))
      date = new Date(date);
    var month = date.getMonth() + 1
    var day = date.getDate()
    return `${month}月${day}日`;
  }
}

/**
 * @param date
 * @return {string}  2021-08-03
 */
function formatDay(date) {
  if(!!date){
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return [year, month, day].map(formatNumber).join('-');
  }
}
function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

/**
 * @param date
 * @return {string} 2021/08/03
 */
function formatDay2(date) {
  if(!!date){
    var year = date.getFullYear()
    var month = date.getMonth() + 1
    var day = date.getDate()
    return [year, month, day].map(formatNumber).join('/');
  }
}

/**
 * 获取星期几
 * @param date
 * @return {string}
 */
function formatWeek(date){
  if(!!date){
    var day = date.getDay();
    switch (day) {
      case 0:
        return '周日'
        break;
      case 1:
        return '周一'
        break;
      case 2:
        return '周二'
        break;
      case 3:
        return '周三'
        break;
      case 4:
        return '周四'
        break;
      case 5:
        return '周五'
        break;
      case 6:
        return '周六'
        break;
    }
  }
}

/**
 * 获取querystring,页面的参数
 * @param {String} name
 * @param {String} [url] url为空则为当前页面的url
 * @return {String|Null}
 */
function getQuery(name, url) {
  var u = url || window.location.search.replace('&amp;', '&');
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  var r = u.substr(u.indexOf('?') + 1).match(reg);

  return r != null ? r[2] : '';
}

/**
 * 将url参数转化为对象 http://url.com/page?n=Adam&s=Smith  {n: Adam, s:Smith}
 * @param url
 * @return {T}
 */
function getURLParameters(url) {
  return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
      (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
      {}
  )
}
getURLParameters('http://url.com/page?n=Adam&s=Smith'); // {n: 'Adam', s: 'Smith'}
getURLParameters('google.com'); // {}
/**
 * 获取滚动条距顶部的巨鹿
 */
function topDistance() {
  return document.documentElement.scrollTop || document.body.scrollTop
}

/**
 * 滚动到指定元素区域
 * @param element 要滚到的元素
 */
function smoothScroll(element) {
  document.querySelector(element).scrollIntoView({
    behavior: 'smooth'
  });
}
smoothScroll('#fld_6')

/**
 * 滚动到顶部(平滑)
 */
function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

/**
 * 加法函数（精度丢失问题）
 * @param { number } arg1
 * @param { number } arg2
 */
function add(arg1, arg2) {
  let r1, r2, m;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  return (arg1 * m + arg2 * m) / m
}

/**
 * 减法函数（精度丢失问题）
 * @param { number } arg1
 * @param { number } arg2
 */
function sub(arg1, arg2) {
  let r1, r2, m, n;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return Number(((arg1 * m - arg2 * m) / m).toFixed(n));
}

/**
 * 乘法函数（精度丢失问题）
 * @param { number } num1
 * @param { number } num2
 */
function mcl(num1,num2){
  let m=0,s1=num1.toString(),s2=num2.toString();
  try{m+=s1.split(".")[1].length}catch(e){}
  try{m+=s2.split(".")[1].length}catch(e){}
  return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);
}


/**
 * 除法函数（精度丢失问题）
 * @param { number } num1
 * @param { number } num2
 */
function division(num1,num2){
  let t1,t2,r1,r2;
  try{
    t1 = num1.toString().split('.')[1].length;
  }catch(e){
    t1 = 0;
  }
  try{
    t2=num2.toString().split(".")[1].length;
  }catch(e){
    t2=0;
  }
  r1=Number(num1.toString().replace(".",""));
  r2=Number(num2.toString().replace(".",""));
  return (r1/r2)*Math.pow(10,t2-t1);
}

/**
 * localStorage储存
 * @param { String } key  属性
 * @param { string } value 值
 */
function localStorageSet(key, value) {
  if (typeof (value) === 'object') value = JSON.stringify(value);
  localStorage.setItem(key, value)
}

/**
 * 生成随机id (uuid) 默认8位
 * @param {*} length
 * @param {*} chars
 */
function uuid(length, chars) {
    chars =
        chars ||
        '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    length = length || 8
    var result = ''
    for (var i = length; i > 0; --i)
        result += chars[Math.floor(Math.random() * chars.length)]
    return result
}
uuid()  


/**
 *生成随机号码,前3位随机 + 后8位随机
 */
function getMoble() {
  var prefixArray = ["130", "131", "132", "133", "135", "137", "138", "170", "187", "189"];
  var i = parseInt(10 * Math.random());
  var prefix = prefixArray[i];
  for (var j = 0; j < 8; j++) {
      prefix = prefix + Math.floor(Math.random() * 10);
  }
  return prefix;
}

/**
 * http跳转https
 */
function httpsRedirect() {
  if (location.protocol !== 'https:') location.replace('https://' + location.href.split('//')[1]);
}

/**删除url中指定的参数
 * @param { string } name
 */
function funcUrlDel(name){
  var loca =location;
  var baseUrl = loca.origin + loca.pathname + "?";
  var query = loca.search.substr(1);
  if (query.indexOf(name)>-1) {
    var obj = {};
    var arr = query.split("&");
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].split("=");
      obj[arr[i][0]] = arr[i][1];
    }
    delete obj[name];
    var url = baseUrl + JSON.stringify(obj).replace(/[\"\{\}]/g,"").replace(/\:/g,"=").replace(/\,/g,"&");
    return url
  }
}
window.location.href = 'http://172.16.5.140:8097/public/pages/index.html?act_id=GhEpLBs/FzQYFAR4'
funcUrlDel('act_id') //'http://172.16.5.140:8097/public/pages/index.html?'

/**
 * 获取cookie
 * @param {String} name
 * @return {String|Null}
 */
function getCookie(name) {
  var reg = new RegExp('(^| )' + name + '(?:=([^;]*))?(;|$)');
  var val = document.cookie.match(reg);

  if (val) {
    return val[2] ? unescape(val[2]) : '';
  }
  return null;
}

/**
 * 设置cookie
 * @param {String} name
 * @param {String} value
 * @param {Number} [expires]
 * @param {Stirng} [path]
 * @param {String} [domain]
 * @param {Boolean} [secure]
 */
function setCookie(name, value) {
  var expires = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var path = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';
  var domain = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var secure = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;

  var exp = new Date();

  if (expires) {
    exp.setTime(exp.getTime() + expires * 24 * 3600 * 1000);
  }

  document.cookie = name + '=' + escape(value) + (expires ? ';expires=' + exp.toGMTString() : '') + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
}

/**
 * 删除cookie
 * @param {String} name
 * @param {String} [path]
 * @param {String} [domain]
 * @param {Boolean} [secure]
 */
function delCookie(name, path, domain, secure) {
  var value = getCookie(name);

  if (value != null) {
    var exp = new Date();
    exp.setMinutes(exp.getMinutes() - 1000);
    path = path || '/';
    /* eslint-disable prefer-template,max-len */
    document.cookie = name + '=;expires=' + exp.toGMTString() + (path ? ';path=' + path : '') + (domain ? ';domain=' + domain : '') + (secure ? ';secure' : '');
  }
}

/**
 * 校验邮箱
 * @param val
 * @return {boolean}
 */
function isEmailAddress(val) {
  return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(val) || /w+([-+.]w+)*@w+([-.]w+)*.w+([-.]w+)*/.test(val);
}
console.log(isEmailAddress('Acs')) //false
console.log(isEmailAddress('133@qq.com')) //true

/**
 * 校验中文和数字
 * @param value
 * @return {boolean}
 */
function isCHNAndEN(value) {
  return /^((?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])|(\d))+$/g.test(value);
}

/**
 * 校验中文
 * @param value
 * @return {boolean}
 */
function isChineseCharacter(value) {
  return /^(?:[\u3400-\u4DB5\u4E00-\u9FEA\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0])+$/g.test(value)
}


/**
 * 验证手机号中国(严谨), 根据工信部2019年最新公布的手机号段
 * @param value
 * @return {boolean}
 */
function isMPStrict(value) {
  return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value)
}
isMPStrict(13037173687) //true

/**
 * 去除空格
 * @param { string } str 待处理字符串
 * @param  { number } type 去除空格类型 1-所有空格  2-前后空格  3-前空格 4-后空格 默认为1
 */
function trim(str, type = 1) {
  if (type && type !== 1 && type !== 2 && type !== 3 && type !== 4) return;
  switch (type) {
    case 1:
      return str.replace(/\s/g, "");
    case 2:
      return str.replace(/(^\s)|(\s*$)/g, "");
    case 3:
      return str.replace(/(^\s)/g, "");
    case 4:
      return str.replace(/(\s$)/g, "");
    default:
      return str;
  }
}


/**
 * 生成随机整数
 * @param min 最小值
 * @param max 最大值
 * @return {number}
 */
function randomNumInteger(min, max) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * min + 1, 10);
    case 2:
      return parseInt(Math.random() * (max - min + 1) + min, 10);
    default:
      return 0
  }
}

/**
 * 随机返回数组中的一个元素
 * @param arr
 * @return {*}
 */
function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

/**
 * 数组值的随机顺序,每次不一样
 * @param arr
 * @return {*}
 */
function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5)
}
shuffle([1,2,3,4])

/**
 * 返回两个数组中都显示的元素的数组(取交集)
 * @param arr1 数组1
 * @param arr2 数组2
 * @return {*} 数组
 */
function similarity(arr1, arr2) {
  return arr1.filter(v => arr2.includes(v))
}
similarity([1,2,3], [2,3,4]) // [2,3]

/**
 * 1个对象数组根据另一个对象数组的某个属性进行排序
 * @param arr1 要排序的数组
 * @param arr2 参照的数组
 * @param property 依据参照数组的属性
 * @return {Array} arr1排序之后的数组
 */
function arraySort(arr1, arr2, property) {
  let arr = [];
  let arr3 = [];
  arr2.forEach(item => {
    arr.push(item[property])
  })
  arr1.forEach(item => {
    arr3.push(item[property])
  })
   //先判断内容是否相等
  if(!equalContent(arr, arr3)) {
    //报错提示 待补充
    
    return
  }
  
  return arr1.sort(function (a, b) {
    const prev = arr.indexOf(a[property]);
    const next = arr.indexOf(b[property]);
    return prev - next;
  })
}
const arr1 = [{name:1,age:1},{name:2,age:1},{name:3,age:1}]
const arr2 = [{name:3},{name:2},{name:1}]
arraySort(arr1, arr2, 'name') //[{name:3,age:1},{name:2,age:1},{name:1,age:1}]


/**
 * 判断2个数组是否具有相同的内容(相等可以直接JSON.Stringify之后判断)
 * @param arr1 数组1
 * @param arr2 数组2
 * @return {boolean}
 */
function equalContent(arr1, arr2) {
  if(arr1.length !== arr2.length) return false
  return arr1.every(item => arr2.includes(item))
}

/**
 * 计算数组中值的出现次数
 * 使用Array.reduce()在每次遇到数组中的特定值时递增计数器
 * @param arr
 * @param value
 * @return {*} 次数
 */
function countOccurrences(arr, value) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)
}
let arr = [1,2,1,2,3,3,3,3];
console.log(countOccurrences(arr,3))//4


/**
 * 数字千分位隔开
 * @param num
 * @return {string}
 */
function numFormat(num) {
  if (!isNaN(num)) {
    let newNum = num.toString().split(".");
    if (newNum.length === 2 && newNum[1].length > 2) {
      //小数位数大于2
      newNum = Number(num).toFixed(2);
    } else {
      newNum = num;
    }
    if (Math.abs(newNum) < 1000) {
      return Number(newNum).toFixed(2);
    }
    let c = "";
    if (newNum.toString().indexOf(".") !== -1) {
      //小数
      let pointNum = newNum.toString().split(".");
      let beforePoint = pointNum[0];
      let afterPoint = pointNum[1];
      c = Number(beforePoint).toLocaleString() + "." + afterPoint;
    } else {
      //整数
      c = newNum.toLocaleString();
    }
    return c;
  } else {
    return "";
  }
}

/**
 * 数字千分位隔开
 * @param {Number|String} price
 * @return {String}
 */
function getFormatPrice(price) {
  return String(price).replace(/(\d{1,3})(?=(\d{3})+(\.\d*)?$)/g, '$1,');
}

/**
 * 获取文件后缀名
 * @param {String} filename
 */
function getExt(filename) {
    if (typeof filename == 'string') {
        return filename
            .split('.')
            .pop()
            .toLowerCase()
    } else {
        throw new Error('filename must be a string type')
    }
}
getExt('2.json') //json
  
 /**
 * 复制内容到剪贴板
 * @value {String} 
 */
 function copyToBoard(value) {
    const element = document.createElement('textarea')
    document.body.appendChild(element)
    element.value = value
    element.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy')
        document.body.removeChild(element)
        return true
    }
    document.body.removeChild(element)
    return false
}
  copyToBoard('hahah')

/**
 * 判断函数执行次数
 */
function foo() {
  //其他函数逻辑blah blah。。。
  console.count("foo 被执行的次数：");
}
foo(); //1
foo(); //2
foo(); //3

/**
 * 检测一段代码的执行时间
 */
console.time("start"); // start和后面要一致
var arr = new Array(1000000);
for (let i = 0; i < arr.length; i++) {
  arr[i] = {};
}
console.timeEnd("start");

/**
 * 渲染对象数组
 */
let arr = [{ a: 2 }, { b: 3 }];
arr.map(i => ({ ...i, c: 5 })); // [{a:2, c:5}, {b:3, c:5}]

//生成空数组
Array.apply(null, { length: 10 }); // === new Array(10).fill(1)


/**
 * 合并参数  === Object.assign(obj1, obj2)
 * @param {Object} obj1
 * @param {Object} obj2
 * @returns {{}}
 */
function merge(obj1, obj2) {
  obj1 = obj1 || {};
  obj2 = obj2 || {};
  for (var key in obj2) {
    if (obj2.hasOwnProperty(key)) {
      obj1[key] = obj2[key];
    }
  }
  return obj1;
}
merge({age: 1}, {name:2}) //{name: 1, age:2}

/**
 * 文件上传前端压缩然后上传
 * @param elem 文件file
 */
function fileElemUpdata(elem) {
  let me = elem;
  var image = elem.files[0];
  //如果大于250kb
  var quality = 0.7; // 默认图片质量为0.7
  if (elem.files[0].size / 1024 > 257) {
    quality = 0.4;
  }
  var reader = new FileReader(); //实例化文件读取对象
  reader.readAsDataURL(image); //将文件读取为 DataURL,也就是base64编码
  reader.onload = function(ev) {
    //文件读取成功完成时触发
    var dataURL = ev.target.result; //获得文件读取成功后的DataURL,也就是base64编码
    var img = new Image();
    img.src = dataURL; //将DataURL码赋值给img标签
    img.onload = function() {
      var that = this;
      // 默认按比例压缩
      var w = 300,
        // h = that.height,
        scale = img.width / img.height;
      var h = w / scale;
      //生成canvas
      var canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(that, 0, 0, w, h);
      // quality值越小，所绘制出的图像越模糊
      var dataImgURL = canvas.toDataURL("image/jpeg", quality); //转换为bese64
      let cardUrl = "";
      var imgDataBase = {};
      if (IdOrBnak === "Bank") {
        cardUrl = "/api/faurecia/bank_card_read";
        imgDataBase = { imageBase64: dataImgURL.split(";base64,")[1] };
      } else {
        cardUrl = "/api/faurecia/id_card_read";
        imgDataBase = { imageBase64: dataImgURL };
      }
      var xhrImg = new XMLHttpRequest();
      xhrImg.open("post", sendUrl + cardUrl, true);
      xhrImg.onreadystatechange = function() {
        if (
          (xhrImg.readyState === 4 && xhrImg.status === 200) ||
          xhrImg.status === 304
        ) {
          let resPhone = JSON.parse(xhrImg.responseText);
          if (resPhone.errcode === 0) {
            if (IdOrBnak === "Bank") {
              _this.cardNumber.value = resPhone.data;
            } else if (IdOrBnak === "Id") {
              _this.idcard.value = resPhone.data.idNo;
              _this.birthday.value = new Date(
                resPhone.data.year +
                  "-" +
                  resPhone.data.month +
                  "-" +
                  resPhone.data.day
              );
              _this.sex.value =
                resPhone.data.sex === "男" ? "男male" : "女female";
            }
          }
        }
      };
      xhrImg.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhrImg.send(JSON.stringify(imgDataBase)); //发送post请求,转换图像的base64
    };
  };
}

/**
 *  封装ajax
 * @param met 方法
 * @param url
 * @param data
 * @returns {*}
 */
ajax = function(met, url, data) {
  var metArr = ["GET", "POST", "PUT", "DELETE"];
  return axios({
    method: metArr[met],
    url: url,
    data: data,
    params: met < 1 ? data : {}
  });
};

/**
 * 功能 图片压缩以及添加水印
 * @param file：一个是文件(类型是图片格式)，或是base64
 * @param obj：{width:375,height:600,quality:0.7,watermark:false}  压缩的宽高及质量,高建议不要设置按比例压缩, watermark为是否添加水印，为true时即添加时间，为string时则原样填加。
 * @param callback：回调函数
 * @return void
 * @example photoCompress(file,obj,callback)
 * 已对图片旋转做了处理
 * @Author: lizuping
 * @Date: 2018-00-00
 * @Last Modified by: lizuping
 * @Last Modified time: 2019-06-28 15:48:55
 */
function canvasDataURL(path, obj, callback, t) {
  let img = new Image();
  img.src = path;
  img.onload = function() {
    let that = this;
    window.EXIF.getData(that, function() {
      let ro = window.EXIF.getTag(this, "Orientation");
      // 默认按比例压缩
      let w = that.width;
      var h = that.height;
      var scale = w / h;
      w = obj.width || w;
      h = obj.height || w / scale;
      let quality = 0.7; // 默认图片质量为0.7
      // 生成canvas
      let canvas = document.createElement("canvas");
      let ctx = canvas.getContext("2d");
      function cSet(w, h) {
        let anw = document.createAttribute("width");
        anw.nodeValue = w;
        let anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
      }
      let th = (w * w) / h;
      let pi = false;

      if (ro > 1) {
        switch (ro) {
          case 6: // 旋转90度
            cSet(w, th);
            pi = Math.PI / 2;
            ctx.rotate(pi);
            ctx.drawImage(that, 0, -w, th, w);
            h = th;
            break;
          case 3: // 旋转180度
            cSet(w, h);
            pi = Math.PI;
            ctx.rotate(Math.PI);
            ctx.drawImage(that, -w, -h, w, h);
            break;
          case 8: // 旋转-90度
            cSet(w, th);
            pi = (3 * Math.PI) / 2;
            ctx.rotate(pi);
            ctx.drawImage(that, -th, 0, th, w);
            h = th;
            break;
        }
      } else {
        cSet(w, h);
        ctx.drawImage(that, 0, 0, w, h);
      }
      // 图像质量
      if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
        quality = obj.quality;
      }
      // 增加水印
      if (obj.watermark) {
        ctx.font = "20px sans-serif"; // 设置字体
        ctx.fillStyle = "rgba( 0 , 122 , 204 , 0.8 )"; // 填充rgba字体颜色
        ctx.textAlign = "right"; // 文本对齐方式
        if (pi) {
          ctx.rotate(-pi);
        }
        if (obj.watermark === true) {
          obj.watermark = new Date().toLocaleString(); // 默认水印为当前时间
        }
        ctx.fillText(obj.watermark, w - 20, h - 20);
      }
      // quality值越小，所绘制出的图像越模糊
      // 回调函数返回base64的值
      callback(canvas.toDataURL(t, quality));
    });
  };
}

/**
 * 图片压缩
 * @param file
 * @param obj
 * @param callback
 */
function photoCompress(file, obj, callback) {
  let rs = /^(data:image)/;
  if (typeof file === "string" && rs.test(file)) {
    canvasDataURL(file, obj, callback, file.split(";")[0].split(":")[1]);
  } else {
    let ready = new FileReader();
    /* 开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容. */
    ready.readAsDataURL(file);
    ready.onload = function() {
      // photoCompress(re, obj, callback);
      canvasDataURL(this.result, obj, callback, file.type);
    };
  }
}

/**
 * 对象深拷贝
 * @param source 要拷贝的对象
 * @returns {*[]}
 */
function objDeepCopy(source) {
  var sourceCopy = source instanceof Array ? [] : {};
  for (var item in source) {
    sourceCopy[item] =
      typeof source[item] === "object"
        ? objDeepCopy(source[item])
        : source[item];
  }
  return sourceCopy;
}
var arr = [{ name: 1, age: 2, sex: null }];
var b = objDeepCopy(arr);
b[0].name = 33;
console.log(b); //[{ name: 33, age: 2, sex: null }]
console.log(arr); //[{ name: 1, age: 2, sex: null }]



```

