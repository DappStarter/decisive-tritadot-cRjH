require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good climb surge traffic number crater remind mixture harvest perfect flip test'; 
let testAccounts = [
"0xeafbdf40b8b95db8d0ab6e2c75ec46215271243b3d3343837b84c704889bf13c",
"0x7db91b28ee0b2723788764cfcb27ae0ee77e537125854c13f3b4d8209ee9dfaf",
"0x64b828db97eec7f136c98a1ce978f2bf4c37380a952c717551165123034f7dff",
"0x5aae8bc14db04d060e1c3e1c6677c438f12bfa2abf0e6870a72d43e980e8bc95",
"0x3c514db61bb06b218cd3757128a3f091a9181c4d3e70878dc68a58fc0697dcce",
"0xbcce139aec2b7acb0637f447aa3e811140259a1ab0af70a69ba4c872a5e3aab1",
"0xfc3045edd559ae06f068e3fc3e861f54fa2774afebaf0fcaf0052c7b5824e7d1",
"0x2b45846a25deff5b0e8a93111ee64cd2a368c80062f161867c76356bbcb946c4",
"0xe657ebddd77acefb1243246cce8ac70ebdfe61c6d448d1f3842c5f1c4ef4c037",
"0xdedd956250eabab42e665b790828a6eba9c869fe3209c354d68f51a37311e547"
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

