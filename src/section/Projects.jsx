import img1Divifilms from '../assets/Projects/Divifilms/img1-diviFilms.jpg'
import img2Divifilms from '../assets/Projects/Divifilms/img2-diviFilms.jpg'
import img3Divifilms from '../assets/Projects/Divifilms/img3-diviFilms.jpg'
import img4Divifilms from '../assets/Projects/Divifilms/img4-diviFilms.jpg'

import img1EccomerceSneakers from '../assets/Projects/Eccomerce-product/img1-sneakers.jpg'
import img2EccomerceSneakers from '../assets/Projects/Eccomerce-product/img2-sneakers.jpg'

import img1Eshop from '../assets/Projects/Eshop/img1-eshop.jpg'
import img2Eshop from '../assets/Projects/Eshop/img2-eshop.jpg'
import img3Eshop from '../assets/Projects/Eshop/img3-eshop.jpg'
import img4Eshop from '../assets/Projects/Eshop/img4-eshop.jpg'

import img1RickAndMorty from '../assets/Projects/Rick and morty/img1-rickandmorty.jpg'
import img2RickAndMorty from '../assets/Projects/Rick and morty/img2-rickandmorty.jpg'
import img3RickAndMorty from '../assets/Projects/Rick and morty/img3-rickandmorty.jpg'

import img1SpaceTourims from '../assets/Projects/Space tourims/img1.jpg'
import img2SpaceTourims from '../assets/Projects/Space tourims/img2.jpg'
import img3SpaceTourims from '../assets/Projects/Space tourims/img3.jpg'

import img1SupermarkList from '../assets/Projects/SupermarList/img1-supermark.jpg'
import img3SupermarkList from '../assets/Projects/SupermarList/img3-supermark.jpg'
import img4SupermarkList from '../assets/Projects/SupermarList/img4-supermark.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'
import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  SiTailwindcss,
  SiReact,
  SiTypescript,
  SiJavascript,
} from 'react-icons/si'
import ProjectCard from '../components/ProjectCard'

const show = {
  opacity: 1,
  display: 'block',
}

const hide = {
  opacity: 0,
  transitionEnd: {
    display: 'none',
  },
}

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const imagenesDiviFilms = [
    { id: 1, src: img1Divifilms },
    { id: 2, src: img2Divifilms },
    { id: 3, src: img3Divifilms },
    { id: 4, src: img4Divifilms },
  ]

  const imagenesSpacetourism = [
    { id: 1, src: img1SpaceTourims },
    { id: 2, src: img2SpaceTourims },
    { id: 3, src: img3SpaceTourims },
  ]

  const imagenesSupermarklist = [
    { id: 1, src: img1SupermarkList },
    { id: 2, src: img3SupermarkList },
    { id: 3, src: img4SupermarkList },
  ]

  const imagenesEccomerece = [
    { id: 1, src: img1Eshop },
    { id: 2, src: img2Eshop },
    { id: 3, src: img3Eshop },
    { id: 4, src: img4Eshop },
  ]

  const imagenesRickAndMorty = [
    { id: 1, src: img1RickAndMorty },
    { id: 2, src: img2RickAndMorty },
    { id: 3, src: img3RickAndMorty },
  ]

  const imagenesEccomerceSneakers = [
    { id: 1, src: img1EccomerceSneakers },
    { id: 2, src: img2EccomerceSneakers },
  ]

  return (
    <div className="px-40 mt-5" id="proyectos">
      <div className="flex items-center gap-10 justify-center">
        <h2 className="text-6xl font-bold text-cyan-400 dark:text-slate-900">
          Proyectos
        </h2>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible && (
            <button className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-200 dark:from-cyan-800 dark:to-cyan-800 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 shadow-lg shadow-slate-500/50 dark:shadow-blue-100 rounded-md w-24">
              Ocultar
            </button>
          )}
          {!isVisible && (
            <button className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-200 dark:from-cyan-800 dark:to-cyan-800 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 shadow-lg shadow-slate-500/50 dark:shadow-blue-100 rounded-md w-24">
              Mostrar
            </button>
          )}
        </motion.button>
      </div>
      <h4 className="text-white dark:text-black flex justify-center mt-10 text-xl">
        Tecnologias
      </h4>
      <div className="flex justify-center gap-10 mt-5 text-slate-300 dark:text-slate-800">
        <SiReact className="text-5xl " />
        <SiJavascript className="text-5xl " />
        <SiTailwindcss className="text-5xl " />
        <SiTypescript className="text-5xl " />
      </div>
      <motion.div animate={isVisible ? show : hide}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="2xl:grid 2xl:grid-cols-2 mt-10 gap-10">
            <ProjectCard
              titleProject="Divi Films"
              linkGitHub=""
              linkDeploy=""
              imagesProject={imagenesDiviFilms}
            />

            <ProjectCard
              titleProject="Space tourism"
              linkGitHub="https://github.com/Ayrtonalvaro/Space-world"
              linkDeploy="https://space-turism-b5b84.firebaseapp.com/Destination"
              imagesProject={imagenesSpacetourism}
            />

            <ProjectCard
              titleProject="E-Shop"
              linkGitHub="https://github.com/Ayrtonalvaro/Coder-ecommerce"
              linkDeploy="https://backende-shop.firebaseapp.com/"
              imagesProject={imagenesEccomerece}
            />

            <ProjectCard
              titleProject="Supermark list"
              linkGitHub="https://github.com/Ayrtonalvaro/SupermarketList.github.io"
              linkDeploy="https://supermark-list.firebaseapp.com/"
              imagesProject={imagenesSupermarklist}
            />

            <ProjectCard
              titleProject="Rick and morty"
              linkGitHub=""
              linkDeploy=""
              imagesProject={imagenesRickAndMorty}
            />

            <ProjectCard
              titleProject="Snkears eccomerce"
              linkGitHub=""
              linkDeploy=""
              imagesProject={imagenesEccomerceSneakers}
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects
