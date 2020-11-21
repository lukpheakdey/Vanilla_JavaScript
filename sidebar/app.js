

//Selector
const toggleBtn = document.querySelector(".sidebar-toggle");
const closeBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

//Event and Listener
toggleBtn.addEventListener("click", function(){
    sidebar.classList.toggle("show-sidebar");
})

closeBtn.addEventListener("click", function(){
    sidebar.classList.remove("show-sidebar");
})


//Function