class DonutMaker{
    constructor(){
         this._donutCount = 0;
         this._autoDonutCount = 0;
         this._totalDonutCount = 0;
         this._numberOfAutoClickers = 0;
         this._autoClickerCost = 100;
        
    }
     recordClick(){
         this._donutCount++;
     }
     get donutCount(){
        return this._donutCount;
    }
     recordAutoClick(){
         this._autoDonutCount++;
     }
    get autoDonutCount(){
        return this._autoDonutCount;
    }
    get totalDonutCount(){
        this._totalDonutCount = this._donutCount + this._autoDonutCount;
        return this._totalDonutCount;
    }
    stashDonutsForTesting() {
        this._totalDonutCount += 1000;
    }
    
    
}



