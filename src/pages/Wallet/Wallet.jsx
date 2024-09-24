import { useNavigate } from "react-router-dom";
import { useWeb3Context } from "../../context/useWeb3Context";
import { useEffect } from "react";

const Wallet = () => {
    const navigateTo = useNavigate();
    const {handleWallet,web3State} = useWeb3Context();
    const {selectedAccount} = web3State;

    useEffect(() => {
        selectedAccount && navigateTo("/candidate-register");}
    ,[selectedAccount,navigateTo]);
    return ( <div>
        <button onClick={handleWallet}>connect wallet </button>
    </div> );
}
 
export default Wallet;