import {Routes, Route } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react';
import LandingPage from './LandingPage';
import Complaint from './Complaint';
import ComplainId from './supervisor/ComplainId';
import Supervisor from './Supervisor';
import Stats from './Stats';
import Admin from './Admin';
import Navbar from './Navbar';
import ResourcesCheck from './supervisor/ResourcesCheck';

function Router() {
  const { isLoading } = useAuth0();

  return isLoading ? <div>Loading...</div> : (
      <div className='back'> 
        <Navbar/>
        <Routes>
          <Route path="/" index element={<LandingPage/>} />
          <Route path="/complaint" element={<Complaint/>} />
          <Route path="/complaint/:id" element={<ComplainId/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/supervisor" element={<Supervisor/>} />
          <Route path="/allocate" element={<Stats/>} />
          <Route path="/resource" element={<ResourcesCheck/>} />
    
          <Route path="*" element={<LandingPage/>} />
        </Routes>  
      </div>
  );
}

export default Router;