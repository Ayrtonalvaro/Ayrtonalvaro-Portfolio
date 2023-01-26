import React, { useState } from 'react'
import fotoPerfil from '../assets/295081989_620446602988685_3033678942857903426_n.jpg'
import { Link } from 'react-scroll'

const Navbar = () => {
  const links = [
    { name: 'Inicio', to: '/' },
    { name: 'Sobre mí', to: '/sombremi' },
    { name: 'Proyectos', to: '/proyectos' },
    { name: 'Contactos', to: '/contactos' },
  ]

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }
  return (
    <div className="w-full fixed top-0 left-0">
      <nav className="lg:flex items-center justify-around md:px-10 md:pt-10 px-7 bg-opacity-0 py-4">
        <div className="cursor-pointer flex items-center">
          <img
            className="w-12 rounded-full"
            src={fotoPerfil}
            alt="Foto de perfil de la barra de navegacion"
          />
          <h4 className="text-5xl text-white">
            Port
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe ">
              folio
            </span>
          </h4>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={handleOpen}
        >
          {open && <i className="fa-solid fa-x text-white"></i>}
          {!open && <i className="fa-solid fa-bars text-white"></i>}
        </div>
        <div>
          <ul
            className={`md:flex md:items-center text-xl md:text-xl gap-5 md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-1 w-full md:w-auto bg-trasnparte pl-7 transition-all-duration-500 ease-in ${
              open
                ? 'top-20 md:bg-opacity-0 bg-cyan-100 bg-opacity-5'
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
                  <li className="hover:text-cyan-600 text-white duration-200  cursor-pointer lg:ml-8 lg:my-0 my-7">
                    {link.name}
                  </li>
                </Link>
              )
            })}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar