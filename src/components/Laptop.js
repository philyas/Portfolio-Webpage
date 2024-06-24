import { Canvas, useFrame, extend, useThree, useLoader } from "@react-three/fiber"
import { useState, useRef, Suspense, useEffect } from "react"
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { Stars } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const path =  "./models/scene.gltf"

extend({ OrbitControls });

const Character = (props)=> {
    const characterRef = useRef()
  const gltf = useLoader(GLTFLoader, path );
   const {scene} = gltf
   scene.traverse((item)=> {
    item.castShadow = true
    item.receiveShadow = true
   })

  return (
    <mesh ref={characterRef} scale={2.1} castShadow receiveShadow  position={[0,0.01,0]}> 
      <primitive object={gltf.scene} {...props} />
    </mesh>
  );
}



// How to make a floor with react three fiber?
const Ground = ()=> {
  return(
    <mesh rotation-x={-Math.PI / 2} receiveShadow >
    <planeGeometry attach={'geometry'} args={[100, 100,100]} />
    <meshPhongMaterial attach={'material'}  color={'white'} ></meshPhongMaterial>
 </mesh>
  )
}



function CameraControls({cameraRef}) {
    const { camera, gl } = useThree();
    const controlsRef = useRef()

    useFrame((state,delta)=> controlsRef.current.update())
  
    return (
      <orbitControls  autoRotate ref={controlsRef} args={[camera, gl.domElement]} />
    );
  }


  const Laptop = ()=> {
    return(
     <Canvas  shadows camera={{near:0.1 , position:[1,0.8,0]}} >

         <Suspense fallback={null}>
                 
         <ambientLight intensity={1} />
            <directionalLight intensity={9} position={[0,1,0]} castShadow ></directionalLight>
       
            <Character></Character>
            <Ground></Ground>
            <CameraControls></CameraControls>
      </Suspense>
    </Canvas>
    )
}
  


export default Laptop