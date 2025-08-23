import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="w-full">
            <div>
                My picture
            </div>
            <div>
                <Link to="/">Hero</Link>
            </div>
           <div>
                <Link to="/about">About</Link>
           </div>
           <div>
                <Link to="/projects">projects</Link>
           </div>
           
        </nav>
    )
}

export default Navbar;