import { useEffect, useState } from "react";
import { getWeb3State } from "../utils/web3States";
import { handleAccountChange } from "../utils/handleAccountchange";
import { handleChainChange } from "../utils/handleChainchange";
import { web3Context } from "./web3Context";

const Web3StateProvider = ({children}) => {
    const [web3State, setWeb3State] = useState({
        contractInstance: null,
        chainId: null,
        selectedAccount: null
    });
    const handleWallet= async()=>{

        try {
            const {contractInstance,chainId,selectedAccount} = await getWeb3State();
        setWeb3State({contractInstance, chainId,selectedAccount});
        } catch (error) {
            console.log("Wallet connection fail",error.message);
            
        }
        
    }
    useEffect(() => {
        window.ethereum.on('accountsChanged', async (accounts) => {handleAccountChange(setWeb3State)});
        window.ethereum.on('chainChanged', async (chainIdHex) => {handleChainChange(setWeb3State)});

        return () => {
            window.ethereum.removeListener('accountsChanged',() => {handleAccountChange(setWeb3State)});
            window.ethereum.removeListener('ChainChanged',() => {handleChainChange(setWeb3State)});
        }
    },[]);

    return ( 
        <div>
            <web3Context.Provider value={web3State}>
                {children}
            </web3Context.Provider>
            <button onClick={handleWallet}>connect wallet </button>
        </div>
     );
}
 
export default Web3StateProvider;