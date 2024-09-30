'use client'
import React from 'react'
import monthStar from "@/public/party.png"
import { url } from 'inspector'
import Image from 'next/image'
import { Poppins } from "@next/font/google";
import Avatar from '@/public/Avatar.png'
import Footer from '@/components/footer';
import { motion } from "framer-motion";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
  });

  const pageVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };
  

const rank = () => {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
    <section className={poppins.className}>
    <div className="monthStar-container" style={{backgroundImage: `url(${monthStar.src})` , backgroundSize: '100% 100%',  backgroundRepeat: 'no-repeat',width: '100%',  backgroundPosition: 'center',}}>
        <div style={{display:"flex" , flexDirection:"column"}}>
    <div className="gold" style={{ backgroundColor: "#FFBF00" , marginBottom:"10px"}} >
          <Image
            src={Avatar}
            alt="Placeholder"
            width={185}
            height={185}
            style={{ marginTop: "36px", marginBottom: "24px" }}
          />
          <div
            className={poppins.className}
            style={{ fontSize: "30px", color: "white", marginBottom: "5px" }}
          >
            Ahmed Yousef
          </div>
          <div
            className={poppins.className}
            style={{ fontSize: "26px", color: "white" }}
          >
            Score : 3455
          </div>
        </div>
    <p style={{textAlign:"center" , color:"#ffffff" , fontSize:"40px"}}>Star of the Month</p>
    </div>
    </div>
    <div className="head">Top Coders</div>
    <div className="rank-table">
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='head-col-1' >Rank</p>
        <p className='head-col-2'>Name</p>
        <p className='head-col-3'>Country</p>
        <p className='head-col-3'>City</p>
        <p className='head-col-4'>Score</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>1</p>
        <p className='col-2'>Ahmed Yousef Kamal</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Alexandria</p>
        <p className='col-4'>5000</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>2</p>
        <p className='col-2'>Mahmoud Nassar</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Damietta</p>
        <p className='col-4'>4120</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>3</p>
        <p className='col-2'>Yossef Ghozal</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Damietta</p>
        <p className='col-4'>4085</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>4</p>
        <p className='col-2'>Abd ElRahman Mansour</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Sohag</p>
        <p className='col-4'>3060</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>5</p>
        <p className='col-2'>Ahmed Mohamed</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Alexandria</p>
        <p className='col-4'>3030
</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>6</p>
        <p className='col-2'>Ahmed Mohamed</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Alexandria</p>
        <p className='col-4'>3030
</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>7</p>
        <p className='col-2'>Ahmed Mohamed</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Alexandria</p>
        <p className='col-4'>3030
</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>8</p>
        <p className='col-2'>Ahmed Mohamed</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Alexandria</p>
        <p className='col-4'>3030
</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>9</p>
        <p className='col-2'>Ahmed Mohamed</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Alexandria</p>
        <p className='col-4'>3030
</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>
      <div className="rank-row" style={{marginBottom:"10px"}}>
        <p className='col-1'>10</p>
        <p className='col-2'>Ahmed Mohamed</p>
        <p className='col-3'>Egypt</p>
        <p className='col-3'>Alexandria</p>
        <p className='col-4'>3030
</p>
      </div>
      <div className="v2" style={{marginTop:"0", borderColor:"grey" , marginBottom:"10px"}}></div>

    </div>
    <Footer />
    </section>
    </motion.div>
  )
}

export default rank