import * as _ from 'lodash';

import { ethers, Contract } from 'ethers';
import { Provider } from '@ethersproject/providers';

export function getStream(provider: Provider, address: string, abi: any) {
  const contract = new ethers.Contract(address, abi, provider);

  const events = abi.filter((props) => props.type === 'event');
  const iface = new ethers.utils.Interface(events);

  const abiArgs = new Map<string, string[]>();

  events.forEach((props) => {
    abiArgs.set(
      props.name,
      props?.inputs?.map((params) => params.name),
    );
  });

  const on = (callback: any) => {
    contract.on('*', (event) => {
      try {
        const { address, transactionHash, blockNumber } = event;
        const { name: eventName, args: eventArgs } = iface.parseLog(event);
        const args = this.abiArgs.get(eventName);

        const parseArgs = args.map((arg) => eventArgs[arg].toString());
        const mapArgs = _.zipObject(args, parseArgs);

        const callbackData = {
          address,
          transactionHash,
          blockNumber,
          name: eventName,
          args: mapArgs,
        };

        callback(callbackData);
      } catch (e) {}
    });
  };

  return { on };
}
