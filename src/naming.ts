export const PAIR_TOKEN_SYMBOl_IN_FIX = '-';
export const FARM_ASSET_NAME_IN_FIX = '/';
export const CHAIN_KEY_IN_FIX = '-';

/**
 * 페어 심볼 명
 * @param token0 token0 { symbol }
 * @param token1 token1 { symbol }
 * @returns 페어 심볼 명
 */
export function getPairTokenSymbol(
  token0: { symbol: string },
  token1: { symbol: string },
): string {
  return `${token0.symbol}${PAIR_TOKEN_SYMBOl_IN_FIX}${token1.symbol}`;
}

/**
 * 팜 자산 명
 * @param stakeTokens stake tokens
 * @param rewardTokens  reward tokens
 * @returns farm asset's name
 */
export function getFarmAssetName(
  stakeTokens: { symbol: string }[],
  rewardTokens: { symbol: string }[],
): string {
  const stakeSymbols = stakeTokens.map(({ symbol }) => symbol).join(' + ');
  const rewardSymbols = rewardTokens.map(({ symbol }) => symbol).join(' + ');
  return `${stakeSymbols}${FARM_ASSET_NAME_IN_FIX}${rewardSymbols}`;
}

/**
 * 체인 유니크 키
 * @param chainType 체인 타입
 * @param chainId  체인 아이디
 * @returns 유니크한 체인 키
 */
export function getChainKey(chainType: string, chainId: string): string {
  return `${chainType}${CHAIN_KEY_IN_FIX}${chainId}`;
}
