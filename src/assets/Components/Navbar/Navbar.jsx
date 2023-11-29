import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../gallery/pet.png";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Successfully logged out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center Navfont">
      <div className="sm:gap-2 flex justify-center text-center items-center md:gap-10 fixed text-blue-950 z-50 p-5 mx-auto uppercase md:text-lg">
        <div>
          <img src={logo} alt="Logo" className="w-16 h-16" />
        </div>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/petlisting"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Pet-Listing
        </NavLink>
        <NavLink
          to="/petdonation"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
          }
        >
          Donation-Campaigns
        </NavLink>

        {user ? (
          <div className="flex justify-center items-center">
            <div
              className="relative"
              onClick={() => setisDropdownOpen(!isDropdownOpen)}
            >
              <h1 className="lowercase text-blue-950">{user.displayName}</h1>
              <img src={user.photoURL} className="w-10 h-10 p-2 rounded-full" />
              {isDropdownOpen && (
                <div className="absolute rounded-md bg-white shadow-2xl p-2 Navfont">
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <button onClick={handleLogOut} className="Navfont">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              Log-In
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
              }
            >
              Sign-Up
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;



