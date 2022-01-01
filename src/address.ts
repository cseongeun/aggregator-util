import { ethers } from 'ethers';
import { getCreate2Address } from '@ethersproject/address';
import { keccak256, pack } from '@ethersproject/solidity';

/**
 * to Checksum Address
 * @param address address
 * @returns checkSum address
 */
export function toCheckSumAddress(address: string): string {
  return ethers.utils.getAddress(address);
}

/**
 * check address validation
 * @param address address
 * @returns boolean
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
 * check is zero address
 * @param address address
 * @returns boolean
 */
export function isZeroAddress(address: string): boolean {
  return address === ethers.constants.AddressZero;
}

/**
 * compute pair
 * @param factoryAddress pair factory
 * @param factoryInitHash pair factory init hash
 * @param token0Address  token0 address
 * @param token1Address  token1 address
 * @returns pair address
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
