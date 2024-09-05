// const { network } = require('hardhat');

/** @type import('hardhat/config').HardhatUserConfig */
require("hardhat-deploy");
require("@nomiclabs/hardhat-ethers");
require("dotenv").config()

const SEP_PRIVATE_KEY = process.env.SEP_PRIVATE_KEY;
const SEP_URL = process.env.SEP_URL;
const ETHSCAN_API_KEY = process.env.ETHSCAN_API_KEY;

module.exports = {
  defaultNetwork: "hardhat",
  networks:{
    localhost:{
      chainId: 31337,
      url:"http://127.0.0.1:8545",
    },
    sepolia:{
      url:SEP_URL,
      accounts:[SEP_PRIVATE_KEY],
      blockConfirmations:6,
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.7",
      },
      {
        version: "0.4.24",
      },
      {
        version:"0.8.20"
      },
    ],
  },
  namedAccounts:{
    deployer: {
      default: 0,
      1: 0, 
    },
  },
  etherscan: {
    apiKey: ETHSCAN_API_KEY,
    customChains:[],
  },
  
};

