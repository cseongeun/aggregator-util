import BigNumber from 'bignumber.js';

/**
 * 데시멀 곱하기
 * @param value 값
 * @param decimals 데시멀
 * @returns 데시멀만큼 우측 이동된 값
 */
export function multiplyDecimals(value: any, decimals: number): BigNumber {
  value = new BigNumber(value.toString());

  if (value.isZero()) {
    return value;
  }

  return value.shiftedBy(decimals);
}

/**
 * 데시멀 나누기
 * @param value 값
 * @param decimals 데시멀
 * @returns 데시멀만큼 좌측 이동된 값
 */
export function divideDecimals(value: any, decimals: number): BigNumber {
  value = new BigNumber(value.toString());

  if (value.isZero()) {
    return value;
  }

  return value.shiftedBy(decimals * -1);
}
