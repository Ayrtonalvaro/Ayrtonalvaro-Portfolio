import React from 'react'

const SkillIcon = ({ linkSkill, srcSkill }) => {
  return (
    <div className="hover:animate-bounce cursor-pointer  duration-300 ">
      <a href={linkSkill} target="_blank" rel="noreferrer">
        <img className="w-20  mt-5 object-contain " src={srcSkill} />
      </a>
    </div>
  )
}

export default SkillIcon
