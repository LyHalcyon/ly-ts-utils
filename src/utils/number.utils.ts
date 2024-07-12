/**
 * 数字工具类
 */
class NumberUtils {
  /**
   * 验证是否为数字
   * @param n 需要验证的值
   */
  isNumber(n: any): boolean {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  /**
   * 生成随机数
   * @param min 范围最小值
   * @param max 范围最大值
   * @param fixed 保留几位小数
   */
  random(min: number, max: number, fixed = 0): number {
    if (min >= max) {
      throw new Error('请输入正确区间数字，min必须小于max');
    }
    const factor = Math.pow(10, fixed);
    return Math.floor(Math.random() * (max * factor - min * factor + 1) + min * factor) / factor;
  }

  /**
   * 数字每千位加逗号
   * @param num 数字
   */
  formatNumberWithCommas(num: number|string): string {
    return num.toString().replace(/\d+/, (s) => {
      return s.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
    });
  }

  /**
   * 数字转中文
   * @param num 数字
   * @param upperOrLower 'lower'：小写中文数字，'upper'：大写中文数字
   */
  formatNumberToChinese(num: number, upperOrLower: 'lower' | 'upper' = 'lower'): string {
    const lowerChineseNumbers = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'];
    const lowerChineseUnits = ['', '十', '百', '千', '万', '十', '百', '千', '亿'];
    const upperChineseNumbers = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖'];
    const upperChineseUnits = ['', '拾', '佰', '仟', '万', '拾', '佰', '仟', '亿'];

    const chineseNumbers = upperOrLower === 'upper' ? upperChineseNumbers : lowerChineseNumbers;
    const chineseUnits = upperOrLower === 'upper' ? upperChineseUnits : lowerChineseUnits;

    const numberString = num.toString();
    const [integerPart, decimalPart] = numberString.split('.');
    const integerArray = integerPart.split('').map(Number);

    let chineseInteger = '';
    for (let i = 0; i < integerArray.length; i++) {
      const digit = integerArray[i];
      const unit = chineseUnits[integerArray.length - i - 1];
      if (digit === 0) {
        if (i !== integerArray.length - 1 && integerArray[i + 1] !== 0) {
          chineseInteger += chineseNumbers[digit];
        }
      } else {
        chineseInteger += chineseNumbers[digit] + unit;
      }
    }

    let chineseDecimal = '';
    if (decimalPart) {
      const decimalArray = decimalPart.split('').map(Number);
      for (let i = 0; i < decimalArray.length; i++) {
        chineseDecimal += chineseNumbers[decimalArray[i]];
      }
    }

    const result = chineseInteger + (decimalPart ? '点' + chineseDecimal : '');
    return result || '零';
  }

  /**
   * 计算阶乘
   * @param n 非负整数
   */
  factorial(n: number): number {
    if (n < 0) {
      throw new Error('输入必须是非负整数');
    }
    return n === 0 ? 1 : n * this.factorial(n - 1);
  }

  /**
   * 四舍五入
   * @param num 数字
   * @param decimalPlaces 保留的小数位数
   */
  round(num: number, decimalPlaces: number = 0): number {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(num * factor) / factor;
  }

  /**
   * 格式化货币
   * @param num 数字
   * @param currency 货币符号
   * @param decimalPlaces 保留的小数位数
   */
  formatCurrency(num: number, currency: string = '¥', decimalPlaces: number = 2): string {
    return `${currency}${this.formatNumberWithCommas(this.round(num, decimalPlaces).toFixed(decimalPlaces))}`;
  }

  /**
   * 计算两个数的最大公约数
   * @param a 数字a
   * @param b 数字b
   */
  gcd(a: number, b: number): number {
    if (!b) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  /**
   * 计算两个数的最小公倍数
   * @param a 数字a
   * @param b 数字b
   */
  lcm(a: number, b: number): number {
    return Math.abs(a * b) / this.gcd(a, b);
  }

  /**
   * 转换为百分比
   * @param num 数字
   * @param decimalPlaces 保留的小数位数
   */
  toPercentage(num: number, decimalPlaces: number = 2): string {
    return `${this.round(num * 100, decimalPlaces)}%`;
  }

  /**
   * 判断是否为整数
   * @param num 数字
   */
  isInteger(num: number): boolean {
    return Number.isInteger(num);
  }

  /**
   * 获取数字的绝对值
   * @param num 数字
   */
  abs(num: number): number {
    return Math.abs(num);
  }

  /**
   * 计算平方根
   * @param num 数字
   */
  sqrt(num: number): number {
    if (num < 0) {
      throw new Error('负数没有平方根');
    }
    return Math.sqrt(num);
  }
}

/**
 * 数字工具类
 */
export default new NumberUtils();
