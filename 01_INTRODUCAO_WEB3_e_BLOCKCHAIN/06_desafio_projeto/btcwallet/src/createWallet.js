//import dependeces
const bip32 = require('bip32')
const bip39 = require('bip39')
const bitcoin = require('bitcoinjs-lib')

//definir a rede: bitcoin:rede principal (0)| testenet (1): rede teste
const network = bitcoin.networks.testnet

const path = `m/49'/1'/0'`

let mnemonic = bip39.generateMnemonic()
const seed = bip39.mnemonicToSeedSync(mnemonic)

// criando a raiz da carteira HD
let root = bip32.fromSeed(seed, network)

// criando uma conta - par pvt-pubkey
let account = root.derivePath(path)
let node = account.derive(0).derive(0) //gera o nó

let btcAddress = bitcoin.payments.p2pkh({
  pubkey: node.publicKey,
  network: network,

}).address

console.log("Carteira Gerada");
console.log("Endereço", btcAddress);
console.log("Chave Privada:", node.toWIF());//formata chave 
console.log("Seed:", mnemonic);


