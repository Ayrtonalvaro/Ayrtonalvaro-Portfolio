import React from 'react'
import fotoPerfil from '../assets/295081989_620446602988685_3033678942857903426_n.jpg'

const Logo = () => {
  return (
    <div>
      <img
        className="w-12 rounded-full"
        src={fotoPerfil}
        alt="Foto de perfil de la barra de navegacion"
      />
    </div>
  )
}

export default Logo
