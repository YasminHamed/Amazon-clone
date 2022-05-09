import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
//components
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import Footer from './components/Footer/Footer';
import { useStateValue } from './components/contextAPI/StateProvider';
import { auth } from "./firebase";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {

    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
    return () => {
      unsubscribe();
    }
  }, []);

  console.log(user)

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/checkout" element={<Checkout />}/>
          <Route path="/login" element={<Login />}/>
        </Routes>
      </div>
      <Footer/>
    </Router>
  )
}

export default App;