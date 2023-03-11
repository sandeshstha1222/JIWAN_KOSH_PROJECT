import logo from "./../../images/logoblack.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="Navbar-body">
      <nav className="NavbarItems">
        <div>
          <img className="navbar-logo" src={logo} alt="JiwanKosh" />
        </div>
        <div className="nav-menu">
          <ul>
            <Link to="/">
              <li>
                <a>HOME</a>
              </li>
            </Link>
            <Link to="#">
              <li>
                <a>ABOUTUS</a>
              </li>
            </Link>
            <Link to="#">
              <li>
                <a>CONTACTUS</a>
              </li>
            </Link>
            <Link className="btn" to="/login">
              <button className="signup-button">SIGNIN</button>
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
