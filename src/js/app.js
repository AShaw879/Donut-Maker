import {
    DonutMaker
} from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();

const donutButton = document.querySelector(".donut-button");

donutButton.addEventListener("click", () => {
    console.log('Donut button clicked');  //remember to take this out
    donutMaker.recordClick();
    updateDonutCount(donutMaker);
});

const updateDonutCount = function (donutMaker) {
    const donutCount = document.querySelector(".donut-count");
    donutCount.innerText = donutMaker.donutCount;
};

const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");

purchaseAutoClickerButton.addEventListener("click", () => {
    console.log('purchase auto clicker button clicked');   //remember to take this out
    donutMaker.buyAutoClicker();
    updateAutoClickerCount(donutMaker);
    updateDonutCount(donutMaker);
});

const updateAutoClickerCount = function (donutMaker) {
    const autoClickerCount = document.querySelector(".auto-clicker-count");
    autoClickerCount.innerText = donutMaker.autoClickerCount;
};

const purchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button");

purchaseDonutMultiplierButton.addEventListener("click", () => {
    console.log('purchase donut multiplier button clicked');  //remember to take this out
    donutMaker.buyDonutMultiplier();
    updateDonutMultiplierCount(donutMaker);
    updateDonutCount(donutMaker);
});

 const updateDonutMultiplierCount = function (donutMaker) {
     const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
     donutMultiplierCount.innerText = donutMaker.donutMultiplierCount;
 };