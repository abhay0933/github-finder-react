import React from 'react'
import NavBar from './NavBar'
import Profile from './Profile'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='navBar'>
        <NavBar />
      </div>
      <div className='profile-page'>
        <Profile />
      </div>
    </div>
  )
}

export default Home