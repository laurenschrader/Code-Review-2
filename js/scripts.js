// function to reset form (still need to add button
function resetForm() {
  form.reset(); 
  document.querySelector("#result").classList.add("hidden");
}

//event listener for reset click, which then calls reset function:
document.querySelector("#resetButton").addEventListener("click", function() {
  resetForm();
});

window.addEventListener("load", function () {
  console.log("after load")

  const form = document.querySelector("#formQuestions");
  //next button - 1
  // nextButton fxn as variable:
  const nextButton = document.querySelectorAll(".nextButton");

  //my function to handle "next" button clicks
  function handleNextButtonClick(event) {
    event.preventDefault();
    const currentQuestion = event.target.closest(".form-group");
    const nextQuestionId = event.target.getAttribute("data-target");
    const nextQuestion = document.querySelector(nextQuestionId);

    //unhide next question:
    if (nextQuestion) {
      nextQuestion.classList.remove("hidden")
    }
  }

  //event listeners to each next button clicks:
  nextButton.forEach(function (button) {
    button.addEventListener("click", handleNextButtonClick);
  });

  //event listener for final form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("form submitted");

    let yesCounter = 0;

    // check each question value:
    const question1 = document.querySelector('input[name="question1"]:checked');
    const question2 = document.querySelector('input[name="question2"]:checked');
    const question3 = document.querySelector('input[name="question3"]:checked');

    //sum up total yes counts:
    if (question1 && question1.value === 'yes') yesCounter++;
    if (question2 && question2.value === 'yes') yesCounter++;
    if (question3 && question3.value === 'yes') yesCounter++;

    console.log(yesCounter);
//if all yes: python. if 2 yes: c++. if 1 yes, Ruby.
    if (yesCounter == 3) {
      document.querySelector(".result").textContent = "You should study Python.";
    } else if (yesCounter == 2) {
      document.querySelector(".result").textContent = "You should study C++";
    }
    else if (yesCounter == 1) {
      document.querySelector(".result").textContent = "You should study Ruby";
    }

    document.querySelector("div.result").removeAttribute("class");
  });
});