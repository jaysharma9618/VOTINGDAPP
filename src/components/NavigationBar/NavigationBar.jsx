import { Link } from "react-router-dom";
import './NavigationBar.css';

const NavigationBar = () => {
    return (  <div className="navigation-bar">
        <ul>
            <li>
        <Link to="/candidate-register">Candidate Registration</Link>
            </li>
            <li>
        <Link to="/candidate-list">Candidate List</Link>
            </li>
            <li>
        <Link to="/voter-register">Voter Registration</Link>
            </li>
            <li>
        <Link to="/voter-list">Voter List</Link>
            </li> 
            <li>
        <Link to="/election-commision">Election Commision</Link>
            </li>

        </ul>
    </div>);
}
 
export default NavigationBar;