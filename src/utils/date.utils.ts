// 补零函数，用于将数字转换为两位数的字符串
function padZero(num: number): string {
  return num < 10 ? '0' + num : String(num);
}

/**
 * 时间工具类
 */
class DateUtils {
  /**
   * 格式化时间
   * @param date 时间
   * @param returnDateType YYYY-MM-DD:年-月-日 YYYY-MM:年-月 YYYY:年 MM:月 DD:日 MM-DD:月-日 hh:mm:ss:时分秒 hh:mm:时分
   */
  formatDate(
    date: Date,
    returnDateType?:
      | 'YYYY-MM-DD'
      | 'YYYY-MM'
      | 'YYYY'
      | 'MM'
      | 'DD'
      | 'MM-DD'
      | 'MM-DD hh:mm'
      | 'hh:mm:ss'
      | 'hh:mm'
  ): string {
    const year: number = date.getFullYear();
    const month: string = padZero(date.getMonth() + 1);
    const day: string = padZero(date.getDate());
    const hour: string = padZero(date.getHours());
    const minute: string = padZero(date.getMinutes());
    const second: string = padZero(date.getSeconds());
    let timeString: string = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

    switch (returnDateType) {
      case 'YYYY-MM-DD':
        timeString = `${year}-${month}-${day}`;
        break;
      case 'YYYY-MM':
        timeString = `${year}-${month}`;
        break;
      case 'YYYY':
        timeString = `${year}`;
        break;
      case 'MM':
        timeString = `${month}`;
        break;
      case 'DD':
        timeString = `${day}`;
        break;
      case 'MM-DD':
        timeString = `${month}-${day}`;
        break;
      case 'MM-DD hh:mm':
        timeString = `${month}-${day} ${hour}:${minute}`;
        break;
      case 'hh:mm:ss':
        timeString = `${hour}:${minute}:${second}`;
        break;
      case 'hh:mm':
        timeString = `${hour}:${minute}`;
        break;
      default:
        break;
    }
    return timeString;
  }

  /**
   * 获取当前日期星期
   */
  getDateWeek(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = padZero(date.getMonth() + 1);
    const strDate = padZero(date.getDate());
    const days = date.getDay();

    const weekStr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'][days];

    return `${year}-${month}-${strDate} ${weekStr}`;
  }

  /**
   * 计算两个日期之间的差异
   * @param date1 起始日期
   * @param date2 结束日期
   * @param unit 差异单位：'days', 'hours', 'minutes', 'seconds'
   */
  dateDiff(date1: Date, date2: Date, unit: 'days' | 'hours' | 'minutes' | 'seconds' = 'days'): number {
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    switch (unit) {
      case 'days':
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      case 'hours':
        return Math.ceil(diffTime / (1000 * 60 * 60));
      case 'minutes':
        return Math.ceil(diffTime / (1000 * 60));
      case 'seconds':
        return Math.ceil(diffTime / 1000);
      default:
        return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    }
  }

  /**
   * 将字符串解析为日期对象
   * @param dateString 日期字符串
   * @param format 日期格式：'YYYY-MM-DD', 'YYYY-MM-DD hh:mm:ss', etc.
   */
  parseDate(dateString: string, format: 'YYYY-MM-DD' | 'YYYY-MM-DD hh:mm:ss' = 'YYYY-MM-DD'): Date | null {
    const formatParts = format.split(/[- :]/);
    const dateParts = dateString.split(/[- :]/);

    if (formatParts.length !== dateParts.length) {
      return null;
    }

    const dateInfo: any = {};
    formatParts.forEach((part, index) => {
      dateInfo[part] = parseInt(dateParts[index], 10);
    });

    if (format === 'YYYY-MM-DD') {
      return new Date(dateInfo['YYYY'], dateInfo['MM'] - 1, dateInfo['DD']);
    }

    if (format === 'YYYY-MM-DD hh:mm:ss') {
      return new Date(dateInfo['YYYY'], dateInfo['MM'] - 1, dateInfo['DD'], dateInfo['hh'], dateInfo['mm'], dateInfo['ss']);
    }

    return null;
  }

  /**
   * 获取某个月的天数
   * @param year 年
   * @param month 月 (1-12)
   */
  getDaysInMonth(year: number, month: number): number {
    return new Date(year, month, 0).getDate();
  }

  /**
   * 判断是否为闰年
   * @param year 年
   */
  isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  /**
   * 获取当前时间戳
   */
  getCurrentTimestamp(): number {
    return Date.now();
  }

  /**
   * 获取某个日期所在周的起始和结束日期
   * @param date 日期对象
   */
  getWeekStartEnd(date: Date): { startDate: Date; endDate: Date } {
    const day = date.getDay() || 7; // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const startDate = new Date(date);
    const endDate = new Date(date);

    startDate.setDate(date.getDate() - day + 1);
    endDate.setDate(date.getDate() + (7 - day));

    return { startDate, endDate };
  }

  /**
   * 获取某个日期是当年的第几周
   * @param date 日期对象
   */
  getWeekNumber(date: Date): number {
    const start = new Date(date.getFullYear(), 0, 1);
    const diff = (date.getTime() - start.getTime() + (start.getTimezoneOffset() - date.getTimezoneOffset()) * 60000) / 86400000;
    return Math.ceil((diff + start.getDay() + 1) / 7);
  }

  /**
   * 计算两个日期之间的工作日天数
   * @param startDate 起始日期
   * @param endDate 结束日期
   */
  getBusinessDays(startDate: Date, endDate: Date): number {
    let count = 0;
    let curDate = new Date(startDate);

    while (curDate <= endDate) {
      const dayOfWeek = curDate.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        count++;
      }
      curDate.setDate(curDate.getDate() + 1);
    }

    return count;
  }
}

/**
 * 时间工具类
 */
export default new DateUtils();
