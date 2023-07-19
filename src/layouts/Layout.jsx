import React from 'react'

const Layout = ({children}) => {
  return (
    <div className='w-[85%] mx-auto mt-6 md:w-[90%]'>
      {children}
    </div>
  )
}

export default Layout