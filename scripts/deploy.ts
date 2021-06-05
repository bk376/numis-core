import { 
  Contract, 
  ContractFactory 
} from "ethers"
import { ethers } from "hardhat"

const main = async(): Promise<any> => {
  const [deployer] = await ethers.getSigners()
  const Factory: ContractFactory = await ethers.getContractFactory("YaoFactory")
  const factory: Contract = await Factory.deploy(deployer.address)

  await factory.deployed()
  console.log(`Factory deployed to: ${factory.address}`)
}

main()
.then(() => process.exit(0))
.catch(error => {
  console.error(error)
  process.exit(1)
})
