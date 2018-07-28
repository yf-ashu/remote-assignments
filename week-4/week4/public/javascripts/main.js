
let count = document.querySelector('.number');
let input = document.getElementById("number");

const display=document.querySelector('.display');
const submit=document.querySelector('.submit');

const connect=()=>{
  console.log('數字為'+count.value)
fetch(`http://localhost:3000/getData?number=${count.value}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    display.textContent=myJson;
    console.log(myJson);
  });
}

submit.addEventListener('click',connect);



