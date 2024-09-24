import { useState,useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const DisplayCandidate = () => {
    const {contractInstance} = useWeb3Context();
    const [candidateList, setCandidateList] = useState("");

    useEffect(() => {
        const DisplaycandidateList = async()=>{
            const candidateArray = await contractInstance.candidateList();
            const candidateString = candidateArray.toString();
            setCandidateList(candidateString);
        }
        contractInstance && DisplaycandidateList();
    },[contractInstance]);
    return ( <div>
        {candidateList}
    </div> );
}
 
export default DisplayCandidate;