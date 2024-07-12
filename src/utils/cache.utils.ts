/**
 * 缓存工具类
 */
class CacheUtils{
  /**
   * localStorage存数据
   * @param key
   * @param value
   */
  localStorageSet(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * localStorage取数据
   * @param key
   */
  localStorageGet(key: string): any {
    const value = window.localStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
  }

  /**
   * localStorage删除指定key的数据
   * @param key
   */
  localStorageDel(key: string) {
    window.localStorage.removeItem(key);
  }

  /**
   * localStorage清除所有数据
   */
  localStorageClear() {
    window.localStorage.clear();
  }

  //-----------------------------------------------------

  /**
   * sessionStorage 存数据
   * @param key
   * @param value
   */
  sessionStorageSet(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * sessionStorage 取数据
   * @param key
   */
  sessionStorageGet(key: string): any {
    const value = window.sessionStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  }

  /**
   * sessionStorage 删除指定 key 的数据
   * @param key
   */
  sessionStorageDel(key: string) {
    window.sessionStorage.removeItem(key);
  }

  /**
   * sessionStorage 清除所有数据
   */
  sessionStorageClear() {
    window.sessionStorage.clear();
  }

  //-----------------------------------------------------

  /**
   * 设置 cookie
   * @param key
   * @param value
   * @param time 有效期，默认单位：天
   * @param timeType 有效期单位，可选 'day', 'hour', 'minute'
   */
  setCookie(key: string, value: string, time: number, timeType: 'day' | 'hour' | 'minute' = 'day') {
    const date = new Date();
    switch (timeType) {
      case 'minute':
        date.setTime(date.getTime() + (time * 60 * 1000));
        break;
      case 'hour':
        date.setTime(date.getTime() + (time * 60 * 60 * 1000));
        break;
      case 'day':
      default:
        date.setTime(date.getTime() + (time * 24 * 60 * 60 * 1000));
        break;
    }
    const expires = "expires=" + date.toUTCString();
    document.cookie = `${key}=${value};${expires};path=/`;
  }

  /**
   * 获取 cookie
   * @param key
   */
  getCookie(key: string): string | null {
    const name = key + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return null;
  }

  /**
   * 删除 cookie
   * @param key
   */
  deleteCookie(key: string) {
    this.setCookie(key, "", -1);
  }

  /**
   * 清除所有 cookie
   */
  clearCookies() {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i];
      const eqPos = cookie.indexOf("=");
      const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
  }
}
/**
 * 缓存工具类
 */
export default new CacheUtils()
