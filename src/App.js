import React, { useState } from "react";
import mockUsers from "./mockUsers.js";
import mockApartments from "./mockApartments.js";
import Header from "./components/Header.js"
import "./App.css"
import Footer from "./components/Footer.js";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [apartments, setApartments] = useState(mockApartments);

  return (
    <>
      <div class="header"> <Header/> </div>
        <h3>Apartment App</h3>
      <div class="footer"> <Footer /> </div>
    </>
  );
};


export default App