import React from 'react';
import branding_specialist_melbourne from'../assets/projets/branding_specialist_melbourne.mp4'

function Maintenance() {
  return (
    <>
    <div className='film2'>
      <div className='gridHover'>
        <div className='gridHoverTitle'>
          <h1 style={{display:'flex', flexWrap:'wrap', justifyContent:'center' }}>SITE EN MAINTENANCE</h1>
        </div>
      </div>
      <video className='background-video2' autoPlay muted playsInline>
        <source src={branding_specialist_melbourne} alt='video of an etheral waiting room with white sofas and a luxurious vegetation' type='video/mp4'/>
      </video> 
    </div>
  </>
  )
}

export default Maintenance