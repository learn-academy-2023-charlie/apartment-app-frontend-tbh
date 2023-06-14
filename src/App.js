import React, { useState } from "react";
import mockUsers from "./mockUsers.js";
import mockApartments from "./mockApartments.js";

const App = () => {
  const [currentUser, setCurrentUser] = useState(mockUsers[0]);
  const [apartments, setApartments] = useState(mockApartments);

  return (
    <>
      <h3>Apartment App</h3>
    </>
  );
};