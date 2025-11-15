# Desafio 02
 💠  Você foi contratado pela Blockchain Academy para ajudar novos programadores a entender os conceitos básicos de contratos inteligentes usando JavaScript puro! Sua tarefa é simular a lógica de um contrato de votação muito simples, inspirado na sintaxe do Solidity, mas implementado apenas com classes e métodos JavaScript.

 💠  Nesta votação, os participantes podem votar apenas uma vez, escolhendo entre "A" e "B". Você deve criar uma representação de contrato inteligente capaz de registrar o voto de um participante (identificado por seu nome de usuário) e, depois, consultar qual candidato está liderando. Cada ação será representada por uma linha de comando em formato string, exemplificando a chamada de métodos do contrato. Os comandos são:

  💠  vote usuario candidato: registra o voto do usuario no candidato ("A" ou "B"). Se o usuário já votou, ignore o voto.
  leader: retorna o candidato ("A" ou "B") que está ganhando ou "Empate" se houver igualdade.
  Implemente a lógica para processar esses comandos sequencialmente. Para cada comando leader processado, imprima o resultado correspondente.

  💠 Entrada
  Uma sequência de comandos separados por quebras de linha. Cada linha é um comando: vote usuario candidato ou leader.

  💠  Saída
  Para cada comando leader na entrada, imprima em uma nova linha: "A", "B" ou "Empate", conforme descrito.

  💠  Exemplos
  A tabela abaixo apresenta exemplos de entrada e saída:

  Entrada	Saída
  vote alice A
  vote bob B
  leader	Empate
  vote ana A
  vote bob A
  leader	A
  vote leo B
  leader
  vote leo A
  leader	B
  B
  

  💡Nota: Este desafio utiliza JavaScript puro como linguagem de implementação, mas foi estruturado com conceitos inspirados no Solidity (linguagem de contratos inteligentes). O objetivo é exercitar o pensamento computacional e a lógica de programação através de uma abordagem didática que simula estruturas de blockchain, permitindo que você compreenda os fundamentos de contratos inteligentes sem a complexidade de frameworks específicos. Concentre-se na lógica e na resolução do problema proposto!

```js
  // Define um contrato simples de votação
class SimpleVotingContract {
    constructor() {
        // Mapeia usuários votantes para evitar votos duplicados
        this.voters = new Set();
        // Contagem de votos por candidato
        this.votes = { A: 0, B: 0 };
    }
    vote(usuario, candidato) {
        // Verifica se o usuário já votou (um voto por usuário)
        if (this.voters.has(usuario)) return;
        // Aceita votos apenas para A ou B
        if (candidato === "A" || candidato === "B") {
            this.voters.add(usuario);
            this.votes[candidato]++;
        }
    }
    leader() {
        // Retorna o líder: "A", "B" ou "Empate"
        if (this.votes.A > this.votes.B) return "A";
        if (this.votes.B > this.votes.A) return "B";
        return "Empate";
    }
}

const contrato = new SimpleVotingContract();

// Processa comandos da entrada até que não haja mais linhas
let linha;
while ((linha = gets()) !== undefined && linha !== "") {
    const partes = linha.trim().split(" ");
    if (partes[0] === "vote" && partes.length === 3) {
        // TODO resolvido:
        const usuario = partes[1];
        const candidato = partes[2];
        contrato.vote(usuario, candidato);
    } else if (partes[0] === "leader" && partes.length === 1) {
        print(contrato.leader());
    }
    // Linhas inválidas são ignoradas
}

```