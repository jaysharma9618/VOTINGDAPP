import AnnounceResult from "../../components/Electioncommision/AnnounceResult";
import DisplayWinner from "../../components/Electioncommision/DisplayWinner";
import EmergencyDeclare from "../../components/Electioncommision/EmergencyDeclare";
import VotinfStartForm from "../../components/Electioncommision/VotinfStartForm";
import VotingStatus from "../../components/Electioncommision/VotingStatus";



const Electioncommision = () => {
    return ( <>
        <VotingStatus/>
        <br/>
        <DisplayWinner/>
        <br/>
        <VotinfStartForm/>
        <br/>   
        <AnnounceResult/>
        <br/>
        <EmergencyDeclare/>
    </> );
}
 
export default Electioncommision;