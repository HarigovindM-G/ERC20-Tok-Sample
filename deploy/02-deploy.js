const {network} = require("hardhat")
const {developmentChains} = require("../helper-hardhat-config.js")
const { verify } = require("../utils/verify.js")
require("dotenv").config()

module.exports = async({getNamedAccounts , deployments}) =>{
    const  {deploy, log } = deployments
    const {deployer} = await getNamedAccounts()

    const Xtok = await deploy("Xtoken",{
        from:deployer,
        args:["1000000000000000000000000"],
        log:true,
        waitConfirmations:1,
    })
    console.log(`XToken is deployed at ${Xtok.address}`)

    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY){
        await verify(Xtok,["1000000000000000000000000"])
    }
}
module.exports.tags=["all","Xtok"]