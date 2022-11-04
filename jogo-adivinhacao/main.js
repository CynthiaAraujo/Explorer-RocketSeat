// Variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector(".screen1 #btnTry");
const btnReset = document.querySelector(".screen2 #btnReset");


let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Eventos
btnTry.addEventListener("click", handleClick);
btnReset.addEventListener("click", handlePlayAgain);
document.addEventListener("keypress", enter);

// funções callback
function handleClick(event) {
  event.preventDefault();
  const inputValue = Number(inputNumber.value)
  if(inputValue >=0 &&  inputValue<=10 && inputNumber.value!="" ){

  const inputNumber = document.querySelector("#inputNumber");

  if (inputValue == Number(randomNumber)){
    toggleScreen();

    document.querySelector(
      ".screen2 h2"
    ).innerText = `Acertou em ${xAttempts} tentativas`;
  }

  document.querySelector(".screen1 #inputNumber").value = "";
  xAttempts++;
}
else{
  alert("Coloque um número entre 0 e 10")
}
}

function handlePlayAgain() {
  toggleScreen();
  xAttempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screen2.classList.toggle("hide");
  screen1.classList.toggle("hide");
}

function enter(event){
  if (event.key === "Enter" && !screen2.classList.contains("hide")) 
  {
    handlePlayAgain()
  }
}