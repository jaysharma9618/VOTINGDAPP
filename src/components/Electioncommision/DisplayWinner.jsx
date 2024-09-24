import { useEffect, useState } from "react";
import { useWeb3Context } from "../../context/useWeb3Context";


const DisplayWinner = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
    const [winner, setWinner] = useState("NOT DECLARED");

    useEffect(() => {     
        const DisplayWinner = async()=>{
            const ElectionWinner = await contractInstance.winner();
            if(ElectionWinner!=="0x0000000000000000000000000000000000000000"){
                setWinner(ElectionWinner);
            }
            console.log(ElectionWinner);
        }
        contractInstance && DisplayWinner();
    },[contractInstance]);
    return ( <div>
        <h1>Winner of the Election is: {winner}</h1>
    </div> );
}
 
export default DisplayWinner;