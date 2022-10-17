/* Capturar dois números e fazer as operações de :
Soma, subtração, multiplicação, divisão e resto da divisão */

alert("Digite dois número");
let numberOne = prompt("Digite o primeiro número");
let numberTwo = prompt("Digite o segundo número");
numberOne = Number(numberOne);
numberTwo = Number(numberTwo);


const sum = (numberOne + numberTwo);
const subtraction = (numberOne) - (numberTwo); 
const multi = (numberOne)*(numberTwo);
const div = numberOne / numberTwo;
const restdiv = numberOne % numberTwo ;

alert( "A soma é: " + sum)
alert("A subtração é " + subtraction)
alert("A multiplicação é " + multi)
alert (" A divisão é : " + div)
alert (" O resto da divisão é " + restdiv)

/* Calcular a média de um aluno */

nome = prompt("Qual o nome do aluno?");
notaOne = prompt("Qual a primeira nota?");
notaTwo = prompt("Qual a segunda nota?");
nota3 = prompt("Qual a terceira nota?");

let media = (Number(notaOne) + Number(notaTwo) + Number(nota3))/3;
media = media.toFixed(2)

if ( media > 6 ) {
  alert("O(a) aluno(a) " + nome + " foi aprovado(a)! Parabéns. Sua média foi" + media)
} else {
  alert ("O(a) aluno(a) " + nome + " precisa estudar para a recuperação. Sua média foi " + media)
}