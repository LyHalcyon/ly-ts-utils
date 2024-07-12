function checkFileName(fileName: string, list: string[]): boolean {
  const name = fileName.toLowerCase();
  return list.some((ext) => name.endsWith(`.${ext}`));
}

/**
 * 默认常见小工具
 */
class DefaultUtils {
  /**
   * 手机号校验
   * @param num 手机号码
   */
  isPhone(num: string): boolean {
    return /^1[2,3,4,5,7,8]\d{9}$/.test(num);
  }

  /**
   * 手机号码只显示开始3位和结尾4位，其余使用****
   * @param mobile 手机号码
   */
  hideMobile(mobile: string): string {
    return mobile.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
  }

  /**
   * 中英文姓名校验
   * @param name 姓名
   */
  isName(name: string): boolean {
    return /^[a-zA-Z\u4E00-\u9FA5]+$/.test(name);
  }

  /**
   * 身份证号校验 *15/18位*
   * @param idCard 身份证号
   */
  isIdCard(idCard: string): boolean {
    return /^\d{15}|\d{18}$/.test(idCard);
  }

  /**
   * 银行卡校验
   * @param bank 银行卡号
   */
  isBank(bank: string): boolean {
    return /^([1-9]{1})(\d{15}|\d{16}|\d{18})$/.test(bank);
  }

  /**
   * 邮箱校验
   * @param email 邮箱地址
   */
  isEmail(email: string): boolean {
    return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(email);
  }

  /**
   * QQ号校验
   * @param qq QQ号
   */
  isQQ(qq: string): boolean {
    return /^[1-9][0-9]{4,9}$/.test(qq);
  }

  /**
   * 邮政编码校验
   * @param post 邮政编码
   */
  isPostal(post: string): boolean {
    return /^[1-9]\d{5}(?!\d)/.test(post);
  }

  /**
   * 英文校验
   * @param english 英文字符串
   */
  isEn(english: string): boolean {
    return /^[a-zA-Z]+$/.test(english);
  }

  /**
   * 中文校验
   * @param chinese 中文字符串
   */
  isCh(chinese: string): boolean {
    return /^[\u4E00-\u9FA5]+$/.test(chinese);
  }

