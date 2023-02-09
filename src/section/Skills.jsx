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
import SkillIcon from '../components/SkillIcon'

const Skills = () => {
  return (
    <div className="flex container flex-col lg:items-center md:w-screen">
      <h2 className="text-cyan-500 text-4xl pt-10 2xl:opacity-0 ">Skills</h2>
      <div className=" md:pr-80 lg:pr-0 2xl:absolute 2xl:mr-98  2xl:pt-20  top-20 right-96">
        <div>
          <motion.div
            className=""
            animate={{ x: 270 }}
            transition={{ ease: 'easeOut', duration: 3 }}
          >
            <SkillIcon
              linkSkill="https://tailwindcss.com/"
              srcSkill={taildwindcss}
            />
          </motion.div>
        </div>

        <motion.div
          className="flex gap-10 pt-8 items-center"
          animate={{ x: 150 }}
          transition={{ ease: 'easeOut', duration: 3 }}
        >
          <SkillIcon
            linkSkill="https://getbootstrap.com/"
            srcSkill={bootstrap}
          />

          <SkillIcon
            linkSkill="https://developer.mozilla.org/es/docs/Web/CSS"
            srcSkill={css}
          />

          <SkillIcon
            linkSkill="https://www.typescriptlang.org/"
            srcSkill={ts}
          />
        </motion.div>

        <motion.div
          className=" flex gap-10 pt-8 items-center"
          animate={{ x: 150 }}
          transition={{ ease: 'easeOut', duration: 3 }}
        >
          <SkillIcon linkSkill="https://www.java.com/es/" srcSkill={java} />
          <SkillIcon
            linkSkill="https://developer.mozilla.org/es/docs/Web/JavaScript"
            srcSkill={javascript}
          />

          <SkillIcon linkSkill="https://es.reactjs.org/" srcSkill={react} />
        </motion.div>

        <motion.div
          className="pt-8"
          animate={{ x: 270 }}
          transition={{ ease: 'easeOut', duration: 3 }}
        >
          <SkillIcon linkSkill="https://spring.io/" srcSkill={spring} />
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
