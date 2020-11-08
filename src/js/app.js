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
    autoClickerCost.innerText = "Current Auto Clicker Cost:" + donutMaker.autoClickerCost;
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
    donutMultiplierCost.innerText = "Current Donut Multiplier Cost:" + Math.round(donutMaker.donutMultiplierCost * 10) / 10;
};

function updateDonutMultiplierButton(donutMaker) {
    const lightUpPurchaseDonutMultiplierButton = document.querySelector(".purchase-donut-multiplier-button")
    lightUpPurchaseDonutMultiplierButton.classList.add('gray-out-donut-multiplier-button');
    if(donutMaker.donutCount <  donutMaker.donutMultiplierCost) {
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






//--------------------------------Practice Modal---------------------------------------------



// document.getElementsByTagName('h2')[0].onclick = function () {
//     document.getElementsByTagName('h2')[0].style.fontSize = '30px';
//     alert("https://github.com/AShaw879")
   
// }
// const buttons = document.querySelectorAll('button');
// const modal = document.querySelector('.modal');
// const backdrop = document.querySelector('.backdrop');

// const outputParagraph = document.querySelector('#quote');
// const textEdit = document.querySelector('.modal textarea');

// const quote = 'A Modal Component on a Webpage - how hard could it be?';
// const editedQuote = '';
// outputParagraph.textContent = quote;

// function closeModal() {
//     modal.style.display = 'none';
//     backdrop.style.display = 'none';   
// }

// buttons[2].addEventListener("click", function() {
//     modal.style.display = 'block';
//     backdrop.style.display = 'block';
//     editedQuote = quote;
//     textEdit.value = quote;
// });

// buttons[0].addEventListener('click', closeModal);
// backdrop.addEventListener('click', closeModal);



// buttons[1].addEventListener('click', function() {
//    closeModal();
//     });

//     textEdit.addEventListener('input', function() {
//         editedQuote = textEdit.value;
//     });




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




