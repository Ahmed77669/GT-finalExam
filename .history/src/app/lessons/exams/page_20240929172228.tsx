'use client'
import React from 'react'
import { Poppins } from "@next/font/google";
import Image from 'next/image';
import heart from "@/public/Vector.png"
import clock from "@/public/clock.png"
import { useState, useEffect } from 'react';
import Footer from '@/components/footer';
import questions from '@/app/dummy-data/questions';
import { useRouter } from 'next/navigation';
// import { Router, useRouter } from 'next/router';
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const exams = () => {
  const router = useRouter();
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);

    return () => clearInterval(interval); 
  }, []);
  // const router = useRouter();
  // const route =  (page) => {
  //   router.push(page);
  // }
  const [time, setTime] = useState(30); 
  const [questionIndex, setQuestionIndex] = useState(0);
  const [results,setResults] = useState(0);
  const currentQuestion = questions[questionIndex];
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);
  const typingSpeed = 10; 
  const [prevQuestion, setPrevQuestion] = useState(''); 
  
  useEffect(() => {
    if (currentQuestion && currentQuestion.options) {
      if (prevQuestion !== currentQuestion.question) {
        setDisplayedText('');
        setIndex(0);
        setPrevQuestion(currentQuestion.question); 
      }
      
      if (index < currentQuestion.question.length) {
        const timeout = setTimeout(() => {
          setDisplayedText((prev) => prev + currentQuestion.question.charAt(index));
          setIndex((prev) => prev + 1);
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      }
    }
  }, [index, currentQuestion, prevQuestion]);
  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      
      if (currentQuestion == null){
        navigateToPage2();
        
      }
      return () => clearInterval(timer);
    }
    else {
      setQuestionIndex (questionIndex+1);
      setTime(30);
    }
  }, [time]);
  const navigateToPage2 = () => {
    localStorage.setItem('myData', String(results));
    localStorage.setItem('myTime', String(seconds));
    router.push('/exams-languages/exams-level/exams/result');
  };
  return (
    <section className={poppins.className}>
        <div className={`head ${poppins.className}`} style={{ fontWeight: "400", marginBottom: "20px", color: "#006565",fontSize:"58px" }}>Exam 1</div>
        <div className='exams-container'>
        <div className="heartAttemps">
            <Image src={clock} alt='heart image' width={40}/>
            <p style={{fontSize:"26px", marginLeft:"10px",  color: time < 11 ? "red" : "black"}}>{time}</p>
        </div>
        <div className="heartAttemps">
            <Image src={heart} alt='heart image' width={40}/>
            <p style={{fontSize:"26px", marginLeft:"10px"}}>65</p>
        </div>
        </div>
        <div className="exams-content">
            <div className="console">
                <pre style={{color:"#4ADE80"}}>
                  {
                    currentQuestion && currentQuestion.options?
                    displayedText :null
                  }
                </pre>
            </div>
            <div className="question">
                <div className="questionContainer">
                  {
                    currentQuestion && currentQuestion.id?
                  <div style={{textAlign:"center", fontSize:"33px", color:"#006565",marginTop:"15px"}}>Question {currentQuestion.id}</div>:null
}
                  <div style={{textAlign:"start", fontSize:"20px", color:"#000000",marginTop:"25px", marginLeft:"10px"}}>The output will be :</div>
                  <div style={{display:"flex", flexDirection:"column", justifyContent:"space-around",alignItems:"center",height:"70%"}}>
                    
                  {
                    currentQuestion && currentQuestion.options?
                  currentQuestion.options.map((option, index) => (
                <button key={index} style={{width: "80%"}} onClick={() =>
                 
                {
                  setTime(30);
                  if(option == currentQuestion.answer){
                    setResults(results+1)
                  }
                  setQuestionIndex(questionIndex+1)
                  console.log(results);

                  }}>
                  {option}
                </button>
              )):null
              
              }
                  </div>
                </div>
            </div>
        </div>
       
        <Footer />
    </section>
  )
}

export default exams