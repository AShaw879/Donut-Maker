import {
    DonutMaker
} from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();

const donutButton = document.querySelector(".donut-button");

donutButton.addEventListener("click", () => {
    console.log('Donut button clicked');
    donutMaker.recordClick();
    updateDonutCount(donutMaker);
});

const updateDonutCount = function (donutMaker) {
    const donutCount = document.querySelector(".donut-count");
    donutCount.innerText = donutMaker.donutCount;
 };

 const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");

 purchaseAutoClickerButton.addEventListener("click", () => {
    console.log('purchase auto clicker button clicked');
    donutMaker.buyAutoClicker();
    updateAutoClickerCount(donutMaker);
    updateDonutCount(donutMaker);
});

const updateAutoClickerCount = function (donutMaker) {
    const autoClickerCount = document.querySelector(".auto-clicker-count");
    autoClickerCount.innerText = donutMaker.autoClickerCount;
 };