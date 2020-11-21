

//selector
const questions = document.querySelectorAll(".question");

//Event and Listener
questions.forEach(function (question) {
    const btn = question.querySelector(".question-btn");
  
    btn.addEventListener("click", function () {

      questions.forEach(function (item) {
        if (item !== question) {
          item.classList.remove("show-text");
        }
      });
  
      question.classList.toggle("show-text");
    });
  });

//Function