import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";
import { useRef } from "react";

const RotatingCube = () => {

  const meshRef = useRef();

  useFrame(() => {
    if(meshRef.current){
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  })

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <mesh ref={meshRef}>
      // eslint-disable-next-line react/no-unknown-property, react/no-unknown-property, react/no-unknown-property, react/no-unknown-property, react/no-unknown-property, react/no-unknown-property, react/no-unknown-property, react/no-unknown-property, react/no-unknown-property, react/no-unknown-property
      <dodecahedronGeometry args={[1,1,1]} />
      <meshLambertMaterial color="#468585" emissive="#468585" />
      <Sparkles count={500} scale={1.5} size={10} speed={1} noise={0.2}/>
    </mesh>
  )
}

const App = () => {
  return (
    <Canvas style={{ height: "100vh", width: "100vw", display: "flex",
      alignItems: "center", justifyContent: "center"
    }}>
      <OrbitControls enableZoom enableRotate enablePan />

      <directionalLight position={[1,1,1]} intensity={10} color={0x9cdba6} />

      <color attach="background" args={["#000"]} />

      <RotatingCube />
    </Canvas>
  )
}

export default App