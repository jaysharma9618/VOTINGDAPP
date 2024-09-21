import { ethers } from "ethers";
import abi from "../constants/abi.json";
// 0x22944a00EDd0F07Ec7A54435D2b7D754f4e8144b

export const getWeb3State = async () => {
    let [contractInstance,selectedAccount,chainId] = [null,null,null,null];
    try {
        if(!window.ethereum){
            throw new Error("Please install MetaMask")
        }
        const accounts = await window.ethereum.request({ 
            method: 'eth_requestAccounts'
         });
        
        let chainIdHex = await window.ethereum.request({ 
            method: 'eth_chainId' 
        });
        chainId = parseInt(chainIdHex, 16);
        selectedAccount = accounts[0];
        //used for read operations
        const provider = new ethers.BrowserProvider(window.ethereum);
        //used for write operations
        const signer = await provider.getSigner();
    
        const contractAddress = "0x22944a00EDd0F07Ec7A54435D2b7D754f4e8144b";
        contractInstance = new ethers.Contract(contractAddress, abi, signer);
        return{contractInstance,chainId,selectedAccount};
    } catch (error) {
        console.log("Not able to catch web3State",error.message);
        throw error;
        
    }
    
}