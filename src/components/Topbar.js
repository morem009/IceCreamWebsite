import "./css/style.css";
import { Link } from "react-router-dom";
import { useAuthValue } from "./AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
function Topbar(props) {
  const { currentUser } = useAuthValue();
  return (
    <div className="container-fluid bg-primary py-3 d-none d-md-block topbar">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-lg-left mb-2 mb-lg-   ">
            <div className="d-inline-flex align-items-center">
              {props.name ? (
                <Link className="text-white pr-3" onClick={() => signOut(auth)}>Sign Out </Link>
              ) : (
                <Link className="text-white pr-3" to="/Login">
                  Login / Register
                </Link>
              )}

              <span className="text-white">|</span>
              <Link className="text-white px-3" to="/extras/FAQs">
                FAQs
              </Link>
              <span className="text-white">|</span>
              <Link className="text-white px-3" to="/extras/Help">
                Help
              </Link>
              <span className="text-white">|</span>
              <Link className="text-white pl-3" to="/extras/Support">
                Support
              </Link>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              <Link className="text-white px-3" to="https://www.facebook.com/">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link className="text-white px-3" to="https://twitter.com/">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="text-white px-3" to="https://in.linkedin.com/">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link className="text-white px-3" to="https://www.instagram.com/">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="text-white pl-3" to="https://www.youtube.com/">
                <i className="fab fa-youtube"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
