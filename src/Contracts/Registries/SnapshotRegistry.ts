/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface SnapshotRegistryInterface extends Interface {
  getFunction(
    nameOrSignature: "clearDelegate" | "delegation" | "setDelegate"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "ClearDelegate" | "SetDelegate"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "clearDelegate",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "delegation",
    values: [AddressLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setDelegate",
    values: [BytesLike, AddressLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "clearDelegate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "delegation", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setDelegate",
    data: BytesLike
  ): Result;
}

export namespace ClearDelegateEvent {
  export type InputTuple = [
    delegator: AddressLike,
    id: BytesLike,
    delegate: AddressLike
  ];
  export type OutputTuple = [delegator: string, id: string, delegate: string];
  export interface OutputObject {
    delegator: string;
    id: string;
    delegate: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SetDelegateEvent {
  export type InputTuple = [
    delegator: AddressLike,
    id: BytesLike,
    delegate: AddressLike
  ];
  export type OutputTuple = [delegator: string, id: string, delegate: string];
  export interface OutputObject {
    delegator: string;
    id: string;
    delegate: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface SnapshotRegistry extends BaseContract {
  connect(runner?: ContractRunner | null): SnapshotRegistry;
  waitForDeployment(): Promise<this>;

  interface: SnapshotRegistryInterface;

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

  clearDelegate: TypedContractMethod<[id: BytesLike], [void], "nonpayable">;

  delegation: TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike],
    [string],
    "view"
  >;

  setDelegate: TypedContractMethod<
    [id: BytesLike, delegate: AddressLike],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "clearDelegate"
  ): TypedContractMethod<[id: BytesLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "delegation"
  ): TypedContractMethod<
    [arg0: AddressLike, arg1: BytesLike],
    [string],
    "view"
  >;
  getFunction(
    nameOrSignature: "setDelegate"
  ): TypedContractMethod<
    [id: BytesLike, delegate: AddressLike],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "ClearDelegate"
  ): TypedContractEvent<
    ClearDelegateEvent.InputTuple,
    ClearDelegateEvent.OutputTuple,
    ClearDelegateEvent.OutputObject
  >;
  getEvent(
    key: "SetDelegate"
  ): TypedContractEvent<
    SetDelegateEvent.InputTuple,
    SetDelegateEvent.OutputTuple,
    SetDelegateEvent.OutputObject
  >;

  filters: {
    "ClearDelegate(address,bytes32,address)": TypedContractEvent<
      ClearDelegateEvent.InputTuple,
      ClearDelegateEvent.OutputTuple,
      ClearDelegateEvent.OutputObject
    >;
    ClearDelegate: TypedContractEvent<
      ClearDelegateEvent.InputTuple,
      ClearDelegateEvent.OutputTuple,
      ClearDelegateEvent.OutputObject
    >;

    "SetDelegate(address,bytes32,address)": TypedContractEvent<
      SetDelegateEvent.InputTuple,
      SetDelegateEvent.OutputTuple,
      SetDelegateEvent.OutputObject
    >;
    SetDelegate: TypedContractEvent<
      SetDelegateEvent.InputTuple,
      SetDelegateEvent.OutputTuple,
      SetDelegateEvent.OutputObject
    >;
  };
}
