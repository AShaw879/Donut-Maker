import {
    DonutMaker
} from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();
//-----------------------Create Click Me Button To Make Donuts-------------------------------
const updateDonutCount = function (donutMaker) {
    const donutCount = document.querySelector(".donut-count");
    donutCount.innerText = donutMaker.donutCount;
};

const donutButton = document.querySelector(".donut-button");

donutButton.addEventListener("click", () => {
    console.log('Donut button clicked');  //remember to take this out
    donutMaker.recordClick();
    updateDonutCount(donutMaker);
});


//----------------------Purchase Auto Clicker Button & Keep Track Of Number Of Auto Clickers------------------------
const updateAutoClickerCount = function (donutMaker) {
    const autoClickerCount = document.querySelector(".auto-clicker-count");
    autoClickerCount.innerText = donutMaker.autoClickerCount;
};

const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");

purchaseAutoClickerButton.addEventListener("click", () => { //original
    donutMaker.buyAutoClicker();
    updateAutoClickerCount(donutMaker);
    updateDonutCount(donutMaker);  //original 
    displayAutoClickerCost(donutMaker);
    activateAutoClicker(donutMaker);
    // disableBuyAutoClicker(donutMaker);
});
const displayAutoClickerCost = function(donutMaker) {
    const autoClickerCost = document.querySelector(".auto-clicker-cost");
    autoClickerCost.innerText = "next Auto-Clicker-Cost:" + donutMaker.autoClickerCost;
};


//--------------  Purchase Donut Multiplier Button & Keep Track Of Number of Donut Multipliers---------------------

const updateDonutMultiplierCount = function (donutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = donutMaker.donutMultiplierCount;
};

const purchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button");

purchaseDonutMultiplierButton.addEventListener("click", () => {
    console.log('purchase donut multiplier button clicked');  //remember to take this out
    donutMaker.buyDonutMultiplier();
    updateDonutMultiplierCount(donutMaker);
    updateDonutCount(donutMaker);
});

const displayDonutMultiplierCost = function(donutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText = "next Donut-Multiplier-Cost:" + donutMaker.donutMultiplierCost;
};


 