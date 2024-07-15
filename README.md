# ly-ts-utils

自用工具包，提供一些常用的工具方法。<br />

[npm地址](https://www.npmjs.com/package/ly-ts-utils)<br />

安装命令 `npm i ly-ts-utils` 或 `yarn add ly-ts-utils`

```javascript
import {
  //时间工具类
  dateUtils,
  //加密工具类
  cryptoUtils,
  //缓存工具类
  cacheUtils,
  //默认工具类
  defaultUtils,
  //数组工具类
  arrayUtils,
  //数字工具类
  numberUtils,
  //字符串工具类
  stringUtils,
  //对象工具类
  objectUtils,
  //导出工具类
  exportUtils,
  //事件总线工具类
  busUtils } from 'ly-ts-utils';
```
`dateUtils` **时间工具类**
```javascript
import { dateUtils } from 'ly-ts-utils';
/**
 * 格式化时间
 * @param date - Date 对象
 * @param returnDateType - 返回日期格式，支持以下格式：
 *   'YYYY-MM-DD', 'YYYY-MM', 'YYYY', 'MM', 'DD', 'MM-DD', 'MM-DD hh:mm', 'hh:mm:ss', 'hh:mm'
 */
dateUtils.formatDate(date, returnDateType);

/**
 * 获取当前日期的星期
 * @returns 包含星期的日期字符串
 */
dateUtils.getDateWeek();

/**
 * 计算两个日期之间的差异
 * @param date1 - 起始日期
 * @param date2 - 结束日期
 * @param unit - 差异单位，支持 'days', 'hours', 'minutes', 'seconds'
 * @returns 差异数值
 */
dateUtils.dateDiff(date1, date2, unit);

/**
 * 将字符串解析为日期对象
 * @param dateString - 日期字符串
 * @param format - 日期格式，支持 'YYYY-MM-DD' 和 'YYYY-MM-DD hh:mm:ss'
 * @returns Date 对象或 null
 */
dateUtils.parseDate(dateString, format);

/**
 * 获取某个月的天数
 * @param year - 年份
 * @param month - 月份 (1-12)
 * @returns 天数
 */
dateUtils.getDaysInMonth(year, month);

/**
 * 判断是否为闰年
 * @param year - 年份
 * @returns 布尔值
 */
dateUtils.isLeapYear(year);

/**
 * 获取当前时间戳
 * @returns 时间戳（毫秒）
 */
dateUtils.getCurrentTimestamp();

/**
 * 获取某个日期所在周的起始和结束日期
 * @param date - 日期对象
 * @returns 包含起始日期和结束日期的对象 { startDate: Date, endDate: Date }
 */
dateUtils.getWeekStartEnd(date);

/**
 * 获取某个日期是当年的第几周
 * @param date - 日期对象
 * @returns 周数
 */
dateUtils.getWeekNumber(date);

/**
 * 计算两个日期之间的工作日天数
 * @param startDate - 起始日期
 * @param endDate - 结束日期
 * @returns 工作日天数
 */
dateUtils.getBusinessDays(startDate, endDate);
```
`cryptoUtils` **加密工具类**
```javascript
import { cryptoUtils } from 'ly-ts-utils';
/**
 * 对称加密（AES）
 * @param text - 要加密的文本
 * @returns 加密后的字符串
 */
cryptoUtils.AES_encode(text);

/**
 * 对称解密（AES）
 * @param text - 要解密的文本
 * @returns 解密后的字符串
 */
cryptoUtils.AES_decode(text);

/**
 * Base64 编码
 * @param str - 要编码的字符串
 * @returns 编码后的 Base64 字符串
 */
cryptoUtils.base64_encode(str);

/**
 * Base64 解码
 * @param base64 - 要解码的 Base64 字符串
 * @returns 解码后的字符串
 */
cryptoUtils.base64_decode(base64);

/**
 * 生成 SHA-256 哈希值
 * @param text - 待哈希的字符串
 * @returns 哈希值的十六进制字符串表示
 */
cryptoUtils.hash(text);

/**
 * 验证字符串与哈希值是否匹配
 * @param text - 待验证的字符串
 * @param hash - 要匹配的哈希值
 * @returns 字符串的哈希值是否与给定的哈希值匹配
 */
cryptoUtils.verifyHash(text, hash);
```
`cacheUtils` **缓存工具类**
```javascript
import { cacheUtils } from 'ly-ts-utils';
/**
 * localStorage 存数据
 * @param key - 键名
 * @param value - 值
 */
cacheUtils.localStorageSet(key, value);

/**
 * localStorage 取数据
 * @param key - 键名
 * @returns 存储的值
 */
cacheUtils.localStorageGet(key);

/**
 * localStorage 删除指定 key 的数据
 * @param key - 键名
 */
cacheUtils.localStorageDel(key);

/**
 * localStorage 清除所有数据
 */
cacheUtils.localStorageClear();

/**
 * sessionStorage 存数据
 * @param key - 键名
 * @param value - 值
 */
cacheUtils.sessionStorageSet(key, value);

/**
 * sessionStorage 取数据
 * @param key - 键名
 * @returns 存储的值
 */
cacheUtils.sessionStorageGet(key);

/**
 * sessionStorage 删除指定 key 的数据
 * @param key - 键名
 */
cacheUtils.sessionStorageDel(key);

/**
 * sessionStorage 清除所有数据
 */
cacheUtils.sessionStorageClear();

/**
 * 设置 cookie
 * @param key - 键名
 * @param value - 值
 * @param time - 有效期，默认单位：天
 * @param timeType - 有效期单位，可选 'day', 'hour', 'minute'
 */
cacheUtils.setCookie(key, value, time, timeType);

/**
 * 获取 cookie
 * @param key - 键名
 * @returns 存储的 cookie 值
 */
cacheUtils.getCookie(key);

/**
 * 删除 cookie
 * @param key - 键名
 */
cacheUtils.deleteCookie(key);

/**
 * 清除所有 cookie
 */
cacheUtils.clearCookies();
```
`defaultUtils` **默认工具类**
```javascript
import { defaultUtils } from 'ly-ts-utils';
/**
 * 手机号校验
 * @param num - 手机号码
 * @returns 是否为有效手机号
 */
defaultUtils.isPhone(num);

/**
 * 手机号码只显示开始3位和结尾4位，其余使用****
 * @param mobile - 手机号码
 * @returns 格式化后的手机号码
 */
defaultUtils.hideMobile(mobile);

/**
 * 中英文姓名校验
 * @param name - 姓名
 * @returns 是否为有效姓名
 */
defaultUtils.isName(name);

/**
 * 身份证号校验 *15/18位*
 * @param idCard - 身份证号
 * @returns 是否为有效身份证号
 */
defaultUtils.isIdCard(idCard);

/**
 * 银行卡校验
 * @param bank - 银行卡号
 * @returns 是否为有效银行卡号
 */
defaultUtils.isBank(bank);

/**
 * 邮箱校验
 * @param email - 邮箱地址
 * @returns 是否为有效邮箱
 */
defaultUtils.isEmail(email);

/**
 * QQ号校验
 * @param qq - QQ号
 * @returns 是否为有效QQ号
 */
defaultUtils.isQQ(qq);

/**
 * 邮政编码校验
 * @param post - 邮政编码
 * @returns 是否为有效邮政编码
 */
defaultUtils.isPostal(post);

/**
 * 英文校验
 * @param english - 英文字符串
 * @returns 是否为有效英文字符串
 */
defaultUtils.isEn(english);

/**
 * 中文校验
 * @param chinese - 中文字符串
 * @returns 是否为有效中文字符串
 */
defaultUtils.isCh(chinese);

/**
 * HTML校验
 * @param html - HTML字符串
 * @returns 是否为有效HTML字符串
 */
defaultUtils.isHtml(html);

/**
 * 车牌号校验
 * @param carNum - 车牌号
 * @returns 是否为有效车牌号
 */
defaultUtils.isCarNum(carNum);

/**
 * 校验车架号
 * @param vehicle - 车架号
 * @returns 是否为有效车架号
 */
defaultUtils.isVehicle(vehicle);

/**
 * 判断是否为PC端
 * @returns 是否为PC端
 */
defaultUtils.isPC();

/**
 * 判断当前设备 {ios/android/web}
 * @returns 当前设备类型
 */
defaultUtils.isDevice();

/**
 * 判断是否为微信
 * @returns 是否为微信
 */
defaultUtils.isWx();

/**
 * 判断图片是否加载完成
 * @param arr - 图片URL数组
 * @param callback - 回调函数
 */
defaultUtils.imgLoadAll(arr, callback);

/**
 * 判断音频是否加载完成
 * @param src - 音频URL
 * @param callback - 回调函数
 */
defaultUtils.loadAudio(src, callback);

/**
 * 获取URL的参数
 * @param urlLocation - URL地址
 * @returns URL参数对象
 */
defaultUtils.urlParams(urlLocation);

/**
 * 获取视口的宽高
 * @returns 视口的宽高对象 {w: number, h: number}
 */
defaultUtils.getViewportOffset();

/**
 * 判断数据类型
 * @param val - 任意数据
 * @returns 数据类型的小写字符串
 */
defaultUtils.getType(val);

/**
 * 函数防抖
 * @param fun - 需要防抖的函数
 * @param delay - 延迟时间（毫秒）
 * @returns 防抖后的函数
 */
defaultUtils.debounce(fun, delay);

/**
 * 函数节流
 * @param fun - 需要节流的函数
 * @param delay - 间隔时间（毫秒）
 * @returns 节流后的函数
 */
defaultUtils.throttle(fun, delay);

/**
 * 检测密码强度
 * @param str - 密码字符串
 * @returns 密码强度等级（0-3）
 */
defaultUtils.checkPwd(str);

/**
 * 浏览器全屏
 * @param eleId - 需要全屏的元素ID，不传则全屏整个屏幕
 */
defaultUtils.reqFullScreen(eleId);

/**
 * 浏览器退出全屏
 */
defaultUtils.exitFullScreen();

/**
 * 随机产生某个颜色
 * @returns 颜色字符串，例：rgb(250,82,49)
 */
defaultUtils.randomColor();

/**
 * 检测文件名是否为图片
 * @param fileName - 文件名
 * @returns 是否为图片
 */
defaultUtils.isImage(fileName);

/**
 * 检测文件名是否为视频
 * @param fileName - 文件名
 * @returns 是否为视频
 */
defaultUtils.isH5Video(fileName);

/**
 * 检测文件名是否为PDF
 * @param fileName - 文件名
 * @returns 是否为PDF
 */
defaultUtils.isPdf(fileName);

/**
 * 检测文件名是否为Word文档
 * @param fileName - 文件名
 * @returns 是否为Word文档
 */
defaultUtils.isWord(fileName);

/**
 * 检测文件名是否为Excel文档
 * @param fileName - 文件名
 * @returns 是否为Excel文档
 */
defaultUtils.isExcel(fileName);

/**
 * 获取一个随机的UUID
 * @returns 随机生成的UUID
 */
defaultUtils.getUUID();
```
`arrayUtils` **数组工具类**
```javascript
import { arrayUtils } from 'ly-ts-utils';
/**
 * 是否为数组
 * @param arr - 任意类型
 * @returns 是否为数组
 */
arrayUtils.isArray(arr);

/**
 * 是否空数组
 * @param arr - 任意类型
 * @returns 是否为空数组
 */
arrayUtils.isArrayEmpty(arr);

/**
 * 判断两个数组是否相等
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @returns 是否相等
 */
arrayUtils.arrayEqual(arr1, arr2);

/**
 * 将某个元素置顶
 * @param arrayData - 数组
 * @param index - 索引
 * @returns 置顶后的数组
 */
arrayUtils.toFirst(arrayData, index);

/**
 * 将某个元素移至末尾
 * @param arrayData - 数组
 * @param index - 索引
 * @returns 移至末尾后的数组
 */
arrayUtils.toEnd(arrayData, index);

/**
 * 将指定元素上移一位
 * @param arrayData - 数组
 * @param index - 索引
 * @returns 上移后的数组
 */
arrayUtils.upGo(arrayData, index);

/**
 * 将指定元素下移一位
 * @param arrayData - 数组
 * @param index - 索引
 * @returns 下移后的数组
 */
arrayUtils.downGo(arrayData, index);

/**
 * 数组删除指定元素
 * @param arr - 数组
 * @param ele - 元素
 * @returns 删除后的数组
 */
arrayUtils.removeArr(arr, ele);

/**
 * 数组并集
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @returns 并集数组
 */
arrayUtils.unionArr(arr1, arr2);

/**
 * 数组交集
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @returns 交集数组
 */
arrayUtils.intersectArr(arr1, arr2);

/**
 * 数组差集
 * @param arr1 - 数组1
 * @param arr2 - 数组2
 * @returns 差集数组
 */
arrayUtils.differenceArr(arr1, arr2);

/**
 * 数组去重
 * @param arr - 数组
 * @returns 去重后的数组
 */
arrayUtils.deduplicationArr(arr);

/**
 * 数组最大值
 * @param arr - 数组
 * @returns 数组最大值
 */
arrayUtils.maxArr(arr);

/**
 * 数组最小值
 * @param arr - 数组
 * @returns 数组最小值
 */
arrayUtils.minArr(arr);

/**
 * 深拷贝一个对象或数组
 * @param obj - 要深拷贝的对象或数组
 * @param visited - 访问过的对象的映射，用于处理循环引用
 * @returns 深拷贝后的新对象或数组
 */
arrayUtils.deepCopy(obj, visited);

/**
 * 数组打平
 * @param arr - 数据数组
 * @param unique - 是否去重，默认不去重
 * @returns 打平后的数组
 */
arrayUtils.flattenArray(arr, unique);

/**
 * 扁平化数组数据构建树形结构的数组对象
 * @param data - 原始扁平化数组数据
 * @param parentIdKey - 父节点关联字段名
 * @param isReturnJson - 是否返回JSON字符串, 默认不返回
 * @returns 树形结构的数组对象或者JSON字符串
 */
arrayUtils.buildTree(data, parentIdKey, isReturnJson);

/**
 * 数组按 size 分组
 * @param arr - 数组
 * @param size - 分组大小
 * @returns 分组后的数组
 */
arrayUtils.cutArray(arr, size);

/**
 * 生成数组的排列组合
 * @param arr - 原始数组（多维数组）
 * @returns 排列组合的数组
 */
arrayUtils.generateCombinations(arr);

/**
 * 数组求和
 * @param arr - 数组
 * @returns 数组元素的和
 */
arrayUtils.sum(arr);

/**
 * 数组平均值
 * @param arr - 数组
 * @returns 数组平均值
 */
arrayUtils.average(arr);

/**
 * 获取数组中的唯一值
 * @param arr - 数组
 * @returns 数组中的唯一值
 */
arrayUtils.unique(arr);

/**
 * 数组分区
 * @param arr - 数组
 * @param predicate - 条件函数
 * @returns [满足条件的元素, 不满足条件的元素]
 */
arrayUtils.partition(arr, predicate);

/**
 * 查找数组中的最大元素及其索引
 * @param arr - 数组
 * @returns { max: 数组最大元素, index: 最大元素的索引 }
 */
arrayUtils.findMax(arr);

/**
 * 查找数组中的最小元素及其索引
 * @param arr - 数组
 * @returns { min: 数组最小元素, index: 最小元素的索引 }
 */
arrayUtils.findMin(arr);

/**
 * 打乱数组
 * @param arr - 数组
 * @returns 打乱后的数组
 */
arrayUtils.shuffle(arr);

/**
 * 从数组中随机取样
 * @param arr - 数组
 * @param n - 取样数量
 * @returns 随机取样的数组
 */
arrayUtils.sample(arr, n);
```
`numberUtils` **数字工具类**
```javascript
import { numberUtils } from 'ly-ts-utils';
/**
 * 验证是否为数字
 * @param n - 需要验证的值
 * @returns 是否为数字
 */
numberUtils.isNumber(n);

/**
 * 生成随机数
 * @param min - 范围最小值
 * @param max - 范围最大值
 * @param fixed - 保留几位小数
 * @returns 生成的随机数
 */
numberUtils.random(min, max, fixed);

/**
 * 数字每千位加逗号
 * @param num - 数字
 * @returns 加逗号后的字符串
 */
numberUtils.formatNumberWithCommas(num);

/**
 * 数字转中文
 * @param num - 数字
 * @param upperOrLower - 'lower'：小写中文数字，'upper'：大写中文数字
 * @returns 中文数字字符串
 */
numberUtils.formatNumberToChinese(num, upperOrLower);

/**
 * 计算阶乘
 * @param n - 非负整数
 * @returns 阶乘结果
 */
numberUtils.factorial(n);

/**
 * 四舍五入
 * @param num - 数字
 * @param decimalPlaces - 保留的小数位数
 * @returns 四舍五入后的数字
 */
numberUtils.round(num, decimalPlaces);

/**
 * 格式化货币
 * @param num - 数字
 * @param currency - 货币符号
 * @param decimalPlaces - 保留的小数位数
 * @returns 格式化后的货币字符串
 */
numberUtils.formatCurrency(num, currency, decimalPlaces);

/**
 * 计算两个数的最大公约数
 * @param a - 数字a
 * @param b - 数字b
 * @returns 最大公约数
 */
numberUtils.gcd(a, b);

/**
 * 计算两个数的最小公倍数
 * @param a - 数字a
 * @param b - 数字b
 * @returns 最小公倍数
 */
numberUtils.lcm(a, b);

/**
 * 转换为百分比
 * @param num - 数字
 * @param decimalPlaces - 保留的小数位数
 * @returns 百分比字符串
 */
numberUtils.toPercentage(num, decimalPlaces);

/**
 * 判断是否为整数
 * @param num - 数字
 * @returns 是否为整数
 */
numberUtils.isInteger(num);

/**
 * 获取数字的绝对值
 * @param num - 数字
 * @returns 绝对值
 */
numberUtils.abs(num);

/**
 * 计算平方根
 * @param num - 数字
 * @returns 平方根
 */
numberUtils.sqrt(num);
```
`stringUtils` **字符串工具类**
```javascript
import { stringUtils } from 'ly-ts-utils';
/**
 * 判断字符串是否为空
 * @param str - 字符串
 * @returns 是否为空
 */
stringUtils.isBlank(str);

/**
 * 去除字符串空格
 * @param str - 要处理的字符串
 * @param type - 1：所有空格 2：前后空格 3：前空格 4：后空格
 * @returns 去除空格后的字符串
 */
stringUtils.strTrim(str, type);

/**
 * 字母大小写切换
 * @param str - 要处理的字符串
 * @param type - 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
 * @returns 切换后的字符串
 */
stringUtils.strChangeCase(str, type);

/**
 * 字符串反转
 * @param str - 字符串
 * @returns 反转后的字符串
 */
stringUtils.reverse(str);

/**
 * 检查是否为有效的电子邮件
 * @param email - 电子邮件地址
 * @returns 是否为有效电子邮件
 */
stringUtils.isValidEmail(email);

/**
 * 生成随机字符串
 * @param length - 长度
 * @returns 随机字符串
 */
stringUtils.randomString(length);

/**
 * 检查字符串是否以指定的子字符串开头
 * @param str - 字符串
 * @param prefix - 前缀
 * @returns 是否以指定前缀开头
 */
stringUtils.startsWith(str, prefix);

/**
 * 检查字符串是否以指定的子字符串结尾
 * @param str - 字符串
 * @param suffix - 后缀
 * @returns 是否以指定后缀结尾
 */
stringUtils.endsWith(str, suffix);

/**
 * 将字符串转换为CamelCase
 * @param str - 字符串
 * @returns CamelCase 字符串
 */
stringUtils.toCamelCase(str);

/**
 * 将字符串转换为KebabCase
 * @param str - 字符串
 * @returns KebabCase 字符串
 */
stringUtils.toKebabCase(str);
```
`objectUtils` **对象工具类**
```javascript
import { objectUtils } from 'ly-ts-utils';
/**
 * 深拷贝对象
 * @param obj - 需要拷贝的对象
 * @returns 拷贝后的新对象
 */
objectUtils.deepCopy(obj);

/**
 * 合并多个对象
 * @param objects - 需要合并的对象
 * @returns 合并后的对象
 */
objectUtils.merge(...objects);

/**
 * 选择对象中的部分属性
 * @param obj - 源对象
 * @param keys - 需要选择的属性键数组
 * @returns 选择后的新对象
 */
objectUtils.pick(obj, keys);

/**
 * 过滤对象中的部分属性
 * @param obj - 源对象
 * @param keys - 需要过滤的属性键数组
 * @returns 过滤后的新对象
 */
objectUtils.omit(obj, keys);

/**
 * 检查对象是否为空
 * @param obj - 需要检查的对象
 * @returns 对象是否为空
 */
objectUtils.isEmpty(obj);

/**
 * 获取对象的键数组
 * @param obj - 需要获取键数组的对象
 * @returns 对象的键数组
 */
objectUtils.keys(obj);

/**
 * 获取对象的值数组
 * @param obj - 需要获取值数组的对象
 * @returns 对象的值数组
 */
objectUtils.values(obj);

/**
 * 对象属性键值对映射
 * @param obj - 需要映射的对象
 * @param callback - 对每个键值对的映射函数
 * @returns 映射后的新对象
 */
objectUtils.mapValues(obj, callback);

/**
 * 去除参数空数据（用于向后台传递参数的时候）
 * @param obj - 对象
 * @returns 过滤空数据后的对象
 */
objectUtils.filterEmptyData(obj);
```
`exportUtils` **导出工具类**
```javascript
import { exportUtils } from 'ly-ts-utils';
/**
 * 导出表格为Excel文件
 * @param {string} elementId - 要导出的表格元素的ID 例：'myTable'
 * @param {string} fileName - 导出的Excel文件名称  例：'集团数据'
 */
exportUtils.exportExcel(elementId, fileName);
```
`busUtils` **事件总线工具类**
```javascript
import { busUtils } from 'ly-ts-utils';
// 触发事件
busUtils.emit('myEvent', { message: 'Hello from Component A' });
```
```javascript
import { busUtils } from 'ly-ts-utils';
// 触发事件
busUtils.on('myEvent', (data) => {
  console.log(data.message); // 输出: Hello from Component A
});
//组件销毁时清理监听器->避免内存泄漏
onUnmounted(() => {
  busUtils.off('myEvent', handler);
});
```
