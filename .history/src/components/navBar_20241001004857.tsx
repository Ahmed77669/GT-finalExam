"use client";
import React from "react";
import GT_logo from "@/public/Component 6.png";
import notifications from "@/public/icon (1).png";
import message from "@/public/455.png";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Avatar from "@/public/Avatar.png";
import { motion } from 'framer-motion';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

const NavBar = () => {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">

    <div className="main-nav">
      <nav>
        <ul>
          <div className="logo-container">
          
            <Link href="/Home">
            <Image src={GT_logo} alt="Gammal Tech Logo" width={152} style={{cursor:"pointer"}}/>
            </Link>
            
          </div>
          <div className={`Link-container ${inter.className}`}>
            <Link href="/Home" className="link">
         
              Home
            
            </Link>
            <Link href="/pricing" className="link">
            
              Pricing
          
            </Link>
            <Link href="/contests" className="link">
              Contests
            </Link>
            <Link href="/" className="link">
              AI Challenge
            </Link>
            <Link href="/rank" className="link">
              Rank
            </Link>
            <Link href="https://www.gammal.tech/" className="link">
              About Us
            </Link>
          </div>
          <div className="nav-info">
            <div className="vl"></div>
            <div
              style={{
                width: "64",
                height: "64",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={message}
                alt="Gammal Tech Logo"
                width={25}
                height={64}
              />
            </div>
            <div
              style={{
                width: "52",
                height: "52",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={notifications}
                alt="Gammal Tech Logo"
                width={25}
                height={64}
              />
            </div>
            <div
              style={{
                width: "60",
                height: "60",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Image
                src={Avatar}
                alt="Gammal Tech Logo"
                width={60}
                height={60}
              />
            </div>
          </div>
        </ul>
      </nav>
    </div>
    </motion.div>
  );
};

export default NavBar;
