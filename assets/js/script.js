// typingeffect for index

var typedText = document.getElementById("typedTitle");
var text = "Hi! This is me.";
var speed = 150;
let i = 0;

function type() {
  // i = 0
  if (i < text.length) {
    typedText.innerHTML += text.charAt(i);
    i++;
    setTimeout(type, speed);
  }
  else {
    typedText.innerHTML = "Hi! This is <span class='meC'>me</span>.";
    }
}

type();

 // popup text when you click on "me"

var infoMe;

function unhideinfo() {
  infoMe = document.getElementById("me_info");
  if (infoMe.style.display === "none") {
    infoMe.style.display = "block";
  } else {
    infoMe.style.display = "none";
  }
}

document.getElementById("typedTitle").onclick = unhideinfo;


