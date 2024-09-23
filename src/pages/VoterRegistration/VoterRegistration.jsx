import { web3Context } from "../../context/web3Context";
import { useContext } from "react";
import { useRef } from "react";

const VoterRegistration = () => {
    const {contractInstance} = useContext(web3Context);
    const nameRef = useRef();
    const ageRef = useRef();
    const genderRef = useRef();

    const handleVoterRegistration = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const gender = genderRef.current.value;
        const age = ageRef.current.value;
        await contractInstance.voterRegister(name,age,gender);
        console.log("Voter Registered");
    }
    return ( <div>
        <form onSubmit={handleVoterRegistration}>
        <label>Voter Name</label>
        <input type="text" placeholder="Voter Name" ref={nameRef}></input>
        <label>Voter Age</label>
        <input type="text" placeholder="Voter Age" ref={ageRef}></input>
        <label>Voter Gender</label>
        <input type="text" placeholder="Voter Gender" ref={genderRef}></input>
        <br></br>
        <button type="submit">Voter Register</button>
        </form>
        <br></br>
    </div> );
}
 
export default VoterRegistration;