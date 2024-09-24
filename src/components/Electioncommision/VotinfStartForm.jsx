import { useWeb3Context } from "../../context/useWeb3Context";
import { useRef } from "react";


const VotinfStartForm = () => {

    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
    const startRef = useRef();
    const endRef = useRef();
    const handleVotingTime =async (e) => {
        e.preventDefault();
        const startTime= startRef.current.value;
        const endTime= endRef.current.value;
        await contractInstance.voteTime(startTime,endTime);
        alert("Voting Time Started");
    }

    return (  <>
        <form onSubmit={handleVotingTime}>
            <label htmlFor="start">Start Time:</label>
            <input type="datetime-local" id="start" ref={startRef} name="start"></input>

            <label htmlFor="end">End Time:</label>
            <input type="datetime-local" id="end" ref={endRef} name="end"></input>

            <button type="submit">Start Voting</button>

        </form>
    </>);
}
 
export default VotinfStartForm;