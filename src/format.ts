import { ethers, BigNumber } from 'ethers';

/**
 * 수량 콤마 적용
 * @param amount 수량
 * @returns 콤마 적용된 문자열
 */
export function toCommify(amount: any): string {
  return ethers.utils.commify(amount.toString());
}

/**
 * Bytes32 => String
 * @param bytes32  Bytes32
 * @returns String
 */
export function bytes32ToString(bytes32: string): string {
  return ethers.utils.parseBytes32String(bytes32);
}

/**
 * String => Bytes32
 * @param string  String
 * @returns Bytes32
 */
export function stringToBytes32(string: string): string {
  return ethers.utils.formatBytes32String(string);
}

/**
 * Hex 문자열로 변환
 * @param value  값
 * @returns Hex 문자열
 */
export function toHexString(value: any): string {
  return ethers.utils.hexStripZeros(BigNumber.from(value).toHexString());
}
