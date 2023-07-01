import "./css/style.css";
import "./css/style.min.css";
import { Link } from "react-router-dom";

function Navbar({size,setShow}) {
  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div
        className="container-lg position-relative p-0 px-lg-3"
        style={{ zIndex: "9" }}
      >
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow p-lg-0">
          <Link to="/Homepage" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-4 text-primary">
              <span className="text-secondary">i</span>CREAM
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto py-0">
              <Link to="/" className="nav-item nav-link active">
                Home
              </Link>
              <Link to="/About" className="nav-item nav-link">
                About
              </Link>
              <Link to="/Product" className="nav-item nav-link">
                Product
              </Link>
            </div>
            <Link
              to="/Homepage"
              className="navbar-brand mx-5 d-none d-lg-block"
            >
              <h1 className="m-0 display-4 text-primary">
                <span className="text-secondary">i</span>CREAM
              </h1>
            </Link>
            <div className="navbar-nav mr-auto py-0">
              <Link to="/Service" className="nav-item nav-link">
                Service
              </Link>
              <Link to="/Gallery" className="nav-item nav-link">
                Gallery
              </Link>
              <Link to="/Feedback" className="nav-item nav-link">
               Feedback
              </Link>
              <Link to="/Cart">
                <img style={{paddingTop: "14px",paddingLeft:"20px"}} onClick={()=>setShow(false)}src="./img/ice-cream-cart.png"></img>
                <span>{size}</span>
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
