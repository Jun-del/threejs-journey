// App.js
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

/*
useFrame is a hook that runs on every frame of the canvas. It receives a callback function that will be called on every frame. 
The callback receives the state of the canvas as an argument. This is useful for performing side effects in your scene, 
like moving objects around or updating the camera.
 */
// useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).

export default function Experience() {
  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    // cubeRef.current.rotation.x += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      <group ref={groupRef}>
        <mesh position-x={-2}>
          {/* arguements: radius, width, height */}
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <sphereGeometry />
          <meshBasicMaterial color="orange" wireframe={false} />
        </mesh>

        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry scale={1.5} />
          <meshBasicMaterial color="mediumpurple" wireframe={false} />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
