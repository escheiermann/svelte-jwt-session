/**
 * Get the time in ms until certain percentage of time is going to pass between two events.
 * @param {*} start the timestamp in seconds of the first event.
 * @param {*} end the timestamp in seconds of the last event.
 * @param {*} percent the percentage of the time range between 0 and 1.
 * @returns the time in ms until the percentage of time between the events is passed.
 */
export function timeUntil(start, end, percent) {
    const nowInSeconds = Date.now() / 1000;
    const lifetime = end - start;
    let secondsRemaining = start + (lifetime * percent) - nowInSeconds;
    secondsRemaining = secondsRemaining > 0 ? secondsRemaining : 0;
    return secondsRemaining * 1000;
}
