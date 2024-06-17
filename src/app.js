const adviceId = document.getElementsByClassName("id") [0]
const Advice = document.getElementsByClassName("advice") [0]
const fetchBtn = document.querySelector(".circle")


function fetchAdvice(){
fetch("https://api.adviceslip.com/advice")
.then((response) => response.json())
.then((data) =>{ 
    adviceId.innerHTML = data.slip.id; 
    Advice.innerHTML = data.slip.advice;
});    
}                                                         

fetchAdvice();

fetchBtn.addEventListener("click", fetchAdvice);