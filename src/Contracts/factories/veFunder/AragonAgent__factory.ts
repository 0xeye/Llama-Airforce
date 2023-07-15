/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  AragonAgent,
  AragonAgentInterface,
} from "../../veFunder/AragonAgent";

const _abi = [
  {
    constant: false,
    inputs: [
      {
        name: "_target",
        type: "address",
      },
      {
        name: "_ethValue",
        type: "uint256",
      },
      {
        name: "_data",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class AragonAgent__factory {
  static readonly abi = _abi;
  static createInterface(): AragonAgentInterface {
    return new Interface(_abi) as AragonAgentInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): AragonAgent {
    return new Contract(address, _abi, runner) as unknown as AragonAgent;
  }
}
