import { Float, Scroll, ScrollControls } from "@react-three/drei"
import Letters from "./meshes/Letters"
import SphereAndPath from "./meshes/SphereAndPath/SphereAndPath"
import { useState } from "react";
import { animationsDelays } from "../common/globalConstants";

export default function CanvasContent() {
   const [canAppear,setCanAppear] = useState(false)

   setTimeout(()=>{
      setCanAppear(true)
   }, animationsDelays.canvasAppear)

   return (
      <>
      {canAppear ? 

      <ScrollControls pages={10}>
         <Scroll>
            <Float floatIntensity={1.4} floatingRange={[-0.5, 0.5]} rotationIntensity={0.3} speed={2}>
               <Letters scale={40}/>
            </Float>

            <SphereAndPath rotation={[1.27, 0, 0]}/>
         </Scroll>
      </ScrollControls>

      :

      <></>
      }
      
      </>
   )
}