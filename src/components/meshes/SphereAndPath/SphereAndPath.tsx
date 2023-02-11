import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import gsap, { Power4 } from "gsap"
import { animationsDelays, animationsDurations, sectionsScrollOffsets } from "../../../common/globalConstants";
import Path from "./Path";
import Sphere from "./Sphere";
import { useActiveSection, useSetActiveSection } from "../../../common/hooks";

export default function SphereAndPath(props: JSX.IntrinsicElements['group']){
   const scroll = useScroll()
   const activeSection = useActiveSection()
   const setActiveSection = useSetActiveSection()

   const [introIsDone,setIntroIsDone] = useState(false)
   
   const group = useRef<THREE.Group>(null)

   const offsetsKeys = Object.keys(sectionsScrollOffsets)
   const groupScale = 0.8
   const groupStartYPosition = 450
   const groupFinalYPosition = -450
   const groupFinalXRotation = 0.7

   function updateActiveSection(){      
      if(scroll.offset < sectionsScrollOffsets[offsetsKeys[0]] && activeSection !== 'initial'){
         setActiveSection('')
         return
      }
   
      offsetsKeys.forEach((key,index)=>{
         const nextOffset = sectionsScrollOffsets[offsetsKeys[index + 1]]
   
         if(scroll.offset >= sectionsScrollOffsets[key] && activeSection !== key){
            if(index === offsetsKeys.length - 1){
               setActiveSection(key)
            }else if(scroll.offset < nextOffset){
               setActiveSection(key)
            }
         }
      })
   }

   useEffect(()=>{
      if (group.current) {
			gsap.from(group.current.position, {
            delay: animationsDelays.sphereAndPath,
				duration: animationsDurations.sphereAndPath,
				ease: Power4.easeOut,
				y: groupStartYPosition
			})

         setTimeout(()=>{
            setIntroIsDone(true)
         }, animationsDurations.sphereAndPath * 1000)
		}
   },[])

   useFrame(()=>{
      if(introIsDone && group.current){
         group.current.position.y = groupFinalYPosition - (3860 * scroll.range(1/14, 13/14))
         
         group.current.rotation.x = groupFinalXRotation - (5.5 * scroll.range(1/14, 13/14))
         
         updateActiveSection()
      }
   })

   return(
      <group ref={group} {...props} position={[0,groupFinalYPosition,0]} scale={groupScale} rotation={[groupFinalXRotation,0,0]}>
         <Path/>
         <Sphere/>
      </group>
   )
}