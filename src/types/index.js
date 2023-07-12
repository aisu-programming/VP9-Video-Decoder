/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import * as $protobuf from "protobufjs/minimal";

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace

const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});


export const may = $root.may = (() => {

    /**
     * Namespace may.
     * @exports may
     * @namespace
     */
    const may = {};

    may.autonomy_percent_t = (function() {

        /**
         * Properties of an autonomy_percent_t.
         * @memberof may
         * @interface Iautonomy_percent_t
         * @property {number|Long|null} [utime] autonomy_percent_t utime
         * @property {number|Long|null} [edgeId] autonomy_percent_t edgeId
         * @property {number|null} [percent] autonomy_percent_t percent
         * @property {number|null} [autoCount] autonomy_percent_t autoCount
         * @property {number|null} [healthyCount] autonomy_percent_t healthyCount
         */

        /**
         * Constructs a new autonomy_percent_t.
         * @memberof may
         * @classdesc Represents an autonomy_percent_t.
         * @implements Iautonomy_percent_t
         * @constructor
         * @param {may.Iautonomy_percent_t=} [properties] Properties to set
         */
        
        function autonomy_percent_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * autonomy_percent_t utime.
         * @member {number|Long} utime
         * @memberof may.autonomy_percent_t
         * @instance
         */
        
        autonomy_percent_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * autonomy_percent_t edgeId.
         * @member {number|Long} edgeId
         * @memberof may.autonomy_percent_t
         * @instance
         */
        
        autonomy_percent_t.prototype.edgeId = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * autonomy_percent_t percent.
         * @member {number} percent
         * @memberof may.autonomy_percent_t
         * @instance
         */
        autonomy_percent_t.prototype.percent = 0;

        /**
         * autonomy_percent_t autoCount.
         * @member {number} autoCount
         * @memberof may.autonomy_percent_t
         * @instance
         */
        autonomy_percent_t.prototype.autoCount = 0;

        /**
         * autonomy_percent_t healthyCount.
         * @member {number} healthyCount
         * @memberof may.autonomy_percent_t
         * @instance
         */
        autonomy_percent_t.prototype.healthyCount = 0;

        /**
         * Creates a new autonomy_percent_t instance using the specified properties.
         * @function create
         * @memberof may.autonomy_percent_t
         * @static
         * @param {may.Iautonomy_percent_t=} [properties] Properties to set
         * @returns {may.autonomy_percent_t} autonomy_percent_t instance
         */
        autonomy_percent_t.create = function create(properties) {
            
            return new autonomy_percent_t(properties);
        };

        /**
         * Encodes the specified autonomy_percent_t message. Does not implicitly {@link may.autonomy_percent_t.verify|verify} messages.
         * @function encode
         * @memberof may.autonomy_percent_t
         * @static
         * @param {may.Iautonomy_percent_t} message autonomy_percent_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        autonomy_percent_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.edgeId != null && Object.hasOwnProperty.call(message, "edgeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.edgeId);
            if (message.percent != null && Object.hasOwnProperty.call(message, "percent"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.percent);
            if (message.autoCount != null && Object.hasOwnProperty.call(message, "autoCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.autoCount);
            if (message.healthyCount != null && Object.hasOwnProperty.call(message, "healthyCount"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.healthyCount);
            return writer;
        };

        /**
         * Encodes the specified autonomy_percent_t message, length delimited. Does not implicitly {@link may.autonomy_percent_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.autonomy_percent_t
         * @static
         * @param {may.Iautonomy_percent_t} message autonomy_percent_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        autonomy_percent_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an autonomy_percent_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.autonomy_percent_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.autonomy_percent_t} autonomy_percent_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        autonomy_percent_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.autonomy_percent_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.edgeId = reader.int64();
                    break;
                case 3:
                    message.percent = reader.int32();
                    break;
                case 4:
                    message.autoCount = reader.int32();
                    break;
                case 5:
                    message.healthyCount = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an autonomy_percent_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.autonomy_percent_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.autonomy_percent_t} autonomy_percent_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        autonomy_percent_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an autonomy_percent_t message.
         * @function verify
         * @memberof may.autonomy_percent_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        autonomy_percent_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.edgeId != null && message.hasOwnProperty("edgeId"))
                if (!$util.isInteger(message.edgeId) && !(message.edgeId && $util.isInteger(message.edgeId.low) && $util.isInteger(message.edgeId.high)))
                    return "edgeId: integer|Long expected";
            if (message.percent != null && message.hasOwnProperty("percent"))
                if (!$util.isInteger(message.percent))
                    return "percent: integer expected";
            if (message.autoCount != null && message.hasOwnProperty("autoCount"))
                if (!$util.isInteger(message.autoCount))
                    return "autoCount: integer expected";
            if (message.healthyCount != null && message.hasOwnProperty("healthyCount"))
                if (!$util.isInteger(message.healthyCount))
                    return "healthyCount: integer expected";
            return null;
        };

        /**
         * Creates an autonomy_percent_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.autonomy_percent_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.autonomy_percent_t} autonomy_percent_t
         */
        autonomy_percent_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.autonomy_percent_t)
                
                return object;
            
            let message = new $root.may.autonomy_percent_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.edgeId != null)
                if ($util.Long)
                    
                    (message.edgeId = $util.Long.fromValue(object.edgeId)).unsigned = false;
                else if (typeof object.edgeId === "string")
                    message.edgeId = parseInt(object.edgeId, 10);
                else if (typeof object.edgeId === "number")
                    message.edgeId = object.edgeId;
                else if (typeof object.edgeId === "object")
                    message.edgeId = new $util.LongBits(object.edgeId.low >>> 0, object.edgeId.high >>> 0).toNumber();
            if (object.percent != null)
                message.percent = object.percent | 0;
            if (object.autoCount != null)
                message.autoCount = object.autoCount | 0;
            if (object.healthyCount != null)
                message.healthyCount = object.healthyCount | 0;
            return message;
        };

        /**
         * Creates a plain object from an autonomy_percent_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.autonomy_percent_t
         * @static
         * @param {may.autonomy_percent_t} message autonomy_percent_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        autonomy_percent_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.edgeId = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.edgeId = options.longs === String ? "0" : 0;
                object.percent = 0;
                object.autoCount = 0;
                object.healthyCount = 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.edgeId != null && message.hasOwnProperty("edgeId"))
                
                if (typeof message.edgeId === "number")
                    
                    object.edgeId = options.longs === String ? String(message.edgeId) : message.edgeId;
                else
                    
                    object.edgeId = options.longs === String ? $util.Long.prototype.toString.call(message.edgeId) : options.longs === Number ? new $util.LongBits(message.edgeId.low >>> 0, message.edgeId.high >>> 0).toNumber() : message.edgeId;
            
            if (message.percent != null && message.hasOwnProperty("percent"))
                
                object.percent = message.percent;
            
            if (message.autoCount != null && message.hasOwnProperty("autoCount"))
                
                object.autoCount = message.autoCount;
            
            if (message.healthyCount != null && message.hasOwnProperty("healthyCount"))
                
                object.healthyCount = message.healthyCount;
            return object;
        };

        /**
         * Converts this autonomy_percent_t to JSON.
         * @function toJSON
         * @memberof may.autonomy_percent_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        autonomy_percent_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return autonomy_percent_t;
    })();

    may.boolean_t = (function() {

        /**
         * Properties of a boolean_t.
         * @memberof may
         * @interface Iboolean_t
         * @property {number|Long|null} [utime] boolean_t utime
         * @property {boolean|null} [boolVal] boolean_t boolVal
         */

        /**
         * Constructs a new boolean_t.
         * @memberof may
         * @classdesc Represents a boolean_t.
         * @implements Iboolean_t
         * @constructor
         * @param {may.Iboolean_t=} [properties] Properties to set
         */
        
        function boolean_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * boolean_t utime.
         * @member {number|Long} utime
         * @memberof may.boolean_t
         * @instance
         */
        
        boolean_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * boolean_t boolVal.
         * @member {boolean} boolVal
         * @memberof may.boolean_t
         * @instance
         */
        boolean_t.prototype.boolVal = false;

        /**
         * Creates a new boolean_t instance using the specified properties.
         * @function create
         * @memberof may.boolean_t
         * @static
         * @param {may.Iboolean_t=} [properties] Properties to set
         * @returns {may.boolean_t} boolean_t instance
         */
        boolean_t.create = function create(properties) {
            
            return new boolean_t(properties);
        };

        /**
         * Encodes the specified boolean_t message. Does not implicitly {@link may.boolean_t.verify|verify} messages.
         * @function encode
         * @memberof may.boolean_t
         * @static
         * @param {may.Iboolean_t} message boolean_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        boolean_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.boolVal != null && Object.hasOwnProperty.call(message, "boolVal"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.boolVal);
            return writer;
        };

        /**
         * Encodes the specified boolean_t message, length delimited. Does not implicitly {@link may.boolean_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.boolean_t
         * @static
         * @param {may.Iboolean_t} message boolean_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        boolean_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a boolean_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.boolean_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.boolean_t} boolean_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        boolean_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.boolean_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.boolVal = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a boolean_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.boolean_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.boolean_t} boolean_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        boolean_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a boolean_t message.
         * @function verify
         * @memberof may.boolean_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        boolean_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.boolVal != null && message.hasOwnProperty("boolVal"))
                if (typeof message.boolVal !== "boolean")
                    return "boolVal: boolean expected";
            return null;
        };

        /**
         * Creates a boolean_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.boolean_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.boolean_t} boolean_t
         */
        boolean_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.boolean_t)
                
                return object;
            
            let message = new $root.may.boolean_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.boolVal != null)
                message.boolVal = Boolean(object.boolVal);
            return message;
        };

        /**
         * Creates a plain object from a boolean_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.boolean_t
         * @static
         * @param {may.boolean_t} message boolean_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        boolean_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.boolVal = false;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.boolVal != null && message.hasOwnProperty("boolVal"))
                
                object.boolVal = message.boolVal;
            return object;
        };

        /**
         * Converts this boolean_t to JSON.
         * @function toJSON
         * @memberof may.boolean_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        boolean_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return boolean_t;
    })();

    may.byte_buf_list_t = (function() {

        /**
         * Properties of a byte_buf_list_t.
         * @memberof may
         * @interface Ibyte_buf_list_t
         * @property {number|Long|null} [utime] byte_buf_list_t utime
         * @property {number|null} [numPackets] byte_buf_list_t numPackets
         * @property {Array.<may.byte_buf_list_t.Ibyte_buf_t>|null} [packets] byte_buf_list_t packets
         */

        /**
         * Constructs a new byte_buf_list_t.
         * @memberof may
         * @classdesc Represents a byte_buf_list_t.
         * @implements Ibyte_buf_list_t
         * @constructor
         * @param {may.Ibyte_buf_list_t=} [properties] Properties to set
         */
        
        function byte_buf_list_t(properties) {
            
            this.packets = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * byte_buf_list_t utime.
         * @member {number|Long} utime
         * @memberof may.byte_buf_list_t
         * @instance
         */
        
        byte_buf_list_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * byte_buf_list_t numPackets.
         * @member {number} numPackets
         * @memberof may.byte_buf_list_t
         * @instance
         */
        byte_buf_list_t.prototype.numPackets = 0;

        /**
         * byte_buf_list_t packets.
         * @member {Array.<may.byte_buf_list_t.Ibyte_buf_t>} packets
         * @memberof may.byte_buf_list_t
         * @instance
         */
        byte_buf_list_t.prototype.packets = $util.emptyArray;

        /**
         * Creates a new byte_buf_list_t instance using the specified properties.
         * @function create
         * @memberof may.byte_buf_list_t
         * @static
         * @param {may.Ibyte_buf_list_t=} [properties] Properties to set
         * @returns {may.byte_buf_list_t} byte_buf_list_t instance
         */
        byte_buf_list_t.create = function create(properties) {
            
            return new byte_buf_list_t(properties);
        };

        /**
         * Encodes the specified byte_buf_list_t message. Does not implicitly {@link may.byte_buf_list_t.verify|verify} messages.
         * @function encode
         * @memberof may.byte_buf_list_t
         * @static
         * @param {may.Ibyte_buf_list_t} message byte_buf_list_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        byte_buf_list_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.numPackets != null && Object.hasOwnProperty.call(message, "numPackets"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.numPackets);
            if (message.packets != null && message.packets.length)
                for (let i = 0; i < message.packets.length; ++i)
                    
                    $root.may.byte_buf_list_t.byte_buf_t.encode(message.packets[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified byte_buf_list_t message, length delimited. Does not implicitly {@link may.byte_buf_list_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.byte_buf_list_t
         * @static
         * @param {may.Ibyte_buf_list_t} message byte_buf_list_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        byte_buf_list_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a byte_buf_list_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.byte_buf_list_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.byte_buf_list_t} byte_buf_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        byte_buf_list_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.byte_buf_list_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.numPackets = reader.uint32();
                    break;
                case 3:
                    if (!(message.packets && message.packets.length))
                        message.packets = [];
                    
                    message.packets.push($root.may.byte_buf_list_t.byte_buf_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a byte_buf_list_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.byte_buf_list_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.byte_buf_list_t} byte_buf_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        byte_buf_list_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a byte_buf_list_t message.
         * @function verify
         * @memberof may.byte_buf_list_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        byte_buf_list_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.numPackets != null && message.hasOwnProperty("numPackets"))
                if (!$util.isInteger(message.numPackets))
                    return "numPackets: integer expected";
            if (message.packets != null && message.hasOwnProperty("packets")) {
                if (!Array.isArray(message.packets))
                    return "packets: array expected";
                for (let i = 0; i < message.packets.length; ++i) {
                    
                    let error = $root.may.byte_buf_list_t.byte_buf_t.verify(message.packets[i]);
                    if (error)
                        return "packets." + error;
                }
            }
            return null;
        };

        /**
         * Creates a byte_buf_list_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.byte_buf_list_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.byte_buf_list_t} byte_buf_list_t
         */
        byte_buf_list_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.byte_buf_list_t)
                
                return object;
            
            let message = new $root.may.byte_buf_list_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.numPackets != null)
                message.numPackets = object.numPackets >>> 0;
            if (object.packets) {
                if (!Array.isArray(object.packets))
                    throw TypeError(".may.byte_buf_list_t.packets: array expected");
                message.packets = [];
                for (let i = 0; i < object.packets.length; ++i) {
                    if (typeof object.packets[i] !== "object")
                        throw TypeError(".may.byte_buf_list_t.packets: object expected");
                    
                    message.packets[i] = $root.may.byte_buf_list_t.byte_buf_t.fromObject(object.packets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a byte_buf_list_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.byte_buf_list_t
         * @static
         * @param {may.byte_buf_list_t} message byte_buf_list_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        byte_buf_list_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.packets = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.numPackets = 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.numPackets != null && message.hasOwnProperty("numPackets"))
                
                object.numPackets = message.numPackets;
            
            if (message.packets && message.packets.length) {
                
                object.packets = [];
                
                for (let j = 0; j < message.packets.length; ++j)
                    
                    object.packets[j] = $root.may.byte_buf_list_t.byte_buf_t.toObject(message.packets[j], options);
            }
            return object;
        };

        /**
         * Converts this byte_buf_list_t to JSON.
         * @function toJSON
         * @memberof may.byte_buf_list_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        byte_buf_list_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        byte_buf_list_t.byte_buf_t = (function() {

            /**
             * Properties of a byte_buf_t.
             * @memberof may.byte_buf_list_t
             * @interface Ibyte_buf_t
             * @property {number|Long|null} [utime] byte_buf_t utime
             * @property {number|null} [len] byte_buf_t len
             * @property {Uint8Array|null} [buf] byte_buf_t buf
             */

            /**
             * Constructs a new byte_buf_t.
             * @memberof may.byte_buf_list_t
             * @classdesc Represents a byte_buf_t.
             * @implements Ibyte_buf_t
             * @constructor
             * @param {may.byte_buf_list_t.Ibyte_buf_t=} [properties] Properties to set
             */
            
            function byte_buf_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * byte_buf_t utime.
             * @member {number|Long} utime
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @instance
             */
            
            byte_buf_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * byte_buf_t len.
             * @member {number} len
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @instance
             */
            byte_buf_t.prototype.len = 0;

            /**
             * byte_buf_t buf.
             * @member {Uint8Array} buf
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @instance
             */
            byte_buf_t.prototype.buf = $util.newBuffer([]);

            /**
             * Creates a new byte_buf_t instance using the specified properties.
             * @function create
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {may.byte_buf_list_t.Ibyte_buf_t=} [properties] Properties to set
             * @returns {may.byte_buf_list_t.byte_buf_t} byte_buf_t instance
             */
            byte_buf_t.create = function create(properties) {
                return new byte_buf_t(properties);
            };

            /**
             * Encodes the specified byte_buf_t message. Does not implicitly {@link may.byte_buf_list_t.byte_buf_t.verify|verify} messages.
             * @function encode
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {may.byte_buf_list_t.Ibyte_buf_t} message byte_buf_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            byte_buf_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
                if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.len);
                if (message.buf != null && Object.hasOwnProperty.call(message, "buf"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.buf);
                return writer;
            };

            /**
             * Encodes the specified byte_buf_t message, length delimited. Does not implicitly {@link may.byte_buf_list_t.byte_buf_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {may.byte_buf_list_t.Ibyte_buf_t} message byte_buf_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            byte_buf_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer.
             * @function decode
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {may.byte_buf_list_t.byte_buf_t} byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            byte_buf_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.byte_buf_list_t.byte_buf_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.utime = reader.int64();
                        break;
                    case 2:
                        message.len = reader.int32();
                        break;
                    case 3:
                        message.buf = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {may.byte_buf_list_t.byte_buf_t} byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            byte_buf_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a byte_buf_t message.
             * @function verify
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            byte_buf_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.utime != null && message.hasOwnProperty("utime"))
                    if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                        return "utime: integer|Long expected";
                if (message.len != null && message.hasOwnProperty("len"))
                    if (!$util.isInteger(message.len))
                        return "len: integer expected";
                if (message.buf != null && message.hasOwnProperty("buf"))
                    if (!(message.buf && typeof message.buf.length === "number" || $util.isString(message.buf)))
                        return "buf: buffer expected";
                return null;
            };

            /**
             * Creates a byte_buf_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {may.byte_buf_list_t.byte_buf_t} byte_buf_t
             */
            byte_buf_t.fromObject = function fromObject(object) {
                
                if (object instanceof $root.may.byte_buf_list_t.byte_buf_t)
                    return object;
                
                let message = new $root.may.byte_buf_list_t.byte_buf_t();
                if (object.utime != null)
                    if ($util.Long)
                        
                        (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                    else if (typeof object.utime === "string")
                        message.utime = parseInt(object.utime, 10);
                    else if (typeof object.utime === "number")
                        message.utime = object.utime;
                    else if (typeof object.utime === "object")
                        message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
                if (object.len != null)
                    message.len = object.len | 0;
                if (object.buf != null)
                    if (typeof object.buf === "string")
                        $util.base64.decode(object.buf, message.buf = $util.newBuffer($util.base64.length(object.buf)), 0);
                    else if (object.buf.length)
                        message.buf = object.buf;
                return message;
            };

            /**
             * Creates a plain object from a byte_buf_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @static
             * @param {may.byte_buf_list_t.byte_buf_t} message byte_buf_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            byte_buf_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        
                        object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.utime = options.longs === String ? "0" : 0;
                    object.len = 0;
                    if (options.bytes === String)
                        
                        object.buf = "";
                    else {
                        
                        object.buf = [];
                        if (options.bytes !== Array)
                            object.buf = $util.newBuffer(object.buf);
                    }
                }
                if (message.utime != null && message.hasOwnProperty("utime"))
                    if (typeof message.utime === "number")
                        object.utime = options.longs === String ? String(message.utime) : message.utime;
                    else
                        object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
                if (message.len != null && message.hasOwnProperty("len"))
                    object.len = message.len;
                if (message.buf != null && message.hasOwnProperty("buf"))
                    object.buf = options.bytes === String ? $util.base64.encode(message.buf, 0, message.buf.length) : options.bytes === Array ? Array.prototype.slice.call(message.buf) : message.buf;
                return object;
            };

            /**
             * Converts this byte_buf_t to JSON.
             * @function toJSON
             * @memberof may.byte_buf_list_t.byte_buf_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            byte_buf_t.prototype.toJSON = function toJSON() {
                
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return byte_buf_t;
        })();

        return byte_buf_list_t;
    })();

    may.global_time_t = (function() {

        /**
         * Properties of a global_time_t.
         * @memberof may
         * @interface Iglobal_time_t
         * @property {number|Long|null} [utime] global_time_t utime
         * @property {may.global_time_t.TIME_SYS|null} [timeSys] global_time_t timeSys
         */

        /**
         * Constructs a new global_time_t.
         * @memberof may
         * @classdesc Represents a global_time_t.
         * @implements Iglobal_time_t
         * @constructor
         * @param {may.Iglobal_time_t=} [properties] Properties to set
         */
        
        function global_time_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * global_time_t utime.
         * @member {number|Long} utime
         * @memberof may.global_time_t
         * @instance
         */
        
        global_time_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * global_time_t timeSys.
         * @member {may.global_time_t.TIME_SYS} timeSys
         * @memberof may.global_time_t
         * @instance
         */
        global_time_t.prototype.timeSys = 0;

        /**
         * Creates a new global_time_t instance using the specified properties.
         * @function create
         * @memberof may.global_time_t
         * @static
         * @param {may.Iglobal_time_t=} [properties] Properties to set
         * @returns {may.global_time_t} global_time_t instance
         */
        global_time_t.create = function create(properties) {
            
            return new global_time_t(properties);
        };

        /**
         * Encodes the specified global_time_t message. Does not implicitly {@link may.global_time_t.verify|verify} messages.
         * @function encode
         * @memberof may.global_time_t
         * @static
         * @param {may.Iglobal_time_t} message global_time_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        global_time_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.timeSys != null && Object.hasOwnProperty.call(message, "timeSys"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.timeSys);
            return writer;
        };

        /**
         * Encodes the specified global_time_t message, length delimited. Does not implicitly {@link may.global_time_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.global_time_t
         * @static
         * @param {may.Iglobal_time_t} message global_time_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        global_time_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a global_time_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.global_time_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.global_time_t} global_time_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        global_time_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.global_time_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.timeSys = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a global_time_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.global_time_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.global_time_t} global_time_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        global_time_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a global_time_t message.
         * @function verify
         * @memberof may.global_time_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        global_time_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.timeSys != null && message.hasOwnProperty("timeSys"))
                switch (message.timeSys) {
                default:
                    return "timeSys: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                }
            return null;
        };

        /**
         * Creates a global_time_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.global_time_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.global_time_t} global_time_t
         */
        global_time_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.global_time_t)
                
                return object;
            
            let message = new $root.may.global_time_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            switch (object.timeSys) {
            case "INVALID":
            case 0:
                message.timeSys = 0;
                break;
            case "LOCAL":
            case 1:
                message.timeSys = 1;
                break;
            case "UTC":
            case 2:
                message.timeSys = 2;
                break;
            case "TAI":
            case 3:
                message.timeSys = 3;
                break;
            case "GPS":
            case 4:
                message.timeSys = 4;
                break;
            case "LORANC":
            case 5:
                message.timeSys = 5;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a global_time_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.global_time_t
         * @static
         * @param {may.global_time_t} message global_time_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        global_time_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.timeSys = options.enums === String ? "INVALID" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.timeSys != null && message.hasOwnProperty("timeSys"))
                
                object.timeSys = options.enums === String ? $root.may.global_time_t.TIME_SYS[message.timeSys] : message.timeSys;
            return object;
        };

        /**
         * Converts this global_time_t to JSON.
         * @function toJSON
         * @memberof may.global_time_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        global_time_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * TIME_SYS enum.
         * @name may.global_time_t.TIME_SYS
         * @enum {number}
         * @property {number} INVALID=0 INVALID value
         * @property {number} LOCAL=1 LOCAL value
         * @property {number} UTC=2 UTC value
         * @property {number} TAI=3 TAI value
         * @property {number} GPS=4 GPS value
         * @property {number} LORANC=5 LORANC value
         */
        global_time_t.TIME_SYS = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "INVALID"] = 0;
            values[valuesById[1] = "LOCAL"] = 1;
            values[valuesById[2] = "UTC"] = 2;
            values[valuesById[3] = "TAI"] = 3;
            values[valuesById[4] = "GPS"] = 4;
            values[valuesById[5] = "LORANC"] = 5;
            return values;
        })();

        return global_time_t;
    })();

    may.gps_t = (function() {

        /**
         * Properties of a gps_t.
         * @memberof may
         * @interface Igps_t
         * @property {number|Long|null} [utime] gps_t utime
         * @property {number|Long|null} [utimeGlobal] gps_t utimeGlobal
         * @property {number|null} [lat] gps_t lat
         * @property {number|null} [lon] gps_t lon
         * @property {number|null} [elevation] gps_t elevation
         * @property {number|null} [horizDop] gps_t horizDop
         * @property {number|null} [timeDop] gps_t timeDop
         * @property {number|null} [nsats] gps_t nsats
         * @property {number|null} [errX] gps_t errX
         * @property {number|null} [errY] gps_t errY
         * @property {number|null} [errZ] gps_t errZ
         * @property {may.gps_t.GPS_STATUS|null} [status] gps_t status
         */

        /**
         * Constructs a new gps_t.
         * @memberof may
         * @classdesc Represents a gps_t.
         * @implements Igps_t
         * @constructor
         * @param {may.Igps_t=} [properties] Properties to set
         */
        
        function gps_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * gps_t utime.
         * @member {number|Long} utime
         * @memberof may.gps_t
         * @instance
         */
        
        gps_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * gps_t utimeGlobal.
         * @member {number|Long} utimeGlobal
         * @memberof may.gps_t
         * @instance
         */
        
        gps_t.prototype.utimeGlobal = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * gps_t lat.
         * @member {number} lat
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.lat = 0;

        /**
         * gps_t lon.
         * @member {number} lon
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.lon = 0;

        /**
         * gps_t elevation.
         * @member {number} elevation
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.elevation = 0;

        /**
         * gps_t horizDop.
         * @member {number} horizDop
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.horizDop = 0;

        /**
         * gps_t timeDop.
         * @member {number} timeDop
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.timeDop = 0;

        /**
         * gps_t nsats.
         * @member {number} nsats
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.nsats = 0;

        /**
         * gps_t errX.
         * @member {number} errX
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.errX = 0;

        /**
         * gps_t errY.
         * @member {number} errY
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.errY = 0;

        /**
         * gps_t errZ.
         * @member {number} errZ
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.errZ = 0;

        /**
         * gps_t status.
         * @member {may.gps_t.GPS_STATUS} status
         * @memberof may.gps_t
         * @instance
         */
        gps_t.prototype.status = 0;

        /**
         * Creates a new gps_t instance using the specified properties.
         * @function create
         * @memberof may.gps_t
         * @static
         * @param {may.Igps_t=} [properties] Properties to set
         * @returns {may.gps_t} gps_t instance
         */
        gps_t.create = function create(properties) {
            
            return new gps_t(properties);
        };

        /**
         * Encodes the specified gps_t message. Does not implicitly {@link may.gps_t.verify|verify} messages.
         * @function encode
         * @memberof may.gps_t
         * @static
         * @param {may.Igps_t} message gps_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gps_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.utimeGlobal != null && Object.hasOwnProperty.call(message, "utimeGlobal"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.utimeGlobal);
            if (message.lat != null && Object.hasOwnProperty.call(message, "lat"))
                writer.uint32(/* id 3, wireType 1 =*/25).double(message.lat);
            if (message.lon != null && Object.hasOwnProperty.call(message, "lon"))
                writer.uint32(/* id 4, wireType 1 =*/33).double(message.lon);
            if (message.elevation != null && Object.hasOwnProperty.call(message, "elevation"))
                writer.uint32(/* id 5, wireType 1 =*/41).double(message.elevation);
            if (message.horizDop != null && Object.hasOwnProperty.call(message, "horizDop"))
                writer.uint32(/* id 6, wireType 1 =*/49).double(message.horizDop);
            if (message.timeDop != null && Object.hasOwnProperty.call(message, "timeDop"))
                writer.uint32(/* id 7, wireType 1 =*/57).double(message.timeDop);
            if (message.nsats != null && Object.hasOwnProperty.call(message, "nsats"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.nsats);
            if (message.errX != null && Object.hasOwnProperty.call(message, "errX"))
                writer.uint32(/* id 9, wireType 1 =*/73).double(message.errX);
            if (message.errY != null && Object.hasOwnProperty.call(message, "errY"))
                writer.uint32(/* id 10, wireType 1 =*/81).double(message.errY);
            if (message.errZ != null && Object.hasOwnProperty.call(message, "errZ"))
                writer.uint32(/* id 11, wireType 1 =*/89).double(message.errZ);
            if (message.status != null && Object.hasOwnProperty.call(message, "status"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.status);
            return writer;
        };

        /**
         * Encodes the specified gps_t message, length delimited. Does not implicitly {@link may.gps_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.gps_t
         * @static
         * @param {may.Igps_t} message gps_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        gps_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a gps_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.gps_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.gps_t} gps_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gps_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.gps_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.utimeGlobal = reader.int64();
                    break;
                case 3:
                    message.lat = reader.double();
                    break;
                case 4:
                    message.lon = reader.double();
                    break;
                case 5:
                    message.elevation = reader.double();
                    break;
                case 6:
                    message.horizDop = reader.double();
                    break;
                case 7:
                    message.timeDop = reader.double();
                    break;
                case 8:
                    message.nsats = reader.int32();
                    break;
                case 9:
                    message.errX = reader.double();
                    break;
                case 10:
                    message.errY = reader.double();
                    break;
                case 11:
                    message.errZ = reader.double();
                    break;
                case 12:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a gps_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.gps_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.gps_t} gps_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        gps_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a gps_t message.
         * @function verify
         * @memberof may.gps_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        gps_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.utimeGlobal != null && message.hasOwnProperty("utimeGlobal"))
                if (!$util.isInteger(message.utimeGlobal) && !(message.utimeGlobal && $util.isInteger(message.utimeGlobal.low) && $util.isInteger(message.utimeGlobal.high)))
                    return "utimeGlobal: integer|Long expected";
            if (message.lat != null && message.hasOwnProperty("lat"))
                if (typeof message.lat !== "number")
                    return "lat: number expected";
            if (message.lon != null && message.hasOwnProperty("lon"))
                if (typeof message.lon !== "number")
                    return "lon: number expected";
            if (message.elevation != null && message.hasOwnProperty("elevation"))
                if (typeof message.elevation !== "number")
                    return "elevation: number expected";
            if (message.horizDop != null && message.hasOwnProperty("horizDop"))
                if (typeof message.horizDop !== "number")
                    return "horizDop: number expected";
            if (message.timeDop != null && message.hasOwnProperty("timeDop"))
                if (typeof message.timeDop !== "number")
                    return "timeDop: number expected";
            if (message.nsats != null && message.hasOwnProperty("nsats"))
                if (!$util.isInteger(message.nsats))
                    return "nsats: integer expected";
            if (message.errX != null && message.hasOwnProperty("errX"))
                if (typeof message.errX !== "number")
                    return "errX: number expected";
            if (message.errY != null && message.hasOwnProperty("errY"))
                if (typeof message.errY !== "number")
                    return "errY: number expected";
            if (message.errZ != null && message.hasOwnProperty("errZ"))
                if (typeof message.errZ !== "number")
                    return "errZ: number expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            return null;
        };

        /**
         * Creates a gps_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.gps_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.gps_t} gps_t
         */
        gps_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.gps_t)
                
                return object;
            
            let message = new $root.may.gps_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.utimeGlobal != null)
                if ($util.Long)
                    
                    (message.utimeGlobal = $util.Long.fromValue(object.utimeGlobal)).unsigned = false;
                else if (typeof object.utimeGlobal === "string")
                    message.utimeGlobal = parseInt(object.utimeGlobal, 10);
                else if (typeof object.utimeGlobal === "number")
                    message.utimeGlobal = object.utimeGlobal;
                else if (typeof object.utimeGlobal === "object")
                    message.utimeGlobal = new $util.LongBits(object.utimeGlobal.low >>> 0, object.utimeGlobal.high >>> 0).toNumber();
            if (object.lat != null)
                message.lat = Number(object.lat);
            if (object.lon != null)
                message.lon = Number(object.lon);
            if (object.elevation != null)
                message.elevation = Number(object.elevation);
            if (object.horizDop != null)
                message.horizDop = Number(object.horizDop);
            if (object.timeDop != null)
                message.timeDop = Number(object.timeDop);
            if (object.nsats != null)
                message.nsats = object.nsats | 0;
            if (object.errX != null)
                message.errX = Number(object.errX);
            if (object.errY != null)
                message.errY = Number(object.errY);
            if (object.errZ != null)
                message.errZ = Number(object.errZ);
            switch (object.status) {
            case "ERROR":
            case 0:
                message.status = 0;
                break;
            case "NO_LOCK":
            case 1:
                message.status = 1;
                break;
            case "LOCK":
            case 2:
                message.status = 2;
                break;
            case "DGPS_LOCK":
            case 3:
                message.status = 3;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a gps_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.gps_t
         * @static
         * @param {may.gps_t} message gps_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        gps_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utimeGlobal = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utimeGlobal = options.longs === String ? "0" : 0;
                object.lat = 0;
                object.lon = 0;
                object.elevation = 0;
                object.horizDop = 0;
                object.timeDop = 0;
                object.nsats = 0;
                object.errX = 0;
                object.errY = 0;
                object.errZ = 0;
                object.status = options.enums === String ? "ERROR" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.utimeGlobal != null && message.hasOwnProperty("utimeGlobal"))
                
                if (typeof message.utimeGlobal === "number")
                    
                    object.utimeGlobal = options.longs === String ? String(message.utimeGlobal) : message.utimeGlobal;
                else
                    
                    object.utimeGlobal = options.longs === String ? $util.Long.prototype.toString.call(message.utimeGlobal) : options.longs === Number ? new $util.LongBits(message.utimeGlobal.low >>> 0, message.utimeGlobal.high >>> 0).toNumber() : message.utimeGlobal;
            
            if (message.lat != null && message.hasOwnProperty("lat"))
                
                object.lat = options.json && !isFinite(message.lat) ? String(message.lat) : message.lat;
            
            if (message.lon != null && message.hasOwnProperty("lon"))
                
                object.lon = options.json && !isFinite(message.lon) ? String(message.lon) : message.lon;
            
            if (message.elevation != null && message.hasOwnProperty("elevation"))
                
                object.elevation = options.json && !isFinite(message.elevation) ? String(message.elevation) : message.elevation;
            
            if (message.horizDop != null && message.hasOwnProperty("horizDop"))
                
                object.horizDop = options.json && !isFinite(message.horizDop) ? String(message.horizDop) : message.horizDop;
            
            if (message.timeDop != null && message.hasOwnProperty("timeDop"))
                
                object.timeDop = options.json && !isFinite(message.timeDop) ? String(message.timeDop) : message.timeDop;
            
            if (message.nsats != null && message.hasOwnProperty("nsats"))
                
                object.nsats = message.nsats;
            
            if (message.errX != null && message.hasOwnProperty("errX"))
                
                object.errX = options.json && !isFinite(message.errX) ? String(message.errX) : message.errX;
            
            if (message.errY != null && message.hasOwnProperty("errY"))
                
                object.errY = options.json && !isFinite(message.errY) ? String(message.errY) : message.errY;
            
            if (message.errZ != null && message.hasOwnProperty("errZ"))
                
                object.errZ = options.json && !isFinite(message.errZ) ? String(message.errZ) : message.errZ;
            
            if (message.status != null && message.hasOwnProperty("status"))
                
                object.status = options.enums === String ? $root.may.gps_t.GPS_STATUS[message.status] : message.status;
            return object;
        };

        /**
         * Converts this gps_t to JSON.
         * @function toJSON
         * @memberof may.gps_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        gps_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * GPS_STATUS enum.
         * @name may.gps_t.GPS_STATUS
         * @enum {number}
         * @property {number} ERROR=0 ERROR value
         * @property {number} NO_LOCK=1 NO_LOCK value
         * @property {number} LOCK=2 LOCK value
         * @property {number} DGPS_LOCK=3 DGPS_LOCK value
         */
        gps_t.GPS_STATUS = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ERROR"] = 0;
            values[valuesById[1] = "NO_LOCK"] = 1;
            values[valuesById[2] = "LOCK"] = 2;
            values[valuesById[3] = "DGPS_LOCK"] = 3;
            return values;
        })();

        return gps_t;
    })();

    may.health_summary_t = (function() {

        /**
         * Properties of a health_summary_t.
         * @memberof may
         * @interface Ihealth_summary_t
         * @property {number|Long|null} [utime] health_summary_t utime
         * @property {number|null} [nuids] health_summary_t nuids
         * @property {number|null} [nfields] health_summary_t nfields
         * @property {Array.<may.health_summary_t.IStatuses>|null} [statuses] health_summary_t statuses
         */

        /**
         * Constructs a new health_summary_t.
         * @memberof may
         * @classdesc Represents a health_summary_t.
         * @implements Ihealth_summary_t
         * @constructor
         * @param {may.Ihealth_summary_t=} [properties] Properties to set
         */
        
        function health_summary_t(properties) {
            
            this.statuses = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * health_summary_t utime.
         * @member {number|Long} utime
         * @memberof may.health_summary_t
         * @instance
         */
        
        health_summary_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * health_summary_t nuids.
         * @member {number} nuids
         * @memberof may.health_summary_t
         * @instance
         */
        health_summary_t.prototype.nuids = 0;

        /**
         * health_summary_t nfields.
         * @member {number} nfields
         * @memberof may.health_summary_t
         * @instance
         */
        health_summary_t.prototype.nfields = 0;

        /**
         * health_summary_t statuses.
         * @member {Array.<may.health_summary_t.IStatuses>} statuses
         * @memberof may.health_summary_t
         * @instance
         */
        health_summary_t.prototype.statuses = $util.emptyArray;

        /**
         * Creates a new health_summary_t instance using the specified properties.
         * @function create
         * @memberof may.health_summary_t
         * @static
         * @param {may.Ihealth_summary_t=} [properties] Properties to set
         * @returns {may.health_summary_t} health_summary_t instance
         */
        health_summary_t.create = function create(properties) {
            
            return new health_summary_t(properties);
        };

        /**
         * Encodes the specified health_summary_t message. Does not implicitly {@link may.health_summary_t.verify|verify} messages.
         * @function encode
         * @memberof may.health_summary_t
         * @static
         * @param {may.Ihealth_summary_t} message health_summary_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        health_summary_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.nuids != null && Object.hasOwnProperty.call(message, "nuids"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.nuids);
            if (message.nfields != null && Object.hasOwnProperty.call(message, "nfields"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.nfields);
            if (message.statuses != null && message.statuses.length)
                for (let i = 0; i < message.statuses.length; ++i)
                    
                    $root.may.health_summary_t.Statuses.encode(message.statuses[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified health_summary_t message, length delimited. Does not implicitly {@link may.health_summary_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.health_summary_t
         * @static
         * @param {may.Ihealth_summary_t} message health_summary_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        health_summary_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a health_summary_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.health_summary_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.health_summary_t} health_summary_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        health_summary_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.health_summary_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.nuids = reader.uint32();
                    break;
                case 3:
                    message.nfields = reader.uint32();
                    break;
                case 4:
                    if (!(message.statuses && message.statuses.length))
                        message.statuses = [];
                    
                    message.statuses.push($root.may.health_summary_t.Statuses.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a health_summary_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.health_summary_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.health_summary_t} health_summary_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        health_summary_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a health_summary_t message.
         * @function verify
         * @memberof may.health_summary_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        health_summary_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.nuids != null && message.hasOwnProperty("nuids"))
                if (!$util.isInteger(message.nuids))
                    return "nuids: integer expected";
            if (message.nfields != null && message.hasOwnProperty("nfields"))
                if (!$util.isInteger(message.nfields))
                    return "nfields: integer expected";
            if (message.statuses != null && message.hasOwnProperty("statuses")) {
                if (!Array.isArray(message.statuses))
                    return "statuses: array expected";
                for (let i = 0; i < message.statuses.length; ++i) {
                    
                    let error = $root.may.health_summary_t.Statuses.verify(message.statuses[i]);
                    if (error)
                        return "statuses." + error;
                }
            }
            return null;
        };

        /**
         * Creates a health_summary_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.health_summary_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.health_summary_t} health_summary_t
         */
        health_summary_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.health_summary_t)
                
                return object;
            
            let message = new $root.may.health_summary_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.nuids != null)
                message.nuids = object.nuids >>> 0;
            if (object.nfields != null)
                message.nfields = object.nfields >>> 0;
            if (object.statuses) {
                if (!Array.isArray(object.statuses))
                    throw TypeError(".may.health_summary_t.statuses: array expected");
                message.statuses = [];
                for (let i = 0; i < object.statuses.length; ++i) {
                    if (typeof object.statuses[i] !== "object")
                        throw TypeError(".may.health_summary_t.statuses: object expected");
                    
                    message.statuses[i] = $root.may.health_summary_t.Statuses.fromObject(object.statuses[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a health_summary_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.health_summary_t
         * @static
         * @param {may.health_summary_t} message health_summary_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        health_summary_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.statuses = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.nuids = 0;
                object.nfields = 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.nuids != null && message.hasOwnProperty("nuids"))
                
                object.nuids = message.nuids;
            
            if (message.nfields != null && message.hasOwnProperty("nfields"))
                
                object.nfields = message.nfields;
            
            if (message.statuses && message.statuses.length) {
                
                object.statuses = [];
                
                for (let j = 0; j < message.statuses.length; ++j)
                    
                    object.statuses[j] = $root.may.health_summary_t.Statuses.toObject(message.statuses[j], options);
            }
            return object;
        };

        /**
         * Converts this health_summary_t to JSON.
         * @function toJSON
         * @memberof may.health_summary_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        health_summary_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        health_summary_t.Statuses = (function() {

            /**
             * Properties of a Statuses.
             * @memberof may.health_summary_t
             * @interface IStatuses
             * @property {Array.<string>|null} [items] Statuses items
             */

            /**
             * Constructs a new Statuses.
             * @memberof may.health_summary_t
             * @classdesc Represents a Statuses.
             * @implements IStatuses
             * @constructor
             * @param {may.health_summary_t.IStatuses=} [properties] Properties to set
             */
            
            function Statuses(properties) {
                
                this.items = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Statuses items.
             * @member {Array.<string>} items
             * @memberof may.health_summary_t.Statuses
             * @instance
             */
            Statuses.prototype.items = $util.emptyArray;

            /**
             * Creates a new Statuses instance using the specified properties.
             * @function create
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {may.health_summary_t.IStatuses=} [properties] Properties to set
             * @returns {may.health_summary_t.Statuses} Statuses instance
             */
            Statuses.create = function create(properties) {
                return new Statuses(properties);
            };

            /**
             * Encodes the specified Statuses message. Does not implicitly {@link may.health_summary_t.Statuses.verify|verify} messages.
             * @function encode
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {may.health_summary_t.IStatuses} message Statuses message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Statuses.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.items != null && message.items.length)
                    for (let i = 0; i < message.items.length; ++i)
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.items[i]);
                return writer;
            };

            /**
             * Encodes the specified Statuses message, length delimited. Does not implicitly {@link may.health_summary_t.Statuses.verify|verify} messages.
             * @function encodeDelimited
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {may.health_summary_t.IStatuses} message Statuses message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Statuses.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Statuses message from the specified reader or buffer.
             * @function decode
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {may.health_summary_t.Statuses} Statuses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Statuses.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.health_summary_t.Statuses();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.items && message.items.length))
                            message.items = [];
                        message.items.push(reader.string());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Statuses message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {may.health_summary_t.Statuses} Statuses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Statuses.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Statuses message.
             * @function verify
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Statuses.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.items != null && message.hasOwnProperty("items")) {
                    if (!Array.isArray(message.items))
                        return "items: array expected";
                    for (let i = 0; i < message.items.length; ++i)
                        if (!$util.isString(message.items[i]))
                            return "items: string[] expected";
                }
                return null;
            };

            /**
             * Creates a Statuses message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {may.health_summary_t.Statuses} Statuses
             */
            Statuses.fromObject = function fromObject(object) {
                
                if (object instanceof $root.may.health_summary_t.Statuses)
                    return object;
                
                let message = new $root.may.health_summary_t.Statuses();
                if (object.items) {
                    if (!Array.isArray(object.items))
                        throw TypeError(".may.health_summary_t.Statuses.items: array expected");
                    message.items = [];
                    for (let i = 0; i < object.items.length; ++i)
                        message.items[i] = String(object.items[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Statuses message. Also converts values to other types if specified.
             * @function toObject
             * @memberof may.health_summary_t.Statuses
             * @static
             * @param {may.health_summary_t.Statuses} message Statuses
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Statuses.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    
                    object.items = [];
                if (message.items && message.items.length) {
                    
                    object.items = [];
                    for (let j = 0; j < message.items.length; ++j)
                        object.items[j] = message.items[j];
                }
                return object;
            };

            /**
             * Converts this Statuses to JSON.
             * @function toJSON
             * @memberof may.health_summary_t.Statuses
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Statuses.prototype.toJSON = function toJSON() {
                
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Statuses;
        })();

        /**
         * StatusesIdx enum.
         * @name may.health_summary_t.StatusesIdx
         * @enum {number}
         * @property {number} MONITOR_NAME=0 MONITOR_NAME value
         * @property {number} MAX_RUNLEVEL=1 MAX_RUNLEVEL value
         * @property {number} STATUS=2 STATUS value
         * @property {number} ERROR_MSG=3 ERROR_MSG value
         */
        health_summary_t.StatusesIdx = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "MONITOR_NAME"] = 0;
            values[valuesById[1] = "MAX_RUNLEVEL"] = 1;
            values[valuesById[2] = "STATUS"] = 2;
            values[valuesById[3] = "ERROR_MSG"] = 3;
            return values;
        })();

        return health_summary_t;
    })();

    may.heartbeat_t = (function() {

        /**
         * Properties of a heartbeat_t.
         * @memberof may
         * @interface Iheartbeat_t
         * @property {number|Long|null} [utime] heartbeat_t utime
         * @property {number|Long|null} [sourceUtime] heartbeat_t sourceUtime
         */

        /**
         * Constructs a new heartbeat_t.
         * @memberof may
         * @classdesc Represents a heartbeat_t.
         * @implements Iheartbeat_t
         * @constructor
         * @param {may.Iheartbeat_t=} [properties] Properties to set
         */
        
        function heartbeat_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * heartbeat_t utime.
         * @member {number|Long} utime
         * @memberof may.heartbeat_t
         * @instance
         */
        
        heartbeat_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * heartbeat_t sourceUtime.
         * @member {number|Long} sourceUtime
         * @memberof may.heartbeat_t
         * @instance
         */
        
        heartbeat_t.prototype.sourceUtime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new heartbeat_t instance using the specified properties.
         * @function create
         * @memberof may.heartbeat_t
         * @static
         * @param {may.Iheartbeat_t=} [properties] Properties to set
         * @returns {may.heartbeat_t} heartbeat_t instance
         */
        heartbeat_t.create = function create(properties) {
            
            return new heartbeat_t(properties);
        };

        /**
         * Encodes the specified heartbeat_t message. Does not implicitly {@link may.heartbeat_t.verify|verify} messages.
         * @function encode
         * @memberof may.heartbeat_t
         * @static
         * @param {may.Iheartbeat_t} message heartbeat_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        heartbeat_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.sourceUtime != null && Object.hasOwnProperty.call(message, "sourceUtime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.sourceUtime);
            return writer;
        };

        /**
         * Encodes the specified heartbeat_t message, length delimited. Does not implicitly {@link may.heartbeat_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.heartbeat_t
         * @static
         * @param {may.Iheartbeat_t} message heartbeat_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        heartbeat_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a heartbeat_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.heartbeat_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.heartbeat_t} heartbeat_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        heartbeat_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.heartbeat_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.sourceUtime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a heartbeat_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.heartbeat_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.heartbeat_t} heartbeat_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        heartbeat_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a heartbeat_t message.
         * @function verify
         * @memberof may.heartbeat_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        heartbeat_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.sourceUtime != null && message.hasOwnProperty("sourceUtime"))
                if (!$util.isInteger(message.sourceUtime) && !(message.sourceUtime && $util.isInteger(message.sourceUtime.low) && $util.isInteger(message.sourceUtime.high)))
                    return "sourceUtime: integer|Long expected";
            return null;
        };

        /**
         * Creates a heartbeat_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.heartbeat_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.heartbeat_t} heartbeat_t
         */
        heartbeat_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.heartbeat_t)
                
                return object;
            
            let message = new $root.may.heartbeat_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.sourceUtime != null)
                if ($util.Long)
                    
                    (message.sourceUtime = $util.Long.fromValue(object.sourceUtime)).unsigned = false;
                else if (typeof object.sourceUtime === "string")
                    message.sourceUtime = parseInt(object.sourceUtime, 10);
                else if (typeof object.sourceUtime === "number")
                    message.sourceUtime = object.sourceUtime;
                else if (typeof object.sourceUtime === "object")
                    message.sourceUtime = new $util.LongBits(object.sourceUtime.low >>> 0, object.sourceUtime.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a heartbeat_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.heartbeat_t
         * @static
         * @param {may.heartbeat_t} message heartbeat_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        heartbeat_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.sourceUtime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.sourceUtime = options.longs === String ? "0" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.sourceUtime != null && message.hasOwnProperty("sourceUtime"))
                
                if (typeof message.sourceUtime === "number")
                    
                    object.sourceUtime = options.longs === String ? String(message.sourceUtime) : message.sourceUtime;
                else
                    
                    object.sourceUtime = options.longs === String ? $util.Long.prototype.toString.call(message.sourceUtime) : options.longs === Number ? new $util.LongBits(message.sourceUtime.low >>> 0, message.sourceUtime.high >>> 0).toNumber() : message.sourceUtime;
            return object;
        };

        /**
         * Converts this heartbeat_t to JSON.
         * @function toJSON
         * @memberof may.heartbeat_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        heartbeat_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return heartbeat_t;
    })();

    may.image_sequence_t = (function() {

        /**
         * Properties of an image_sequence_t.
         * @memberof may
         * @interface Iimage_sequence_t
         * @property {Array.<may.Iimage_t>|null} [images] image_sequence_t images
         */

        /**
         * Constructs a new image_sequence_t.
         * @memberof may
         * @classdesc Represents an image_sequence_t.
         * @implements Iimage_sequence_t
         * @constructor
         * @param {may.Iimage_sequence_t=} [properties] Properties to set
         */
        
        function image_sequence_t(properties) {
            
            this.images = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * image_sequence_t images.
         * @member {Array.<may.Iimage_t>} images
         * @memberof may.image_sequence_t
         * @instance
         */
        image_sequence_t.prototype.images = $util.emptyArray;

        /**
         * Creates a new image_sequence_t instance using the specified properties.
         * @function create
         * @memberof may.image_sequence_t
         * @static
         * @param {may.Iimage_sequence_t=} [properties] Properties to set
         * @returns {may.image_sequence_t} image_sequence_t instance
         */
        image_sequence_t.create = function create(properties) {
            
            return new image_sequence_t(properties);
        };

        /**
         * Encodes the specified image_sequence_t message. Does not implicitly {@link may.image_sequence_t.verify|verify} messages.
         * @function encode
         * @memberof may.image_sequence_t
         * @static
         * @param {may.Iimage_sequence_t} message image_sequence_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        image_sequence_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.images != null && message.images.length)
                for (let i = 0; i < message.images.length; ++i)
                    
                    $root.may.image_t.encode(message.images[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified image_sequence_t message, length delimited. Does not implicitly {@link may.image_sequence_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.image_sequence_t
         * @static
         * @param {may.Iimage_sequence_t} message image_sequence_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        image_sequence_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an image_sequence_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.image_sequence_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.image_sequence_t} image_sequence_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        image_sequence_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.image_sequence_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.images && message.images.length))
                        message.images = [];
                    
                    message.images.push($root.may.image_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an image_sequence_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.image_sequence_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.image_sequence_t} image_sequence_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        image_sequence_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an image_sequence_t message.
         * @function verify
         * @memberof may.image_sequence_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        image_sequence_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.images != null && message.hasOwnProperty("images")) {
                if (!Array.isArray(message.images))
                    return "images: array expected";
                for (let i = 0; i < message.images.length; ++i) {
                    
                    let error = $root.may.image_t.verify(message.images[i]);
                    if (error)
                        return "images." + error;
                }
            }
            return null;
        };

        /**
         * Creates an image_sequence_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.image_sequence_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.image_sequence_t} image_sequence_t
         */
        image_sequence_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.image_sequence_t)
                
                return object;
            
            let message = new $root.may.image_sequence_t();
            if (object.images) {
                if (!Array.isArray(object.images))
                    throw TypeError(".may.image_sequence_t.images: array expected");
                message.images = [];
                for (let i = 0; i < object.images.length; ++i) {
                    if (typeof object.images[i] !== "object")
                        throw TypeError(".may.image_sequence_t.images: object expected");
                    
                    message.images[i] = $root.may.image_t.fromObject(object.images[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an image_sequence_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.image_sequence_t
         * @static
         * @param {may.image_sequence_t} message image_sequence_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        image_sequence_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.images = [];
            
            if (message.images && message.images.length) {
                
                object.images = [];
                
                for (let j = 0; j < message.images.length; ++j)
                    
                    object.images[j] = $root.may.image_t.toObject(message.images[j], options);
            }
            return object;
        };

        /**
         * Converts this image_sequence_t to JSON.
         * @function toJSON
         * @memberof may.image_sequence_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        image_sequence_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return image_sequence_t;
    })();

    may.image_t = (function() {

        /**
         * Properties of an image_t.
         * @memberof may
         * @interface Iimage_t
         * @property {number|Long|null} [utime] image_t utime
         * @property {number|null} [width] image_t width
         * @property {number|null} [height] image_t height
         * @property {number|null} [rowStride] image_t rowStride
         * @property {number|null} [pixelformat] image_t pixelformat
         * @property {Uint8Array|null} [data] image_t data
         * @property {may.image_t.Encoding|null} [encoding] image_t encoding
         * @property {number|Long|null} [timestamp] image_t timestamp
         * @property {number|Long|null} [duration] image_t duration
         * @property {may.image_t.FrameType|null} [frameType] image_t frameType
         * @property {string|null} [webCodec] image_t webCodec
         */

        /**
         * Constructs a new image_t.
         * @memberof may
         * @classdesc Represents an image_t.
         * @implements Iimage_t
         * @constructor
         * @param {may.Iimage_t=} [properties] Properties to set
         */
        
        function image_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * image_t utime.
         * @member {number|Long} utime
         * @memberof may.image_t
         * @instance
         */
        
        image_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * image_t width.
         * @member {number} width
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.width = 0;

        /**
         * image_t height.
         * @member {number} height
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.height = 0;

        /**
         * image_t rowStride.
         * @member {number} rowStride
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.rowStride = 0;

        /**
         * image_t pixelformat.
         * @member {number} pixelformat
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.pixelformat = 0;

        /**
         * image_t data.
         * @member {Uint8Array} data
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.data = $util.newBuffer([]);

        /**
         * image_t encoding.
         * @member {may.image_t.Encoding} encoding
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.encoding = 0;

        /**
         * image_t timestamp.
         * @member {number|Long} timestamp
         * @memberof may.image_t
         * @instance
         */
        
        image_t.prototype.timestamp = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * image_t duration.
         * @member {number|Long} duration
         * @memberof may.image_t
         * @instance
         */
        
        image_t.prototype.duration = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * image_t frameType.
         * @member {may.image_t.FrameType} frameType
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.frameType = 0;

        /**
         * image_t webCodec.
         * @member {string} webCodec
         * @memberof may.image_t
         * @instance
         */
        image_t.prototype.webCodec = "";

        /**
         * Creates a new image_t instance using the specified properties.
         * @function create
         * @memberof may.image_t
         * @static
         * @param {may.Iimage_t=} [properties] Properties to set
         * @returns {may.image_t} image_t instance
         */
        image_t.create = function create(properties) {
            
            return new image_t(properties);
        };

        /**
         * Encodes the specified image_t message. Does not implicitly {@link may.image_t.verify|verify} messages.
         * @function encode
         * @memberof may.image_t
         * @static
         * @param {may.Iimage_t} message image_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        image_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.width != null && Object.hasOwnProperty.call(message, "width"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.width);
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.height);
            if (message.rowStride != null && Object.hasOwnProperty.call(message, "rowStride"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.rowStride);
            if (message.pixelformat != null && Object.hasOwnProperty.call(message, "pixelformat"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.pixelformat);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.data);
            if (message.encoding != null && Object.hasOwnProperty.call(message, "encoding"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.encoding);
            if (message.timestamp != null && Object.hasOwnProperty.call(message, "timestamp"))
                writer.uint32(/* id 8, wireType 0 =*/64).int64(message.timestamp);
            if (message.duration != null && Object.hasOwnProperty.call(message, "duration"))
                writer.uint32(/* id 9, wireType 0 =*/72).int64(message.duration);
            if (message.frameType != null && Object.hasOwnProperty.call(message, "frameType"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.frameType);
            if (message.webCodec != null && Object.hasOwnProperty.call(message, "webCodec"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.webCodec);
            return writer;
        };

        /**
         * Encodes the specified image_t message, length delimited. Does not implicitly {@link may.image_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.image_t
         * @static
         * @param {may.Iimage_t} message image_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        image_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an image_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.image_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.image_t} image_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        image_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.image_t();           
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.width = reader.int32();
                    break;
                case 3:
                    message.height = reader.int32();
                    break;
                case 4:
                    message.rowStride = reader.int32();
                    break;
                case 5:
                    message.pixelformat = reader.int32();
                    break;
                case 6:
                    message.data = reader.bytes();
                    break;
                case 7:
                    message.encoding = reader.int32();
                    break;
                case 8:
                    message.timestamp = reader.int64();
                    break;
                case 9:
                    message.duration = reader.int64();
                    break;
                case 10:
                    message.frameType = reader.int32();
                    break;
                case 11:
                    message.webCodec = reader.string();
                    break;
                default:
                    console.log(tag);
                    //reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an image_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.image_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.image_t} image_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        image_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an image_t message.
         * @function verify
         * @memberof may.image_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        image_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.width != null && message.hasOwnProperty("width"))
                if (!$util.isInteger(message.width))
                    return "width: integer expected";
            if (message.height != null && message.hasOwnProperty("height"))
                if (!$util.isInteger(message.height))
                    return "height: integer expected";
            if (message.rowStride != null && message.hasOwnProperty("rowStride"))
                if (!$util.isInteger(message.rowStride))
                    return "rowStride: integer expected";
            if (message.pixelformat != null && message.hasOwnProperty("pixelformat"))
                if (!$util.isInteger(message.pixelformat))
                    return "pixelformat: integer expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.encoding != null && message.hasOwnProperty("encoding"))
                switch (message.encoding) {
                default:
                    return "encoding: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                if (!$util.isInteger(message.timestamp) && !(message.timestamp && $util.isInteger(message.timestamp.low) && $util.isInteger(message.timestamp.high)))
                    return "timestamp: integer|Long expected";
            if (message.duration != null && message.hasOwnProperty("duration"))
                if (!$util.isInteger(message.duration) && !(message.duration && $util.isInteger(message.duration.low) && $util.isInteger(message.duration.high)))
                    return "duration: integer|Long expected";
            if (message.frameType != null && message.hasOwnProperty("frameType"))
                switch (message.frameType) {
                default:
                    return "frameType: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.webCodec != null && message.hasOwnProperty("webCodec"))
                if (!$util.isString(message.webCodec))
                    return "webCodec: string expected";
            return null;
        };

        /**
         * Creates an image_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.image_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.image_t} image_t
         */
        image_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.image_t)
                
                return object;
            
            let message = new $root.may.image_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.width != null)
                message.width = object.width | 0;
            if (object.height != null)
                message.height = object.height | 0;
            if (object.rowStride != null)
                message.rowStride = object.rowStride | 0;
            if (object.pixelformat != null)
                message.pixelformat = object.pixelformat | 0;
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            switch (object.encoding) {
            case "ENCODING_UNKNOWN":
            case 0:
                message.encoding = 0;
                break;
            case "JPEG":
            case 1:
                message.encoding = 1;
                break;
            case "VP8":
            case 2:
                message.encoding = 2;
                break;
            case "VP9":
            case 3:
                message.encoding = 3;
                break;
            }
            if (object.timestamp != null)
                if ($util.Long)
                    
                    (message.timestamp = $util.Long.fromValue(object.timestamp)).unsigned = false;
                else if (typeof object.timestamp === "string")
                    message.timestamp = parseInt(object.timestamp, 10);
                else if (typeof object.timestamp === "number")
                    message.timestamp = object.timestamp;
                else if (typeof object.timestamp === "object")
                    message.timestamp = new $util.LongBits(object.timestamp.low >>> 0, object.timestamp.high >>> 0).toNumber();
            if (object.duration != null)
                if ($util.Long)
                    
                    (message.duration = $util.Long.fromValue(object.duration)).unsigned = false;
                else if (typeof object.duration === "string")
                    message.duration = parseInt(object.duration, 10);
                else if (typeof object.duration === "number")
                    message.duration = object.duration;
                else if (typeof object.duration === "object")
                    message.duration = new $util.LongBits(object.duration.low >>> 0, object.duration.high >>> 0).toNumber();
            switch (object.frameType) {
            case "TYPE_UNKNOWN":
            case 0:
                message.frameType = 0;
                break;
            case "KEY":
            case 1:
                message.frameType = 1;
                break;
            case "DELTA":
            case 2:
                message.frameType = 2;
                break;
            }
            if (object.webCodec != null)
                message.webCodec = String(object.webCodec);
            return message;
        };

        /**
         * Creates a plain object from an image_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.image_t
         * @static
         * @param {may.image_t} message image_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        image_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.width = 0;
                object.height = 0;
                object.rowStride = 0;
                object.pixelformat = 0;
                if (options.bytes === String)
                    
                    object.data = "";
                else {
                    
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.encoding = options.enums === String ? "ENCODING_UNKNOWN" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.timestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.duration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.duration = options.longs === String ? "0" : 0;
                object.frameType = options.enums === String ? "TYPE_UNKNOWN" : 0;
                object.webCodec = "";
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.width != null && message.hasOwnProperty("width"))
                
                object.width = message.width;
            
            if (message.height != null && message.hasOwnProperty("height"))
                
                object.height = message.height;
            
            if (message.rowStride != null && message.hasOwnProperty("rowStride"))
                
                object.rowStride = message.rowStride;
            
            if (message.pixelformat != null && message.hasOwnProperty("pixelformat"))
                
                object.pixelformat = message.pixelformat;
            
            if (message.data != null && message.hasOwnProperty("data"))
                
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            
            if (message.encoding != null && message.hasOwnProperty("encoding"))
                
                object.encoding = options.enums === String ? $root.may.image_t.Encoding[message.encoding] : message.encoding;
            
            if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                
                if (typeof message.timestamp === "number")
                    
                    object.timestamp = options.longs === String ? String(message.timestamp) : message.timestamp;
                else
                    
                    object.timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.timestamp) : options.longs === Number ? new $util.LongBits(message.timestamp.low >>> 0, message.timestamp.high >>> 0).toNumber() : message.timestamp;
            
            if (message.duration != null && message.hasOwnProperty("duration"))
                
                if (typeof message.duration === "number")
                    
                    object.duration = options.longs === String ? String(message.duration) : message.duration;
                else
                    
                    object.duration = options.longs === String ? $util.Long.prototype.toString.call(message.duration) : options.longs === Number ? new $util.LongBits(message.duration.low >>> 0, message.duration.high >>> 0).toNumber() : message.duration;
            
            if (message.frameType != null && message.hasOwnProperty("frameType"))
                
                object.frameType = options.enums === String ? $root.may.image_t.FrameType[message.frameType] : message.frameType;
            
            if (message.webCodec != null && message.hasOwnProperty("webCodec"))
                
                object.webCodec = message.webCodec;
            return object;
        };

        /**
         * Converts this image_t to JSON.
         * @function toJSON
         * @memberof may.image_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        image_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Encoding enum.
         * @name may.image_t.Encoding
         * @enum {number}
         * @property {number} ENCODING_UNKNOWN=0 ENCODING_UNKNOWN value
         * @property {number} JPEG=1 JPEG value
         * @property {number} VP8=2 VP8 value
         * @property {number} VP9=3 VP9 value
         */
        image_t.Encoding = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "ENCODING_UNKNOWN"] = 0;
            values[valuesById[1] = "JPEG"] = 1;
            values[valuesById[2] = "VP8"] = 2;
            values[valuesById[3] = "VP9"] = 3;
            return values;
        })();

        /**
         * FrameType enum.
         * @name may.image_t.FrameType
         * @enum {number}
         * @property {number} TYPE_UNKNOWN=0 TYPE_UNKNOWN value
         * @property {number} KEY=1 KEY value
         * @property {number} DELTA=2 DELTA value
         */
        image_t.FrameType = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "TYPE_UNKNOWN"] = 0;
            values[valuesById[1] = "KEY"] = 1;
            values[valuesById[2] = "DELTA"] = 2;
            return values;
        })();

        return image_t;
    })();

    may.lidar_sweep_t = (function() {

        /**
         * Properties of a lidar_sweep_t.
         * @memberof may
         * @interface Ilidar_sweep_t
         * @property {number|Long|null} [utime] lidar_sweep_t utime
         * @property {number|null} [numPackets] lidar_sweep_t numPackets
         * @property {number|null} [msgNum] lidar_sweep_t msgNum
         * @property {number|null} [sweepNum] lidar_sweep_t sweepNum
         * @property {Array.<may.lidar_sweep_t.Ibyte_buf_t>|null} [packets] lidar_sweep_t packets
         */

        /**
         * Constructs a new lidar_sweep_t.
         * @memberof may
         * @classdesc Represents a lidar_sweep_t.
         * @implements Ilidar_sweep_t
         * @constructor
         * @param {may.Ilidar_sweep_t=} [properties] Properties to set
         */
        
        function lidar_sweep_t(properties) {
            
            this.packets = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * lidar_sweep_t utime.
         * @member {number|Long} utime
         * @memberof may.lidar_sweep_t
         * @instance
         */
        
        lidar_sweep_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * lidar_sweep_t numPackets.
         * @member {number} numPackets
         * @memberof may.lidar_sweep_t
         * @instance
         */
        lidar_sweep_t.prototype.numPackets = 0;

        /**
         * lidar_sweep_t msgNum.
         * @member {number} msgNum
         * @memberof may.lidar_sweep_t
         * @instance
         */
        lidar_sweep_t.prototype.msgNum = 0;

        /**
         * lidar_sweep_t sweepNum.
         * @member {number} sweepNum
         * @memberof may.lidar_sweep_t
         * @instance
         */
        lidar_sweep_t.prototype.sweepNum = 0;

        /**
         * lidar_sweep_t packets.
         * @member {Array.<may.lidar_sweep_t.Ibyte_buf_t>} packets
         * @memberof may.lidar_sweep_t
         * @instance
         */
        lidar_sweep_t.prototype.packets = $util.emptyArray;

        /**
         * Creates a new lidar_sweep_t instance using the specified properties.
         * @function create
         * @memberof may.lidar_sweep_t
         * @static
         * @param {may.Ilidar_sweep_t=} [properties] Properties to set
         * @returns {may.lidar_sweep_t} lidar_sweep_t instance
         */
        lidar_sweep_t.create = function create(properties) {
            
            return new lidar_sweep_t(properties);
        };

        /**
         * Encodes the specified lidar_sweep_t message. Does not implicitly {@link may.lidar_sweep_t.verify|verify} messages.
         * @function encode
         * @memberof may.lidar_sweep_t
         * @static
         * @param {may.Ilidar_sweep_t} message lidar_sweep_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        lidar_sweep_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.numPackets != null && Object.hasOwnProperty.call(message, "numPackets"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.numPackets);
            if (message.msgNum != null && Object.hasOwnProperty.call(message, "msgNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.msgNum);
            if (message.sweepNum != null && Object.hasOwnProperty.call(message, "sweepNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.sweepNum);
            if (message.packets != null && message.packets.length)
                for (let i = 0; i < message.packets.length; ++i)
                    
                    $root.may.lidar_sweep_t.byte_buf_t.encode(message.packets[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified lidar_sweep_t message, length delimited. Does not implicitly {@link may.lidar_sweep_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.lidar_sweep_t
         * @static
         * @param {may.Ilidar_sweep_t} message lidar_sweep_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        lidar_sweep_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a lidar_sweep_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.lidar_sweep_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.lidar_sweep_t} lidar_sweep_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        lidar_sweep_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
           
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.lidar_sweep_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.numPackets = reader.uint32();
                    break;
                case 3:
                    message.msgNum = reader.uint32();
                    break;
                case 4:
                    message.sweepNum = reader.uint32();
                    break;
                case 5:
                    if (!(message.packets && message.packets.length))
                        message.packets = [];
                    
                    message.packets.push($root.may.lidar_sweep_t.byte_buf_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a lidar_sweep_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.lidar_sweep_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.lidar_sweep_t} lidar_sweep_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        lidar_sweep_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a lidar_sweep_t message.
         * @function verify
         * @memberof may.lidar_sweep_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        lidar_sweep_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.numPackets != null && message.hasOwnProperty("numPackets"))
                if (!$util.isInteger(message.numPackets))
                    return "numPackets: integer expected";
            if (message.msgNum != null && message.hasOwnProperty("msgNum"))
                if (!$util.isInteger(message.msgNum))
                    return "msgNum: integer expected";
            if (message.sweepNum != null && message.hasOwnProperty("sweepNum"))
                if (!$util.isInteger(message.sweepNum))
                    return "sweepNum: integer expected";
            if (message.packets != null && message.hasOwnProperty("packets")) {
                if (!Array.isArray(message.packets))
                    return "packets: array expected";
                for (let i = 0; i < message.packets.length; ++i) {
                    
                    let error = $root.may.lidar_sweep_t.byte_buf_t.verify(message.packets[i]);
                    if (error)
                        return "packets." + error;
                }
            }
            return null;
        };

        /**
         * Creates a lidar_sweep_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.lidar_sweep_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.lidar_sweep_t} lidar_sweep_t
         */
        lidar_sweep_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.lidar_sweep_t)
                
                return object;
            
            let message = new $root.may.lidar_sweep_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.numPackets != null)
                message.numPackets = object.numPackets >>> 0;
            if (object.msgNum != null)
                message.msgNum = object.msgNum >>> 0;
            if (object.sweepNum != null)
                message.sweepNum = object.sweepNum >>> 0;
            if (object.packets) {
                if (!Array.isArray(object.packets))
                    throw TypeError(".may.lidar_sweep_t.packets: array expected");
                message.packets = [];
                for (let i = 0; i < object.packets.length; ++i) {
                    if (typeof object.packets[i] !== "object")
                        throw TypeError(".may.lidar_sweep_t.packets: object expected");
                    
                    message.packets[i] = $root.may.lidar_sweep_t.byte_buf_t.fromObject(object.packets[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a lidar_sweep_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.lidar_sweep_t
         * @static
         * @param {may.lidar_sweep_t} message lidar_sweep_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        lidar_sweep_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.packets = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.numPackets = 0;
                object.msgNum = 0;
                object.sweepNum = 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.numPackets != null && message.hasOwnProperty("numPackets"))
                
                object.numPackets = message.numPackets;
            
            if (message.msgNum != null && message.hasOwnProperty("msgNum"))
                
                object.msgNum = message.msgNum;
            
            if (message.sweepNum != null && message.hasOwnProperty("sweepNum"))
                
                object.sweepNum = message.sweepNum;
            
            if (message.packets && message.packets.length) {
                
                object.packets = [];
                
                for (let j = 0; j < message.packets.length; ++j)
                    
                    object.packets[j] = $root.may.lidar_sweep_t.byte_buf_t.toObject(message.packets[j], options);
            }
            return object;
        };

        /**
         * Converts this lidar_sweep_t to JSON.
         * @function toJSON
         * @memberof may.lidar_sweep_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        lidar_sweep_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        lidar_sweep_t.byte_buf_t = (function() {

            /**
             * Properties of a byte_buf_t.
             * @memberof may.lidar_sweep_t
             * @interface Ibyte_buf_t
             * @property {number|Long|null} [utime] byte_buf_t utime
             * @property {number|null} [len] byte_buf_t len
             * @property {Uint8Array|null} [buf] byte_buf_t buf
             */

            /**
             * Constructs a new byte_buf_t.
             * @memberof may.lidar_sweep_t
             * @classdesc Represents a byte_buf_t.
             * @implements Ibyte_buf_t
             * @constructor
             * @param {may.lidar_sweep_t.Ibyte_buf_t=} [properties] Properties to set
             */
            
            function byte_buf_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * byte_buf_t utime.
             * @member {number|Long} utime
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @instance
             */
            
            byte_buf_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

            /**
             * byte_buf_t len.
             * @member {number} len
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @instance
             */
            byte_buf_t.prototype.len = 0;

            /**
             * byte_buf_t buf.
             * @member {Uint8Array} buf
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @instance
             */
            byte_buf_t.prototype.buf = $util.newBuffer([]);

            /**
             * Creates a new byte_buf_t instance using the specified properties.
             * @function create
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {may.lidar_sweep_t.Ibyte_buf_t=} [properties] Properties to set
             * @returns {may.lidar_sweep_t.byte_buf_t} byte_buf_t instance
             */
            byte_buf_t.create = function create(properties) {
                return new byte_buf_t(properties);
            };

            /**
             * Encodes the specified byte_buf_t message. Does not implicitly {@link may.lidar_sweep_t.byte_buf_t.verify|verify} messages.
             * @function encode
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {may.lidar_sweep_t.Ibyte_buf_t} message byte_buf_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            byte_buf_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                    writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
                if (message.len != null && Object.hasOwnProperty.call(message, "len"))
                    writer.uint32(/* id 2, wireType 0 =*/16).int32(message.len);
                if (message.buf != null && Object.hasOwnProperty.call(message, "buf"))
                    writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.buf);
                return writer;
            };

            /**
             * Encodes the specified byte_buf_t message, length delimited. Does not implicitly {@link may.lidar_sweep_t.byte_buf_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {may.lidar_sweep_t.Ibyte_buf_t} message byte_buf_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            byte_buf_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer.
             * @function decode
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {may.lidar_sweep_t.byte_buf_t} byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            byte_buf_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.lidar_sweep_t.byte_buf_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.utime = reader.int64();
                        break;
                    case 2:
                        message.len = reader.int32();
                        break;
                    case 3:
                        message.buf = reader.bytes();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {may.lidar_sweep_t.byte_buf_t} byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            byte_buf_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a byte_buf_t message.
             * @function verify
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            byte_buf_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.utime != null && message.hasOwnProperty("utime"))
                    if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                        return "utime: integer|Long expected";
                if (message.len != null && message.hasOwnProperty("len"))
                    if (!$util.isInteger(message.len))
                        return "len: integer expected";
                if (message.buf != null && message.hasOwnProperty("buf"))
                    if (!(message.buf && typeof message.buf.length === "number" || $util.isString(message.buf)))
                        return "buf: buffer expected";
                return null;
            };

            /**
             * Creates a byte_buf_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {may.lidar_sweep_t.byte_buf_t} byte_buf_t
             */
            byte_buf_t.fromObject = function fromObject(object) {
                
                if (object instanceof $root.may.lidar_sweep_t.byte_buf_t)
                    return object;
                
                let message = new $root.may.lidar_sweep_t.byte_buf_t();
                if (object.utime != null)
                    if ($util.Long)
                        
                        (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                    else if (typeof object.utime === "string")
                        message.utime = parseInt(object.utime, 10);
                    else if (typeof object.utime === "number")
                        message.utime = object.utime;
                    else if (typeof object.utime === "object")
                        message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
                if (object.len != null)
                    message.len = object.len | 0;
                if (object.buf != null)
                    if (typeof object.buf === "string")
                        $util.base64.decode(object.buf, message.buf = $util.newBuffer($util.base64.length(object.buf)), 0);
                    else if (object.buf.length)
                        message.buf = object.buf;
                return message;
            };

            /**
             * Creates a plain object from a byte_buf_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @static
             * @param {may.lidar_sweep_t.byte_buf_t} message byte_buf_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            byte_buf_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    if ($util.Long) {
                        let long = new $util.Long(0, 0, false);
                        
                        object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                    } else
                        object.utime = options.longs === String ? "0" : 0;
                    object.len = 0;
                    if (options.bytes === String)
                        
                        object.buf = "";
                    else {
                        
                        object.buf = [];
                        if (options.bytes !== Array)
                            object.buf = $util.newBuffer(object.buf);
                    }
                }
                if (message.utime != null && message.hasOwnProperty("utime"))
                    if (typeof message.utime === "number")
                        object.utime = options.longs === String ? String(message.utime) : message.utime;
                    else
                        object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
                if (message.len != null && message.hasOwnProperty("len"))
                    object.len = message.len;
                if (message.buf != null && message.hasOwnProperty("buf"))
                    object.buf = options.bytes === String ? $util.base64.encode(message.buf, 0, message.buf.length) : options.bytes === Array ? Array.prototype.slice.call(message.buf) : message.buf;
                return object;
            };

            /**
             * Converts this byte_buf_t to JSON.
             * @function toJSON
             * @memberof may.lidar_sweep_t.byte_buf_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            byte_buf_t.prototype.toJSON = function toJSON() {
                
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return byte_buf_t;
        })();

        return lidar_sweep_t;
    })();

    may.platform_health_list_t = (function() {

        /**
         * Properties of a platform_health_list_t.
         * @memberof may
         * @interface Iplatform_health_list_t
         * @property {number|Long|null} [utime] platform_health_list_t utime
         * @property {number|null} [nparams] platform_health_list_t nparams
         * @property {Array.<may.Iplatform_health_t>|null} [params] platform_health_list_t params
         */

        /**
         * Constructs a new platform_health_list_t.
         * @memberof may
         * @classdesc Represents a platform_health_list_t.
         * @implements Iplatform_health_list_t
         * @constructor
         * @param {may.Iplatform_health_list_t=} [properties] Properties to set
         */
        
        function platform_health_list_t(properties) {
            
            this.params = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * platform_health_list_t utime.
         * @member {number|Long} utime
         * @memberof may.platform_health_list_t
         * @instance
         */
        
        platform_health_list_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * platform_health_list_t nparams.
         * @member {number} nparams
         * @memberof may.platform_health_list_t
         * @instance
         */
        platform_health_list_t.prototype.nparams = 0;

        /**
         * platform_health_list_t params.
         * @member {Array.<may.Iplatform_health_t>} params
         * @memberof may.platform_health_list_t
         * @instance
         */
        platform_health_list_t.prototype.params = $util.emptyArray;

        /**
         * Creates a new platform_health_list_t instance using the specified properties.
         * @function create
         * @memberof may.platform_health_list_t
         * @static
         * @param {may.Iplatform_health_list_t=} [properties] Properties to set
         * @returns {may.platform_health_list_t} platform_health_list_t instance
         */
        platform_health_list_t.create = function create(properties) {
            
            return new platform_health_list_t(properties);
        };

        /**
         * Encodes the specified platform_health_list_t message. Does not implicitly {@link may.platform_health_list_t.verify|verify} messages.
         * @function encode
         * @memberof may.platform_health_list_t
         * @static
         * @param {may.Iplatform_health_list_t} message platform_health_list_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        platform_health_list_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.nparams != null && Object.hasOwnProperty.call(message, "nparams"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.nparams);
            if (message.params != null && message.params.length)
                for (let i = 0; i < message.params.length; ++i)
                    
                    $root.may.platform_health_t.encode(message.params[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified platform_health_list_t message, length delimited. Does not implicitly {@link may.platform_health_list_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.platform_health_list_t
         * @static
         * @param {may.Iplatform_health_list_t} message platform_health_list_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        platform_health_list_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a platform_health_list_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.platform_health_list_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.platform_health_list_t} platform_health_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        platform_health_list_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.platform_health_list_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.nparams = reader.int32();
                    break;
                case 3:
                    if (!(message.params && message.params.length))
                        message.params = [];
                    
                    message.params.push($root.may.platform_health_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a platform_health_list_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.platform_health_list_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.platform_health_list_t} platform_health_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        platform_health_list_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a platform_health_list_t message.
         * @function verify
         * @memberof may.platform_health_list_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        platform_health_list_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.nparams != null && message.hasOwnProperty("nparams"))
                if (!$util.isInteger(message.nparams))
                    return "nparams: integer expected";
            if (message.params != null && message.hasOwnProperty("params")) {
                if (!Array.isArray(message.params))
                    return "params: array expected";
                for (let i = 0; i < message.params.length; ++i) {
                    
                    let error = $root.may.platform_health_t.verify(message.params[i]);
                    if (error)
                        return "params." + error;
                }
            }
            return null;
        };

        /**
         * Creates a platform_health_list_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.platform_health_list_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.platform_health_list_t} platform_health_list_t
         */
        platform_health_list_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.platform_health_list_t)
                
                return object;
            
            let message = new $root.may.platform_health_list_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.nparams != null)
                message.nparams = object.nparams | 0;
            if (object.params) {
                if (!Array.isArray(object.params))
                    throw TypeError(".may.platform_health_list_t.params: array expected");
                message.params = [];
                for (let i = 0; i < object.params.length; ++i) {
                    if (typeof object.params[i] !== "object")
                        throw TypeError(".may.platform_health_list_t.params: object expected");
                    
                    message.params[i] = $root.may.platform_health_t.fromObject(object.params[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a platform_health_list_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.platform_health_list_t
         * @static
         * @param {may.platform_health_list_t} message platform_health_list_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        platform_health_list_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.params = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.nparams = 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.nparams != null && message.hasOwnProperty("nparams"))
                
                object.nparams = message.nparams;
            
            if (message.params && message.params.length) {
                
                object.params = [];
                
                for (let j = 0; j < message.params.length; ++j)
                    
                    object.params[j] = $root.may.platform_health_t.toObject(message.params[j], options);
            }
            return object;
        };

        /**
         * Converts this platform_health_list_t to JSON.
         * @function toJSON
         * @memberof may.platform_health_list_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        platform_health_list_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return platform_health_list_t;
    })();

    may.platform_health_t = (function() {

        /**
         * Properties of a platform_health_t.
         * @memberof may
         * @interface Iplatform_health_t
         * @property {number|null} [groupId] platform_health_t groupId
         * @property {number|null} [valueId] platform_health_t valueId
         * @property {number|null} [value] platform_health_t value
         */

        /**
         * Constructs a new platform_health_t.
         * @memberof may
         * @classdesc Represents a platform_health_t.
         * @implements Iplatform_health_t
         * @constructor
         * @param {may.Iplatform_health_t=} [properties] Properties to set
         */
        
        function platform_health_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * platform_health_t groupId.
         * @member {number} groupId
         * @memberof may.platform_health_t
         * @instance
         */
        platform_health_t.prototype.groupId = 0;

        /**
         * platform_health_t valueId.
         * @member {number} valueId
         * @memberof may.platform_health_t
         * @instance
         */
        platform_health_t.prototype.valueId = 0;

        /**
         * platform_health_t value.
         * @member {number} value
         * @memberof may.platform_health_t
         * @instance
         */
        platform_health_t.prototype.value = 0;

        /**
         * Creates a new platform_health_t instance using the specified properties.
         * @function create
         * @memberof may.platform_health_t
         * @static
         * @param {may.Iplatform_health_t=} [properties] Properties to set
         * @returns {may.platform_health_t} platform_health_t instance
         */
        platform_health_t.create = function create(properties) {
            
            return new platform_health_t(properties);
        };

        /**
         * Encodes the specified platform_health_t message. Does not implicitly {@link may.platform_health_t.verify|verify} messages.
         * @function encode
         * @memberof may.platform_health_t
         * @static
         * @param {may.Iplatform_health_t} message platform_health_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        platform_health_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.groupId != null && Object.hasOwnProperty.call(message, "groupId"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.groupId);
            if (message.valueId != null && Object.hasOwnProperty.call(message, "valueId"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.valueId);
            if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.value);
            return writer;
        };

        /**
         * Encodes the specified platform_health_t message, length delimited. Does not implicitly {@link may.platform_health_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.platform_health_t
         * @static
         * @param {may.Iplatform_health_t} message platform_health_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        platform_health_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a platform_health_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.platform_health_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.platform_health_t} platform_health_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        platform_health_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.platform_health_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.groupId = reader.uint32();
                    break;
                case 2:
                    message.valueId = reader.uint32();
                    break;
                case 3:
                    message.value = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a platform_health_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.platform_health_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.platform_health_t} platform_health_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        platform_health_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a platform_health_t message.
         * @function verify
         * @memberof may.platform_health_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        platform_health_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                if (!$util.isInteger(message.groupId))
                    return "groupId: integer expected";
            if (message.valueId != null && message.hasOwnProperty("valueId"))
                if (!$util.isInteger(message.valueId))
                    return "valueId: integer expected";
            if (message.value != null && message.hasOwnProperty("value"))
                if (!$util.isInteger(message.value))
                    return "value: integer expected";
            return null;
        };

        /**
         * Creates a platform_health_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.platform_health_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.platform_health_t} platform_health_t
         */
        platform_health_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.platform_health_t)
                
                return object;
            
            let message = new $root.may.platform_health_t();
            if (object.groupId != null)
                message.groupId = object.groupId >>> 0;
            if (object.valueId != null)
                message.valueId = object.valueId >>> 0;
            if (object.value != null)
                message.value = object.value >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a platform_health_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.platform_health_t
         * @static
         * @param {may.platform_health_t} message platform_health_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        platform_health_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                object.groupId = 0;
                object.valueId = 0;
                object.value = 0;
            }
            
            if (message.groupId != null && message.hasOwnProperty("groupId"))
                
                object.groupId = message.groupId;
            
            if (message.valueId != null && message.hasOwnProperty("valueId"))
                
                object.valueId = message.valueId;
            
            if (message.value != null && message.hasOwnProperty("value"))
                
                object.value = message.value;
            return object;
        };

        /**
         * Converts this platform_health_t to JSON.
         * @function toJSON
         * @memberof may.platform_health_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        platform_health_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Group Names
         * @name may.platform_health_t.GID
         * @enum {number}
         * @property {number} UNKNOWN=0 UNKNOWN value
         * @property {number} COMPUTE=1 COMPUTE value
         * @property {number} STORAGE=2 STORAGE value
         * @property {number} POWER=3 POWER value
         * @property {number} PROCESS=4 PROCESS value
         * @property {number} SOFTWARE=5 SOFTWARE value
         */
        platform_health_t.GID = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "UNKNOWN"] = 0;
            values[valuesById[1] = "COMPUTE"] = 1;
            values[valuesById[2] = "STORAGE"] = 2;
            values[valuesById[3] = "POWER"] = 3;
            values[valuesById[4] = "PROCESS"] = 4;
            values[valuesById[5] = "SOFTWARE"] = 5;
            return values;
        })();

        /**
         * GID_COMPUTE enum.
         * @name may.platform_health_t.GID_COMPUTE
         * @enum {number}
         * @property {number} GID_COMPUTE_UNKNOWN=0 GID_COMPUTE_UNKNOWN value
         * @property {number} VID_LOAD_1MIN=1 VID_LOAD_1MIN value
         * @property {number} VID_LOAD_5MIN=2 VID_LOAD_5MIN value
         * @property {number} VID_LOAD_15MIN=3 VID_LOAD_15MIN value
         * @property {number} VID_UPTIME_SECONDS=4 VID_UPTIME_SECONDS value
         * @property {number} VID_RAM_USED_MB=5 VID_RAM_USED_MB value
         * @property {number} VID_RAM_TOTAL_MB=6 VID_RAM_TOTAL_MB value
         * @property {number} VID_SWAP_USED_MB=7 VID_SWAP_USED_MB value
         * @property {number} VID_SWAP_TOTAL_MB=8 VID_SWAP_TOTAL_MB value
         * @property {number} VID_TEMP_THERMAL_ZONE_ACPI=9 VID_TEMP_THERMAL_ZONE_ACPI value
         * @property {number} VID_TEMP_THERMAL_ZONE_PCH=10 VID_TEMP_THERMAL_ZONE_PCH value
         * @property {number} VID_TEMP_THERMAL_ZONE_X86_PKG=11 VID_TEMP_THERMAL_ZONE_X86_PKG value
         * @property {number} VID_TEMP_THERMAL_ZONE_IWLWIFI=12 VID_TEMP_THERMAL_ZONE_IWLWIFI value
         * @property {number} VID_TEMP_THERMAL_ZONE_BCM2835=13 VID_TEMP_THERMAL_ZONE_BCM2835 value
         * @property {number} VID_TEMP_THERMAL_ZONE_CPUTHERMAL=14 VID_TEMP_THERMAL_ZONE_CPUTHERMAL value
         */
        platform_health_t.GID_COMPUTE = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GID_COMPUTE_UNKNOWN"] = 0;
            values[valuesById[1] = "VID_LOAD_1MIN"] = 1;
            values[valuesById[2] = "VID_LOAD_5MIN"] = 2;
            values[valuesById[3] = "VID_LOAD_15MIN"] = 3;
            values[valuesById[4] = "VID_UPTIME_SECONDS"] = 4;
            values[valuesById[5] = "VID_RAM_USED_MB"] = 5;
            values[valuesById[6] = "VID_RAM_TOTAL_MB"] = 6;
            values[valuesById[7] = "VID_SWAP_USED_MB"] = 7;
            values[valuesById[8] = "VID_SWAP_TOTAL_MB"] = 8;
            values[valuesById[9] = "VID_TEMP_THERMAL_ZONE_ACPI"] = 9;
            values[valuesById[10] = "VID_TEMP_THERMAL_ZONE_PCH"] = 10;
            values[valuesById[11] = "VID_TEMP_THERMAL_ZONE_X86_PKG"] = 11;
            values[valuesById[12] = "VID_TEMP_THERMAL_ZONE_IWLWIFI"] = 12;
            values[valuesById[13] = "VID_TEMP_THERMAL_ZONE_BCM2835"] = 13;
            values[valuesById[14] = "VID_TEMP_THERMAL_ZONE_CPUTHERMAL"] = 14;
            return values;
        })();

        /**
         * GID_STORAGE enum.
         * @name may.platform_health_t.GID_STORAGE
         * @enum {number}
         * @property {number} GID_STORAGE_UNKNOWN=0 GID_STORAGE_UNKNOWN value
         * @property {number} VID_DISK_INT_USED_MB=1 VID_DISK_INT_USED_MB value
         * @property {number} VID_DISK_INT_TOTAL_MB=2 VID_DISK_INT_TOTAL_MB value
         * @property {number} VID_DISK_EXT_USED_MB=3 VID_DISK_EXT_USED_MB value
         * @property {number} VID_DISK_EXT_TOTAL_MB=4 VID_DISK_EXT_TOTAL_MB value
         */
        platform_health_t.GID_STORAGE = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GID_STORAGE_UNKNOWN"] = 0;
            values[valuesById[1] = "VID_DISK_INT_USED_MB"] = 1;
            values[valuesById[2] = "VID_DISK_INT_TOTAL_MB"] = 2;
            values[valuesById[3] = "VID_DISK_EXT_USED_MB"] = 3;
            values[valuesById[4] = "VID_DISK_EXT_TOTAL_MB"] = 4;
            return values;
        })();

        /**
         * GID_POWER
         * @name may.platform_health_t.GID_POWER
         * @enum {number}
         * @property {number} GID_POWER_UNKNOWN=0 GID_POWER_UNKNOWN value
         * @property {number} VID_AC_STATUS=1 VID_AC_STATUS value
         * @property {number} VID_CHARGING_STATUS=2 VID_CHARGING_STATUS value
         * @property {number} VID_BATT_PLT_ENERGY_AVAIL_WH=3 VID_BATT_PLT_ENERGY_AVAIL_WH value
         * @property {number} VID_BATT_PLT_ENERGY_FULL_WH=4 VID_BATT_PLT_ENERGY_FULL_WH value
         * @property {number} VID_BATT_PLT_MILLIVOLT_NOW=5 VID_BATT_PLT_MILLIVOLT_NOW value
         * @property {number} VID_BATT_PLT_MILLIVOLT_NOMINAL=6 VID_BATT_PLT_MILLIVOLT_NOMINAL value
         * @property {number} VID_BATT_COMP_ENERGY_AVAIL_WH=7 VID_BATT_COMP_ENERGY_AVAIL_WH value
         * @property {number} VID_BATT_COMP_ENERGY_FULL_WH=8 VID_BATT_COMP_ENERGY_FULL_WH value
         * @property {number} VID_BATT_COMP_MILLIVOLT_NOW=9 VID_BATT_COMP_MILLIVOLT_NOW value
         * @property {number} VID_BATT_COMP_MILLIVOLT_NOMINAL=10 VID_BATT_COMP_MILLIVOLT_NOMINAL value
         * @property {number} VID_BATT_PLT_PERCENT=11 VID_BATT_PLT_PERCENT value
         * @property {number} VID_BATT_COMP_PERCENT=12 VID_BATT_COMP_PERCENT value
         * @property {number} VID_BATT_PLT_TEMPERATURE=13 VID_BATT_PLT_TEMPERATURE value
         * @property {number} VID_BATT_COMP_TEMPERATURE=14 VID_BATT_COMP_TEMPERATURE value
         * @property {number} VID_BATT_PLT_DISCHARGE=15 VID_BATT_PLT_DISCHARGE value
         * @property {number} VID_BATT_COMP_DISCHARGE=16 VID_BATT_COMP_DISCHARGE value
         * @property {number} VID_BATT_PLT_CELL_TEMPERATURE_MIN=17 VID_BATT_PLT_CELL_TEMPERATURE_MIN value
         * @property {number} VID_BATT_PLT_CELL_TEMPERATURE_MAX=18 VID_BATT_PLT_CELL_TEMPERATURE_MAX value
         */
        platform_health_t.GID_POWER = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GID_POWER_UNKNOWN"] = 0;
            values[valuesById[1] = "VID_AC_STATUS"] = 1;
            values[valuesById[2] = "VID_CHARGING_STATUS"] = 2;
            values[valuesById[3] = "VID_BATT_PLT_ENERGY_AVAIL_WH"] = 3;
            values[valuesById[4] = "VID_BATT_PLT_ENERGY_FULL_WH"] = 4;
            values[valuesById[5] = "VID_BATT_PLT_MILLIVOLT_NOW"] = 5;
            values[valuesById[6] = "VID_BATT_PLT_MILLIVOLT_NOMINAL"] = 6;
            values[valuesById[7] = "VID_BATT_COMP_ENERGY_AVAIL_WH"] = 7;
            values[valuesById[8] = "VID_BATT_COMP_ENERGY_FULL_WH"] = 8;
            values[valuesById[9] = "VID_BATT_COMP_MILLIVOLT_NOW"] = 9;
            values[valuesById[10] = "VID_BATT_COMP_MILLIVOLT_NOMINAL"] = 10;
            values[valuesById[11] = "VID_BATT_PLT_PERCENT"] = 11;
            values[valuesById[12] = "VID_BATT_COMP_PERCENT"] = 12;
            values[valuesById[13] = "VID_BATT_PLT_TEMPERATURE"] = 13;
            values[valuesById[14] = "VID_BATT_COMP_TEMPERATURE"] = 14;
            values[valuesById[15] = "VID_BATT_PLT_DISCHARGE"] = 15;
            values[valuesById[16] = "VID_BATT_COMP_DISCHARGE"] = 16;
            values[valuesById[17] = "VID_BATT_PLT_CELL_TEMPERATURE_MIN"] = 17;
            values[valuesById[18] = "VID_BATT_PLT_CELL_TEMPERATURE_MAX"] = 18;
            return values;
        })();

        /**
         * Lower numbers are more severe, and programs should be able to depend on
         * these statuses remaining ordered.
         * 
         * Note: these were added with the intent of reporting the status of critical
         * processes but they are not currently used. jimpri - 20181105
         * @name may.platform_health_t.GID_PROCESS_VAL_PROC
         * @enum {number}
         * @property {number} FATAL=0 FATAL value
         * @property {number} ERROR=1 ERROR value
         * @property {number} WARN=2 WARN value
         * @property {number} OKAY=3 OKAY value
         */
        platform_health_t.GID_PROCESS_VAL_PROC = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "FATAL"] = 0;
            values[valuesById[1] = "ERROR"] = 1;
            values[valuesById[2] = "WARN"] = 2;
            values[valuesById[3] = "OKAY"] = 3;
            return values;
        })();

        /**
         * GID_PROCESS_VID_PROD enum.
         * @name may.platform_health_t.GID_PROCESS_VID_PROD
         * @enum {number}
         * @property {number} GID_PROCESS_VID_PROD_UNKNOWN=0 GID_PROCESS_VID_PROD_UNKNOWN value
         * @property {number} REPORTING=1 REPORTING value
         * @property {number} LOGGING=2 LOGGING value
         * @property {number} HEALTH_REPORTER_START_TIME=3 HEALTH_REPORTER_START_TIME value
         */
        platform_health_t.GID_PROCESS_VID_PROD = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GID_PROCESS_VID_PROD_UNKNOWN"] = 0;
            values[valuesById[1] = "REPORTING"] = 1;
            values[valuesById[2] = "LOGGING"] = 2;
            values[valuesById[3] = "HEALTH_REPORTER_START_TIME"] = 3;
            return values;
        })();

        /**
         * GID_SOFTWARE enum.
         * @name may.platform_health_t.GID_SOFTWARE
         * @enum {number}
         * @property {number} GID_SOFTWARE_UNKNOWN=0 GID_SOFTWARE_UNKNOWN value
         * @property {number} VERSION_1=1 VERSION_1 value
         * @property {number} VERSION_2=2 VERSION_2 value
         * @property {number} VERSION_3=3 VERSION_3 value
         */
        platform_health_t.GID_SOFTWARE = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "GID_SOFTWARE_UNKNOWN"] = 0;
            values[valuesById[1] = "VERSION_1"] = 1;
            values[valuesById[2] = "VERSION_2"] = 2;
            values[valuesById[3] = "VERSION_3"] = 3;
            return values;
        })();

        return platform_health_t;
    })();

    may.policy_state_t = (function() {

        /**
         * Properties of a policy_state_t.
         * @memberof may
         * @interface Ipolicy_state_t
         * @property {number|Long|null} [utime] policy_state_t utime
         * @property {string|null} [activePolicy] policy_state_t activePolicy
         * @property {Object.<string,number>|null} [policyCostMap] policy_state_t policyCostMap
         */

        /**
         * Constructs a new policy_state_t.
         * @memberof may
         * @classdesc Represents a policy_state_t.
         * @implements Ipolicy_state_t
         * @constructor
         * @param {may.Ipolicy_state_t=} [properties] Properties to set
         */
        
        function policy_state_t(properties) {
            this.policyCostMap = {};
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * policy_state_t utime.
         * @member {number|Long} utime
         * @memberof may.policy_state_t
         * @instance
         */
        
        policy_state_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * policy_state_t activePolicy.
         * @member {string} activePolicy
         * @memberof may.policy_state_t
         * @instance
         */
        policy_state_t.prototype.activePolicy = "";

        /**
         * policy_state_t policyCostMap.
         * @member {Object.<string,number>} policyCostMap
         * @memberof may.policy_state_t
         * @instance
         */
        policy_state_t.prototype.policyCostMap = $util.emptyObject;

        /**
         * Creates a new policy_state_t instance using the specified properties.
         * @function create
         * @memberof may.policy_state_t
         * @static
         * @param {may.Ipolicy_state_t=} [properties] Properties to set
         * @returns {may.policy_state_t} policy_state_t instance
         */
        policy_state_t.create = function create(properties) {
            
            return new policy_state_t(properties);
        };

        /**
         * Encodes the specified policy_state_t message. Does not implicitly {@link may.policy_state_t.verify|verify} messages.
         * @function encode
         * @memberof may.policy_state_t
         * @static
         * @param {may.Ipolicy_state_t} message policy_state_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        policy_state_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.activePolicy != null && Object.hasOwnProperty.call(message, "activePolicy"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.activePolicy);
            if (message.policyCostMap != null && Object.hasOwnProperty.call(message, "policyCostMap"))
                for (let keys = Object.keys(message.policyCostMap), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 5 =*/21).float(message.policyCostMap[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Encodes the specified policy_state_t message, length delimited. Does not implicitly {@link may.policy_state_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.policy_state_t
         * @static
         * @param {may.Ipolicy_state_t} message policy_state_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        policy_state_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a policy_state_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.policy_state_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.policy_state_t} policy_state_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        policy_state_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.policy_state_t(), key, value;
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.activePolicy = reader.string();
                    break;
                case 3:
                    if (message.policyCostMap === $util.emptyObject)
                        message.policyCostMap = {};
                    let end2 = reader.uint32() + reader.pos;
                    key = "";
                    value = 0;
                    while (reader.pos < end2) {
                        let tag2 = reader.uint32();
                        switch (tag2 >>> 3) {
                        case 1:
                            key = reader.string();
                            break;
                        case 2:
                            value = reader.float();
                            break;
                        default:
                            reader.skipType(tag2 & 7);
                            break;
                        }
                    }
                    message.policyCostMap[key] = value;
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a policy_state_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.policy_state_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.policy_state_t} policy_state_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        policy_state_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a policy_state_t message.
         * @function verify
         * @memberof may.policy_state_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        policy_state_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.activePolicy != null && message.hasOwnProperty("activePolicy"))
                if (!$util.isString(message.activePolicy))
                    return "activePolicy: string expected";
            if (message.policyCostMap != null && message.hasOwnProperty("policyCostMap")) {
                if (!$util.isObject(message.policyCostMap))
                    return "policyCostMap: object expected";
                let key = Object.keys(message.policyCostMap);
                for (let i = 0; i < key.length; ++i)
                    if (typeof message.policyCostMap[key[i]] !== "number")
                        return "policyCostMap: number{k:string} expected";
            }
            return null;
        };

        /**
         * Creates a policy_state_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.policy_state_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.policy_state_t} policy_state_t
         */
        policy_state_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.policy_state_t)
                
                return object;
            
            let message = new $root.may.policy_state_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.activePolicy != null)
                message.activePolicy = String(object.activePolicy);
            if (object.policyCostMap) {
                if (typeof object.policyCostMap !== "object")
                    throw TypeError(".may.policy_state_t.policyCostMap: object expected");
                message.policyCostMap = {};
                for (let keys = Object.keys(object.policyCostMap), i = 0; i < keys.length; ++i)
                    message.policyCostMap[keys[i]] = Number(object.policyCostMap[keys[i]]);
            }
            return message;
        };

        /**
         * Creates a plain object from a policy_state_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.policy_state_t
         * @static
         * @param {may.policy_state_t} message policy_state_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        policy_state_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.objects || options.defaults)
                object.policyCostMap = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.activePolicy = "";
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.activePolicy != null && message.hasOwnProperty("activePolicy"))
                
                object.activePolicy = message.activePolicy;
            let keys2;
            
            if (message.policyCostMap && (keys2 = Object.keys(message.policyCostMap)).length) {
                object.policyCostMap = {};
                for (let j = 0; j < keys2.length; ++j)
                    
                    object.policyCostMap[keys2[j]] = options.json && !isFinite(message.policyCostMap[keys2[j]]) ? String(message.policyCostMap[keys2[j]]) : message.policyCostMap[keys2[j]];
            }
            return object;
        };

        /**
         * Converts this policy_state_t to JSON.
         * @function toJSON
         * @memberof may.policy_state_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        policy_state_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return policy_state_t;
    })();

    may.polygon_t = (function() {

        /**
         * Properties of a polygon_t.
         * @memberof may
         * @interface Ipolygon_t
         * @property {Array.<may.polygon_t.IPoints>|null} [pts] < The points objects
         * @property {number|null} [height] polygon_t height
         */

        /**
         * Constructs a new polygon_t.
         * @memberof may
         * @classdesc A 2D polygon. A polygon is defined by a sequence of points specified in CCW
         * order. The polygon is implicitly closed, with an implied edge between the last
         * and first points
         * @implements Ipolygon_t
         * @constructor
         * @param {may.Ipolygon_t=} [properties] Properties to set
         */
        
        function polygon_t(properties) {
            
            this.pts = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * < The points objects
         * @member {Array.<may.polygon_t.IPoints>} pts
         * @memberof may.polygon_t
         * @instance
         */
        polygon_t.prototype.pts = $util.emptyArray;

        /**
         * polygon_t height.
         * @member {number} height
         * @memberof may.polygon_t
         * @instance
         */
        polygon_t.prototype.height = 0;

        /**
         * Creates a new polygon_t instance using the specified properties.
         * @function create
         * @memberof may.polygon_t
         * @static
         * @param {may.Ipolygon_t=} [properties] Properties to set
         * @returns {may.polygon_t} polygon_t instance
         */
        polygon_t.create = function create(properties) {
            
            return new polygon_t(properties);
        };

        /**
         * Encodes the specified polygon_t message. Does not implicitly {@link may.polygon_t.verify|verify} messages.
         * @function encode
         * @memberof may.polygon_t
         * @static
         * @param {may.Ipolygon_t} message polygon_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        polygon_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.pts != null && message.pts.length)
                for (let i = 0; i < message.pts.length; ++i)
                    
                    $root.may.polygon_t.Points.encode(message.pts[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                writer.uint32(/* id 2, wireType 1 =*/17).double(message.height);
            return writer;
        };

        /**
         * Encodes the specified polygon_t message, length delimited. Does not implicitly {@link may.polygon_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.polygon_t
         * @static
         * @param {may.Ipolygon_t} message polygon_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        polygon_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a polygon_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.polygon_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.polygon_t} polygon_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        polygon_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.polygon_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.pts && message.pts.length))
                        message.pts = [];
                    
                    message.pts.push($root.may.polygon_t.Points.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.height = reader.double();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a polygon_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.polygon_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.polygon_t} polygon_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        polygon_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a polygon_t message.
         * @function verify
         * @memberof may.polygon_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        polygon_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.pts != null && message.hasOwnProperty("pts")) {
                if (!Array.isArray(message.pts))
                    return "pts: array expected";
                for (let i = 0; i < message.pts.length; ++i) {
                    
                    let error = $root.may.polygon_t.Points.verify(message.pts[i]);
                    if (error)
                        return "pts." + error;
                }
            }
            if (message.height != null && message.hasOwnProperty("height"))
                if (typeof message.height !== "number")
                    return "height: number expected";
            return null;
        };

        /**
         * Creates a polygon_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.polygon_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.polygon_t} polygon_t
         */
        polygon_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.polygon_t)
                
                return object;
            
            let message = new $root.may.polygon_t();
            if (object.pts) {
                if (!Array.isArray(object.pts))
                    throw TypeError(".may.polygon_t.pts: array expected");
                message.pts = [];
                for (let i = 0; i < object.pts.length; ++i) {
                    if (typeof object.pts[i] !== "object")
                        throw TypeError(".may.polygon_t.pts: object expected");
                    
                    message.pts[i] = $root.may.polygon_t.Points.fromObject(object.pts[i]);
                }
            }
            if (object.height != null)
                message.height = Number(object.height);
            return message;
        };

        /**
         * Creates a plain object from a polygon_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.polygon_t
         * @static
         * @param {may.polygon_t} message polygon_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        polygon_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.pts = [];
            if (options.defaults)
                object.height = 0;
            
            if (message.pts && message.pts.length) {
                
                object.pts = [];
                
                for (let j = 0; j < message.pts.length; ++j)
                    
                    object.pts[j] = $root.may.polygon_t.Points.toObject(message.pts[j], options);
            }
            
            if (message.height != null && message.hasOwnProperty("height"))
                
                object.height = options.json && !isFinite(message.height) ? String(message.height) : message.height;
            return object;
        };

        /**
         * Converts this polygon_t to JSON.
         * @function toJSON
         * @memberof may.polygon_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        polygon_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        polygon_t.Points = (function() {

            /**
             * Properties of a Points.
             * @memberof may.polygon_t
             * @interface IPoints
             * @property {Array.<number>|null} [points] Points points
             */

            /**
             * Constructs a new Points.
             * @memberof may.polygon_t
             * @classdesc Represents a Points.
             * @implements IPoints
             * @constructor
             * @param {may.polygon_t.IPoints=} [properties] Properties to set
             */
            
            function Points(properties) {
                
                this.points = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Points points.
             * @member {Array.<number>} points
             * @memberof may.polygon_t.Points
             * @instance
             */
            Points.prototype.points = $util.emptyArray;

            /**
             * Creates a new Points instance using the specified properties.
             * @function create
             * @memberof may.polygon_t.Points
             * @static
             * @param {may.polygon_t.IPoints=} [properties] Properties to set
             * @returns {may.polygon_t.Points} Points instance
             */
            Points.create = function create(properties) {
                return new Points(properties);
            };

            /**
             * Encodes the specified Points message. Does not implicitly {@link may.polygon_t.Points.verify|verify} messages.
             * @function encode
             * @memberof may.polygon_t.Points
             * @static
             * @param {may.polygon_t.IPoints} message Points message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Points.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.points != null && message.points.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (let i = 0; i < message.points.length; ++i)
                        writer.double(message.points[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified Points message, length delimited. Does not implicitly {@link may.polygon_t.Points.verify|verify} messages.
             * @function encodeDelimited
             * @memberof may.polygon_t.Points
             * @static
             * @param {may.polygon_t.IPoints} message Points message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Points.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Points message from the specified reader or buffer.
             * @function decode
             * @memberof may.polygon_t.Points
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {may.polygon_t.Points} Points
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Points.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.polygon_t.Points();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.points && message.points.length))
                            message.points = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.points.push(reader.double());
                        } else
                            message.points.push(reader.double());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Points message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof may.polygon_t.Points
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {may.polygon_t.Points} Points
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Points.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Points message.
             * @function verify
             * @memberof may.polygon_t.Points
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Points.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.points != null && message.hasOwnProperty("points")) {
                    if (!Array.isArray(message.points))
                        return "points: array expected";
                    for (let i = 0; i < message.points.length; ++i)
                        if (typeof message.points[i] !== "number")
                            return "points: number[] expected";
                }
                return null;
            };

            /**
             * Creates a Points message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof may.polygon_t.Points
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {may.polygon_t.Points} Points
             */
            Points.fromObject = function fromObject(object) {
                
                if (object instanceof $root.may.polygon_t.Points)
                    return object;
                
                let message = new $root.may.polygon_t.Points();
                if (object.points) {
                    if (!Array.isArray(object.points))
                        throw TypeError(".may.polygon_t.Points.points: array expected");
                    message.points = [];
                    for (let i = 0; i < object.points.length; ++i)
                        message.points[i] = Number(object.points[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Points message. Also converts values to other types if specified.
             * @function toObject
             * @memberof may.polygon_t.Points
             * @static
             * @param {may.polygon_t.Points} message Points
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Points.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    
                    object.points = [];
                if (message.points && message.points.length) {
                    
                    object.points = [];
                    for (let j = 0; j < message.points.length; ++j)
                        object.points[j] = options.json && !isFinite(message.points[j]) ? String(message.points[j]) : message.points[j];
                }
                return object;
            };

            /**
             * Converts this Points to JSON.
             * @function toJSON
             * @memberof may.polygon_t.Points
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Points.prototype.toJSON = function toJSON() {
                
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Points;
        })();

        return polygon_t;
    })();

    may.pose_t = (function() {

        /**
         * Properties of a pose_t.
         * @memberof may
         * @interface Ipose_t
         * @property {number|Long|null} [utime] pose_t utime
         * @property {Array.<number>|null} [pos] pose_t pos
         * @property {Array.<number>|null} [quat] pose_t quat
         * @property {Array.<number>|null} [vel] pose_t vel
         * @property {Array.<number>|null} [avel] pose_t avel
         * @property {Array.<number>|null} [acc] pose_t acc
         */

        /**
         * Constructs a new pose_t.
         * @memberof may
         * @classdesc Represents a pose_t.
         * @implements Ipose_t
         * @constructor
         * @param {may.Ipose_t=} [properties] Properties to set
         */
        
        function pose_t(properties) {
            
            this.pos = [];
            
            this.quat = [];
            
            this.vel = [];
            
            this.avel = [];
            
            this.acc = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * pose_t utime.
         * @member {number|Long} utime
         * @memberof may.pose_t
         * @instance
         */
        
        pose_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * pose_t pos.
         * @member {Array.<number>} pos
         * @memberof may.pose_t
         * @instance
         */
        pose_t.prototype.pos = $util.emptyArray;

        /**
         * pose_t quat.
         * @member {Array.<number>} quat
         * @memberof may.pose_t
         * @instance
         */
        pose_t.prototype.quat = $util.emptyArray;

        /**
         * pose_t vel.
         * @member {Array.<number>} vel
         * @memberof may.pose_t
         * @instance
         */
        pose_t.prototype.vel = $util.emptyArray;

        /**
         * pose_t avel.
         * @member {Array.<number>} avel
         * @memberof may.pose_t
         * @instance
         */
        pose_t.prototype.avel = $util.emptyArray;

        /**
         * pose_t acc.
         * @member {Array.<number>} acc
         * @memberof may.pose_t
         * @instance
         */
        pose_t.prototype.acc = $util.emptyArray;

        /**
         * Creates a new pose_t instance using the specified properties.
         * @function create
         * @memberof may.pose_t
         * @static
         * @param {may.Ipose_t=} [properties] Properties to set
         * @returns {may.pose_t} pose_t instance
         */
        pose_t.create = function create(properties) {
            
            return new pose_t(properties);
        };

        /**
         * Encodes the specified pose_t message. Does not implicitly {@link may.pose_t.verify|verify} messages.
         * @function encode
         * @memberof may.pose_t
         * @static
         * @param {may.Ipose_t} message pose_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        pose_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.pos != null && message.pos.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.pos.length; ++i)
                    writer.double(message.pos[i]);
                writer.ldelim();
            }
            if (message.quat != null && message.quat.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.quat.length; ++i)
                    writer.double(message.quat[i]);
                writer.ldelim();
            }
            if (message.vel != null && message.vel.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.vel.length; ++i)
                    writer.double(message.vel[i]);
                writer.ldelim();
            }
            if (message.avel != null && message.avel.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.avel.length; ++i)
                    writer.double(message.avel[i]);
                writer.ldelim();
            }
            if (message.acc != null && message.acc.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.acc.length; ++i)
                    writer.double(message.acc[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified pose_t message, length delimited. Does not implicitly {@link may.pose_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.pose_t
         * @static
         * @param {may.Ipose_t} message pose_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        pose_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a pose_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.pose_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.pose_t} pose_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        pose_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.pose_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    if (!(message.pos && message.pos.length))
                        message.pos = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.pos.push(reader.double());
                    } else
                        message.pos.push(reader.double());
                    break;
                case 3:
                    if (!(message.quat && message.quat.length))
                        message.quat = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.quat.push(reader.double());
                    } else
                        message.quat.push(reader.double());
                    break;
                case 4:
                    if (!(message.vel && message.vel.length))
                        message.vel = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.vel.push(reader.double());
                    } else
                        message.vel.push(reader.double());
                    break;
                case 5:
                    if (!(message.avel && message.avel.length))
                        message.avel = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.avel.push(reader.double());
                    } else
                        message.avel.push(reader.double());
                    break;
                case 6:
                    if (!(message.acc && message.acc.length))
                        message.acc = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.acc.push(reader.double());
                    } else
                        message.acc.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a pose_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.pose_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.pose_t} pose_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        pose_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a pose_t message.
         * @function verify
         * @memberof may.pose_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        pose_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.pos != null && message.hasOwnProperty("pos")) {
                if (!Array.isArray(message.pos))
                    return "pos: array expected";
                for (let i = 0; i < message.pos.length; ++i)
                    if (typeof message.pos[i] !== "number")
                        return "pos: number[] expected";
            }
            if (message.quat != null && message.hasOwnProperty("quat")) {
                if (!Array.isArray(message.quat))
                    return "quat: array expected";
                for (let i = 0; i < message.quat.length; ++i)
                    if (typeof message.quat[i] !== "number")
                        return "quat: number[] expected";
            }
            if (message.vel != null && message.hasOwnProperty("vel")) {
                if (!Array.isArray(message.vel))
                    return "vel: array expected";
                for (let i = 0; i < message.vel.length; ++i)
                    if (typeof message.vel[i] !== "number")
                        return "vel: number[] expected";
            }
            if (message.avel != null && message.hasOwnProperty("avel")) {
                if (!Array.isArray(message.avel))
                    return "avel: array expected";
                for (let i = 0; i < message.avel.length; ++i)
                    if (typeof message.avel[i] !== "number")
                        return "avel: number[] expected";
            }
            if (message.acc != null && message.hasOwnProperty("acc")) {
                if (!Array.isArray(message.acc))
                    return "acc: array expected";
                for (let i = 0; i < message.acc.length; ++i)
                    if (typeof message.acc[i] !== "number")
                        return "acc: number[] expected";
            }
            return null;
        };

        /**
         * Creates a pose_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.pose_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.pose_t} pose_t
         */
        pose_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.pose_t)
                
                return object;
            
            let message = new $root.may.pose_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.pos) {
                if (!Array.isArray(object.pos))
                    throw TypeError(".may.pose_t.pos: array expected");
                message.pos = [];
                for (let i = 0; i < object.pos.length; ++i)
                    message.pos[i] = Number(object.pos[i]);
            }
            if (object.quat) {
                if (!Array.isArray(object.quat))
                    throw TypeError(".may.pose_t.quat: array expected");
                message.quat = [];
                for (let i = 0; i < object.quat.length; ++i)
                    message.quat[i] = Number(object.quat[i]);
            }
            if (object.vel) {
                if (!Array.isArray(object.vel))
                    throw TypeError(".may.pose_t.vel: array expected");
                message.vel = [];
                for (let i = 0; i < object.vel.length; ++i)
                    message.vel[i] = Number(object.vel[i]);
            }
            if (object.avel) {
                if (!Array.isArray(object.avel))
                    throw TypeError(".may.pose_t.avel: array expected");
                message.avel = [];
                for (let i = 0; i < object.avel.length; ++i)
                    message.avel[i] = Number(object.avel[i]);
            }
            if (object.acc) {
                if (!Array.isArray(object.acc))
                    throw TypeError(".may.pose_t.acc: array expected");
                message.acc = [];
                for (let i = 0; i < object.acc.length; ++i)
                    message.acc[i] = Number(object.acc[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a pose_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.pose_t
         * @static
         * @param {may.pose_t} message pose_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        pose_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                
                object.pos = [];
                
                object.quat = [];
                
                object.vel = [];
                
                object.avel = [];
                
                object.acc = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.pos && message.pos.length) {
                
                object.pos = [];
                
                for (let j = 0; j < message.pos.length; ++j)
                    
                    object.pos[j] = options.json && !isFinite(message.pos[j]) ? String(message.pos[j]) : message.pos[j];
            }
            
            if (message.quat && message.quat.length) {
                
                object.quat = [];
                
                for (let j = 0; j < message.quat.length; ++j)
                    
                    object.quat[j] = options.json && !isFinite(message.quat[j]) ? String(message.quat[j]) : message.quat[j];
            }
            
            if (message.vel && message.vel.length) {
                
                object.vel = [];
                
                for (let j = 0; j < message.vel.length; ++j)
                    
                    object.vel[j] = options.json && !isFinite(message.vel[j]) ? String(message.vel[j]) : message.vel[j];
            }
            
            if (message.avel && message.avel.length) {
                
                object.avel = [];
                
                for (let j = 0; j < message.avel.length; ++j)
                    
                    object.avel[j] = options.json && !isFinite(message.avel[j]) ? String(message.avel[j]) : message.avel[j];
            }
            
            if (message.acc && message.acc.length) {
                
                object.acc = [];
                
                for (let j = 0; j < message.acc.length; ++j)
                    
                    object.acc[j] = options.json && !isFinite(message.acc[j]) ? String(message.acc[j]) : message.acc[j];
            }
            return object;
        };

        /**
         * Converts this pose_t to JSON.
         * @function toJSON
         * @memberof may.pose_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        pose_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return pose_t;
    })();

    may.quic_wrapper = (function() {

        /**
         * Properties of a quic_wrapper.
         * @memberof may
         * @interface Iquic_wrapper
         * @property {number|Long|null} [utime] quic_wrapper utime
         * @property {Uint8Array|null} [data] quic_wrapper data
         * @property {string|null} [mqttTopic] quic_wrapper mqttTopic
         * @property {may.quic_wrapper.Compression|null} [compression] quic_wrapper compression
         */

        /**
         * Constructs a new quic_wrapper.
         * @memberof may
         * @classdesc Represents a quic_wrapper.
         * @implements Iquic_wrapper
         * @constructor
         * @param {may.Iquic_wrapper=} [properties] Properties to set
         */
        
        function quic_wrapper(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * quic_wrapper utime.
         * @member {number|Long} utime
         * @memberof may.quic_wrapper
         * @instance
         */
        
        quic_wrapper.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * quic_wrapper data.
         * @member {Uint8Array} data
         * @memberof may.quic_wrapper
         * @instance
         */
        quic_wrapper.prototype.data = $util.newBuffer([]);

        /**
         * quic_wrapper mqttTopic.
         * @member {string} mqttTopic
         * @memberof may.quic_wrapper
         * @instance
         */
        quic_wrapper.prototype.mqttTopic = "";

        /**
         * quic_wrapper compression.
         * @member {may.quic_wrapper.Compression} compression
         * @memberof may.quic_wrapper
         * @instance
         */
        quic_wrapper.prototype.compression = 0;

        /**
         * Creates a new quic_wrapper instance using the specified properties.
         * @function create
         * @memberof may.quic_wrapper
         * @static
         * @param {may.Iquic_wrapper=} [properties] Properties to set
         * @returns {may.quic_wrapper} quic_wrapper instance
         */
        quic_wrapper.create = function create(properties) {
            
            return new quic_wrapper(properties);
        };

        /**
         * Encodes the specified quic_wrapper message. Does not implicitly {@link may.quic_wrapper.verify|verify} messages.
         * @function encode
         * @memberof may.quic_wrapper
         * @static
         * @param {may.Iquic_wrapper} message quic_wrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        quic_wrapper.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.data != null && Object.hasOwnProperty.call(message, "data"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.data);
            if (message.mqttTopic != null && Object.hasOwnProperty.call(message, "mqttTopic"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.mqttTopic);
            if (message.compression != null && Object.hasOwnProperty.call(message, "compression"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.compression);
            return writer;
        };

        /**
         * Encodes the specified quic_wrapper message, length delimited. Does not implicitly {@link may.quic_wrapper.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.quic_wrapper
         * @static
         * @param {may.Iquic_wrapper} message quic_wrapper message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        quic_wrapper.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a quic_wrapper message from the specified reader or buffer.
         * @function decode
         * @memberof may.quic_wrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.quic_wrapper} quic_wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        quic_wrapper.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.quic_wrapper();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.data = reader.bytes();
                    break;
                case 3:
                    message.mqttTopic = reader.string();
                    break;
                case 4:
                    message.compression = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a quic_wrapper message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.quic_wrapper
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.quic_wrapper} quic_wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        quic_wrapper.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a quic_wrapper message.
         * @function verify
         * @memberof may.quic_wrapper
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        quic_wrapper.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.data != null && message.hasOwnProperty("data"))
                if (!(message.data && typeof message.data.length === "number" || $util.isString(message.data)))
                    return "data: buffer expected";
            if (message.mqttTopic != null && message.hasOwnProperty("mqttTopic"))
                if (!$util.isString(message.mqttTopic))
                    return "mqttTopic: string expected";
            if (message.compression != null && message.hasOwnProperty("compression"))
                switch (message.compression) {
                default:
                    return "compression: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a quic_wrapper message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.quic_wrapper
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.quic_wrapper} quic_wrapper
         */
        quic_wrapper.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.quic_wrapper)
                
                return object;
            
            let message = new $root.may.quic_wrapper();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.data != null)
                if (typeof object.data === "string")
                    $util.base64.decode(object.data, message.data = $util.newBuffer($util.base64.length(object.data)), 0);
                else if (object.data.length)
                    message.data = object.data;
            if (object.mqttTopic != null)
                message.mqttTopic = String(object.mqttTopic);
            switch (object.compression) {
            case "NONE":
            case 0:
                message.compression = 0;
                break;
            case "ZSTD":
            case 1:
                message.compression = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a quic_wrapper message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.quic_wrapper
         * @static
         * @param {may.quic_wrapper} message quic_wrapper
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        quic_wrapper.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    
                    object.data = "";
                else {
                    
                    object.data = [];
                    if (options.bytes !== Array)
                        object.data = $util.newBuffer(object.data);
                }
                object.mqttTopic = "";
                object.compression = options.enums === String ? "NONE" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.data != null && message.hasOwnProperty("data"))
                
                object.data = options.bytes === String ? $util.base64.encode(message.data, 0, message.data.length) : options.bytes === Array ? Array.prototype.slice.call(message.data) : message.data;
            
            if (message.mqttTopic != null && message.hasOwnProperty("mqttTopic"))
                
                object.mqttTopic = message.mqttTopic;
            
            if (message.compression != null && message.hasOwnProperty("compression"))
                
                object.compression = options.enums === String ? $root.may.quic_wrapper.Compression[message.compression] : message.compression;
            return object;
        };

        /**
         * Converts this quic_wrapper to JSON.
         * @function toJSON
         * @memberof may.quic_wrapper
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        quic_wrapper.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Compression enum.
         * @name may.quic_wrapper.Compression
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} ZSTD=1 ZSTD value
         */
        quic_wrapper.Compression = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "ZSTD"] = 1;
            return values;
        })();

        return quic_wrapper;
    })();

    may.resume_t = (function() {

        /**
         * Properties of a resume_t.
         * @memberof may
         * @interface Iresume_t
         * @property {number|Long|null} [utime] resume_t utime
         * @property {boolean|null} [resume] resume_t resume
         */

        /**
         * Constructs a new resume_t.
         * @memberof may
         * @classdesc Represents a resume_t.
         * @implements Iresume_t
         * @constructor
         * @param {may.Iresume_t=} [properties] Properties to set
         */
        
        function resume_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * resume_t utime.
         * @member {number|Long} utime
         * @memberof may.resume_t
         * @instance
         */
        
        resume_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * resume_t resume.
         * @member {boolean} resume
         * @memberof may.resume_t
         * @instance
         */
        resume_t.prototype.resume = false;

        /**
         * Creates a new resume_t instance using the specified properties.
         * @function create
         * @memberof may.resume_t
         * @static
         * @param {may.Iresume_t=} [properties] Properties to set
         * @returns {may.resume_t} resume_t instance
         */
        resume_t.create = function create(properties) {
            
            return new resume_t(properties);
        };

        /**
         * Encodes the specified resume_t message. Does not implicitly {@link may.resume_t.verify|verify} messages.
         * @function encode
         * @memberof may.resume_t
         * @static
         * @param {may.Iresume_t} message resume_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        resume_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.resume != null && Object.hasOwnProperty.call(message, "resume"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.resume);
            return writer;
        };

        /**
         * Encodes the specified resume_t message, length delimited. Does not implicitly {@link may.resume_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.resume_t
         * @static
         * @param {may.Iresume_t} message resume_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        resume_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a resume_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.resume_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.resume_t} resume_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        resume_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.resume_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.resume = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a resume_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.resume_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.resume_t} resume_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        resume_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a resume_t message.
         * @function verify
         * @memberof may.resume_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        resume_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.resume != null && message.hasOwnProperty("resume"))
                if (typeof message.resume !== "boolean")
                    return "resume: boolean expected";
            return null;
        };

        /**
         * Creates a resume_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.resume_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.resume_t} resume_t
         */
        resume_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.resume_t)
                
                return object;
            
            let message = new $root.may.resume_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.resume != null)
                message.resume = Boolean(object.resume);
            return message;
        };

        /**
         * Creates a plain object from a resume_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.resume_t
         * @static
         * @param {may.resume_t} message resume_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        resume_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.resume = false;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.resume != null && message.hasOwnProperty("resume"))
                
                object.resume = message.resume;
            return object;
        };

        /**
         * Converts this resume_t to JSON.
         * @function toJSON
         * @memberof may.resume_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        resume_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return resume_t;
    })();

    may.route_location_t = (function() {

        /**
         * Properties of a route_location_t.
         * @memberof may
         * @interface Iroute_location_t
         * @property {number|Long|null} [utime] route_location_t utime
         * @property {Array.<number|Long>|null} [layerId] route_location_t layerId
         * @property {Array.<number>|null} [lla] route_location_t lla
         */

        /**
         * Constructs a new route_location_t.
         * @memberof may
         * @classdesc A route location is the location of the vehicle in its current route network, along with
         * the corresponding estimate of the [lat,lon,altitude] (lla) for the current navigation edge.
         * 
         * The lla is computed using the coordinates of the navigation edge, which uses the full
         * localization pipeline, so it will be a much more stable estimate than any sort of GPS
         * signal.
         * @implements Iroute_location_t
         * @constructor
         * @param {may.Iroute_location_t=} [properties] Properties to set
         */
        
        function route_location_t(properties) {
            
            this.layerId = [];
            
            this.lla = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * route_location_t utime.
         * @member {number|Long} utime
         * @memberof may.route_location_t
         * @instance
         */
        
        route_location_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * route_location_t layerId.
         * @member {Array.<number|Long>} layerId
         * @memberof may.route_location_t
         * @instance
         */
        route_location_t.prototype.layerId = $util.emptyArray;

        /**
         * route_location_t lla.
         * @member {Array.<number>} lla
         * @memberof may.route_location_t
         * @instance
         */
        route_location_t.prototype.lla = $util.emptyArray;

        /**
         * Creates a new route_location_t instance using the specified properties.
         * @function create
         * @memberof may.route_location_t
         * @static
         * @param {may.Iroute_location_t=} [properties] Properties to set
         * @returns {may.route_location_t} route_location_t instance
         */
        route_location_t.create = function create(properties) {
            
            return new route_location_t(properties);
        };

        /**
         * Encodes the specified route_location_t message. Does not implicitly {@link may.route_location_t.verify|verify} messages.
         * @function encode
         * @memberof may.route_location_t
         * @static
         * @param {may.Iroute_location_t} message route_location_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        route_location_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.layerId != null && message.layerId.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (let i = 0; i < message.layerId.length; ++i)
                    writer.int64(message.layerId[i]);
                writer.ldelim();
            }
            if (message.lla != null && message.lla.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.lla.length; ++i)
                    writer.double(message.lla[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified route_location_t message, length delimited. Does not implicitly {@link may.route_location_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.route_location_t
         * @static
         * @param {may.Iroute_location_t} message route_location_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        route_location_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a route_location_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.route_location_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.route_location_t} route_location_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        route_location_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.route_location_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    if (!(message.layerId && message.layerId.length))
                        message.layerId = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.layerId.push(reader.int64());
                    } else
                        message.layerId.push(reader.int64());
                    break;
                case 3:
                    if (!(message.lla && message.lla.length))
                        message.lla = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.lla.push(reader.double());
                    } else
                        message.lla.push(reader.double());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a route_location_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.route_location_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.route_location_t} route_location_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        route_location_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a route_location_t message.
         * @function verify
         * @memberof may.route_location_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        route_location_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.layerId != null && message.hasOwnProperty("layerId")) {
                if (!Array.isArray(message.layerId))
                    return "layerId: array expected";
                for (let i = 0; i < message.layerId.length; ++i)
                    if (!$util.isInteger(message.layerId[i]) && !(message.layerId[i] && $util.isInteger(message.layerId[i].low) && $util.isInteger(message.layerId[i].high)))
                        return "layerId: integer|Long[] expected";
            }
            if (message.lla != null && message.hasOwnProperty("lla")) {
                if (!Array.isArray(message.lla))
                    return "lla: array expected";
                for (let i = 0; i < message.lla.length; ++i)
                    if (typeof message.lla[i] !== "number")
                        return "lla: number[] expected";
            }
            return null;
        };

        /**
         * Creates a route_location_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.route_location_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.route_location_t} route_location_t
         */
        route_location_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.route_location_t)
                
                return object;
            
            let message = new $root.may.route_location_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.layerId) {
                if (!Array.isArray(object.layerId))
                    throw TypeError(".may.route_location_t.layerId: array expected");
                message.layerId = [];
                for (let i = 0; i < object.layerId.length; ++i)
                    if ($util.Long)
                        
                        (message.layerId[i] = $util.Long.fromValue(object.layerId[i])).unsigned = false;
                    else if (typeof object.layerId[i] === "string")
                        message.layerId[i] = parseInt(object.layerId[i], 10);
                    else if (typeof object.layerId[i] === "number")
                        message.layerId[i] = object.layerId[i];
                    else if (typeof object.layerId[i] === "object")
                        message.layerId[i] = new $util.LongBits(object.layerId[i].low >>> 0, object.layerId[i].high >>> 0).toNumber();
            }
            if (object.lla) {
                if (!Array.isArray(object.lla))
                    throw TypeError(".may.route_location_t.lla: array expected");
                message.lla = [];
                for (let i = 0; i < object.lla.length; ++i)
                    message.lla[i] = Number(object.lla[i]);
            }
            return message;
        };

        /**
         * Creates a plain object from a route_location_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.route_location_t
         * @static
         * @param {may.route_location_t} message route_location_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        route_location_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                
                object.layerId = [];
                
                object.lla = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.layerId && message.layerId.length) {
                
                object.layerId = [];
                
                for (let j = 0; j < message.layerId.length; ++j)
                    
                    if (typeof message.layerId[j] === "number")
                        
                        object.layerId[j] = options.longs === String ? String(message.layerId[j]) : message.layerId[j];
                    else
                        
                        object.layerId[j] = options.longs === String ? $util.Long.prototype.toString.call(message.layerId[j]) : options.longs === Number ? new $util.LongBits(message.layerId[j].low >>> 0, message.layerId[j].high >>> 0).toNumber() : message.layerId[j];
            }
            
            if (message.lla && message.lla.length) {
                
                object.lla = [];
                
                for (let j = 0; j < message.lla.length; ++j)
                    
                    object.lla[j] = options.json && !isFinite(message.lla[j]) ? String(message.lla[j]) : message.lla[j];
            }
            return object;
        };

        /**
         * Converts this route_location_t to JSON.
         * @function toJSON
         * @memberof may.route_location_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        route_location_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return route_location_t;
    })();

    may.runlevel_t = (function() {

        /**
         * Properties of a runlevel_t.
         * @memberof may
         * @interface Irunlevel_t
         * @property {number|Long|null} [utime] runlevel_t utime
         * @property {may.runlevel_t.RunLevel|null} [runlevel] runlevel_t runlevel
         * @property {may.runlevel_t.RunLevel|null} [healthRunlevel] runlevel_t healthRunlevel
         * @property {may.runlevel_t.RunLevel|null} [requestedRunlevel] runlevel_t requestedRunlevel
         */

        /**
         * Constructs a new runlevel_t.
         * @memberof may
         * @classdesc Represents a runlevel_t.
         * @implements Irunlevel_t
         * @constructor
         * @param {may.Irunlevel_t=} [properties] Properties to set
         */
        
        function runlevel_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * runlevel_t utime.
         * @member {number|Long} utime
         * @memberof may.runlevel_t
         * @instance
         */
        
        runlevel_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * runlevel_t runlevel.
         * @member {may.runlevel_t.RunLevel} runlevel
         * @memberof may.runlevel_t
         * @instance
         */
        runlevel_t.prototype.runlevel = 0;

        /**
         * runlevel_t healthRunlevel.
         * @member {may.runlevel_t.RunLevel} healthRunlevel
         * @memberof may.runlevel_t
         * @instance
         */
        runlevel_t.prototype.healthRunlevel = 0;

        /**
         * runlevel_t requestedRunlevel.
         * @member {may.runlevel_t.RunLevel} requestedRunlevel
         * @memberof may.runlevel_t
         * @instance
         */
        runlevel_t.prototype.requestedRunlevel = 0;

        /**
         * Creates a new runlevel_t instance using the specified properties.
         * @function create
         * @memberof may.runlevel_t
         * @static
         * @param {may.Irunlevel_t=} [properties] Properties to set
         * @returns {may.runlevel_t} runlevel_t instance
         */
        runlevel_t.create = function create(properties) {
            
            return new runlevel_t(properties);
        };

        /**
         * Encodes the specified runlevel_t message. Does not implicitly {@link may.runlevel_t.verify|verify} messages.
         * @function encode
         * @memberof may.runlevel_t
         * @static
         * @param {may.Irunlevel_t} message runlevel_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        runlevel_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.runlevel != null && Object.hasOwnProperty.call(message, "runlevel"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.runlevel);
            if (message.healthRunlevel != null && Object.hasOwnProperty.call(message, "healthRunlevel"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.healthRunlevel);
            if (message.requestedRunlevel != null && Object.hasOwnProperty.call(message, "requestedRunlevel"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.requestedRunlevel);
            return writer;
        };

        /**
         * Encodes the specified runlevel_t message, length delimited. Does not implicitly {@link may.runlevel_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.runlevel_t
         * @static
         * @param {may.Irunlevel_t} message runlevel_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        runlevel_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a runlevel_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.runlevel_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.runlevel_t} runlevel_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        runlevel_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.runlevel_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.runlevel = reader.int32();
                    break;
                case 3:
                    message.healthRunlevel = reader.int32();
                    break;
                case 4:
                    message.requestedRunlevel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a runlevel_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.runlevel_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.runlevel_t} runlevel_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        runlevel_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a runlevel_t message.
         * @function verify
         * @memberof may.runlevel_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        runlevel_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.runlevel != null && message.hasOwnProperty("runlevel"))
                switch (message.runlevel) {
                default:
                    return "runlevel: enum value expected";
                case 0:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.healthRunlevel != null && message.hasOwnProperty("healthRunlevel"))
                switch (message.healthRunlevel) {
                default:
                    return "healthRunlevel: enum value expected";
                case 0:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            if (message.requestedRunlevel != null && message.hasOwnProperty("requestedRunlevel"))
                switch (message.requestedRunlevel) {
                default:
                    return "requestedRunlevel: enum value expected";
                case 0:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                    break;
                }
            return null;
        };

        /**
         * Creates a runlevel_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.runlevel_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.runlevel_t} runlevel_t
         */
        runlevel_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.runlevel_t)
                
                return object;
            
            let message = new $root.may.runlevel_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            switch (object.runlevel) {
            case "IGNORE":
            case 0:
                message.runlevel = 0;
                break;
            case "SERVICE":
            case 2:
                message.runlevel = 2;
                break;
            case "MANUAL":
            case 3:
                message.runlevel = 3;
                break;
            case "BLIND_STOP":
            case 4:
                message.runlevel = 4;
                break;
            case "CONTROLLED_STOP":
            case 5:
                message.runlevel = 5;
                break;
            case "CONSERVATIVE":
            case 6:
                message.runlevel = 6;
                break;
            case "NOMINAL":
            case 7:
                message.runlevel = 7;
                break;
            }
            switch (object.healthRunlevel) {
            case "IGNORE":
            case 0:
                message.healthRunlevel = 0;
                break;
            case "SERVICE":
            case 2:
                message.healthRunlevel = 2;
                break;
            case "MANUAL":
            case 3:
                message.healthRunlevel = 3;
                break;
            case "BLIND_STOP":
            case 4:
                message.healthRunlevel = 4;
                break;
            case "CONTROLLED_STOP":
            case 5:
                message.healthRunlevel = 5;
                break;
            case "CONSERVATIVE":
            case 6:
                message.healthRunlevel = 6;
                break;
            case "NOMINAL":
            case 7:
                message.healthRunlevel = 7;
                break;
            }
            switch (object.requestedRunlevel) {
            case "IGNORE":
            case 0:
                message.requestedRunlevel = 0;
                break;
            case "SERVICE":
            case 2:
                message.requestedRunlevel = 2;
                break;
            case "MANUAL":
            case 3:
                message.requestedRunlevel = 3;
                break;
            case "BLIND_STOP":
            case 4:
                message.requestedRunlevel = 4;
                break;
            case "CONTROLLED_STOP":
            case 5:
                message.requestedRunlevel = 5;
                break;
            case "CONSERVATIVE":
            case 6:
                message.requestedRunlevel = 6;
                break;
            case "NOMINAL":
            case 7:
                message.requestedRunlevel = 7;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a runlevel_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.runlevel_t
         * @static
         * @param {may.runlevel_t} message runlevel_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        runlevel_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.runlevel = options.enums === String ? "IGNORE" : 0;
                object.healthRunlevel = options.enums === String ? "IGNORE" : 0;
                object.requestedRunlevel = options.enums === String ? "IGNORE" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.runlevel != null && message.hasOwnProperty("runlevel"))
                
                object.runlevel = options.enums === String ? $root.may.runlevel_t.RunLevel[message.runlevel] : message.runlevel;
            
            if (message.healthRunlevel != null && message.hasOwnProperty("healthRunlevel"))
                
                object.healthRunlevel = options.enums === String ? $root.may.runlevel_t.RunLevel[message.healthRunlevel] : message.healthRunlevel;
            
            if (message.requestedRunlevel != null && message.hasOwnProperty("requestedRunlevel"))
                
                object.requestedRunlevel = options.enums === String ? $root.may.runlevel_t.RunLevel[message.requestedRunlevel] : message.requestedRunlevel;
            return object;
        };

        /**
         * Converts this runlevel_t to JSON.
         * @function toJSON
         * @memberof may.runlevel_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        runlevel_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * RunLevel enum.
         * @name may.runlevel_t.RunLevel
         * @enum {number}
         * @property {number} IGNORE=0 IGNORE value
         * @property {number} SERVICE=2 SERVICE value
         * @property {number} MANUAL=3 MANUAL value
         * @property {number} BLIND_STOP=4 BLIND_STOP value
         * @property {number} CONTROLLED_STOP=5 CONTROLLED_STOP value
         * @property {number} CONSERVATIVE=6 CONSERVATIVE value
         * @property {number} NOMINAL=7 NOMINAL value
         */
        runlevel_t.RunLevel = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IGNORE"] = 0;
            values[valuesById[2] = "SERVICE"] = 2;
            values[valuesById[3] = "MANUAL"] = 3;
            values[valuesById[4] = "BLIND_STOP"] = 4;
            values[valuesById[5] = "CONTROLLED_STOP"] = 5;
            values[valuesById[6] = "CONSERVATIVE"] = 6;
            values[valuesById[7] = "NOMINAL"] = 7;
            return values;
        })();

        return runlevel_t;
    })();

    may.stop_t = (function() {

        /**
         * Properties of a stop_t.
         * @memberof may
         * @interface Istop_t
         * @property {number|Long|null} [utime] stop_t utime
         * @property {boolean|null} [stop] stop_t stop
         */

        /**
         * Constructs a new stop_t.
         * @memberof may
         * @classdesc Represents a stop_t.
         * @implements Istop_t
         * @constructor
         * @param {may.Istop_t=} [properties] Properties to set
         */
        
        function stop_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * stop_t utime.
         * @member {number|Long} utime
         * @memberof may.stop_t
         * @instance
         */
        
        stop_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * stop_t stop.
         * @member {boolean} stop
         * @memberof may.stop_t
         * @instance
         */
        stop_t.prototype.stop = false;

        /**
         * Creates a new stop_t instance using the specified properties.
         * @function create
         * @memberof may.stop_t
         * @static
         * @param {may.Istop_t=} [properties] Properties to set
         * @returns {may.stop_t} stop_t instance
         */
        stop_t.create = function create(properties) {
            
            return new stop_t(properties);
        };

        /**
         * Encodes the specified stop_t message. Does not implicitly {@link may.stop_t.verify|verify} messages.
         * @function encode
         * @memberof may.stop_t
         * @static
         * @param {may.Istop_t} message stop_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        stop_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.stop != null && Object.hasOwnProperty.call(message, "stop"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.stop);
            return writer;
        };

        /**
         * Encodes the specified stop_t message, length delimited. Does not implicitly {@link may.stop_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.stop_t
         * @static
         * @param {may.Istop_t} message stop_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        stop_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a stop_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.stop_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.stop_t} stop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        stop_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.stop_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.stop = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a stop_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.stop_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.stop_t} stop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        stop_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a stop_t message.
         * @function verify
         * @memberof may.stop_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        stop_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.stop != null && message.hasOwnProperty("stop"))
                if (typeof message.stop !== "boolean")
                    return "stop: boolean expected";
            return null;
        };

        /**
         * Creates a stop_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.stop_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.stop_t} stop_t
         */
        stop_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.stop_t)
                
                return object;
            
            let message = new $root.may.stop_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.stop != null)
                message.stop = Boolean(object.stop);
            return message;
        };

        /**
         * Creates a plain object from a stop_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.stop_t
         * @static
         * @param {may.stop_t} message stop_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        stop_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.stop = false;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.stop != null && message.hasOwnProperty("stop"))
                
                object.stop = message.stop;
            return object;
        };

        /**
         * Converts this stop_t to JSON.
         * @function toJSON
         * @memberof may.stop_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        stop_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return stop_t;
    })();

    may.tele_op_camera_stream_params_list_prim_t = (function() {

        /**
         * Properties of a tele_op_camera_stream_params_list_prim_t.
         * @memberof may
         * @interface Itele_op_camera_stream_params_list_prim_t
         * @property {number|Long|null} [utime] tele_op_camera_stream_params_list_prim_t utime
         * @property {Array.<string>|null} [paramStreamNames] tele_op_camera_stream_params_list_prim_t paramStreamNames
         * @property {Array.<number>|null} [imgHs] tele_op_camera_stream_params_list_prim_t imgHs
         * @property {Array.<number>|null} [imgWs] tele_op_camera_stream_params_list_prim_t imgWs
         * @property {Array.<number>|null} [compressionQualities] tele_op_camera_stream_params_list_prim_t compressionQualities
         * @property {Array.<number>|null} [frameRates] tele_op_camera_stream_params_list_prim_t frameRates
         * @property {Array.<number>|null} [active] tele_op_camera_stream_params_list_prim_t active
         */

        /**
         * Constructs a new tele_op_camera_stream_params_list_prim_t.
         * @memberof may
         * @classdesc Represents a tele_op_camera_stream_params_list_prim_t.
         * @implements Itele_op_camera_stream_params_list_prim_t
         * @constructor
         * @param {may.Itele_op_camera_stream_params_list_prim_t=} [properties] Properties to set
         */
        
        function tele_op_camera_stream_params_list_prim_t(properties) {
            
            this.paramStreamNames = [];
            
            this.imgHs = [];
            
            this.imgWs = [];
            
            this.compressionQualities = [];
            
            this.frameRates = [];
            
            this.active = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_camera_stream_params_list_prim_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         */
        
        tele_op_camera_stream_params_list_prim_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_camera_stream_params_list_prim_t paramStreamNames.
         * @member {Array.<string>} paramStreamNames
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         */
        tele_op_camera_stream_params_list_prim_t.prototype.paramStreamNames = $util.emptyArray;

        /**
         * tele_op_camera_stream_params_list_prim_t imgHs.
         * @member {Array.<number>} imgHs
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         */
        tele_op_camera_stream_params_list_prim_t.prototype.imgHs = $util.emptyArray;

        /**
         * tele_op_camera_stream_params_list_prim_t imgWs.
         * @member {Array.<number>} imgWs
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         */
        tele_op_camera_stream_params_list_prim_t.prototype.imgWs = $util.emptyArray;

        /**
         * tele_op_camera_stream_params_list_prim_t compressionQualities.
         * @member {Array.<number>} compressionQualities
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         */
        tele_op_camera_stream_params_list_prim_t.prototype.compressionQualities = $util.emptyArray;

        /**
         * tele_op_camera_stream_params_list_prim_t frameRates.
         * @member {Array.<number>} frameRates
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         */
        tele_op_camera_stream_params_list_prim_t.prototype.frameRates = $util.emptyArray;

        /**
         * tele_op_camera_stream_params_list_prim_t active.
         * @member {Array.<number>} active
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         */
        tele_op_camera_stream_params_list_prim_t.prototype.active = $util.emptyArray;

        /**
         * Creates a new tele_op_camera_stream_params_list_prim_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {may.Itele_op_camera_stream_params_list_prim_t=} [properties] Properties to set
         * @returns {may.tele_op_camera_stream_params_list_prim_t} tele_op_camera_stream_params_list_prim_t instance
         */
        tele_op_camera_stream_params_list_prim_t.create = function create(properties) {
            
            return new tele_op_camera_stream_params_list_prim_t(properties);
        };

        /**
         * Encodes the specified tele_op_camera_stream_params_list_prim_t message. Does not implicitly {@link may.tele_op_camera_stream_params_list_prim_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {may.Itele_op_camera_stream_params_list_prim_t} message tele_op_camera_stream_params_list_prim_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_camera_stream_params_list_prim_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.paramStreamNames != null && message.paramStreamNames.length)
                for (let i = 0; i < message.paramStreamNames.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).string(message.paramStreamNames[i]);
            if (message.imgHs != null && message.imgHs.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.imgHs.length; ++i)
                    writer.int32(message.imgHs[i]);
                writer.ldelim();
            }
            if (message.imgWs != null && message.imgWs.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (let i = 0; i < message.imgWs.length; ++i)
                    writer.int32(message.imgWs[i]);
                writer.ldelim();
            }
            if (message.compressionQualities != null && message.compressionQualities.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.compressionQualities.length; ++i)
                    writer.int32(message.compressionQualities[i]);
                writer.ldelim();
            }
            if (message.frameRates != null && message.frameRates.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (let i = 0; i < message.frameRates.length; ++i)
                    writer.float(message.frameRates[i]);
                writer.ldelim();
            }
            if (message.active != null && message.active.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (let i = 0; i < message.active.length; ++i)
                    writer.uint32(message.active[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Encodes the specified tele_op_camera_stream_params_list_prim_t message, length delimited. Does not implicitly {@link may.tele_op_camera_stream_params_list_prim_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {may.Itele_op_camera_stream_params_list_prim_t} message tele_op_camera_stream_params_list_prim_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_camera_stream_params_list_prim_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_camera_stream_params_list_prim_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_camera_stream_params_list_prim_t} tele_op_camera_stream_params_list_prim_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_camera_stream_params_list_prim_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_camera_stream_params_list_prim_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    if (!(message.paramStreamNames && message.paramStreamNames.length))
                        message.paramStreamNames = [];
                    message.paramStreamNames.push(reader.string());
                    break;
                case 3:
                    if (!(message.imgHs && message.imgHs.length))
                        message.imgHs = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.imgHs.push(reader.int32());
                    } else
                        message.imgHs.push(reader.int32());
                    break;
                case 4:
                    if (!(message.imgWs && message.imgWs.length))
                        message.imgWs = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.imgWs.push(reader.int32());
                    } else
                        message.imgWs.push(reader.int32());
                    break;
                case 5:
                    if (!(message.compressionQualities && message.compressionQualities.length))
                        message.compressionQualities = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.compressionQualities.push(reader.int32());
                    } else
                        message.compressionQualities.push(reader.int32());
                    break;
                case 6:
                    if (!(message.frameRates && message.frameRates.length))
                        message.frameRates = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.frameRates.push(reader.float());
                    } else
                        message.frameRates.push(reader.float());
                    break;
                case 7:
                    if (!(message.active && message.active.length))
                        message.active = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.active.push(reader.uint32());
                    } else
                        message.active.push(reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_camera_stream_params_list_prim_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_camera_stream_params_list_prim_t} tele_op_camera_stream_params_list_prim_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_camera_stream_params_list_prim_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_camera_stream_params_list_prim_t message.
         * @function verify
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_camera_stream_params_list_prim_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.paramStreamNames != null && message.hasOwnProperty("paramStreamNames")) {
                if (!Array.isArray(message.paramStreamNames))
                    return "paramStreamNames: array expected";
                for (let i = 0; i < message.paramStreamNames.length; ++i)
                    if (!$util.isString(message.paramStreamNames[i]))
                        return "paramStreamNames: string[] expected";
            }
            if (message.imgHs != null && message.hasOwnProperty("imgHs")) {
                if (!Array.isArray(message.imgHs))
                    return "imgHs: array expected";
                for (let i = 0; i < message.imgHs.length; ++i)
                    if (!$util.isInteger(message.imgHs[i]))
                        return "imgHs: integer[] expected";
            }
            if (message.imgWs != null && message.hasOwnProperty("imgWs")) {
                if (!Array.isArray(message.imgWs))
                    return "imgWs: array expected";
                for (let i = 0; i < message.imgWs.length; ++i)
                    if (!$util.isInteger(message.imgWs[i]))
                        return "imgWs: integer[] expected";
            }
            if (message.compressionQualities != null && message.hasOwnProperty("compressionQualities")) {
                if (!Array.isArray(message.compressionQualities))
                    return "compressionQualities: array expected";
                for (let i = 0; i < message.compressionQualities.length; ++i)
                    if (!$util.isInteger(message.compressionQualities[i]))
                        return "compressionQualities: integer[] expected";
            }
            if (message.frameRates != null && message.hasOwnProperty("frameRates")) {
                if (!Array.isArray(message.frameRates))
                    return "frameRates: array expected";
                for (let i = 0; i < message.frameRates.length; ++i)
                    if (typeof message.frameRates[i] !== "number")
                        return "frameRates: number[] expected";
            }
            if (message.active != null && message.hasOwnProperty("active")) {
                if (!Array.isArray(message.active))
                    return "active: array expected";
                for (let i = 0; i < message.active.length; ++i)
                    if (!$util.isInteger(message.active[i]))
                        return "active: integer[] expected";
            }
            return null;
        };

        /**
         * Creates a tele_op_camera_stream_params_list_prim_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_camera_stream_params_list_prim_t} tele_op_camera_stream_params_list_prim_t
         */
        tele_op_camera_stream_params_list_prim_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_camera_stream_params_list_prim_t)
                
                return object;
            
            let message = new $root.may.tele_op_camera_stream_params_list_prim_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.paramStreamNames) {
                if (!Array.isArray(object.paramStreamNames))
                    throw TypeError(".may.tele_op_camera_stream_params_list_prim_t.paramStreamNames: array expected");
                message.paramStreamNames = [];
                for (let i = 0; i < object.paramStreamNames.length; ++i)
                    message.paramStreamNames[i] = String(object.paramStreamNames[i]);
            }
            if (object.imgHs) {
                if (!Array.isArray(object.imgHs))
                    throw TypeError(".may.tele_op_camera_stream_params_list_prim_t.imgHs: array expected");
                message.imgHs = [];
                for (let i = 0; i < object.imgHs.length; ++i)
                    message.imgHs[i] = object.imgHs[i] | 0;
            }
            if (object.imgWs) {
                if (!Array.isArray(object.imgWs))
                    throw TypeError(".may.tele_op_camera_stream_params_list_prim_t.imgWs: array expected");
                message.imgWs = [];
                for (let i = 0; i < object.imgWs.length; ++i)
                    message.imgWs[i] = object.imgWs[i] | 0;
            }
            if (object.compressionQualities) {
                if (!Array.isArray(object.compressionQualities))
                    throw TypeError(".may.tele_op_camera_stream_params_list_prim_t.compressionQualities: array expected");
                message.compressionQualities = [];
                for (let i = 0; i < object.compressionQualities.length; ++i)
                    message.compressionQualities[i] = object.compressionQualities[i] | 0;
            }
            if (object.frameRates) {
                if (!Array.isArray(object.frameRates))
                    throw TypeError(".may.tele_op_camera_stream_params_list_prim_t.frameRates: array expected");
                message.frameRates = [];
                for (let i = 0; i < object.frameRates.length; ++i)
                    message.frameRates[i] = Number(object.frameRates[i]);
            }
            if (object.active) {
                if (!Array.isArray(object.active))
                    throw TypeError(".may.tele_op_camera_stream_params_list_prim_t.active: array expected");
                message.active = [];
                for (let i = 0; i < object.active.length; ++i)
                    message.active[i] = object.active[i] >>> 0;
            }
            return message;
        };

        /**
         * Creates a plain object from a tele_op_camera_stream_params_list_prim_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @static
         * @param {may.tele_op_camera_stream_params_list_prim_t} message tele_op_camera_stream_params_list_prim_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_camera_stream_params_list_prim_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                
                object.paramStreamNames = [];
                
                object.imgHs = [];
                
                object.imgWs = [];
                
                object.compressionQualities = [];
                
                object.frameRates = [];
                
                object.active = [];
            }
            if (options.defaults)
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.paramStreamNames && message.paramStreamNames.length) {
                
                object.paramStreamNames = [];
                
                for (let j = 0; j < message.paramStreamNames.length; ++j)
                    
                    object.paramStreamNames[j] = message.paramStreamNames[j];
            }
            
            if (message.imgHs && message.imgHs.length) {
                
                object.imgHs = [];
                
                for (let j = 0; j < message.imgHs.length; ++j)
                    
                    object.imgHs[j] = message.imgHs[j];
            }
            
            if (message.imgWs && message.imgWs.length) {
                
                object.imgWs = [];
                
                for (let j = 0; j < message.imgWs.length; ++j)
                    
                    object.imgWs[j] = message.imgWs[j];
            }
            
            if (message.compressionQualities && message.compressionQualities.length) {
                
                object.compressionQualities = [];
                
                for (let j = 0; j < message.compressionQualities.length; ++j)
                    
                    object.compressionQualities[j] = message.compressionQualities[j];
            }
            
            if (message.frameRates && message.frameRates.length) {
                
                object.frameRates = [];
                
                for (let j = 0; j < message.frameRates.length; ++j)
                    
                    object.frameRates[j] = options.json && !isFinite(message.frameRates[j]) ? String(message.frameRates[j]) : message.frameRates[j];
            }
            
            if (message.active && message.active.length) {
                
                object.active = [];
                
                for (let j = 0; j < message.active.length; ++j)
                    
                    object.active[j] = message.active[j];
            }
            return object;
        };

        /**
         * Converts this tele_op_camera_stream_params_list_prim_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_camera_stream_params_list_prim_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_camera_stream_params_list_prim_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_camera_stream_params_list_prim_t;
    })();

    may.tele_op_camera_stream_params_t = (function() {

        /**
         * Properties of a tele_op_camera_stream_params_t.
         * @memberof may
         * @interface Itele_op_camera_stream_params_t
         * @property {number|Long|null} [utime] tele_op_camera_stream_params_t utime
         * @property {number|null} [compressionQuality] tele_op_camera_stream_params_t compressionQuality
         * @property {string|null} [streamName] tele_op_camera_stream_params_t streamName
         * @property {number|null} [frameRate] tele_op_camera_stream_params_t frameRate
         * @property {number|null} [imgH] tele_op_camera_stream_params_t imgH
         * @property {number|null} [imgW] tele_op_camera_stream_params_t imgW
         */

        /**
         * Constructs a new tele_op_camera_stream_params_t.
         * @memberof may
         * @classdesc Represents a tele_op_camera_stream_params_t.
         * @implements Itele_op_camera_stream_params_t
         * @constructor
         * @param {may.Itele_op_camera_stream_params_t=} [properties] Properties to set
         */
        
        function tele_op_camera_stream_params_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_camera_stream_params_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_camera_stream_params_t
         * @instance
         */
        
        tele_op_camera_stream_params_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_camera_stream_params_t compressionQuality.
         * @member {number} compressionQuality
         * @memberof may.tele_op_camera_stream_params_t
         * @instance
         */
        tele_op_camera_stream_params_t.prototype.compressionQuality = 0;

        /**
         * tele_op_camera_stream_params_t streamName.
         * @member {string} streamName
         * @memberof may.tele_op_camera_stream_params_t
         * @instance
         */
        tele_op_camera_stream_params_t.prototype.streamName = "";

        /**
         * tele_op_camera_stream_params_t frameRate.
         * @member {number} frameRate
         * @memberof may.tele_op_camera_stream_params_t
         * @instance
         */
        tele_op_camera_stream_params_t.prototype.frameRate = 0;

        /**
         * tele_op_camera_stream_params_t imgH.
         * @member {number} imgH
         * @memberof may.tele_op_camera_stream_params_t
         * @instance
         */
        tele_op_camera_stream_params_t.prototype.imgH = 0;

        /**
         * tele_op_camera_stream_params_t imgW.
         * @member {number} imgW
         * @memberof may.tele_op_camera_stream_params_t
         * @instance
         */
        tele_op_camera_stream_params_t.prototype.imgW = 0;

        /**
         * Creates a new tele_op_camera_stream_params_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {may.Itele_op_camera_stream_params_t=} [properties] Properties to set
         * @returns {may.tele_op_camera_stream_params_t} tele_op_camera_stream_params_t instance
         */
        tele_op_camera_stream_params_t.create = function create(properties) {
            
            return new tele_op_camera_stream_params_t(properties);
        };

        /**
         * Encodes the specified tele_op_camera_stream_params_t message. Does not implicitly {@link may.tele_op_camera_stream_params_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {may.Itele_op_camera_stream_params_t} message tele_op_camera_stream_params_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_camera_stream_params_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.compressionQuality != null && Object.hasOwnProperty.call(message, "compressionQuality"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.compressionQuality);
            if (message.streamName != null && Object.hasOwnProperty.call(message, "streamName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.streamName);
            if (message.frameRate != null && Object.hasOwnProperty.call(message, "frameRate"))
                writer.uint32(/* id 4, wireType 5 =*/37).float(message.frameRate);
            if (message.imgH != null && Object.hasOwnProperty.call(message, "imgH"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.imgH);
            if (message.imgW != null && Object.hasOwnProperty.call(message, "imgW"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.imgW);
            return writer;
        };

        /**
         * Encodes the specified tele_op_camera_stream_params_t message, length delimited. Does not implicitly {@link may.tele_op_camera_stream_params_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {may.Itele_op_camera_stream_params_t} message tele_op_camera_stream_params_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_camera_stream_params_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_camera_stream_params_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_camera_stream_params_t} tele_op_camera_stream_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_camera_stream_params_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_camera_stream_params_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.compressionQuality = reader.int32();
                    break;
                case 3:
                    message.streamName = reader.string();
                    break;
                case 4:
                    message.frameRate = reader.float();
                    break;
                case 5:
                    message.imgH = reader.int32();
                    break;
                case 6:
                    message.imgW = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_camera_stream_params_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_camera_stream_params_t} tele_op_camera_stream_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_camera_stream_params_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_camera_stream_params_t message.
         * @function verify
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_camera_stream_params_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.compressionQuality != null && message.hasOwnProperty("compressionQuality"))
                if (!$util.isInteger(message.compressionQuality))
                    return "compressionQuality: integer expected";
            if (message.streamName != null && message.hasOwnProperty("streamName"))
                if (!$util.isString(message.streamName))
                    return "streamName: string expected";
            if (message.frameRate != null && message.hasOwnProperty("frameRate"))
                if (typeof message.frameRate !== "number")
                    return "frameRate: number expected";
            if (message.imgH != null && message.hasOwnProperty("imgH"))
                if (!$util.isInteger(message.imgH))
                    return "imgH: integer expected";
            if (message.imgW != null && message.hasOwnProperty("imgW"))
                if (!$util.isInteger(message.imgW))
                    return "imgW: integer expected";
            return null;
        };

        /**
         * Creates a tele_op_camera_stream_params_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_camera_stream_params_t} tele_op_camera_stream_params_t
         */
        tele_op_camera_stream_params_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_camera_stream_params_t)
                
                return object;
            
            let message = new $root.may.tele_op_camera_stream_params_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.compressionQuality != null)
                message.compressionQuality = object.compressionQuality | 0;
            if (object.streamName != null)
                message.streamName = String(object.streamName);
            if (object.frameRate != null)
                message.frameRate = Number(object.frameRate);
            if (object.imgH != null)
                message.imgH = object.imgH | 0;
            if (object.imgW != null)
                message.imgW = object.imgW | 0;
            return message;
        };

        /**
         * Creates a plain object from a tele_op_camera_stream_params_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_camera_stream_params_t
         * @static
         * @param {may.tele_op_camera_stream_params_t} message tele_op_camera_stream_params_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_camera_stream_params_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.compressionQuality = 0;
                object.streamName = "";
                object.frameRate = 0;
                object.imgH = 0;
                object.imgW = 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.compressionQuality != null && message.hasOwnProperty("compressionQuality"))
                
                object.compressionQuality = message.compressionQuality;
            
            if (message.streamName != null && message.hasOwnProperty("streamName"))
                
                object.streamName = message.streamName;
            
            if (message.frameRate != null && message.hasOwnProperty("frameRate"))
                
                object.frameRate = options.json && !isFinite(message.frameRate) ? String(message.frameRate) : message.frameRate;
            
            if (message.imgH != null && message.hasOwnProperty("imgH"))
                
                object.imgH = message.imgH;
            
            if (message.imgW != null && message.hasOwnProperty("imgW"))
                
                object.imgW = message.imgW;
            return object;
        };

        /**
         * Converts this tele_op_camera_stream_params_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_camera_stream_params_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_camera_stream_params_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_camera_stream_params_t;
    })();

    may.tele_op_code_packet = (function() {

        /**
         * Properties of a tele_op_code_packet.
         * @memberof may
         * @interface Itele_op_code_packet
         * @property {number|Long|null} [utime] tele_op_code_packet utime
         * @property {may.tele_op_code_packet.OpCode|null} [code] tele_op_code_packet code
         * @property {number|Long|null} [seq] tele_op_code_packet seq
         * @property {Uint8Array|null} [body] tele_op_code_packet body
         * @property {string|null} [email] tele_op_code_packet email
         * @property {may.Itele_op_wait_command_req_t|null} [teleOpWaitCommandReq] tele_op_code_packet teleOpWaitCommandReq
         * @property {may.Itele_op_waypoint_t|null} [teleOpWaypoint] tele_op_code_packet teleOpWaypoint
         */

        /**
         * Constructs a new tele_op_code_packet.
         * @memberof may
         * @classdesc Represents a tele_op_code_packet.
         * @implements Itele_op_code_packet
         * @constructor
         * @param {may.Itele_op_code_packet=} [properties] Properties to set
         */
        
        function tele_op_code_packet(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_code_packet utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_code_packet
         * @instance
         */
        
        tele_op_code_packet.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_code_packet code.
         * @member {may.tele_op_code_packet.OpCode} code
         * @memberof may.tele_op_code_packet
         * @instance
         */
        tele_op_code_packet.prototype.code = 0;

        /**
         * tele_op_code_packet seq.
         * @member {number|Long} seq
         * @memberof may.tele_op_code_packet
         * @instance
         */
        
        tele_op_code_packet.prototype.seq = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_code_packet body.
         * @member {Uint8Array} body
         * @memberof may.tele_op_code_packet
         * @instance
         */
        tele_op_code_packet.prototype.body = $util.newBuffer([]);

        /**
         * tele_op_code_packet email.
         * @member {string} email
         * @memberof may.tele_op_code_packet
         * @instance
         */
        tele_op_code_packet.prototype.email = "";

        /**
         * tele_op_code_packet teleOpWaitCommandReq.
         * @member {may.Itele_op_wait_command_req_t|null|undefined} teleOpWaitCommandReq
         * @memberof may.tele_op_code_packet
         * @instance
         */
        tele_op_code_packet.prototype.teleOpWaitCommandReq = null;

        /**
         * tele_op_code_packet teleOpWaypoint.
         * @member {may.Itele_op_waypoint_t|null|undefined} teleOpWaypoint
         * @memberof may.tele_op_code_packet
         * @instance
         */
        tele_op_code_packet.prototype.teleOpWaypoint = null;

        /**
         * Creates a new tele_op_code_packet instance using the specified properties.
         * @function create
         * @memberof may.tele_op_code_packet
         * @static
         * @param {may.Itele_op_code_packet=} [properties] Properties to set
         * @returns {may.tele_op_code_packet} tele_op_code_packet instance
         */
        tele_op_code_packet.create = function create(properties) {
            
            return new tele_op_code_packet(properties);
        };

        /**
         * Encodes the specified tele_op_code_packet message. Does not implicitly {@link may.tele_op_code_packet.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_code_packet
         * @static
         * @param {may.Itele_op_code_packet} message tele_op_code_packet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_code_packet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.code);
            if (message.seq != null && Object.hasOwnProperty.call(message, "seq"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.seq);
            if (message.body != null && Object.hasOwnProperty.call(message, "body"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.body);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.email);
            if (message.teleOpWaitCommandReq != null && Object.hasOwnProperty.call(message, "teleOpWaitCommandReq"))
                
                $root.may.tele_op_wait_command_req_t.encode(message.teleOpWaitCommandReq, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.teleOpWaypoint != null && Object.hasOwnProperty.call(message, "teleOpWaypoint"))
                
                $root.may.tele_op_waypoint_t.encode(message.teleOpWaypoint, writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tele_op_code_packet message, length delimited. Does not implicitly {@link may.tele_op_code_packet.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_code_packet
         * @static
         * @param {may.Itele_op_code_packet} message tele_op_code_packet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_code_packet.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_code_packet message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_code_packet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_code_packet} tele_op_code_packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_code_packet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_code_packet();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.code = reader.int32();
                    break;
                case 3:
                    message.seq = reader.int64();
                    break;
                case 4:
                    message.body = reader.bytes();
                    break;
                case 5:
                    message.email = reader.string();
                    break;
                case 6:
                    
                    message.teleOpWaitCommandReq = $root.may.tele_op_wait_command_req_t.decode(reader, reader.uint32());
                    break;
                case 7:
                    
                    message.teleOpWaypoint = $root.may.tele_op_waypoint_t.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_code_packet message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_code_packet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_code_packet} tele_op_code_packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_code_packet.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_code_packet message.
         * @function verify
         * @memberof may.tele_op_code_packet
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_code_packet.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.code != null && message.hasOwnProperty("code"))
                switch (message.code) {
                default:
                    return "code: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 8:
                case 9:
                    break;
                }
            if (message.seq != null && message.hasOwnProperty("seq"))
                if (!$util.isInteger(message.seq) && !(message.seq && $util.isInteger(message.seq.low) && $util.isInteger(message.seq.high)))
                    return "seq: integer|Long expected";
            if (message.body != null && message.hasOwnProperty("body"))
                if (!(message.body && typeof message.body.length === "number" || $util.isString(message.body)))
                    return "body: buffer expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.teleOpWaitCommandReq != null && message.hasOwnProperty("teleOpWaitCommandReq")) {
                
                let error = $root.may.tele_op_wait_command_req_t.verify(message.teleOpWaitCommandReq);
                if (error)
                    return "teleOpWaitCommandReq." + error;
            }
            if (message.teleOpWaypoint != null && message.hasOwnProperty("teleOpWaypoint")) {
                
                let error = $root.may.tele_op_waypoint_t.verify(message.teleOpWaypoint);
                if (error)
                    return "teleOpWaypoint." + error;
            }
            return null;
        };

        /**
         * Creates a tele_op_code_packet message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_code_packet
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_code_packet} tele_op_code_packet
         */
        tele_op_code_packet.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_code_packet)
                
                return object;
            
            let message = new $root.may.tele_op_code_packet();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            switch (object.code) {
            case "HEARTBEAT":
            case 0:
                message.code = 0;
                break;
            case "ESTOP":
            case 1:
                message.code = 1;
                break;
            case "QUERY":
            case 2:
                message.code = 2;
                break;
            case "BROKERHEARTBEAT":
            case 3:
                message.code = 3;
                break;
            case "RESUME":
            case 4:
                message.code = 4;
                break;
            case "CAMERAS":
            case 5:
                message.code = 5;
                break;
            case "MANEUVER":
            case 6:
                message.code = 6;
                break;
            case "AUTONOMY":
            case 7:
                message.code = 7;
                break;
            case "WAIT":
            case 8:
                message.code = 8;
                break;
            case "WAYPOINT":
            case 9:
                message.code = 9;
                break;
            }
            if (object.seq != null)
                if ($util.Long)
                    
                    (message.seq = $util.Long.fromValue(object.seq)).unsigned = false;
                else if (typeof object.seq === "string")
                    message.seq = parseInt(object.seq, 10);
                else if (typeof object.seq === "number")
                    message.seq = object.seq;
                else if (typeof object.seq === "object")
                    message.seq = new $util.LongBits(object.seq.low >>> 0, object.seq.high >>> 0).toNumber();
            if (object.body != null)
                if (typeof object.body === "string")
                    $util.base64.decode(object.body, message.body = $util.newBuffer($util.base64.length(object.body)), 0);
                else if (object.body.length)
                    message.body = object.body;
            if (object.email != null)
                message.email = String(object.email);
            if (object.teleOpWaitCommandReq != null) {
                if (typeof object.teleOpWaitCommandReq !== "object")
                    throw TypeError(".may.tele_op_code_packet.teleOpWaitCommandReq: object expected");
                
                message.teleOpWaitCommandReq = $root.may.tele_op_wait_command_req_t.fromObject(object.teleOpWaitCommandReq);
            }
            if (object.teleOpWaypoint != null) {
                if (typeof object.teleOpWaypoint !== "object")
                    throw TypeError(".may.tele_op_code_packet.teleOpWaypoint: object expected");
                
                message.teleOpWaypoint = $root.may.tele_op_waypoint_t.fromObject(object.teleOpWaypoint);
            }
            return message;
        };

        /**
         * Creates a plain object from a tele_op_code_packet message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_code_packet
         * @static
         * @param {may.tele_op_code_packet} message tele_op_code_packet
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_code_packet.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.code = options.enums === String ? "HEARTBEAT" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.seq = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.seq = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    
                    object.body = "";
                else {
                    
                    object.body = [];
                    if (options.bytes !== Array)
                        object.body = $util.newBuffer(object.body);
                }
                object.email = "";
                object.teleOpWaitCommandReq = null;
                object.teleOpWaypoint = null;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.code != null && message.hasOwnProperty("code"))
                
                object.code = options.enums === String ? $root.may.tele_op_code_packet.OpCode[message.code] : message.code;
            
            if (message.seq != null && message.hasOwnProperty("seq"))
                
                if (typeof message.seq === "number")
                    
                    object.seq = options.longs === String ? String(message.seq) : message.seq;
                else
                    
                    object.seq = options.longs === String ? $util.Long.prototype.toString.call(message.seq) : options.longs === Number ? new $util.LongBits(message.seq.low >>> 0, message.seq.high >>> 0).toNumber() : message.seq;
            
            if (message.body != null && message.hasOwnProperty("body"))
                
                object.body = options.bytes === String ? $util.base64.encode(message.body, 0, message.body.length) : options.bytes === Array ? Array.prototype.slice.call(message.body) : message.body;
            
            if (message.email != null && message.hasOwnProperty("email"))
                
                object.email = message.email;
            
            if (message.teleOpWaitCommandReq != null && message.hasOwnProperty("teleOpWaitCommandReq"))
                
                object.teleOpWaitCommandReq = $root.may.tele_op_wait_command_req_t.toObject(message.teleOpWaitCommandReq, options);
            
            if (message.teleOpWaypoint != null && message.hasOwnProperty("teleOpWaypoint"))
                
                object.teleOpWaypoint = $root.may.tele_op_waypoint_t.toObject(message.teleOpWaypoint, options);
            return object;
        };

        /**
         * Converts this tele_op_code_packet to JSON.
         * @function toJSON
         * @memberof may.tele_op_code_packet
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_code_packet.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * OpCode enum.
         * @name may.tele_op_code_packet.OpCode
         * @enum {number}
         * @property {number} HEARTBEAT=0 HEARTBEAT value
         * @property {number} ESTOP=1 ESTOP value
         * @property {number} QUERY=2 QUERY value
         * @property {number} BROKERHEARTBEAT=3 BROKERHEARTBEAT value
         * @property {number} RESUME=4 RESUME value
         * @property {number} CAMERAS=5 CAMERAS value
         * @property {number} MANEUVER=6 MANEUVER value
         * @property {number} AUTONOMY=7 AUTONOMY value
         * @property {number} WAIT=8 WAIT value
         * @property {number} WAYPOINT=9 WAYPOINT value
         */
        tele_op_code_packet.OpCode = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "HEARTBEAT"] = 0;
            values[valuesById[1] = "ESTOP"] = 1;
            values[valuesById[2] = "QUERY"] = 2;
            values[valuesById[3] = "BROKERHEARTBEAT"] = 3;
            values[valuesById[4] = "RESUME"] = 4;
            values[valuesById[5] = "CAMERAS"] = 5;
            values[valuesById[6] = "MANEUVER"] = 6;
            values[valuesById[7] = "AUTONOMY"] = 7;
            values[valuesById[8] = "WAIT"] = 8;
            values[valuesById[9] = "WAYPOINT"] = 9;
            return values;
        })();

        return tele_op_code_packet;
    })();

    may.tele_op_maneuver_request_t = (function() {

        /**
         * Properties of a tele_op_maneuver_request_t.
         * @memberof may
         * @interface Itele_op_maneuver_request_t
         * @property {number|Long|null} [utime] tele_op_maneuver_request_t utime
         * @property {number|null} [uid] tele_op_maneuver_request_t uid
         * @property {Array.<may.tele_op_waypoint_t.Idouble_point_t>|null} [path] tele_op_maneuver_request_t path
         * @property {may.policy_types|null} [policyType] tele_op_maneuver_request_t policyType
         */

        /**
         * Constructs a new tele_op_maneuver_request_t.
         * @memberof may
         * @classdesc Represents a tele_op_maneuver_request_t.
         * @implements Itele_op_maneuver_request_t
         * @constructor
         * @param {may.Itele_op_maneuver_request_t=} [properties] Properties to set
         */
        
        function tele_op_maneuver_request_t(properties) {
            
            this.path = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_maneuver_request_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_maneuver_request_t
         * @instance
         */
        
        tele_op_maneuver_request_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_maneuver_request_t uid.
         * @member {number} uid
         * @memberof may.tele_op_maneuver_request_t
         * @instance
         */
        tele_op_maneuver_request_t.prototype.uid = 0;

        /**
         * tele_op_maneuver_request_t path.
         * @member {Array.<may.tele_op_waypoint_t.Idouble_point_t>} path
         * @memberof may.tele_op_maneuver_request_t
         * @instance
         */
        tele_op_maneuver_request_t.prototype.path = $util.emptyArray;

        /**
         * tele_op_maneuver_request_t policyType.
         * @member {may.policy_types} policyType
         * @memberof may.tele_op_maneuver_request_t
         * @instance
         */
        tele_op_maneuver_request_t.prototype.policyType = 0;

        /**
         * Creates a new tele_op_maneuver_request_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {may.Itele_op_maneuver_request_t=} [properties] Properties to set
         * @returns {may.tele_op_maneuver_request_t} tele_op_maneuver_request_t instance
         */
        tele_op_maneuver_request_t.create = function create(properties) {
            
            return new tele_op_maneuver_request_t(properties);
        };

        /**
         * Encodes the specified tele_op_maneuver_request_t message. Does not implicitly {@link may.tele_op_maneuver_request_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {may.Itele_op_maneuver_request_t} message tele_op_maneuver_request_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_maneuver_request_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.uid);
            if (message.path != null && message.path.length)
                for (let i = 0; i < message.path.length; ++i)
                    
                    $root.may.tele_op_waypoint_t.double_point_t.encode(message.path[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.policyType != null && Object.hasOwnProperty.call(message, "policyType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.policyType);
            return writer;
        };

        /**
         * Encodes the specified tele_op_maneuver_request_t message, length delimited. Does not implicitly {@link may.tele_op_maneuver_request_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {may.Itele_op_maneuver_request_t} message tele_op_maneuver_request_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_maneuver_request_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_maneuver_request_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_maneuver_request_t} tele_op_maneuver_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_maneuver_request_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_maneuver_request_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.uid = reader.uint32();
                    break;
                case 3:
                    if (!(message.path && message.path.length))
                        message.path = [];
                    
                    message.path.push($root.may.tele_op_waypoint_t.double_point_t.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.policyType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_maneuver_request_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_maneuver_request_t} tele_op_maneuver_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_maneuver_request_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_maneuver_request_t message.
         * @function verify
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_maneuver_request_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.path != null && message.hasOwnProperty("path")) {
                if (!Array.isArray(message.path))
                    return "path: array expected";
                for (let i = 0; i < message.path.length; ++i) {
                    
                    let error = $root.may.tele_op_waypoint_t.double_point_t.verify(message.path[i]);
                    if (error)
                        return "path." + error;
                }
            }
            if (message.policyType != null && message.hasOwnProperty("policyType"))
                switch (message.policyType) {
                default:
                    return "policyType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a tele_op_maneuver_request_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_maneuver_request_t} tele_op_maneuver_request_t
         */
        tele_op_maneuver_request_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_maneuver_request_t)
                
                return object;
            
            let message = new $root.may.tele_op_maneuver_request_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.path) {
                if (!Array.isArray(object.path))
                    throw TypeError(".may.tele_op_maneuver_request_t.path: array expected");
                message.path = [];
                for (let i = 0; i < object.path.length; ++i) {
                    if (typeof object.path[i] !== "object")
                        throw TypeError(".may.tele_op_maneuver_request_t.path: object expected");
                    
                    message.path[i] = $root.may.tele_op_waypoint_t.double_point_t.fromObject(object.path[i]);
                }
            }
            switch (object.policyType) {
            case "OUT_OF_LANE":
            case 0:
                message.policyType = 0;
                break;
            case "WAYPOINTS":
            case 1:
                message.policyType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a tele_op_maneuver_request_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_maneuver_request_t
         * @static
         * @param {may.tele_op_maneuver_request_t} message tele_op_maneuver_request_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_maneuver_request_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.path = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.uid = 0;
                object.policyType = options.enums === String ? "OUT_OF_LANE" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.uid != null && message.hasOwnProperty("uid"))
                
                object.uid = message.uid;
            
            if (message.path && message.path.length) {
                
                object.path = [];
                
                for (let j = 0; j < message.path.length; ++j)
                    
                    object.path[j] = $root.may.tele_op_waypoint_t.double_point_t.toObject(message.path[j], options);
            }
            
            if (message.policyType != null && message.hasOwnProperty("policyType"))
                
                object.policyType = options.enums === String ? $root.may.policy_types[message.policyType] : message.policyType;
            return object;
        };

        /**
         * Converts this tele_op_maneuver_request_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_maneuver_request_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_maneuver_request_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_maneuver_request_t;
    })();

    may.tele_op_maneuver_response_t = (function() {

        /**
         * Properties of a tele_op_maneuver_response_t.
         * @memberof may
         * @interface Itele_op_maneuver_response_t
         * @property {number|Long|null} [utime] tele_op_maneuver_response_t utime
         * @property {number|Long|null} [uid] tele_op_maneuver_response_t uid
         * @property {boolean|null} [approved] tele_op_maneuver_response_t approved
         * @property {may.policy_types|null} [policyType] tele_op_maneuver_response_t policyType
         */

        /**
         * Constructs a new tele_op_maneuver_response_t.
         * @memberof may
         * @classdesc Represents a tele_op_maneuver_response_t.
         * @implements Itele_op_maneuver_response_t
         * @constructor
         * @param {may.Itele_op_maneuver_response_t=} [properties] Properties to set
         */
        
        function tele_op_maneuver_response_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_maneuver_response_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_maneuver_response_t
         * @instance
         */
        
        tele_op_maneuver_response_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_maneuver_response_t uid.
         * @member {number|Long} uid
         * @memberof may.tele_op_maneuver_response_t
         * @instance
         */
        
        tele_op_maneuver_response_t.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_maneuver_response_t approved.
         * @member {boolean} approved
         * @memberof may.tele_op_maneuver_response_t
         * @instance
         */
        tele_op_maneuver_response_t.prototype.approved = false;

        /**
         * tele_op_maneuver_response_t policyType.
         * @member {may.policy_types} policyType
         * @memberof may.tele_op_maneuver_response_t
         * @instance
         */
        tele_op_maneuver_response_t.prototype.policyType = 0;

        /**
         * Creates a new tele_op_maneuver_response_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {may.Itele_op_maneuver_response_t=} [properties] Properties to set
         * @returns {may.tele_op_maneuver_response_t} tele_op_maneuver_response_t instance
         */
        tele_op_maneuver_response_t.create = function create(properties) {
            
            return new tele_op_maneuver_response_t(properties);
        };

        /**
         * Encodes the specified tele_op_maneuver_response_t message. Does not implicitly {@link may.tele_op_maneuver_response_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {may.Itele_op_maneuver_response_t} message tele_op_maneuver_response_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_maneuver_response_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.approved != null && Object.hasOwnProperty.call(message, "approved"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.approved);
            if (message.policyType != null && Object.hasOwnProperty.call(message, "policyType"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.policyType);
            return writer;
        };

        /**
         * Encodes the specified tele_op_maneuver_response_t message, length delimited. Does not implicitly {@link may.tele_op_maneuver_response_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {may.Itele_op_maneuver_response_t} message tele_op_maneuver_response_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_maneuver_response_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_maneuver_response_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_maneuver_response_t} tele_op_maneuver_response_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_maneuver_response_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_maneuver_response_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.approved = reader.bool();
                    break;
                case 4:
                    message.policyType = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_maneuver_response_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_maneuver_response_t} tele_op_maneuver_response_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_maneuver_response_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_maneuver_response_t message.
         * @function verify
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_maneuver_response_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.approved != null && message.hasOwnProperty("approved"))
                if (typeof message.approved !== "boolean")
                    return "approved: boolean expected";
            if (message.policyType != null && message.hasOwnProperty("policyType"))
                switch (message.policyType) {
                default:
                    return "policyType: enum value expected";
                case 0:
                case 1:
                    break;
                }
            return null;
        };

        /**
         * Creates a tele_op_maneuver_response_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_maneuver_response_t} tele_op_maneuver_response_t
         */
        tele_op_maneuver_response_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_maneuver_response_t)
                
                return object;
            
            let message = new $root.may.tele_op_maneuver_response_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.uid != null)
                if ($util.Long)
                    
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.approved != null)
                message.approved = Boolean(object.approved);
            switch (object.policyType) {
            case "OUT_OF_LANE":
            case 0:
                message.policyType = 0;
                break;
            case "WAYPOINTS":
            case 1:
                message.policyType = 1;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a tele_op_maneuver_response_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_maneuver_response_t
         * @static
         * @param {may.tele_op_maneuver_response_t} message tele_op_maneuver_response_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_maneuver_response_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.approved = false;
                object.policyType = options.enums === String ? "OUT_OF_LANE" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.uid != null && message.hasOwnProperty("uid"))
                
                if (typeof message.uid === "number")
                    
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            
            if (message.approved != null && message.hasOwnProperty("approved"))
                
                object.approved = message.approved;
            
            if (message.policyType != null && message.hasOwnProperty("policyType"))
                
                object.policyType = options.enums === String ? $root.may.policy_types[message.policyType] : message.policyType;
            return object;
        };

        /**
         * Converts this tele_op_maneuver_response_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_maneuver_response_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_maneuver_response_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_maneuver_response_t;
    })();

    /**
     * policy_types enum.
     * @name may.policy_types
     * @enum {number}
     * @property {number} OUT_OF_LANE=0 OUT_OF_LANE value
     * @property {number} WAYPOINTS=1 WAYPOINTS value
     */
    may.policy_types = (function() {
        const valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "OUT_OF_LANE"] = 0;
        values[valuesById[1] = "WAYPOINTS"] = 1;
        return values;
    })();

    may.tele_op_object_list_t = (function() {

        /**
         * Properties of a tele_op_object_list_t.
         * @memberof may
         * @interface Itele_op_object_list_t
         * @property {number|Long|null} [utime] tele_op_object_list_t utime
         * @property {may.Itele_op_object_t|null} [ego] tele_op_object_list_t ego
         * @property {Array.<may.Itele_op_object_t>|null} [objects] tele_op_object_list_t objects
         */

        /**
         * Constructs a new tele_op_object_list_t.
         * @memberof may
         * @classdesc Represents a tele_op_object_list_t.
         * @implements Itele_op_object_list_t
         * @constructor
         * @param {may.Itele_op_object_list_t=} [properties] Properties to set
         */
        
        function tele_op_object_list_t(properties) {
            
            this.objects = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_object_list_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_object_list_t
         * @instance
         */
        
        tele_op_object_list_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_object_list_t ego.
         * @member {may.Itele_op_object_t|null|undefined} ego
         * @memberof may.tele_op_object_list_t
         * @instance
         */
        tele_op_object_list_t.prototype.ego = null;

        /**
         * tele_op_object_list_t objects.
         * @member {Array.<may.Itele_op_object_t>} objects
         * @memberof may.tele_op_object_list_t
         * @instance
         */
        tele_op_object_list_t.prototype.objects = $util.emptyArray;

        /**
         * Creates a new tele_op_object_list_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {may.Itele_op_object_list_t=} [properties] Properties to set
         * @returns {may.tele_op_object_list_t} tele_op_object_list_t instance
         */
        tele_op_object_list_t.create = function create(properties) {
            
            return new tele_op_object_list_t(properties);
        };

        /**
         * Encodes the specified tele_op_object_list_t message. Does not implicitly {@link may.tele_op_object_list_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {may.Itele_op_object_list_t} message tele_op_object_list_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_object_list_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.ego != null && Object.hasOwnProperty.call(message, "ego"))
                
                $root.may.tele_op_object_t.encode(message.ego, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.objects != null && message.objects.length)
                for (let i = 0; i < message.objects.length; ++i)
                    
                    $root.may.tele_op_object_t.encode(message.objects[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tele_op_object_list_t message, length delimited. Does not implicitly {@link may.tele_op_object_list_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {may.Itele_op_object_list_t} message tele_op_object_list_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_object_list_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_object_list_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_object_list_t} tele_op_object_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_object_list_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_object_list_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    
                    message.ego = $root.may.tele_op_object_t.decode(reader, reader.uint32());
                    break;
                case 3:
                    if (!(message.objects && message.objects.length))
                        message.objects = [];
                    
                    message.objects.push($root.may.tele_op_object_t.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_object_list_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_object_list_t} tele_op_object_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_object_list_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_object_list_t message.
         * @function verify
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_object_list_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.ego != null && message.hasOwnProperty("ego")) {
                
                let error = $root.may.tele_op_object_t.verify(message.ego);
                if (error)
                    return "ego." + error;
            }
            if (message.objects != null && message.hasOwnProperty("objects")) {
                if (!Array.isArray(message.objects))
                    return "objects: array expected";
                for (let i = 0; i < message.objects.length; ++i) {
                    
                    let error = $root.may.tele_op_object_t.verify(message.objects[i]);
                    if (error)
                        return "objects." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tele_op_object_list_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_object_list_t} tele_op_object_list_t
         */
        tele_op_object_list_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_object_list_t)
                
                return object;
            
            let message = new $root.may.tele_op_object_list_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.ego != null) {
                if (typeof object.ego !== "object")
                    throw TypeError(".may.tele_op_object_list_t.ego: object expected");
                
                message.ego = $root.may.tele_op_object_t.fromObject(object.ego);
            }
            if (object.objects) {
                if (!Array.isArray(object.objects))
                    throw TypeError(".may.tele_op_object_list_t.objects: array expected");
                message.objects = [];
                for (let i = 0; i < object.objects.length; ++i) {
                    if (typeof object.objects[i] !== "object")
                        throw TypeError(".may.tele_op_object_list_t.objects: object expected");
                    
                    message.objects[i] = $root.may.tele_op_object_t.fromObject(object.objects[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tele_op_object_list_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_object_list_t
         * @static
         * @param {may.tele_op_object_list_t} message tele_op_object_list_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_object_list_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.objects = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.ego = null;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.ego != null && message.hasOwnProperty("ego"))
                
                object.ego = $root.may.tele_op_object_t.toObject(message.ego, options);
            
            if (message.objects && message.objects.length) {
                
                object.objects = [];
                
                for (let j = 0; j < message.objects.length; ++j)
                    
                    object.objects[j] = $root.may.tele_op_object_t.toObject(message.objects[j], options);
            }
            return object;
        };

        /**
         * Converts this tele_op_object_list_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_object_list_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_object_list_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_object_list_t;
    })();

    may.tele_op_object_t = (function() {

        /**
         * Properties of a tele_op_object_t.
         * @memberof may
         * @interface Itele_op_object_t
         * @property {number|Long|null} [utime] tele_op_object_t utime
         * @property {number|null} [id] tele_op_object_t id
         * @property {Array.<number>|null} [vel] tele_op_object_t vel
         * @property {may.Ipolygon_t|null} [poly] tele_op_object_t poly
         * @property {string|null} [classLabel] tele_op_object_t classLabel
         */

        /**
         * Constructs a new tele_op_object_t.
         * @memberof may
         * @classdesc Represents a tele_op_object_t.
         * @implements Itele_op_object_t
         * @constructor
         * @param {may.Itele_op_object_t=} [properties] Properties to set
         */
        
        function tele_op_object_t(properties) {
            
            this.vel = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_object_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_object_t
         * @instance
         */
        
        tele_op_object_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_object_t id.
         * @member {number} id
         * @memberof may.tele_op_object_t
         * @instance
         */
        tele_op_object_t.prototype.id = 0;

        /**
         * tele_op_object_t vel.
         * @member {Array.<number>} vel
         * @memberof may.tele_op_object_t
         * @instance
         */
        tele_op_object_t.prototype.vel = $util.emptyArray;

        /**
         * tele_op_object_t poly.
         * @member {may.Ipolygon_t|null|undefined} poly
         * @memberof may.tele_op_object_t
         * @instance
         */
        tele_op_object_t.prototype.poly = null;

        /**
         * tele_op_object_t classLabel.
         * @member {string} classLabel
         * @memberof may.tele_op_object_t
         * @instance
         */
        tele_op_object_t.prototype.classLabel = "";

        /**
         * Creates a new tele_op_object_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_object_t
         * @static
         * @param {may.Itele_op_object_t=} [properties] Properties to set
         * @returns {may.tele_op_object_t} tele_op_object_t instance
         */
        tele_op_object_t.create = function create(properties) {
            
            return new tele_op_object_t(properties);
        };

        /**
         * Encodes the specified tele_op_object_t message. Does not implicitly {@link may.tele_op_object_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_object_t
         * @static
         * @param {may.Itele_op_object_t} message tele_op_object_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_object_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.vel != null && message.vel.length) {
                writer.uint32(/* id 3, wireType 2 =*/26).fork();
                for (let i = 0; i < message.vel.length; ++i)
                    writer.double(message.vel[i]);
                writer.ldelim();
            }
            if (message.poly != null && Object.hasOwnProperty.call(message, "poly"))
                
                $root.may.polygon_t.encode(message.poly, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.classLabel != null && Object.hasOwnProperty.call(message, "classLabel"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.classLabel);
            return writer;
        };

        /**
         * Encodes the specified tele_op_object_t message, length delimited. Does not implicitly {@link may.tele_op_object_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_object_t
         * @static
         * @param {may.Itele_op_object_t} message tele_op_object_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_object_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_object_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_object_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_object_t} tele_op_object_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_object_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_object_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    if (!(message.vel && message.vel.length))
                        message.vel = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.vel.push(reader.double());
                    } else
                        message.vel.push(reader.double());
                    break;
                case 4:
                    
                    message.poly = $root.may.polygon_t.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.classLabel = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_object_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_object_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_object_t} tele_op_object_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_object_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_object_t message.
         * @function verify
         * @memberof may.tele_op_object_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_object_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.vel != null && message.hasOwnProperty("vel")) {
                if (!Array.isArray(message.vel))
                    return "vel: array expected";
                for (let i = 0; i < message.vel.length; ++i)
                    if (typeof message.vel[i] !== "number")
                        return "vel: number[] expected";
            }
            if (message.poly != null && message.hasOwnProperty("poly")) {
                
                let error = $root.may.polygon_t.verify(message.poly);
                if (error)
                    return "poly." + error;
            }
            if (message.classLabel != null && message.hasOwnProperty("classLabel"))
                if (!$util.isString(message.classLabel))
                    return "classLabel: string expected";
            return null;
        };

        /**
         * Creates a tele_op_object_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_object_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_object_t} tele_op_object_t
         */
        tele_op_object_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_object_t)
                
                return object;
            
            let message = new $root.may.tele_op_object_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.vel) {
                if (!Array.isArray(object.vel))
                    throw TypeError(".may.tele_op_object_t.vel: array expected");
                message.vel = [];
                for (let i = 0; i < object.vel.length; ++i)
                    message.vel[i] = Number(object.vel[i]);
            }
            if (object.poly != null) {
                if (typeof object.poly !== "object")
                    throw TypeError(".may.tele_op_object_t.poly: object expected");
                
                message.poly = $root.may.polygon_t.fromObject(object.poly);
            }
            if (object.classLabel != null)
                message.classLabel = String(object.classLabel);
            return message;
        };

        /**
         * Creates a plain object from a tele_op_object_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_object_t
         * @static
         * @param {may.tele_op_object_t} message tele_op_object_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_object_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.vel = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.id = 0;
                object.poly = null;
                object.classLabel = "";
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.id != null && message.hasOwnProperty("id"))
                
                object.id = message.id;
            
            if (message.vel && message.vel.length) {
                
                object.vel = [];
                
                for (let j = 0; j < message.vel.length; ++j)
                    
                    object.vel[j] = options.json && !isFinite(message.vel[j]) ? String(message.vel[j]) : message.vel[j];
            }
            
            if (message.poly != null && message.hasOwnProperty("poly"))
                
                object.poly = $root.may.polygon_t.toObject(message.poly, options);
            
            if (message.classLabel != null && message.hasOwnProperty("classLabel"))
                
                object.classLabel = message.classLabel;
            return object;
        };

        /**
         * Converts this tele_op_object_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_object_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_object_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_object_t;
    })();

    may.tele_op_planner_result_t = (function() {

        /**
         * Properties of a tele_op_planner_result_t.
         * @memberof may
         * @interface Itele_op_planner_result_t
         * @property {number|Long|null} [utime] tele_op_planner_result_t utime
         * @property {number|null} [uid] tele_op_planner_result_t uid
         * @property {number|null} [resultCode] tele_op_planner_result_t resultCode
         * @property {boolean|null} [ok] tele_op_planner_result_t ok
         * @property {string|null} [msg] tele_op_planner_result_t msg
         * @property {string|null} [policyName] tele_op_planner_result_t policyName
         * @property {may.tele_op_planner_result_t.POLICY_GENERATION_RESULT|null} [result] tele_op_planner_result_t result
         */

        /**
         * Constructs a new tele_op_planner_result_t.
         * @memberof may
         * @classdesc Represents a tele_op_planner_result_t.
         * @implements Itele_op_planner_result_t
         * @constructor
         * @param {may.Itele_op_planner_result_t=} [properties] Properties to set
         */
        
        function tele_op_planner_result_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_planner_result_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_planner_result_t
         * @instance
         */
        
        tele_op_planner_result_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_planner_result_t uid.
         * @member {number} uid
         * @memberof may.tele_op_planner_result_t
         * @instance
         */
        tele_op_planner_result_t.prototype.uid = 0;

        /**
         * tele_op_planner_result_t resultCode.
         * @member {number} resultCode
         * @memberof may.tele_op_planner_result_t
         * @instance
         */
        tele_op_planner_result_t.prototype.resultCode = 0;

        /**
         * tele_op_planner_result_t ok.
         * @member {boolean} ok
         * @memberof may.tele_op_planner_result_t
         * @instance
         */
        tele_op_planner_result_t.prototype.ok = false;

        /**
         * tele_op_planner_result_t msg.
         * @member {string} msg
         * @memberof may.tele_op_planner_result_t
         * @instance
         */
        tele_op_planner_result_t.prototype.msg = "";

        /**
         * tele_op_planner_result_t policyName.
         * @member {string} policyName
         * @memberof may.tele_op_planner_result_t
         * @instance
         */
        tele_op_planner_result_t.prototype.policyName = "";

        /**
         * tele_op_planner_result_t result.
         * @member {may.tele_op_planner_result_t.POLICY_GENERATION_RESULT} result
         * @memberof may.tele_op_planner_result_t
         * @instance
         */
        tele_op_planner_result_t.prototype.result = 0;

        /**
         * Creates a new tele_op_planner_result_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {may.Itele_op_planner_result_t=} [properties] Properties to set
         * @returns {may.tele_op_planner_result_t} tele_op_planner_result_t instance
         */
        tele_op_planner_result_t.create = function create(properties) {
            
            return new tele_op_planner_result_t(properties);
        };

        /**
         * Encodes the specified tele_op_planner_result_t message. Does not implicitly {@link may.tele_op_planner_result_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {may.Itele_op_planner_result_t} message tele_op_planner_result_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_planner_result_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.uid);
            if (message.resultCode != null && Object.hasOwnProperty.call(message, "resultCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.resultCode);
            if (message.ok != null && Object.hasOwnProperty.call(message, "ok"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.ok);
            if (message.msg != null && Object.hasOwnProperty.call(message, "msg"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.msg);
            if (message.policyName != null && Object.hasOwnProperty.call(message, "policyName"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.policyName);
            if (message.result != null && Object.hasOwnProperty.call(message, "result"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.result);
            return writer;
        };

        /**
         * Encodes the specified tele_op_planner_result_t message, length delimited. Does not implicitly {@link may.tele_op_planner_result_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {may.Itele_op_planner_result_t} message tele_op_planner_result_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_planner_result_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_planner_result_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_planner_result_t} tele_op_planner_result_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_planner_result_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_planner_result_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.uid = reader.int32();
                    break;
                case 3:
                    message.resultCode = reader.int32();
                    break;
                case 4:
                    message.ok = reader.bool();
                    break;
                case 5:
                    message.msg = reader.string();
                    break;
                case 6:
                    message.policyName = reader.string();
                    break;
                case 7:
                    message.result = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_planner_result_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_planner_result_t} tele_op_planner_result_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_planner_result_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_planner_result_t message.
         * @function verify
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_planner_result_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                if (!$util.isInteger(message.resultCode))
                    return "resultCode: integer expected";
            if (message.ok != null && message.hasOwnProperty("ok"))
                if (typeof message.ok !== "boolean")
                    return "ok: boolean expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.policyName != null && message.hasOwnProperty("policyName"))
                if (!$util.isString(message.policyName))
                    return "policyName: string expected";
            if (message.result != null && message.hasOwnProperty("result"))
                switch (message.result) {
                default:
                    return "result: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a tele_op_planner_result_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_planner_result_t} tele_op_planner_result_t
         */
        tele_op_planner_result_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_planner_result_t)
                
                return object;
            
            let message = new $root.may.tele_op_planner_result_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.uid != null)
                message.uid = object.uid | 0;
            if (object.resultCode != null)
                message.resultCode = object.resultCode | 0;
            if (object.ok != null)
                message.ok = Boolean(object.ok);
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.policyName != null)
                message.policyName = String(object.policyName);
            switch (object.result) {
            case "SUCCESS":
            case 0:
                message.result = 0;
                break;
            case "COLLISION":
            case 1:
                message.result = 1;
                break;
            case "VIOLATING_CONTRAINTS":
            case 2:
                message.result = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a tele_op_planner_result_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_planner_result_t
         * @static
         * @param {may.tele_op_planner_result_t} message tele_op_planner_result_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_planner_result_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.uid = 0;
                object.resultCode = 0;
                object.ok = false;
                object.msg = "";
                object.policyName = "";
                object.result = options.enums === String ? "SUCCESS" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.uid != null && message.hasOwnProperty("uid"))
                
                object.uid = message.uid;
            
            if (message.resultCode != null && message.hasOwnProperty("resultCode"))
                
                object.resultCode = message.resultCode;
            
            if (message.ok != null && message.hasOwnProperty("ok"))
                
                object.ok = message.ok;
            
            if (message.msg != null && message.hasOwnProperty("msg"))
                
                object.msg = message.msg;
            
            if (message.policyName != null && message.hasOwnProperty("policyName"))
                
                object.policyName = message.policyName;
            
            if (message.result != null && message.hasOwnProperty("result"))
                
                object.result = options.enums === String ? $root.may.tele_op_planner_result_t.POLICY_GENERATION_RESULT[message.result] : message.result;
            return object;
        };

        /**
         * Converts this tele_op_planner_result_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_planner_result_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_planner_result_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * POLICY_GENERATION_RESULT enum.
         * @name may.tele_op_planner_result_t.POLICY_GENERATION_RESULT
         * @enum {number}
         * @property {number} SUCCESS=0 SUCCESS value
         * @property {number} COLLISION=1 COLLISION value
         * @property {number} VIOLATING_CONTRAINTS=2 VIOLATING_CONTRAINTS value
         */
        tele_op_planner_result_t.POLICY_GENERATION_RESULT = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "SUCCESS"] = 0;
            values[valuesById[1] = "COLLISION"] = 1;
            values[valuesById[2] = "VIOLATING_CONTRAINTS"] = 2;
            return values;
        })();

        return tele_op_planner_result_t;
    })();

    may.tele_op_policy_request_t = (function() {

        /**
         * Properties of a tele_op_policy_request_t.
         * @memberof may
         * @interface Itele_op_policy_request_t
         * @property {number|Long|null} [utime] tele_op_policy_request_t utime
         * @property {may.Iglobal_time_t|null} [globalUtime] tele_op_policy_request_t globalUtime
         * @property {number|null} [uid] tele_op_policy_request_t uid
         * @property {number|null} [referenceFrame] tele_op_policy_request_t referenceFrame
         * @property {Array.<may.tele_op_policy_request_t.ICorridor>|null} [corridorLeft] tele_op_policy_request_t corridorLeft
         * @property {Array.<may.tele_op_policy_request_t.ICorridor>|null} [corridorRight] tele_op_policy_request_t corridorRight
         * @property {Array.<may.tele_op_policy_request_t.ITargetObject>|null} [targetObjectVertices] tele_op_policy_request_t targetObjectVertices
         */

        /**
         * Constructs a new tele_op_policy_request_t.
         * @memberof may
         * @classdesc Represents a tele_op_policy_request_t.
         * @implements Itele_op_policy_request_t
         * @constructor
         * @param {may.Itele_op_policy_request_t=} [properties] Properties to set
         */
        
        function tele_op_policy_request_t(properties) {
            
            this.corridorLeft = [];
            
            this.corridorRight = [];
            
            this.targetObjectVertices = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_policy_request_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_policy_request_t
         * @instance
         */
        
        tele_op_policy_request_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_policy_request_t globalUtime.
         * @member {may.Iglobal_time_t|null|undefined} globalUtime
         * @memberof may.tele_op_policy_request_t
         * @instance
         */
        tele_op_policy_request_t.prototype.globalUtime = null;

        /**
         * tele_op_policy_request_t uid.
         * @member {number} uid
         * @memberof may.tele_op_policy_request_t
         * @instance
         */
        tele_op_policy_request_t.prototype.uid = 0;

        /**
         * tele_op_policy_request_t referenceFrame.
         * @member {number} referenceFrame
         * @memberof may.tele_op_policy_request_t
         * @instance
         */
        tele_op_policy_request_t.prototype.referenceFrame = 0;

        /**
         * tele_op_policy_request_t corridorLeft.
         * @member {Array.<may.tele_op_policy_request_t.ICorridor>} corridorLeft
         * @memberof may.tele_op_policy_request_t
         * @instance
         */
        tele_op_policy_request_t.prototype.corridorLeft = $util.emptyArray;

        /**
         * tele_op_policy_request_t corridorRight.
         * @member {Array.<may.tele_op_policy_request_t.ICorridor>} corridorRight
         * @memberof may.tele_op_policy_request_t
         * @instance
         */
        tele_op_policy_request_t.prototype.corridorRight = $util.emptyArray;

        /**
         * tele_op_policy_request_t targetObjectVertices.
         * @member {Array.<may.tele_op_policy_request_t.ITargetObject>} targetObjectVertices
         * @memberof may.tele_op_policy_request_t
         * @instance
         */
        tele_op_policy_request_t.prototype.targetObjectVertices = $util.emptyArray;

        /**
         * Creates a new tele_op_policy_request_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {may.Itele_op_policy_request_t=} [properties] Properties to set
         * @returns {may.tele_op_policy_request_t} tele_op_policy_request_t instance
         */
        tele_op_policy_request_t.create = function create(properties) {
            
            return new tele_op_policy_request_t(properties);
        };

        /**
         * Encodes the specified tele_op_policy_request_t message. Does not implicitly {@link may.tele_op_policy_request_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {may.Itele_op_policy_request_t} message tele_op_policy_request_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_policy_request_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.globalUtime != null && Object.hasOwnProperty.call(message, "globalUtime"))
                
                $root.may.global_time_t.encode(message.globalUtime, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.uid);
            if (message.referenceFrame != null && Object.hasOwnProperty.call(message, "referenceFrame"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.referenceFrame);
            if (message.corridorLeft != null && message.corridorLeft.length)
                for (let i = 0; i < message.corridorLeft.length; ++i)
                    
                    $root.may.tele_op_policy_request_t.Corridor.encode(message.corridorLeft[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.corridorRight != null && message.corridorRight.length)
                for (let i = 0; i < message.corridorRight.length; ++i)
                    
                    $root.may.tele_op_policy_request_t.Corridor.encode(message.corridorRight[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.targetObjectVertices != null && message.targetObjectVertices.length)
                for (let i = 0; i < message.targetObjectVertices.length; ++i)
                    
                    $root.may.tele_op_policy_request_t.TargetObject.encode(message.targetObjectVertices[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified tele_op_policy_request_t message, length delimited. Does not implicitly {@link may.tele_op_policy_request_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {may.Itele_op_policy_request_t} message tele_op_policy_request_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_policy_request_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_policy_request_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_policy_request_t} tele_op_policy_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_policy_request_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_policy_request_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    
                    message.globalUtime = $root.may.global_time_t.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.uid = reader.uint32();
                    break;
                case 4:
                    message.referenceFrame = reader.uint32();
                    break;
                case 5:
                    if (!(message.corridorLeft && message.corridorLeft.length))
                        message.corridorLeft = [];
                    
                    message.corridorLeft.push($root.may.tele_op_policy_request_t.Corridor.decode(reader, reader.uint32()));
                    break;
                case 6:
                    if (!(message.corridorRight && message.corridorRight.length))
                        message.corridorRight = [];
                    
                    message.corridorRight.push($root.may.tele_op_policy_request_t.Corridor.decode(reader, reader.uint32()));
                    break;
                case 7:
                    if (!(message.targetObjectVertices && message.targetObjectVertices.length))
                        message.targetObjectVertices = [];
                    
                    message.targetObjectVertices.push($root.may.tele_op_policy_request_t.TargetObject.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_policy_request_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_policy_request_t} tele_op_policy_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_policy_request_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_policy_request_t message.
         * @function verify
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_policy_request_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.globalUtime != null && message.hasOwnProperty("globalUtime")) {
                
                let error = $root.may.global_time_t.verify(message.globalUtime);
                if (error)
                    return "globalUtime." + error;
            }
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid))
                    return "uid: integer expected";
            if (message.referenceFrame != null && message.hasOwnProperty("referenceFrame"))
                if (!$util.isInteger(message.referenceFrame))
                    return "referenceFrame: integer expected";
            if (message.corridorLeft != null && message.hasOwnProperty("corridorLeft")) {
                if (!Array.isArray(message.corridorLeft))
                    return "corridorLeft: array expected";
                for (let i = 0; i < message.corridorLeft.length; ++i) {
                    
                    let error = $root.may.tele_op_policy_request_t.Corridor.verify(message.corridorLeft[i]);
                    if (error)
                        return "corridorLeft." + error;
                }
            }
            if (message.corridorRight != null && message.hasOwnProperty("corridorRight")) {
                if (!Array.isArray(message.corridorRight))
                    return "corridorRight: array expected";
                for (let i = 0; i < message.corridorRight.length; ++i) {
                    
                    let error = $root.may.tele_op_policy_request_t.Corridor.verify(message.corridorRight[i]);
                    if (error)
                        return "corridorRight." + error;
                }
            }
            if (message.targetObjectVertices != null && message.hasOwnProperty("targetObjectVertices")) {
                if (!Array.isArray(message.targetObjectVertices))
                    return "targetObjectVertices: array expected";
                for (let i = 0; i < message.targetObjectVertices.length; ++i) {
                    
                    let error = $root.may.tele_op_policy_request_t.TargetObject.verify(message.targetObjectVertices[i]);
                    if (error)
                        return "targetObjectVertices." + error;
                }
            }
            return null;
        };

        /**
         * Creates a tele_op_policy_request_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_policy_request_t} tele_op_policy_request_t
         */
        tele_op_policy_request_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_policy_request_t)
                
                return object;
            
            let message = new $root.may.tele_op_policy_request_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.globalUtime != null) {
                if (typeof object.globalUtime !== "object")
                    throw TypeError(".may.tele_op_policy_request_t.globalUtime: object expected");
                
                message.globalUtime = $root.may.global_time_t.fromObject(object.globalUtime);
            }
            if (object.uid != null)
                message.uid = object.uid >>> 0;
            if (object.referenceFrame != null)
                message.referenceFrame = object.referenceFrame >>> 0;
            if (object.corridorLeft) {
                if (!Array.isArray(object.corridorLeft))
                    throw TypeError(".may.tele_op_policy_request_t.corridorLeft: array expected");
                message.corridorLeft = [];
                for (let i = 0; i < object.corridorLeft.length; ++i) {
                    if (typeof object.corridorLeft[i] !== "object")
                        throw TypeError(".may.tele_op_policy_request_t.corridorLeft: object expected");
                    
                    message.corridorLeft[i] = $root.may.tele_op_policy_request_t.Corridor.fromObject(object.corridorLeft[i]);
                }
            }
            if (object.corridorRight) {
                if (!Array.isArray(object.corridorRight))
                    throw TypeError(".may.tele_op_policy_request_t.corridorRight: array expected");
                message.corridorRight = [];
                for (let i = 0; i < object.corridorRight.length; ++i) {
                    if (typeof object.corridorRight[i] !== "object")
                        throw TypeError(".may.tele_op_policy_request_t.corridorRight: object expected");
                    
                    message.corridorRight[i] = $root.may.tele_op_policy_request_t.Corridor.fromObject(object.corridorRight[i]);
                }
            }
            if (object.targetObjectVertices) {
                if (!Array.isArray(object.targetObjectVertices))
                    throw TypeError(".may.tele_op_policy_request_t.targetObjectVertices: array expected");
                message.targetObjectVertices = [];
                for (let i = 0; i < object.targetObjectVertices.length; ++i) {
                    if (typeof object.targetObjectVertices[i] !== "object")
                        throw TypeError(".may.tele_op_policy_request_t.targetObjectVertices: object expected");
                    
                    message.targetObjectVertices[i] = $root.may.tele_op_policy_request_t.TargetObject.fromObject(object.targetObjectVertices[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a tele_op_policy_request_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_policy_request_t
         * @static
         * @param {may.tele_op_policy_request_t} message tele_op_policy_request_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_policy_request_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults) {
                
                object.corridorLeft = [];
                
                object.corridorRight = [];
                
                object.targetObjectVertices = [];
            }
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.globalUtime = null;
                object.uid = 0;
                object.referenceFrame = 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.globalUtime != null && message.hasOwnProperty("globalUtime"))
                
                object.globalUtime = $root.may.global_time_t.toObject(message.globalUtime, options);
            
            if (message.uid != null && message.hasOwnProperty("uid"))
                
                object.uid = message.uid;
            
            if (message.referenceFrame != null && message.hasOwnProperty("referenceFrame"))
                
                object.referenceFrame = message.referenceFrame;
            
            if (message.corridorLeft && message.corridorLeft.length) {
                
                object.corridorLeft = [];
                
                for (let j = 0; j < message.corridorLeft.length; ++j)
                    
                    object.corridorLeft[j] = $root.may.tele_op_policy_request_t.Corridor.toObject(message.corridorLeft[j], options);
            }
            
            if (message.corridorRight && message.corridorRight.length) {
                
                object.corridorRight = [];
                
                for (let j = 0; j < message.corridorRight.length; ++j)
                    
                    object.corridorRight[j] = $root.may.tele_op_policy_request_t.Corridor.toObject(message.corridorRight[j], options);
            }
            
            if (message.targetObjectVertices && message.targetObjectVertices.length) {
                
                object.targetObjectVertices = [];
                
                for (let j = 0; j < message.targetObjectVertices.length; ++j)
                    
                    object.targetObjectVertices[j] = $root.may.tele_op_policy_request_t.TargetObject.toObject(message.targetObjectVertices[j], options);
            }
            return object;
        };

        /**
         * Converts this tele_op_policy_request_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_policy_request_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_policy_request_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        tele_op_policy_request_t.Corridor = (function() {

            /**
             * Properties of a Corridor.
             * @memberof may.tele_op_policy_request_t
             * @interface ICorridor
             * @property {Array.<number>|null} [points] Corridor points
             */

            /**
             * Constructs a new Corridor.
             * @memberof may.tele_op_policy_request_t
             * @classdesc Represents a Corridor.
             * @implements ICorridor
             * @constructor
             * @param {may.tele_op_policy_request_t.ICorridor=} [properties] Properties to set
             */
            
            function Corridor(properties) {
                
                this.points = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * Corridor points.
             * @member {Array.<number>} points
             * @memberof may.tele_op_policy_request_t.Corridor
             * @instance
             */
            Corridor.prototype.points = $util.emptyArray;

            /**
             * Creates a new Corridor instance using the specified properties.
             * @function create
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {may.tele_op_policy_request_t.ICorridor=} [properties] Properties to set
             * @returns {may.tele_op_policy_request_t.Corridor} Corridor instance
             */
            Corridor.create = function create(properties) {
                return new Corridor(properties);
            };

            /**
             * Encodes the specified Corridor message. Does not implicitly {@link may.tele_op_policy_request_t.Corridor.verify|verify} messages.
             * @function encode
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {may.tele_op_policy_request_t.ICorridor} message Corridor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Corridor.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.points != null && message.points.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (let i = 0; i < message.points.length; ++i)
                        writer.float(message.points[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified Corridor message, length delimited. Does not implicitly {@link may.tele_op_policy_request_t.Corridor.verify|verify} messages.
             * @function encodeDelimited
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {may.tele_op_policy_request_t.ICorridor} message Corridor message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            Corridor.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a Corridor message from the specified reader or buffer.
             * @function decode
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {may.tele_op_policy_request_t.Corridor} Corridor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Corridor.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_policy_request_t.Corridor();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.points && message.points.length))
                            message.points = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.points.push(reader.float());
                        } else
                            message.points.push(reader.float());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a Corridor message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {may.tele_op_policy_request_t.Corridor} Corridor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            Corridor.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a Corridor message.
             * @function verify
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            Corridor.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.points != null && message.hasOwnProperty("points")) {
                    if (!Array.isArray(message.points))
                        return "points: array expected";
                    for (let i = 0; i < message.points.length; ++i)
                        if (typeof message.points[i] !== "number")
                            return "points: number[] expected";
                }
                return null;
            };

            /**
             * Creates a Corridor message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {may.tele_op_policy_request_t.Corridor} Corridor
             */
            Corridor.fromObject = function fromObject(object) {
                
                if (object instanceof $root.may.tele_op_policy_request_t.Corridor)
                    return object;
                
                let message = new $root.may.tele_op_policy_request_t.Corridor();
                if (object.points) {
                    if (!Array.isArray(object.points))
                        throw TypeError(".may.tele_op_policy_request_t.Corridor.points: array expected");
                    message.points = [];
                    for (let i = 0; i < object.points.length; ++i)
                        message.points[i] = Number(object.points[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a Corridor message. Also converts values to other types if specified.
             * @function toObject
             * @memberof may.tele_op_policy_request_t.Corridor
             * @static
             * @param {may.tele_op_policy_request_t.Corridor} message Corridor
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            Corridor.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    
                    object.points = [];
                if (message.points && message.points.length) {
                    
                    object.points = [];
                    for (let j = 0; j < message.points.length; ++j)
                        object.points[j] = options.json && !isFinite(message.points[j]) ? String(message.points[j]) : message.points[j];
                }
                return object;
            };

            /**
             * Converts this Corridor to JSON.
             * @function toJSON
             * @memberof may.tele_op_policy_request_t.Corridor
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            Corridor.prototype.toJSON = function toJSON() {
                
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return Corridor;
        })();

        tele_op_policy_request_t.TargetObject = (function() {

            /**
             * Properties of a TargetObject.
             * @memberof may.tele_op_policy_request_t
             * @interface ITargetObject
             * @property {Array.<number>|null} [vertices] TargetObject vertices
             */

            /**
             * Constructs a new TargetObject.
             * @memberof may.tele_op_policy_request_t
             * @classdesc Represents a TargetObject.
             * @implements ITargetObject
             * @constructor
             * @param {may.tele_op_policy_request_t.ITargetObject=} [properties] Properties to set
             */
            
            function TargetObject(properties) {
                
                this.vertices = [];
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * TargetObject vertices.
             * @member {Array.<number>} vertices
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @instance
             */
            TargetObject.prototype.vertices = $util.emptyArray;

            /**
             * Creates a new TargetObject instance using the specified properties.
             * @function create
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {may.tele_op_policy_request_t.ITargetObject=} [properties] Properties to set
             * @returns {may.tele_op_policy_request_t.TargetObject} TargetObject instance
             */
            TargetObject.create = function create(properties) {
                return new TargetObject(properties);
            };

            /**
             * Encodes the specified TargetObject message. Does not implicitly {@link may.tele_op_policy_request_t.TargetObject.verify|verify} messages.
             * @function encode
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {may.tele_op_policy_request_t.ITargetObject} message TargetObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TargetObject.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.vertices != null && message.vertices.length) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork();
                    for (let i = 0; i < message.vertices.length; ++i)
                        writer.float(message.vertices[i]);
                    writer.ldelim();
                }
                return writer;
            };

            /**
             * Encodes the specified TargetObject message, length delimited. Does not implicitly {@link may.tele_op_policy_request_t.TargetObject.verify|verify} messages.
             * @function encodeDelimited
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {may.tele_op_policy_request_t.ITargetObject} message TargetObject message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            TargetObject.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a TargetObject message from the specified reader or buffer.
             * @function decode
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {may.tele_op_policy_request_t.TargetObject} TargetObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TargetObject.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_policy_request_t.TargetObject();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        if (!(message.vertices && message.vertices.length))
                            message.vertices = [];
                        if ((tag & 7) === 2) {
                            let end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.vertices.push(reader.float());
                        } else
                            message.vertices.push(reader.float());
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a TargetObject message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {may.tele_op_policy_request_t.TargetObject} TargetObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            TargetObject.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a TargetObject message.
             * @function verify
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            TargetObject.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.vertices != null && message.hasOwnProperty("vertices")) {
                    if (!Array.isArray(message.vertices))
                        return "vertices: array expected";
                    for (let i = 0; i < message.vertices.length; ++i)
                        if (typeof message.vertices[i] !== "number")
                            return "vertices: number[] expected";
                }
                return null;
            };

            /**
             * Creates a TargetObject message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {may.tele_op_policy_request_t.TargetObject} TargetObject
             */
            TargetObject.fromObject = function fromObject(object) {
                
                if (object instanceof $root.may.tele_op_policy_request_t.TargetObject)
                    return object;
                
                let message = new $root.may.tele_op_policy_request_t.TargetObject();
                if (object.vertices) {
                    if (!Array.isArray(object.vertices))
                        throw TypeError(".may.tele_op_policy_request_t.TargetObject.vertices: array expected");
                    message.vertices = [];
                    for (let i = 0; i < object.vertices.length; ++i)
                        message.vertices[i] = Number(object.vertices[i]);
                }
                return message;
            };

            /**
             * Creates a plain object from a TargetObject message. Also converts values to other types if specified.
             * @function toObject
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @static
             * @param {may.tele_op_policy_request_t.TargetObject} message TargetObject
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            TargetObject.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.arrays || options.defaults)
                    
                    object.vertices = [];
                if (message.vertices && message.vertices.length) {
                    
                    object.vertices = [];
                    for (let j = 0; j < message.vertices.length; ++j)
                        object.vertices[j] = options.json && !isFinite(message.vertices[j]) ? String(message.vertices[j]) : message.vertices[j];
                }
                return object;
            };

            /**
             * Converts this TargetObject to JSON.
             * @function toJSON
             * @memberof may.tele_op_policy_request_t.TargetObject
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            TargetObject.prototype.toJSON = function toJSON() {
                
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return TargetObject;
        })();

        return tele_op_policy_request_t;
    })();

    may.tele_op_vehicle_params_t = (function() {

        /**
         * Properties of a tele_op_vehicle_params_t.
         * @memberof may
         * @interface Itele_op_vehicle_params_t
         * @property {number|Long|null} [utime] tele_op_vehicle_params_t utime
         * @property {string|null} [softwareVersion] tele_op_vehicle_params_t softwareVersion
         * @property {string|null} [gitHash] tele_op_vehicle_params_t gitHash
         * @property {string|null} [logfileName] tele_op_vehicle_params_t logfileName
         * @property {number|Long|null} [logfileElapsedSeconds] tele_op_vehicle_params_t logfileElapsedSeconds
         * @property {string|null} [routeNetwork] tele_op_vehicle_params_t routeNetwork
         */

        /**
         * Constructs a new tele_op_vehicle_params_t.
         * @memberof may
         * @classdesc Represents a tele_op_vehicle_params_t.
         * @implements Itele_op_vehicle_params_t
         * @constructor
         * @param {may.Itele_op_vehicle_params_t=} [properties] Properties to set
         */
        
        function tele_op_vehicle_params_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_vehicle_params_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_vehicle_params_t
         * @instance
         */
        
        tele_op_vehicle_params_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_vehicle_params_t softwareVersion.
         * @member {string} softwareVersion
         * @memberof may.tele_op_vehicle_params_t
         * @instance
         */
        tele_op_vehicle_params_t.prototype.softwareVersion = "";

        /**
         * tele_op_vehicle_params_t gitHash.
         * @member {string} gitHash
         * @memberof may.tele_op_vehicle_params_t
         * @instance
         */
        tele_op_vehicle_params_t.prototype.gitHash = "";

        /**
         * tele_op_vehicle_params_t logfileName.
         * @member {string} logfileName
         * @memberof may.tele_op_vehicle_params_t
         * @instance
         */
        tele_op_vehicle_params_t.prototype.logfileName = "";

        /**
         * tele_op_vehicle_params_t logfileElapsedSeconds.
         * @member {number|Long} logfileElapsedSeconds
         * @memberof may.tele_op_vehicle_params_t
         * @instance
         */
        
        tele_op_vehicle_params_t.prototype.logfileElapsedSeconds = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_vehicle_params_t routeNetwork.
         * @member {string} routeNetwork
         * @memberof may.tele_op_vehicle_params_t
         * @instance
         */
        tele_op_vehicle_params_t.prototype.routeNetwork = "";

        /**
         * Creates a new tele_op_vehicle_params_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {may.Itele_op_vehicle_params_t=} [properties] Properties to set
         * @returns {may.tele_op_vehicle_params_t} tele_op_vehicle_params_t instance
         */
        tele_op_vehicle_params_t.create = function create(properties) {
            
            return new tele_op_vehicle_params_t(properties);
        };

        /**
         * Encodes the specified tele_op_vehicle_params_t message. Does not implicitly {@link may.tele_op_vehicle_params_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {may.Itele_op_vehicle_params_t} message tele_op_vehicle_params_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_vehicle_params_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.softwareVersion != null && Object.hasOwnProperty.call(message, "softwareVersion"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.softwareVersion);
            if (message.gitHash != null && Object.hasOwnProperty.call(message, "gitHash"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.gitHash);
            if (message.logfileName != null && Object.hasOwnProperty.call(message, "logfileName"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.logfileName);
            if (message.logfileElapsedSeconds != null && Object.hasOwnProperty.call(message, "logfileElapsedSeconds"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.logfileElapsedSeconds);
            if (message.routeNetwork != null && Object.hasOwnProperty.call(message, "routeNetwork"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.routeNetwork);
            return writer;
        };

        /**
         * Encodes the specified tele_op_vehicle_params_t message, length delimited. Does not implicitly {@link may.tele_op_vehicle_params_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {may.Itele_op_vehicle_params_t} message tele_op_vehicle_params_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_vehicle_params_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_vehicle_params_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_vehicle_params_t} tele_op_vehicle_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_vehicle_params_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_vehicle_params_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.softwareVersion = reader.string();
                    break;
                case 3:
                    message.gitHash = reader.string();
                    break;
                case 4:
                    message.logfileName = reader.string();
                    break;
                case 5:
                    message.logfileElapsedSeconds = reader.int64();
                    break;
                case 6:
                    message.routeNetwork = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_vehicle_params_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_vehicle_params_t} tele_op_vehicle_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_vehicle_params_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_vehicle_params_t message.
         * @function verify
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_vehicle_params_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.softwareVersion != null && message.hasOwnProperty("softwareVersion"))
                if (!$util.isString(message.softwareVersion))
                    return "softwareVersion: string expected";
            if (message.gitHash != null && message.hasOwnProperty("gitHash"))
                if (!$util.isString(message.gitHash))
                    return "gitHash: string expected";
            if (message.logfileName != null && message.hasOwnProperty("logfileName"))
                if (!$util.isString(message.logfileName))
                    return "logfileName: string expected";
            if (message.logfileElapsedSeconds != null && message.hasOwnProperty("logfileElapsedSeconds"))
                if (!$util.isInteger(message.logfileElapsedSeconds) && !(message.logfileElapsedSeconds && $util.isInteger(message.logfileElapsedSeconds.low) && $util.isInteger(message.logfileElapsedSeconds.high)))
                    return "logfileElapsedSeconds: integer|Long expected";
            if (message.routeNetwork != null && message.hasOwnProperty("routeNetwork"))
                if (!$util.isString(message.routeNetwork))
                    return "routeNetwork: string expected";
            return null;
        };

        /**
         * Creates a tele_op_vehicle_params_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_vehicle_params_t} tele_op_vehicle_params_t
         */
        tele_op_vehicle_params_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_vehicle_params_t)
                
                return object;
            
            let message = new $root.may.tele_op_vehicle_params_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.softwareVersion != null)
                message.softwareVersion = String(object.softwareVersion);
            if (object.gitHash != null)
                message.gitHash = String(object.gitHash);
            if (object.logfileName != null)
                message.logfileName = String(object.logfileName);
            if (object.logfileElapsedSeconds != null)
                if ($util.Long)
                    
                    (message.logfileElapsedSeconds = $util.Long.fromValue(object.logfileElapsedSeconds)).unsigned = false;
                else if (typeof object.logfileElapsedSeconds === "string")
                    message.logfileElapsedSeconds = parseInt(object.logfileElapsedSeconds, 10);
                else if (typeof object.logfileElapsedSeconds === "number")
                    message.logfileElapsedSeconds = object.logfileElapsedSeconds;
                else if (typeof object.logfileElapsedSeconds === "object")
                    message.logfileElapsedSeconds = new $util.LongBits(object.logfileElapsedSeconds.low >>> 0, object.logfileElapsedSeconds.high >>> 0).toNumber();
            if (object.routeNetwork != null)
                message.routeNetwork = String(object.routeNetwork);
            return message;
        };

        /**
         * Creates a plain object from a tele_op_vehicle_params_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_vehicle_params_t
         * @static
         * @param {may.tele_op_vehicle_params_t} message tele_op_vehicle_params_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_vehicle_params_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.softwareVersion = "";
                object.gitHash = "";
                object.logfileName = "";
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.logfileElapsedSeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.logfileElapsedSeconds = options.longs === String ? "0" : 0;
                object.routeNetwork = "";
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.softwareVersion != null && message.hasOwnProperty("softwareVersion"))
                
                object.softwareVersion = message.softwareVersion;
            
            if (message.gitHash != null && message.hasOwnProperty("gitHash"))
                
                object.gitHash = message.gitHash;
            
            if (message.logfileName != null && message.hasOwnProperty("logfileName"))
                
                object.logfileName = message.logfileName;
            
            if (message.logfileElapsedSeconds != null && message.hasOwnProperty("logfileElapsedSeconds"))
                
                if (typeof message.logfileElapsedSeconds === "number")
                    
                    object.logfileElapsedSeconds = options.longs === String ? String(message.logfileElapsedSeconds) : message.logfileElapsedSeconds;
                else
                    
                    object.logfileElapsedSeconds = options.longs === String ? $util.Long.prototype.toString.call(message.logfileElapsedSeconds) : options.longs === Number ? new $util.LongBits(message.logfileElapsedSeconds.low >>> 0, message.logfileElapsedSeconds.high >>> 0).toNumber() : message.logfileElapsedSeconds;
            
            if (message.routeNetwork != null && message.hasOwnProperty("routeNetwork"))
                
                object.routeNetwork = message.routeNetwork;
            return object;
        };

        /**
         * Converts this tele_op_vehicle_params_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_vehicle_params_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_vehicle_params_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_vehicle_params_t;
    })();

    may.tele_op_wait_command_req_t = (function() {

        /**
         * Properties of a tele_op_wait_command_req_t.
         * @memberof may
         * @interface Itele_op_wait_command_req_t
         * @property {number|Long|null} [utime] tele_op_wait_command_req_t utime
         * @property {number|Long|null} [uid] tele_op_wait_command_req_t uid
         * @property {boolean|null} [egoShouldWait] tele_op_wait_command_req_t egoShouldWait
         * @property {number|Long|null} [utimeout] tele_op_wait_command_req_t utimeout
         */

        /**
         * Constructs a new tele_op_wait_command_req_t.
         * @memberof may
         * @classdesc Represents a tele_op_wait_command_req_t.
         * @implements Itele_op_wait_command_req_t
         * @constructor
         * @param {may.Itele_op_wait_command_req_t=} [properties] Properties to set
         */
        
        function tele_op_wait_command_req_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_wait_command_req_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_wait_command_req_t
         * @instance
         */
        
        tele_op_wait_command_req_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_wait_command_req_t uid.
         * @member {number|Long} uid
         * @memberof may.tele_op_wait_command_req_t
         * @instance
         */
        
        tele_op_wait_command_req_t.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_wait_command_req_t egoShouldWait.
         * @member {boolean} egoShouldWait
         * @memberof may.tele_op_wait_command_req_t
         * @instance
         */
        tele_op_wait_command_req_t.prototype.egoShouldWait = false;

        /**
         * tele_op_wait_command_req_t utimeout.
         * @member {number|Long} utimeout
         * @memberof may.tele_op_wait_command_req_t
         * @instance
         */
        
        tele_op_wait_command_req_t.prototype.utimeout = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new tele_op_wait_command_req_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {may.Itele_op_wait_command_req_t=} [properties] Properties to set
         * @returns {may.tele_op_wait_command_req_t} tele_op_wait_command_req_t instance
         */
        tele_op_wait_command_req_t.create = function create(properties) {
            
            return new tele_op_wait_command_req_t(properties);
        };

        /**
         * Encodes the specified tele_op_wait_command_req_t message. Does not implicitly {@link may.tele_op_wait_command_req_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {may.Itele_op_wait_command_req_t} message tele_op_wait_command_req_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_wait_command_req_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.egoShouldWait != null && Object.hasOwnProperty.call(message, "egoShouldWait"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.egoShouldWait);
            if (message.utimeout != null && Object.hasOwnProperty.call(message, "utimeout"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.utimeout);
            return writer;
        };

        /**
         * Encodes the specified tele_op_wait_command_req_t message, length delimited. Does not implicitly {@link may.tele_op_wait_command_req_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {may.Itele_op_wait_command_req_t} message tele_op_wait_command_req_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_wait_command_req_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_wait_command_req_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_wait_command_req_t} tele_op_wait_command_req_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_wait_command_req_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_wait_command_req_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.egoShouldWait = reader.bool();
                    break;
                case 4:
                    message.utimeout = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_wait_command_req_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_wait_command_req_t} tele_op_wait_command_req_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_wait_command_req_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_wait_command_req_t message.
         * @function verify
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_wait_command_req_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.egoShouldWait != null && message.hasOwnProperty("egoShouldWait"))
                if (typeof message.egoShouldWait !== "boolean")
                    return "egoShouldWait: boolean expected";
            if (message.utimeout != null && message.hasOwnProperty("utimeout"))
                if (!$util.isInteger(message.utimeout) && !(message.utimeout && $util.isInteger(message.utimeout.low) && $util.isInteger(message.utimeout.high)))
                    return "utimeout: integer|Long expected";
            return null;
        };

        /**
         * Creates a tele_op_wait_command_req_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_wait_command_req_t} tele_op_wait_command_req_t
         */
        tele_op_wait_command_req_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_wait_command_req_t)
                
                return object;
            
            let message = new $root.may.tele_op_wait_command_req_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.uid != null)
                if ($util.Long)
                    
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.egoShouldWait != null)
                message.egoShouldWait = Boolean(object.egoShouldWait);
            if (object.utimeout != null)
                if ($util.Long)
                    
                    (message.utimeout = $util.Long.fromValue(object.utimeout)).unsigned = false;
                else if (typeof object.utimeout === "string")
                    message.utimeout = parseInt(object.utimeout, 10);
                else if (typeof object.utimeout === "number")
                    message.utimeout = object.utimeout;
                else if (typeof object.utimeout === "object")
                    message.utimeout = new $util.LongBits(object.utimeout.low >>> 0, object.utimeout.high >>> 0).toNumber();
            return message;
        };

        /**
         * Creates a plain object from a tele_op_wait_command_req_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_wait_command_req_t
         * @static
         * @param {may.tele_op_wait_command_req_t} message tele_op_wait_command_req_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_wait_command_req_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.egoShouldWait = false;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utimeout = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utimeout = options.longs === String ? "0" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.uid != null && message.hasOwnProperty("uid"))
                
                if (typeof message.uid === "number")
                    
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            
            if (message.egoShouldWait != null && message.hasOwnProperty("egoShouldWait"))
                
                object.egoShouldWait = message.egoShouldWait;
            
            if (message.utimeout != null && message.hasOwnProperty("utimeout"))
                
                if (typeof message.utimeout === "number")
                    
                    object.utimeout = options.longs === String ? String(message.utimeout) : message.utimeout;
                else
                    
                    object.utimeout = options.longs === String ? $util.Long.prototype.toString.call(message.utimeout) : options.longs === Number ? new $util.LongBits(message.utimeout.low >>> 0, message.utimeout.high >>> 0).toNumber() : message.utimeout;
            return object;
        };

        /**
         * Converts this tele_op_wait_command_req_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_wait_command_req_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_wait_command_req_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_wait_command_req_t;
    })();

    may.tele_op_wait_command_res_t = (function() {

        /**
         * Properties of a tele_op_wait_command_res_t.
         * @memberof may
         * @interface Itele_op_wait_command_res_t
         * @property {number|Long|null} [utime] tele_op_wait_command_res_t utime
         * @property {number|Long|null} [reqUid] tele_op_wait_command_res_t reqUid
         * @property {string|null} [error] tele_op_wait_command_res_t error
         */

        /**
         * Constructs a new tele_op_wait_command_res_t.
         * @memberof may
         * @classdesc Represents a tele_op_wait_command_res_t.
         * @implements Itele_op_wait_command_res_t
         * @constructor
         * @param {may.Itele_op_wait_command_res_t=} [properties] Properties to set
         */
        
        function tele_op_wait_command_res_t(properties) {
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_wait_command_res_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_wait_command_res_t
         * @instance
         */
        
        tele_op_wait_command_res_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_wait_command_res_t reqUid.
         * @member {number|Long} reqUid
         * @memberof may.tele_op_wait_command_res_t
         * @instance
         */
        
        tele_op_wait_command_res_t.prototype.reqUid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_wait_command_res_t error.
         * @member {string} error
         * @memberof may.tele_op_wait_command_res_t
         * @instance
         */
        tele_op_wait_command_res_t.prototype.error = "";

        /**
         * Creates a new tele_op_wait_command_res_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {may.Itele_op_wait_command_res_t=} [properties] Properties to set
         * @returns {may.tele_op_wait_command_res_t} tele_op_wait_command_res_t instance
         */
        tele_op_wait_command_res_t.create = function create(properties) {
            
            return new tele_op_wait_command_res_t(properties);
        };

        /**
         * Encodes the specified tele_op_wait_command_res_t message. Does not implicitly {@link may.tele_op_wait_command_res_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {may.Itele_op_wait_command_res_t} message tele_op_wait_command_res_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_wait_command_res_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.reqUid != null && Object.hasOwnProperty.call(message, "reqUid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.reqUid);
            if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.error);
            return writer;
        };

        /**
         * Encodes the specified tele_op_wait_command_res_t message, length delimited. Does not implicitly {@link may.tele_op_wait_command_res_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {may.Itele_op_wait_command_res_t} message tele_op_wait_command_res_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_wait_command_res_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_wait_command_res_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_wait_command_res_t} tele_op_wait_command_res_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_wait_command_res_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_wait_command_res_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.reqUid = reader.int64();
                    break;
                case 3:
                    message.error = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_wait_command_res_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_wait_command_res_t} tele_op_wait_command_res_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_wait_command_res_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_wait_command_res_t message.
         * @function verify
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_wait_command_res_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.reqUid != null && message.hasOwnProperty("reqUid"))
                if (!$util.isInteger(message.reqUid) && !(message.reqUid && $util.isInteger(message.reqUid.low) && $util.isInteger(message.reqUid.high)))
                    return "reqUid: integer|Long expected";
            if (message.error != null && message.hasOwnProperty("error"))
                if (!$util.isString(message.error))
                    return "error: string expected";
            return null;
        };

        /**
         * Creates a tele_op_wait_command_res_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_wait_command_res_t} tele_op_wait_command_res_t
         */
        tele_op_wait_command_res_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_wait_command_res_t)
                
                return object;
            
            let message = new $root.may.tele_op_wait_command_res_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.reqUid != null)
                if ($util.Long)
                    
                    (message.reqUid = $util.Long.fromValue(object.reqUid)).unsigned = false;
                else if (typeof object.reqUid === "string")
                    message.reqUid = parseInt(object.reqUid, 10);
                else if (typeof object.reqUid === "number")
                    message.reqUid = object.reqUid;
                else if (typeof object.reqUid === "object")
                    message.reqUid = new $util.LongBits(object.reqUid.low >>> 0, object.reqUid.high >>> 0).toNumber();
            if (object.error != null)
                message.error = String(object.error);
            return message;
        };

        /**
         * Creates a plain object from a tele_op_wait_command_res_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_wait_command_res_t
         * @static
         * @param {may.tele_op_wait_command_res_t} message tele_op_wait_command_res_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_wait_command_res_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.reqUid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.reqUid = options.longs === String ? "0" : 0;
                object.error = "";
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.reqUid != null && message.hasOwnProperty("reqUid"))
                
                if (typeof message.reqUid === "number")
                    
                    object.reqUid = options.longs === String ? String(message.reqUid) : message.reqUid;
                else
                    
                    object.reqUid = options.longs === String ? $util.Long.prototype.toString.call(message.reqUid) : options.longs === Number ? new $util.LongBits(message.reqUid.low >>> 0, message.reqUid.high >>> 0).toNumber() : message.reqUid;
            
            if (message.error != null && message.hasOwnProperty("error"))
                
                object.error = message.error;
            return object;
        };

        /**
         * Converts this tele_op_wait_command_res_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_wait_command_res_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_wait_command_res_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return tele_op_wait_command_res_t;
    })();

    may.tele_op_waypoint_t = (function() {

        /**
         * Properties of a tele_op_waypoint_t.
         * @memberof may
         * @interface Itele_op_waypoint_t
         * @property {number|Long|null} [utime] tele_op_waypoint_t utime
         * @property {number|Long|null} [uid] tele_op_waypoint_t uid
         * @property {number|null} [npoints] tele_op_waypoint_t npoints
         * @property {Array.<may.tele_op_waypoint_t.Idouble_point_t>|null} [path] tele_op_waypoint_t path
         * @property {boolean|null} [isActive] tele_op_waypoint_t isActive
         */

        /**
         * Constructs a new tele_op_waypoint_t.
         * @memberof may
         * @classdesc Represents a tele_op_waypoint_t.
         * @implements Itele_op_waypoint_t
         * @constructor
         * @param {may.Itele_op_waypoint_t=} [properties] Properties to set
         */
        
        function tele_op_waypoint_t(properties) {
            
            this.path = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * tele_op_waypoint_t utime.
         * @member {number|Long} utime
         * @memberof may.tele_op_waypoint_t
         * @instance
         */
        
        tele_op_waypoint_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_waypoint_t uid.
         * @member {number|Long} uid
         * @memberof may.tele_op_waypoint_t
         * @instance
         */
        
        tele_op_waypoint_t.prototype.uid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * tele_op_waypoint_t npoints.
         * @member {number} npoints
         * @memberof may.tele_op_waypoint_t
         * @instance
         */
        tele_op_waypoint_t.prototype.npoints = 0;

        /**
         * tele_op_waypoint_t path.
         * @member {Array.<may.tele_op_waypoint_t.Idouble_point_t>} path
         * @memberof may.tele_op_waypoint_t
         * @instance
         */
        tele_op_waypoint_t.prototype.path = $util.emptyArray;

        /**
         * tele_op_waypoint_t isActive.
         * @member {boolean} isActive
         * @memberof may.tele_op_waypoint_t
         * @instance
         */
        tele_op_waypoint_t.prototype.isActive = false;

        /**
         * Creates a new tele_op_waypoint_t instance using the specified properties.
         * @function create
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {may.Itele_op_waypoint_t=} [properties] Properties to set
         * @returns {may.tele_op_waypoint_t} tele_op_waypoint_t instance
         */
        tele_op_waypoint_t.create = function create(properties) {
            
            return new tele_op_waypoint_t(properties);
        };

        /**
         * Encodes the specified tele_op_waypoint_t message. Does not implicitly {@link may.tele_op_waypoint_t.verify|verify} messages.
         * @function encode
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {may.Itele_op_waypoint_t} message tele_op_waypoint_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_waypoint_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.uid != null && Object.hasOwnProperty.call(message, "uid"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.uid);
            if (message.npoints != null && Object.hasOwnProperty.call(message, "npoints"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.npoints);
            if (message.path != null && message.path.length)
                for (let i = 0; i < message.path.length; ++i)
                    
                    $root.may.tele_op_waypoint_t.double_point_t.encode(message.path[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.isActive != null && Object.hasOwnProperty.call(message, "isActive"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.isActive);
            return writer;
        };

        /**
         * Encodes the specified tele_op_waypoint_t message, length delimited. Does not implicitly {@link may.tele_op_waypoint_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {may.Itele_op_waypoint_t} message tele_op_waypoint_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        tele_op_waypoint_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a tele_op_waypoint_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.tele_op_waypoint_t} tele_op_waypoint_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_waypoint_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_waypoint_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.uid = reader.int64();
                    break;
                case 3:
                    message.npoints = reader.int32();
                    break;
                case 4:
                    if (!(message.path && message.path.length))
                        message.path = [];
                    
                    message.path.push($root.may.tele_op_waypoint_t.double_point_t.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.isActive = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a tele_op_waypoint_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.tele_op_waypoint_t} tele_op_waypoint_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        tele_op_waypoint_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a tele_op_waypoint_t message.
         * @function verify
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        tele_op_waypoint_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.uid != null && message.hasOwnProperty("uid"))
                if (!$util.isInteger(message.uid) && !(message.uid && $util.isInteger(message.uid.low) && $util.isInteger(message.uid.high)))
                    return "uid: integer|Long expected";
            if (message.npoints != null && message.hasOwnProperty("npoints"))
                if (!$util.isInteger(message.npoints))
                    return "npoints: integer expected";
            if (message.path != null && message.hasOwnProperty("path")) {
                if (!Array.isArray(message.path))
                    return "path: array expected";
                for (let i = 0; i < message.path.length; ++i) {
                    
                    let error = $root.may.tele_op_waypoint_t.double_point_t.verify(message.path[i]);
                    if (error)
                        return "path." + error;
                }
            }
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                if (typeof message.isActive !== "boolean")
                    return "isActive: boolean expected";
            return null;
        };

        /**
         * Creates a tele_op_waypoint_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.tele_op_waypoint_t} tele_op_waypoint_t
         */
        tele_op_waypoint_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.tele_op_waypoint_t)
                
                return object;
            
            let message = new $root.may.tele_op_waypoint_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            if (object.uid != null)
                if ($util.Long)
                    
                    (message.uid = $util.Long.fromValue(object.uid)).unsigned = false;
                else if (typeof object.uid === "string")
                    message.uid = parseInt(object.uid, 10);
                else if (typeof object.uid === "number")
                    message.uid = object.uid;
                else if (typeof object.uid === "object")
                    message.uid = new $util.LongBits(object.uid.low >>> 0, object.uid.high >>> 0).toNumber();
            if (object.npoints != null)
                message.npoints = object.npoints | 0;
            if (object.path) {
                if (!Array.isArray(object.path))
                    throw TypeError(".may.tele_op_waypoint_t.path: array expected");
                message.path = [];
                for (let i = 0; i < object.path.length; ++i) {
                    if (typeof object.path[i] !== "object")
                        throw TypeError(".may.tele_op_waypoint_t.path: object expected");
                    
                    message.path[i] = $root.may.tele_op_waypoint_t.double_point_t.fromObject(object.path[i]);
                }
            }
            if (object.isActive != null)
                message.isActive = Boolean(object.isActive);
            return message;
        };

        /**
         * Creates a plain object from a tele_op_waypoint_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.tele_op_waypoint_t
         * @static
         * @param {may.tele_op_waypoint_t} message tele_op_waypoint_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        tele_op_waypoint_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.path = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.uid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.uid = options.longs === String ? "0" : 0;
                object.npoints = 0;
                object.isActive = false;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.uid != null && message.hasOwnProperty("uid"))
                
                if (typeof message.uid === "number")
                    
                    object.uid = options.longs === String ? String(message.uid) : message.uid;
                else
                    
                    object.uid = options.longs === String ? $util.Long.prototype.toString.call(message.uid) : options.longs === Number ? new $util.LongBits(message.uid.low >>> 0, message.uid.high >>> 0).toNumber() : message.uid;
            
            if (message.npoints != null && message.hasOwnProperty("npoints"))
                
                object.npoints = message.npoints;
            
            if (message.path && message.path.length) {
                
                object.path = [];
                
                for (let j = 0; j < message.path.length; ++j)
                    
                    object.path[j] = $root.may.tele_op_waypoint_t.double_point_t.toObject(message.path[j], options);
            }
            
            if (message.isActive != null && message.hasOwnProperty("isActive"))
                
                object.isActive = message.isActive;
            return object;
        };

        /**
         * Converts this tele_op_waypoint_t to JSON.
         * @function toJSON
         * @memberof may.tele_op_waypoint_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        tele_op_waypoint_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        tele_op_waypoint_t.double_point_t = (function() {

            /**
             * Properties of a double_point_t.
             * @memberof may.tele_op_waypoint_t
             * @interface Idouble_point_t
             * @property {number|null} [X] double_point_t X
             * @property {number|null} [Y] double_point_t Y
             */

            /**
             * Constructs a new double_point_t.
             * @memberof may.tele_op_waypoint_t
             * @classdesc Represents a double_point_t.
             * @implements Idouble_point_t
             * @constructor
             * @param {may.tele_op_waypoint_t.Idouble_point_t=} [properties] Properties to set
             */
            
            function double_point_t(properties) {
                if (properties)
                    for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                        if (properties[keys[i]] != null)
                            
                            this[keys[i]] = properties[keys[i]];
            }

            /**
             * double_point_t X.
             * @member {number} X
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @instance
             */
            double_point_t.prototype.X = 0;

            /**
             * double_point_t Y.
             * @member {number} Y
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @instance
             */
            double_point_t.prototype.Y = 0;

            /**
             * Creates a new double_point_t instance using the specified properties.
             * @function create
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {may.tele_op_waypoint_t.Idouble_point_t=} [properties] Properties to set
             * @returns {may.tele_op_waypoint_t.double_point_t} double_point_t instance
             */
            double_point_t.create = function create(properties) {
                return new double_point_t(properties);
            };

            /**
             * Encodes the specified double_point_t message. Does not implicitly {@link may.tele_op_waypoint_t.double_point_t.verify|verify} messages.
             * @function encode
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {may.tele_op_waypoint_t.Idouble_point_t} message double_point_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            double_point_t.encode = function encode(message, writer) {
                if (!writer)
                    writer = $Writer.create();
                if (message.X != null && Object.hasOwnProperty.call(message, "X"))
                    writer.uint32(/* id 1, wireType 1 =*/9).double(message.X);
                if (message.Y != null && Object.hasOwnProperty.call(message, "Y"))
                    writer.uint32(/* id 2, wireType 1 =*/17).double(message.Y);
                return writer;
            };

            /**
             * Encodes the specified double_point_t message, length delimited. Does not implicitly {@link may.tele_op_waypoint_t.double_point_t.verify|verify} messages.
             * @function encodeDelimited
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {may.tele_op_waypoint_t.Idouble_point_t} message double_point_t message or plain object to encode
             * @param {$protobuf.Writer} [writer] Writer to encode to
             * @returns {$protobuf.Writer} Writer
             */
            double_point_t.encodeDelimited = function encodeDelimited(message, writer) {
                return this.encode(message, writer).ldelim();
            };

            /**
             * Decodes a double_point_t message from the specified reader or buffer.
             * @function decode
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @param {number} [length] Message length if known beforehand
             * @returns {may.tele_op_waypoint_t.double_point_t} double_point_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            double_point_t.decode = function decode(reader, length) {
                if (!(reader instanceof $Reader))
                    reader = $Reader.create(reader);
                
                let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.tele_op_waypoint_t.double_point_t();
                while (reader.pos < end) {
                    let tag = reader.uint32();
                    switch (tag >>> 3) {
                    case 1:
                        message.X = reader.double();
                        break;
                    case 2:
                        message.Y = reader.double();
                        break;
                    default:
                        reader.skipType(tag & 7);
                        break;
                    }
                }
                return message;
            };

            /**
             * Decodes a double_point_t message from the specified reader or buffer, length delimited.
             * @function decodeDelimited
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
             * @returns {may.tele_op_waypoint_t.double_point_t} double_point_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            double_point_t.decodeDelimited = function decodeDelimited(reader) {
                if (!(reader instanceof $Reader))
                    reader = new $Reader(reader);
                return this.decode(reader, reader.uint32());
            };

            /**
             * Verifies a double_point_t message.
             * @function verify
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {Object.<string,*>} message Plain object to verify
             * @returns {string|null} `null` if valid, otherwise the reason why it is not
             */
            double_point_t.verify = function verify(message) {
                if (typeof message !== "object" || message === null)
                    return "object expected";
                if (message.X != null && message.hasOwnProperty("X"))
                    if (typeof message.X !== "number")
                        return "X: number expected";
                if (message.Y != null && message.hasOwnProperty("Y"))
                    if (typeof message.Y !== "number")
                        return "Y: number expected";
                return null;
            };

            /**
             * Creates a double_point_t message from a plain object. Also converts values to their respective internal types.
             * @function fromObject
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {Object.<string,*>} object Plain object
             * @returns {may.tele_op_waypoint_t.double_point_t} double_point_t
             */
            double_point_t.fromObject = function fromObject(object) {
                
                if (object instanceof $root.may.tele_op_waypoint_t.double_point_t)
                    return object;
                
                let message = new $root.may.tele_op_waypoint_t.double_point_t();
                if (object.X != null)
                    message.X = Number(object.X);
                if (object.Y != null)
                    message.Y = Number(object.Y);
                return message;
            };

            /**
             * Creates a plain object from a double_point_t message. Also converts values to other types if specified.
             * @function toObject
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @static
             * @param {may.tele_op_waypoint_t.double_point_t} message double_point_t
             * @param {$protobuf.IConversionOptions} [options] Conversion options
             * @returns {Object.<string,*>} Plain object
             */
            double_point_t.toObject = function toObject(message, options) {
                if (!options)
                    options = {};
                let object = {};
                if (options.defaults) {
                    object.X = 0;
                    object.Y = 0;
                }
                if (message.X != null && message.hasOwnProperty("X"))
                    object.X = options.json && !isFinite(message.X) ? String(message.X) : message.X;
                if (message.Y != null && message.hasOwnProperty("Y"))
                    object.Y = options.json && !isFinite(message.Y) ? String(message.Y) : message.Y;
                return object;
            };

            /**
             * Converts this double_point_t to JSON.
             * @function toJSON
             * @memberof may.tele_op_waypoint_t.double_point_t
             * @instance
             * @returns {Object.<string,*>} JSON object
             */
            double_point_t.prototype.toJSON = function toJSON() {
                
                return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
            };

            return double_point_t;
        })();

        return tele_op_waypoint_t;
    })();

    may.user_input_t = (function() {

        /**
         * Properties of a user_input_t.
         * @memberof may
         * @interface Iuser_input_t
         * @property {number|Long|null} [utime] user_input_t utime
         * @property {may.user_input_t.Source|null} [source] user_input_t source
         * @property {may.user_input_t.Button|null} [buttons] user_input_t buttons
         * @property {number|null} [naxes] user_input_t naxes
         * @property {Array.<number>|null} [axes] user_input_t axes
         * @property {may.user_input_t.Channel|null} [channel] user_input_t channel
         */

        /**
         * Constructs a new user_input_t.
         * @memberof may
         * @classdesc Represents a user_input_t.
         * @implements Iuser_input_t
         * @constructor
         * @param {may.Iuser_input_t=} [properties] Properties to set
         */
        
        function user_input_t(properties) {
            
            this.axes = [];
            if (properties)
                for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * user_input_t utime.
         * @member {number|Long} utime
         * @memberof may.user_input_t
         * @instance
         */
        
        user_input_t.prototype.utime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * user_input_t source.
         * @member {may.user_input_t.Source} source
         * @memberof may.user_input_t
         * @instance
         */
        user_input_t.prototype.source = 0;

        /**
         * user_input_t buttons.
         * @member {may.user_input_t.Button} buttons
         * @memberof may.user_input_t
         * @instance
         */
        user_input_t.prototype.buttons = 0;

        /**
         * user_input_t naxes.
         * @member {number} naxes
         * @memberof may.user_input_t
         * @instance
         */
        user_input_t.prototype.naxes = 0;

        /**
         * user_input_t axes.
         * @member {Array.<number>} axes
         * @memberof may.user_input_t
         * @instance
         */
        user_input_t.prototype.axes = $util.emptyArray;

        /**
         * user_input_t channel.
         * @member {may.user_input_t.Channel} channel
         * @memberof may.user_input_t
         * @instance
         */
        user_input_t.prototype.channel = 0;

        /**
         * Creates a new user_input_t instance using the specified properties.
         * @function create
         * @memberof may.user_input_t
         * @static
         * @param {may.Iuser_input_t=} [properties] Properties to set
         * @returns {may.user_input_t} user_input_t instance
         */
        user_input_t.create = function create(properties) {
            
            return new user_input_t(properties);
        };

        /**
         * Encodes the specified user_input_t message. Does not implicitly {@link may.user_input_t.verify|verify} messages.
         * @function encode
         * @memberof may.user_input_t
         * @static
         * @param {may.Iuser_input_t} message user_input_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_input_t.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.utime != null && Object.hasOwnProperty.call(message, "utime"))
                writer.uint32(/* id 1, wireType 0 =*/8).int64(message.utime);
            if (message.source != null && Object.hasOwnProperty.call(message, "source"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.source);
            if (message.buttons != null && Object.hasOwnProperty.call(message, "buttons"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.buttons);
            if (message.naxes != null && Object.hasOwnProperty.call(message, "naxes"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.naxes);
            if (message.axes != null && message.axes.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (let i = 0; i < message.axes.length; ++i)
                    writer.double(message.axes[i]);
                writer.ldelim();
            }
            if (message.channel != null && Object.hasOwnProperty.call(message, "channel"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.channel);
            return writer;
        };

        /**
         * Encodes the specified user_input_t message, length delimited. Does not implicitly {@link may.user_input_t.verify|verify} messages.
         * @function encodeDelimited
         * @memberof may.user_input_t
         * @static
         * @param {may.Iuser_input_t} message user_input_t message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        user_input_t.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a user_input_t message from the specified reader or buffer.
         * @function decode
         * @memberof may.user_input_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {may.user_input_t} user_input_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_input_t.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            
            let end = length === undefined ? reader.len : reader.pos + length, message = new $root.may.user_input_t();
            while (reader.pos < end) {
                let tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.utime = reader.int64();
                    break;
                case 2:
                    message.source = reader.int32();
                    break;
                case 3:
                    message.buttons = reader.int32();
                    break;
                case 4:
                    message.naxes = reader.int32();
                    break;
                case 5:
                    if (!(message.axes && message.axes.length))
                        message.axes = [];
                    if ((tag & 7) === 2) {
                        let end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.axes.push(reader.double());
                    } else
                        message.axes.push(reader.double());
                    break;
                case 6:
                    message.channel = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a user_input_t message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof may.user_input_t
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {may.user_input_t} user_input_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        user_input_t.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a user_input_t message.
         * @function verify
         * @memberof may.user_input_t
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        user_input_t.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.utime != null && message.hasOwnProperty("utime"))
                if (!$util.isInteger(message.utime) && !(message.utime && $util.isInteger(message.utime.low) && $util.isInteger(message.utime.high)))
                    return "utime: integer|Long expected";
            if (message.source != null && message.hasOwnProperty("source"))
                switch (message.source) {
                default:
                    return "source: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            if (message.buttons != null && message.hasOwnProperty("buttons"))
                switch (message.buttons) {
                default:
                    return "buttons: enum value expected";
                case 0:
                case 1:
                case 2:
                case 4:
                case 8:
                case 16:
                case 32:
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    break;
                }
            if (message.naxes != null && message.hasOwnProperty("naxes"))
                if (!$util.isInteger(message.naxes))
                    return "naxes: integer expected";
            if (message.axes != null && message.hasOwnProperty("axes")) {
                if (!Array.isArray(message.axes))
                    return "axes: array expected";
                for (let i = 0; i < message.axes.length; ++i)
                    if (typeof message.axes[i] !== "number")
                        return "axes: number[] expected";
            }
            if (message.channel != null && message.hasOwnProperty("channel"))
                switch (message.channel) {
                default:
                    return "channel: enum value expected";
                case 0:
                case 1:
                case 2:
                    break;
                }
            return null;
        };

        /**
         * Creates a user_input_t message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof may.user_input_t
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {may.user_input_t} user_input_t
         */
        user_input_t.fromObject = function fromObject(object) {
            
            if (object instanceof $root.may.user_input_t)
                
                return object;
            
            let message = new $root.may.user_input_t();
            if (object.utime != null)
                if ($util.Long)
                    
                    (message.utime = $util.Long.fromValue(object.utime)).unsigned = false;
                else if (typeof object.utime === "string")
                    message.utime = parseInt(object.utime, 10);
                else if (typeof object.utime === "number")
                    message.utime = object.utime;
                else if (typeof object.utime === "object")
                    message.utime = new $util.LongBits(object.utime.low >>> 0, object.utime.high >>> 0).toNumber();
            switch (object.source) {
            case "IGNORE_SOURCE":
            case 0:
                message.source = 0;
                break;
            case "SOURCE_RX450H_KEYPAD":
            case 1:
                message.source = 1;
                break;
            case "SOURCE_GENOVATION_CP24":
            case 2:
                message.source = 2;
                break;
            }
            switch (object.buttons) {
            case "NONE":
            case 0:
                message.buttons = 0;
                break;
            case "PARK":
            case 1:
                message.buttons = 1;
                break;
            case "REVERSE":
            case 2:
                message.buttons = 2;
                break;
            case "DRIVE":
            case 4:
                message.buttons = 4;
                break;
            case "LEFT_SIGNAL":
            case 8:
                message.buttons = 8;
                break;
            case "RIGHT_SIGNAL":
            case 16:
                message.buttons = 16;
                break;
            case "HAZARDS":
            case 32:
                message.buttons = 32;
                break;
            case "HEADLIGHTS":
            case 64:
                message.buttons = 64;
                break;
            case "HIGHBEAMS":
            case 128:
                message.buttons = 128;
                break;
            case "HORN":
            case 256:
                message.buttons = 256;
                break;
            case "EXTRA":
            case 512:
                message.buttons = 512;
                break;
            case "DEFROST":
            case 1024:
                message.buttons = 1024;
                break;
            case "WIPERS":
            case 2048:
                message.buttons = 2048;
                break;
            case "AUTO":
            case 4096:
                message.buttons = 4096;
                break;
            case "FLAG_LOG":
            case 8192:
                message.buttons = 8192;
                break;
            case "RESUME":
            case 16384:
                message.buttons = 16384;
                break;
            case "STOP_SELECT":
            case 32768:
                message.buttons = 32768;
                break;
            case "BACKUP_VIEW":
            case 65536:
                message.buttons = 65536;
                break;
            case "RIDERS_MINUS":
            case 131072:
                message.buttons = 131072;
                break;
            case "RIDERS_PLUS":
            case 262144:
                message.buttons = 262144;
                break;
            case "RIDERS_TOGGLE":
            case 524288:
                message.buttons = 524288;
                break;
            case "AC":
            case 1048576:
                message.buttons = 1048576;
                break;
            case "ADK_POWEROFF":
            case 2097152:
                message.buttons = 2097152;
                break;
            }
            if (object.naxes != null)
                message.naxes = object.naxes | 0;
            if (object.axes) {
                if (!Array.isArray(object.axes))
                    throw TypeError(".may.user_input_t.axes: array expected");
                message.axes = [];
                for (let i = 0; i < object.axes.length; ++i)
                    message.axes[i] = Number(object.axes[i]);
            }
            switch (object.channel) {
            case "IGNORE_CHANNEL":
            case 0:
                message.channel = 0;
                break;
            case "USER_INPUT":
            case 1:
                message.channel = 1;
                break;
            case "USER_INPUT_FUSED":
            case 2:
                message.channel = 2;
                break;
            }
            return message;
        };

        /**
         * Creates a plain object from a user_input_t message. Also converts values to other types if specified.
         * @function toObject
         * @memberof may.user_input_t
         * @static
         * @param {may.user_input_t} message user_input_t
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        user_input_t.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            let object = {};
            if (options.arrays || options.defaults)
                
                object.axes = [];
            if (options.defaults) {
                if ($util.Long) {
                    let long = new $util.Long(0, 0, false);
                    
                    object.utime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.utime = options.longs === String ? "0" : 0;
                object.source = options.enums === String ? "IGNORE_SOURCE" : 0;
                object.buttons = options.enums === String ? "NONE" : 0;
                object.naxes = 0;
                object.channel = options.enums === String ? "IGNORE_CHANNEL" : 0;
            }
            
            if (message.utime != null && message.hasOwnProperty("utime"))
                
                if (typeof message.utime === "number")
                    
                    object.utime = options.longs === String ? String(message.utime) : message.utime;
                else
                    
                    object.utime = options.longs === String ? $util.Long.prototype.toString.call(message.utime) : options.longs === Number ? new $util.LongBits(message.utime.low >>> 0, message.utime.high >>> 0).toNumber() : message.utime;
            
            if (message.source != null && message.hasOwnProperty("source"))
                
                object.source = options.enums === String ? $root.may.user_input_t.Source[message.source] : message.source;
            
            if (message.buttons != null && message.hasOwnProperty("buttons"))
                
                object.buttons = options.enums === String ? $root.may.user_input_t.Button[message.buttons] : message.buttons;
            
            if (message.naxes != null && message.hasOwnProperty("naxes"))
                
                object.naxes = message.naxes;
            
            if (message.axes && message.axes.length) {
                
                object.axes = [];
                
                for (let j = 0; j < message.axes.length; ++j)
                    
                    object.axes[j] = options.json && !isFinite(message.axes[j]) ? String(message.axes[j]) : message.axes[j];
            }
            
            if (message.channel != null && message.hasOwnProperty("channel"))
                
                object.channel = options.enums === String ? $root.may.user_input_t.Channel[message.channel] : message.channel;
            return object;
        };

        /**
         * Converts this user_input_t to JSON.
         * @function toJSON
         * @memberof may.user_input_t
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        user_input_t.prototype.toJSON = function toJSON() {
            
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Source enum.
         * @name may.user_input_t.Source
         * @enum {number}
         * @property {number} IGNORE_SOURCE=0 IGNORE_SOURCE value
         * @property {number} SOURCE_RX450H_KEYPAD=1 SOURCE_RX450H_KEYPAD value
         * @property {number} SOURCE_GENOVATION_CP24=2 SOURCE_GENOVATION_CP24 value
         */
        user_input_t.Source = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IGNORE_SOURCE"] = 0;
            values[valuesById[1] = "SOURCE_RX450H_KEYPAD"] = 1;
            values[valuesById[2] = "SOURCE_GENOVATION_CP24"] = 2;
            return values;
        })();

        /**
         * Button enum.
         * @name may.user_input_t.Button
         * @enum {number}
         * @property {number} NONE=0 NONE value
         * @property {number} PARK=1 PARK value
         * @property {number} REVERSE=2 REVERSE value
         * @property {number} DRIVE=4 DRIVE value
         * @property {number} LEFT_SIGNAL=8 LEFT_SIGNAL value
         * @property {number} RIGHT_SIGNAL=16 RIGHT_SIGNAL value
         * @property {number} HAZARDS=32 HAZARDS value
         * @property {number} HEADLIGHTS=64 HEADLIGHTS value
         * @property {number} HIGHBEAMS=128 HIGHBEAMS value
         * @property {number} HORN=256 HORN value
         * @property {number} EXTRA=512 EXTRA value
         * @property {number} DEFROST=1024 DEFROST value
         * @property {number} WIPERS=2048 WIPERS value
         * @property {number} AUTO=4096 AUTO value
         * @property {number} FLAG_LOG=8192 FLAG_LOG value
         * @property {number} RESUME=16384 RESUME value
         * @property {number} STOP_SELECT=32768 STOP_SELECT value
         * @property {number} BACKUP_VIEW=65536 BACKUP_VIEW value
         * @property {number} RIDERS_MINUS=131072 RIDERS_MINUS value
         * @property {number} RIDERS_PLUS=262144 RIDERS_PLUS value
         * @property {number} RIDERS_TOGGLE=524288 RIDERS_TOGGLE value
         * @property {number} AC=1048576 AC value
         * @property {number} ADK_POWEROFF=2097152 ADK_POWEROFF value
         */
        user_input_t.Button = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "NONE"] = 0;
            values[valuesById[1] = "PARK"] = 1;
            values[valuesById[2] = "REVERSE"] = 2;
            values[valuesById[4] = "DRIVE"] = 4;
            values[valuesById[8] = "LEFT_SIGNAL"] = 8;
            values[valuesById[16] = "RIGHT_SIGNAL"] = 16;
            values[valuesById[32] = "HAZARDS"] = 32;
            values[valuesById[64] = "HEADLIGHTS"] = 64;
            values[valuesById[128] = "HIGHBEAMS"] = 128;
            values[valuesById[256] = "HORN"] = 256;
            values[valuesById[512] = "EXTRA"] = 512;
            values[valuesById[1024] = "DEFROST"] = 1024;
            values[valuesById[2048] = "WIPERS"] = 2048;
            values[valuesById[4096] = "AUTO"] = 4096;
            values[valuesById[8192] = "FLAG_LOG"] = 8192;
            values[valuesById[16384] = "RESUME"] = 16384;
            values[valuesById[32768] = "STOP_SELECT"] = 32768;
            values[valuesById[65536] = "BACKUP_VIEW"] = 65536;
            values[valuesById[131072] = "RIDERS_MINUS"] = 131072;
            values[valuesById[262144] = "RIDERS_PLUS"] = 262144;
            values[valuesById[524288] = "RIDERS_TOGGLE"] = 524288;
            values[valuesById[1048576] = "AC"] = 1048576;
            values[valuesById[2097152] = "ADK_POWEROFF"] = 2097152;
            return values;
        })();

        /**
         * Channel enum.
         * @name may.user_input_t.Channel
         * @enum {number}
         * @property {number} IGNORE_CHANNEL=0 IGNORE_CHANNEL value
         * @property {number} USER_INPUT=1 USER_INPUT value
         * @property {number} USER_INPUT_FUSED=2 USER_INPUT_FUSED value
         */
        user_input_t.Channel = (function() {
            const valuesById = {}, values = Object.create(valuesById);
            values[valuesById[0] = "IGNORE_CHANNEL"] = 0;
            values[valuesById[1] = "USER_INPUT"] = 1;
            values[valuesById[2] = "USER_INPUT_FUSED"] = 2;
            return values;
        })();

        return user_input_t;
    })();

    return may;
})();

export { $root as default };
