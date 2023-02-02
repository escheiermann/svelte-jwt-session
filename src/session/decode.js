/**
 * Decode Base64 encoded data.
 * @param {string} encodedData the date to decode.
 * @returns the decoded data.
 */
export function base64Decode(encodedData) {
    const base64 = encodedData.replace(/-/g, "+").replace(/_/g, "/");
    const uri = window.atob(base64).split("").map(c => {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
    }).join("");
    return decodeURIComponent(uri);
}
