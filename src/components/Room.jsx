import { Box, Circle, OrbitControls, OrthographicCamera, PerspectiveCamera, Plane, useGLTF } from "@react-three/drei";
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
    const [floorRadius,setFloorRadius] = useState(0.7)
  const three = useThree()
    console.log(three)
  const tl = gsap.timeline();
  const [zoomLevel,setZoomLevele]=useState(0.12)
  useLayoutEffect(()=>{
    new ScrollTrigger({});
    tl.to(three.scene.position,{
        x:-3.5,
        z:3.5,
        scrollTrigger:{
            trigger:'.section-2',
            start:'top bottom',
            end:'top top',
            scrub:true,
            immediateRender:false,
            onUpdate: trigger =>{
                setZoomLevele(trigger.progress * (0.10-0.12) + 0.12)
                setFloorRadius(trigger.progress * (20-0.7) + 0.7)
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
                setZoomLevele(trigger.progress * (0.35-0.12) + 0.12)
                setFloorRadius(trigger.progress * (0-20) + 20)
                }
            }
        })},[])
         
return (
    <Suspense fallback={null}>
            <mesh  position={[-0.6,-0.7,-0.3]} >
                <primitive object={gltf.scene} shadows scale={zoomLevel}/>
            </mesh>
            <mesh position={[-0.5,-0.3,-1]}>
                <Circle rotation={[THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} args={[floorRadius]} >
                    <meshBasicMaterial color={'yellow'}/>
                </Circle>
            </mesh>
      </Suspense>
  );
}
 
export default Room;

