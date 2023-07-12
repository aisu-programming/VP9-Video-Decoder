import * as $protobuf from "protobufjs";
import { Long } from "protobufjs";
/** Namespace may. */
export namespace may {

    /** Properties of an autonomy_percent_t. */
    interface Iautonomy_percent_t {

        /** autonomy_percent_t utime */
        utime?: (number|Long|null);

        /** autonomy_percent_t edgeId */
        edgeId?: (number|Long|null);

        /** autonomy_percent_t percent */
        percent?: (number|null);

        /** autonomy_percent_t autoCount */
        autoCount?: (number|null);

        /** autonomy_percent_t healthyCount */
        healthyCount?: (number|null);
    }

    /** Represents an autonomy_percent_t. */
    class autonomy_percent_t implements Iautonomy_percent_t {

        /**
         * Constructs a new autonomy_percent_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iautonomy_percent_t);

        /** autonomy_percent_t utime. */
        public utime: (number|Long);

        /** autonomy_percent_t edgeId. */
        public edgeId: (number|Long);

        /** autonomy_percent_t percent. */
        public percent: number;

        /** autonomy_percent_t autoCount. */
        public autoCount: number;

        /** autonomy_percent_t healthyCount. */
        public healthyCount: number;

        /**
         * Creates a new autonomy_percent_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns autonomy_percent_t instance
         */
        public static create(properties?: may.Iautonomy_percent_t): may.autonomy_percent_t;

        /**
         * Encodes the specified autonomy_percent_t message. Does not implicitly {@link may.autonomy_percent_t.verify|verify} messages.
         * @param message autonomy_percent_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iautonomy_percent_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified autonomy_percent_t message, length delimited. Does not implicitly {@link may.autonomy_percent_t.verify|verify} messages.
         * @param message autonomy_percent_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iautonomy_percent_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an autonomy_percent_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns autonomy_percent_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.autonomy_percent_t;

        /**
         * Decodes an autonomy_percent_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns autonomy_percent_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.autonomy_percent_t;

        /**
         * Verifies an autonomy_percent_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an autonomy_percent_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns autonomy_percent_t
         */
        public static fromObject(object: { [k: string]: any }): may.autonomy_percent_t;

        /**
         * Creates a plain object from an autonomy_percent_t message. Also converts values to other types if specified.
         * @param message autonomy_percent_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.autonomy_percent_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this autonomy_percent_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a boolean_t. */
    interface Iboolean_t {

        /** boolean_t utime */
        utime?: (number|Long|null);

        /** boolean_t boolVal */
        boolVal?: (boolean|null);
    }

    /** Represents a boolean_t. */
    class boolean_t implements Iboolean_t {

        /**
         * Constructs a new boolean_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iboolean_t);

        /** boolean_t utime. */
        public utime: (number|Long);

        /** boolean_t boolVal. */
        public boolVal: boolean;

        /**
         * Creates a new boolean_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns boolean_t instance
         */
        public static create(properties?: may.Iboolean_t): may.boolean_t;

        /**
         * Encodes the specified boolean_t message. Does not implicitly {@link may.boolean_t.verify|verify} messages.
         * @param message boolean_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iboolean_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified boolean_t message, length delimited. Does not implicitly {@link may.boolean_t.verify|verify} messages.
         * @param message boolean_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iboolean_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a boolean_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns boolean_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.boolean_t;

        /**
         * Decodes a boolean_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns boolean_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.boolean_t;

        /**
         * Verifies a boolean_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a boolean_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns boolean_t
         */
        public static fromObject(object: { [k: string]: any }): may.boolean_t;

        /**
         * Creates a plain object from a boolean_t message. Also converts values to other types if specified.
         * @param message boolean_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.boolean_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this boolean_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a byte_buf_list_t. */
    interface Ibyte_buf_list_t {

        /** byte_buf_list_t utime */
        utime?: (number|Long|null);

        /** byte_buf_list_t numPackets */
        numPackets?: (number|null);

        /** byte_buf_list_t packets */
        packets?: (may.byte_buf_list_t.Ibyte_buf_t[]|null);
    }

    /** Represents a byte_buf_list_t. */
    class byte_buf_list_t implements Ibyte_buf_list_t {

        /**
         * Constructs a new byte_buf_list_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Ibyte_buf_list_t);

        /** byte_buf_list_t utime. */
        public utime: (number|Long);

        /** byte_buf_list_t numPackets. */
        public numPackets: number;

        /** byte_buf_list_t packets. */
        public packets: may.byte_buf_list_t.Ibyte_buf_t[];

        /**
         * Creates a new byte_buf_list_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns byte_buf_list_t instance
         */
        public static create(properties?: may.Ibyte_buf_list_t): may.byte_buf_list_t;

        /**
         * Encodes the specified byte_buf_list_t message. Does not implicitly {@link may.byte_buf_list_t.verify|verify} messages.
         * @param message byte_buf_list_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Ibyte_buf_list_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified byte_buf_list_t message, length delimited. Does not implicitly {@link may.byte_buf_list_t.verify|verify} messages.
         * @param message byte_buf_list_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Ibyte_buf_list_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a byte_buf_list_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns byte_buf_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.byte_buf_list_t;

        /**
         * Decodes a byte_buf_list_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns byte_buf_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.byte_buf_list_t;

        /**
         * Verifies a byte_buf_list_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a byte_buf_list_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns byte_buf_list_t
         */
        public static fromObject(object: { [k: string]: any }): may.byte_buf_list_t;

        /**
         * Creates a plain object from a byte_buf_list_t message. Also converts values to other types if specified.
         * @param message byte_buf_list_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.byte_buf_list_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this byte_buf_list_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace byte_buf_list_t {

        /** Properties of a byte_buf_t. */
        interface Ibyte_buf_t {

            /** byte_buf_t utime */
            utime?: (number|Long|null);

            /** byte_buf_t len */
            len?: (number|null);

            /** byte_buf_t buf */
            buf?: (Uint8Array|null);
        }

        /** Represents a byte_buf_t. */
        class byte_buf_t implements Ibyte_buf_t {

            /**
             * Constructs a new byte_buf_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: may.byte_buf_list_t.Ibyte_buf_t);

            /** byte_buf_t utime. */
            public utime: (number|Long);

            /** byte_buf_t len. */
            public len: number;

            /** byte_buf_t buf. */
            public buf: Uint8Array;

            /**
             * Creates a new byte_buf_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns byte_buf_t instance
             */
            public static create(properties?: may.byte_buf_list_t.Ibyte_buf_t): may.byte_buf_list_t.byte_buf_t;

            /**
             * Encodes the specified byte_buf_t message. Does not implicitly {@link may.byte_buf_list_t.byte_buf_t.verify|verify} messages.
             * @param message byte_buf_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: may.byte_buf_list_t.Ibyte_buf_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified byte_buf_t message, length delimited. Does not implicitly {@link may.byte_buf_list_t.byte_buf_t.verify|verify} messages.
             * @param message byte_buf_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: may.byte_buf_list_t.Ibyte_buf_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.byte_buf_list_t.byte_buf_t;

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.byte_buf_list_t.byte_buf_t;

            /**
             * Verifies a byte_buf_t message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a byte_buf_t message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns byte_buf_t
             */
            public static fromObject(object: { [k: string]: any }): may.byte_buf_list_t.byte_buf_t;

            /**
             * Creates a plain object from a byte_buf_t message. Also converts values to other types if specified.
             * @param message byte_buf_t
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: may.byte_buf_list_t.byte_buf_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this byte_buf_t to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a global_time_t. */
    interface Iglobal_time_t {

        /** global_time_t utime */
        utime?: (number|Long|null);

        /** global_time_t timeSys */
        timeSys?: (may.global_time_t.TIME_SYS|null);
    }

    /** Represents a global_time_t. */
    class global_time_t implements Iglobal_time_t {

        /**
         * Constructs a new global_time_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iglobal_time_t);

        /** global_time_t utime. */
        public utime: (number|Long);

        /** global_time_t timeSys. */
        public timeSys: may.global_time_t.TIME_SYS;

        /**
         * Creates a new global_time_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns global_time_t instance
         */
        public static create(properties?: may.Iglobal_time_t): may.global_time_t;

        /**
         * Encodes the specified global_time_t message. Does not implicitly {@link may.global_time_t.verify|verify} messages.
         * @param message global_time_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iglobal_time_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified global_time_t message, length delimited. Does not implicitly {@link may.global_time_t.verify|verify} messages.
         * @param message global_time_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iglobal_time_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a global_time_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns global_time_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.global_time_t;

        /**
         * Decodes a global_time_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns global_time_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.global_time_t;

        /**
         * Verifies a global_time_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a global_time_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns global_time_t
         */
        public static fromObject(object: { [k: string]: any }): may.global_time_t;

        /**
         * Creates a plain object from a global_time_t message. Also converts values to other types if specified.
         * @param message global_time_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.global_time_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this global_time_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace global_time_t {

        /** TIME_SYS enum. */
        enum TIME_SYS {
            INVALID = 0,
            LOCAL = 1,
            UTC = 2,
            TAI = 3,
            GPS = 4,
            LORANC = 5
        }
    }

    /** Properties of a gps_t. */
    interface Igps_t {

        /** gps_t utime */
        utime?: (number|Long|null);

        /** gps_t utimeGlobal */
        utimeGlobal?: (number|Long|null);

        /** gps_t lat */
        lat?: (number|null);

        /** gps_t lon */
        lon?: (number|null);

        /** gps_t elevation */
        elevation?: (number|null);

        /** gps_t horizDop */
        horizDop?: (number|null);

        /** gps_t timeDop */
        timeDop?: (number|null);

        /** gps_t nsats */
        nsats?: (number|null);

        /** gps_t errX */
        errX?: (number|null);

        /** gps_t errY */
        errY?: (number|null);

        /** gps_t errZ */
        errZ?: (number|null);

        /** gps_t status */
        status?: (may.gps_t.GPS_STATUS|null);
    }

    /** Represents a gps_t. */
    class gps_t implements Igps_t {

        /**
         * Constructs a new gps_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Igps_t);

        /** gps_t utime. */
        public utime: (number|Long);

        /** gps_t utimeGlobal. */
        public utimeGlobal: (number|Long);

        /** gps_t lat. */
        public lat: number;

        /** gps_t lon. */
        public lon: number;

        /** gps_t elevation. */
        public elevation: number;

        /** gps_t horizDop. */
        public horizDop: number;

        /** gps_t timeDop. */
        public timeDop: number;

        /** gps_t nsats. */
        public nsats: number;

        /** gps_t errX. */
        public errX: number;

        /** gps_t errY. */
        public errY: number;

        /** gps_t errZ. */
        public errZ: number;

        /** gps_t status. */
        public status: may.gps_t.GPS_STATUS;

