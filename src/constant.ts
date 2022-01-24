import { ethers } from 'ethers';
import BigNumber from 'bignumber.js';

// zero 주소
export const ZERO_ADDRESS = ethers.constants.AddressZero;

// zero 해시
export const ZERO_HASH = ethers.constants.HashZero;

// null 바이트
export const NULL_BYTE = '0x';

// zero
export const ZERO = new BigNumber(0);

// 1년 일수
export const ONE_YEAR_DAYS = new BigNumber(365);
// 하루 총 초
export const ONE_DAY_SECONDS = new BigNumber(86400);
// 일년 총 초
export const ONE_YEAR_SECONDS = new BigNumber(365).multipliedBy(
  new BigNumber(86400),
);

// 알수없는 문자열
export const UNKNOWN_STRING = 'UNKNOWN';

// 알수없는 UINT256
export const UNKNOWN_UINT256 = 0;
