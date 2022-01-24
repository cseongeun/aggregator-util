import { AccAddress } from '@terra-money/terra.js';

/**
 * 검증인 주소를 계정 주소로 변환
 * @param address 검증인 주소
 * @returns 주소
 */
export function toValidateAddress(address: string): AccAddress {
  return AccAddress.fromValAddress(address);
}

/**
 * 주소 유효성 검증
 * @param address 주소
 * @returns 주소 유효성 여부
 */
export function isValidate(address: string): boolean {
  return AccAddress.validate(address);
}
