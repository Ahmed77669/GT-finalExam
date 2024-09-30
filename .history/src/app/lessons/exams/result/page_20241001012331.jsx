'use client';
import { Poppins } from "next/font/google";
import { useState, useEffect } from 'react';
import React from 'react';
import Star from '@mui/icons-material/Star';
import Footer from '@/components/footer';
import { useRouter } from 'next/navigation';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};


const CircularProgressWithLabel = ({ percentage, color, sign, seconds , percentageText}) => {
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
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
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
        strokeLinecap="round" // Make the ends of the stroke rounded
      />
      {/* Text in the center */}
      <text
        x="50%"
        y="50%"
        alignmentBaseline="middle"
        textAnchor="middle"
        fontSize="40"
        fill="#000"
      >
        {Math.round(percentageText)}{sign}
      </text>
      <text
        x="50%"
        y="63%"
        alignmentBaseline="middle"
        textAnchor="middle"
        fontSize="30"
        fill="#000"
      >
        {seconds}
      </text>
    </svg>
    </motion.div>
  );
};

const ResultPage = () => {
  
  const router = useRouter();
  const [parsedResults, setParsedResults] = useState(null);
  const [result, setResult] = useState(0); 

  useEffect(() => {
    
    if (typeof window !== 'undefined') {
      const myData = localStorage.getItem('myData');
      const myTime = localStorage.getItem('myTime');

      const myNumber = myData ? parseFloat(myData) : 0;
      const seconds = myTime ? parseFloat(myTime) : 0;

      const calculatedResult = (myNumber / 3) * 100;
      setResult(calculatedResult); 
    }
  }, []); 

  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
    <section className={poppins.className}>
      <div className={`head ${poppins.className}`} style={{ fontWeight: '400', marginBottom: '50px', color: '#006565' }}>
        Result
      </div>
      <div style={{display:"flex" , justifyContent:"center", marginBottom:"70px"}}>
        {
      myNumber == 3 ?
      <><Star style={{ fontSize: 100, color: '#FFD700', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: '#FFD700', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: '#FFD700' }} /></>:
      
      myNumber == 2?  <><Star style={{ fontSize: 100, color: '#FFD700', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: '#FFD700', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: 'gray' }} /></>:

      myNumber == 1 ? <><Star style={{ fontSize: 100, color: '#FFD700', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: 'gray', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: 'gray' }} /></>:
      <><Star style={{ fontSize: 100, color: 'gray', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: 'gray', marginRight: "70px" }} /><Star style={{ fontSize: 100, color: 'gray' }} /></>
        
        }
      </div>
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'space-evenly' }}>
        
        <div style={{ marginTop: "10%" }}>
          <CircularProgressWithLabel percentage={100} color={"#E25822"} seconds={"seconds"} percentageText={seconds} sign={undefined}/>
          <p style={{ textAlign: "center", fontSize: "30px" }}>Duration</p>
        </div>
        <div>
          <CircularProgressWithLabel percentage={result} color={"#006060"} sign={"%"} percentageText={result}  seconds={undefined}/>
          <p style={{ textAlign: "center", fontSize: "30px" }}>Final Result</p>
        </div>
        <div style={{ marginTop: "10%" }}>
          <CircularProgressWithLabel percentage={0} percentageText={myNumber==3?30:0} color={undefined} sign={undefined} seconds={undefined}/>
          <p style={{ textAlign: "center", fontSize: "30px" }}>Points</p>
        </div>
      </div>
      <div style={{display:"flex" , justifyContent:"center", marginTop:"90px"}}>
        {
        myNumber!=3?
      <p style={{fontSize:"40px"}}>You must achieve 100% to move to the next stage</p> : <p style={{fontSize:"40px"}}>Congratulations You Passed the Exam</p>
        }
      </div>
      <div style={{display:"flex" , justifyContent:"center", marginTop:"40px"}}>
        {
        myNumber!=3?
        <button style={{ borderRadius: "6px", width: "161px", height: "56px" }}>Go Back</button>:<button style={{ borderRadius: "6px", width: "161px", height: "56px" }}>Next ..</button>
       
}
      </div>
      <Footer />
    </section>
    </motion.div>
  );
};

export default ResultPage;
