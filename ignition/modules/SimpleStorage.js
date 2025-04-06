const { ethers } = require("hardhat")

async function main() {
  const simpleStorageContractFactory = await ethers.getContractFactory(
    "SimpleStorage"
  )
  console.log("Deploying SimpleStorage contract...")
  const simpleStorageContract = await simpleStorageContractFactory.deploy()
  await simpleStorageContract.waitForDeployment()

  // what's the private key?
  // what's the rpc url?

  console.log(
    `SimpleStorage contract deployed to: ${await simpleStorageContract.getAddress()}`
  )
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
