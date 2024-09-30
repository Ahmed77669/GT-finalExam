'use client'
import React from 'react';
import { Poppins } from "next/font/google";
import { CloseRounded } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import google from '@/public/google.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});


const login= () =>  {  // Accept closeSignup as a prop
  const route = useRouter()
  return (
    <section className={poppins.className}>
      <div className="register-container">
        <div className="register">
          <div className="signup-container">
            <div className="quarter-circle">
              <div className="welcome">Welcome Back</div>
            </div>
            <div className="signup-text">
              <p style={{ textAlign: "center", marginBottom: "40px" }}>Log In</p>
              <form style={{ display: 'flex', flexDirection: "column", alignItems: "center" }}>
                <input type="email" className='text-field' placeholder='Email' />
                <input type="password" className='text-field' placeholder='Password' />
                <button className='signup-pop' type="submit" onClick={() => {route.push('/')}}>Sign Up</button>
              </form>
              <div className="or" style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                <hr style={{ flex: 1, height: "1px", backgroundColor: "gray", border: "none" }} />
                <p style={{ margin: "0 10px", fontSize: "18px" }}>or</p>
                <hr style={{ flex: 1, height: "1px", backgroundColor: "gray", border: "none" }} />
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <button className='google-button'>
                  <div style={{ display: "flex", justifyContent: "space-evenly" }}>
                    <Image src={google} alt="google icon" width={45} />
                    <div style={{ textAlign: "center", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      Log In with Google
                    </div>
                  </div>
                </button>
              </div>
              <div style={{ textAlign: "center", marginTop: "15px" }}>
                <p style={{ fontSize: "16px" , marginBottom:"20px" }}>Have already an account? <span style={{ color: "#008080" }}>click here </span></p>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <IconButton aria-label="close" style={{ width: "auto", margin: "20px" }}> 
                <CloseRounded style={{ color: "white", fontSize: "50px" }} />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default login;