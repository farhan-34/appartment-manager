import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const nav = useNavigate()

  useEffect(() => {
    nav('/home')
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home