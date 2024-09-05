const {ethers,deployments} = require("hardhat");
require("@nomiclabs/hardhat-ethers");

async function main(){
    const accounts = await ethers.getSigners()
    const deployer = accounts[0]
    const token = await ethers.getContract("HTokenERC20",deployer)
    const totalSupply= await token.totalSupply()
    console.log(`Total Supply: ${totalSupply.toString()}`);
}
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });