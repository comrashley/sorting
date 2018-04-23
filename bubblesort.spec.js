describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        
      expect( bubbleSort([]) ).toEqual( [] );
    });
    it('handles array with single item', function(){
        expect( bubbleSort([5])).toEqual([5])
    });
    it('handles array thats already in order', function(){
        expect( bubbleSort([1,2,3])).toEqual([1,2,3])
    });
    it('sorts array with multiple items out of order', function(){
        expect( bubbleSort([6,2,9,3])).toEqual([2,3,6,9])
    });
    it('counts number of swaps', function(){
        spyOn(window,'swap').and.callThrough();
        var sorted = bubbleSort([9,3,6,2,7,8]);
        expect(swap.calls.count()).toEqual(7)
    });
    it('counts number of compares', function(){
        spyOn(window,'compare').and.callThrough();
        var sorted = bubbleSort([9,3,6,2,7,8]);
        expect(compare.calls.count()).toEqual(15)
    });
    it('sorts array with duplicate items', function(){
        expect( bubbleSort([6,2,9,6,2])).toEqual([2,2,6,6,9])
    });
});