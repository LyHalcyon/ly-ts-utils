/**
 * 对象工具类
 */
class ObjectUtils{
  /**
   * 深拷贝对象
   * @param obj 需要拷贝的对象
   * @returns 拷贝后的新对象
   */
  deepCopy<T>(obj: T): T {
    return JSON.parse(JSON.stringify(obj));
  }

  /**
   * 合并多个对象
   * @param objects 需要合并的对象
   * @returns 合并后的对象
   */
  merge<T>(...objects: Partial<T>[]): T {
    return Object.assign({}, ...objects);
  }

  /**
   * 选择对象中的部分属性
   * @param obj 源对象
   * @param keys 需要选择的属性键数组
   * @returns 选择后的新对象
   */
  pick<T extends object, K extends keyof T>(obj: T, keys: K[]): Pick<T, K> {
    const result = {} as Pick<T, K>;
    keys.forEach(key => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  }

  /**
   * 过滤对象中的部分属性
   * @param obj 源对象
   * @param keys 需要过滤的属性键数组
   * @returns 过滤后的新对象
   */
  omit<T extends object, K extends keyof T>(obj: T, keys: K[]): Omit<T, K> {
    const result = { ...obj } as Omit<T, K>;
    keys.forEach(key => {
      if (key in result) {
        delete (result as any)[key];
      }
    });
    return result;
  }

  /**
   * 检查对象是否为空
   * @param obj 需要检查的对象
   * @returns 对象是否为空
   */
  isEmpty<T extends object>(obj: T): boolean {
    return Object.keys(obj).length === 0;
  }

  /**
   * 获取对象的键数组
   * @param obj 需要获取键数组的对象
   * @returns 对象的键数组
   */
  keys<T extends object>(obj: T): (keyof T)[] {
    return Object.keys(obj) as (keyof T)[];
  }

  /**
   * 获取对象的值数组
   * @param obj 需要获取值数组的对象
   * @returns 对象的值数组
   */
  values<T extends object>(obj: T): T[keyof T][] {
    return Object.values(obj);
  }

  /**
   * 对象属性键值对映射
   * @param obj 需要映射的对象
   * @param callback 对每个键值对的映射函数
   * @returns 映射后的新对象
   */
  mapValues<T extends object, U>(obj: T, callback: (value: T[keyof T], key: keyof T) => U): { [K in keyof T]: U } {
    const result = {} as { [K in keyof T]: U };
    Object.keys(obj).forEach(key => {
      const typedKey = key as keyof T;
      result[typedKey] = callback(obj[typedKey], typedKey);
    });
    return result;
  }
  /**
   * 去除参数空数据（用于向后台传递参数的时候）
   * @param obj
   */
  filterEmptyData(obj: any) {
    for (let prop in obj) {
      obj[prop] === '' ? delete obj[prop] : obj[prop];
    }
    return obj;
  }
}
/**
 * 对象工具类
 */
export default new ObjectUtils();
