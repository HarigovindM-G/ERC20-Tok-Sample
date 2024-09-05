const {network} = require("hardhat")

//getNamedAccounts and deployments from hre 
module.exports =async({getNamedAccounts , deployments})=>{
   
   // deploy and logs from deployments
    const  {deploy, log } = deployments
    const {deployer} = await getNamedAccounts()
    console.log(deployer)

    const token = await deploy("HTokenERC20",{
        from: deployer,
        args:["1000000000000000000000000","HToken","HTOK"],
        log:true,
        waitConfirmations:1,
    })

    console.log(`Token is deployed at ${token.address}`)

}
module.exports.tags=["all","ManualToken"]