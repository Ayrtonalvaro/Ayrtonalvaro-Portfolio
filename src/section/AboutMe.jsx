import React, { useState } from 'react'
import { user } from '../data.json'

import { motion } from 'framer-motion'
import Typed from 'react-typed'
import RedSocial from '../components/RedSocial'

const AboutMe = () => {
  const [userData] = useState(user)
  const [value] = useState(0)
  const { name, profession, linkSocial, description } = userData[value]
  const gitHub = 'fa-github'
  const linkedIn = 'fa-linkedin-in'
  const instagram = 'fa-instagram'
  return (
    <div className=" md:pt-48 pt-96" id="sombremi">
      <div className=" text-start  ">
        <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe dark:from-black dark:to-cyan-800 mb-8">
          Bienvenido a mi portfolio
        </h4>
        <h1 className="text-7xl font-black mt-2 text-white dark:text-slate-900">
          Mi nombre es
          <Typed
            className="ml-5 font-black text-cyan-700"
            strings={[`${name}`]}
            typeSpeed={150}
            backSpeed={100}
          />
        </h1>
        <p className="text-4xl mt-5">
          <span className="text-slate-100 dark:text-slate-900 font-semibold">
            {' '}
            {profession}
          </span>
        </p>
        <div className="flex justify-start mt-8 gap-10 text-3xl text-slate-400">
          <RedSocial redSocial={gitHub} redSocialLink={linkSocial.gitHub} />
          <RedSocial redSocial={linkedIn} redSocialLink={linkSocial.linkedIn} />
          <RedSocial
            redSocial={instagram}
            redSocialLink={linkSocial.instagram}
          />
        </div>
        <motion.div
          className="z-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="mt-5 w-[600px] text-xl text-slate-300 dark:text-slate-800 ">
            {description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default AboutMe
