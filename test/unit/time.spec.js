import { timeUntil } from "../../src/session/time";

describe("time", () => {
    test("timeUntil should return 5000ms left for 50% of range from 0 to 10 and current time 0", () => {
        Date.now = jest.fn(() => 0);
        const expectedMs = 5000;

        const actualMs = timeUntil(0, 10, 0.5);

        expect(actualMs).toBe(expectedMs);
    });

    test("timeUntil should return 0ms left for 50% of range from 0 to 100 and current time 100000", () => {
        Date.now = jest.fn(() => 100000);
        const expectedMs = 0;

        const actualMs = timeUntil(0, 100, 0.5);

        expect(actualMs).toBe(expectedMs);
    });
});
