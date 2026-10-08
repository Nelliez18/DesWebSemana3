// BLOCO 1 - FUNDAMENTOS E VARIAVEIS

console.log("--- BLOCO 1: FUNDAMENTOS E VARIAVEIS ---");

// 1. Declaracao de let e modificacao de valor
let pontos = 50;
pontos += 10; // Adiciona 10 ao valor atual de pontos
console.log("Pontos atuais:", pontos);

// 2. Constante e tentativa de reatribuicao (Demonstracao de erro)
const MAX_PONTOS = 100;
try {
    // Tentativa de mudar o valor de uma constante, o que nao e permitido
    MAX_PONTOS = 200; 
} catch (erro) {
    console.log("Erro gerado:", erro.name); // Exibe: TypeError
    console.log("Motivo do erro: Variaveis declaradas com 'const' sao de leitura exclusiva e nao admitem reatribuicao apos a inicializacao.");
}

// 3. Tipos primitivos e operador typeof
let texto = "JavaScript";      // String
let numero = 42;              // Number
let ligado = true;            // Boolean
let naoDefinido;              // Undefined
let nulo = null;              // Null

console.log("Tipo de 'texto':", typeof texto);
console.log("Tipo de 'numero':", typeof numero);
console.log("Tipo de 'ligado':", typeof ligado);
console.log("Tipo de 'naoDefinido':", typeof naoDefinido);
console.log("Tipo de 'nulo':", typeof nulo); // Retorna 'object' por uma profissionalizacao historica do JavaScript

// 4. Template Literals vs Concatenacao classica
const nomeUsuario = "Carlos";
const tecnologia = "Node.js";

// Usando Template Literals (Crase e \${})
const fraseTemplate = `O desenvolvedor ${nomeUsuario} esta estudando ${tecnologia} hoje.`;
// Usando concatenacao classica com o operador +
const fraseConcatenada = "O desenvolvedor " + nomeUsuario + " esta estudando " + tecnologia + " hoje.";

console.log("Template Literal:", fraseTemplate);
console.log("Concatenacao (+):", fraseConcatenada);


// BLOCO 2 - FUNCOES

console.log("\n--- BLOCO 2: FUNCOES ---");

// 1. Funcao declarada e Hoisting (Funciona porque funcoes declaradas sao movidas para o topo)
console.log("Chamada com Hoisting (idade 20):", ehMaiorDeIdade(20));

function ehMaiorDeIdade(idade) {
    return idade >= 18;
}

// 2. Funcao de expressao (Gera ReferenceError se chamada antes da linha de criacao)
try {
    console.log(ehMaiorDeIdadeExpressao(20));
} catch (erro) {
    console.log("Erro gerado:", erro.name); // Exibe: ReferenceError
    console.log("Motivo do erro: Funcoes de expressao atribuidas a 'const' ou 'let' nao sofrem hoisting da mesma forma e nao podem ser acessadas antes de sua declaracao.");
}

const ehMaiorDeIdadeExpressao = function(idade) {
    return idade >= 18;
};

// 3. As tres formas da funcao dobro
// Forma 1: Declarada
function dobroDeclarada(n) {
    return n * 2;
}
// Forma 2: Expressao de funcao
const dobroExpressao = function(n) {
    return n * 2;
};
// Forma 3: Arrow Function (Forma curta com retorno implicito)
const dobroArrow = n => n * 2;

console.log("Dobro (Declarada) de 5:", dobroDeclarada(5));
console.log("Dobro (Expressao) de 5:", dobroExpressao(5));
console.log("Dobro (Arrow) de 5:", dobroArrow(5));

// 4. Parametro com valor padrao
const calcularDobroComPadrao = (n = 1) => n * 2;
console.log("Chamada sem argumentos (usa padrao n=1):", calcularDobroComPadrao());
console.log("Chamada com argumento 7:", calcularDobroComPadrao(7));


// BLOCO 3 - CONTROLE DE FLUXO

console.log("\n--- BLOCO 3: CONTROLE DE FLUXO ---");

// 1. Classificacao de nota com if/else
function classificarNota(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}
console.log("Nota 7.5:", classificarNota(7.5));
console.log("Nota 4.0:", classificarNota(4.0));

// 2. Estrutura switch com corSemaforo
let corSemaforo = "Amarelo";
switch (corSemaforo) {
    case "Vermelho":
        console.log("Semaforo Vermelho: Pare");
        break;
    case "Amarelo":
        console.log("Semaforo Amarelo: Atencao");
        break;
    case "Verde":
        console.log("Semaforo Verde: Siga");
        break;
    default:
        console.log("Cor invalida no semaforo");
}

// 3. Tabuada do 5 com laço for classico
console.log("Tabuada do 5:");
for (let i = 1; i <= 10; i++) {
    console.log(`  5 x ${i} = ${5 * i}`);
}

// 4. Contagem regressiva com laço while
console.log("Contagem Regressiva:");
let contadorRegressivo = 5;
while (contadorRegressivo >= 1) {
    console.log(`  ${contadorRegressivo}`);
    contadorRegressivo--;
}

// 5. Numeros de 1 a 20 (Par ou Impar) com laço for
console.log("Par ou Impar (Usando laço FOR):");
for (let i = 1; i <= 20; i++) {
    const tipo = (i % 2 === 0) ? "par" : "impar";
    console.log(`  Numero ${i} e ${tipo}`);
}

// 5 (Variacao). Numeros de 1 a 20 (Par ou Impar) com laço while
console.log("Par ou Impar (Usando laço WHILE):");
let j = 1;
while (j <= 20) {
    const tipo = (j % 2 === 0) ? "par" : "impar";
    console.log(`  Numero ${j} e ${tipo}`);
    j++;
}

// 6. Funcao diaDaSemana com switch e default
function diaDaSemana(numero) {
    switch (numero) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terca-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sabado";
        default:
            return "Numero invalido. Digite um valor entre 1 e 7.";
    }
}
console.log("Dia 3:", diaDaSemana(3));
console.log("Dia 8:", diaDaSemana(8));
