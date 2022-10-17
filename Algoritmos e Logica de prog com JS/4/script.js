/* Capture 10 itens para compor a lista de um supermercado
Após capturar os 10 itens, imprima-os, seperando por vírgula.
*/

let items = []

for (let item = 0; item < 10; item++){
 let itemName = prompt("Digite o item " + (item+1))

 items[item] = itemName
}

alert(items)

/* **Jogo de advinhação**
  Apresente a mensagem ao usuário:
  "Advinhe o número que estou pensando? Está entre 0 e 10"

  Crie uma lógica para gerar um número aleatório
  E verificar se o número digitado é o mesmo que o aleatório gerado pelo sistema.
  
  Enquanto o usuário não adivinhar o número, mostrar a mensagem:
  "Erro, tente novamente"

  Caso o usuário acerto o número, mostrar a mensagem:
  "Parabéns! Você adivinhou o número em x tentativas"

  Substitua o "x" da mensagemm, pelo número de tentativas.
*/


let result = prompt ("Advinhe o número que estou pensando? Está entre 0 e 10")
const randomNumber = Math.round(Math.random()*10)
let xAttempts = 1;

console.log(result, randomNumber, xAttempts)

while (Number(result) != randomNumber) {
  result = prompt("Erro, tente novamente")
  xAttempts++
}
let NumberTentativas = "";

if (xAttempts !=1){
  NumberTentativas = "s"
}

alert(`Parabéns! O número que eu pensei foi ${randomNumber}. Você adivinhou o número em ${xAttempts} tentativa${NumberTentativas}`)



