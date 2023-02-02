import { writable } from "svelte/store";
import { timeUntil } from "./time";
import { getPayload, getToken, removeToken, setToken } from "./token";

let _refreshTokenCallback;

/**
 * Store that defines if the session is authenticated.
 */
export const authenticated = writable(false);
/**
 * The content of the session (token payload).
 */
export const session = writable(null);

/**
 * Initializes the current session.
 * @param {() => Promise<string>} refreshTokenCallback callback function to get a new token.
 */
export function initSession(refreshTokenCallback) {
    _refreshTokenCallback = refreshTokenCallback;
    const token = getToken();
    if (token) {
        updateSession(token);
    }
}

/**
 * Updates the session.
 * @param {string} token the JSON web token containing session data. 
 */
export function updateSession(token) {
    setToken(token);
    const payload = getPayload();
    session.set(payload);
    setUpAutomaticRefresh(payload.iat, payload.exp);
    authenticated.set(true);
}

/**
 * Clears the session.
 */
export function clearSession() {
    authenticated.set(false);
    session.set(null);
    removeToken();
}

/** 
 * Refreshes the Session with a new token.
 */
export function refresh() {
    _refreshTokenCallback().then(token => {
        if (token) {
            updateSession(token);
        }
    });
}

/**
 * Sets a timeout function to refresh the token before the token lifetime ends.
 * @param {*} issuedAt timestamp in ms when the token was issued.
 * @param {*} expiresAt timestamp in ms when the token lifetime is exipring.
 */
function setUpAutomaticRefresh(issuedAt, expiresAt) {
    const refreshTime = timeUntil(issuedAt, expiresAt, 0.75);
    setTimeout(refresh, refreshTime);
}