        /**
         * Creates a new gps_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns gps_t instance
         */
        public static create(properties?: may.Igps_t): may.gps_t;

        /**
         * Encodes the specified gps_t message. Does not implicitly {@link may.gps_t.verify|verify} messages.
         * @param message gps_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Igps_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified gps_t message, length delimited. Does not implicitly {@link may.gps_t.verify|verify} messages.
         * @param message gps_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Igps_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a gps_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns gps_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.gps_t;

        /**
         * Decodes a gps_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns gps_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.gps_t;

        /**
         * Verifies a gps_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a gps_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns gps_t
         */
        public static fromObject(object: { [k: string]: any }): may.gps_t;

        /**
         * Creates a plain object from a gps_t message. Also converts values to other types if specified.
         * @param message gps_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.gps_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this gps_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace gps_t {

        /** GPS_STATUS enum. */
        enum GPS_STATUS {
            ERROR = 0,
            NO_LOCK = 1,
            LOCK = 2,
            DGPS_LOCK = 3
        }
    }

    /** Properties of a health_summary_t. */
    interface Ihealth_summary_t {

        /** health_summary_t utime */
        utime?: (number|Long|null);

        /** health_summary_t nuids */
        nuids?: (number|null);

        /** health_summary_t nfields */
        nfields?: (number|null);

        /** health_summary_t statuses */
        statuses?: (may.health_summary_t.IStatuses[]|null);
    }

    /** Represents a health_summary_t. */
    class health_summary_t implements Ihealth_summary_t {

        /**
         * Constructs a new health_summary_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Ihealth_summary_t);

        /** health_summary_t utime. */
        public utime: (number|Long);

        /** health_summary_t nuids. */
        public nuids: number;

        /** health_summary_t nfields. */
        public nfields: number;

        /** health_summary_t statuses. */
        public statuses: may.health_summary_t.IStatuses[];

        /**
         * Creates a new health_summary_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns health_summary_t instance
         */
        public static create(properties?: may.Ihealth_summary_t): may.health_summary_t;

        /**
         * Encodes the specified health_summary_t message. Does not implicitly {@link may.health_summary_t.verify|verify} messages.
         * @param message health_summary_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Ihealth_summary_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified health_summary_t message, length delimited. Does not implicitly {@link may.health_summary_t.verify|verify} messages.
         * @param message health_summary_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Ihealth_summary_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a health_summary_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns health_summary_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.health_summary_t;

        /**
         * Decodes a health_summary_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns health_summary_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.health_summary_t;

        /**
         * Verifies a health_summary_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a health_summary_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns health_summary_t
         */
        public static fromObject(object: { [k: string]: any }): may.health_summary_t;

        /**
         * Creates a plain object from a health_summary_t message. Also converts values to other types if specified.
         * @param message health_summary_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.health_summary_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this health_summary_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace health_summary_t {

        /** Properties of a Statuses. */
        interface IStatuses {

            /** Statuses items */
            items?: (string[]|null);
        }

        /** Represents a Statuses. */
        class Statuses implements IStatuses {

            /**
             * Constructs a new Statuses.
             * @param [properties] Properties to set
             */
            constructor(properties?: may.health_summary_t.IStatuses);

            /** Statuses items. */
            public items: string[];

            /**
             * Creates a new Statuses instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Statuses instance
             */
            public static create(properties?: may.health_summary_t.IStatuses): may.health_summary_t.Statuses;

            /**
             * Encodes the specified Statuses message. Does not implicitly {@link may.health_summary_t.Statuses.verify|verify} messages.
             * @param message Statuses message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: may.health_summary_t.IStatuses, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Statuses message, length delimited. Does not implicitly {@link may.health_summary_t.Statuses.verify|verify} messages.
             * @param message Statuses message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: may.health_summary_t.IStatuses, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Statuses message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Statuses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.health_summary_t.Statuses;

            /**
             * Decodes a Statuses message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Statuses
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.health_summary_t.Statuses;

            /**
             * Verifies a Statuses message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Statuses message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Statuses
             */
            public static fromObject(object: { [k: string]: any }): may.health_summary_t.Statuses;

            /**
             * Creates a plain object from a Statuses message. Also converts values to other types if specified.
             * @param message Statuses
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: may.health_summary_t.Statuses, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Statuses to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** StatusesIdx enum. */
        enum StatusesIdx {
            MONITOR_NAME = 0,
            MAX_RUNLEVEL = 1,
            STATUS = 2,
            ERROR_MSG = 3
        }
    }

    /** Properties of a heartbeat_t. */
    interface Iheartbeat_t {

        /** heartbeat_t utime */
        utime?: (number|Long|null);

        /** heartbeat_t sourceUtime */
        sourceUtime?: (number|Long|null);
    }

    /** Represents a heartbeat_t. */
    class heartbeat_t implements Iheartbeat_t {

        /**
         * Constructs a new heartbeat_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iheartbeat_t);

        /** heartbeat_t utime. */
        public utime: (number|Long);

        /** heartbeat_t sourceUtime. */
        public sourceUtime: (number|Long);

        /**
         * Creates a new heartbeat_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns heartbeat_t instance
         */
        public static create(properties?: may.Iheartbeat_t): may.heartbeat_t;

        /**
         * Encodes the specified heartbeat_t message. Does not implicitly {@link may.heartbeat_t.verify|verify} messages.
         * @param message heartbeat_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iheartbeat_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified heartbeat_t message, length delimited. Does not implicitly {@link may.heartbeat_t.verify|verify} messages.
         * @param message heartbeat_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iheartbeat_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a heartbeat_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns heartbeat_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.heartbeat_t;

        /**
         * Decodes a heartbeat_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns heartbeat_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.heartbeat_t;

        /**
         * Verifies a heartbeat_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a heartbeat_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns heartbeat_t
         */
        public static fromObject(object: { [k: string]: any }): may.heartbeat_t;

        /**
         * Creates a plain object from a heartbeat_t message. Also converts values to other types if specified.
         * @param message heartbeat_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.heartbeat_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this heartbeat_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an image_sequence_t. */
    interface Iimage_sequence_t {

        /** image_sequence_t images */
        images?: (may.Iimage_t[]|null);
    }

    /** Represents an image_sequence_t. */
    class image_sequence_t implements Iimage_sequence_t {

        /**
         * Constructs a new image_sequence_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iimage_sequence_t);

        /** image_sequence_t images. */
        public images: may.Iimage_t[];

        /**
         * Creates a new image_sequence_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns image_sequence_t instance
         */
        public static create(properties?: may.Iimage_sequence_t): may.image_sequence_t;

        /**
         * Encodes the specified image_sequence_t message. Does not implicitly {@link may.image_sequence_t.verify|verify} messages.
         * @param message image_sequence_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iimage_sequence_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified image_sequence_t message, length delimited. Does not implicitly {@link may.image_sequence_t.verify|verify} messages.
         * @param message image_sequence_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iimage_sequence_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an image_sequence_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns image_sequence_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.image_sequence_t;

        /**
         * Decodes an image_sequence_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns image_sequence_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.image_sequence_t;

        /**
         * Verifies an image_sequence_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an image_sequence_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns image_sequence_t
         */
        public static fromObject(object: { [k: string]: any }): may.image_sequence_t;

        /**
         * Creates a plain object from an image_sequence_t message. Also converts values to other types if specified.
         * @param message image_sequence_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.image_sequence_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this image_sequence_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an image_t. */
    interface Iimage_t {

        /** image_t utime */
        utime?: (number|Long|null);

        /** image_t width */
        width?: (number|null);

        /** image_t height */
        height?: (number|null);

        /** image_t rowStride */
        rowStride?: (number|null);

        /** image_t pixelformat */
        pixelformat?: (number|null);

        /** image_t data */
        data?: (Uint8Array|null);

        /** image_t encoding */
        encoding?: (may.image_t.Encoding|null);

        /** image_t timestamp */
        timestamp?: (number|Long|null);

        /** image_t duration */
        duration?: (number|Long|null);

        /** image_t frameType */
        frameType?: (may.image_t.FrameType|null);

        /** image_t webCodec */
        webCodec?: (string|null);
    }

    /** Represents an image_t. */
    class image_t implements Iimage_t {

        /**
         * Constructs a new image_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iimage_t);

        /** image_t utime. */
        public utime: (number|Long);

        /** image_t width. */
        public width: number;

        /** image_t height. */
        public height: number;

        /** image_t rowStride. */
        public rowStride: number;

        /** image_t pixelformat. */
        public pixelformat: number;

        /** image_t data. */
        public data: Uint8Array;

        /** image_t encoding. */
        public encoding: may.image_t.Encoding;

        /** image_t timestamp. */
        public timestamp: (number|Long);

        /** image_t duration. */
        public duration: (number|Long);

        /** image_t frameType. */
        public frameType: may.image_t.FrameType;

        /** image_t webCodec. */
        public webCodec: string;

        /**
         * Creates a new image_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns image_t instance
         */
        public static create(properties?: may.Iimage_t): may.image_t;

        /**
         * Encodes the specified image_t message. Does not implicitly {@link may.image_t.verify|verify} messages.
         * @param message image_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iimage_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified image_t message, length delimited. Does not implicitly {@link may.image_t.verify|verify} messages.
         * @param message image_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iimage_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an image_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns image_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.image_t;

        /**
         * Decodes an image_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns image_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.image_t;

        /**
         * Verifies an image_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an image_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns image_t
         */
        public static fromObject(object: { [k: string]: any }): may.image_t;

        /**
         * Creates a plain object from an image_t message. Also converts values to other types if specified.
         * @param message image_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.image_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this image_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace image_t {

        /** Encoding enum. */
        enum Encoding {
            ENCODING_UNKNOWN = 0,
            JPEG = 1,
            VP8 = 2,
            VP9 = 3
        }

        /** FrameType enum. */
        enum FrameType {
            TYPE_UNKNOWN = 0,
            KEY = 1,
            DELTA = 2
        }
    }

    /** Properties of a lidar_sweep_t. */
    interface Ilidar_sweep_t {

        /** lidar_sweep_t utime */
        utime?: (number|Long|null);

        /** lidar_sweep_t numPackets */
        numPackets?: (number|null);

        /** lidar_sweep_t msgNum */
        msgNum?: (number|null);

        /** lidar_sweep_t sweepNum */
        sweepNum?: (number|null);

        /** lidar_sweep_t packets */
        packets?: (may.lidar_sweep_t.Ibyte_buf_t[]|null);
    }

    /** Represents a lidar_sweep_t. */
    class lidar_sweep_t implements Ilidar_sweep_t {

        /**
         * Constructs a new lidar_sweep_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Ilidar_sweep_t);

        /** lidar_sweep_t utime. */
        public utime: (number|Long);

