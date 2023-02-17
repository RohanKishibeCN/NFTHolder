import { ethers } from "ethers";

// 初始化以太坊 provider
const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/<INFURA-PROJECT-ID>");

// 定义 NFT 合约地址和 NFT ID
const nftContractAddress = "0x..."; // 将合约地址替换为您的 NFT 合约地址

// 获取 NFT 合约实例
const nftContract = new ethers.Contract(nftContractAddress, nftContractABI, provider);

// 获取所有 Transfer 事件
const filter = nftContract.filters.Transfer(null, null, null);
const transferEvents = await nftContract.queryFilter(filter);

// 收集所有持有人地址
const owners = transferEvents.reduce((result, event) => {
  const owner = event.args[2];
  if (!result.includes(owner)) {
    result.push(owner);
  }
  return result;
}, []);

console.log(`NFT 的所有持有人地址为 ${owners}`);

