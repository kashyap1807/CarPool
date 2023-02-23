import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
           <h1>CarPool</h1>
           <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/sign">Register</Link>
                <Link to="/login">Log-in</Link>
                <Link to="/about">About</Link>
                
                
            </div> 
        </div>
     );
}
 
export default Navbar;