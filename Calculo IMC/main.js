import { Modal } from './modal.js'
import {AlertError} from "./alert-error.js"
import {notANumber, calculateIMC } from './utils.js'

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

inputHeight.oninput = () => AlertError.close()
inputWeight.oninput = () => AlertError.close()

form.onsubmit = function (event) {
  console.log(Modal.btnClose)
  event.preventDefault();

  const weigth = inputWeight.value;
  const height = inputHeight.value;

  const weigthOrHeightIsNotANumber =  notANumber(weigth) || notANumber(height)
  if(weigthOrHeightIsNotANumber){
    AlertError.open()
    return; 
  }

  AlertError.close()
    
  
  const result = calculateIMC(weigth, height);
  displayResultMessage(result)
}

function displayResultMessage(result){
  const message = `Seu IMC é de ${result}`;
  Modal.modalMensage.innerText = message;

  Modal.open()
}



