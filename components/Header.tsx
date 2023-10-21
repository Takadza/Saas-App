import React from 'react'
import Logo from './Logo'
import DarkMoodToogle from './DarkMoodToogle'
import UserButton from './UserButton'

function Header() {
  return (
    <header  className='sticky top-0 bg-white dark:bg-gray-900'>
       <nav className='flex  flex-col sm:flex-row items-center p-5 pl-2 bg-white
       dark:bg-gray-900 max-w-7xl mx-auto'>
        <Logo/>

        <div className='flex-1 flex items-center justify-end space-x-4'> 
          {/**Language Select  */}

          {/**Sesson && .... */}

          {/**Dark Mood Toogle  */}
          <DarkMoodToogle/>

          {/**User Button */}
          <UserButton/>
        </div>
       </nav>

       {/**Upgrade Banner  */}
    </header>
  )
}

export default Header