import React from 'react'
import { useNavigate } from 'react-router-dom'

const HomeDashboard = () => {
  let navigate = useNavigate();
  return (
    <>
      <h1>Home dashboad</h1>
      <button onClick={()=>navigate('/login')}>Logout</button>
    </>
  )
}

export default HomeDashboard