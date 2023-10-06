import { Box, OrbitControls, OrthographicCamera, PerspectiveCamera, Plane, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';

import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

import * as THREE from 'three'

const Room = () => {
  const gltf = useGLTF('/final_room.glb')
  const room= useRef(null)
  const three = useThree()
  const tl = gsap.timeline();
  const [zoomLevel,setZoomLevele]=useState(0.12)
  useLayoutEffect(()=>{
    new ScrollTrigger({});
    tl.to(three.scene.position,{
        x:-4,
        y:-0.5,
        z:4,
        scrollTrigger:{
            trigger:'.section-2',
            start:'top bottom',
            end:'top top',
            scrub:true,
            immediateRender:false,
            onUpdate: trigger =>{
                setZoomLevele(trigger.progress * (0.08-0.12) + 0.12)
            }
        }
    }).to(
        three.scene.position,{
            x:-12.5,
            y:-3,
            z:0,
            scrollTrigger:{
                trigger:'.section-3',
                start:'top bottom',
                end:'top top',
                scrub:true,
                immediateRender:false,
            }
        }).to(
            three.scene.rotation,{
                x:THREE.MathUtils.degToRad(0),
                y:THREE.MathUtils.degToRad(-47.5),
                z:THREE.MathUtils.degToRad(-40),
                scrollTrigger:{
                    trigger:'.section-3',
                    start:'top bottom',
                    end:'top top',
                    scrub:true,
                    immediateRender:false,
                    onUpdate: trigger =>{
                        setZoomLevele(trigger.progress * (0.5-0.06) + 0.06)
                    }
                }
            }
        )},[])
         
return (
    <Suspense fallback={null}>
            <gridHelper args={[10]}/>
            <axesHelper args={[10]}/>
        <group dispose={null}>
        <mesh  position={[0.5,-1,1]}>
            <ambientLight intensity={1}/>
            <pointLight position={[-3 , 7 ,-3]} intensity={60} distance={100} castShadow/>
            <primitive object={gltf.scene} shadows scale={zoomLevel} ref={room} castShadow/>
        </mesh>
        <mesh position={[0,-0.3,0]} rotation={[THREE.MathUtils.degToRad(90),THREE.MathUtils.degToRad(180),THREE.MathUtils.degToRad(90)]} receiveShadow>
            <Plane args={[100,100]}>
                <meshBasicMaterial/>
            </Plane>
        </mesh>
        </group>
            <OrbitControls/>
      </Suspense>
  );
}
 
export default Room;

