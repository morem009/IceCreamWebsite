import React from "react";
import "./App.css";
import Alert from "react-bootstrap/Alert";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Product from "./components/Product";
import Service from "./components/Service";
import Gallery from "./components/Gallery";
import Feedback from "./components/Feedback";
import Cart from "./components/Cart";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Register from "./components/Register";
import Login from "./components/Login";
import FAQs from "./components/extras/FAQs";
import Help from "./components/extras/Help";
import Support from "./components/extras/Support";
import WIP from "./components/WIP";
import { AuthProvider } from "./components/AuthContext";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { app } from "./firebase";
import { getDatabase, ref, set } from "firebase/database";

const db = getDatabase(app);

function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [timeActive, setTimeActive] = useState(false);
  const[userName, setUserName] =  useState("");
  const[isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if(user){
        setUserName(user.displayName)
        setIsLogged(true)
      }else setUserName("")
      console.log(user);
    });
  }, []);

  const handleClick = (item) => {
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id) isPresent = true;
    });
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 3000);
      return;
    }
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id) ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d;

    if (tempArr[ind].amount === 0) tempArr[ind].amount = 1;
    setCart([...tempArr]);
  };
  return (
    <Router>
      <AuthProvider value={{ currentUser }}>
       
        {/* Navbar*/}
        <Navbar size={cart.length} setShow={setShow} />
        {warning && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 500,
              right: 0,
              zIndex: 999,
            }}
          >
            <Alert.Heading variant="info">
              Item is already added to your cart
            </Alert.Heading>
          </div>
        )}
         {/* Topbar   */}
         <Topbar name={userName} />
        <Routes>
          <Route path="/" index element={<Homepage name={userName}/>} />
          <Route path="/Homepage" element={<Homepage name={userName} />} />
          <Route path="/About" element={<About />} />
          <Route
            path="/Product"
            element={<Product handleClick={handleClick} />}
          />
          <Route path="/Service" element={<Service />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Feedback" element={<Feedback />} />
          <Route
            path="/Cart"
            element={
              isLogged ? 
                <Cart name={userName} cart={cart} setCart={setCart} handleChange={handleChange}
              />: <Login to="/Login"  replace /> 
            }
          />
          <Route path="/Cards" element={<Cards />} />
          <Route path="/Login" index element={<Login />} />
          <Route path="/Register" index element={<Register />} />
          <Route path="/extras/FAQs" index element={<FAQs />} />
          <Route path="/extras/Help" index element={<Help />} />
          <Route path="/extras/Support" index element={<Support />} />
          <Route path="/WIP" element={<WIP />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </Router>
  );
}

export default App;