        /** lidar_sweep_t numPackets. */
        public numPackets: number;

        /** lidar_sweep_t msgNum. */
        public msgNum: number;

        /** lidar_sweep_t sweepNum. */
        public sweepNum: number;

        /** lidar_sweep_t packets. */
        public packets: may.lidar_sweep_t.Ibyte_buf_t[];

        /**
         * Creates a new lidar_sweep_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns lidar_sweep_t instance
         */
        public static create(properties?: may.Ilidar_sweep_t): may.lidar_sweep_t;

        /**
         * Encodes the specified lidar_sweep_t message. Does not implicitly {@link may.lidar_sweep_t.verify|verify} messages.
         * @param message lidar_sweep_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Ilidar_sweep_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified lidar_sweep_t message, length delimited. Does not implicitly {@link may.lidar_sweep_t.verify|verify} messages.
         * @param message lidar_sweep_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Ilidar_sweep_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a lidar_sweep_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns lidar_sweep_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.lidar_sweep_t;

        /**
         * Decodes a lidar_sweep_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns lidar_sweep_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.lidar_sweep_t;

        /**
         * Verifies a lidar_sweep_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a lidar_sweep_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns lidar_sweep_t
         */
        public static fromObject(object: { [k: string]: any }): may.lidar_sweep_t;

        /**
         * Creates a plain object from a lidar_sweep_t message. Also converts values to other types if specified.
         * @param message lidar_sweep_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.lidar_sweep_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this lidar_sweep_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace lidar_sweep_t {

        /** Properties of a byte_buf_t. */
        interface Ibyte_buf_t {

            /** byte_buf_t utime */
            utime?: (number|Long|null);

            /** byte_buf_t len */
            len?: (number|null);

            /** byte_buf_t buf */
            buf?: (Uint8Array|null);
        }

        /** Represents a byte_buf_t. */
        class byte_buf_t implements Ibyte_buf_t {

            /**
             * Constructs a new byte_buf_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: may.lidar_sweep_t.Ibyte_buf_t);

            /** byte_buf_t utime. */
            public utime: (number|Long);

            /** byte_buf_t len. */
            public len: number;

            /** byte_buf_t buf. */
            public buf: Uint8Array;

            /**
             * Creates a new byte_buf_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns byte_buf_t instance
             */
            public static create(properties?: may.lidar_sweep_t.Ibyte_buf_t): may.lidar_sweep_t.byte_buf_t;

            /**
             * Encodes the specified byte_buf_t message. Does not implicitly {@link may.lidar_sweep_t.byte_buf_t.verify|verify} messages.
             * @param message byte_buf_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: may.lidar_sweep_t.Ibyte_buf_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified byte_buf_t message, length delimited. Does not implicitly {@link may.lidar_sweep_t.byte_buf_t.verify|verify} messages.
             * @param message byte_buf_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: may.lidar_sweep_t.Ibyte_buf_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.lidar_sweep_t.byte_buf_t;

            /**
             * Decodes a byte_buf_t message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns byte_buf_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.lidar_sweep_t.byte_buf_t;

            /**
             * Verifies a byte_buf_t message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a byte_buf_t message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns byte_buf_t
             */
            public static fromObject(object: { [k: string]: any }): may.lidar_sweep_t.byte_buf_t;

            /**
             * Creates a plain object from a byte_buf_t message. Also converts values to other types if specified.
             * @param message byte_buf_t
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: may.lidar_sweep_t.byte_buf_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this byte_buf_t to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a platform_health_list_t. */
    interface Iplatform_health_list_t {

        /** platform_health_list_t utime */
        utime?: (number|Long|null);

        /** platform_health_list_t nparams */
        nparams?: (number|null);

        /** platform_health_list_t params */
        params?: (may.Iplatform_health_t[]|null);
    }

    /** Represents a platform_health_list_t. */
    class platform_health_list_t implements Iplatform_health_list_t {

        /**
         * Constructs a new platform_health_list_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iplatform_health_list_t);

        /** platform_health_list_t utime. */
        public utime: (number|Long);

        /** platform_health_list_t nparams. */
        public nparams: number;

        /** platform_health_list_t params. */
        public params: may.Iplatform_health_t[];

        /**
         * Creates a new platform_health_list_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns platform_health_list_t instance
         */
        public static create(properties?: may.Iplatform_health_list_t): may.platform_health_list_t;

        /**
         * Encodes the specified platform_health_list_t message. Does not implicitly {@link may.platform_health_list_t.verify|verify} messages.
         * @param message platform_health_list_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iplatform_health_list_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified platform_health_list_t message, length delimited. Does not implicitly {@link may.platform_health_list_t.verify|verify} messages.
         * @param message platform_health_list_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iplatform_health_list_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a platform_health_list_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns platform_health_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.platform_health_list_t;

        /**
         * Decodes a platform_health_list_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns platform_health_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.platform_health_list_t;

        /**
         * Verifies a platform_health_list_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a platform_health_list_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns platform_health_list_t
         */
        public static fromObject(object: { [k: string]: any }): may.platform_health_list_t;

        /**
         * Creates a plain object from a platform_health_list_t message. Also converts values to other types if specified.
         * @param message platform_health_list_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.platform_health_list_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this platform_health_list_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a platform_health_t. */
    interface Iplatform_health_t {

        /** platform_health_t groupId */
        groupId?: (number|null);

        /** platform_health_t valueId */
        valueId?: (number|null);

        /** platform_health_t value */
        value?: (number|null);
    }

    /** Represents a platform_health_t. */
    class platform_health_t implements Iplatform_health_t {

        /**
         * Constructs a new platform_health_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iplatform_health_t);

        /** platform_health_t groupId. */
        public groupId: number;

        /** platform_health_t valueId. */
        public valueId: number;

        /** platform_health_t value. */
        public value: number;

        /**
         * Creates a new platform_health_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns platform_health_t instance
         */
        public static create(properties?: may.Iplatform_health_t): may.platform_health_t;

        /**
         * Encodes the specified platform_health_t message. Does not implicitly {@link may.platform_health_t.verify|verify} messages.
         * @param message platform_health_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iplatform_health_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified platform_health_t message, length delimited. Does not implicitly {@link may.platform_health_t.verify|verify} messages.
         * @param message platform_health_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iplatform_health_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a platform_health_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns platform_health_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.platform_health_t;

        /**
         * Decodes a platform_health_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns platform_health_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.platform_health_t;

        /**
         * Verifies a platform_health_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a platform_health_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns platform_health_t
         */
        public static fromObject(object: { [k: string]: any }): may.platform_health_t;

        /**
         * Creates a plain object from a platform_health_t message. Also converts values to other types if specified.
         * @param message platform_health_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.platform_health_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this platform_health_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace platform_health_t {

        /** Group Names */
        enum GID {
            UNKNOWN = 0,
            COMPUTE = 1,
            STORAGE = 2,
            POWER = 3,
            PROCESS = 4,
            SOFTWARE = 5
        }

        /** GID_COMPUTE enum. */
        enum GID_COMPUTE {
            GID_COMPUTE_UNKNOWN = 0,
            VID_LOAD_1MIN = 1,
            VID_LOAD_5MIN = 2,
            VID_LOAD_15MIN = 3,
            VID_UPTIME_SECONDS = 4,
            VID_RAM_USED_MB = 5,
            VID_RAM_TOTAL_MB = 6,
            VID_SWAP_USED_MB = 7,
            VID_SWAP_TOTAL_MB = 8,
            VID_TEMP_THERMAL_ZONE_ACPI = 9,
            VID_TEMP_THERMAL_ZONE_PCH = 10,
            VID_TEMP_THERMAL_ZONE_X86_PKG = 11,
            VID_TEMP_THERMAL_ZONE_IWLWIFI = 12,
            VID_TEMP_THERMAL_ZONE_BCM2835 = 13,
            VID_TEMP_THERMAL_ZONE_CPUTHERMAL = 14
        }

        /** GID_STORAGE enum. */
        enum GID_STORAGE {
            GID_STORAGE_UNKNOWN = 0,
            VID_DISK_INT_USED_MB = 1,
            VID_DISK_INT_TOTAL_MB = 2,
            VID_DISK_EXT_USED_MB = 3,
            VID_DISK_EXT_TOTAL_MB = 4
        }

        /** GID_POWER */
        enum GID_POWER {
            GID_POWER_UNKNOWN = 0,
            VID_AC_STATUS = 1,
            VID_CHARGING_STATUS = 2,
            VID_BATT_PLT_ENERGY_AVAIL_WH = 3,
            VID_BATT_PLT_ENERGY_FULL_WH = 4,
            VID_BATT_PLT_MILLIVOLT_NOW = 5,
            VID_BATT_PLT_MILLIVOLT_NOMINAL = 6,
            VID_BATT_COMP_ENERGY_AVAIL_WH = 7,
            VID_BATT_COMP_ENERGY_FULL_WH = 8,
            VID_BATT_COMP_MILLIVOLT_NOW = 9,
            VID_BATT_COMP_MILLIVOLT_NOMINAL = 10,
            VID_BATT_PLT_PERCENT = 11,
            VID_BATT_COMP_PERCENT = 12,
            VID_BATT_PLT_TEMPERATURE = 13,
            VID_BATT_COMP_TEMPERATURE = 14,
            VID_BATT_PLT_DISCHARGE = 15,
            VID_BATT_COMP_DISCHARGE = 16,
            VID_BATT_PLT_CELL_TEMPERATURE_MIN = 17,
            VID_BATT_PLT_CELL_TEMPERATURE_MAX = 18
        }

        /**
         * Lower numbers are more severe, and programs should be able to depend on
         * these statuses remaining ordered.
         *
         * Note: these were added with the intent of reporting the status of critical
         * processes but they are not currently used. jimpri - 20181105
         */
        enum GID_PROCESS_VAL_PROC {
            FATAL = 0,
            ERROR = 1,
            WARN = 2,
            OKAY = 3
        }

        /** GID_PROCESS_VID_PROD enum. */
        enum GID_PROCESS_VID_PROD {
            GID_PROCESS_VID_PROD_UNKNOWN = 0,
            REPORTING = 1,
            LOGGING = 2,
            HEALTH_REPORTER_START_TIME = 3
        }

        /** GID_SOFTWARE enum. */
        enum GID_SOFTWARE {
            GID_SOFTWARE_UNKNOWN = 0,
            VERSION_1 = 1,
            VERSION_2 = 2,
            VERSION_3 = 3
        }
    }

    /** Properties of a policy_state_t. */
    interface Ipolicy_state_t {

        /** policy_state_t utime */
        utime?: (number|Long|null);

        /** policy_state_t activePolicy */
        activePolicy?: (string|null);

        /** policy_state_t policyCostMap */
        policyCostMap?: ({ [k: string]: number }|null);
    }

