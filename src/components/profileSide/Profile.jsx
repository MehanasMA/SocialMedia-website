import React from 'react'
import FollowersDetail from '../Followers/FollowersDetail'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileDetails from '../ProfileDetails/ProfileDetails'
import './Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
     <LogoSearch/>
     <ProfileDetails/>
     <FollowersDetail/>
    </div>
  )
}

export default Profile
