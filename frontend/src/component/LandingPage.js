import React from 'react'
import img from "../images/profile.jpg"
import { useAuth0 } from '@auth0/auth0-react';
import Card from './Card'
export default function LandingPage() {
  const { isAuthenticated,loginWithRedirect } = useAuth0();
  const authClick = () => {
    loginWithRedirect("/");
  }
  const cardata = [
    {
      id : '1',
      imageSrc :{img},
      buttonText: "Register Complaint",
      path: "/complaint"
    },
    {
      id : '2',
      imageSrc :{img},
      buttonText: "Supervisor Login",
      path: "/supervisor"
    },
    {
      id : '3',
      imageSrc :{img},
      buttonText: "Admin Login",
      path: "/admin"
    }

  ]
  return (!isAuthenticated) ? (
    <div className='flex justify-center align-middle gap-8 mt-9'>
        <Card key="1" imageSrc={img} buttonText="Login" path="/" handle={authClick} />
    </div>
  ) : (
    <div className='flex justify-center align-middle gap-8 mt-9'>
      {cardata.map((ele)=>{
        return <Card  key={ele.id} imageSrc={img} buttonText={ele.buttonText} path={ele.path} />
      })}
    </div>
  ) 
}
