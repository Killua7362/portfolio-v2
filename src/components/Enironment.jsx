import {  RandomizedLight,Environment as EnvironmentImpl, AccumulativeShadows, Html } from "@react-three/drei";
const Env = () => {
    return (
        <>
            <directionalLight position={[5,10,5]} intensity={0.1} shadow-mapSize={124} castShadow />
            <directionalLight position={[-5, 5, 5]} intensity={0.1} shadow-mapSize={128} castShadow />
            <directionalLight position={[-5, 5, -5]} intensity={0.1} shadow-mapSize={128} castShadow />
            <directionalLight position={[0, 5, 0]} intensity={0.1} shadow-mapSize={128} castShadow />
            <AccumulativeShadows frames={100} alphaTest={0.85} opacity={0.75} scale={50} position={[-10, 0, 10]}>
              <RandomizedLight amount={2} radius={4} ambient={0.5} intensity={5} position={[5,5,5]} bias={0.001} />
            </AccumulativeShadows>
          <EnvironmentImpl preset="city" resolution={256} frames={1} /> 
        </>

      );
}
 
export default Env;