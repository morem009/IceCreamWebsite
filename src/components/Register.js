import './css/style.css';
import React from "react";
import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile
} from "firebase/auth";
// import { useAuthValue } from "./AuthContext";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = () => {
    let isValid = true;
    if (password !== "" && confirmPassword !== "") {
      if (password !== confirmPassword) {
        isValid = false;
        setError("Passwords does not match");
      }
    }
    return isValid;
  };

  const register = (e) => {
    e.preventDefault();
    setError("");
    if (validatePassword()) {
      // Create a new user with email and password using firebase
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              alert("Your account has been created")
              navigate('/Homepage')
              const user =res.user;
              updateProfile(user,{
                displayName: name,
              })
            })
            .catch((err) => alert(err.message));
        })
        .catch((err) => setError(err.message));
    }
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <div>
        {/* Header */}
    <div className="jumbotron jumbotron-fluid page-header" style={{'marginTop': '20px'}}>
        <div className="container text-center py-5">
            <h1 className="text-white display-3 mt-lg-5">Register</h1>
            <div className="d-inline-flex align-items-center text-white">
                <p className="m-0"><Link className="text-white" to="/Homepage">Home</Link></p>
                <i className="fa fa-circle px-3"></i>
                <p className="m-0">Register</p>
            </div>
        </div>
    </div>

      {/* Register*/}
      <div className="container py-5">
      <div className="row justify-content-center">
        <div className="auth">
          <h1>Register</h1>
          {error && <div className="auth__error">{error}</div>}
          <form onSubmit={register} name="registration_form">
          <input
          class="form-control p-4"
              type="text"
              value={name}
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
            <input
            class="form-control p-4"
              type="email"
              value={email}
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
            class="form-control p-4"
              type="password"
              value={password}
              required
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
            class="form-control p-4"
              type="password"
              value={confirmPassword}
              required
              placeholder="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <button className="btn btn-secondary mt-2" type="submit">Register</button>
          </form>
          <span>
            Already have an account?
            <Link to="/Login">login</Link>
          </span>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Register;
