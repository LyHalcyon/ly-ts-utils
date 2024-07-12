/**
 * 字符串工具类
 */
class StringUtils {
  /**
   * 判断字符串是否为空
   * @param str 字符串
   */
  isBlank(str: any): boolean {
    return !str || /^\s*$/.test(str);
  }

  /**
   * 去除字符串空格
   * @param str 要处理的字符串
   * @param type 1：所有空格 2：前后空格 3：前空格 4：后空格
   */
  strTrim(str: string, type: 1 | 2 | 3 | 4): string {
    switch (type) {
      case 1:
        return str.replace(/\s+/g, '');
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, '');
      case 3:
        return str.replace(/(^\s*)/g, '');
      case 4:
        return str.replace(/(\s*$)/g, '');
      default:
        return str;
    }
  }

  /**
   * 字母大小写切换
   * @param str 要处理的字符串
   * @param type 1:首字母大写 2：首页母小写 3：大小写转换 4：全部大写 5：全部小写
   */
  strChangeCase(str: string, type: 1 | 2 | 3 | 4 | 5): string {
    function ToggleCase(str: string): string {
      let itemText = '';
      str.split('').forEach(function (item) {
        if (/^([a-z]+)/.test(item)) {
          itemText += item.toUpperCase();
        } else if (/^([A-Z]+)/.test(item)) {
          itemText += item.toLowerCase();
        } else {
          itemText += item;
        }
      });
      return itemText;
    }

    switch (type) {
      case 1:
        return str.replace(/^(\w)(\w+)/, function (_, v1, v2) {
          return v1.toUpperCase() + v2.toLowerCase();
        });
      case 2:
        return str.replace(/^(\w)(\w+)/, function (_, v1, v2) {
          return v1.toLowerCase() + v2.toUpperCase();
        });
      case 3:
        return ToggleCase(str);
      case 4:
        return str.toUpperCase();
      case 5:
        return str.toLowerCase();
      default:
        return str;
    }
  }

  /**
   * 字符串反转
   * @param str 字符串
   */
  reverse(str: string): string {
    return str.split('').reverse().join('');
  }

  /**
   * 检查是否为有效的电子邮件
   * @param email 电子邮件地址
   */
  isValidEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  /**
   * 生成随机字符串
   * @param length 长度
   */
  randomString(length: number): string {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /**
   * 检查字符串是否以指定的子字符串开头
   * @param str 字符串
   * @param prefix 前缀
   */
  startsWith(str: string, prefix: string): boolean {
    return str.indexOf(prefix) === 0;
  }

  /**
   * 检查字符串是否以指定的子字符串结尾
   * @param str 字符串
   * @param suffix 后缀
   */
  endsWith(str: string, suffix: string): boolean {
    return str.lastIndexOf(suffix) === str.length - suffix.length;
  }

  /**
   * 将字符串转换为CamelCase
   * @param str 字符串
   */
  toCamelCase(str: string): string {
    return str.replace(/[-_](.)/g, (_, group1) => group1.toUpperCase());
  }

  /**
   * 将字符串转换为KebabCase
   * @param str 字符串
   */
  toKebabCase(str: string): string {
    return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
     .replace(/[\s_]+/g, '-')
     .toLowerCase();
  }
}

/**
 * 字符串工具类
 */
export default new StringUtils();
