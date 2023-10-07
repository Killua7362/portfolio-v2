import { Box, Circle, OrbitControls, OrthographicCamera, PerspectiveCamera, Plane, useCubeTexture, useGLTF, useTexture } from "@react-three/drei";
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
  const tl = gsap.timeline();
  const [zoomLevel,setZoomLevel]=useState(0.12)
  const [initZoomLevel,setInitZoomLevel]=useState(0.7)
  const initBox = useRef(null)
  const room= useRef(null)
      useLayoutEffect(()=>{
        tl.to(
            three.scene.position,{
                x:-2,
                y:1.5,
                scrollTrigger:{
                    trigger:'.section-2',
                    start:'top bottom',
                    end:'top top',
                    scrub:true,
                    immediateRender:false,
                    onUpdate: trigger =>{
                        setInitZoomLevel(trigger.progress * (4-0.7) + 0.7)
                        if(trigger.progress >= 0.85){
                            initBox.current.visible = false                            
                            room.current.visible = true
                        }else{
                            initBox.current.visible = true
                            room.current.visible = false
                        }
                        three.invalidate()
                    }
                }
            }
        ).to(three.scene.position,{
        x:-5,
        y:-0.3,
        z:5,
        scrollTrigger:{
            trigger:'.section-3',
            start:'top bottom',
            end:'top top',
            scrub:true,
            immediateRender:false,
            onUpdate: trigger =>{
                setZoomLevel(trigger.progress * (0.10-0.12) + 0.12)
                setFloorRadius(trigger.progress * (20-0.7) + 0.7)
            }
        }
    }).to(
        three.scene.position,{
            x:-12,
            y:3,
            z:-2,
            scrollTrigger:{
                trigger:'.section-4',
                start:'top bottom',
                end:'top top',
                scrub:true,
                immediateRender:false,
                onUpdate: trigger =>{
                setZoomLevel(trigger.progress * (0.35-0.10) + 0.10)
                setFloorRadius(trigger.progress * (0-20) + 20)
                }
            }
        })
        return ()=>tl.revert()
    },[])
    const envMap = useTexture('imgs/killua.png')

return (
    <Suspense fallback={null}>
            <mesh  position={[1,0.6,-2]} scale={initZoomLevel} castShadow receiveShadow ref={initBox} visible={true}>
                <boxGeometry/>
                <meshBasicMaterial attach="material-0" /> {/*right*/}
                <meshBasicMaterial attach="material-1" color={'#FCCAFF'}/> {/*left*/}
                <meshBasicMaterial attach="material-2" color={'#D3FFD4'}/> {/*top*/}
                <meshBasicMaterial attach="material-3" /> {/*bottom*/}
                <meshBasicMaterial attach="material-4" /> {/*front*/}
                <meshBasicMaterial attach="material-5" color={'#FCCAFF'}/> {/*back*/}
            </mesh>
            <mesh  position={[0.5,-0.5,-1.1]} visible={false} ref={room}>
                <primitive object={gltf.scene} shadows scale={zoomLevel}/>
            </mesh>
            <mesh position={[-0.5,-0.3,-1]} visible={false}>
                <Circle rotation={[THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} args={[floorRadius]} >
                    <meshBasicMaterial color={'yellow'}/>
                </Circle>
            </mesh>
      </Suspense>
  );
}
 
export default Room;

