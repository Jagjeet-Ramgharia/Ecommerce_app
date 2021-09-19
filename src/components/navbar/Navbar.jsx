import React from "react";
import { SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons";
import "./navbar.css";
import { Badge } from "@material-ui/core";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          EN
          <input type="text" placeholder="Search" />
          <SearchOutlined className="icon" />
        </div>
        <div className="center">
          <span>Shopfy</span>
        </div>
        <div className="right">
          <span>Register</span>
          <span>Sign In</span>
          <Badge badgeContent={3} color={"primary"}>
            <ShoppingCartOutlined className="icon" />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
