import { Canvas } from "@react-three/fiber";

import Room from "./Room";
import { Suspense } from "react";
import Loading from "./Loading";
const Model = () => {
return (
      <Canvas shadows orthographic frameloop="demand" camera={{zoom:100, position: [-30, 40, -33] }} border={0} gl={{antialias:true}}>
      <color attach="background" args={['#7580AB']} />
      <Suspense fallback={<Loading/>}>
          <Room/>
      </Suspense>
    </Canvas>
  );
}
 
export default Model;