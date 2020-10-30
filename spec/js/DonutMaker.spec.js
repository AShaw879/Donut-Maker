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
            //expect(underTest._clickCount).toBe(1);
        });
        it('Should add one click to the click count when it records a click.', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest._donutCount).toBe(2);
        });

    });
});

describe('FEATURE 2 : Be able to purchase the first Auto Clicker with 100 donuts from your donut count.', () => {
    beforeEach(() => {
        underTest = new DonutMaker;
        underTest.stashDonutsForTesting();
    });
    it('Can retireve and add to the Auto Clicker count', () => {
        underTest.recordAutoClick();
        expect(underTest._autoDonutCount).toBe(1);
    });
    it('Can complie total number of donuts', () => {
        underTest.recordClick();
        underTest.recordAutoClick();
        expect(underTest.totalDonutCount).toBe(2);
    });
});
