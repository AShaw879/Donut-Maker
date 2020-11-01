class DonutMaker {
    constructor() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;

    }

    stashDonutsForTesting() {
        this._donutCount += 1000;
    }
    recordClick() {
        this._donutCount++;
    }
    get donutCount() {
        return this._donutCount;
    }
    // recordAutoClick() {
    //     this._donutCount++;
    // }
    buyAutoClicker() {
        this._donutCount -= this._autoClickerCost;
        this._autoClickerCount++;
        this._autoClickerCost = this._autoClickerCost + (this._autoClickerCost * 0.1);
    }
    // ---------------All tests passing feature 1 & 2----------------------------------
    // recordAutoClick() {
    //     this._autoClickerCount++;
    // }
    get autoClickerCount() {
        return this._autoClickerCount;
    }
    get autoClickerCost(){
        return this._autoClickerCost;
    }


}