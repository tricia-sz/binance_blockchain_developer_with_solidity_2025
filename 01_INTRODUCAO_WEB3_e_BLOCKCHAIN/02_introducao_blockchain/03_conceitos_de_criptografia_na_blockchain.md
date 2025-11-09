# ✳️ CONCEITOS DE CRIPTOGRAFIA NA BLOCKCHAIN

## ✳️ INTRODUÇAO
   - Criptografia é a conversão de dados de um formato legível para um formato codificado. Os dados criptografados só podem ser lidos ou processados depois de serem descriptografatos.
  
   - A segurança de uma criptografia é **diretamente** porporcial à sua **compelxidade**, o que exigirá mais reforço e recurso para ser quebrada, sendo mais resistente contra ataques do tipo **força bruta.**

## ✳️ TÉCNICAS DE CRIPTOGRAFIA
  Existem duas técnicas mais utilizadas para criptografia de dados, sendo a criptografia de **chave simetrica** e **chave assimetrica.**

  ## ✳️ CHAVE SIMETRICA
   - Também conhecida como criptografia de **chave privada**. A chave usada para **codificar** é a mesmausada para **decodificar**, sendo a melhor opção para **usuários individuais** e **sistemas fechados**.
  
   - Caso contrário, a chave privada deve ser enviada ao destinário, porém aumenta o risco de compormetimento se for interceptada por um terceiro.
   - Esse metodo é mais rapido que método **assimetrico**.


  ## ✳️ CHAVE ASSIMETRICA
   ![chave assimetricat](img/assimetrica.png)

  - Neste metodo, duas chaves direferentes, **uma publica** e uma **privada**, que são vinculadas matematicamente.
  
  - Essencialmente, as chaves são apenas **grandes numeros emparelhados um ao outro**, mas não são identicos, daí o termo **assimetrico**.
  - A chave priovada é mantida em segredo pelo usuário, e a chave publicada também é disponibilizada ao publico geral.
  - Essa é a criptografia utilizada para a geração de carteiras no bitcoin.

## CARTEIRAS NO BITCOIN

  - No Bitcoin e em outras criptos semelhantes a existem as carterias, que na pratica são uma coleção de chaves proivadas para que se possa gerar transações.
  
   ![carteira](img/carteira_btc.png)


  - Para a gereação de carteiras, utiliza-se um algoritimo de **dispensão criptografica** ou **função hash** crioptgrafica, onde é praticamente impossivel de inverter, isto, é, de recriar o valor de entrada utilizando somente o valor de inspesão.
  
## CONCLUSÃO
  - O bitcoin foi um caso de disrupção nos sitemas de pagamento, oferencendo uma opção descentralizada, transparente, segura e confiável de transacionar valores.
  