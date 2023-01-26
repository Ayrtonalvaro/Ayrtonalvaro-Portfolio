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

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper'
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
    <div className="px-40 mt-5" id="Projects">
      <div className="flex items-center gap-10 justify-center">
        <h2 className="text-6xl font-bold text-cyan-400">Proyectos</h2>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible && (
            <button className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-200 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 shadow-lg shadow-slate-500/50 rounded-md w-24">
              Ocultar
            </button>
          )}
          {!isVisible && (
            <button className="text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-purple-200 transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 shadow-lg shadow-slate-500/50 rounded-md w-24">
              Mostrar
            </button>
          )}
        </motion.button>
      </div>
      <h4 className="text-white flex justify-center mt-10 text-xl">
        Tecnologias
      </h4>
      <div className="flex justify-center gap-10 mt-5 text-slate-300 ">
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
            <div className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-cyan-500 hover:to-slate-50">
              <h1 className="text-4xl mb-5   text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe ">
                Divi Films
              </h1>
              <Swiper
                className="grayscale cursor-pointer hover:grayscale-0 duration-500  2xl:skew-y-3  "
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="fade"
              >
                {imagenesDiviFilms.map(imagen => {
                  return (
                    <SwiperSlide key={imagen.id}>
                      <img src={imagen.src} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className="cursor-pointer hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-cyan-500 hover:to-slate-50">
              <h1 className="text-4xl mb-5 text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe">
                Space tourism
              </h1>
              <Swiper
                className="grayscale  hover:grayscale-0 duration-500 2xl:-skew-y-3 "
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="fade"
              >
                {imagenesSpacetourism.map(imagen => {
                  return (
                    <SwiperSlide key={imagen.id}>
                      <img src={imagen.src} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-cyan-500 hover:to-slate-50">
              <h1 className="text-4xl mb-5 text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe">
                E-Shop
              </h1>
              <Swiper
                className="grayscale cursor-pointer hover:grayscale-0 duration-500  "
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="fade"
              >
                {imagenesEccomerece.map(imagen => {
                  return (
                    <SwiperSlide key={imagen.id}>
                      <img src={imagen.src} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-cyan-500 hover:to-slate-50">
              <h1 className="text-4xl mb-5  text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe">
                Supermark list
              </h1>
              <Swiper
                className="grayscale cursor-pointer hover:grayscale-0 duration-500 2xl:-skew-y-3 "
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="fade"
              >
                {imagenesSupermarklist.map(imagen => {
                  return (
                    <SwiperSlide key={imagen.id}>
                      <img src={imagen.src} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-cyan-500 hover:to-slate-50">
              <h1 className="text-4xl mb-5 text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe">
                Rick and morty
              </h1>
              <Swiper
                className="grayscale cursor-pointer hover:grayscale-0 duration-500 2xl:-skew-y-3 "
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="fade"
              >
                {imagenesRickAndMorty.map(imagen => {
                  return (
                    <SwiperSlide key={imagen.id}>
                      <img src={imagen.src} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
            <div className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-br hover:from-cyan-500 hover:to-slate-50">
              <h1 className="text-4xl mb-5 text-transparent bg-clip-text bg-gradient-to-br from-slate-200 to-withe">
                Snkears eccomerce
              </h1>
              <Swiper
                className="grayscale cursor-pointer hover:grayscale-0 duration-500 "
                modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                effect="fade"
              >
                {imagenesEccomerceSneakers.map(imagen => {
                  return (
                    <SwiperSlide key={imagen.id}>
                      <img src={imagen.src} />
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Projects
