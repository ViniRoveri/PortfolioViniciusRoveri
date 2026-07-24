import { Float, Scroll, ScrollControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import Letters from "./meshes/Letters"
import SphereAndPath from "./meshes/SphereAndPath"
import ScrollSection from "@/domain/types/ScrollSection"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import * as THREE from "three"
import gsap from "gsap"

type Props = {
   introAnimationFinished: boolean
   scrollSection: ScrollSection
   setScrollSection: Dispatch<SetStateAction<ScrollSection>>
}

export default function Meshes(props: Props){
   const lettersAndSphereRef = useRef<THREE.Group>(null)

   useEffect(() => {
      if (!lettersAndSphereRef.current || !props.introAnimationFinished) return

      gsap.to(lettersAndSphereRef.current.position, {
         duration: 5,
         ease: 'elastic.out(0.4, 0.5)',
         y: 0
      })
   }, [props.introAnimationFinished])

   return (
      <Canvas camera={{
         position: [0, 0, 300]
      }}>
         {/* LEFT */}
         <pointLight intensity={10000} position={[-200, 0, 100]} />
         {/* RIGHT */}
         <pointLight intensity={10000} position={[200, 0, 100]} />
         {/* BACK */}
         <pointLight intensity={10000} position={[0, 50, -100]} />
         {/* FRONT */}
         <pointLight intensity={400000} position={[0, 150, 500]} />

         <ScrollControls pages={props.introAnimationFinished ? 10 : 0}>
            <Scroll>
               <group position={[0, 1000, 0]} ref={lettersAndSphereRef}>
                  <Float floatIntensity={1.4} floatingRange={[-0.5, 0.5]} rotationIntensity={0.3} speed={2}>
                     <Letters/>
                  </Float>

                  <SphereAndPath introAnimationFinished={props.introAnimationFinished} scrollSection={props.scrollSection} setScrollSection={props.setScrollSection} />
               </group>
            </Scroll>
         </ScrollControls>
      </Canvas>
   )
}