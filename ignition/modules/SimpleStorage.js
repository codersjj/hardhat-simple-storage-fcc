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

  const address = await simpleStorageContract.getAddress()
  console.log(`SimpleStorage contract deployed to: ${address}`)

  // what happens when we deploy to our hardhat network?
  // console.log("hre.network:", hre.network)
  if (
    hre.network.config.chainId === 11155111 &&
    process.env.ETHERSCAN_API_KEY
  ) {
    await simpleStorageContract.deploymentTransaction().wait(6)
    await verify(address, [])
  }
}

async function verify(contractAddress, args) {
  console.log("Verifying contract...")
  try {
    // see: https://github.com/NomicFoundation/hardhat/blob/main/packages/hardhat-verify/src/internal/task-names.ts#L4
    await hre.run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (error) {
    console.log("Error verifying contract:", error)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
