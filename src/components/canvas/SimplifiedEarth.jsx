import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const SimplifiedEarth = () => {
  const earth = useGLTF("./uranus/scene.gltf");

  return (
    <primitive object={earth.scene} scale={0.003} position-y={0} rotation-y={0} />
  );
};

const SimplifiedEarthCanvas = () => {
  return (
    <Canvas>   
        <ambientLight intensity={1} />
        <directionalLight position={[0, 0, 0]} intensity={1} />
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <SimplifiedEarth />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SimplifiedEarthCanvas;
