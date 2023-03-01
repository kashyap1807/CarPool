import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
           <h1><Link to="/home" style={{color:"#3b71ca"}}>CarPool</Link></h1>
           <div className="links">
                <Link to="/home">Home</Link>
                <Link to="/seekride">Seek Ride</Link>
                <Link to="/publish">Publish Ride</Link>
                <Link to="/sign">Register</Link>
                <Link to="/login">Log-in</Link>
                <Link to="/about">About</Link>
                
                
            </div> 
        </div>
     );
}
 
export default Navbar;