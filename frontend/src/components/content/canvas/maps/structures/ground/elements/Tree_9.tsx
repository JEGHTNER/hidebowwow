/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Tree_9.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Tree_9.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import { ObjectSettingType } from '../../../../../../../types/GameType';

import { useBox } from '@react-three/cannon';
import React from 'react';
type GLTFResult = GLTF & {
    nodes: {
        Tree_9_Brown__0: THREE.Mesh;
        Tree_9_Gold__0: THREE.Mesh;
        Tree_9_Orange_0: THREE.Mesh;
    };
    materials: {
        Brown: THREE.MeshStandardMaterial;
        Gold: THREE.MeshStandardMaterial;
        Orange: THREE.MeshStandardMaterial;
    };
};

function Tree_9Component(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Tree_9.glb'
    ) as GLTFResult;

    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [3.2, 3.2, 10.5],

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
                    geometry={nodes.Tree_9_Brown__0.geometry}
                    material={materials.Brown}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Tree_9_Gold__0.geometry}
                    material={materials.Gold}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Tree_9_Orange_0.geometry}
                    material={materials.Orange}
                    position={props.position}
                    rotation={props.rotation}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Tree_9.glb');

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
    return (
        prevProps.position[0] === nextProps.position[0] &&
        prevProps.position[1] === nextProps.position[1] &&
        prevProps.position[2] === nextProps.position[2]
    );
}

export const Tree_9 = React.memo(Tree_9Component, areEqual);
