import { useWeb3Context } from "../../context/useWeb3Context";

const EmergencyDeclare = () => {
    const {web3State} = useWeb3Context();
    const {contractInstance} = web3State;
   
    
    
        const EmergencyDeclare = async()=>{
            await contractInstance.emergency();
            alert("Emergency Declared");
        
        }
         
   

    return (  <div>
        <button onClick={EmergencyDeclare}>Declare Emergency</button>
    </div> );
}
 
export default EmergencyDeclare;