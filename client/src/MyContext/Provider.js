import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import MyContext from "./index";

function MyProvider({ children }) {
  const [userData, setUserData] = useState([]);

  const store = {
  };

  return <MyContext.Provider value={store}>{children}</MyContext.Provider>;
}

MyProvider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any),
}.isRequire;

export default MyProvider;
