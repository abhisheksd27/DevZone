import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet , Navigate} from 'react-router-dom'


function OnlyAdminPrivateRoute() {
    const {currentUser} =useSelector((state)=>state.user)


  return currentUser.isadmin ? <Outlet/>: <Navigate to='/sign-in'/>;
  
}

export default OnlyAdminPrivateRoute