    /** Represents a policy_state_t. */
    class policy_state_t implements Ipolicy_state_t {

        /**
         * Constructs a new policy_state_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Ipolicy_state_t);

        /** policy_state_t utime. */
        public utime: (number|Long);

        /** policy_state_t activePolicy. */
        public activePolicy: string;

        /** policy_state_t policyCostMap. */
        public policyCostMap: { [k: string]: number };

        /**
         * Creates a new policy_state_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns policy_state_t instance
         */
        public static create(properties?: may.Ipolicy_state_t): may.policy_state_t;

        /**
         * Encodes the specified policy_state_t message. Does not implicitly {@link may.policy_state_t.verify|verify} messages.
         * @param message policy_state_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Ipolicy_state_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified policy_state_t message, length delimited. Does not implicitly {@link may.policy_state_t.verify|verify} messages.
         * @param message policy_state_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Ipolicy_state_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a policy_state_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns policy_state_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.policy_state_t;

        /**
         * Decodes a policy_state_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns policy_state_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.policy_state_t;

        /**
         * Verifies a policy_state_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a policy_state_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns policy_state_t
         */
        public static fromObject(object: { [k: string]: any }): may.policy_state_t;

        /**
         * Creates a plain object from a policy_state_t message. Also converts values to other types if specified.
         * @param message policy_state_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.policy_state_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this policy_state_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a polygon_t. */
    interface Ipolygon_t {

        /** < The points objects */
        pts?: (may.polygon_t.IPoints[]|null);

        /** polygon_t height */
        height?: (number|null);
    }

    /**
     * A 2D polygon. A polygon is defined by a sequence of points specified in CCW
     * order. The polygon is implicitly closed, with an implied edge between the last
     * and first points
     */
    class polygon_t implements Ipolygon_t {

        /**
         * Constructs a new polygon_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Ipolygon_t);

        /** < The points objects */
        public pts: may.polygon_t.IPoints[];

        /** polygon_t height. */
        public height: number;

        /**
         * Creates a new polygon_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns polygon_t instance
         */
        public static create(properties?: may.Ipolygon_t): may.polygon_t;

        /**
         * Encodes the specified polygon_t message. Does not implicitly {@link may.polygon_t.verify|verify} messages.
         * @param message polygon_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Ipolygon_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified polygon_t message, length delimited. Does not implicitly {@link may.polygon_t.verify|verify} messages.
         * @param message polygon_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Ipolygon_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a polygon_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns polygon_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.polygon_t;

        /**
         * Decodes a polygon_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns polygon_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.polygon_t;

        /**
         * Verifies a polygon_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a polygon_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns polygon_t
         */
        public static fromObject(object: { [k: string]: any }): may.polygon_t;

        /**
         * Creates a plain object from a polygon_t message. Also converts values to other types if specified.
         * @param message polygon_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.polygon_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this polygon_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace polygon_t {

        /** Properties of a Points. */
        interface IPoints {

            /** Points points */
            points?: (number[]|null);
        }

        /** Represents a Points. */
        class Points implements IPoints {

            /**
             * Constructs a new Points.
             * @param [properties] Properties to set
             */
            constructor(properties?: may.polygon_t.IPoints);

            /** Points points. */
            public points: number[];

            /**
             * Creates a new Points instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Points instance
             */
            public static create(properties?: may.polygon_t.IPoints): may.polygon_t.Points;

            /**
             * Encodes the specified Points message. Does not implicitly {@link may.polygon_t.Points.verify|verify} messages.
             * @param message Points message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: may.polygon_t.IPoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Points message, length delimited. Does not implicitly {@link may.polygon_t.Points.verify|verify} messages.
             * @param message Points message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: may.polygon_t.IPoints, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Points message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Points
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.polygon_t.Points;

            /**
             * Decodes a Points message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Points
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.polygon_t.Points;

            /**
             * Verifies a Points message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Points message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Points
             */
            public static fromObject(object: { [k: string]: any }): may.polygon_t.Points;

            /**
             * Creates a plain object from a Points message. Also converts values to other types if specified.
             * @param message Points
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: may.polygon_t.Points, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Points to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a pose_t. */
    interface Ipose_t {

        /** pose_t utime */
        utime?: (number|Long|null);

        /** pose_t pos */
        pos?: (number[]|null);

        /** pose_t quat */
        quat?: (number[]|null);

        /** pose_t vel */
        vel?: (number[]|null);

        /** pose_t avel */
        avel?: (number[]|null);

        /** pose_t acc */
        acc?: (number[]|null);
    }

    /** Represents a pose_t. */
    class pose_t implements Ipose_t {

        /**
         * Constructs a new pose_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Ipose_t);

        /** pose_t utime. */
        public utime: (number|Long);

        /** pose_t pos. */
        public pos: number[];

        /** pose_t quat. */
        public quat: number[];

        /** pose_t vel. */
        public vel: number[];

        /** pose_t avel. */
        public avel: number[];

        /** pose_t acc. */
        public acc: number[];

        /**
         * Creates a new pose_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns pose_t instance
         */
        public static create(properties?: may.Ipose_t): may.pose_t;

        /**
         * Encodes the specified pose_t message. Does not implicitly {@link may.pose_t.verify|verify} messages.
         * @param message pose_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Ipose_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified pose_t message, length delimited. Does not implicitly {@link may.pose_t.verify|verify} messages.
         * @param message pose_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Ipose_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a pose_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns pose_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.pose_t;

        /**
         * Decodes a pose_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns pose_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.pose_t;

        /**
         * Verifies a pose_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a pose_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns pose_t
         */
        public static fromObject(object: { [k: string]: any }): may.pose_t;

        /**
         * Creates a plain object from a pose_t message. Also converts values to other types if specified.
         * @param message pose_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.pose_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this pose_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a quic_wrapper. */
    interface Iquic_wrapper {

        /** quic_wrapper utime */
        utime?: (number|Long|null);

        /** quic_wrapper data */
        data?: (Uint8Array|null);

        /** quic_wrapper mqttTopic */
        mqttTopic?: (string|null);

        /** quic_wrapper compression */
        compression?: (may.quic_wrapper.Compression|null);
    }

    /** Represents a quic_wrapper. */
    class quic_wrapper implements Iquic_wrapper {

        /**
         * Constructs a new quic_wrapper.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iquic_wrapper);

        /** quic_wrapper utime. */
        public utime: (number|Long);

        /** quic_wrapper data. */
        public data: Uint8Array;

        /** quic_wrapper mqttTopic. */
        public mqttTopic: string;

        /** quic_wrapper compression. */
        public compression: may.quic_wrapper.Compression;

        /**
         * Creates a new quic_wrapper instance using the specified properties.
         * @param [properties] Properties to set
         * @returns quic_wrapper instance
         */
        public static create(properties?: may.Iquic_wrapper): may.quic_wrapper;

        /**
         * Encodes the specified quic_wrapper message. Does not implicitly {@link may.quic_wrapper.verify|verify} messages.
         * @param message quic_wrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iquic_wrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified quic_wrapper message, length delimited. Does not implicitly {@link may.quic_wrapper.verify|verify} messages.
         * @param message quic_wrapper message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iquic_wrapper, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a quic_wrapper message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns quic_wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.quic_wrapper;

        /**
         * Decodes a quic_wrapper message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns quic_wrapper
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.quic_wrapper;

        /**
         * Verifies a quic_wrapper message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a quic_wrapper message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns quic_wrapper
         */
        public static fromObject(object: { [k: string]: any }): may.quic_wrapper;

        /**
         * Creates a plain object from a quic_wrapper message. Also converts values to other types if specified.
         * @param message quic_wrapper
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.quic_wrapper, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this quic_wrapper to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace quic_wrapper {

        /** Compression enum. */
        enum Compression {
            NONE = 0,
            ZSTD = 1
        }
    }

    /** Properties of a resume_t. */
    interface Iresume_t {

        /** resume_t utime */
        utime?: (number|Long|null);

        /** resume_t resume */
        resume?: (boolean|null);
    }

    /** Represents a resume_t. */
    class resume_t implements Iresume_t {

        /**
         * Constructs a new resume_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iresume_t);

        /** resume_t utime. */
        public utime: (number|Long);

        /** resume_t resume. */
        public resume: boolean;

        /**
         * Creates a new resume_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns resume_t instance
         */
        public static create(properties?: may.Iresume_t): may.resume_t;

        /**
         * Encodes the specified resume_t message. Does not implicitly {@link may.resume_t.verify|verify} messages.
         * @param message resume_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iresume_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified resume_t message, length delimited. Does not implicitly {@link may.resume_t.verify|verify} messages.
         * @param message resume_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iresume_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a resume_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns resume_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.resume_t;

        /**
         * Decodes a resume_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns resume_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.resume_t;

        /**
         * Verifies a resume_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a resume_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns resume_t
         */
        public static fromObject(object: { [k: string]: any }): may.resume_t;

        /**
         * Creates a plain object from a resume_t message. Also converts values to other types if specified.
         * @param message resume_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.resume_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this resume_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a route_location_t. */
    interface Iroute_location_t {

        /** route_location_t utime */
        utime?: (number|Long|null);

        /** route_location_t layerId */
        layerId?: ((number|Long)[]|null);

        /** route_location_t lla */
        lla?: (number[]|null);
    }

    /**
     * A route location is the location of the vehicle in its current route network, along with
     * the corresponding estimate of the [lat,lon,altitude] (lla) for the current navigation edge.
     *
     * The lla is computed using the coordinates of the navigation edge, which uses the full
     * localization pipeline, so it will be a much more stable estimate than any sort of GPS
     * signal.
     */
    class route_location_t implements Iroute_location_t {

        /**
         * Constructs a new route_location_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iroute_location_t);

        /** route_location_t utime. */
        public utime: (number|Long);

        /** route_location_t layerId. */
        public layerId: (number|Long)[];

        /** route_location_t lla. */
        public lla: number[];

        /**
         * Creates a new route_location_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns route_location_t instance
         */
        public static create(properties?: may.Iroute_location_t): may.route_location_t;

        /**
         * Encodes the specified route_location_t message. Does not implicitly {@link may.route_location_t.verify|verify} messages.
         * @param message route_location_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iroute_location_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified route_location_t message, length delimited. Does not implicitly {@link may.route_location_t.verify|verify} messages.
         * @param message route_location_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iroute_location_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a route_location_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns route_location_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.route_location_t;

        /**
         * Decodes a route_location_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns route_location_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.route_location_t;

        /**
         * Verifies a route_location_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a route_location_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns route_location_t
         */
        public static fromObject(object: { [k: string]: any }): may.route_location_t;

        /**
         * Creates a plain object from a route_location_t message. Also converts values to other types if specified.
         * @param message route_location_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.route_location_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this route_location_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a runlevel_t. */
    interface Irunlevel_t {

