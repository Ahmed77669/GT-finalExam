'use client'
import React, { use, useEffect, useState } from 'react'
import { Poppins } from "next/font/google";
import Image, { StaticImageData } from "next/image";
import Avatar from "@/public/Avatar.png";
import points from "@/public/GT.png"
import heart from "@/public/Vector.png";
import { useRouter } from "next/navigation";
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
  });

  interface CircularProgressWithLabelProps {
    percentage: number; 
    color?: string; 
    percentageText?: string;
  }
  
  const CircularProgressWithLabel: React.FC<CircularProgressWithLabelProps> = ({
    percentage,
    color,
    percentageText,
  }) => {
    const radius = 120; // Radius of the circle
    const strokeWidth = 30; // Stroke width
    const normalizedRadius = radius - strokeWidth * 0.5;
    const circumference = normalizedRadius * 2 * Math.PI;
    const [currentPercentage, setCurrentPercentage] = useState(0);
    
    useEffect(() => {
      const animationDuration = 2000; // Duration in milliseconds
      const stepTime = 20; // Time in milliseconds for each step
      const steps = animationDuration / stepTime; // Total number of steps
      const stepValue = percentage / steps; // Increment value for each step
  
      let currentStep = 0;
  
      const interval = setInterval(() => {
        if (currentStep < steps) {
          setCurrentPercentage((prev) => Math.min(prev + stepValue, percentage));
          currentStep++;
        } else {
          clearInterval(interval);
        }
      }, stepTime);
  
      return () => clearInterval(interval);
    }, [percentage]);
  
    const strokeDashoffset = circumference - (currentPercentage / 100) * circumference;
  
    return (
      <svg width={250} height={250}>
        {/* Background circle */}
        <circle
          stroke="#d6d6d6"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        {/* Progress circle */}
        <circle
          stroke={color}
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference + ' ' + circumference}
          strokeDashoffset={strokeDashoffset}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          strokeLinecap="round" 
        />
        {/* Text in the center */}
        <text
          x="50%"
          y="50%"
          alignmentBaseline="middle"
          textAnchor="middle"
          fontSize="50"
          fill="#000"
        >
          {percentageText}
        </text>
      </svg>
    );
  };

const profile = () => {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState<string | StaticImageData>(Avatar); 
    const [name , setName] = useState('User Name');
    const [password , setPassword] = useState('123456');
    const [email , setEmail] = useState('examaple@gmail.com');
    const [phone , setPhone] = useState('+201234567890');


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const files = event.target.files;
      if (files && files[0]) {
        const imageUrl = URL.createObjectURL(files[0]); 
        setSelectedImage(imageUrl); 
      }
    };
  return (
    <section className={poppins.className}>
              <div className="progress" style={{minHeight:"690px"}}>
        <div className="information-container">
          <div className={`Rank-info ${poppins.className}`}>
            <div className={`rank ${poppins.className}`}>
              <span style={{ marginRight: "30px" }}>Rank</span>
              <span style={{ marginRight: "8px", fontWeight: "600" }}>
                18
              </span>
              Out of 1204
            </div>
            <div className={`attemps ${poppins.className}`}>
              <div className="score">
                <div style={{display:"flex" , alignItems:"center", height:"100%"}}>
                <Image src={points} alt="points"/>
                </div>
                <div className="points" >
                  3999
                </div>
              </div>
              <div className="hearts">
                <div style={{display:"flex" , alignItems:"center", height:"100%"}}>
                <Image src={heart} alt="points" width={40}/>
                </div>
                <div className="points" >
                  300
                </div>
              </div>

            </div>
          </div>
          <div className="all-info">
          <div className="progressMap">
            <div className="map-circle1">
              <p>Beginner</p>
            </div>
            <div className="map-circle2">
              <p>Intermediate</p>
            </div>
            <div className="map-circle3">
              <p>Expert</p>
            </div>
            <div className="map-circle4">
              <p>Guru</p>
            </div>
            {/* <div className="map-road"></div> */}
            <div className="map-road1"></div>
            <div className="map-road2"></div>
            <div className="map-road3"></div>
            <div className="map-road4"></div>
            <div className="map-road5"></div>
            <div className="map-road6"></div>
            <div className="map-road7"></div>
            <div className="map-road8"></div>
            <div className="map-road9"></div>
            <div className="map-road10"></div>
            <div className="map-road11"></div>
            <div className="map-road12"></div>
            </div>
          <div className={`profile-photo ${poppins.className}`}>
          <Image
        src={selectedImage} 
        alt="Profile Avatar"
        width={300}
        height={300}
        style={{
          width:"300px",
          height:"300px",
          marginBottom: '24px',
          borderRadius: '300px',
          border: '3px solid #3B82F6',
          objectFit: "cover",
        }}
      />
          <div className="profile-name">
            {name}
          </div>
          <div className="complete-exams">
          Complete 10 Exam to Reach Level 5
          </div>
          <div style={{ position: 'relative', top: '-34%' }}>
        <input
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          id="imageInput"
          onChange={handleImageChange}
        />
        <label htmlFor="imageInput">
          <FontAwesomeIcon
            icon={faPlusCircle}
            size="2x"
            color="#3B82F6"
            style={{ cursor: 'pointer' }} 
          />
        </label>
        </div>
          </div>
          <div className="progress-level">
            <div className="progress-check">
              <p className="coder-level">Beginner</p>
            </div>
            <div className="finished-exams">
              <p className="coder-level" style={{color:"black" , fontSize:"20px"}}>Finished 30 out of 1000</p>
            </div>
            <div className="progress-check-color" style={{  top: "-29.2%"}}>
            </div>
          </div>
          </div>
        </div>
      </div>
      <div style={{marginTop:"60px" , marginLeft:"40px" , marginBottom:"100px", display:"flex"}}>
        <div>
          <p style={{fontSize:"30px" , color:"#094546" ,marginBottom:"20px"}}>Account Details</p>
          <div style={{display:"flex" , flexDirection:"column"}}>
          <label style={{color:"#007676"}}>Name</label>
          <input type="text" className='profile-inputs' value={name} />
          <label style={{color:"#007676"}} >Email</label>
          <input type="email" className='profile-inputs' value={email}/>
          <label style={{color:"#007676"}}>Phone</label>
          <input type="email" className='profile-inputs' value={email}/>
          <label style={{color:"#007676"}}>Password</label>
          <input type="password" className='profile-inputs' value={password}/>
          <div style={{display:"flex"}}>
          <button style={{display:"none" , marginRight:"10px", borderRadius:"6px"}}>Edit Information</button>
          <button style={{display:'block', marginRight:"10px", borderRadius:"6px"}}>Save Changes</button>
          <button style={{display:'block', marginRight:"10px", borderRadius:"6px"}}>Cancel</button>
          </div>
          </div>
        </div>
        <div style={{display:"flex" }}>
          <div style={{display:"flex" , alignItems:"center" , justifyContent:"center" , flexDirection:"column"}}>
            <p style={{fontSize:"70px" , color:"#094546"}}>115</p>
            <p style={{fontSize:"30px", color:"#094546"}}>Longest Streak</p>
          </div>
          <div style={{display:"flex" , justifyContent:"center" , alignItems:"center"}}>
          <div className="v3"></div>
          </div>
          <div style={{display:"flex" , justifyContent:"center" , alignItems:"center" ,  flexDirection:"column"}}>
          <CircularProgressWithLabel percentage={100} color={"#E25822"} percentageText={"5"}/>
          <p style={{fontSize:"30px", color:"#094546"}}>Current Streak</p>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </section>
  )
}

export default profile