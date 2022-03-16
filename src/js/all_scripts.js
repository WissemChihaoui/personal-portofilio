var blop = $("#blop")[0];
$(".back").mouseenter(function () {
  blop.play();
});

function sleep(ms) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < ms);
}
function service() {
  document.getElementById("c1").style.transition = "1s";
  document.getElementById("c1").style.opacity = "0%";
  document.getElementById("c2").style.display = "flex";
  document.getElementById("c1").style.display = "none";
  document.getElementById("c3").style.display = "none";
}
function home() {
  document.getElementById("c1").style.display = "flex";
  document.getElementById("c1").style.transition = "1s";
  document.getElementById("c1").style.opacity = "100%";
  document.getElementById("c2").style.display = "none";
  document.getElementById("c3").style.display = "none";
  //sleep(1000);
}
function resume() {
  document.getElementById("c2").style.display = "none";
  document.getElementById("c1").style.display = "none";
  document.getElementById("c3").style.display = "flex";
}
function contact() {
  document.getElementById("contact").style.display = "flex";
  document.getElementById("page").style.opacity = "50%";
  document.getElementById("page").style.pointerEvents = "none";
}
function closepopup() {
  document.getElementById("contact").style.display = "none";
  document.getElementById("page").style.opacity = "100%";
  document.getElementById("page").style.pointerEvents = "";
  
}
