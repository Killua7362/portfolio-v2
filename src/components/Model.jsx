import { Canvas } from "@react-three/fiber";

import Room from "./Room";
import { Suspense } from "react";
import Loading from "./Loading";
const Model = () => {
return (
      <Canvas shadows orthographic camera={{zoom:100, position: [-30, 40, -33] }} border={0}>
      <color attach="background" args={['skyblue']} />
      <Suspense fallback={<Loading/>}>
          <Room/>
      </Suspense>
    </Canvas>
  );
}
 
export default Model;