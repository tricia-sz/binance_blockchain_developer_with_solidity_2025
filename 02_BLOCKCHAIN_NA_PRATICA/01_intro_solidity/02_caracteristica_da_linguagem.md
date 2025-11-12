# 💠 CARACTERÍSICAS DA LINGUAGEM

## 💠 A LINGUAGEM SOLIDITY
  🔹 O Solidity é uma linguagem de **alto nível** e **orientada a contrados**

  🔹 Possui uma sintaxe simples, voltada para o registro e leitura de transações em contratos inteligentes na blockchain

  🔹 É uma linguagem muito influenciada pelas linguagens python, c++ e Javascript e foi projetada para ser executada sobre a ***Ethereum Virtual Machine***(EVM).

  🔹Pode ser utilizada para desenvlver contratos como votações, crowdfunding, rastreabilidade de ativos, NFT's, entre outros.

  🔹 É uma plataforma descentralizada de blockchain que suporta os **contratos inteligentes**, aplicações que executam de forma independente, sem downtime, censura, fraude ou interferencia de terceiros.

  🔹 Criado por Vitalik Buterin. 
  - Programador e Co-Funder da Bitcoin Magazine.
  - Descrito: 20213
  - Início do desenvolvimento: 2014
  - (funding ETH-BTC)
  - Lançamento: 2015
  - Ether - A segunda maior criptomoeda do mercado.
  


## 💠 ETHEREUM VIRTUAL MACHINE - EVM
  🔹Também conhecida como EVM, é o ambiente para a execução de contratos inteligentes do Ethereum.

## 💠 SMART CONTRACTS
  🔹 É um protocolo direcionado para verificar egarantir de forma digital a performace e a confiabilidade de um contrato, sendo um itermediário entre as partes (contratantes)

  🔹Dessa forma, as transações são rastreaveis e irreversíveis, deixado para ciptografia a garantia de veracidade dos dados

  🔹Um Smart Contract baseado em solidity é uma coleção de **funções** e **dados**, e está registrado em um endereço na blockchain do Ethereum.

## Exemplo de contrato
```js
  pragma solidit ^0.5.0;
  contract SolidityTest {
    constructor() public {

    }
    function getResult() public view returns(unit){
      uint a= 1;
      unit a = 1;
      unit result = a * 2;
      return result;
    }
  }
```
 ## Code Review

  `pragma solidit ^0.5.0` --> refere-se a versao do contrato




