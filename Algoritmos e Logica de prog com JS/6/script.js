let paciente = [
  {
    name: "Gustavo",
    idade: 7,
    altura: 1.0,
    peso: 25,
  },
  {
    name: "Vitor",
    idade: 27,
    altura: 1.77,
    peso: 125,
  },
  {
    name: "Bruno",
    idade: 30,
    altura: 1.78,
    peso: 130,
  },
];
// criação da função
function printIMC(peso, altura) {
  const IMC = Number(peso / altura ** 2);
  return IMC.toFixed(2);
}

let imcPacientes = "";

for (let index = 0; index < paciente.length; index++) {
  let IMC = printIMC(paciente[index].peso, paciente[index].altura);

  imcPacientes += `O paciente ${paciente[index].name} tem ${paciente[index].idade} anos, mede ${paciente[index].altura} metros e pesa ${paciente[index].peso} KG. E tem IMC de: ${IMC}\n\n`;
}

alert(imcPacientes);
