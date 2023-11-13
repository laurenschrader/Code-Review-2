// function to reset form (still need to add button
function resetForm() {
  formQuestions.reset();

  console.log("form reset")
  document.querySelector("#result").classList.add("hidden");
  document.querySelector("#resetButton").classList.add("hidden");

  //hide all q's except for first:
  const allQuestions = document.querySelectorAll(".form-group");

  allQuestions.forEach(function (question, index) {
    if (index === 0) {
      question.classList.remove("hidden");
    }
    else {
      question.classList.add("hidden");
    }
  })
}

window.addEventListener("load", function () {
  console.log("after load")

  //event listener for reset click, which then calls reset function:
  document.querySelector("#resetButton").addEventListener("click", function () {
    resetForm();
  });

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
    const question4 = document.querySelector('input[name="question4"]:checked');
    const question5 = document.querySelector('input[name="question5"]:checked');

    //sum up total yes counts:
    if (question1 && question1.value === 'yes') yesCounter++;
    if (question2 && question2.value === 'yes') yesCounter++;
    if (question3 && question3.value === 'yes') yesCounter++;
    if (question4 && question4.value === 'yes') yesCounter++;
    if (question5 && question5.value === 'yes') yesCounter++;

    console.log(yesCounter);
    //if all 5 yes: python. if 4 yes: c++. if 3 yes, Ruby. if 2 yes, ruby and c++. 
    //if 1 yes: you should really reconsider this whole programming thing..
    if (yesCounter == 5) {
      document.querySelector("#result").textContent = "You should study Python!";
    } else if (yesCounter == 4) {
      document.querySelector("#result").textContent = "You should study C++!";
    }
    else if (yesCounter == 3) {
      document.querySelector("#result").textContent = "You should study Ruby!";
    }
    else if (yesCounter == 2) {
      document.querySelector("#result").textContent = "You should study Ruby and C++!";
    }
    else if (yesCounter == 1) {
      document.querySelector("#result").textContent = "You should really reconsider this whole programming thing..";
    }
    document.querySelector("#result").classList.remove("hidden");
    document.querySelector("#resetButton").classList.remove("hidden");
  });
});