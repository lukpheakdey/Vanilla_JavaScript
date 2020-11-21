
//Selector
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const arrColor = ["#785ce4", "#da4040", "rgba(133,122,200)", "#f15025", "rgb(79 249 224)", "rgb(255 181 119)"];


//Event Listener
btn.addEventListener("click", function(){
    const randomNum = randomNumber();
    document.body.style.backgroundColor = arrColor[randomNum];
    color.textContent = arrColor[randomNum];
});


//Function
function randomNumber() {
    return Math.floor(Math.random() * arrColor.length)
}