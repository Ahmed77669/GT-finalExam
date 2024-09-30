'use client'
import React from 'react';
import { Poppins } from "next/font/google";
import Footer from '@/components/footer';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const levelData = [
  { degree: 'Easy', description: 'Start your inspiration journey.', time: '50s per Question - 10 Points', backgroundColor: '' },
  { degree: 'Hard', description: 'You are ready to beat world.', time: '25s per Question - 20 Points', backgroundColor: '#F97316' },
  { degree: 'Expert', description: 'Congratulations, You made it!', time: '15s per Question - 30 Points', backgroundColor: '#3B82F6' },
  { degree: 'Super', description: 'Sorry wait, What!?', time: '10s per Question - 40 Points', backgroundColor: '#DC2626' },
];

const LevelCard = ({ degree, description, time, backgroundColor }) => (
  <Link href="/exams-languages/exams-level/exams">
  <div className={`level ${poppins.className}`} style={{ backgroundColor }}>
    <div className="level-degree">{degree}</div>
    <div className="level-description">{description}</div>
    <div className="exam-len">{time}</div>
  </div>
  </Link>
);

const ExamsLevel = () => (
  <section>
    <div className={`head ${poppins.className}`} style={{ fontWeight: "400", marginBottom: "100px", color: "#006565" }}>
      Choose Questions Level
    </div>
    <div className="levels-container">
      {levelData.map((level, index) => (
        <LevelCard key={index} {...level} />
      ))}
    </div>
    <Footer />
  </section>
);

export default ExamsLevel;
