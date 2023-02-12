import{Routes, Route, Navigate} from 'react-router-dom' 
import Home from '../pages/home';


import Login from '../pages/Login';
import Registro from '../pages/registro';
import Dashboard from '../pages/dashboard';




function RoutesMain() {
  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/registro' element={<Registro/>} />
      <Route path='/dashboard' element={<Dashboard/>} />


       <Route path='*' element={<Navigate replace to='/login'/>} />

   
     </Routes>
    </>
  );
}

export default RoutesMain;