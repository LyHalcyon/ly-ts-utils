/**
 * 数组工具类
 */
class ArrayUtils {
  /**
   * 是否为数组
   * @param arr 任意类型
   */
  isArray(arr: any): boolean {
    return Object.prototype.toString.call(arr) === '[object Array]';
  }

  /**
   * 是否空数组
   * @param arr 任意类型
   */
  isArrayEmpty(arr: any): boolean {
    return !(arr && arr instanceof Array && arr.length > 0);
  }

  /**
   * 判断两个数组是否相等
   * @param arr1 数组1
   * @param arr2 数组2
   */
  arrayEqual(arr1: any[], arr2: any[]): boolean {
    if (arr1 === arr2) {
      return true;
    }
    if (arr1.length !== arr2.length) {
      return false;
    }
    for (let i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }

  /**
   * 将某个元素置顶
   * @param arrayData 数组
   * @param index 索引
   */
  toFirst(arrayData: any[], index: number): any[] {
    if (index !== 0) {
      arrayData.unshift(arrayData.splice(index, 1)[0]);
    }
    return arrayData;
  }

  /**
   * 将某个元素移至末尾
   * @param arrayData 数组
   * @param index 索引
   */
  toEnd(arrayData: any[], index: number): any[] {
    arrayData.push(arrayData[index]);
    arrayData.splice(index, 1);
    return arrayData;
  }

  /**
   * 将指定元素上移一位
   * @param arrayData 数组
   * @param index 索引
   */
  upGo(arrayData: any[], index: number): any[] {
    if (index !== 0) {
      arrayData[index] = arrayData.splice(index - 1, 1, arrayData[index])[0];
    } else {
      arrayData.push(arrayData.shift() as any);
    }
    return arrayData;
  }

  /**
   * 将指定元素下移一位
   * @param arrayData 数组
   * @param index 索引
   */
  downGo(arrayData: any[], index: number): any[] {
    if (index !== arrayData.length - 1) {
      arrayData[index] = arrayData.splice(index + 1, 1, arrayData[index])[0];
    } else {
      arrayData.unshift(arrayData.splice(index, 1)[0]);
    }
    return arrayData;
  }

  /**
   * 数组删除指定元素
   * @param arr 数组
   * @param ele 元素
   */
  removeArr(arr: any[], ele: any): any[] {
    const index = arr.indexOf(ele);
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  /**
   * 数组并集
   * @param arr1 数组1
   * @param arr2 数组2
   */
  unionArr(arr1: any[], arr2: any[]): any[] {
    return [...new Set([...arr1, ...arr2])];
  }

  /**
   * 数组交集
   * @param arr1 数组1
   * @param arr2 数组2
   */
  intersectArr(arr1: any[], arr2: any[]): any[] {
    return [...new Set(arr1.filter((x) => arr2.includes(x)))];
  }

  /**
   * 数组差集
   * @param arr1 数组1
   * @param arr2 数组2
   */
  differenceArr(arr1: any[], arr2: any[]): any[] {
    return [...new Set(arr1.filter((x) => !arr2.includes(x)))];
  }

  /**
   * 数组去重
   * @param arr 数组
   */
  deduplicationArr(arr: any[]): any[] {
    return [...new Set(arr)];
  }

  /**
   * 数组最大值
   * @param arr 数组
   */
  maxArr(arr: number[]): number {
    return Math.max(...arr);
  }

  /**
   * 数组最小值
   * @param arr 数组
   */
  minArr(arr: number[]): number {
    return Math.min(...arr);
  }

  /**
   * 深拷贝一个对象或数组
   * @param obj 要深拷贝的对象或数组
   * @param visited 访问过的对象的映射，用于处理循环引用
   * @returns 返回深拷贝后的新对象或数组
   */
  deepCopy(obj: any, visited?: WeakMap<any, any>): any {
    if (!obj || typeof obj !== 'object') {
      return obj;
    }

    if (!visited) {
      visited = new WeakMap();
    }

    if (visited.has(obj)) {
      return visited.get(obj);
    }

    let result: any;

    if (obj instanceof Date) {
      result = new Date(obj);
    } else if (obj instanceof RegExp) {
      result = new RegExp(obj.source, obj.flags);
    } else {
      result = Array.isArray(obj) ? [] : {};
      visited.set(obj, result);
      for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
          result[key] = this.deepCopy(obj[key], visited);
        }
      }
    }

    return result;
  }

