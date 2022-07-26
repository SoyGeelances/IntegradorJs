const btnAllCat = document.querySelector("#all-cat-btn");
const btnAllWomen = document.querySelector("#women-cat-btn");
const btnAllMen = document.querySelector("#men-cat-btn");

let catMen = document.getElementsByClassName("men-cat");
let catWom = document.getElementsByClassName("women-cat");
let allCards = document.getElementsByClassName("card");

function RemoveClass(elemt) {
    console.log("true");
    elemt.classList.remove('hidden-cat');
}

function AddClass(elemt) {
    for (var i = 0; i < elemt.length; i++) {
        elemt[i].className += " hidden-cat";
    }
}

btnAllMen.addEventListener("click", function () {
    console.log("boton Men");

    for (var i = 0; i < catWom.length; i++) {
        let WomCurrent = catWom[i];
        let MenCurrent = catMen[i];
        if (MenCurrent.classList.contains('hidden-cat')) {
            console.log("true");
            RemoveClass(MenCurrent);
            AddClass(catWom);
        } else {
            console.log("false");
            WomCurrent.className += " hidden-cat";
        }
    }
})


btnAllWomen.addEventListener("click", function () {
    console.log("boton Women");

    for (var i = 0; i < catMen.length; i++) {
        let WomCurrent = catWom[i];
        let MenCurrent = catMen[i];
        if (WomCurrent.classList.contains('hidden-cat')) {
            console.log("true");
            RemoveClass(WomCurrent);
            AddClass(catMen);
        } else {
            console.log("false");
            MenCurrent.className += " hidden-cat";
        }
    }
})


btnAllCat.addEventListener("click", function () {
    for (var i = 0; i < allCards.length; i++) {
        let cardCurrent = allCards[i];
        if (cardCurrent.classList.contains('hidden-cat')) {
            RemoveClass(cardCurrent);
        }
    }
})