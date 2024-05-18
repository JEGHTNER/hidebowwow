/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Floor_11.glb -t -o Floor_11.tsx 
*/

import * as THREE from "three";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";
import { useBox } from "@react-three/cannon";
import React from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Floor_11: THREE.Mesh;
  };
  materials: {
    Cartoon_Room_Mat: THREE.MeshStandardMaterial;
  };
};

function Floor_11Component(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Floor_11.glb"
  ) as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [12.5, 12.5, 1],
    // args: [1, 1, 1],
    mass: 0.1,
    type: "Static",
    position: props.position,
    rotation: props.rotation,
    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
  }));
  return (
    <group position={[0, 0, 0]} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.Floor_11.geometry}
        material={materials.Cartoon_Room_Mat}
        position={props.position}
        rotation={props.rotation}
        scale={0.025}
      />
    </group>
  );
}

useGLTF.preload("/models/object/Floor_11.glb");

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
  return (
    prevProps.position[0] === nextProps.position[0] &&
    prevProps.position[1] === nextProps.position[1] &&
    prevProps.position[2] === nextProps.position[2]
  );
}

export const Floor_11 = React.memo(Floor_11Component, areEqual);