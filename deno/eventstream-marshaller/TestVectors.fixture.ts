import { Int64 } from "./Int64.ts";
import { TestVectors } from "./vectorTypes.fixture.ts";

export const vectors: TestVectors = {
  all_headers: {
    expectation: "success",
    encoded: Uint8Array.from([
      0, 0, 0, 204, 0, 0, 0, 175, 15, 174, 100, 202, 10, 101, 118, 101, 110, 116, 45, 116, 121, 112, 101, 4, 0, 0, 160,
      12, 12, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101, 7, 0, 16, 97, 112, 112, 108, 105, 99, 97, 116,
      105, 111, 110, 47, 106, 115, 111, 110, 10, 98, 111, 111, 108, 32, 102, 97, 108, 115, 101, 1, 9, 98, 111, 111, 108,
      32, 116, 114, 117, 101, 0, 4, 98, 121, 116, 101, 2, 207, 8, 98, 121, 116, 101, 32, 98, 117, 102, 6, 0, 20, 73, 39,
      109, 32, 97, 32, 108, 105, 116, 116, 108, 101, 32, 116, 101, 97, 112, 111, 116, 33, 9, 116, 105, 109, 101, 115,
      116, 97, 109, 112, 8, 0, 0, 0, 0, 0, 132, 95, 237, 5, 105, 110, 116, 49, 54, 3, 0, 42, 5, 105, 110, 116, 54, 52,
      5, 0, 0, 0, 0, 2, 135, 87, 178, 4, 117, 117, 105, 100, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
      123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 171, 165, 241, 12,
    ]),
    decoded: {
      headers: {
        "event-type": {
          type: "integer",
          value: 40972,
        },
        "content-type": {
          type: "string",
          value: "application/json",
        },
        "bool false": {
          type: "boolean",
          value: false,
        },
        "bool true": {
          type: "boolean",
          value: true,
        },
        byte: {
          type: "byte",
          value: -49,
        },
        "byte buf": {
          type: "binary",
          value: Uint8Array.from([
            73, 39, 109, 32, 97, 32, 108, 105, 116, 116, 108, 101, 32, 116, 101, 97, 112, 111, 116, 33,
          ]),
        },
        timestamp: {
          type: "timestamp",
          value: new Date(8675309),
        },
        int16: {
          type: "short",
          value: 42,
        },
        int64: {
          type: "long",
          value: Int64.fromNumber(42424242),
        },
        uuid: {
          type: "uuid",
          value: "01020304-0506-0708-090a-0b0c0d0e0f10",
        },
      },
      body: Uint8Array.from([123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125]),
    },
  },
  empty_message: {
    expectation: "success",
    encoded: Uint8Array.from([0, 0, 0, 16, 0, 0, 0, 0, 5, 194, 72, 235, 125, 152, 200, 255]),
    decoded: {
      headers: {},
      body: Uint8Array.from([]),
    },
  },
  int32_header: {
    expectation: "success",
    encoded: Uint8Array.from([
      0, 0, 0, 45, 0, 0, 0, 16, 65, 196, 36, 184, 10, 101, 118, 101, 110, 116, 45, 116, 121, 112, 101, 4, 0, 0, 160, 12,
      123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 54, 244, 128, 160,
    ]),
    decoded: {
      headers: {
        "event-type": {
          type: "integer",
          value: 40972,
        },
      },
      body: Uint8Array.from([123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125]),
    },
  },
  payload_no_headers: {
    expectation: "success",
    encoded: Uint8Array.from([
      0, 0, 0, 29, 0, 0, 0, 0, 253, 82, 140, 90, 123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 195, 101, 57,
      54,
    ]),
    decoded: {
      headers: {},
      body: Uint8Array.from([123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125]),
    },
  },
  payload_one_str_header: {
    expectation: "success",
    encoded: Uint8Array.from([
      0, 0, 0, 61, 0, 0, 0, 32, 7, 253, 131, 150, 12, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101, 7, 0,
      16, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 106, 115, 111, 110, 123, 39, 102, 111, 111, 39, 58,
      39, 98, 97, 114, 39, 125, 141, 156, 8, 177,
    ]),
    decoded: {
      headers: {
        "content-type": {
          type: "string",
          value: "application/json",
        },
      },
      body: Uint8Array.from([123, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125]),
    },
  },
  corrupted_headers: {
    expectation: "failure",
    encoded: Uint8Array.from([
      0, 0, 0, 61, 0, 0, 0, 32, 7, 253, 131, 150, 12, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101, 7, 0,
      16, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 106, 115, 111, 110, 123, 97, 102, 111, 111, 39, 58,
      39, 98, 97, 114, 39, 125, 141, 156, 8, 177,
    ]),
  },
  corrupted_header_len: {
    expectation: "failure",
    encoded: Uint8Array.from([
      0, 0, 0, 61, 0, 0, 0, 33, 7, 253, 131, 150, 12, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101, 7, 0,
      16, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 106, 115, 111, 110, 123, 39, 102, 111, 111, 39, 58,
      39, 98, 97, 114, 39, 125, 141, 156, 8, 177,
    ]),
  },
  corrupted_length: {
    expectation: "failure",
    encoded: Uint8Array.from([
      0, 0, 0, 62, 0, 0, 0, 32, 7, 253, 131, 150, 12, 99, 111, 110, 116, 101, 110, 116, 45, 116, 121, 112, 101, 7, 0,
      16, 97, 112, 112, 108, 105, 99, 97, 116, 105, 111, 110, 47, 106, 115, 111, 110, 123, 39, 102, 111, 111, 39, 58,
      39, 98, 97, 114, 39, 125, 141, 156, 8, 177,
    ]),
  },
  corrupted_payload: {
    expectation: "failure",
    encoded: Uint8Array.from([
      0, 0, 0, 29, 0, 0, 0, 0, 253, 82, 140, 90, 91, 39, 102, 111, 111, 39, 58, 39, 98, 97, 114, 39, 125, 195, 101, 57,
      54,
    ]),
  },
};
