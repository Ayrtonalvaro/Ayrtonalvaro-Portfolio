import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { SiGithub } from 'react-icons/si'
import { MdOutlineOpenInNew } from 'react-icons/md'
const ProjectCard = ({
  titleProject,
  linkGitHub,
  linkDeploy,
  imagesProject,
}) => {
  return (
    <div>
      <div className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-cyan-500 hover:to-slate-50">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl mb-5   text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe dark:from-black dark:to-cyan-900 cursor-pointer ">
            {titleProject}
          </h1>
          <div className="flex gap-5">
            <a href={linkGitHub} target="_blank" rel="noreferrer">
              <SiGithub className=" text-4xl cursor-pointer text-white hover:text-cyan-400 dark:text-slate-900 dark:hover:text-slate-100 hover:duration-600" />
            </a>

            <a href={linkDeploy} target="_blank" rel="noreferrer">
              <MdOutlineOpenInNew className=" text-4xl cursor-pointer text-white dark:text-slate-900 dark:hover:text-slate-100 hover:text-cyan-400 hover:duration-600" />
            </a>
          </div>
        </div>

        <Swiper
          className="grayscale dark:grayscale-0 cursor-pointer hover:grayscale-0 duration-500  2xl:skew-y-3  "
          modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
          effect="fade"
        >
          {imagesProject.map(imagen => {
            return (
              <SwiperSlide key={imagen.id}>
                <img src={imagen.src} />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default ProjectCard
