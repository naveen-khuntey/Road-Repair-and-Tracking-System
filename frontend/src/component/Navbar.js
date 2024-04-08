import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import profile from "../images/profile.jpg";
export default function Navbar() {
  const { logout, isAuthenticated, loginWithPopup, user } = useAuth0();

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'RegisterComplaint', path: '/complaint' },
    { title: 'statistics', path: '/statistics' },
  ]

  const authClick = () => {
    isAuthenticated ? 
      logout({ returnTo: window.location.origin }) 
      :  loginWithPopup();
  }

  return (
  <nav className="flex justify-around bg-gray-800 p-4">
    <NavLink className="text-white text-2xl font-bold mr-4" to="/">
      RRTS
    </NavLink>
    <div className="flex gap-4 items-center">
      <div className="flex space-x-4">
        {navItems.filter(()=> isAuthenticated ? true : false).map((item) => (
          <NavLink
            className="text-white hover:text-gray-300"
            activeClassName="text-gray-300"
            id={item.title}
            to={item.path}
            key={item.title}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <img
        onClick={authClick}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={user ? user.picture : profile}
        alt={user?.name}
      />
    </div>
  </nav>
  )
}
