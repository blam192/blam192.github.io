// dishes

function unhideDishes(dishID){
    document.getElementById("fiveDishes").classList.remove("hidden");
    document.getElementById(dishID).classList.remove("hidden");
}

// dish1 upon click
function unhideDish1() {
    unhideDishes("dish1");
}

document.getElementById("food1").onclick = unhideDish1;

// dish2 upon click
function unhideDish2() {
    unhideDishes("dish2");
}

document.getElementById("food2").onclick = unhideDish2;

// dish3 upon click
function unhideDish3() {
    unhideDishes("dish3");
}

document.getElementById("food3").onclick = unhideDish3;

// dish4 upon click
function unhideDish4() {
    unhideDishes("dish4");
}

document.getElementById("food4").onclick = unhideDish4;

// dish5 upon click
function unhideDish5() {
    unhideDishes("dish5");
}

document.getElementById("food5").onclick = unhideDish5;

// NEED TO MAKE A CODE TO GO BACK TO OG PAGE



function hideDishes(dishID) {
document.getElementById('fiveDishes').classList.add('hidden');
document.getElementById(dishID).classList.add("hidden");
}

var dishesElements = document.getElementsByClassName("dishes");

function closepopup(){
    for (var i=0; i < dishesElements.length; i++) {
        var id = dishesElements[i].id;
        hideDishes(id);
    }
}

document.getElementById("fiveDishes").onclick = closepopup;
