import * as crypto from 'crypto';

/**
 * 랜덤 정수
 * @param a 시작 넘버
 * @param b 끝 넘버
 * @returns 랜덤 정수 값
 */
export function random(a = 0, b = 10000000): number {
  return crypto.randomInt(a, b);
}

/**
 * 랜덤 문자열
 * @param len 길이
 * @returns 랜덤 문자열 값
 */
export function randomString(len: number): string {
  return crypto.randomBytes(20).toString('base64').slice(0, len);
}

/**
 * 스크립트 해시
 * @param plainPassword 패스워드 평문
 * @param salt salt
 * @returns 암호화된 문자열
 */
export function scriptHash(plainPassword: string, salt: string): string {
  return crypto
    .scryptSync(plainPassword, salt, 32, { N: 16, r: 1, p: 1 })
    .toString('hex');
}

/**
 * 패스워드 암호화
 * @param plainPassword 패스워드
 * @param salt salt
 * @returns 암호화된 패스워드
 */
export function encryptPassword(plainPassword: string, salt: string): string {
  return scriptHash(plainPassword, salt).concat(salt);
}

/**
 * 패스워드 일치 여부
 * @param encryptedPassword 암호화 패스워드
 * @param plainPassword  암호화 평문
 * @returns boolean
 */
export function checkPassword(
  encryptedPassword: string,
  plainPassword: string,
): boolean {
  const salt = encryptedPassword.substr(
    encryptedPassword.length - 9,
    encryptedPassword.length,
  );
  const plainEncoded = encryptPassword(plainPassword, salt);
  return plainEncoded === encryptedPassword;
}

export function createHash(algorithm = 'md5', str: string) {
  return crypto.createHash(algorithm).update(str).digest('hex');
}
