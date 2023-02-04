import { base64Decode } from "../../src/session/decode";

describe("decode", () => {
    test("base64Decode should decode a base64 encoded string", () => {
        const encoded = "SGVsbG8sIFdvcmxkIQ==";
        const expectedDecoded = "Hello, World!";

        const actualDecoded = base64Decode(encoded);

        expect(actualDecoded).toBe(expectedDecoded);
    });
});