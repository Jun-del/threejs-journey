// App.js
import { useThree, extend, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import CustomObject from "./CustomObject.js";

extend({ OrbitControls }); // extend adds OrbitControls to the list of available controls in react-three-fiber

/*
useFrame is a hook that runs on every frame of the canvas. It receives a callback function that will be called on every frame. 
The callback receives the state of the canvas as an argument. This is useful for performing side effects in your scene, 
like moving objects around or updating the camera.
 */
// useRef is a hook that returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).

export default function Experience() {
  const { camera, gl } = useThree(); // useThree returns the state of the canvas
  const cubeRef = useRef();
  const groupRef = useRef();

  useFrame((state, delta) => {
    const angle = state.clock.elapsedTime;
    state.camera.position.x = Math.sin(angle) * 8;
    state.camera.position.z = Math.cos(angle) * 8;
    state.camera.lookAt(0, 0, 0);

    cubeRef.current.rotation.y += delta;
    // groupRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* <orbitControls args={[camera, gl.domElement]} /> */}

      <directionalLight position={[1, 2, 3]} />
      <ambientLight intensity={0.25} />

      <group ref={groupRef}>
        <mesh position-x={-2}>
          {/* arguements: radius, width, height */}
          {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
          <sphereGeometry />
          <meshStandardMaterial
            color="orange"
            wireframe={false}
            intensity={1.5}
          />
        </mesh>

        <mesh
          ref={cubeRef}
          rotation-y={Math.PI * 0.25}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry scale={1.5} />
          <meshStandardMaterial color="mediumpurple" wireframe={false} />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>

      <CustomObject />
    </>
  );
}
