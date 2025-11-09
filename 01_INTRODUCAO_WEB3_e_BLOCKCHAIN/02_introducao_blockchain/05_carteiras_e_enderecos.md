# ✳️ CARTEIRAS E ENDEREÇOS
### ✳️ O QUE SÃO CARTEIRAS?
  Uma carteira, ou **wallet**, é uma espécie de conta bancária de bitcoin, onde por meio do **edereço público** depositamos e com a chave privada sacamos.

  No contexto de cripto, careteiras se recerem a também à estrutura de dados usadas no gerenciamento das **chaves** do usuário.

  Existem casos do Bitcoin, alguns tipos de carteiras:
  - Não-deterministicas;
  - Deterministicas;
  - HD - Hierarchical Deterministic;
  - Mnemoric - BIP 39
  
## ✳️ Não-deterministicas
  A primeira versão das carteiras, inde são geradas 100 chaves privadas na inicialização, porém tal numero de chaves não tem um gerenciamento muito prático.

  "APP com carteira (celular)"

## ✳️ Deterministicas
 Contém as chaves privadas deviradas de uma semente - seed - podendo gerar inúmeros endereços.

 seed: privacy-key

## ✳️ HD - Hierarchical Deterministic
  Parecidas com a determinisca, possui hierarquia de chaves que partem de uma mesma semente.
  Tipo uma branch na outra. 

## ✳️ Mnemoric - BIP 39

  Cria uma sequência de palavras em inglês, faceis de escrever, armazena e importa.

  Exemplo de memnemonic:
    brasil smith campeao true corinthians liberty fraternity parei shaushua

## ✳️ TIPOS DE ENDEREÇOS / type address

Existem atualmente três tipos de endereços no Bitcoin Core:
 - P2PKH
 - P2SH
 - bech32

## ✳️  P2PKH - Pay-to-Publickey Hash
  É o prinmeiro e mais utilizado formato de endereço, tanbém chamado de legacy e semore começa com numero 1.

  Possui taxas de transferências mais caras pois não é comprativel com os novos tipos de endereços.

  Exemplo de P2PKH:
  1PvPODKSLWDkdskldsDKASOL

  OBS: Sempre irá iniciar com 1.

  OBS: Também conhecido como "Legacy". Ou "endereço legacy".

  - É um formado baseado em compatibilidade, com funcionalidades mais elabiradas que o formato legacy.
  
  - Muito utilizado em carteiras **multisig** (validacao da terceira pessoa, a testemunha do contrato), onde mais de uma carteira assinado é necessária para autorizar uma transação.

---
## ✳️  BECH32 - Segwit 
  - Segwit significa segregated witness, ou testemunha segregada;
  - Reduziu o custo das transações e aumentou o tamnho dos blocos;
  - Supota o Lightning Network

## ✳️ TIPOS DE CARTEIRAS
  Existem diversas formas de gerenciar careteiras de criptos, como hardware wallets, paper wallets, desktop e mobile wallets.
  



