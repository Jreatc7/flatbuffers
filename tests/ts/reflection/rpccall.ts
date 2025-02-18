// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';

import {KeyValue, KeyValueT} from '../reflection/key-value.js';
import {Object_, Object_T} from '../reflection/object.js';


export class RPCCall implements flatbuffers.IUnpackableObject<RPCCallT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): RPCCall {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsRPCCall(bb: flatbuffers.ByteBuffer, obj?: RPCCall): RPCCall {
    return (obj || new RPCCall()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsRPCCall(bb: flatbuffers.ByteBuffer, obj?: RPCCall): RPCCall {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new RPCCall()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  name(): string | null
  name(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null
  name(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  request(obj?: Object_): Object_ | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? (obj || new Object_()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
  }

  response(obj?: Object_): Object_ | null {
    const offset = this.bb!.__offset(this.bb_pos, 8);
    return offset ? (obj || new Object_()).__init(this.bb!.__indirect(this.bb_pos + offset), this.bb!) : null;
  }

  attributes(index: number, obj?: KeyValue): KeyValue | null {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? (obj || new KeyValue()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
  }

  attributesLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 10);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  documentation(index: number): string
  documentation(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array
  documentation(index: number, optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }

  documentationLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 12);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  static getFullyQualifiedName(): string {
    return 'reflection_RPCCall';
  }

  static startRPCCall(builder: flatbuffers.Builder) {
    builder.startObject(5);
  }

  static addName(builder: flatbuffers.Builder, nameOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, nameOffset, 0);
  }

  static addRequest(builder: flatbuffers.Builder, requestOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, requestOffset, 0);
  }

  static addResponse(builder: flatbuffers.Builder, responseOffset: flatbuffers.Offset) {
    builder.addFieldOffset(2, responseOffset, 0);
  }

  static addAttributes(builder: flatbuffers.Builder, attributesOffset: flatbuffers.Offset) {
    builder.addFieldOffset(3, attributesOffset, 0);
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
    builder.addFieldOffset(4, documentationOffset, 0);
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

  static endRPCCall(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4) // name
    builder.requiredField(offset, 6) // request
    builder.requiredField(offset, 8) // response
    return offset;
  }


  unpack(): RPCCallT {
    return new RPCCallT(
      this.name(),
      (this.request() !== null ? this.request()!.unpack() : null),
      (this.response() !== null ? this.response()!.unpack() : null),
      this.bb!.createObjList<KeyValue, KeyValueT>(this.attributes.bind(this), this.attributesLength()),
      this.bb!.createScalarList<string>(this.documentation.bind(this), this.documentationLength())
    );
  }


  unpackTo(_o: RPCCallT): void {
    _o.name = this.name();
    _o.request = (this.request() !== null ? this.request()!.unpack() : null);
    _o.response = (this.response() !== null ? this.response()!.unpack() : null);
    _o.attributes = this.bb!.createObjList<KeyValue, KeyValueT>(this.attributes.bind(this), this.attributesLength());
    _o.documentation = this.bb!.createScalarList<string>(this.documentation.bind(this), this.documentationLength());
  }
}

export class RPCCallT implements flatbuffers.IGeneratedObject {
  constructor(
    public name: string | Uint8Array | null = null,
    public request: Object_T | null = null,
    public response: Object_T | null = null,
    public attributes: (KeyValueT)[] = [],
    public documentation: (string)[] = []
  ) {
  }


  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const name = (this.name !== null ? builder.createString(this.name!) : 0);
    const request = (this.request !== null ? this.request!.pack(builder) : 0);
    const response = (this.response !== null ? this.response!.pack(builder) : 0);
    const attributes = RPCCall.createAttributesVector(builder, builder.createObjectOffsetList(this.attributes));
    const documentation = RPCCall.createDocumentationVector(builder, builder.createObjectOffsetList(this.documentation));

    RPCCall.startRPCCall(builder);
    RPCCall.addName(builder, name);
    RPCCall.addRequest(builder, request);
    RPCCall.addResponse(builder, response);
    RPCCall.addAttributes(builder, attributes);
    RPCCall.addDocumentation(builder, documentation);

    return RPCCall.endRPCCall(builder);
  }
}
