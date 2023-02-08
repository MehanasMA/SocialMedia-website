import React from 'react'
import PostSide from '../../components/PostSide/PostSide'
import Profile from '../../components/profileSide/Profile'
import RightSide from '../../components/RightSide/RightSide'
import './Home.css'
const Home = () => {
  return (
    <div className='Home'>
        <Profile/>
        <PostSide/>
        <RightSide/>
    </div>
  )
}

export default Home
