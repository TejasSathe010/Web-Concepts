let number1 = document.querySelector('#Number1');
let number2 = document.querySelector('#Number2');
let totalButton = document.querySelector('#total');

totalButton.addEventListener('click',(e) => {
  e.preventDefault();
  console.log("Hii")
  console.log(number1.textContent);
  console.log(number2.textContent);
})


let ans;

switch(operator){
  case '+':
    ans = first + second;
    break;
  case '-':
    ans = first - second;
    break;
  case '*':
    ans = first * second;
    break;
  case '/':
    ans = first / second;
    break;
  default:
    ans = "Wrong Operator";
} 

alert("Ans:- " + ans); 