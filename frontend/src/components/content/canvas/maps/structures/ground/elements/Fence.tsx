/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Fence.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Fence.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";
import { useBox } from "@react-three/cannon";
import React from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Fence_Light_Gray_0: THREE.Mesh;
  };
  materials: {
    Light_Gray: THREE.MeshStandardMaterial;
  };
};

function FenceComponent(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Fence.glb"
  ) as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [1, 9.5, 2.9],
    mass: 0.1,
    position: props.position,
    rotation: props.rotation,
    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
  }));
  return (
    <group position={[0, 0, 0]} dispose={null}>
      <mesh
        ref={ref}
        geometry={nodes.Fence_Light_Gray_0.geometry}
        material={materials.Light_Gray}
        position={props.position}
        rotation={props.rotation}
      />
    </group>
  );
}

useGLTF.preload("/models/object/Fence.glb");

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
  return (
      prevProps.position[0] === nextProps.position[0] &&
      prevProps.position[1] === nextProps.position[1] &&
      prevProps.position[2] === nextProps.position[2]
  );
}

export const Fence = React.memo(FenceComponent, areEqual);