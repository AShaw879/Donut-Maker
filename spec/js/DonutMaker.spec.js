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
describe('FEATURE 4 : Ensure that there are enough donuts to buy an Auto Clicker.',() => {
    beforeEach(() => {
        underTest = new DonutMaker();
    });
    it('Prevent the Auto Clicker count from going up if there are not enough donuts to purchase a Auto Clicker.', () => {
        underTest.buyAutoClicker();
        expect(underTest._autoClickerCount).toBe(0);
    });
});
describe('FEATURE 5 : The amount of Auto Clickers affect the amount of donuts added when an Activate Auto Clickers event is called.', () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsForTesting();
    });
    it('When the activate Auto Clickers event is executed, increase the donut total by the amount of Auto Clickers owned.', () => {
        underTest.buyAutoClicker();
        underTest.buyAutoClicker();
        underTest.activateAutoClickers();
        expect(underTest._donutCount).toBe(792);
    });

});
describe('FEATURE 6 : Be able to purchase the first Donut Multiplier with 10 donuts from your donut count.', () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsForTesting();
    });
    it('Can retrieve and add to the Donut Multiplier count.', () => {
        // Action
        underTest.buyDonutMultiplier();
        // Assertion
        expect(underTest._donutMultiplierCount).toBe(1); 
    });
    it('Subtract the amount of the Donut Multiplier cost from the donut count.', () => {
        underTest.buyDonutMultiplier();
        expect(underTest._donutCount).toBe(990);
    });

});
describe('FEATURE 7 : The cost of each Donut Multiplier will go up with each purchase.', () => {
    beforeEach(() => {
        underTest = new DonutMaker();
        underTest.stashDonutsForTesting();
    });
    it('Increases the cost of the first Donut Multiplier by ten percent', () => {
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCost).toBe(11);
    });
    it('Increases the cost of an additional Donut Multiplier by ten percent', () => {
        underTest.buyDonutMultiplier();
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCost).toBe(12.1);
    });
});
describe('FEATURE 8 : Ensure that there are enough donuts to buy a Donut Multiplier.', () => {
    beforeEach(() => {
        underTest = new DonutMaker();
    });
    it('Prevent the Donut Multiplier count from going up if there are not enough donuts to purchase a Donut Multiplier.', () => {
        underTest.buyDonutMultiplier();
        expect(underTest._donutMultiplierCount).toBe(0);
    });
});