const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

describe("SimpleStorage", () => {
  // let simpleStorageContractFactory
  // let simpleStorageContract
  let simpleStorageContractFactory, simpleStorageContract

  beforeEach(async () => {
    simpleStorageContractFactory = await ethers.getContractFactory(
      "SimpleStorage"
    )
    simpleStorageContract = await simpleStorageContractFactory.deploy()
  })

  it("Should start with a favorite number of 0", async () => {
    const currentvalue = await simpleStorageContract.retrieve()
    const expectedValue = "0"
    // assert
    // expect
    assert.equal(currentvalue.toString(), expectedValue)
    // expect(currentvalue.toString()).to.equal(expectedValue)
  })

  it("Should update when we call store", async () => {
    // it.only("Should update when we call store", async () => {
    const expectedValue = "7"
    const transactionResponse = await simpleStorageContract.store(expectedValue)
    await transactionResponse.wait(1)

    const currentValue = await simpleStorageContract.retrieve()
    assert.equal(currentValue.toString(), expectedValue)
  })
})
