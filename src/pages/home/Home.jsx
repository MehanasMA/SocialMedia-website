import React from 'react'
import Profile from '../../components/profileSide/Profile'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <Profile/>
      <div className='postSide'>Post</div>
      <div className='RightSide'>Right</div>
    </div>
  )
}

export default Home
