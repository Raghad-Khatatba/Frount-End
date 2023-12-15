import React from 'react'
import './hero.css'
import Lottie from "lottie-react";
import devAnimation from "../../../public/animation/dev.json"
import { motion } from 'framer-motion';
export default function Hero() {
  return (
    <section>
      <div className="flex avater1">
      <div className="parentAvater">
        <motion.img
          initial={{transform:'scale(0)'}}
          animate={{transform:'scale(1)'}}
          transition={{damping:6, type: "spring", stiffness:100}}
        src="public/girl-photo.jpg" alt="" className="avater" />
        <span className=""></span>
      </div>
      <motion.ul
        initial={{scale:0}}
        animate={{scale:1}}
        transition={{duration:1}}>
        <li><span><i className="fa-solid fa-envelope"></i></span> RaghadZKhatatba@gmail.com</li>
        <li><span><i className="fa-solid fa-phone"></i></span>0567212051</li>
        <li><i className="fa-brands fa-github"></i>Raghad-Khatatba</li>
        <li><i className="fa-solid fa-location-dot"></i>Palestine-Nablus</li>
      </motion.ul>
      </div>
      <section className='hero flex'>
    <div className='leftSection'>
      <motion.h1 
  initial={{scale:0}}
  animate={{scale:1}}
  transition={{duration:1}}
  className='title'>Raghad Khatatba, Software Engineer</motion.h1>
      <motion.p initial={{scale:0}}
  animate={{scale:1}}
  transition={{duration:1}}
   className='subTitle'>Highly-motivated Software Engineer seeking a job in position as a front end web developer.</motion.p>
       <motion.h1 
  initial={{scale:0}}
  animate={{scale:1}}
  transition={{duration:1}}
  className='title' style={{fontSize:"1.5rem",marginTop:"20px"}}>EDUCATION :</motion.h1>
   <motion.p initial={{scale:0}}
  animate={{scale:1}}
  transition={{duration:1}}
   className='subTitle'>Bachelor of Computer Science Apprenticeship Program CAP ,GPA 3.28 <br/>An-Najah National university <br/>2020-2024</motion.p>
      <motion.div
      initial={{scale:0}}
      animate={{scale:1}}
      transition={{duration:1}}
      className="mediaBtn">
    <a href="https://www.facebook.com/" className="link fa">
        <i className="fa-brands fa-facebook"></i></a>
     <a href="https://github.com/Raghad-Khatatba" className="link gi">
     <i className="fa-brands fa-github"></i></a>
    <a href="mailto:RaghadZKhatatba@gmail.com" className="link em">
    <i className="fa-solid fa-envelope"></i></a>
    <a href="https://www.linkedin.com/" className="link li">
        <i className="fa-brands fa-linkedin"></i></a>
</motion.div>
    </div>
    
    <div className='rightSection animation'>
    <Lottie className='contactAnimation ' style={{width:300}} animationData={devAnimation} />
    </div>
    </section>
    </section>
  )
}
