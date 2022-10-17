
// Comentario de uma linha
console.log("Bem vindo")
/* Comentario de um bloco */

//String - Pode ser '' (aspas simples)
// "" - (aspas Duplas)
// ``(Crase -  da para ter multi linhas, pular e colocar expressao de linguagem)
console.log("Ola 'Ola2'")
console.log(`Joao foi 
ao supermercado ${1+1}
s
`)

/* Numeros
 33/ inteiros
 12.5// reais -float
 NaN // Not a Number (exemplo - dividir um número por uma string);
 Infinity // infinito (tem que escrever maiusculo o primeiro I)
 */

 console.log(Infinity)
 console.log(33+24)
console.log(12.5/2)

/* Boolean

  *somente 2 valores
    true // verdadeiro
    false //falso

*/

console.log(false)

/* Undefined 
  - Indefinido.
  - Não existe

  Null
  - nulo
  - objeto que não possui nada dentro
  - diferente de undefined
*/

console.log(undefined =! null)
console.log(undefined === null)


/* Object 
 - objeto
 - Propriedades / atributos;
 - Funcionalidade/ métodos;

 {propriedade: "valor" }
*/

/* Array 
 -lista
 - agrupamento de dados
- Criar um array : console.log(["Leite", "Ovos"]);
 */


/* ##Primitivos: (imutável)
 - String; - "ABC" "BCA" "bca" "bCa"
- Number;
 - Boolean;
 - Undefined;
 - Symbol;
 - BigInt;

 ##Estruturais:
  - Object;
      *Array;
      *map;
      *set;
      *Date;
      *...
  - Fuction:

## Primitivo Estrutural:
 - null;

*/

/* Variaveis: (precisa liberar memorial para alugar algum item)
  - Nomes simbolicos apra receber algum valor;
  - Atalhos de códigos;
   - Identificadores;
   - 3 palavras reservadas para criar variaveis:
        * Var
        * Let
        * Const (Não pode atualizar é Constante)
        * 
 <script>
  var clima="Quente"

  clima="frio"

  (tanto o let como o var pode atualizar)

  console.log(clima)
  </script>


  String para sempre será string, nao posso mudar ela como pode exemplo para boolean, number...
  JavaScript é tipado e dinãmico

  Const e let são locais e só funcionam no escopo onde foi criada.
   */


  /* Escopo determina a visibilidaded de alguma variavel no JS, toda vez que criar um bloco ( {}) ,
  ele também vai criar um novo escopo.
  
  var funciona fora do escopo de bloco 
  já let e const não funcionam*/

  /* Nomeando variaveis:
    - JS letras Maisculas e minusculas fazem diferença
    - pode por aspas, acentuações que o JS aceita
    - pode iniciar com caracteres especiais : $ e _;
    - não pode começar com números;
    - não pode colocoar espaços vazios no nome;
  */
 
  //   <script>
  //   // declaration ou declaração de variaveis
  //   var name
  //   // assigment ou atribuiçaõ de valores
  //   name = "Myke"
  
  //   //que tipo de dado foi usado
  //   console.log(typeof name)
  
  // </script>