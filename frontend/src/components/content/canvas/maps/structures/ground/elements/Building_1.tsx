/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Building_1.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Building_1.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";
import { useBox } from "@react-three/cannon";
import React from 'react';

type GLTFResult = GLTF & {
  nodes: {
    Building_1_Blue_0: THREE.Mesh;
    Building_1_Brown_2_0: THREE.Mesh;
    Building_1_Dark_Gray_0: THREE.Mesh;
    Building_1_Forest_Green_0: THREE.Mesh;
    Building_1_Orange_0: THREE.Mesh;
    Building_1_Yellow_2_0: THREE.Mesh;
  };
  materials: {
    Blue: THREE.MeshStandardMaterial;
    Brown_2: THREE.MeshStandardMaterial;
    Dark_Gray: THREE.MeshStandardMaterial;
    Forest_Green: THREE.MeshStandardMaterial;
    Orange: THREE.MeshStandardMaterial;
    Yellow_2: THREE.MeshStandardMaterial;
  };
};

function Building_1Component(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Building_1.glb"
  ) as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [7, 8, 2],
    mass: 0.1,
    position: props.position,
    rotation: props.rotation,
    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
  }));
  return (
    <group position={[0, 0, 0]} dispose={null}>
      <group>
        <mesh
          ref={ref}
          geometry={nodes.Building_1_Blue_0.geometry}
          material={materials.Blue}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Building_1_Brown_2_0.geometry}
          material={materials.Brown_2}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Building_1_Dark_Gray_0.geometry}
          material={materials.Dark_Gray}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Building_1_Forest_Green_0.geometry}
          material={materials.Forest_Green}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Building_1_Orange_0.geometry}
          material={materials.Orange}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Building_1_Yellow_2_0.geometry}
          material={materials.Yellow_2}
          position={props.position}
          rotation={props.rotation}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/object/Building_1.glb");

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
  return (
      prevProps.position[0] === nextProps.position[0] &&
      prevProps.position[1] === nextProps.position[1] &&
      prevProps.position[2] === nextProps.position[2]
  );
}

export const Building_1 = React.memo(Building_1Component, areEqual);