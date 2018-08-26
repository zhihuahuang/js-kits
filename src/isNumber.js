/**
 * isNumber
 *
 * @since 0.1.0
 * @param num
 * @returns {boolean}
 */
function isNumber(num) {
    // typeof val is faster than Object.prototype.toString.call(val)
    return typeof num === 'number';
}

export default isNumber;