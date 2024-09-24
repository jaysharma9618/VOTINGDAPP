import { useWeb3Context } from "../../context/useWeb3Context";
import { useState,useEffect } from "react";


const VotingStatus = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
    const [status, setStatus] = useState("NOT STARTED");
    useEffect(() => {     
        const ShowVotingStatus = async()=>{
            const ElectionWinner = await contractInstance.votingStatus();
            setStatus(ElectionWinner);
            
            console.log(ShowVotingStatus);
        }
        contractInstance && ShowVotingStatus();
    },[contractInstance]);
    return ( <>
        <p>VOTING STATUS : {status}</p>
    </> );
}
 
export default VotingStatus;