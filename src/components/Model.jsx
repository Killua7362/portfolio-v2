import { OrbitControls, OrthographicCamera, RandomizedLight, useAnimations, useGLTF,Environment as EnvironmentImpl, AccumulativeShadows, useTexture } from "@react-three/drei";
import { Canvas,useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import Room from "./Room";
const Model = () => {
return (
      <Canvas shadows orthographic camera={{zoom:100, position: [-30, 40, -33] }} border={0}>
      <color attach="background" args={['skyblue']} />
        <Room/>
        <directionalLight position={[5,10,5]} intensity={2.5} shadow-mapSize={1024} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={0.1} shadow-mapSize={128} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={128} castShadow />
            <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={128} castShadow />
            <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.75} scale={50} position={[-10, 0, 10]}>
              <RandomizedLight amount={10} radius={4} ambient={0.5} intensity={5} position={[5,5,5]} bias={0.001} />
            </AccumulativeShadows>
          <EnvironmentImpl preset="city" /> 
    </Canvas>
  );
}
 
export default Model;