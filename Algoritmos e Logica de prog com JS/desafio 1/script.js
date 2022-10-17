alert("Insira dois número")
numberOne = prompt("Digite o primeiro número")
numberTtwo = prompt("Digite o segundo número")
soma = Number(numberOne) + Number(numberTtwo)
subtração = Number(numberOne) - Number(numberTtwo)
multi = (Number(numberOne) *  Number(numberTtwo))
div = (Number(numberOne) / Number(numberTtwo)).toFixed(2)
restdiv = (Number(numberOne) % Number(numberTtwo))
alert( ` a soma dos dois númeroo é:  ${soma}`)
alert( ` a subtração dos dois númeroo é:  ${subtração}`)
alert( ` a multiplicação dos dois númeroo é:  ${multi}`)
alert( ` a divisão dos dois númeroo é:  ${div}`)
alert( ` o resto da divisão dos dois númeroo é:  ${restdiv}`)

// Verificar se a soma de dois número é par:
if((soma % 2 == 0))
{
  alert ("A soma dos dois número é par")
}  

else{
  alert("A soma dos dois número é impar")
}

// Verificar se os dois número inseridos são iguais
if (numberOne == numberTtwo){
  alert("Os dois número digitados são iguais")
}
else{
  alert("Os dois número digitados são diferentes")
}