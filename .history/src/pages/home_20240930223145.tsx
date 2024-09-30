'use client'
import Image from "next/image";
import Avatar from "@/public/Avatar.png";
import points from "@/public/GT.png"
import { Poppins } from "@next/font/google";
import heart from "@/public/Vector.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import first from "@/public/1st.png"
import second from "@/public/2nd.png"
import third from "@/public/3rd.png"
import { div } from "framer-motion/client";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});


const pageVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function Home() {
  const router = useRouter();
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
    <main className={poppins.className}>
      <div className="First">
        <div className={`head ${poppins.className}`}>Top Coders</div>
      </div>
      <div className="top-coders">
        <div className="gold" style={{ backgroundColor: "#CD7F32" }}>
          <Image
            src={Avatar}
            alt="Placeholder"
            width={185}
            height={185}
            style={{ marginTop: "36px", marginBottom: "24px" }}
          />
          <div
            className={poppins.className}
            style={{ fontSize: "30px", color: "white", marginBottom: "5px" }}
          >
            Ahmed Yousef
          </div>
          <div
            className={poppins.className}
            style={{ fontSize: "26px", color: "white" }}
          >
            Score : 3455
          </div>
          <div className="first-medal">
            <Image src={third} alt="first medal" width={120}/>
          </div>
        </div>
        <div className="gold">
          <Image
            src={Avatar}
            alt="Placeholder"
            width={185}
            height={185}
            style={{
              marginTop: "36px",
              marginBottom: "24px",
              borderRadius: "185px",
            }}
          />
          <div
            className={poppins.className}
            style={{ fontSize: "30px", color: "white", marginBottom: "5px" }}
          >
            Ahmed Yousef
          </div>
          <div
            className={poppins.className}
            style={{ fontSize: "26px", color: "white" }}
          >
            Score : 3455
          </div>
          <div className="first-medal">
            <Image src={first} alt="first medal" width={120}/>
          </div>
        </div>
        <div className="gold" style={{ backgroundColor: "#C0C0C0" }}>
          <Image
            src={Avatar}
            alt="Placeholder"
            width={185}
            height={185}
            style={{ marginTop: "36px", marginBottom: "24px" }}
          />
          <div
            className={poppins.className}
            style={{ fontSize: "30px", color: "white", marginBottom: "5px" }}
          >
            Ahmed Yousef
          </div>
          <div
            className={poppins.className}
            style={{ fontSize: "26px", color: "white" }}
          >
            Score : 3455
          </div>
          <div className="first-medal">
            <Image src={second} alt="first medal" width={120}/>
          </div>
        </div>
      </div>
      <div className="progress">
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
            src={Avatar}
            alt="Placeholder"
            width={300}
            height={300}

            style={{ marginBottom: "24px" , borderRadius:"300px"}}
          />
          <div className="profile-name">
            Ahmed Yousef
          </div>
          <div className="complete-exams">
          Complete 10 Exam to Reach Level 5
          </div>
          <div className="exam-buttons">
            
            <button className="exam-button" onClick={()=>router.push("/practice")}>Practice</button>
        
            <button className="exam-button" onClick={()=>router.push("/exams-languages")}>Exams</button>
          </div>
          </div>
          <div className="progress-level">
            <div className="progress-check">
              <p className="coder-level">Beginner</p>
            </div>
            <div className="finished-exams">
              <p className="coder-level" style={{color:"black" , fontSize:"20px"}}>Finished 30 out of 1000</p>
            </div>
            <div className="progress-check-color">
            </div>
          </div>
          </div>
        </div>
      </div>
    </main>
    </motion.div>
  );
}