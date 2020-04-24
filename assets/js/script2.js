// typing effect for parent
var typedText2 = document.getElementById("typedTitle2");
var text2 = "Hi there! We're Bernice's parents.";
var speed = 150;
let j = 0;

function type2() {
// j = 0
if (j < text2.length) {
    typedText2.innerHTML += text2.charAt(j);
    j++;
    setTimeout(type2, speed);
    }
}

type2();