  /**
   * 数组打平
   * @param arr 数据数组
   * @param unique 是否去重，默认不去重
   */
  flattenArray(arr: any[], unique: boolean = false): any[] {
    const result: any[] = [];

    arr.forEach((item) => {
      if (Array.isArray(item)) {
        result.push(...this.flattenArray(item));
      } else {
        result.push(item);
      }
    });

    return unique ? Array.from(new Set(result)) : result;
  }

  /**
   * 扁平化数组数据构建树形结构的数组对象
   * @param data 原始扁平化数组数据
   * @param parentIdKey 父节点关联字段名
   * @param isReturnJson 是否返回JSON字符串,默认不返回
   * @returns 树形结构的数组对象或者JSON字符串
   */
  buildTree(data: any[], parentIdKey: string, isReturnJson = false): any[] | string {
    const tree: any[] = [];
    const map: { [key: number]: any } = {};

    data.forEach((node) => {
      const id = node.id;
      map[id] = { ...node, children: [] };
    });

    data.forEach((node) => {
      const parentId = node[parentIdKey];
      if (parentId !== undefined && map[parentId]) {
        if (!Array.isArray(map[parentId].children)) {
          map[parentId].children = [];
        }
        map[parentId].children.push(map[node.id]);
      } else {
        tree.push(map[node.id]);
      }
    });

    return isReturnJson ? JSON.stringify(tree, null, 2) : tree;
  }

  /**
   * 数组按size分组
   * @param arr 数组
   * @param size 分组大小
   */
  cutArray(arr: any[], size: number): any[][] {
    const result: any[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }

  /**
   * 生成数组的排列组合
   * @param arr 原始数组（多维数组）
   */
  generateCombinations(arr: any[][]): any[][] {
    const totalArr: any[][] = [];
    const tmp: any[] = [];

    const generateCombinationsCallback = (subArr: any[], currIndex: number) => {
      if (currIndex === arr.length) {
        totalArr.push([...tmp]);
        return;
      }

      for (const val of subArr) {
        tmp[currIndex] = val;
        generateCombinationsCallback(arr[currIndex + 1] || [], currIndex + 1);
      }
    };

    generateCombinationsCallback(arr[0], 0);
    return totalArr;
  }

  /**
   * 数组求和
   * @param arr 数组
   */
  sum(arr: number[]): number {
    return arr.reduce((acc, val) => acc + val, 0);
  }

  /**
   * 数组平均值
   * @param arr 数组
   */
  average(arr: number[]): number {
    return arr.length === 0 ? 0 : this.sum(arr) / arr.length;
  }

  /**
   * 获取数组中的唯一值
   * @param arr 数组
   */
  unique(arr: any[]): any[] {
    return [...new Set(arr)];
  }

  /**
   * 数组分区
   * @param arr 数组
   * @param predicate 条件函数
   */
  partition(arr: any[], predicate: (val: any) => boolean): [any[], any[]] {
    return arr.reduce(
      ([pass, fail], elem) => {
        return predicate(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]];
      },
      [[], []]
    );
  }

  /**
   * 查找数组中的最大元素及其索引
   * @param arr 数组
   */
  findMax(arr: number[]): { max: number; index: number } {
    if (arr.length === 0) {
      throw new Error('数组不能为空');
    }
    let max = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        index = i;
      }
    }
    return { max, index };
  }

  /**
   * 查找数组中的最小元素及其索引
   * @param arr 数组
   */
  findMin(arr: number[]): { min: number; index: number } {
    if (arr.length === 0) {
      throw new Error('数组不能为空');
    }
    let min = arr[0];
    let index = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
        index = i;
      }
    }
    return { min, index };
  }

  /**
   * 打乱数组
   * @param arr 数组
   */
  shuffle(arr: any[]): any[] {
    const result = arr.slice();
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [result[i], result[j]] = [result[j], result[i]];
    }
    return result;
  }

  /**
   * 从数组中随机取样
   * @param arr 数组
   * @param n 取样数量
   */
  sample(arr: any[], n: number): any[] {
    if (n >= arr.length) {
      return this.shuffle(arr);
    }
    const shuffled = this.shuffle(arr);
    return shuffled.slice(0, n);
  }
}

/**
 * 数组工具类
 */
export default new ArrayUtils();
