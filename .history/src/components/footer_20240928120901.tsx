import React from 'react';
import Image from "next/image";
import footerLogo from "@/public/footer-logo.png";
import { Inter } from "next/font/google";
import { faFacebookF, faInstagram, faLinkedinIn, faTiktok } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  linkdin  from "@/public/linkdin.png";
import  facebook  from "@/public/Facebook.png";
import  instagram  from "@/public/Instagram.png";
import  twitter  from "@/public/Twitter.png";
import Link from 'next/link';
import { motion } from 'framer-motion';

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};
const Footer = () => {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
    <section className={inter.className}>
      <div className="footer-container">
        <div className="footer-content">
          <div>
            <div className="footer-logoContainer">
              <Image src={footerLogo} alt='Gammal Tech Logo' width={152} />
            </div>
            <div className="footer-descriptionContainer">
              We are an online educational platform that capitalizes on human potential by assisting professionals and aspiring individuals to succeed in their goals.
            </div>
          </div>
          
          <div className="footer-links">
            <p style={{ color: "white" ,fontWeight:"600"}}>1. Featured links</p>
            <div className="fLinks">
              <div className="first-columnLinks">
                <p className='columnLink'>Home</p>
                <p className='columnLink'>About</p>
                <p className='columnLink'>Pricing</p>
              </div>
              <div className="second-columnLinks">
                <p className='columnLink'>Contact</p>
                <p className='columnLink'>Terms</p>
                <p className='columnLink'>Privacy Policy</p>
              </div>
            </div>
          </div>
          
          <div>
            <p style={{ color: "white", marginBottom:"30px" ,fontWeight:"600"}}>2. Connect with us</p>
            <div className="social-media">
              <Link href="https://www.facebook.com/gammal.tech/?locale=ar_AR" passHref target='_blank'>
              <div className="social-mediaLink">
              <Image src={facebook} alt='Gammal Tech Logo' />
        
              </div>
              </Link>
              <Link href="https://www.instagram.com/gammal.tech/?hl=ar" passHref target='_blank'>
              <div className="social-mediaLink">
              <Image src={instagram} alt='Gammal Tech Logo' />

              </div>
              </Link>
              <Link href="https://www.linkedin.com/company/gammal-tech/" passHref target='_blank'>
              <div className="social-mediaLink">
              <Image src={linkdin} alt='Gammal Tech Logo' />

              </div>
              </Link>
              <Link href="https://x.com/gammaltech?lang=ar" passHref target='_blank'>
              <div className="social-mediaLink">
              <Image src={twitter} alt='Gammal Tech Logo' />

              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </motion.div>
  );
};

export default Footer;