        /** runlevel_t utime */
        utime?: (number|Long|null);

        /** runlevel_t runlevel */
        runlevel?: (may.runlevel_t.RunLevel|null);

        /** runlevel_t healthRunlevel */
        healthRunlevel?: (may.runlevel_t.RunLevel|null);

        /** runlevel_t requestedRunlevel */
        requestedRunlevel?: (may.runlevel_t.RunLevel|null);
    }

    /** Represents a runlevel_t. */
    class runlevel_t implements Irunlevel_t {

        /**
         * Constructs a new runlevel_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Irunlevel_t);

        /** runlevel_t utime. */
        public utime: (number|Long);

        /** runlevel_t runlevel. */
        public runlevel: may.runlevel_t.RunLevel;

        /** runlevel_t healthRunlevel. */
        public healthRunlevel: may.runlevel_t.RunLevel;

        /** runlevel_t requestedRunlevel. */
        public requestedRunlevel: may.runlevel_t.RunLevel;

        /**
         * Creates a new runlevel_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns runlevel_t instance
         */
        public static create(properties?: may.Irunlevel_t): may.runlevel_t;

        /**
         * Encodes the specified runlevel_t message. Does not implicitly {@link may.runlevel_t.verify|verify} messages.
         * @param message runlevel_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Irunlevel_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified runlevel_t message, length delimited. Does not implicitly {@link may.runlevel_t.verify|verify} messages.
         * @param message runlevel_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Irunlevel_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a runlevel_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns runlevel_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.runlevel_t;

        /**
         * Decodes a runlevel_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns runlevel_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.runlevel_t;

        /**
         * Verifies a runlevel_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a runlevel_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns runlevel_t
         */
        public static fromObject(object: { [k: string]: any }): may.runlevel_t;

        /**
         * Creates a plain object from a runlevel_t message. Also converts values to other types if specified.
         * @param message runlevel_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.runlevel_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this runlevel_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace runlevel_t {

        /** RunLevel enum. */
        enum RunLevel {
            IGNORE = 0,
            SERVICE = 2,
            MANUAL = 3,
            BLIND_STOP = 4,
            CONTROLLED_STOP = 5,
            CONSERVATIVE = 6,
            NOMINAL = 7
        }
    }

    /** Properties of a stop_t. */
    interface Istop_t {

        /** stop_t utime */
        utime?: (number|Long|null);

        /** stop_t stop */
        stop?: (boolean|null);
    }

    /** Represents a stop_t. */
    class stop_t implements Istop_t {

        /**
         * Constructs a new stop_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Istop_t);

        /** stop_t utime. */
        public utime: (number|Long);

        /** stop_t stop. */
        public stop: boolean;

        /**
         * Creates a new stop_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns stop_t instance
         */
        public static create(properties?: may.Istop_t): may.stop_t;

        /**
         * Encodes the specified stop_t message. Does not implicitly {@link may.stop_t.verify|verify} messages.
         * @param message stop_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Istop_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified stop_t message, length delimited. Does not implicitly {@link may.stop_t.verify|verify} messages.
         * @param message stop_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Istop_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a stop_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns stop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.stop_t;

        /**
         * Decodes a stop_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns stop_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.stop_t;

        /**
         * Verifies a stop_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a stop_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns stop_t
         */
        public static fromObject(object: { [k: string]: any }): may.stop_t;

        /**
         * Creates a plain object from a stop_t message. Also converts values to other types if specified.
         * @param message stop_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.stop_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this stop_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_camera_stream_params_list_prim_t. */
    interface Itele_op_camera_stream_params_list_prim_t {

        /** tele_op_camera_stream_params_list_prim_t utime */
        utime?: (number|Long|null);

        /** tele_op_camera_stream_params_list_prim_t paramStreamNames */
        paramStreamNames?: (string[]|null);

        /** tele_op_camera_stream_params_list_prim_t imgHs */
        imgHs?: (number[]|null);

        /** tele_op_camera_stream_params_list_prim_t imgWs */
        imgWs?: (number[]|null);

        /** tele_op_camera_stream_params_list_prim_t compressionQualities */
        compressionQualities?: (number[]|null);

        /** tele_op_camera_stream_params_list_prim_t frameRates */
        frameRates?: (number[]|null);

        /** tele_op_camera_stream_params_list_prim_t active */
        active?: (number[]|null);
    }

    /** Represents a tele_op_camera_stream_params_list_prim_t. */
    class tele_op_camera_stream_params_list_prim_t implements Itele_op_camera_stream_params_list_prim_t {

        /**
         * Constructs a new tele_op_camera_stream_params_list_prim_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_camera_stream_params_list_prim_t);

        /** tele_op_camera_stream_params_list_prim_t utime. */
        public utime: (number|Long);

        /** tele_op_camera_stream_params_list_prim_t paramStreamNames. */
        public paramStreamNames: string[];

        /** tele_op_camera_stream_params_list_prim_t imgHs. */
        public imgHs: number[];

        /** tele_op_camera_stream_params_list_prim_t imgWs. */
        public imgWs: number[];

        /** tele_op_camera_stream_params_list_prim_t compressionQualities. */
        public compressionQualities: number[];

        /** tele_op_camera_stream_params_list_prim_t frameRates. */
        public frameRates: number[];

        /** tele_op_camera_stream_params_list_prim_t active. */
        public active: number[];

        /**
         * Creates a new tele_op_camera_stream_params_list_prim_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_camera_stream_params_list_prim_t instance
         */
        public static create(properties?: may.Itele_op_camera_stream_params_list_prim_t): may.tele_op_camera_stream_params_list_prim_t;

        /**
         * Encodes the specified tele_op_camera_stream_params_list_prim_t message. Does not implicitly {@link may.tele_op_camera_stream_params_list_prim_t.verify|verify} messages.
         * @param message tele_op_camera_stream_params_list_prim_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_camera_stream_params_list_prim_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_camera_stream_params_list_prim_t message, length delimited. Does not implicitly {@link may.tele_op_camera_stream_params_list_prim_t.verify|verify} messages.
         * @param message tele_op_camera_stream_params_list_prim_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_camera_stream_params_list_prim_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_camera_stream_params_list_prim_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_camera_stream_params_list_prim_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_camera_stream_params_list_prim_t;

        /**
         * Decodes a tele_op_camera_stream_params_list_prim_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_camera_stream_params_list_prim_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_camera_stream_params_list_prim_t;

        /**
         * Verifies a tele_op_camera_stream_params_list_prim_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_camera_stream_params_list_prim_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_camera_stream_params_list_prim_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_camera_stream_params_list_prim_t;

        /**
         * Creates a plain object from a tele_op_camera_stream_params_list_prim_t message. Also converts values to other types if specified.
         * @param message tele_op_camera_stream_params_list_prim_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_camera_stream_params_list_prim_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_camera_stream_params_list_prim_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_camera_stream_params_t. */
    interface Itele_op_camera_stream_params_t {

        /** tele_op_camera_stream_params_t utime */
        utime?: (number|Long|null);

        /** tele_op_camera_stream_params_t compressionQuality */
        compressionQuality?: (number|null);

        /** tele_op_camera_stream_params_t streamName */
        streamName?: (string|null);

        /** tele_op_camera_stream_params_t frameRate */
        frameRate?: (number|null);

        /** tele_op_camera_stream_params_t imgH */
        imgH?: (number|null);

        /** tele_op_camera_stream_params_t imgW */
        imgW?: (number|null);
    }

    /** Represents a tele_op_camera_stream_params_t. */
    class tele_op_camera_stream_params_t implements Itele_op_camera_stream_params_t {

        /**
         * Constructs a new tele_op_camera_stream_params_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_camera_stream_params_t);

        /** tele_op_camera_stream_params_t utime. */
        public utime: (number|Long);

        /** tele_op_camera_stream_params_t compressionQuality. */
        public compressionQuality: number;

        /** tele_op_camera_stream_params_t streamName. */
        public streamName: string;

        /** tele_op_camera_stream_params_t frameRate. */
        public frameRate: number;

        /** tele_op_camera_stream_params_t imgH. */
        public imgH: number;

        /** tele_op_camera_stream_params_t imgW. */
        public imgW: number;

        /**
         * Creates a new tele_op_camera_stream_params_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_camera_stream_params_t instance
         */
        public static create(properties?: may.Itele_op_camera_stream_params_t): may.tele_op_camera_stream_params_t;

        /**
         * Encodes the specified tele_op_camera_stream_params_t message. Does not implicitly {@link may.tele_op_camera_stream_params_t.verify|verify} messages.
         * @param message tele_op_camera_stream_params_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_camera_stream_params_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_camera_stream_params_t message, length delimited. Does not implicitly {@link may.tele_op_camera_stream_params_t.verify|verify} messages.
         * @param message tele_op_camera_stream_params_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_camera_stream_params_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_camera_stream_params_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_camera_stream_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_camera_stream_params_t;

        /**
         * Decodes a tele_op_camera_stream_params_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_camera_stream_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_camera_stream_params_t;

        /**
         * Verifies a tele_op_camera_stream_params_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_camera_stream_params_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_camera_stream_params_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_camera_stream_params_t;

        /**
         * Creates a plain object from a tele_op_camera_stream_params_t message. Also converts values to other types if specified.
         * @param message tele_op_camera_stream_params_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_camera_stream_params_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_camera_stream_params_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_code_packet. */
    interface Itele_op_code_packet {

        /** tele_op_code_packet utime */
        utime?: (number|Long|null);

        /** tele_op_code_packet code */
        code?: (may.tele_op_code_packet.OpCode|null);

        /** tele_op_code_packet seq */
        seq?: (number|Long|null);

        /** tele_op_code_packet body */
        body?: (Uint8Array|null);

        /** tele_op_code_packet email */
        email?: (string|null);

        /** tele_op_code_packet teleOpWaitCommandReq */
        teleOpWaitCommandReq?: (may.Itele_op_wait_command_req_t|null);

        /** tele_op_code_packet teleOpWaypoint */
        teleOpWaypoint?: (may.Itele_op_waypoint_t|null);
    }

    /** Represents a tele_op_code_packet. */
    class tele_op_code_packet implements Itele_op_code_packet {

        /**
         * Constructs a new tele_op_code_packet.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_code_packet);

        /** tele_op_code_packet utime. */
        public utime: (number|Long);

        /** tele_op_code_packet code. */
        public code: may.tele_op_code_packet.OpCode;

        /** tele_op_code_packet seq. */
        public seq: (number|Long);

        /** tele_op_code_packet body. */
        public body: Uint8Array;

        /** tele_op_code_packet email. */
        public email: string;

        /** tele_op_code_packet teleOpWaitCommandReq. */
        public teleOpWaitCommandReq?: (may.Itele_op_wait_command_req_t|null);

