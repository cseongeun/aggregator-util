import { ethers } from 'ethers';
import { getCreate2Address } from '@ethersproject/address';
import { keccak256, pack } from '@ethersproject/solidity';

/**
 * 체크섬 주소로 변환
 * @param address 주소
 * @returns 체크섬 주소
 */
export function toCheckSumAddress(address: string): string {
  return ethers.utils.getAddress(address);
}

/**
 * 주소 유효성 검증
 * @param address 주소
 * @returns 유효성 여부
 */
export function isAddress(address: string): boolean {
  try {
    toCheckSumAddress(address);
    return true;
  } catch (e) {
    return false;
  }
}

/**
 * 제로 주소 여부 조회
 * @param address 주소
 * @returns 제로 주소
 */
export function isZeroAddress(address: string): boolean {
  return address === ethers.constants.AddressZero;
}

/**
 * 페어 주소 계산
 * @param factoryAddress 페어 생성 팩토리
 * @param factoryInitHash 팩토리 초기화 해시
 * @param token0Address  토큰 0 주소
 * @param token1Address  토큰 1 주소
 * @returns 페어 주소
 */
export function computePairAddress(
  factoryAddress: string,
  factoryInitHash: string,
  token0Address: string,
  token1Address: string,
) {
  // this uniswap sdk: Token.sortsBefore
  const [token0, token1] =
    token0Address.toLowerCase() < token1Address.toLowerCase()
      ? [token0Address, token1Address]
      : [token1Address, token0Address];

  return getCreate2Address(
    factoryAddress,
    keccak256(['bytes'], [pack(['address', 'address'], [token0, token1])]),
    factoryInitHash,
  );
}
