import { useContext } from "react";
import { web3Context } from "./context/web3Context";
const Child = () => {
    const obj =useContext(web3Context);
    console.log(obj);
    return <h1> Child</h1>;
}
 
export default Child;