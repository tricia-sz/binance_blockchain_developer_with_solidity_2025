### 💠 Desafio 01
 💠 Em um futuro próximo, jovens desenvolvedores do mundo inteiro estão aprendendo conceitos de blockchain e contratos inteligentes, buscando criar redes mais confiáveis sem depender de intermediários. Você faz parte deste movimento! Sua missão é implementar, de forma didática, a função mais importante de um contrato inteligente: o registro seguro de transações imutáveis em um bloco do blockchain.

  💠 Imagine que cada bloco precisa armazenar apenas uma transação simples. A transação recebe três informações de entrada: remetente (quem envia), destinatário (quem recebe) e valor (quantia transferida). Sua tarefa é criar uma estrutura, inspirada em classes do JavaScript moderno, capaz de representar um bloco que registra esses dados e exporta automaticamente uma string formatada conforme o padrão:
  from:[remetente];to:[destinatario];value:[valor]
  Você deve processar a entrada dada, que trará os três valores separados por espaço, e gerar exatamente essa saída.
  Caso algum valor da transação esteja vazio ou seja apenas um espaço, retorne 'transacao_invalida'. Use apenas funções/classes básicas: o objetivo é aproximar a sintaxe/estrutura de Solidity, mas implementada em JavaScript puro ou lógica equivalente em outras linguagens.

    💠 Entrada
    Uma única linha com três strings separadas por espaço: remetente, destinatário e valor. Nenhum valor deve conter espaços internos.
    Exemplo de entrada: Alice Bob 100

    💠 Saída
    Se todos os campos forem válidos (não vazios), imprima a string formatada:
    from:[remetente];to:[destinatario];value:[valor]
    Se algum campo for inválido (vazio), imprima:
    transacao_invalida

  💠 Exemplos
  A tabela abaixo apresenta exemplos de entrada e saída:

  💠 Entrada	Saída
  Alice Bob 100	from:Alice;to:Bob;value:100
  Mario Lucia 0	from:Mario;to:Lucia;value:0
  Jonas 250	transacao_invalida
 

    💡Nota: Este desafio utiliza JavaScript puro como linguagem de implementação, mas foi estruturado com conceitos inspirados no Solidity (linguagem de contratos inteligentes). O objetivo é exercitar o pensamento computacional e a lógica de programação através de uma abordagem didática que simula estruturas de blockchain, permitindo que você compreenda os fundamentos de contratos inteligentes sem a complexidade de frameworks específicos. Concentre-se na lógica e na resolução do problema proposto!

  ```js
  // IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:  
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Classe que representa uma transação simples entre dois participantes
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:  
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Classe que representa uma transação simples entre dois participantes
class BlocoDaTransacao {
  constructor(remetente, destinatario, valor) {
    this.remetente = remetente;
    this.destinatario = destinatario;
    this.valor = valor;
  }
  // Retorna uma string no formato requerido pelo desafio
  toString() {
    return `from:${this.remetente};to:${this.destinatario};value:${this.valor}`;
  }
}

// Leitura da entrada, exemplo: "Alice Bob 100"
const entrada = gets();
const campos = entrada ? entrada.split(' ') : [];

// Extração dos campos da entrada
const [remetente, destinatario, valor] = campos;

// Validação básica dos campos de entrada
const camposInvalidos =
  campos.length !== 3 ||
  [remetente, destinatario, valor].some(
    campo => typeof campo !== 'string' || campo.trim() === ''
  );


if (camposInvalidos) {
  print('transacao_invalida');
} else {
  // Criando instância do bloco da transação
  const bloco = new BlocoDaTransacao(remetente, destinatario, valor);

  // Imprimir string formatada
  print(bloco.toString());
}
  ```