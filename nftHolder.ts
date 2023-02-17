import { ethers } from "ethers";

// 初始化以太坊 provider
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/<INFURA-PROJECT-ID>");

// 定义 NFT 合约地址和 NFT ID
const nftContractAddress = "0x..."; // 将合约地址替换为您的 NFT 合约地址
const nftId = 123; // 将 NFT ID 替换为您要查询的 NFT ID

// 获取 NFT 合约实例
const nftContract = new ethers.Contract(nftContractAddress, nftContractABI, provider);

// 获取 NFT 持有人地址
const ownerAddress = await nftContract.ownerOf(nftId);
console.log(`NFT ${nftId} 的持有人地址为 ${ownerAddress}`);
