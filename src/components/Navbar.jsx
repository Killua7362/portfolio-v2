import { useState } from "react";

const NavBar = () => {
  const [isHovered,setIsHovered] = useState(false)
  const [imgHovered,setImgHovered] = useState('navbar/nothovered.png')
    return ( 
        <div className='fixed w-full h-full z-20 p-4'>
          <div className='w-full h-full flex flex-col items-end'>
                <img src={imgHovered}
                 onMouseOut={(e)=>{
                  if(isHovered === false){
                    setImgHovered('navbar/nothovered.png')
                  }
                                }}
                onMouseEnter={(e)=>{
                  setImgHovered('navbar/hovered.png')
                  setIsHovered(true)
                  }}
                className='w-16 rounded-full navbar-parent z-30'/>
                <div className={`bg-text absolute top-[4px] h-40 w-56 mt-2 rounded-lg navbar-div ${isHovered?'':'hidden'}`}
                 onMouseOut={()=>{
                  setIsHovered(false)
                  setImgHovered('navbar/nothovered.png')
                }}
                 onMouseEnter={()=>{
                  setImgHovered('navbar/hovered.png')
                 }}
                  style={{transition:'opacity 0.5s'}}>
                </div>
          </div>
      </div>

     );
}
 
export default NavBar;