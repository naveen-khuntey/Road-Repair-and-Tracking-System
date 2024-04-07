import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-router-dom';
import profile from "../images/profile.jpg";
export default function Navbar() {
  const { logout, isAuthenticated, loginWithPopup, user } = useAuth0();

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'Start', path: '/start' },
    { title: 'Complaint', path: '/complaint' },
    { title: 'Admin', path: '/admin' },
    { title: 'Supervisor', path: '/supervisor' },
    { title: 'Stats', path: '/statistics' },
  ]

  const authClick = () => {
    isAuthenticated ? 
      logout({ returnTo: window.location.origin }) 
      :  loginWithPopup();
  }

  return (
    <nav class="">
      <NavLink className='' to='/'><h1>RRTS</h1></NavLink>
      <div class="" >
        <div className=''>
          {
            navItems.map((item) => {
              return (
                <NavLink className='' id={item.title} to={item.path}>{item.title}</NavLink>
              )
            })
          }
          <img onClick={authClick} 
            className="" src={user? user.picture : profile} alt={user?.name} 
          />
        </div>
      </div>
    </nav>
  )
}
