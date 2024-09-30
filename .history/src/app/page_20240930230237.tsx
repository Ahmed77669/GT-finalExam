
'use client'
import React, { useState } from 'react'
import { Inter } from "@next/font/google";
import Image from 'next/image';
import computer from '@/public/computer.png'
import { url } from 'inspector';
import lang from "@/public/lang.png"
import competition from "@/public/competition 1.png"
import AI from "@/public/AI.png"
import Footer from '@/components/footer';
import Signup from '@/components/signup';
import { motion } from 'framer-motion';
const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
  });
const Home = () => {
    const [isSignupVisible, setSignupVisible] = useState(false); // state to toggle popup

    const handleGetStartedClick = () => {
      setSignupVisible(true);
    };
  
    const closeSignup = () => {
      setSignupVisible(false);
    };
    const pageVariants = {
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0, transition: { duration: 1 } },
    };
    
  return (
    // <motion.div variants={pageVariants} initial="hidden" animate="visible">
    <section className= {inter.className}>
    <div className="landing-container">
        <div className="landining-text">
            <p className='landing-headline'>The Engaging and Effective Way to Master Programming</p>
            <p className='landing-normal'>Take interactive exams and challenges designed to make learning fun and impactful. Start your journey toward becoming a coding expert today!</p>
        <button onClick={handleGetStartedClick}>GETSTARTED</button>
        </div>
        <div className="computer-image-container">
            <Image src={computer} alt='computer' width={600}/>
        </div>
    </div>
    <div className="landing-container" style={{backgroundColor :"#007676", top:"-90px", position:"relative", minHeight:"800px" ,alignItems:"center"}}>
        <div className="landining-text">
            <p className='landing-headline' style={{ color:"white" , margin:"0"}}>Practice Over 30 Programming Languages!</p>
            <p className='landing-normal' style={{width:"500px",  color:"white" }}>Enhance your skills with exams in over thirty programming languages. Our premium service offers a comprehensive and engaging way to advance your coding expertise.</p>
        <button style={{backgroundColor:"white" , color:"#008080"}}>Try It</button>
        </div>
        <div className="computer-image-container" style={{display:"flex" , justifyContent:"space-between" , flexDirection:"column", }}>
        <Image src={lang} alt='lang' width={550}/>
             
        </div>
    </div>
    <div className="landing-container" style={{backgroundColor :"white", minHeight:"800px" , alignItems:"center"}}>
        <div className="computer-image-container" style={{display:"flex" , justifyContent:"space-between" , flexDirection:"column", }}>
        <Image src={competition} alt='lang' height={400}/>
             
        </div>
        <div className="landining-text">
            <p className='landing-headline' style={{  margin:"0"}}>Public and Private Contests</p>
            <p className='landing-normal' style={{color:"black",width:"500px" }}>Compete in public contests or create private ones to practice with friends. You can design your own questions and challenges. Top performers will earn ranks, enhancing your coding skills.</p>
        <button>Try It</button>
        </div>
    </div>
    <div className="landing-container" style={{ minHeight:"800px" ,alignItems:"center"}}>
        <div className="landining-text">
            <p className='landing-headline' style={{  margin:"0"}}>AI Challenge</p>
            <p className='landing-normal' style={{width:"500px",  color:"black" }}>try our AI Challenge, which customizes exercises based on your skills and experience to help you grow even faster.</p>
        <button>Try It</button>
        </div>
        <div className="computer-image-container" style={{display:"flex" , justifyContent:"space-between" , flexDirection:"column", }}>
        <Image src={AI} alt='AI photo' width={512}/>
             
        </div>
    </div>
    <Footer />
    {isSignupVisible && (
        <div className="popup-overlay">
          <div className="popup-content">
            <Signup closeSignup={closeSignup} />
          </div>
        </div>
      )}
    </section>
    // </motion.div>
  )
}

export default Home