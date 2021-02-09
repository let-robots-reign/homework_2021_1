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
        throw new Error(`Invalid argument: expected string, got ${typeof string}`);
    }
    let compressed = '';
    for (let i = 0; i < string.length; ++i) {
        const currentChar = string.charAt(i);
        const count = countRecurringChars(string, currentChar, i);
        i += count - 1;
        compressed += (count === 1) ? currentChar : currentChar + count;
    }
    return compressed;
}

/**
 *
 * @param {string} string - given string
 * @param {string} char - char, occurrences of which the function counts
 * @param {number} startIndex - an index, from which the search begins
 * @returns {number} count - char occurrences in succession
 *
 * @ example
 * // returns 3
 * countRecurringChars('AAAB', 'A', 0);
 */
const countRecurringChars = (string, char, startIndex) => {
    let count = 1;
    while (startIndex + 1 < string.length && char === string.charAt(startIndex + 1)) {
        ++count;
        ++startIndex;
    }
    return count;
}