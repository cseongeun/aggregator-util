import * as crypto from 'crypto';

/**
 * random
 * @param a start number
 * @param b end number
 * @returns random number
 */
export function random(a = 0, b = 10000000): number {
  return crypto.randomInt(a, b);
}

export function randomString(len: number): string {
  return crypto.randomBytes(20).toString('base64').slice(0, len);
}

export function scriptHash(plainPassword: string, salt: string): string {
  return crypto
    .scryptSync(plainPassword, salt, 32, { N: 16, r: 1, p: 1 })
    .toString('hex');
}

export function encryptPassword(plainPassword: string, salt: string): string {
  return scriptHash(plainPassword, salt).concat(salt);
}

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
