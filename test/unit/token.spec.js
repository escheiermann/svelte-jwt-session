import { getToken, setToken } from "../../src/session/token";

describe("token", () => {
    afterEach(() => {
        localStorage.removeItem("token");
    });

    test("setToken should set token in localStorage", () => {
        const token = "jwt";

        setToken(token);

        expect(localStorage.getItem("token")).toBe(token);
    });

    test("getToken should return token from localStorage", () => {
        const expectedToken = "jwt";
        localStorage.setItem("token", expectedToken);

        const actualToken = getToken();

        expect(actualToken).toBe(expectedToken);
    });
});
