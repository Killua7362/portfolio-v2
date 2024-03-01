import {  Circle, OrbitControls, PresentationControls, useGLTF, } from "@react-three/drei";
import {  useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

import * as THREE from 'three'
const sizes = (height,width)=>{
    if(height>width){
        return height/width + 0.1
    }
    else
    {
        return (width/height) + 1
    }
}

const Room = () => {
    const three = useThree()
    const gltf = useGLTF('/untitled.glb')

    const { width, height } = useThree(state => state.viewport)

    gltf.scene.children.forEach((mesh, i) => {
        mesh.castShadow = true;
        mesh.receiveShadow= true;
    })
    gltf.castShadow = true;
    gltf.scene.castShadow = true;
    gltf.receiveShadow = true;
    gltf.scene.receiveShadow= true;
    const [ctx] = useState(gsap.context(() => {}, root));
    const [floorRadius,setFloorRadius] = useState(0.3)
    const [initZoomLevel,setInitZoomLevel]=useState(sizes(height,width)*0.2)
    const initBox = useRef(null)
    const room= useRef(null)
    useLayoutEffect(()=>{
        ctx.add(()=>{
        gsap.to(
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
                        setInitZoomLevel(trigger.progress * (sizes(height,width)-0.7) + 0.7)
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
        )
        if(window.innerWidth<1024){
        gsap.to(three.scene.position,{
            x:window.innerHeight>window.innerWidth?window.innerHeight*0.0020:window.innerWidth*0.005,
            y:window.innerHeight>window.innerWidth?-window.innerHeight*0.004:window.innerWidth*0.000,
            z:5,
            scrollTrigger:{
                trigger:'.section-3',
                start:'top bottom',
                end:'top top',
                scrub:true,
                immediateRender:false,
                onUpdate: trigger =>{
                    setFloorRadius(trigger.progress * (20-0.3) + 0.3)
                    three.invalidate()
                }
            }
            }
            )
        }
        else{
            gsap.to(three.scene.position,{
                x:window.innerHeight>window.innerWidth?window.innerHeight*0.001:-window.innerWidth*0.003,
                y:window.innerHeight>window.innerWidth?window.innerHeight*0.001:window.innerWidth*0.000,
                z:5,
                scrollTrigger:{
                    trigger:'.section-3',
                    start:'top bottom',
                    end:'top top',
                    scrub:true,
                    immediateRender:false,
                    onUpdate: trigger =>{
                        setFloorRadius(trigger.progress * (20-0.3) + 0.3)
                        three.invalidate()
                    }
                }
            }
            )
        }
        })
    return ()=>ctx.revert()

    },[initBox,room])

return (
            <PresentationControls
            snap={true}
            global={true}
            >
            <group dispose={null}>
            <mesh  position={[0.0,1.2,-2]} scale={initZoomLevel > sizes(height,width)*0.2?initZoomLevel:sizes(height,width)*0.2} castShadow receiveShadow ref={initBox} visible={true}>
                <boxGeometry/>
                <meshBasicMaterial attach="material-0" /> 
                <meshBasicMaterial attach="material-1" color={'#584E8A'}/> 
                <meshBasicMaterial attach="material-2" color={'#5664A6'}/> 
                <meshBasicMaterial attach="material-3" /> 
                <meshBasicMaterial attach="material-4" /> 
                <meshBasicMaterial attach="material-5" color={'#5664A6'}/> 
            </mesh>
            <mesh  position={[0.5,-0.5,-1.1]} visible={false} ref={room}>
                <primitive object={gltf.scene} shadows scale={sizes(height,width)*0.03}/>
                  <ambientLight intensity={2}/>
                  <directionalLight intensity={6} position={[1,2,4]}/>
            </mesh>
            <mesh position={[1.0,-0.2,-1]} visible={true}>
                <Circle rotation={[THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} args={[floorRadius]} >
                    <meshBasicMaterial color={'#333333'}/>
                </Circle>
            </mesh>
            </group>
            </PresentationControls>
  );
}
 
export default Room;
useGLTF.preload('/untitled.glb')
