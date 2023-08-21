import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";

const Header = () => {
  const [loginUser, setLoginUser] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setLoginUser(user);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    message.success("Logout Successfully");
    navigate("/login");
  };
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg header">
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">
            <h3>SpendSensibly</h3>
          </Link>
        </div>
        <div className="hed1">
          <div><h6 className=" ">
            {loginUser && loginUser.name}
          </h6></div>
          <div><button className="btn btn-danger" onClick={logoutHandler}>
            Logout
          </button></div>
          
          
        </div>
      </nav> */}
      <nav className="navbar navbar-expand-lg header">
          <div className=" navbar-collapse">
          <Link className="navbar-brand" to="/">
            <h3>SpendSensibly</h3>
          </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
               
                <h6 className="nav-item name">
                  {loginUser && loginUser.name}
                </h6>
              </li>
              <li className="nav-item">
                <button className="btn btn-danger" onClick={logoutHandler}>
                  Logout
                </button>
              </li>
            </ul>
          </div>

      </nav>
    </>
  );
};

export default Header;
