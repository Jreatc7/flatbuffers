// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from 'flatbuffers';


/**
 * File specific information.
 * Symbols declared within a file may be recovered by iterating over all
 * symbols and examining the `declaration_file` field.
 */
export class SchemaFile implements flatbuffers.IUnpackableObject<SchemaFileT> {
  bb: flatbuffers.ByteBuffer | null = null;
  bb_pos = 0;

  __init(i: number, bb: flatbuffers.ByteBuffer): SchemaFile {
    this.bb_pos = i;
    this.bb = bb;
    return this;
  }

  static getRootAsSchemaFile(bb: flatbuffers.ByteBuffer, obj?: SchemaFile): SchemaFile {
    return (obj || new SchemaFile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  static getSizePrefixedRootAsSchemaFile(bb: flatbuffers.ByteBuffer, obj?: SchemaFile): SchemaFile {
    bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
    return (obj || new SchemaFile()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
  }

  /**
   * Filename, relative to project root.
   */
  filename(): string | null
  filename(optionalEncoding: flatbuffers.Encoding): string | Uint8Array | null
  filename(optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 4);
    return offset ? this.bb!.__string(this.bb_pos + offset, optionalEncoding) : null;
  }

  /**
   * Names of included files, relative to project root.
   */
  includedFilenames(index: number): string
  includedFilenames(index: number, optionalEncoding: flatbuffers.Encoding): string | Uint8Array
  includedFilenames(index: number, optionalEncoding?: any): string | Uint8Array | null {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__string(this.bb!.__vector(this.bb_pos + offset) + index * 4, optionalEncoding) : null;
  }

  includedFilenamesLength(): number {
    const offset = this.bb!.__offset(this.bb_pos, 6);
    return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
  }

  static getFullyQualifiedName(): string {
    return 'reflection_SchemaFile';
  }

  static startSchemaFile(builder: flatbuffers.Builder) {
    builder.startObject(2);
  }

  static addFilename(builder: flatbuffers.Builder, filenameOffset: flatbuffers.Offset) {
    builder.addFieldOffset(0, filenameOffset, 0);
  }

  static addIncludedFilenames(builder: flatbuffers.Builder, includedFilenamesOffset: flatbuffers.Offset) {
    builder.addFieldOffset(1, includedFilenamesOffset, 0);
  }

  static createIncludedFilenamesVector(builder: flatbuffers.Builder, data: flatbuffers.Offset[]): flatbuffers.Offset {
    builder.startVector(4, data.length, 4);
    for (let i = data.length - 1; i >= 0; i--) {
      builder.addOffset(data[i]!);
    }
    return builder.endVector();
  }

  static startIncludedFilenamesVector(builder: flatbuffers.Builder, numElems: number) {
    builder.startVector(4, numElems, 4);
  }

  static endSchemaFile(builder: flatbuffers.Builder): flatbuffers.Offset {
    const offset = builder.endObject();
    builder.requiredField(offset, 4) // filename
    return offset;
  }

  static createSchemaFile(builder: flatbuffers.Builder, filenameOffset: flatbuffers.Offset, includedFilenamesOffset: flatbuffers.Offset): flatbuffers.Offset {
    SchemaFile.startSchemaFile(builder);
    SchemaFile.addFilename(builder, filenameOffset);
    SchemaFile.addIncludedFilenames(builder, includedFilenamesOffset);
    return SchemaFile.endSchemaFile(builder);
  }

  unpack(): SchemaFileT {
    return new SchemaFileT(
      this.filename(),
      this.bb!.createScalarList<string>(this.includedFilenames.bind(this), this.includedFilenamesLength())
    );
  }


  unpackTo(_o: SchemaFileT): void {
    _o.filename = this.filename();
    _o.includedFilenames = this.bb!.createScalarList<string>(this.includedFilenames.bind(this), this.includedFilenamesLength());
  }
}

export class SchemaFileT implements flatbuffers.IGeneratedObject {
  constructor(
    public filename: string | Uint8Array | null = null,
    public includedFilenames: (string)[] = []
  ) {
  }


  pack(builder: flatbuffers.Builder): flatbuffers.Offset {
    const filename = (this.filename !== null ? builder.createString(this.filename!) : 0);
    const includedFilenames = SchemaFile.createIncludedFilenamesVector(builder, builder.createObjectOffsetList(this.includedFilenames));

    return SchemaFile.createSchemaFile(builder,
      filename,
      includedFilenames
    );
  }
}
