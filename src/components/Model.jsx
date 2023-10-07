import { OrbitControls, OrthographicCamera, RandomizedLight, useAnimations, useGLTF,Environment as EnvironmentImpl, AccumulativeShadows } from "@react-three/drei";
import { Canvas,useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import Room from "./Room";

const Model = () => {
return (
      <Canvas shadows orthographic camera={{zoom:150, position: [-30, 40, -33] }}>
      <color attach="background" args={['skyblue']} />
      <Room/>
      <directionalLight position={[5,5,5]} intensity={0.5} shadow-mapSize={1024} castShadow />
          <directionalLight position={[-5, 5, 5]} intensity={0.1} shadow-mapSize={128} castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={128} castShadow />
          <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={128} castShadow />
          <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.75} scale={30} position={[0, 0, 10]}>
            <RandomizedLight amount={8} radius={2.5} ambient={0.5} intensity={5} position={[5,5,5]} bias={0.001} />
          </AccumulativeShadows>
        <EnvironmentImpl preset="city" /> 
    </Canvas>
  );
}
 
export default Model;