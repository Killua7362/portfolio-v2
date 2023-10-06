import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const Room = () => {

  const gltf = useGLTF('/final_room.glb')
  const room= useRef(null)
  const three = useThree()
  const tl = gsap.timeline();
  const [zoomLevel,setZoomLevele]=useState(0.09)

  useLayoutEffect(()=>{
    new ScrollTrigger({});
    tl.to(three.scene.position,{
        x:1,
        y:1,
        z:1,
        scrollTrigger:{
            trigger:'.section-2',
            start:'top bottom',
            end:'top top',
            scrub:true,
            immediateRender:false,
        }
    }).to(zoomLevel,{
       scrollTrigger:{
        trigger:'.section-2',
        start:'top bottom',
        end:'top top',
        scrub:true,
        immediateRender:false,
        onUpdate: trigger =>{
            setZoomLevele(trigger.progress * -0.06 + 0.09)
        } 
       }     
        })
  },[])
return (
      <Suspense fallback={null}>
    <mesh  position={[-1,-0.8,1]}>
      <rectAreaLight position={[-1 , 5 ,3]} intensity={2} castShadow/>
        <primitive object={gltf.scene} shadows scale={zoomLevel} ref={room} />
    </mesh>
      </Suspense>
  );
}
 
export default Room;