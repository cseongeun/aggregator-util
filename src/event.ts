// import _ from 'lodash';
// import { ethers, Contract } from 'ethers';
// import { Provider } from '@ethersproject/providers';
// import { Server } from 'http';

// export default class WatcherService {
//   contract: Contract;
//   watchAbi: any[];
//   watchEventArgs = new Map<string, string[]>();
//   watchIface: any;
//   server: any;

//   constructor(provider: Provider, address: string, abi: any, server?: Server) {
//     this.server = server;
//     this.contract = new ethers.Contract(address, abi, provider);
//     this.watchAbi = this._filterEvent(abi);
//     this.watchIface = new ethers.utils.Interface(this.watchAbi);

//     abi.forEach((props) => {
//       this.watchEventArgs.set(
//         props.name,
//         props?.inputs?.map((params) => params.name),
//       );
//     });
//   }

//   async watch() {
//     this.contract.on('*', (event) => {
//       const { success, property } = this._parseEvent(event);

//       if (success) {
//         const {
//           name: eventName,
//           args: eventArgs,
//           contract,
//           transactionHash,
//           blockNumber,
//         } = property;
//         const params = this.watchEventArgs.get(eventName);

//         const parseArgs = params.map((param) => eventArgs[param].toString());
//         const mapArgs = _zipObject(params, parseArgs);
//         const result = {
//           contract,
//           name: eventName,
//           args: mapArgs,
//           transactionHash,
//         };

//         if (this.server) {
//           this.server.emit('receive', result);
//         }
//       }
//     });
//   }

//   private _parseEvent(event: any) {
//     try {
//       const { name, args } = this.watchIface.parseLog(event);
//       return {
//         success: true,
//         property: {
//           name,
//           args,
//           contract: event.address,
//           transactionHash: event.transactionHash,
//           blockNumber: event.blockNumber,
//         },
//       };
//     } catch (e) {
//       return { success: false };
//     }
//   }

//   private _filterEvent(abi: any) {
//     return abi.filter((props) => props.type === 'event');
//   }
// }

export {};
