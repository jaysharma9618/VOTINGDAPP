import { web3Context } from "./web3Context";
import { useContext } from "react";

export const useWeb3Context = () => { 
    return useContext(web3Context);
}