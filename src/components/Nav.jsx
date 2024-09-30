import React from 'react'
import logo from '../assets/managerLogo.png'

const Nav = () => {
  return (
    <div className='w-full bg-green-500 h-20 flex items-center gap-4 px-4 '
    >
      <img className='w-16 h-16'
       src={logo} alt="" />
      <h1 className='text-white text-3xl '
      >Password Manager</h1>
    </div>
  )
}

export default Nav