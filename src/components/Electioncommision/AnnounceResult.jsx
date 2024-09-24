
import { useWeb3Context } from "../../context/useWeb3Context";


const AnnounceResult = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;

    
        const AnnounceResult = async()=>{
            await contractInstance.result();
            alert("Result Announced");
        }
        
    

    return (<button onClick={AnnounceResult}>Announce Result</button>);
}
 
export default AnnounceResult;