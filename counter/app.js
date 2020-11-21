//inital value
let count = 0;

//Selector
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//Event Listener
btns.forEach(function(btn){
    btn.addEventListener("click", function(e){
        const styles = e.currentTarget.classList;
        
        getIncraseDecreaseRest(styles);
    })
})


//Function
function getIncraseDecreaseRest(styles) {
    if(styles.contains("decrease"))
        count--;
    else if(styles.contains("increase"))
        count++;
    else    
        count = 0;
    
    if(count > 0) 
        value.style.color = "hsl(125, 67%, 44%)";
    if(count < 0)
        value.style.color = "hsl(360, 67%, 44%)";
    if(count===0)
        value.style.color = "#222";

    value.textContent = count;
}