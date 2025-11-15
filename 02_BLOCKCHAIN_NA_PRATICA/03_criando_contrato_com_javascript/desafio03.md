## 💠 Desafio 03
  💠 Em uma pequena cidade digital, o prefeito decidiu inovar e criou a moeda virtual SmartCoin. Para fazer as transações de maneira transparente e segura, foi proposta a implantação de um blockchain básico, onde cada transferência entre cidadãos se transforma em um contrato inteligente. Porém, os desenvolvedores locais ainda estão aprendendo sobre blockchain e contratos em JavaScript!

  💠 Sua missão é implementar uma estrutura simplificada que registre as transferências entre usuários no formato de contratos inteligentes. Cada transferência deve ser processada como um método chamado transfer em uma classe SmartContract, responsável por atualizar o saldo do remetente e do destinatário. Se o remetente não possuir saldo suficiente, a transação deve ser rejeitada. No início, cada usuário pode ter qualquer saldo inicial não negativo.

  💠Implemente um sistema que, dado um comando de transferência no formato "remetente destinatario valor saldoRemetente saldoDestinatario", responda com o saldo final dos dois usuários após a tentativa da transação ou a mensagem "Saldo insuficiente", se necessário.

  💠 Entrada
  Uma string contendo cinco valores separados por espaço: o nome do remetente, o nome do destinatário, o valor a transferir (inteiro), o saldo inicial do remetente (inteiro) e do destinatário (inteiro). Todos os valores são válidos e não negativos.

  💠 Saída
  Se a transferência for possível, imprima "novoSaldoRemetente novoSaldoDestinatario" (os novos saldos, separados por espaço). Se não, imprima "Saldo insuficiente".

  💠 Exemplos
  A tabela abaixo apresenta exemplos de entrada e saída:

  Entrada	Saída
  alice bob 15 30 5	15 20
  bob carol 12 5 25	Saldo insuficiente
  lucas maria 0 3 8	3 8
  

  💡Nota: Este desafio utiliza JavaScript puro como linguagem de implementação, mas foi estruturado com conceitos inspirados no Solidity (linguagem de contratos inteligentes). O objetivo é exercitar o pensamento computacional e a lógica de programação através de uma abordagem didática que simula estruturas de blockchain, permitindo que você compreenda os fundamentos de contratos inteligentes sem a complexidade de frameworks específicos. Concentre-se na lógica e na resolução do problem

```js
  // Estrutura básica da classe representando o contrato inteligente
// IMPORTANTE: As funções "gets" e "print" são acessíveis globalmente e têm as seguintes funcionalidades:  
// - "gets" : lê UMA linha com dados de entrada (inputs) do usuário;
// - "print": imprime um texto de saída (output) e pula uma linha ("\n") automaticamente.

// Estrutura básica da classe representando o contrato inteligente
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
}
```