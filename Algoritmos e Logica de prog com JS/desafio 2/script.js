let student = [
  {
    nome: "Julia",
    firstNota: 7,
    secondNota: 9,
  },
  {
    nome: "João",
    firstNota: 5,
    secondNota: 2,
  },
  {
    nome: "Maria",
    firstNota: 10,
    secondNota: 8,
  },
  {
    nome: "Roberto",
    firstNota: 1,
    secondNota: 4,
  },
];

function calculaMedia(notaOne, notaTwo) {
  let media = Number((notaOne + notaTwo) / 2);

  return media;
}

for (index = 0; index < student.length; index++) {
  const mediaCalculada = calculaMedia(
    student[index].firstNota,
    student[index].secondNota
  );

  if (mediaCalculada >= 7) {
    alert(`A média de ${student[index].nome} foi de: ${mediaCalculada}.
    Parabéns ${student[index].nome}, você foi aprovado(a) no concurso!.`);
  } else {
    alert(`A média de ${student[index].nome} foi de: ${mediaCalculada}.
    Não foi dessa vez, ${student[index].nome}. Tente novamente.`);
  }
}
