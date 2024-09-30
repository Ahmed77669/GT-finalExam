"use client";
import React from "react";
import GT_logo from "@/public/Component 6.png";
import notifications from "@/public/icon (1).png";
import message from "@/public/icon (2).png";
import Link from "next/link";
import { Inter } from "@next/font/google";
import Image from "next/image";
import Avatar from "@/public/Avatar.png";
import { useRouter } from "next/navigation";
import { Url } from "next/dist/shared/lib/router/router";
import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const NavBarHome = () => {
    const router = useRouter()
    const route  = (page: string)=>{
        router.push(page)
    }
  return (
    
    <div className={`main-nav ${inter.className}`}>
      <nav>
        <ul>
          <div className="logo-container">
            <Link href="/">
            <Image src={GT_logo} alt="Gammal Tech Logo" width={152} style={{cursor:"pointer"}}/>
            </Link>
          </div>
          <div className={`Link-container ${inter.className}`}>
            <Link href="/" className="link">
              Home
            </Link>
            <Link href="/pricing" className="link">
              Pricing
            </Link>
            <Link href="/" className="link">
              Contests
            </Link>
            <Link href="/" className="link">
              AI Challenge
            </Link>
            <Link href="/" className="link">
              Rank
            </Link>
            <Link href="/" className="link">
              About Us
            </Link>
          </div>
          <div className="nav-info">
            {/* <div className="vl"></div> */}
            <div>
                <button onClick={() =>route('/')}>GET STARTED</button>
            </div>
          </div>
        </ul>
      </nav>
    </div>
    
  );
};

export default NavBarHome;
