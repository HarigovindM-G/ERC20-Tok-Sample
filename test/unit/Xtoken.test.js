const {ethers ,deployments } =  require("hardhat")
//const chai = import('chai');
let assert;
(async () => {
    const chai = await import('chai');
    assert = chai.assert;
})();


describe("Htoken",async()=>{
    let accounts
    let deployer
    let token 
    let owner;
    let reciever;
    let spender;
    beforeEach(async()=>{
        accounts = await ethers.getSigners();
        deployer = accounts[0]
        reciever = accounts[1]
        spender = accounts[2]        
        token = await ethers.getContract("Xtoken",deployer)
    })
    describe("Constructor sets the name and symbol correctly",async()=>{
        it("it sets the name",async()=>{
            assert.equal(
                (await token.name()).toString(),
                "Xtoken"
            )
        })
        it("sets the symbol correctly",async()=>{
            assert.equal(
                (await token.symbol()).toString(),
                "XTOK"
            )
        })
    })
    describe("transfer function",async()=>{
        it("sends tokens from one account to another",async()=>{
            const prevdeployerBal =await token.balanceOf(deployer.address)
            const prevrecieverBal = await token.balanceOf(reciever.address)
            await token.transfer(reciever.address,1000);
            const deployerBal = await token.balanceOf(deployer.address)
            const recieverBal = await token.balanceOf(reciever.address)
            assert.equal(prevdeployerBal.sub(1000).toString(), deployerBal.toString());
            assert.equal(prevrecieverBal.add(1000).toString(), recieverBal.toString());
        })
        /*
        I am not currently implementing the tests as this project 
        just to learn about erc20 tokens
        */
    })

})
