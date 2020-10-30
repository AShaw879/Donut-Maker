let underTest;
describe('FEATURE 1 : Have a way to count donuts.', () => {
    describe('Can add to donut count.', () => {
        let underTest;
        beforeEach(() => {
            underTest = new DonutMaker;
        });
        it('Should start with a click count of 0.', () => {
            expect(underTest._donutCount).toBe(0);
        });
        it('Should add one click to the click count when it records a click.', () => {
            underTest.recordClick();
            expect(underTest._donutCount).toBe(1);
            
        });
        it('Should add one click to the click count when it records a click.', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest._donutCount).toBe(2);
        });

    });
});


    describe('Feature 2 :Be able to purchase the first Auto Clicker with 100 donuts from your donut Count.', () => {
        beforeEach(() => {
            underTest = new DonutMaker;
            underTest.stashDonutsForTesting();
        });
        it('Can retirieve and add to the Auto Clicker count', () => {
            underTest.recordAutoClick();
            expect(underTest._donutCount).toBe(1001);
        });
        it('Can accumulate total number of donuts', () => {
            underTest.recordClick();
            underTest.recordAutoClick();
            expect(underTest._donutCount).toBe(1002);
        });
        it('Subtract the Auto Clicker cost form your donut count', () => {
            underTest.buyAutoClicker();
            expect(underTest._donutCount).toBe(900);
        });
    });


