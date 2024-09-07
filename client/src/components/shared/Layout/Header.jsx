import React from "react";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    toast.success("Log out successful");
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-brand h1 texx">
            <BiSolidDonateBlood
              color="red"
              className="mx-3 text-xl-start icon"
            />
            DonorHub
          </div>
          <ul className="navbar-nav d-flex flex-row align-items-center">
            <li className="nav-item mx-3">
              <p className="nav-link texx">
                Welcome{" "}
                {user?.name || user?.hospitalName || user?.organisationName}{" "}
                <FaUser className="mx-1" />{" "}
                <span className="badge bg-primary">{user?.role}</span>
              </p>
            </li>
            <li className="nav-item mx-3">
              <button className="btn btn-danger" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
