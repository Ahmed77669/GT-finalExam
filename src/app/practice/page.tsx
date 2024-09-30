import React from 'react'
import { Poppins } from "@next/font/google";
import { StarBorder } from '@mui/icons-material';
import Link from 'next/link';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
const practice = () => {
  return (
    <section className={poppins.className}>
    <div className={`head ${poppins.className}`} style={{ fontWeight: '400', marginBottom: '80px', color: '#006565' }}>
    Core courses
  </div>
  <div style={{display:"flex", justifyContent:"space-evenly"}}>
  <div className="practice-container">
    <Link href={'/lessons'}>
    <div style={{marginBottom:"30px"}}>
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div style={{display:"flex", justifyContent:"space-around", width:"400px", alignItems:"center", marginBottom:"5px"}}>
      <div>
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      </div>
      <div className='lessons-num' >
        <p style={{color:"white" ,fontSize:"30px" }}>65</p>
      </div>
    </div>
    <div style={{border:"1px solid #006565" , width:"400px",height:"80px" , borderRadius:"30px", display:"flex" ,alignItems:"center"}}>
      <div style={{width:"20%" ,height:"100%" , backgroundColor:"#006565", borderRadius:"30px", display:"flex" ,justifyContent:"center",alignItems:"center" , marginRight:"10px"}}>
      <p style={{color:"white" ,fontSize:"30px" }}>65%</p>
      </div>
      <p style={{fontSize:"35px" ,color:"#006565"}}>C Programming</p>
    </div>
    </div>
    </div>
    </Link>
    <Link href={'/lessons'}>
    <div style={{marginBottom:"30px"}}>
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div style={{display:"flex", justifyContent:"space-around", width:"400px", alignItems:"center", marginBottom:"5px"}}>
      <div>
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      </div>
      <div className='lessons-num' >
        <p style={{color:"white" ,fontSize:"30px" }}>15</p>
      </div>
    </div>
    <div style={{border:"1px solid #006565" , width:"400px",height:"80px" , borderRadius:"30px", display:"flex" ,alignItems:"center"}}>
      <div style={{width:"20%" ,height:"100%" , backgroundColor:"#006565", borderRadius:"30px", display:"flex" ,justifyContent:"center",alignItems:"center" , marginRight:"10px"}}>
      <p style={{color:"white" ,fontSize:"30px" }}>10%</p>
      </div>
      <p style={{fontSize:"35px" ,color:"#006565"}}>Data Structure</p>
    </div>
    </div>
    </div>
    </Link>
    <Link href={'/lessons'}>
    <div>
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div style={{display:"flex", justifyContent:"space-around", width:"400px", alignItems:"center", marginBottom:"5px"}}>
      <div>
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      </div>
      <div className='lessons-num' >
        <p style={{color:"white" ,fontSize:"30px" }}>15</p>
      </div>
    </div>
    <div style={{border:"1px solid #006565" , width:"400px",height:"80px" , borderRadius:"30px", display:"flex" ,alignItems:"center"}}>
      <div style={{width:"20%" ,height:"100%" , backgroundColor:"#006565", borderRadius:"30px", display:"flex" ,justifyContent:"center",alignItems:"center" , marginRight:"10px"}}>
      <p style={{color:"white" ,fontSize:"30px" }}>10%</p>
      </div>
      <p style={{fontSize:"35px" ,color:"#006565"}}>OOP</p>
    </div>

    </div>
    </div>
    </Link>
    </div>
  <div className="practice-container">
  <Link href={'/lessons'}>
    <div style={{marginBottom:"30px"}}>
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div style={{display:"flex", justifyContent:"space-around", width:"400px", alignItems:"center", marginBottom:"5px"}}>
      <div>
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      </div>
      <div className='lessons-num' >
        <p style={{color:"white" ,fontSize:"30px" }}>65</p>
      </div>
    </div>
    <div style={{border:"1px solid #006565" , width:"400px",height:"80px" , borderRadius:"30px", display:"flex" ,alignItems:"center"}}>
      <div style={{width:"20%" ,height:"100%" , backgroundColor:"#006565", borderRadius:"30px", display:"flex" ,justifyContent:"center",alignItems:"center" , marginRight:"10px"}}>
      <p style={{color:"white" ,fontSize:"30px" }}>65%</p>
      </div>
      <p style={{fontSize:"35px" ,color:"#006565"}}>C Programming</p>
    </div>
    </div>
    </div>
    </Link>
    <Link href={'/lessons'}>
    <div style={{marginBottom:"30px"}}>
    <div style={{display:"flex" , flexDirection:"column"}}>
    <div style={{display:"flex", justifyContent:"space-around", width:"400px", alignItems:"center", marginBottom:"5px"}}>
      <div>
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      <StarBorder style={{ fontSize: 30, color: '#006565', marginRight: "10px" }} />
      </div>
      <div className='lessons-num' >
        <p style={{color:"white" ,fontSize:"30px" }}>15</p>
      </div>
    </div>
    <div style={{border:"1px solid #006565" , width:"400px",height:"80px" , borderRadius:"30px", display:"flex" ,alignItems:"center"}}>
      <div style={{width:"20%" ,height:"100%" , backgroundColor:"#006565", borderRadius:"30px", display:"flex" ,justifyContent:"center",alignItems:"center" , marginRight:"10px"}}>
      <p style={{color:"white" ,fontSize:"30px" }}>10%</p>
      </div>
      <p style={{fontSize:"35px" ,color:"#006565"}}>Data Structure</p>
    </div>
    </div>
    </div>
    
</Link>
    <div>



    
    </div>
    </div>
  </div>
  </section>
  )
}

export default practice