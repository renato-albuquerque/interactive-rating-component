// To change the style (background and color) 
const rating_1 = document.querySelector("#number-1")
const rating_2 = document.querySelector("#number-2")
const rating_3 = document.querySelector("#number-3")
const rating_4 = document.querySelector("#number-4")
const rating_5 = document.querySelector("#number-5")

// To get the values
const value_1 = document.querySelector("#option-1")
const value_2 = document.querySelector("#option-2")
const value_3 = document.querySelector("#option-3")
const value_4 = document.querySelector("#option-4")
const value_5 = document.querySelector("#option-5")
/* const options = document.querySelector('.allNumbers'); */

/* const buttonSubmit = document.querySelector(".btnSubmit") */
const paragraph = document.querySelector(".paragraphThanksPage") 

// FUNCTIONS CHOOSE RATING

function chooseRating_1() {
    rating_1.style.backgroundColor = "#959eac"
    rating_1.style.color = "#ffffff"
    rating_1.style.fontWeight = "700"

    reset_2();
    reset_3();
    reset_4();
    reset_5(); 
}

function chooseRating_2() {
    rating_2.style.backgroundColor = "#959eac"
    rating_2.style.color = "#ffffff"
    rating_2.style.fontWeight = "700"

    reset_1();
    reset_3();
    reset_4();
    reset_5();
}

function chooseRating_3() {
    rating_3.style.backgroundColor = "#959eac"
    rating_3.style.color = "#ffffff"
    rating_3.style.fontWeight = "700"

    reset_1();
    reset_2();
    reset_4();
    reset_5();
}

function chooseRating_4() {
    rating_4.style.backgroundColor = "#959eac"
    rating_4.style.color = "#ffffff"
    rating_4.style.fontWeight = "700"

    reset_1();
    reset_2();
    reset_3();
    reset_5();
}

function chooseRating_5() {
    rating_5.style.backgroundColor = "#959eac"
    rating_5.style.color = "#ffffff"
    rating_5.style.fontWeight = "700"

    reset_1();
    reset_2();
    reset_3();
    reset_4();
}

// FUNCTIONS RESET

function reset_1() {
    rating_1.style.backgroundColor = "#3b444e"
    rating_1.style.color = "#7c8798"
    rating_1.style.fontWeight = "400"
}

function reset_2() {
    rating_2.style.backgroundColor = "#3b444e"
    rating_2.style.color = "#7c8798"
    rating_2.style.fontWeight = "400"
}

function reset_3() {
    rating_3.style.backgroundColor = "#3b444e"
    rating_3.style.color = "#7c8798"
    rating_3.style.fontWeight = "400"
}

function reset_4() {
    rating_4.style.backgroundColor = "#3b444e"
    rating_4.style.color = "#7c8798"
    rating_4.style.fontWeight = "400"
}

function reset_5() {
    rating_5.style.backgroundColor = "#3b444e"
    rating_5.style.color = "#7c8798"
    rating_5.style.fontWeight = "400"
}

// FUNCTION CHANGE TEXT "THANK YOU PAGE"

function buttonSubmit() {
   
    }
 
/* buttonSubmit() */

