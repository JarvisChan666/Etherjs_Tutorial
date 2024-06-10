import { ethers } from "ethers";
const ALCHEMY_MAINNET_URL = 'https://eth-mainnet.g.alchemy.com/v2/CWeOo3Dij6ijOcp0JK8MMJbG2GC1DIzc'
// const provider = ethers.getDefaultProvider();// we can use default rpc
const provider = new ethers.JsonRpcProvider(ALCHEMY_MAINNET_URL); // or use our own rpc api
/**
 * 1. When we interact with blockchain, it is not real-time
 * 2. Each call with the blockchain requires the use of await(wait them to return value), 
 *    and we wrap these calls in an async function(a non-real time function, has await).
 */
const main = async () => {
// ENS domain name to query, instead of using "0xdisdhushdiah..."(bad readable)
  const balance = await provider.getBalance(`vitalik.eth`);
  // format ether convert wei to ETH, eg: 470.258415645144382774 ETH, instead of wei
  console.log(`ETH Balance for vitalik is: ${ethers.formatEther(balance)}`);
};
main();
