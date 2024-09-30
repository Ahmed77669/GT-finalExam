'use client'
import React from 'react'
import { Poppins } from "@next/font/google";
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/footer';

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700"],
  });
  
const languages = () => {
    const router = useRouter();
  return (
    <section className={poppins.className}>
            <div className={`head ${poppins.className}`} style={{ fontWeight: "400", marginBottom: "100px", color: "#006565" }}>Select the exam language</div>

        <div className="languages-container">
            <button className='programming-languages' onClick={() => router.push('/exams-languages/exams-level')}>C Programming</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>C++ Programming</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Python</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Java</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>JavaScript</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>PHP</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Dart</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>HTML</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>CSS</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Kotlin</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Ruby</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Rust</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Swift</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>TypeScript</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Go</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>C#</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>VisaulBasic</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>CoffeeScript</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Haskell</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Qiskit</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Ocean</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Cirq</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Elixir</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Verilog</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>R Programming</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>SQL</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Perl</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>A+ Programming</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Julia</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Bash</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>Pascal</button>
            <button className='programming-languages'onClick={() => router.push('/exams-languages/exams-level')}>MATLAB</button>
        </div>

       <div>

        </div> 
        <Footer />
    </section>
  )
}

export default languages