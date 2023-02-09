import React from 'react'

// eslint-disable-next-line react/prop-types
const RedSocial = ({ redSocial, redSocialLink }) => {
  return (
    <div>
      <a href={`${redSocialLink}`} target="_blank" rel="noreferrer">
        <i
          className={`fa-brands ${redSocial} text-4xl text-transparent bg-clip-text bg-gradient-to-br from-slate-900 to-cyan-200 dark:from-dark dark:to-cyan-900 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-slate-900 hover:to-purple-200 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110`}
        ></i>
      </a>
    </div>
  )
}

export default RedSocial
