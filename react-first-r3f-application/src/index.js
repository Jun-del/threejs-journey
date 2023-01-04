import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import * as THREE from "three";
// import { CineonToneMapping } from "three";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Canvas
    // flat // no tone mapping
    dpr={[1, 2]} // device pixel ratio (1 min, 2 max)
    gl={{
      antialias: true,
      toneMapping: THREE.ACESFilmicToneMapping,
      outputEncoding: THREE.sRGBEncoding,
      alpha: true,
    }}
    camera={{ fov: 45, near: 0.1, far: 200, position: [3, 2, 6] }}
  >
    <Experience></Experience>
  </Canvas>
);
