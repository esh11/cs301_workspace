"use strict";

const arrays = require("./arrays.js");
const assert = require("assert");

describe("isArrayEqual", function () {
    it("test with equal array", function () {
        assert.strictEqual(arrays.isArrayEqual([1, 2, 3], [1, 2, 3]), true);
    });

    it("test with arrays that are not equal", function () {
        assert.strictEqual(arrays.isArrayEqual([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]), false);
    });

});

describe("addend", function () {
    it("tests addend even number of elements", function () {
        assert.strictEqual(arrays.addend([-1, -100, 1, 2, 3, -55]), -56);
    });

    it("tests addend odd number of elements", function () {
        assert.strictEqual(arrays.addend([-10, 2, 3, 4, 20]), 10);
    });
});


describe("getMiddle1", function () {
    it("tests getMiddle even number of elements", function () {
        assert.strictEqual(arrays.getMiddle([-1, -100, 1, 2, 3, -55]), 1.5);
    });

    it("tests getMiddle odd number of elements", function () {
        assert.strictEqual(arrays.getMiddle([-10, 2, 3, 4, 20]), 3);
    });
});


 describe("rotateLeft", function () {
    it("tests rotateLeft even number of elements", function () {
        assert.deepStrictEqual(arrays.rotateLeft([-1, -100, 1, 2, 3, -55]), [-100, 1, 2, 3, -55, -1]);
    });

    it("tests rotateLeft odd number of elements", function () {
        assert.deepStrictEqual(arrays.rotateLeft([-10, 2, 3, 4, 20]), [2, 3, 4, 20, -10]);
    });
});

describe("rotateRight", function () {
    it("tests rotateRight even number of elements", function () {
        assert.deepStrictEqual(arrays.rotateRight([-1, -100, 1, 2, 3, -55]), [-55, -1, -100, 1, 2, 3,]);
    });

    it("tests rotateRight odd number of elements", function () {
        assert.deepStrictEqual(arrays.rotateRight([-10, 2, 3, 4, 20]), [20, -10, 2, 3, 4,]);
    });
});
// describe("arrayMerge", function () {
//     it("tests merge two arrays and sort", function () {
//         assert.strictEqual(arrays.arrayMerge([2,4,6,8], [1,3,5,7,9]),[1,2,3,4,5,6,7,8,9]);
//     });

//     it("tests merge two arrays and sort", function () {
//         assert.strictEqual(arrays.arrayMerge([-10,-6,4], [2, 3, 4])[-10,-6,2,3,4,4]);
//     });
// });



/*
describe("filterRange", function () {
    it("tests [0, 100, 3, 6, -555], 6, 60", function () {
        assert.strictDeepEqual(arrays.filterRange([0, 100, 3, 6, -555], 6, 120), [6, 100]);
    });
});


describe("filterPalindromes", function () {
    it("tests [not, a, kayak, eagle, racecar]", function () {
        assert.strictDeepEqual(
            arrays.filterPalindromes(["not", "a", "kayak", "eagle", "racecar"]), ["a", "kayak", "racecar"]);
    });
});

*/
describe("reverse2String", function () {
    it("Fox_Brown_Quick", function () {
        assert.strictEqual(
            arrays.reverse2String(["Quick", "Brown", "Fox"]),
            "Fox_Brown_Quick"
        );
    });
    it("4_3_2_1", function () {
        assert.strictEqual(arrays.reverse2String([1, 2, 3, 4]), "4_3_2_1");
    });
});


describe("enhancedIncludes", function () {
    it("[1, 2, 3, 4, 2], 2 ]", function () {
        assert.strictEqual(arrays.enhancedIncludes([1, 2, 3, 4, 2], 2), [true, 1, 4,]);
    });
});

/*
describe("Matrix", function () {
    describe("matrixAddition", function () {
        it("matrix addition of [[0,1,2],[9,8,7]] and [[6,5,4], [3,4,5]]  should be [ [ 6, 6, 6 ], [ 12, 12, 12 ] ]", function () {
            assert.deepStrictEqual(
                matrixAddition(
                    [
                        [0, 1, 2],
                        [9, 8, 7],
                    ],
                    [
                        [6, 5, 4],
                        [3, 4, 5],
                    ]
                ),
                [
                    [6, 6, 6],
                    [12, 12, 12],
                ]
            );
        });
    });
});

 */
