let productionSlider = document.getElementById("productionSlider");
let buySlider = document.getElementById("buySlider");
let productSlider = document.getElementById("productSlider");
let logisticsSlider = document.getElementById("logisticsSlider");


function clickToProductionSlider() {
    addClassNamesToOther(buySlider, productSlider, logisticsSlider);
    productionSlider.classList.remove("text-stroke-light", "opacity-0");
    productionSlider.parentElement.parentElement.classList.add("bg-opacity-5");
}

function clickToBuySlider() {
    addClassNamesToOther(productionSlider, productSlider, logisticsSlider);
    buySlider.classList.remove("text-stroke-light", "opacity-0");
    buySlider.parentElement.parentElement.classList.add("bg-opacity-5");
}

function clickToProductSlider() {
    addClassNamesToOther(productionSlider, buySlider, logisticsSlider);
    productSlider.classList.remove("text-stroke-light", "opacity-0");
    productSlider.parentElement.parentElement.classList.add("bg-opacity-5");
}

function clickToLogisticsSlider() {
    addClassNamesToOther(productionSlider, productSlider, buySlider);
    logisticsSlider.classList.remove("text-stroke-light", "opacity-0");
    logisticsSlider.parentElement.parentElement.classList.add("bg-opacity-5");
}

function addClassNamesToOther(...elem) {
    elem.forEach(element => element.classList.add('opacity-0', 'text-stroke-light'));
    elem.forEach(element => element.parentElement.parentElement.classList.remove("bg-opacity-5"));
    elem.forEach(element => element.parentElement.parentElement.classList.add("bg-opacity-3"));
}