import React, { useState } from 'react'
import fotoPerfil from '../assets/295081989_620446602988685_3033678942857903426_n.jpg'

import { Link } from 'react-scroll'
import Swtich from '../components/Swtich'

const Navbar = () => {
  const links = [
    { name: 'Inicio', to: '/' },
    { name: 'Sobre mí', to: '/sombremi' },
    { name: 'Proyectos', to: '/proyectos' },
    { name: 'Contactos', to: '/contactos' },
  ]

  const [open, setOpen] = useState(false)

  const [navbarColor, setNavbarColor] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarColor(true)
    } else {
      setNavbarColor(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div
      className={
        navbarColor
          ? 'w-full fixed top-0 left-0 bg-gradient-to-br from-black to-slate-900 dark:bg-gradient-to-br dark:from-white dark:to-slate-500  z-50 '
          : 'w-full fixed top-0 left-0'
      }
    >
      <nav className="lg:flex items-center justify-around md:px-10 md:pt-10 px-7 bg-opacity-0 py-4 ">
        <div className="cursor-pointer flex items-center">
          <img
            className="w-12 rounded-full"
            src={fotoPerfil}
            alt="Foto de perfil de la barra de navegacion"
          />
          <h4 className="text-5xl text-white dark:text-black ">
            Port
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-black dark:to-slate-400 ">
              folio
            </span>
          </h4>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer lg:hidden"
          onClick={handleOpen}
        >
          {open && <i className="fa-solid fa-x text-white"></i>}
          {!open && <i className="fa-solid fa-bars text-white"></i>}
        </div>
        <div>
          <ul
            className={`lg:flex lg:items-center text-xl lg:text-xl gap-5 md:pb-0 pb-12 absolute lg:static lg:z-auto z-[-1] left-1 xl:mt-0 mt-6 w-full lg:w-auto bg-trasnparte pl-7 transition-all-duration-500 ease-in ${
              open
                ? 'top-20 md:bg-opacity-0 bg-gradient-to-br from-black to-slate-900 dark:from-white dark:to-slate-500 '
                : 'hidden'
            }`}
          >
            {links.map(link => {
              return (
                <Link
                  key={link.name}
                  activeClass="active"
                  to={`${link.to}`}
                  spy={true}
                  smooth={true}
                  offset={-10}
                  duration={600}
                >
                  <li className="hover:text-cyan-600 text-white dark:text-cyan-800 dark:hover:text-black duration-200  cursor-pointer lg:ml-8 lg:my-0 my-7">
                    {link.name}
                  </li>
                </Link>
              )
            })}
            <Swtich />
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
