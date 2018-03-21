//variables
var i;
var n = 0; //slides index
var slidesList = document.getElementsByClassName("slide");
var dotsList = document.getElementsByClassName("dot");
var currTitle = document.getElementById("slide-title")
var titleList = ["COLOR RUN: 2016", "BUBBLE SOCCER: 2016", "MOCKTAILS: 2017"];

//changeSlide function
function changeSlide(x, y) { //x should be 1 or -1, if y = dot then x is index
  if (slidesList[n].className != "fade") slidesList[n].classList.add("fade");
  if (y === "dot" && x == n) return; //clicking the same dot
  slidesList[n].style.display = "none";
  if (y === "dot") n = x;
  else {
    n += x;
    if (n < 0) n = slidesList.length - 1; //wrap around
    if (n > slidesList.length - 1) n = 0; //^^
  }
  for (i = 0; i < slidesList.length; i++){ //handle active dot
    if (i != n) dotsList[i].classList.remove("active-dot");
    else dotsList[i].classList.add("active-dot");
  }
  slidesList[n].style.display = "block";
  currTitle.innerHTML = titleList[n]; //change title
}
