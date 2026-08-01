
import './App.css'
import { RouterProvider } from 'react-router';
import { routes } from "./app.routes"
import { useSelector } from 'react-redux';
import { useAuth } from '../features/auth/hook/useAuth';
import { useEffect } from 'react';

function App() {
  
  const {handlegetMe} = useAuth();
  const user = useSelector(state => state.auth.user);
  
  useEffect(() => {
    handlegetMe();
  },[])

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
