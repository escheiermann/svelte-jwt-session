import { base64Decode } from "./decode";

const tokenStorageId = "token";

/**
 * Sets the token.
 * @param {string} token the JSON web token. 
 */
export function setToken(token) {
    localStorage.setItem(tokenStorageId, token);
}

/**
 * Get the token.
 * @returns JSON web token.
 */
export function getToken() {
    return localStorage.getItem(tokenStorageId);
}

/**
 * Removes the token.
 */
export function removeToken() {
    localStorage.removeItem(tokenStorageId);
}

/**
 * Get the token payload.
 * @returns the token payload as an object. 
 */
export function getPayload() {
    const encodedPayload = getToken().split(".")[1];
    const payload = base64Decode(encodedPayload);
    return JSON.parse(payload);
}
