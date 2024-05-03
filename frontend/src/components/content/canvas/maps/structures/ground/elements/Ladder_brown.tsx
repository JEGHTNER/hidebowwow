/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Ladder_brown.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Ladder_brown.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Ladder_1: THREE.Mesh;
    };
    materials: {
        ['Cartoon_Room_Mat.002']: THREE.MeshStandardMaterial;
    };
};

export function Ladder_brown(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Ladder_brown.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [2, 4, 4],
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group position={[0, -2, 0]} dispose={null}>
            <mesh
                ref={ref}
                geometry={nodes.Ladder_1.geometry}
                material={materials['Cartoon_Room_Mat.002']}
                position={props.position}
                rotation={props.rotation}
                scale={0.025}
            />
        </group>
    );
}

useGLTF.preload('/models/object/Ladder_brown.glb');
