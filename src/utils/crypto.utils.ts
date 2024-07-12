import * as crypto from 'crypto';
/**
 * 加解密工具类
 */
class CryptoUtils {
  private readonly algorithm: string;
  private readonly key: Buffer;
  private readonly iv: Buffer;
  private readonly publicKey: string;
  private readonly privateKey: string;

  constructor() {
    this.algorithm = 'aes-256-cbc';
    this.key = crypto.randomBytes(32); // 256 bits key
    this.iv = crypto.randomBytes(16); // 128 bits IV

    const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
    });
    this.publicKey = publicKey.export({ type: 'pkcs1', format: 'pem' }).toString();
    this.privateKey = privateKey.export({ type: 'pkcs1', format: 'pem' }).toString();
  }
  /**
   * 对称加密（AES）
   * @param text
   * @constructor
   */
  AES_encode(text: string): string {
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return `${this.iv.toString('hex')}:${encrypted}`;
  }

  /**
   * 对称解密（AES）
   * @param encryptedText
   * @constructor
   */
  AES_decode(encryptedText: string): string {
    const [ivHex, encrypted] = encryptedText.split(':');
    const iv = Buffer.from(ivHex, 'hex');
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, iv);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
  }

  /**
   * 非对称加密（RSA）
   * @param text
   * @constructor
   */
  RSA_encode(text: string): string {
    const encrypted = crypto.publicEncrypt(this.publicKey, Buffer.from(text));
    return encrypted.toString('base64');
  }

  /**
   * 非对称解密（RSA）
   * @param encryptedText
   * @constructor
   */
  RSA_decode(encryptedText: string): string {
    const decrypted = crypto.privateDecrypt(
      {
        key: this.privateKey,
        padding: crypto.constants.RSA_PKCS1_PADDING,
      },
      Buffer.from(encryptedText, 'base64')
    );
    return decrypted.toString('utf8');
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
    return crypto.createHash('sha256').update(text).digest('hex');
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
