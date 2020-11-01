let underTest;
describe('FEATURE 1 : Have a way to count donuts.', () => {
    describe('Can add to donut count.', () => {
        let underTest;
        beforeEach(() => {
            underTest = new DonutMaker();
        });
        it('Should start with a click count of 0.', () => {
            expect(underTest._donutCount).toBe(0);
        });
        it('Should add one click to the click count when it records a click.', () => {
            underTest.recordClick();
            expect(underTest._donutCount).toBe(1);

        });
    });
});


describe('Feature 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut Count.', () => {
    beforeEach(() => {
        // Arrangement
        underTest = new DonutMaker();
        underTest.stashDonutsForTesting();
    });
    it('Can retirieve and add to the Auto Clicker count', () => {
        // Action
        underTest.buyAutoClicker();
        // Assertion
        expect(underTest._autoClickerCount).toBe(1);
    });
    // it('Can accumulate total number of donuts', () => {
    //     underTest.recordClick();
    //     underTest.recordAutoClick();
    //     expect(underTest._donutCount).toBe(1002);
    // });
    it('Subtracts the Auto Clicker cost from your donut count', () => {
        underTest.buyAutoClicker();
        expect(underTest._donutCount).toBe(900);
    });
});
// -----------------------------------------All Tests Passing to Here----------------------------------------------------------
describe('FEATURE 3 : The cost of each Auto Clicker will go up with each purchase.', () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsForTesting();
    });
    it('Increases the cost of the first Auto Clicker by ten percent', () => {
        underTest.buyAutoClicker();
        expect(underTest._autoClickerCost).toBe(110);
    });
    it('Increases the cost of an additional Auto Clicker by ten percent', () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        expect(underTest._autoClickerCost).toBe(121);
    });

    

});
