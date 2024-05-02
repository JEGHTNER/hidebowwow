/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Sofa_white.glb -t -o src/components/content/canvas/maps/player/Sofa_white.tsx 
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
    nodes: {
        Armchair_4: THREE.Mesh;
    };
    materials: {
        ['Cartoon_Room_Mat.002']: THREE.MeshStandardMaterial;
    };
    animations: any[];
};

type ContextType = Record<
    string,
    React.ForwardRefExoticComponent<JSX.IntrinsicElements['mesh']>
>;

export function Model(props: JSX.IntrinsicElements['group']) {
    const { nodes, materials } = useGLTF('/Sofa_white.glb') as GLTFResult;
    return (
        <group {...props} dispose={null}>
            <mesh
                geometry={nodes.Armchair_4.geometry}
                material={materials['Cartoon_Room_Mat.002']}
                position={[-3.843, 0, 4]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.01}
            />
        </group>
    );
}

useGLTF.preload('/Sofa_white.glb');
