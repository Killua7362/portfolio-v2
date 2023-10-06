import { OrbitControls, OrthographicCamera, RandomizedLight, useAnimations, useGLTF } from "@react-three/drei";
import { Canvas,useThree } from "@react-three/fiber";
import { Suspense, useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import Room from "./Room";

const Model = () => {
return (
    <Canvas orthographic camera={{zoom:100,position:[-30,40,-33]}} gl={{ antialias: false }} shadows>
        <Room/>
    </Canvas>

  );
}
 
export default Model;