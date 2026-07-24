import { Dispatch, SetStateAction, useRef } from "react"
import * as THREE from "three"
import Path from "./sphereAndPath/Path"
import Sphere from "./sphereAndPath/Sphere"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "@react-three/drei"
import scrollOffsets from "@/domain/constants/scrollOffsets"
import sphereZRotations from "@/domain/constants/sphereZRotations"
import ScrollSection from "@/domain/types/ScrollSection"

type Props = {
   introAnimationFinished: boolean
   scrollSection: ScrollSection
   setScrollSection: Dispatch<SetStateAction<ScrollSection>>
}

export default function SphereAndPath(props: Props){
   const scroll = useScroll()

   const groupRef = useRef<THREE.Group>(null)

   const groupStartXRotation = 0.7
   const groupFinalXRotation = 5.5
   const groupStartYPosition = -450
   const groupFinalYPosition = 3860
   const scrollOffsetKeys = Object.keys(scrollOffsets).map(key => key as ScrollSection)
   const scrollOffsetValues = Object.values(scrollOffsets)
   const sphereZRotationValues = Object.values(sphereZRotations)

   function getGroupZRotation(): number {
      if (scroll.offset <= scrollOffsets.introduction) return 0
      if(scroll.offset >= scrollOffsets.links) return sphereZRotations.links

      let newGroupZRotation = 0
      scrollOffsetValues.forEach((currentOffset, index) => {
         if(currentOffset == 0) return

         const previousOffset = scrollOffsetValues[index - 1]

         if (scroll.offset > previousOffset && scroll.offset <= currentOffset) {
            const offsetDifference = currentOffset - previousOffset

            const previousRotation = sphereZRotationValues[index - 1]
            const rotationDifference = sphereZRotationValues[index] - previousRotation

            newGroupZRotation = previousRotation + (rotationDifference * scroll.range(previousOffset, offsetDifference))
            return
         }
      })

      return newGroupZRotation
   }

   function updateScrollSection(){   
      let updated = false

      scrollOffsetKeys.forEach((key, index) => {
         if(index === 0 || updated) return
         if(index === 1 && props.scrollSection === scrollOffsetKeys[0]) return

         const nextOffset = scrollOffsetValues[index + 1]
         
         if(
            scroll.offset >= scrollOffsets[key] 
            && (scroll.offset < nextOffset || !nextOffset) 
            && props.scrollSection !== key
         ){
            props.setScrollSection(key)
            updated = true
         }
      })
   }

   useFrame(() => {
      if(!groupRef.current) return

      groupRef.current.position.y = groupStartYPosition - (groupFinalYPosition * scroll.range(1/14, 13/14))
      groupRef.current.rotation.x = groupStartXRotation - (groupFinalXRotation * scroll.range(1/14, 13/14))
      groupRef.current.rotation.z = getGroupZRotation()

      updateScrollSection()
   })
   
   return (
      <group ref={groupRef} scale={0.8}>
         <Path/>
         <Sphere/>
      </group>
   )
}