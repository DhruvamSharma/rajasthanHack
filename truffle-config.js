// Allows us to use ES6 in our migrations and tests.
require('babel-register')

module.exports = {
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*', // Match any network id
      from :'0xc1e19acffa721108ad7831c936993d10f7d41891',
      gas:4700000 
    }
  }
}
