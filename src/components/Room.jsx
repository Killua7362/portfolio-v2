import { Box, OrbitControls, OrthographicCamera, PerspectiveCamera, Plane, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

import * as THREE from 'three'

const Room = () => {
  const gltf = useGLTF('/final_room.glb')
    gltf.scene.children.forEach((mesh, i) => {
        mesh.castShadow = true;
        mesh.receiveShadow= true;
    })
    gltf.castShadow = true;
    gltf.scene.castShadow = true;
    gltf.receiveShadow = true;
    gltf.scene.receiveShadow= true;
  const room= useRef(null)
  const three = useThree()
  const tl = gsap.timeline();
  const [zoomLevel,setZoomLevele]=useState(0.07)
  useLayoutEffect(()=>{
    new ScrollTrigger({});
    tl.to(three.scene.position,{
        x:-2,
        y:-0.5,
        z:3,
        scrollTrigger:{
            trigger:'.section-2',
            start:'top bottom',
            end:'top top',
            scrub:true,
            immediateRender:false,
            onUpdate: trigger =>{
                setZoomLevele(trigger.progress * (0.07-0.07) + 0.07)
            }
        }
    }).to(
        three.scene.position,{
            x:-12,
            y:3,
            z:-2,
            scrollTrigger:{
                trigger:'.section-3',
                start:'top bottom',
                end:'top top',
                scrub:true,
                immediateRender:false,
                onUpdate: trigger =>{
                    setZoomLevele(trigger.progress * (0.35-0.07) + 0.07)
                }
            }
        })},[])
         
return (
    <Suspense fallback={null}>
        <group dispose={null}>
            <mesh  position={[-0.2,-0.6,0]}>
            <primitive object={gltf.scene} shadows scale={zoomLevel} ref={room}/>
        </mesh>
        </group>
      </Suspense>
  );
}
 
export default Room;