        /** tele_op_code_packet teleOpWaypoint. */
        public teleOpWaypoint?: (may.Itele_op_waypoint_t|null);

        /**
         * Creates a new tele_op_code_packet instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_code_packet instance
         */
        public static create(properties?: may.Itele_op_code_packet): may.tele_op_code_packet;

        /**
         * Encodes the specified tele_op_code_packet message. Does not implicitly {@link may.tele_op_code_packet.verify|verify} messages.
         * @param message tele_op_code_packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_code_packet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_code_packet message, length delimited. Does not implicitly {@link may.tele_op_code_packet.verify|verify} messages.
         * @param message tele_op_code_packet message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_code_packet, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_code_packet message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_code_packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_code_packet;

        /**
         * Decodes a tele_op_code_packet message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_code_packet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_code_packet;

        /**
         * Verifies a tele_op_code_packet message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_code_packet message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_code_packet
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_code_packet;

        /**
         * Creates a plain object from a tele_op_code_packet message. Also converts values to other types if specified.
         * @param message tele_op_code_packet
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_code_packet, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_code_packet to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace tele_op_code_packet {

        /** OpCode enum. */
        enum OpCode {
            HEARTBEAT = 0,
            ESTOP = 1,
            QUERY = 2,
            BROKERHEARTBEAT = 3,
            RESUME = 4,
            CAMERAS = 5,
            MANEUVER = 6,
            AUTONOMY = 7,
            WAIT = 8,
            WAYPOINT = 9
        }
    }

    /** Properties of a tele_op_maneuver_request_t. */
    interface Itele_op_maneuver_request_t {

        /** tele_op_maneuver_request_t utime */
        utime?: (number|Long|null);

        /** tele_op_maneuver_request_t uid */
        uid?: (number|null);

        /** tele_op_maneuver_request_t path */
        path?: (may.tele_op_waypoint_t.Idouble_point_t[]|null);

        /** tele_op_maneuver_request_t policyType */
        policyType?: (may.policy_types|null);
    }

    /** Represents a tele_op_maneuver_request_t. */
    class tele_op_maneuver_request_t implements Itele_op_maneuver_request_t {

        /**
         * Constructs a new tele_op_maneuver_request_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_maneuver_request_t);

        /** tele_op_maneuver_request_t utime. */
        public utime: (number|Long);

        /** tele_op_maneuver_request_t uid. */
        public uid: number;

        /** tele_op_maneuver_request_t path. */
        public path: may.tele_op_waypoint_t.Idouble_point_t[];

        /** tele_op_maneuver_request_t policyType. */
        public policyType: may.policy_types;

        /**
         * Creates a new tele_op_maneuver_request_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_maneuver_request_t instance
         */
        public static create(properties?: may.Itele_op_maneuver_request_t): may.tele_op_maneuver_request_t;

        /**
         * Encodes the specified tele_op_maneuver_request_t message. Does not implicitly {@link may.tele_op_maneuver_request_t.verify|verify} messages.
         * @param message tele_op_maneuver_request_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_maneuver_request_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_maneuver_request_t message, length delimited. Does not implicitly {@link may.tele_op_maneuver_request_t.verify|verify} messages.
         * @param message tele_op_maneuver_request_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_maneuver_request_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_maneuver_request_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_maneuver_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_maneuver_request_t;

        /**
         * Decodes a tele_op_maneuver_request_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_maneuver_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_maneuver_request_t;

        /**
         * Verifies a tele_op_maneuver_request_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_maneuver_request_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_maneuver_request_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_maneuver_request_t;

        /**
         * Creates a plain object from a tele_op_maneuver_request_t message. Also converts values to other types if specified.
         * @param message tele_op_maneuver_request_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_maneuver_request_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_maneuver_request_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_maneuver_response_t. */
    interface Itele_op_maneuver_response_t {

        /** tele_op_maneuver_response_t utime */
        utime?: (number|Long|null);

        /** tele_op_maneuver_response_t uid */
        uid?: (number|Long|null);

        /** tele_op_maneuver_response_t approved */
        approved?: (boolean|null);

        /** tele_op_maneuver_response_t policyType */
        policyType?: (may.policy_types|null);
    }

    /** Represents a tele_op_maneuver_response_t. */
    class tele_op_maneuver_response_t implements Itele_op_maneuver_response_t {

        /**
         * Constructs a new tele_op_maneuver_response_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_maneuver_response_t);

        /** tele_op_maneuver_response_t utime. */
        public utime: (number|Long);

        /** tele_op_maneuver_response_t uid. */
        public uid: (number|Long);

        /** tele_op_maneuver_response_t approved. */
        public approved: boolean;

        /** tele_op_maneuver_response_t policyType. */
        public policyType: may.policy_types;

        /**
         * Creates a new tele_op_maneuver_response_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_maneuver_response_t instance
         */
        public static create(properties?: may.Itele_op_maneuver_response_t): may.tele_op_maneuver_response_t;

        /**
         * Encodes the specified tele_op_maneuver_response_t message. Does not implicitly {@link may.tele_op_maneuver_response_t.verify|verify} messages.
         * @param message tele_op_maneuver_response_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_maneuver_response_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_maneuver_response_t message, length delimited. Does not implicitly {@link may.tele_op_maneuver_response_t.verify|verify} messages.
         * @param message tele_op_maneuver_response_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_maneuver_response_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_maneuver_response_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_maneuver_response_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_maneuver_response_t;

        /**
         * Decodes a tele_op_maneuver_response_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_maneuver_response_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_maneuver_response_t;

        /**
         * Verifies a tele_op_maneuver_response_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_maneuver_response_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_maneuver_response_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_maneuver_response_t;

        /**
         * Creates a plain object from a tele_op_maneuver_response_t message. Also converts values to other types if specified.
         * @param message tele_op_maneuver_response_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_maneuver_response_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_maneuver_response_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** policy_types enum. */
    enum policy_types {
        OUT_OF_LANE = 0,
        WAYPOINTS = 1
    }

    /** Properties of a tele_op_object_list_t. */
    interface Itele_op_object_list_t {

        /** tele_op_object_list_t utime */
        utime?: (number|Long|null);

        /** tele_op_object_list_t ego */
        ego?: (may.Itele_op_object_t|null);

        /** tele_op_object_list_t objects */
        objects?: (may.Itele_op_object_t[]|null);
    }

    /** Represents a tele_op_object_list_t. */
    class tele_op_object_list_t implements Itele_op_object_list_t {

        /**
         * Constructs a new tele_op_object_list_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_object_list_t);

        /** tele_op_object_list_t utime. */
        public utime: (number|Long);

        /** tele_op_object_list_t ego. */
        public ego?: (may.Itele_op_object_t|null);

        /** tele_op_object_list_t objects. */
        public objects: may.Itele_op_object_t[];

        /**
         * Creates a new tele_op_object_list_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_object_list_t instance
         */
        public static create(properties?: may.Itele_op_object_list_t): may.tele_op_object_list_t;

        /**
         * Encodes the specified tele_op_object_list_t message. Does not implicitly {@link may.tele_op_object_list_t.verify|verify} messages.
         * @param message tele_op_object_list_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_object_list_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_object_list_t message, length delimited. Does not implicitly {@link may.tele_op_object_list_t.verify|verify} messages.
         * @param message tele_op_object_list_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_object_list_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_object_list_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_object_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_object_list_t;

        /**
         * Decodes a tele_op_object_list_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_object_list_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_object_list_t;

        /**
         * Verifies a tele_op_object_list_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_object_list_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_object_list_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_object_list_t;

        /**
         * Creates a plain object from a tele_op_object_list_t message. Also converts values to other types if specified.
         * @param message tele_op_object_list_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_object_list_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_object_list_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_object_t. */
    interface Itele_op_object_t {

        /** tele_op_object_t utime */
        utime?: (number|Long|null);

        /** tele_op_object_t id */
        id?: (number|null);

        /** tele_op_object_t vel */
        vel?: (number[]|null);

        /** tele_op_object_t poly */
        poly?: (may.Ipolygon_t|null);

        /** tele_op_object_t classLabel */
        classLabel?: (string|null);
    }

    /** Represents a tele_op_object_t. */
    class tele_op_object_t implements Itele_op_object_t {

        /**
         * Constructs a new tele_op_object_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_object_t);

        /** tele_op_object_t utime. */
        public utime: (number|Long);

        /** tele_op_object_t id. */
        public id: number;

        /** tele_op_object_t vel. */
        public vel: number[];

        /** tele_op_object_t poly. */
        public poly?: (may.Ipolygon_t|null);

        /** tele_op_object_t classLabel. */
        public classLabel: string;

        /**
         * Creates a new tele_op_object_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_object_t instance
         */
        public static create(properties?: may.Itele_op_object_t): may.tele_op_object_t;

        /**
         * Encodes the specified tele_op_object_t message. Does not implicitly {@link may.tele_op_object_t.verify|verify} messages.
         * @param message tele_op_object_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_object_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_object_t message, length delimited. Does not implicitly {@link may.tele_op_object_t.verify|verify} messages.
         * @param message tele_op_object_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_object_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_object_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_object_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_object_t;

        /**
         * Decodes a tele_op_object_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_object_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_object_t;

        /**
         * Verifies a tele_op_object_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_object_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_object_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_object_t;

        /**
         * Creates a plain object from a tele_op_object_t message. Also converts values to other types if specified.
         * @param message tele_op_object_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_object_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_object_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_planner_result_t. */
    interface Itele_op_planner_result_t {

        /** tele_op_planner_result_t utime */
        utime?: (number|Long|null);

        /** tele_op_planner_result_t uid */
        uid?: (number|null);

        /** tele_op_planner_result_t resultCode */
        resultCode?: (number|null);

        /** tele_op_planner_result_t ok */
        ok?: (boolean|null);

        /** tele_op_planner_result_t msg */
        msg?: (string|null);

        /** tele_op_planner_result_t policyName */
        policyName?: (string|null);

        /** tele_op_planner_result_t result */
        result?: (may.tele_op_planner_result_t.POLICY_GENERATION_RESULT|null);
    }

    /** Represents a tele_op_planner_result_t. */
    class tele_op_planner_result_t implements Itele_op_planner_result_t {

        /**
         * Constructs a new tele_op_planner_result_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_planner_result_t);

        /** tele_op_planner_result_t utime. */
        public utime: (number|Long);

        /** tele_op_planner_result_t uid. */
        public uid: number;

        /** tele_op_planner_result_t resultCode. */
        public resultCode: number;

        /** tele_op_planner_result_t ok. */
        public ok: boolean;

        /** tele_op_planner_result_t msg. */
        public msg: string;

        /** tele_op_planner_result_t policyName. */
        public policyName: string;

        /** tele_op_planner_result_t result. */
        public result: may.tele_op_planner_result_t.POLICY_GENERATION_RESULT;

