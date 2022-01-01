import { LCDClient } from '@terra-money/terra.js';

export const queryContract = async (
  terra: LCDClient,
  contract: string,
  query: any,
): Promise<any> => {
  return terra.wasm.contractQuery(contract, query);
};

export const getSafeCW20TokenInfo = async (
  terra: LCDClient,
  multicall: string,
  tokenAddress: string,
) => {
  const response = await queryContract(terra, multicall, {
    get_cw20_token_info: { token_address: tokenAddress },
  });
  return response?.result;
};

export const getSafeCW20TokenBalance = async (
  terra: LCDClient,
  multicall: string,
  address: string,
  tokenAddress: string,
) => {
  const response = await queryContract(terra, multicall, {
    get_cw20_token_balance: { address: address, token_address: tokenAddress },
  });
  return response?.result;
};

export const getBatchCW20TokenInfos = async (
  terra: LCDClient,
  multicall: string,
  tokenAddresses: string[],
) => {
  const response = await queryContract(terra, multicall, {
    get_cw20_token_infos: { token_addresses: tokenAddresses },
  });
  return response?.result;
};

export const getBatchCW20TokenBalances = async (
  terra: LCDClient,
  multicall: string,
  address: string,
  tokenAddresses: string[],
) => {
  const response = await queryContract(terra, multicall, {
    get_cw20_token_balances: {
      address: address,
      token_addresses: tokenAddresses,
    },
  });
  return response?.result;
};

export const getBatchNativeWithCW20TokenBalances = async (
  terra: LCDClient,
  multicall: string,
  address: string,
  tokenAddresses: string[],
) => {
  const response = await queryContract(terra, multicall, {
    get_native_with_cw20_token_balances: {
      address: address,
      token_addresses: tokenAddresses,
    },
  });
  return response?.result;
};
