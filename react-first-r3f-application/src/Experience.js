// App.js
export default function Experience() {
  return (
    <>
      <mesh position-x={-2}>
        {/* arguements: radius, width, height */}
        {/* <sphereGeometry args={[1.5, 32, 32]} /> */}
        <sphereGeometry />
        <meshBasicMaterial color="orange" wireframe={false} />
      </mesh>

      <mesh rotation-y={Math.PI * 0.25} position-x={2} scale={1.5}>
        <boxGeometry scale={1.5} />
        <meshBasicMaterial color="mediumpurple" wireframe={false} />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
