# MÉTODOS NO SOLIDITY 
  Em solidity, os métodos de classe são tratados como funções sendo blocos de códigos reutilizaveis.

## DEFINIÇÃO DE FUNÃO
  Definição de funão em Solidity
  - Denifida com a palavra **function**
  - um nome exlusivo;
  - uma lista de parametros (pode ser vazia)
  - bloco de instrões entre chaves
  
![anatomia de uma funcao](img/funcao.png)

### Chamando uma função
  Para chaar uma função em Solidity, basta chamar o nome da função dentro do código. Exemplo:

  `uint res = getResult();`

### Modificadores de funções (comportamentos)
  🔹 Modificadores são códigos que podem ser rodados antes e/ou depois de chamar uma função.

  🔹 Modificadores podem ser utilizados para:
  - Restrinção de acesso
  - Validação de entradas
  - Prodteção contra hack e reentrada
  
  🔹 O corpo da função é inserido o simbolo especial ` _;` (underline e ponto e virgula) aparece na definição de um modificador.

  🔹Caso a **condição** do modificador seja satisfeita ao chamar um função, s função será executada e, caso contrário, uma **exceção** será lançada.

Exemplo:
```js
  contract Owner {
    modifier onlyOwner {
      require(msg.sender == owner);
      _;
    }

    function abort() onlyOwner { //uso do modificador
      // ...
    }
  }
```

## FUNÇÕES VIEW
  As funções de visualização **(view)** são funções **somente leitura**, o que garante que as variáveis de estado não possam ser modificadas após chama-las.

  Se as instruções que modificam as variaveis de estado, o compilador lança um **warning** (aviso) em tais casos.

  Por padrão, um metodo **get** é a função **view**.

### Funções View:
```js
  //variaveis de estado
  uint num1 = 10
  uint num2 = 16

  function getResult() public view returns(uint product, uint sum) {
    product = num1 * num2;
    sum = num1 + num2;
  }
```

### FUNÇÕES PURE
  As funções puras (**pure**) **não leem nem modificam** as variaveis de estado, retornando os valores **apenas** utilizando os **parametros passados** para função ou variaveis locais presentes nela.


```js
  function getResult() public pure returns (uint produtc, uint sum){
    uint num1 = 2;
    uint num2 = 4;

    product = num1 * num2;

    sim = num1 + num2
  }
```