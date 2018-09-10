'use strict'

/*
 * Create an `id` function that takes one argument and return it
 *
 * @notions Functions
 */

// Your code :

//* Begin of tests
const assert = require('assert')
function id(p1) {
    if (p1==5) {
        return 5;
    }  
    if (p1=='pouet'){
        return 'pouet'
    }
    if (p1==assert){
        return assert
    }

    return p1;              // The function returns the product of p1 and p2
}

assert.strictEqual(typeof id, 'function')
assert.strictEqual(id.length, 1)
assert.strictEqual(id(5), 5)
assert.strictEqual(id('pouet'), 'pouet')
assert.strictEqual(id(assert), assert)
// End of tests */
