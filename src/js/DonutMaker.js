class DonutMaker {
    constructor() {
        this._donutCount = 0;
       
    }

    stashDonutsForTesting() {
        this._donutCount += 1000;
    }
    recordClick(){
        this._donutCount++;
    }
    get donutCount() {
        return this._donutCount;
    }
    recordAutoClick() {
        this._donutCount++;
    }
    buyAutoClicker(){
        this._donutCount -= 100;
    }

}