        /**
         * Creates a new tele_op_planner_result_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_planner_result_t instance
         */
        public static create(properties?: may.Itele_op_planner_result_t): may.tele_op_planner_result_t;

        /**
         * Encodes the specified tele_op_planner_result_t message. Does not implicitly {@link may.tele_op_planner_result_t.verify|verify} messages.
         * @param message tele_op_planner_result_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_planner_result_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_planner_result_t message, length delimited. Does not implicitly {@link may.tele_op_planner_result_t.verify|verify} messages.
         * @param message tele_op_planner_result_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_planner_result_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_planner_result_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_planner_result_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_planner_result_t;

        /**
         * Decodes a tele_op_planner_result_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_planner_result_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_planner_result_t;

        /**
         * Verifies a tele_op_planner_result_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_planner_result_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_planner_result_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_planner_result_t;

        /**
         * Creates a plain object from a tele_op_planner_result_t message. Also converts values to other types if specified.
         * @param message tele_op_planner_result_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_planner_result_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_planner_result_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace tele_op_planner_result_t {

        /** POLICY_GENERATION_RESULT enum. */
        enum POLICY_GENERATION_RESULT {
            SUCCESS = 0,
            COLLISION = 1,
            VIOLATING_CONTRAINTS = 2
        }
    }

    /** Properties of a tele_op_policy_request_t. */
    interface Itele_op_policy_request_t {

        /** tele_op_policy_request_t utime */
        utime?: (number|Long|null);

        /** tele_op_policy_request_t globalUtime */
        globalUtime?: (may.Iglobal_time_t|null);

        /** tele_op_policy_request_t uid */
        uid?: (number|null);

        /** tele_op_policy_request_t referenceFrame */
        referenceFrame?: (number|null);

        /** tele_op_policy_request_t corridorLeft */
        corridorLeft?: (may.tele_op_policy_request_t.ICorridor[]|null);

        /** tele_op_policy_request_t corridorRight */
        corridorRight?: (may.tele_op_policy_request_t.ICorridor[]|null);

        /** tele_op_policy_request_t targetObjectVertices */
        targetObjectVertices?: (may.tele_op_policy_request_t.ITargetObject[]|null);
    }

    /** Represents a tele_op_policy_request_t. */
    class tele_op_policy_request_t implements Itele_op_policy_request_t {

        /**
         * Constructs a new tele_op_policy_request_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_policy_request_t);

        /** tele_op_policy_request_t utime. */
        public utime: (number|Long);

        /** tele_op_policy_request_t globalUtime. */
        public globalUtime?: (may.Iglobal_time_t|null);

        /** tele_op_policy_request_t uid. */
        public uid: number;

        /** tele_op_policy_request_t referenceFrame. */
        public referenceFrame: number;

        /** tele_op_policy_request_t corridorLeft. */
        public corridorLeft: may.tele_op_policy_request_t.ICorridor[];

        /** tele_op_policy_request_t corridorRight. */
        public corridorRight: may.tele_op_policy_request_t.ICorridor[];

        /** tele_op_policy_request_t targetObjectVertices. */
        public targetObjectVertices: may.tele_op_policy_request_t.ITargetObject[];

        /**
         * Creates a new tele_op_policy_request_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_policy_request_t instance
         */
        public static create(properties?: may.Itele_op_policy_request_t): may.tele_op_policy_request_t;

        /**
         * Encodes the specified tele_op_policy_request_t message. Does not implicitly {@link may.tele_op_policy_request_t.verify|verify} messages.
         * @param message tele_op_policy_request_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_policy_request_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_policy_request_t message, length delimited. Does not implicitly {@link may.tele_op_policy_request_t.verify|verify} messages.
         * @param message tele_op_policy_request_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_policy_request_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_policy_request_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_policy_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_policy_request_t;

        /**
         * Decodes a tele_op_policy_request_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_policy_request_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_policy_request_t;

        /**
         * Verifies a tele_op_policy_request_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_policy_request_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_policy_request_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_policy_request_t;

        /**
         * Creates a plain object from a tele_op_policy_request_t message. Also converts values to other types if specified.
         * @param message tele_op_policy_request_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_policy_request_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_policy_request_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace tele_op_policy_request_t {

        /** Properties of a Corridor. */
        interface ICorridor {

            /** Corridor points */
            points?: (number[]|null);
        }

        /** Represents a Corridor. */
        class Corridor implements ICorridor {

            /**
             * Constructs a new Corridor.
             * @param [properties] Properties to set
             */
            constructor(properties?: may.tele_op_policy_request_t.ICorridor);

            /** Corridor points. */
            public points: number[];

            /**
             * Creates a new Corridor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Corridor instance
             */
            public static create(properties?: may.tele_op_policy_request_t.ICorridor): may.tele_op_policy_request_t.Corridor;

            /**
             * Encodes the specified Corridor message. Does not implicitly {@link may.tele_op_policy_request_t.Corridor.verify|verify} messages.
             * @param message Corridor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: may.tele_op_policy_request_t.ICorridor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Corridor message, length delimited. Does not implicitly {@link may.tele_op_policy_request_t.Corridor.verify|verify} messages.
             * @param message Corridor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: may.tele_op_policy_request_t.ICorridor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Corridor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Corridor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_policy_request_t.Corridor;

            /**
             * Decodes a Corridor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Corridor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_policy_request_t.Corridor;

            /**
             * Verifies a Corridor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Corridor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Corridor
             */
            public static fromObject(object: { [k: string]: any }): may.tele_op_policy_request_t.Corridor;

            /**
             * Creates a plain object from a Corridor message. Also converts values to other types if specified.
             * @param message Corridor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: may.tele_op_policy_request_t.Corridor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Corridor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a TargetObject. */
        interface ITargetObject {

            /** TargetObject vertices */
            vertices?: (number[]|null);
        }

        /** Represents a TargetObject. */
        class TargetObject implements ITargetObject {

            /**
             * Constructs a new TargetObject.
             * @param [properties] Properties to set
             */
            constructor(properties?: may.tele_op_policy_request_t.ITargetObject);

            /** TargetObject vertices. */
            public vertices: number[];

            /**
             * Creates a new TargetObject instance using the specified properties.
             * @param [properties] Properties to set
             * @returns TargetObject instance
             */
            public static create(properties?: may.tele_op_policy_request_t.ITargetObject): may.tele_op_policy_request_t.TargetObject;

            /**
             * Encodes the specified TargetObject message. Does not implicitly {@link may.tele_op_policy_request_t.TargetObject.verify|verify} messages.
             * @param message TargetObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: may.tele_op_policy_request_t.ITargetObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified TargetObject message, length delimited. Does not implicitly {@link may.tele_op_policy_request_t.TargetObject.verify|verify} messages.
             * @param message TargetObject message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: may.tele_op_policy_request_t.ITargetObject, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a TargetObject message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns TargetObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_policy_request_t.TargetObject;

            /**
             * Decodes a TargetObject message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns TargetObject
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_policy_request_t.TargetObject;

            /**
             * Verifies a TargetObject message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a TargetObject message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns TargetObject
             */
            public static fromObject(object: { [k: string]: any }): may.tele_op_policy_request_t.TargetObject;

            /**
             * Creates a plain object from a TargetObject message. Also converts values to other types if specified.
             * @param message TargetObject
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: may.tele_op_policy_request_t.TargetObject, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this TargetObject to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a tele_op_vehicle_params_t. */
    interface Itele_op_vehicle_params_t {

        /** tele_op_vehicle_params_t utime */
        utime?: (number|Long|null);

        /** tele_op_vehicle_params_t softwareVersion */
        softwareVersion?: (string|null);

        /** tele_op_vehicle_params_t gitHash */
        gitHash?: (string|null);

        /** tele_op_vehicle_params_t logfileName */
        logfileName?: (string|null);

        /** tele_op_vehicle_params_t logfileElapsedSeconds */
        logfileElapsedSeconds?: (number|Long|null);

        /** tele_op_vehicle_params_t routeNetwork */
        routeNetwork?: (string|null);
    }

    /** Represents a tele_op_vehicle_params_t. */
    class tele_op_vehicle_params_t implements Itele_op_vehicle_params_t {

        /**
         * Constructs a new tele_op_vehicle_params_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_vehicle_params_t);

        /** tele_op_vehicle_params_t utime. */
        public utime: (number|Long);

        /** tele_op_vehicle_params_t softwareVersion. */
        public softwareVersion: string;

        /** tele_op_vehicle_params_t gitHash. */
        public gitHash: string;

        /** tele_op_vehicle_params_t logfileName. */
        public logfileName: string;

        /** tele_op_vehicle_params_t logfileElapsedSeconds. */
        public logfileElapsedSeconds: (number|Long);

        /** tele_op_vehicle_params_t routeNetwork. */
        public routeNetwork: string;

        /**
         * Creates a new tele_op_vehicle_params_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_vehicle_params_t instance
         */
        public static create(properties?: may.Itele_op_vehicle_params_t): may.tele_op_vehicle_params_t;

        /**
         * Encodes the specified tele_op_vehicle_params_t message. Does not implicitly {@link may.tele_op_vehicle_params_t.verify|verify} messages.
         * @param message tele_op_vehicle_params_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_vehicle_params_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_vehicle_params_t message, length delimited. Does not implicitly {@link may.tele_op_vehicle_params_t.verify|verify} messages.
         * @param message tele_op_vehicle_params_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_vehicle_params_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_vehicle_params_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_vehicle_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_vehicle_params_t;

        /**
         * Decodes a tele_op_vehicle_params_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_vehicle_params_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_vehicle_params_t;

        /**
         * Verifies a tele_op_vehicle_params_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_vehicle_params_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_vehicle_params_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_vehicle_params_t;

        /**
         * Creates a plain object from a tele_op_vehicle_params_t message. Also converts values to other types if specified.
         * @param message tele_op_vehicle_params_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_vehicle_params_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_vehicle_params_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_wait_command_req_t. */
    interface Itele_op_wait_command_req_t {

        /** tele_op_wait_command_req_t utime */
        utime?: (number|Long|null);

        /** tele_op_wait_command_req_t uid */
        uid?: (number|Long|null);

        /** tele_op_wait_command_req_t egoShouldWait */
        egoShouldWait?: (boolean|null);

        /** tele_op_wait_command_req_t utimeout */
        utimeout?: (number|Long|null);
    }

    /** Represents a tele_op_wait_command_req_t. */
    class tele_op_wait_command_req_t implements Itele_op_wait_command_req_t {

        /**
         * Constructs a new tele_op_wait_command_req_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_wait_command_req_t);

        /** tele_op_wait_command_req_t utime. */
        public utime: (number|Long);

        /** tele_op_wait_command_req_t uid. */
        public uid: (number|Long);

