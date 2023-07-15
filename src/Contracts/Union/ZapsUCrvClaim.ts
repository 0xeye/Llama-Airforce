/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface ZapsUCrvClaimInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "claimFromDistributorAndStakeIn3PoolConvex"
      | "claimFromDistributorAsCrv"
      | "claimFromDistributorAsCvx"
      | "claimFromDistributorAsEth"
      | "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],uint256,uint256,address)"
      | "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],address)"
      | "claimFromDistributorAsUsdt"
      | "claimFromDistributorViaUniV2EthPair"
      | "distributor"
      | "setApprovals"
      | "vault"
      | "zaps"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claimFromDistributorAndStakeIn3PoolConvex",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsCrv",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsCvx",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish,
      AddressLike,
      boolean
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsEth",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],uint256,uint256,address)",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish,
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],address)",
    values: [BigNumberish, AddressLike, BigNumberish, BytesLike[], AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorAsUsdt",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFromDistributorViaUniV2EthPair",
    values: [
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike[],
      BigNumberish,
      AddressLike,
      AddressLike,
      AddressLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "distributor",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovals",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "vault", values?: undefined): string;
  encodeFunctionData(functionFragment: "zaps", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "claimFromDistributorAndStakeIn3PoolConvex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsCrv",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsCvx",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsEth",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],uint256,uint256,address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],address)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorAsUsdt",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimFromDistributorViaUniV2EthPair",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "distributor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovals",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "zaps", data: BytesLike): Result;
}

export interface ZapsUCrvClaim extends BaseContract {
  connect(runner?: ContractRunner | null): ZapsUCrvClaim;
  waitForDeployment(): Promise<this>;

  interface: ZapsUCrvClaimInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  claimFromDistributorAndStakeIn3PoolConvex: TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  claimFromDistributorAsCrv: TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  claimFromDistributorAsCvx: TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike,
      lock: boolean
    ],
    [void],
    "nonpayable"
  >;

  claimFromDistributorAsEth: TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],uint256,uint256,address)": TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      assetIndex: BigNumberish,
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],address)": TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  claimFromDistributorAsUsdt: TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;

  claimFromDistributorViaUniV2EthPair: TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      router: AddressLike,
      outputToken: AddressLike,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;

  distributor: TypedContractMethod<[], [string], "view">;

  setApprovals: TypedContractMethod<[], [void], "nonpayable">;

  vault: TypedContractMethod<[], [string], "view">;

  zaps: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "claimFromDistributorAndStakeIn3PoolConvex"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFromDistributorAsCrv"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFromDistributorAsCvx"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike,
      lock: boolean
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFromDistributorAsEth"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],uint256,uint256,address)"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      assetIndex: BigNumberish,
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFromDistributorAsUnderlying(uint256,address,uint256,bytes32[],address)"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFromDistributorAsUsdt"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      to: AddressLike
    ],
    [bigint],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "claimFromDistributorViaUniV2EthPair"
  ): TypedContractMethod<
    [
      index: BigNumberish,
      account: AddressLike,
      amount: BigNumberish,
      merkleProof: BytesLike[],
      minAmountOut: BigNumberish,
      router: AddressLike,
      outputToken: AddressLike,
      to: AddressLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "distributor"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "setApprovals"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "vault"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "zaps"
  ): TypedContractMethod<[], [string], "view">;

  filters: {};
}
