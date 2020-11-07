import {
    DonutMaker
} from "/src/js/DonutMaker.js";

const donutMaker = new DonutMaker();
//-----------------------Create Click Me Button To Make Donuts-------------------------------
const updateDonutCount = function (donutMaker) {
    const donutCount = document.querySelector(".donut-count");
    // donutCount.innerText = "You have made:" + donutMaker.donutCount;
    donutCount.innerText = Math.round(donutMaker.donutCount * 10) / 10
    updateDonutMultiplierButton(donutMaker);
    updateAutoClickerButton(donutMaker);
};

const donutButton = document.querySelector(".donut-button");
donutButton.addEventListener("click", () => {
    donutMaker.recordClick();
    updateDonutCount(donutMaker);
});


//----------------------Purchase Auto Clicker Button & Keep Track Of Number Of Auto Clickers------------------------
const updateAutoClickerCount = function (donutMaker) {
    const autoClickerCount = document.querySelector(".auto-clicker-count");
    autoClickerCount.innerText = donutMaker.autoClickerCount;
};

const purchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button");
purchaseAutoClickerButton.addEventListener("click", () => {
    donutMaker.buyAutoClicker();
    updateAutoClickerCount(donutMaker);
    updateDonutCount(donutMaker);
    displayAutoClickerCost(donutMaker);

});
const displayAutoClickerCost = function (donutMaker) {
    const autoClickerCost = document.querySelector(".auto-clicker-cost");
    autoClickerCost.innerText = "Next Auto-Clicker-Cost:" + donutMaker.autoClickerCost;
};

function updateAutoClickerButton(donutMaker) {
    const lightUpPurchaseAutoClickerButton = document.querySelector(".purchase-auto-clicker-button")
    lightUpPurchaseAutoClickerButton.classList.add('gray-out-auto-clicker-button');
    if(donutMaker.donutCount < donutMaker.autoClickerCost) {
        lightUpPurchaseAutoClickerButton.classList.toggle('gray-out-auto-clicker-button');
    }
};


//--------------  Purchase Donut Multiplier Button & Keep Track Of Number of Donut Multipliers---------------------

const updateDonutMultiplierCount = function (donutMaker) {
    const donutMultiplierCount = document.querySelector(".donut-multiplier-count");
    donutMultiplierCount.innerText = donutMaker.donutMultiplierCount;
};

const purchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button");
purchaseDonutMultiplierButton.addEventListener("click", () => {

    donutMaker.buyDonutMultiplier();
    updateDonutMultiplierCount(donutMaker);
    updateDonutCount(donutMaker);
    displayDonutMultiplierCost(donutMaker);
    // disablePurchaseDonutMultiplier(donutMaker);
});

const displayDonutMultiplierCost = function (donutMaker) {
    const donutMultiplierCost = document.querySelector(".donut-multiplier-cost");
    donutMultiplierCost.innerText = "Next Donut-Multiplier-Cost:" + Math.round(donutMaker.donutMultiplierCost * 10) / 10;
};

function updateDonutMultiplierButton(donutMaker) {
    const lightUpPurchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button")
    lightUpPurchaseDonutMultiplierButton.classList.add('gray-out-donut-multiplier-button');
    if(donutMaker.donutCount < donutMaker.donutMultiplierCost) {
        lightUpPurchaseDonutMultiplierButton.classList.toggle('gray-out-donut-multiplier-button');
    }
}




//----------------------------Reset Game Button---------------------------------------------------------------------
// const activateResetGame = document.querySelector(".reset-game");
// activateResetGame.addEventListener("click", () => {
// donutMaker = new DonutMaker();
// beforeEach(() => {
//     underTest = new DonutMaker();
    // donutMaker.resetGame();
//     updateDonutCount(donutMaker);
//     updatedonutMultiplierCount(donutMaker);
//     // donutMaker.updateDonutMultiplierCount();
//     displayDonutMultiplierCost(donutMaker);
//     updateAutoClickerCount(donutMaker);
//     displayAutoClickerCost(donutMaker);
// });




//document.querySelector(".reset-button").reset;







// function updateDonutMultiplierButton() {
//     const lightUpPurchaseDonutMultiplierButton = document.querySelector("")
// }

// const disablePurchaseDonutMultiplier = function(donutMaker) {
//     if (donutCount < donutMultiplierCost) {
//         document.querySelector(".purhase-donutMultiplier-button").disabled = true;
//     }
// }

// const myButton = document.querySelector(".donut-multiplier-button");
// myButton.disabled = true;

// var modal1 = document.getElementById("compny-modal");
// var button1 = document.getElementById("company-choice");
// var span = document.getElementsByClassName("close1")[0];

// button1.onclick = function() {
//     modal1.style.display = "block";
// }

// span.onclick = function( {
//     modal1.style.display = "none";
// }

// window.onclick = function(event) {
//     if(event.target == modal1) {
//         modal1.style.display = "none";
//     }
// }




