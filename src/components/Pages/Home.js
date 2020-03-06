import React from 'react'
import { Link } from 'gatsby'
import { AppContent } from '../Layout'

const Home = () => {
  return (
    <div className="container-login100">
      <AppContent>
        <h1>Virginia SoftWash</h1>
        <p>
          Since you are now logged in, view your profile: <Link to="/profile">View profile</Link>
        </p>
      </AppContent>
    </div>
  )
}

export default Home
