import { useState,useEffect } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";

const DisplayVoter = () => {
    const {contractInstance} = useWeb3Context();
    const [VoterList, setVoterList] = useState("");

    useEffect(() => {
        const DisplayVoterList = async()=>{
            const VoterArray = await contractInstance.voterList();
            const VoterString = VoterArray.toString();
            setVoterList(VoterString);
        }
        contractInstance && DisplayVoterList();
    },[contractInstance]);
    return ( <div>
        {VoterList}
    </div> );
}
 
export default DisplayVoter;