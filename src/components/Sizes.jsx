import { useEffect, useState } from "react"

const sizes = () =>{
    return{
        width:window.innerWidth,
        height:window.innerHeight,
        aspect:window.innerWidth/window.height,
        pixelRatio:Math.min( window.devicePixelRatio,2 )
    }
}
export const Sizes = () =>{
    const [dimensions,setDimensions] = useState(sizes())
    useEffect(()=>{
        const upDateDimension = ()=>{
            setDimensions(sizes())
        }

        window.addEventListener('resize',upDateDimension)

        return (()=>{
            window.removeEventListener('resize',upDateDimension)
        })

    },[dimensions])
    return(
        <div>
        </div>
    )
}