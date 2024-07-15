import CryptoJS from 'crypto-js';
/**
 * 加解密工具类
 */
class CryptoUtils {
  private readonly key: CryptoJS.lib.WordArray;
  private readonly iv: CryptoJS.lib.WordArray;
  // private readonly publicKey: string;
  // private readonly privateKey: string;

  constructor() {
    this.key = CryptoJS.enc.Utf8.parse('ly-ts-utils-key');
    this.iv = CryptoJS.enc.Utf8.parse('ly-ts-utils-iv');
  }
  /**
   * 对称加密（AES）
   * @param text
   * @constructor
   */
  AES_encode(text: string): string {
    return CryptoJS.AES.encrypt(text, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString();
  }

  /**
   * 对称解密（AES）
   * @param text
   * @constructor
   */
  AES_decode(text: string): string {
    return CryptoJS.AES.decrypt(text, this.key, {
      iv: this.iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }).toString(CryptoJS.enc.Utf8);
  }

  /**
   * Base64 编码
   * @param str
   */
  base64_encode(str: string): string {
    return Buffer.from(str, 'utf8').toString('base64');
  }

  /**
   * Base64 解码
   * @param base64
   */
  base64_decode(base64: string): string {
    return Buffer.from(base64, 'base64').toString('utf8');
  }

  /**
   * 生成 SHA-256 哈希值
   * @param text 待哈希的字符串
   * @returns 哈希值的十六进制字符串表示
   */
  hash(text: string): string {
    return CryptoJS.SHA256(text).toString(CryptoJS.enc.Hex);
  }

  /**
   * 验证字符串与哈希值是否匹配
   * @param text 待验证的字符串
   * @param hash 要匹配的哈希值
   * @returns 字符串的哈希值是否与给定的哈希值匹配
   */
  verifyHash(text: string, hash: string): boolean {
    return this.hash(text) === hash;
  }
}
/**
 * 加解密工具类
 */
export default new CryptoUtils()
