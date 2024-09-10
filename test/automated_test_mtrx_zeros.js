import Mtrx from '../node_modules/mtrx/index.js';
import { assert } from 'chai';

 
describe("zeros", function() {

    var zeroMtrxSize3 = [ [ 0, 0, 0 ], [ 0, 0, 0 ], [ 0, 0, 0 ] ];
    var zeroMtrxSize4 = [ [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ], [ 0, 0, 0, 0 ],[ 0, 0, 0, 0 ] ];
    var zeroMtrxSize5 = [ [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ], [ 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0 ],[ 0, 0, 0, 0, 0] ];

    it("creates matrix filled with 0 with size 3", function() {
        assert.deepEqual(Mtrx.zeros(3),zeroMtrxSize3);
    });
  
    it("creates matrix filled with 0 with size 4", function() {
        assert.deepEqual(Mtrx.zeros(4),zeroMtrxSize4);
    });

    it("creates matrix filled with 0 with size 5", function() {
        assert.deepEqual(Mtrx.zeros(5),zeroMtrxSize5);
    });
  
  });

