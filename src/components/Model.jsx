import {  RandomizedLight,Environment as EnvironmentImpl, AccumulativeShadows, Html } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Room from "./Room";
import { Suspense } from "react";
const Model = () => {
return (
      <Canvas shadows orthographic camera={{zoom:100, position: [-30, 40, -33] }} border={0}>
      <color attach="background" args={['skyblue']} />
      <Suspense fallback={<Html>Loading...</Html>}>
          <Room/>
      </Suspense>
        <directionalLight position={[5,10,5]} intensity={2.5} shadow-mapSize={1024} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={0.1} shadow-mapSize={128} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={128} castShadow />
            <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={128} castShadow />
            <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.75} scale={50} position={[-10, 0, 10]}>
              <RandomizedLight amount={10} radius={4} ambient={0.5} intensity={5} position={[5,5,5]} bias={0.001} />
            </AccumulativeShadows>
          <EnvironmentImpl preset="city" resolution={256} frames={1} /> 
    </Canvas>
  );
}
 
export default Model;