/*
 * NB: since truffle-hdwallet-provider 0.0.5 you must wrap HDWallet providers in a 
 * function when declaring them. Failure to do so will cause commands to hang. ex:
 * ```
 * mainnet: {
 *     provider: function() { 
 *       return new HDWalletProvider(mnemonic, 'https://mainnet.infura.io/<infura-key>') 
 *     },
 *     network_id: '1',
 *     gas: 4500000,
 *     gasPrice: 10000000000,
 *   },
 */

module.exports = {
  networks: {
      testrpc: {
          host: "localhost",
          port: 8545,
          network_id: "*",
          gas: 1512388
      },
      kovan: {
          host: "localhost",
          port: 8545,
          network_id: "3",
          from: "0x00FcEf22b8e9c3741B0082a8E16DD92c2FE63A32",
          gas: 1512388
      },
      ropsten: {
          host: "localhost",
          port: 8545,
          network_id: "2",
          from: "0x00587216c3A97Cd31F12F78b88317DD03F2Ffa5D"
      },

  }

}