  /**
   * HTML校验
   * @param html HTML字符串
   */
  isHtml(html: string): boolean {
    return /<("[^"]*"|'[^']*'|[^'">])*>/.test(html);
  }

  /**
   * 车牌号校验
   * @param carNum 车牌号
   */
  isCarNum(carNum: string): boolean {
    const patrn = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1})$/;
    const patrn2 = /^([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))$/;
    return !(!patrn.test(carNum) && !patrn2.test(carNum));
  }

  /**
   * 校验车架号
   * @param vehicle 车架号
   */
  isVehicle(vehicle: string): boolean {
    const patrn = /^[A-HJ-NP-Za-hj-np-z0-9]+$/;
    return !(!patrn.test(vehicle) || vehicle === '');
  }

  /**
   * 判断是否为PC端
   */
  isPC(): boolean {
    const userAgentInfo = navigator.userAgent;
    const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
    return !Agents.some(agent => userAgentInfo.includes(agent));
  }

  /**
   * 判断当前设备 {ios/android/web}
   */
  isDevice(): string {
    const ua = navigator.userAgent.toLowerCase();
    if (ua.includes('iphone') || ua.includes('ipad')) {
      return 'iOS';
    }
    if (ua.includes('android')) {
      return 'Android';
    }
    return 'Web';
  }

  /**
   * 判断是否为微信
   */
  isWx(): boolean {
    return /micromessenger/.test(navigator.userAgent.toLowerCase());
  }

  /**
   * 判断图片是否加载完成
   * @param arr 图片URL数组
   * @param callback 回调函数
   */
  imgLoadAll(arr: string[], callback: () => void): void {
    let arrImg: HTMLImageElement[] = [];
    arr.forEach(src => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        arrImg.push(img);
        if (arrImg.length === arr.length) {
          callback();
        }
      };
    });
  }

  /**
   * 判断音频是否加载完成
   * @param src 音频URL
   * @param callback 回调函数
   */
  loadAudio(src: string, callback: () => void): void {
    const audio = new Audio(src);
    audio.onloadedmetadata = callback;
    audio.src = src;
  }

  /**
   * 获取URL的参数
   * @param urlLocation URL地址
   */
  urlParams(urlLocation?: string): { [key: string]: string } {
    const fullUrl = urlLocation || window.location.href;
    const url = new URL(fullUrl);
    const params: { [key: string]: string } = {};
    url.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  }

  /**
   * 获取视口的宽高
   */
  getViewportOffset(): { w: number; h: number } {
    if (window.innerWidth) {
      return { w: window.innerWidth, h: window.innerHeight };
    } else if (document.compatMode === 'BackCompat') {
      return { w: document.body.clientWidth, h: document.body.clientHeight };
    } else {
      return { w: document.documentElement.clientWidth, h: document.documentElement.clientHeight };
    }
  }

  /**
   * 判断数据类型
   * @param val 任意数据
   * @return 数据类型的小写字符串
   */
  getType(val: any): string {
    if (val == null) {
      return String(val);
    }
    return typeof val === 'object'
      ? Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
      : typeof val;
  }

  /**
   * 函数防抖
   * @param fun 需要防抖的函数
   * @param delay 延迟时间（毫秒）
   */
  debounce(fun: Function, delay = 1000): Function {
    let timer: number | undefined;
    return function (this: any, ...args: any) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = window.setTimeout(() => {
        fun.apply(this, args);
      }, delay);
    };
  }

  /**
   * 函数节流
   * @param fun 需要节流的函数
   * @param delay 间隔时间（毫秒）
   */
  throttle(fun: Function, delay: number): Function {
    let timer: number | undefined;
    return function (this: any, ...args: any) {
      if (!timer) {
        timer = window.setTimeout(() => {
          fun.apply(this, args);
          timer = undefined;
        }, delay);
      }
    };
  }

  /**
   * 检测密码强度
   * @param str 密码字符串
   * @returns 密码强度等级（0-3）
   */
  checkPwd(str: string): number {
    let nowLv = 0;
    if (str.length < 6) {
      return nowLv;
    }
    if (/[0-9]/.test(str)) nowLv++;
    if (/[a-z]/.test(str)) nowLv++;
    if (/[A-Z]/.test(str)) nowLv++;
    return nowLv;
  }

  /**
   * 浏览器全屏
   * @param eleId 需要全屏的元素ID，不传则全屏整个屏幕
   */
  reqFullScreen(eleId?: string): void {
    const docElm: any =
      eleId && eleId.length > 0 ? document.getElementById(eleId) : document.documentElement;
    if (docElm.requestFullScreen) {
      docElm.requestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      docElm.webkitRequestFullScreen();
    } else if (docElm.mozRequestFullScreen) {
      docElm.mozRequestFullScreen();
    }
  }

  /**
   * 浏览器退出全屏
   */
  exitFullScreen(): void {
    const docElm: any = document.documentElement;
    const doc: any = document;
    if (docElm.requestFullScreen) {
      doc.exitFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
      doc.webkitCancelFullScreen();
    } else if (docElm.mozRequestFullScreen) {
      doc.mozCancelFullScreen();
    }
  }

  /**
   * 随机产生某个颜色
   * @returns 颜色字符串，例：rgb(250,82,49)
   */
  randomColor(): string {
    return `rgb(${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)},${Math.round(Math.random() * 255)})`;
  }

  /**
   * 检测文件名是否为图片
   * @param fileName 文件名
   */
  isImage(fileName: string): boolean {
    return checkFileName(fileName, ['png', 'jpeg', 'jpg', 'bmp']);
  }

  /**
   * 检测文件名是否为视频
   * @param fileName 文件名
   */
  isH5Video(fileName: string): boolean {
    return checkFileName(fileName, ['mp4', 'webm', 'ogg']);
  }

  /**
   * 检测文件名是否为PDF
   * @param fileName 文件名
   */
  isPdf(fileName: string): boolean {
    return checkFileName(fileName, ['pdf']);
  }

  /**
   * 检测文件名是否为Word文档
   * @param fileName 文件名
   */
  isWord(fileName: string): boolean {
    return checkFileName(fileName, ['doc', 'docx']);
  }

  /**
   * 检测文件名是否为Excel文档
   * @param fileName 文件名
   */
  isExcel(fileName: string): boolean {
    return checkFileName(fileName, ['xlsx', 'xls', 'xlsm', 'xlsb', 'csv']);
  }

  /**
   * 获取一个随机的UUID
   */
  getUUID(): string {
    const timestamp = Date.now().toString(16); // 当前时间戳的十六进制表示
    const randomSegment = () =>
      Math.floor((1 + Math.random()) * 0x10000)
           .toString(16)
           .substring(1);

    return (
      timestamp.substring(0, 8) +
      '-' +
      randomSegment() +
      '-' +
      '4' +
      randomSegment().substring(0, 3) +
      '-' + // 确保第13位为4
      (8 + Math.floor(Math.random() * 4)).toString(16) +
      randomSegment().substring(0, 3) +
      '-' + // 确保第17位为8, 9, a, 或 b
      randomSegment() +
      randomSegment() +
      randomSegment()
    );
  }
}

/**
 * 默认常见小工具
 */
export default new DefaultUtils();
