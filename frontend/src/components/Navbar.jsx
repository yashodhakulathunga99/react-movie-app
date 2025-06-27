import "../css/Navbar.css";

import { Link } from "react-router-dom";

function Navbar(){

return (
  <div className="navbar">
    <div className="navbar-brand">
      <Link to="/">Movie App</Link>
    </div>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/favorites" className="nav-link">Favorites</Link>
    </div>
  </div>
);

}


export default Navbar;