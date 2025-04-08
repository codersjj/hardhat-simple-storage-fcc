const { task } = require("hardhat/config")

task("block-number", "Prints the current block number").setAction(
  // const blockTask = async function(taskArgs, hre) {}
  // async function blockTask(taskArgs, hre) {}
  async (taskArgs, hre) => {
    const blockNumber = await hre.ethers.provider.getBlockNumber()
    console.log(`Current block number: ${blockNumber}`)
  }
)

module.exports = {}
