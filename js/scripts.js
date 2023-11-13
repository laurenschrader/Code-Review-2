// new code below
console.log("before")
window.addEventListener("load", function() {
  console.log("after load")
  let form = document.querySelector("form");
  console.log(form)
  form.addEventListener("submit", function(event) {
    console.log(document.querySelector("div#result"))
    console.log("after")
    document.querySelector("div.result").removeAttribute("class");
    event.preventDefault();
  }); 
// new code below  
});