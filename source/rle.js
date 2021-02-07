'use strict';

const rle = (string) => {
    if (typeof string !== 'string') {
        return undefined;
    }
    let compressed = '';
    for (let i = 0; i < string.length; ++i) {
        let count = 1;
        for (let j = i; j < string.length; ++j) {
            if (string.charAt(i) !== string.charAt(j + 1)) {
                break;
            }
            ++count;
            ++i;
        }
        compressed += (count === 1) ? string.charAt(i) : string.charAt(i) + count;
    }
    return compressed;
}
