'use client'
import React from 'react'
import { Poppins } from "next/font/google";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
  });
  
const lessons = () => {
    const router = useRouter();
  return (
    <section className={poppins.className}>
            <div className={`head ${poppins.className}`} style={{ fontWeight: "400", marginBottom: "100px", color: "#006565" }}>Select the exam language</div>

        <div className="languages-container">
            <button className='programming-languages' onClick={() => router.push('/lessons/exams')}>Lesson 1</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 2</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 3</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 4</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 5</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 6</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 7</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 8</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 9</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 10</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 11</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 12</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 13</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 14</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 15</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>CLesson 16</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 17</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 18</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 19</button>
            <button className='programming-languages'onClick={() => router.push('/lessons/exams')}>Lesson 20</button>
        </div>

       <div>

        </div> 
        <Footer />
    </section>
  )
}

export default lessons