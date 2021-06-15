// test/Airdrop.js
// Load dependencies
const { expect } = require('chai');
const { BigNumber } = require('ethers');
const { ethers } = require('hardhat');
// const { factory } = require('typescript');
const Web3 = require('web3');

const OWNER_ADDRESS = ethers.utils.getAddress(process.env.OWNER_ADDRESS);

const DECIMALS = 10;

const AMT = 150



// Start test block
describe('YaoFactory', async () => {
    const [deployer] = await ethers.getSigners()
    before(async function () {
        this.Factory = await ethers.getContractFactory("YaoFactory");
        this.MockContract = await ethers.getContractFactory("contracts/MockContract.sol:MockContract");
    });

    beforeEach(async  () => {
        this.factory = await this.Factory.deploy(deployer.address)
        await this.factory.deployed()
        this.mock = await this.MockContract.deploy()
        await this.mock.deployed()
        console.log(`factory is : ${factory}`)
    });

    // Test cases

    //////////////////////////////
    //       Constructor 
    //////////////////////////////
    describe("Constructor",  () => {
        it('decimals default', async function () {
            expect((await this.factory.decimals())).to.equal(DECIMALS);
        });

        it('mock test', async function () {
            // If another contract calls balanceOf on the mock contract, return AMT
            const balanceOf = Web3.utils.sha3('balanceOf(address)').slice(0,10);
            await this.mock.givenMethodReturnUint(balanceOf, AMT);
        });
    });

    //////////////////////////////
    //  setRemainderDestination 
    //////////////////////////////
    describe("otherMethod",  () => {
        console.log('Howdy fellow man')
    });
});