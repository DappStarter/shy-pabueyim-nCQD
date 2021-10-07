require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict duck ensure this bike deny nominee coffee honey light army gas'; 
let testAccounts = [
"0xdc9931d0212a9417044eeb347d61875feef442be3e3b0b3eb3e47e0ba2f474e8",
"0xc4c3bb4eb4ee708025136ce6cba10e926ef203838be45fff9290861a2ddfe1d7",
"0x7258acc850f7ff3001ca88d97565b5ae6418d6b89e4c161e5b0e59d36c548f46",
"0xa80ebaf18008f50dfc4e16894bd93a306eeafc2d7c4fa953c07834f20be3e12a",
"0xe062b1d2717b6ebf11e35d3c1791d7f848c2955214ce9ff677386d683493344b",
"0xd0c1ee9a55090127c90dc13c6574565b3eab68bb2d07e495beecfd0aabeec510",
"0x68985dacc328a2091323ae504317142a183dbfca8218910001653b45e2520c6c",
"0xedf42118bfa121051c95881603fed7f125594872ed045b8e692debd7347a8087",
"0x288fde0189091da16579678ce2ba8982f6f774a6bf62e89b83ea9c0fe8a187f8",
"0x1ebe3d5deb25ba3582fb570af564387770f00d9e5f1ec37fa23b100515467786"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

