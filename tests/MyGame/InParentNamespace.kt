// automatically generated by the FlatBuffers compiler, do not modify

package MyGame

import java.nio.*
import kotlin.math.sign
import com.google.flatbuffers.*

@Suppress("unused")
class InParentNamespace : Table() {

    fun __init(_i: Int, _bb: ByteBuffer)  {
        __reset(_i, _bb)
    }
    fun __assign(_i: Int, _bb: ByteBuffer) : InParentNamespace {
        __init(_i, _bb)
        return this
    }
    companion object {
        fun validateVersion() = Constants.FLATBUFFERS_22_11_23()
        fun getRootAsInParentNamespace(_bb: ByteBuffer): InParentNamespace = getRootAsInParentNamespace(_bb, InParentNamespace())
        fun getRootAsInParentNamespace(_bb: ByteBuffer, obj: InParentNamespace): InParentNamespace {
            _bb.order(ByteOrder.LITTLE_ENDIAN)
            return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb))
        }
        fun startInParentNamespace(builder: FlatBufferBuilder) = builder.startTable(0)
        fun endInParentNamespace(builder: FlatBufferBuilder) : Int {
            val o = builder.endTable()
            return o
        }
    }
}
