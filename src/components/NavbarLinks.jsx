import React from 'react'

// eslint-disable-next-line react/prop-types
const NavbarLinks = ({ name }) => {
  return (
    <>
      <li className="hover:text-cyan-600 text-white dark:text-cyan-800 dark:hover:text-black duration-200  cursor-pointer lg:ml-8 lg:my-0 my-7">
        {name}
      </li>
    </>
  )
}

export default NavbarLinks