        /** tele_op_wait_command_req_t egoShouldWait. */
        public egoShouldWait: boolean;

        /** tele_op_wait_command_req_t utimeout. */
        public utimeout: (number|Long);

        /**
         * Creates a new tele_op_wait_command_req_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_wait_command_req_t instance
         */
        public static create(properties?: may.Itele_op_wait_command_req_t): may.tele_op_wait_command_req_t;

        /**
         * Encodes the specified tele_op_wait_command_req_t message. Does not implicitly {@link may.tele_op_wait_command_req_t.verify|verify} messages.
         * @param message tele_op_wait_command_req_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_wait_command_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_wait_command_req_t message, length delimited. Does not implicitly {@link may.tele_op_wait_command_req_t.verify|verify} messages.
         * @param message tele_op_wait_command_req_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_wait_command_req_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_wait_command_req_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_wait_command_req_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_wait_command_req_t;

        /**
         * Decodes a tele_op_wait_command_req_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_wait_command_req_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_wait_command_req_t;

        /**
         * Verifies a tele_op_wait_command_req_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_wait_command_req_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_wait_command_req_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_wait_command_req_t;

        /**
         * Creates a plain object from a tele_op_wait_command_req_t message. Also converts values to other types if specified.
         * @param message tele_op_wait_command_req_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_wait_command_req_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_wait_command_req_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_wait_command_res_t. */
    interface Itele_op_wait_command_res_t {

        /** tele_op_wait_command_res_t utime */
        utime?: (number|Long|null);

        /** tele_op_wait_command_res_t reqUid */
        reqUid?: (number|Long|null);

        /** tele_op_wait_command_res_t error */
        error?: (string|null);
    }

    /** Represents a tele_op_wait_command_res_t. */
    class tele_op_wait_command_res_t implements Itele_op_wait_command_res_t {

        /**
         * Constructs a new tele_op_wait_command_res_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_wait_command_res_t);

        /** tele_op_wait_command_res_t utime. */
        public utime: (number|Long);

        /** tele_op_wait_command_res_t reqUid. */
        public reqUid: (number|Long);

        /** tele_op_wait_command_res_t error. */
        public error: string;

        /**
         * Creates a new tele_op_wait_command_res_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_wait_command_res_t instance
         */
        public static create(properties?: may.Itele_op_wait_command_res_t): may.tele_op_wait_command_res_t;

        /**
         * Encodes the specified tele_op_wait_command_res_t message. Does not implicitly {@link may.tele_op_wait_command_res_t.verify|verify} messages.
         * @param message tele_op_wait_command_res_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_wait_command_res_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_wait_command_res_t message, length delimited. Does not implicitly {@link may.tele_op_wait_command_res_t.verify|verify} messages.
         * @param message tele_op_wait_command_res_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_wait_command_res_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_wait_command_res_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_wait_command_res_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_wait_command_res_t;

        /**
         * Decodes a tele_op_wait_command_res_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_wait_command_res_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_wait_command_res_t;

        /**
         * Verifies a tele_op_wait_command_res_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_wait_command_res_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_wait_command_res_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_wait_command_res_t;

        /**
         * Creates a plain object from a tele_op_wait_command_res_t message. Also converts values to other types if specified.
         * @param message tele_op_wait_command_res_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_wait_command_res_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_wait_command_res_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a tele_op_waypoint_t. */
    interface Itele_op_waypoint_t {

        /** tele_op_waypoint_t utime */
        utime?: (number|Long|null);

        /** tele_op_waypoint_t uid */
        uid?: (number|Long|null);

        /** tele_op_waypoint_t npoints */
        npoints?: (number|null);

        /** tele_op_waypoint_t path */
        path?: (may.tele_op_waypoint_t.Idouble_point_t[]|null);

        /** tele_op_waypoint_t isActive */
        isActive?: (boolean|null);
    }

    /** Represents a tele_op_waypoint_t. */
    class tele_op_waypoint_t implements Itele_op_waypoint_t {

        /**
         * Constructs a new tele_op_waypoint_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Itele_op_waypoint_t);

        /** tele_op_waypoint_t utime. */
        public utime: (number|Long);

        /** tele_op_waypoint_t uid. */
        public uid: (number|Long);

        /** tele_op_waypoint_t npoints. */
        public npoints: number;

        /** tele_op_waypoint_t path. */
        public path: may.tele_op_waypoint_t.Idouble_point_t[];

        /** tele_op_waypoint_t isActive. */
        public isActive: boolean;

        /**
         * Creates a new tele_op_waypoint_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns tele_op_waypoint_t instance
         */
        public static create(properties?: may.Itele_op_waypoint_t): may.tele_op_waypoint_t;

        /**
         * Encodes the specified tele_op_waypoint_t message. Does not implicitly {@link may.tele_op_waypoint_t.verify|verify} messages.
         * @param message tele_op_waypoint_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Itele_op_waypoint_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified tele_op_waypoint_t message, length delimited. Does not implicitly {@link may.tele_op_waypoint_t.verify|verify} messages.
         * @param message tele_op_waypoint_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Itele_op_waypoint_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a tele_op_waypoint_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns tele_op_waypoint_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_waypoint_t;

        /**
         * Decodes a tele_op_waypoint_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns tele_op_waypoint_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_waypoint_t;

        /**
         * Verifies a tele_op_waypoint_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a tele_op_waypoint_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns tele_op_waypoint_t
         */
        public static fromObject(object: { [k: string]: any }): may.tele_op_waypoint_t;

        /**
         * Creates a plain object from a tele_op_waypoint_t message. Also converts values to other types if specified.
         * @param message tele_op_waypoint_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.tele_op_waypoint_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this tele_op_waypoint_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace tele_op_waypoint_t {

        /** Properties of a double_point_t. */
        interface Idouble_point_t {

            /** double_point_t X */
            X?: (number|null);

            /** double_point_t Y */
            Y?: (number|null);
        }

        /** Represents a double_point_t. */
        class double_point_t implements Idouble_point_t {

            /**
             * Constructs a new double_point_t.
             * @param [properties] Properties to set
             */
            constructor(properties?: may.tele_op_waypoint_t.Idouble_point_t);

            /** double_point_t X. */
            public X: number;

            /** double_point_t Y. */
            public Y: number;

            /**
             * Creates a new double_point_t instance using the specified properties.
             * @param [properties] Properties to set
             * @returns double_point_t instance
             */
            public static create(properties?: may.tele_op_waypoint_t.Idouble_point_t): may.tele_op_waypoint_t.double_point_t;

            /**
             * Encodes the specified double_point_t message. Does not implicitly {@link may.tele_op_waypoint_t.double_point_t.verify|verify} messages.
             * @param message double_point_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: may.tele_op_waypoint_t.Idouble_point_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified double_point_t message, length delimited. Does not implicitly {@link may.tele_op_waypoint_t.double_point_t.verify|verify} messages.
             * @param message double_point_t message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: may.tele_op_waypoint_t.Idouble_point_t, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a double_point_t message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns double_point_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.tele_op_waypoint_t.double_point_t;

            /**
             * Decodes a double_point_t message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns double_point_t
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.tele_op_waypoint_t.double_point_t;

            /**
             * Verifies a double_point_t message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a double_point_t message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns double_point_t
             */
            public static fromObject(object: { [k: string]: any }): may.tele_op_waypoint_t.double_point_t;

            /**
             * Creates a plain object from a double_point_t message. Also converts values to other types if specified.
             * @param message double_point_t
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: may.tele_op_waypoint_t.double_point_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this double_point_t to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a user_input_t. */
    interface Iuser_input_t {

        /** user_input_t utime */
        utime?: (number|Long|null);

        /** user_input_t source */
        source?: (may.user_input_t.Source|null);

        /** user_input_t buttons */
        buttons?: (may.user_input_t.Button|null);

        /** user_input_t naxes */
        naxes?: (number|null);

        /** user_input_t axes */
        axes?: (number[]|null);

        /** user_input_t channel */
        channel?: (may.user_input_t.Channel|null);
    }

    /** Represents a user_input_t. */
    class user_input_t implements Iuser_input_t {

        /**
         * Constructs a new user_input_t.
         * @param [properties] Properties to set
         */
        constructor(properties?: may.Iuser_input_t);

        /** user_input_t utime. */
        public utime: (number|Long);

        /** user_input_t source. */
        public source: may.user_input_t.Source;

        /** user_input_t buttons. */
        public buttons: may.user_input_t.Button;

        /** user_input_t naxes. */
        public naxes: number;

        /** user_input_t axes. */
        public axes: number[];

        /** user_input_t channel. */
        public channel: may.user_input_t.Channel;

        /**
         * Creates a new user_input_t instance using the specified properties.
         * @param [properties] Properties to set
         * @returns user_input_t instance
         */
        public static create(properties?: may.Iuser_input_t): may.user_input_t;

        /**
         * Encodes the specified user_input_t message. Does not implicitly {@link may.user_input_t.verify|verify} messages.
         * @param message user_input_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: may.Iuser_input_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified user_input_t message, length delimited. Does not implicitly {@link may.user_input_t.verify|verify} messages.
         * @param message user_input_t message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: may.Iuser_input_t, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a user_input_t message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns user_input_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): may.user_input_t;

        /**
         * Decodes a user_input_t message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns user_input_t
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): may.user_input_t;

        /**
         * Verifies a user_input_t message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a user_input_t message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns user_input_t
         */
        public static fromObject(object: { [k: string]: any }): may.user_input_t;

        /**
         * Creates a plain object from a user_input_t message. Also converts values to other types if specified.
         * @param message user_input_t
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: may.user_input_t, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this user_input_t to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace user_input_t {

        /** Source enum. */
        enum Source {
            IGNORE_SOURCE = 0,
            SOURCE_RX450H_KEYPAD = 1,
            SOURCE_GENOVATION_CP24 = 2
        }

        /** Button enum. */
        enum Button {
            NONE = 0,
            PARK = 1,
            REVERSE = 2,
            DRIVE = 4,
            LEFT_SIGNAL = 8,
            RIGHT_SIGNAL = 16,
            HAZARDS = 32,
            HEADLIGHTS = 64,
            HIGHBEAMS = 128,
            HORN = 256,
            EXTRA = 512,
            DEFROST = 1024,
            WIPERS = 2048,
            AUTO = 4096,
            FLAG_LOG = 8192,
            RESUME = 16384,
            STOP_SELECT = 32768,
            BACKUP_VIEW = 65536,
            RIDERS_MINUS = 131072,
            RIDERS_PLUS = 262144,
            RIDERS_TOGGLE = 524288,
            AC = 1048576,
            ADK_POWEROFF = 2097152
        }

        /** Channel enum. */
        enum Channel {
            IGNORE_CHANNEL = 0,
            USER_INPUT = 1,
            USER_INPUT_FUSED = 2
        }
    }
}
