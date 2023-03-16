var expect= require('chai').expect;

describe('test_suite1', function(){
    before('setup code', function(){
        console.log('setup code');
    });

    after('teardown code', function(){
        console.log('teardown code');
    });

    beforeEach('setup code for each test', function(){
        console.log('setup code for each test');
    });

    afterEach('teardown code for each test', function(){
        console.log('teardown code for each test');
    });

    it('test1', function(){
        console.log('test1');
        expect(true).to.equal(true);
    });

    it('test2', function(){
        console.log('test2');
        expect(true).to.equal(true);
    });
});