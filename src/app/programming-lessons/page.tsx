import React from 'react'
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const ProgrammingLessons = () => {
  return (
    <section className={poppins.className}>
            <div className={`head ${poppins.className}`} style={{ fontWeight: "400", marginBottom: "100px", color: "#006565" }}>C_Programming Lessons </div>

        <div className="languages-container">
            <button className='programming-languages'>Lesson 1</button>
            <button className='programming-languages'>Lesson 2</button>
            <button className='programming-languages'>Lesson 3</button>
            <button className='programming-languages'>Lesson 4</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'>Lesson 5</button>
            <button className='programming-languages'>Lesson 6</button>
            <button className='programming-languages'>Lesson 7</button>
            <button className='programming-languages'>Lesson 8</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'>Lesson 9</button>
            <button className='programming-languages'>Lesson 10</button>
            <button className='programming-languages'>Lesson 11</button>
            <button className='programming-languages'>Lesson 12</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'>Lesson 13</button>
            <button className='programming-languages'>Lesson 14</button>
            <button className='programming-languages'>Lesson 15</button>
            <button className='programming-languages'>Lesson 16</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'>Lesson 17</button>
            <button className='programming-languages'>Lesson 18</button>
            <button className='programming-languages'>Lesson 19</button>
            <button className='programming-languages'>Lesson 20</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'>Lesson 21</button>
            <button className='programming-languages'>Lesson 22</button>
            <button className='programming-languages'>Lesson 23</button>
            <button className='programming-languages'>Lesson 24</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'>Lesson 25</button>
            <button className='programming-languages'>Lesson 26</button>
            <button className='programming-languages'>Lesson 27</button>
            <button className='programming-languages'>Lesson 28</button>
        </div>
        <div className="languages-container">
            <button className='programming-languages'>Lesson 29</button>
            <button className='programming-languages'>Lesson 30</button>
            <button className='programming-languages'>Lesson 31</button>
            <button className='programming-languages'>Lesson 32</button>
        </div>

    </section>
  )
}

export default ProgrammingLessons