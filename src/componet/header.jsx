import React from 'react'
import Nav from './nav'
import { motion } from "motion/react"

const header = () => {
  return (
    <div className='min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden' style={{backgroundImage: "url('./header_img.png')"}} id='Header'>
      <Nav/>
      <motion.div
      initial={{opacity:0, y:100}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, y:0 }}
      viewport={{once: true}}
      className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'  >
        <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20 '>
            Explore home that fit your dreams       
        </h2>
            <div className='space-x-6 mt-10'>
                <a href="#Project"className='border border-white px-8 py-3 rounded'>Projects</a>
                <a href="#Contact"className='border border-white px-8 py-3 rounded bg-blue-500'>Contact Us</a>
            </div>
      </motion.div>
    </div>
  )
}

export default header
