require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block-number")

const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL || "https://eth-sepolia.g.alchemy.com/v2/demo"
const PRIVATE_KEY = process.env.PRIVATE_KEY || "0xkey"
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || "key"
const POLYGONSCAN_API_KEY = process.env.POLYGONSCAN_API_KEY || "key"
const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || "key"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  // You can customize which network is used by default when running Hardhat by setting the config's defaultNetwork field. If you omit this config, its default value is "hardhat".
  // see: https://hardhat.org/hardhat-runner/docs/config#networks-configuration
  defaultNetwork: "hardhat",
  networks: {
    // yarn hardhat run ignition/modules/SimpleStorage.js --network sepolia
    sepolia: {
      url: SEPOLIA_RPC_URL,
      accounts: [PRIVATE_KEY],
      chainId: 11155111,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      // accounts: Thanks to hardhat, we don't need to specify accounts
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  // sourcify: {
  //   // Disabled by default
  //   // Doesn't need an API key
  //   enabled: true,
  // },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKETCAP_API_KEY,
    // gasPrice: 21,

    L1Etherscan: ETHERSCAN_API_KEY,
    // token: "ETH",

    // L1: "polygon",
    // L1Etherscan: POLYGONSCAN_API_KEY,
    // token: "POL",
  },
}
