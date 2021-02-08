'use strict';

/**
 * Realization of Run-length encoding for any given string
 *
 * @param {string} string - what to compress
 * @returns {string|undefined} - compressed string for valid params, otherwise undefined
 *
 * @example
 * // returns 'A3B'
 * rle('AAAB');
 */
const rle = (string) => {
    if (typeof string !== 'string') {
        return undefined;
    }
    let compressed = '';
    for (let i = 0; i < string.length; ++i) {
        const currentChar = string.charAt(i);
        let count = 1;
        while (i + 1 < string.length && currentChar === string.charAt(i + 1)) {
            ++count;
            ++i;
        }
        compressed += (count === 1) ? currentChar : currentChar + count;
    }
    return compressed;
}
