class DonutMaker {
    constructor() {
        this._donutCount = 0;
        this._autoDonutCount = 0;
        this._totalDonutCount = 0;
        this._numberOfAutoClickers = 0;
        this._autoClickerCost = 100;
    }

    recordClick() {
        this._donutCount++;
    }
    get donutCount() {
        return this._donutCount;
    }
    recordAutoClick() {
        this._autoDonutCount++;
    }
    get autoDonutCount() {
        return this._autoDonutCount;
    }
    get totalDonutCount() {
        this._totalDonutCount = this._donutCount + this._autoDonutCount;
        return this._totalDonutCount;
    }
    stashDonutsForTesting() {
        this._totalDonutCount += 1000;
    }
    buyAutoClicker() {
        if (this._totalDonutCount >= this.autoClickerCost) {
            this._totalDonutCount -= this.autoClickerCost;
            this._numberOfAutoClickers++;
        } else {}
     
    }
    get autoClickersPurchased() {
        return this._numberOfAutoClickers;
    }
    get autoClickerCost() {
        let unRoundedCost = 100 * Math.pow(1.1, this._numberOfAutoClickers - 1);
        this._autoClickerCost = Math.round(unRoundedCost)
        return this._autoClickerCost;
    }
}






