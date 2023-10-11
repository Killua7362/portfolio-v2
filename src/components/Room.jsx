import {  Circle, OrbitControls, PresentationControls, useGLTF, } from "@react-three/drei";
import {  useThree } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

import * as THREE from 'three'
const sizes = ()=>{
    let height = window.innerHeight
    let width= window.innerWidth
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
    const [zoomLevel,setZoomLevel]=useState(sizes()*0.03)
    const [initZoomLevel,setInitZoomLevel]=useState(0.7)
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
                        setInitZoomLevel(trigger.progress * (sizes()-0.7) + 0.7)
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
        x:window.innerHeight>window.innerWidth?window.innerHeight*0.0026:window.innerWidth*0.005,
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
            <mesh  position={[0,1.2,-2]} scale={initZoomLevel} castShadow receiveShadow ref={initBox} visible={true}>
                <boxGeometry/>
                <meshBasicMaterial attach="material-0" /> {/*right*/}
                <meshBasicMaterial attach="material-1" color={'#584E8A'}/> {/*left*/}
                <meshBasicMaterial attach="material-2" color={'#5664A6'}/> {/*top*/}
                <meshBasicMaterial attach="material-3" /> {/*bottom*/}
                <meshBasicMaterial attach="material-4" /> {/*front*/}
                <meshBasicMaterial attach="material-5" color={'#5664A6'}/> {/*back*/}
            </mesh>
            <mesh  position={[0.5,-0.5,-1.1]} visible={false} ref={room}>
                <primitive object={gltf.scene} shadows scale={zoomLevel}/>
                  <ambientLight intensity={2}/>
                  <directionalLight intensity={6} position={[1,2,4]}/>
            </mesh>
            <mesh position={[0.6,0.2,-1]} visible={true}>
                <Circle rotation={[THREE.MathUtils.degToRad(-90),THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0)]} args={[floorRadius]} >
                    <meshBasicMaterial color={'#6F6BAE'}/>
                </Circle>
            </mesh>
            </group>
            </PresentationControls>
  );
}
 
export default Room;
useGLTF.preload('/untitled.glb')
