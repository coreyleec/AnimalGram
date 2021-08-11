import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "lightgrey",
  textDecoration: "none",
  color: "black",
  borderRadius: "0 px",
};

class Navbar extends React.Component {
  render() {
    return (
      <div >
      <div>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: "grey",
          }}
        >
          Pet Feed
        </NavLink>

        <NavLink
          to="/filtered"
          exact
          style={link}
          activeStyle={{
            background: "grey",
          }}
        >
          Cat's Only
        </NavLink>

        <NavLink
          to="/favorites"
          exact
          style={link}
          activeStyle={{
            background: "grey",
          }}
        >
          Favorties
        </NavLink>
      </div>
      </div>
    );
  }
}
export default Navbar;
