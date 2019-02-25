QUnit.test("Area", function (assert) {
    assert.equal(area(2, 5),10, 'Tested 2 and 5 to get 10');
    assert.equal(area(0, 0),0, 'Tested with both 0. ');
    assert.equal(area(4, 5),20,'Tested with 4 and 5 to get 20' );
    assert.equal(area(10, 10),100, 'Tested with 10 and 10 to get 100. ');
});