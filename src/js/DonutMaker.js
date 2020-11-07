class DonutMaker {
    constructor() {
        this._donutCount = 0; //********************************************CHANGE BACK TO 0*******************************************************
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
        

    }

   
    stashDonutsForTesting() {
        this._donutCount += 1000;
    }
    recordClick() {
        // this._donutCount++;
        this._donutCount = this._donutCount + Math.pow(1.2, this._donutMultiplierCount);
    }
    get donutCount() {
            return this._donutCount;
        }
        // recordAutoClick() {
        //     // this._donutCount++;

    // }
    //------------------------------Auto Clicker------------------------------------------------
    buyAutoClicker() {
            if (this._donutCount >= this._autoClickerCost) {
                // logic for when an auto clicker is bought
                this._donutCount -= this._autoClickerCost;
                // this._donutCount = this._donutCount - this._autoClickerCost;
                this._autoClickerCount++;
                this._autoClickerCost = this._autoClickerCost + (this._autoClickerCost * 0.1);
                this._autoClickerCost = Math.round(this._autoClickerCost);
            }
        }
        // recordAutoClick() {
        //     this._autoClickerCount++;
        // }
    get autoClickerCount() {
        return this._autoClickerCount;
    }
    get autoClickerCost() {
        return this._autoClickerCost;
    }
    activateAutoClickers() {
        // this._donutCount += this._autoClickerCount;
        // this._donutCount = this._donutCount + this._autoClickerCount;
        this._donutCount = this._donutCount + this._autoClickerCount * Math.pow(1.2, this._donutMultiplierCount);
    }
    

    //-------------------------------Donut Multiplier-----------------------------------------------
    buyDonutMultiplier() {
        if (this.donutCount >= this._donutMultiplierCost) {
            this._donutMultiplierCount++;
            this._donutCount -= this._donutMultiplierCost;
            this._donutMultiplierCost = this._donutMultiplierCost + (this._donutMultiplierCost * 0.1);

        }
    }
    get donutMultiplierCount() {
        return this._donutMultiplierCount;
    }
    get donutMultiplierCost() {
        return this._donutMultiplierCost;
    }


    resetGame() {
        this._donutCount = 0;
        this._autoClickerCount = 0;
        this._autoClickerCost = 100;
        this._donutMultiplierCount = 0;
        this._donutMultiplierCost = 10;
    }
}
export { DonutMaker }