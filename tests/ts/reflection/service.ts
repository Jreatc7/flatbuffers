// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {KeyValue, KeyValueT} from '../reflection/key-value.js';
import {RPCCall, RPCCallT} from '../reflection/rpccall.js';


export class Service implements flatbuffers.IUnpackableObject<ServiceT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): Service {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsService(bb: flatbuffers.ByteBuffer, obj?: Service): Service {
    return (obj || new Service()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsService(bb: flatbuffers.ByteBuffer, obj?: Service): Service {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new Service()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  name(): string | null
  name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null
  name(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  calls(index: number, obj?: RPCCall): RPCCall | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? (obj || new RPCCall()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
  }

  callsLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  attributes(index: number, obj?: KeyValue): KeyValue | null {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? (obj || new KeyValue()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
  }

  attributesLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  documentation(index: number): string
  documentation(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array
  documentation(index: number, optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }

  documentationLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  /**
   * File that this Service is declared in.
   */
  declarationFile(): string | null
  declarationFile(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null
  declarationFile(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  static getFullyQualifiedName(): string {
    return 'reflection_Service';
  }

  static startService(builder: flatbuffers.Builder) {
    builder.startObject(5);
  }

  static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, nameOffset, 0);
  }

  static addCalls(builder: flatbuffers.Builder, callsOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, callsOffset, 0);
  }

  static createCallsVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startCallsVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addAttributes(builder: flatbuffers.Builder, attributesOffset: flatbuffers.Offset) {
    builder.addFieldOffset(2, attributesOffset, 0);
  }

  static createAttributesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startAttributesVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addDocumentation(builder: flatbuffers.Builder, documentationOffset: flatbuffers.Offset) {
    builder.addFieldOffset(3, documentationOffset, 0);
  }

  static createDocumentationVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startDocumentationVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static addDeclarationFile(builder: flatbuffers.Builder, declarationFileOffset: flatbuffers.Offset) {
    builder.addFieldOffset(4, declarationFileOffset, 0);
  }

  static endService(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4) // name
    return offset;
  }

  static createService(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset, callsOffset: flatbuffers.Offset, attributesOffset: flatbuffers.Offset, documentationOffset: flatbuffers.Offset, declarationFileOffset: flatbuffers.Offset): flatbuffers.Offset {
    Service.startService(builder);
    Service.addName(builder, nameOffset);
    Service.addCalls(builder, callsOffset);
    Service.addAttributes(builder, attributesOffset);
    Service.addDocumentation(builder, documentationOffset);
    Service.addDeclarationFile(builder, declarationFileOffset);
    return Service.endService(builder);
  }

  unpack(): ServiceT {
    return new ServiceT(
      this.name(),
      this.bb!.createObjList<RPCCall, RPCCallT>(this.calls.bind(this), this.callsLength()),
      this.bb!.createObjList<KeyValue, KeyValueT>(this.attributes.bind(this), this.attributesLength()),
      this.bb!.createScalarList<string>(this.documentation.bind(this), this.documentationLength()),
      this.declarationFile()
    );
  }


  unpackTo(_o: ServiceT): void {
    _o.name = this.name();
    _o.calls = this.bb!.createObjList<RPCCall, RPCCallT>(this.calls.bind(this), this.callsLength());
    _o.attributes = this.bb!.createObjList<KeyValue, KeyValueT>(this.attributes.bind(this), this.attributesLength());
    _o.documentation = this.bb!.createScalarList<string>(this.documentation.bind(this), this.documentationLength());
    _o.declarationFile = this.declarationFile();
  }
}

export class ServiceT implements flatbuffers.IGeneratedObject {
  constructor(
    public name: string | Uint8Array | null = null,
    public calls: (RPCCallT)[] = [],
    public attributes: (KeyValueT)[] = [],
    public documentation: (string)[] = [],
    public declarationFile: string | Uint8Array | null = null
  ) {
  }


  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const name = (this.name !== null ? builder.createString(this.name!) : 0);
    const calls = Service.createCallsVector(builder, builder.createObjectOffsetList(this.calls));
    const attributes = Service.createAttributesVector(builder, builder.createObjectOffsetList(this.attributes));
    const documentation = Service.createDocumentationVector(builder, builder.createObjectOffsetList(this.documentation));
    const declarationFile = (this.declarationFile !== null ? builder.createString(this.declarationFile!) : 0);

    return Service.createService(builder,
      name,
      calls,
      attributes,
      documentation,
      declarationFile
    );
  }
}
