export const PAIR_TOKEN_SYMBOl_IN_FIX = '-';
export const FARM_ASSET_NAME_IN_FIX = '/';
export const CHAIN_KEY_IN_FIX = '-';

/**
 * pair symbol naming
 * @param token0 token0 { symbol }
 * @param token1 token1 { symbol }
 * @returns pair's name
 */
export function getPairTokenSymbol(
  token0: { symbol: string },
  token1: { symbol: string },
): string {
  return `${token0.symbol}${PAIR_TOKEN_SYMBOl_IN_FIX}${token1.symbol}`;
}

/**
 * farm asset naming
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
 * chain unique key
 * @param chainType type of chain
 * @param chainId  id of chain
 * @returns unique network chain key
 */
export function getChainKey(chainType: string, chainId: string): string {
  return `${chainType}${CHAIN_KEY_IN_FIX}${chainId}`;
}
