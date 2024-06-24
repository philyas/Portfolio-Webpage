import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Laptopmodel({props}){

    const {nodes, materials} = useGLTF('./assets/iphone_14_pro_max_3d_model/iphone_14_pro_max_3d_model/scene.gltf')

    return(
        <group {...props} dispose={null}>
             <mesh geometry={nodes.Object_4.geometry} material={materials['Scene_-_Root']}>
                
             </mesh>
        </group>
    )
}