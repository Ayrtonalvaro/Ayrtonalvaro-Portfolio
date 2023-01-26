import React from 'react'

import bootstrap from '../assets/bootstrap.png'
import css from '../assets/css.png'

import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import spring from '../assets/spring.png'
import taildwindcss from '../assets/tailwindd.png'
import ts from '../assets/ts.png'
import { motion } from 'framer-motion'

const Skills = () => {
  return (
    <div className="flex container flex-col lg:items-center md:w-screen">
      <h2 className="text-cyan-500 text-4xl pt-10 2xl:opacity-0 ">Skills</h2>
      <div className=" md:pr-80 lg:pr-0 2xl:absolute 2xl:mr-98  2xl:pt-20  top-20 right-96">
        <div >
          <motion.div
            className=""
            animate={{ x: 270 }}
            transition={{ ease: 'easeOut', duration: 3 }}
          >
            <div className="hover:animate-bounce cursor-pointer  duration-300 ">
              <img className="w-20  mt-5 object-contain " src={taildwindcss} />
            </div>
          </motion.div>
        </div>

        <motion.div
          className="flex gap-10 pt-8"
          animate={{ x: 150 }}
          transition={{ ease: 'easeOut', duration: 3 }}
        >
          <img
            className="w-20 bg-opacity-0 hover:animate-bounce cursor-pointer "
            src={bootstrap}
          />
          <img
            className="w-20 bg-opacity-0 hover:animate-bounce cursor-pointer "
            src={css}
          />
          <img
            className="w-20 bg-opacity-0 hover:animate-bounce cursor-pointer "
            src={ts}
          />
        </motion.div>

        <motion.div
          className=" flex gap-10 pt-8"
          animate={{ x: 150 }}
          transition={{ ease: 'easeOut', duration: 3 }}
        >
          <img
            className="w-20 bg-opacity-0 hover:animate-bounce cursor-pointer "
            src={java}
          />
          <img
            className="w-20 bg-opacity-0 hover:animate-bounce cursor-pointer "
            src={javascript}
          />
          <img
            className="w-20 bg-opacity-0 hover:animate-bounce cursor-pointer "
            src={react}
          />
        </motion.div>

        <motion.div
          className="pt-8"
          animate={{ x: 270 }}
          transition={{ ease: 'easeOut', duration: 3 }}
        >
          <img
            className="w-20  hover:animate-bounce cursor-pointer"
            src={spring}
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
