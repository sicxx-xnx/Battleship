/* eslint-env node */
import {tester} from "../index.js"
// const tester = require("../index");
test('expecting tester to equal test', () => {
expect(tester()).toBe("test")    
});

// test format

// start with test()
// inside test call put in string echo text to console as para 1
// arraw function with expect call that contacts function your testing and 
// a method tobe attached to the expect call with the para being what your expecting this outcome to be

