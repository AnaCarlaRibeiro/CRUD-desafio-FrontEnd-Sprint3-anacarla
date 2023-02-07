import{Routes, Route, Navigate} from 'react-router-dom' 
import Home from '../components/home';


import Login from '../components/Login';
import Registro from '../components/registro';
import Dashboard from '../components/dashboard';




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