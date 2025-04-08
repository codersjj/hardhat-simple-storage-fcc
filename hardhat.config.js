require("@nomicfoundation/hardhat-toolbox")
require("dotenv").config()
require("./tasks/block-number")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY

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
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
  // sourcify: {
  //   // Disabled by default
  //   // Doesn't need an API key
  //   enabled: true,
  // },
}
