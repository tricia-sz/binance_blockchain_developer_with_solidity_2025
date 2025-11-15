# 💠 PADRÃO ERC-20

## 💠 Introdução
 - ERC (Ethereum Request for Comments) é um protocollo oficial para fazer sugestões para melhorar a rede Ethereum
 - 20 é o número de identificação único da proposta
 - Ou seja, atualização na rede e melhorias no contratos que são desenvolvidos.
  
  🔹 O padrão ERC-20 define um conjunto de regras que devem ser atendidas para que um token seja aceito e capaz de interagir com outros tokens na rede.

 💠 Um token ERC-20 deve ser obrigatóriamente:
  -
  - Fungível;
  - Transferivel;
  - Base monetária fixada. (Então meio que um contrato de renda fixa?) = Não,valor incial setado. (Vozes da minha cabeça, verificar a veracidade)
  
 ## 🔹 O padrão ERC-20 possui **Getters**, **Funções** e **Eventos** que definem o comportamento do token.

 # 💠 Getters
 ```js
 function totalSupply() external view retuns(unit256);
 // Retorna a quantidade de tokens existentes

 function balanceOf(address account) external view returns(uint256);//saldo de cardeita
  // Retorna a quantidade de tokens pertencentes a um endereço

  function transferFrom(address sender, address recipient, uint256 amount) external returns(bool)
   // Move uma quantidade de tokens entre enderecos e deduz o saldo do emissor. retorna um evento transfer.

  function allowance(address owner, address spender) external view returns(uint256)
    // O padrão ERC-20 permite que um endereço autorize outro endereço a recuperar tokens dele. (permissao para terceiros sacarem na sua conta)
```

 # 💠 Eventos - Nada mais que avisos sobre transferencias
```js
  event Transfer(address indexed from, address indexed to, uint256 value);
    // Evento emitido quando a quantidade de tokens é enviada de um endereço para outro

  event Approval(address indexed owner, address indexed spender, uint256 value);
    //Evento emitido quando uma quandidade de tokens é aprovada pelo dono do contrato para ser enviado por um spender.
```

 # 💠 CAMPOS DO TOKEN ERC-20
  ### Um token ERC-20 possui alguns campos opcionais:

  🔹**Token Symbol**: síbolo do token (ETH);

  🔹**Decimals**: casas decimais para fracionamento do token;

  🔹**Toke Name**: nome do token.

### Documentação sobre a rede Ethereum: https://ethereum.org


 # 💠 Funções
 ```js
  function transfer(address recipient, unit256 amount) external returns (bool);
   // Transferencia de tokens entre enderecos

   function approve(address spender, uint256 amount) external returns (bool)
    // Emite o evento de aprovacao de uma transferencia, retornando se foi ou nao aprovada
 ```
