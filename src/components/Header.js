import React from 'react'

const Header = () => {
  return (
    <header className='bg-black text-white flex items-baseline px-4 py-2 justify-between'>

      <h1 className='text-2x1'> Pet Adoption Portal</h1>
      <nav className='space-x-4'>

        <a className='s-link' href="">Login</a>
        <a className='s-link' href="">Sign Up</a>

      </nav>

    </header>


  )
}

export default Header