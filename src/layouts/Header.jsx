import reactLogo from "../assets/react.svg";
import { GrCart } from "react-icons/gr";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar bg-body-tertiary sticky-top">
      <div className="container-fluid">
        <Link
          to="/"
          className="d-flex align-items-center text-decoration-none text-reset"
        >
          <img
            src={reactLogo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-text-top"
          ></img>
          <span className="ms-2">React</span>
        </Link>

        <div className="d-flex ms-auto gap-3">
          <Link to="/cart" className="text-decoration-none text-reset">
            <GrCart size={25} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
