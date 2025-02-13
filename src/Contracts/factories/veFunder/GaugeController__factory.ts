/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  GaugeController,
  GaugeControllerInterface,
} from "../../veFunder/GaugeController";

const _abi = [
  {
    name: "add_gauge",
    outputs: [],
    inputs: [
      {
        type: "address",
        name: "addr",
      },
      {
        type: "int128",
        name: "gauge_type",
      },
      {
        type: "uint256",
        name: "weight",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class GaugeController__factory {
  static readonly abi = _abi;
  static createInterface(): GaugeControllerInterface {
    return new utils.Interface(_abi) as GaugeControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GaugeController {
    return new Contract(address, _abi, signerOrProvider) as GaugeController;
  }
}
