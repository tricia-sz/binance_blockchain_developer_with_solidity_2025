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
class SmartContract {
  constructor(remetente, destinatario, saldoRemetente, saldoDestinatario) {
    this.remetente = remetente;
    this.destinatario = destinatario;
    this.saldo = {};
    // Inicializa o saldo de cada usuário
    this.saldo[remetente] = saldoRemetente;
    this.saldo[destinatario] = saldoDestinatario;
  }

  // Processa a transferência conforme regras do contrato
  transfer(valor) {
    // TODO resolvido:
    const saldoR = this.saldo[this.remetente];

    if (saldoR < valor) {
      return null; // Saldo insuficiente → transação rejeitada
    }

    // Atualiza saldos
    this.saldo[this.remetente] -= valor;
    this.saldo[this.destinatario] += valor;

    // Retorna saldos atualizados
    return [this.saldo[this.remetente], this.saldo[this.destinatario]];
  }
}

// Leitura e extração dos dados de entrada
const linha = gets();
const [remetente, destinatario, valorStr, saldoRemStr, saldoDestStr] = linha.trim().split(' ');

// Converte as entradas para tipos numéricos (inteiros)
const valor = parseInt(valorStr, 10);
const saldoRemetente = parseInt(saldoRemStr, 10);
const saldoDestinatario = parseInt(saldoDestStr, 10);

// Instancia o contrato inteligente com os dados iniciais
const contrato = new SmartContract(remetente, destinatario, saldoRemetente, saldoDestinatario);

// Tenta realizar a transferência e armazena o resultado
const resultado = contrato.transfer(valor);

// Exibe a saída conforme especificação
if (resultado !== null) {
  print(`${resultado[0]} ${resultado[1]}`);
} else {
  print("Saldo insuficiente");
}
```