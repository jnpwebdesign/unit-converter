
let convertBtn = document.getElementById("convert-btn");
let inputTxt = document.getElementById("input-text");
let lengthAnswer = document.getElementById("length-answer");
let volumeAnswer = document.getElementById("volume-answer");
let massAnswer = document.getElementById("mass-answer");
let number = 1;

const needsConversionObj = { metersToFeet: 3.281, feetToMeters: 0.304, litersToGallons: 0.264, gallonsToLiters: 3.785, kilosToPounds: 2.204, poundsToKilos: 0.454 };

convertBtn.addEventListener("click", function() {
    let productObj = {...needsConversionObj};
    number = inputTxt.value;
    for (let property in productObj) {
        productObj[property] = (number * productObj[property]).toFixed(3);
    }
    lengthAnswer.innerHTML = `${number} meters = ${productObj.metersToFeet} feet | ${number} feet = ${productObj.feetToMeters} meters`;
    volumeAnswer.innerHTML = `${number} liters = ${productObj.litersToGallons} gallons | ${number} gallons = ${productObj.gallonsToLiters} liters`
    massAnswer.innerHTML = `${number} kilos = ${productObj.kilosToPounds} pounds | ${number} pounds = ${productObj.poundsToKilos} kilos`
})