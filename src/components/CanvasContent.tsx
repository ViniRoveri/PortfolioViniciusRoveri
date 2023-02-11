import { Float, Scroll, ScrollControls } from "@react-three/drei"
import Letters from "./meshes/Letters"
import SphereAndPath from "./meshes/SphereAndPath/SphereAndPath"

export default function CanvasContent() {
   return (
      <ScrollControls pages={10}>
         <Scroll>
            <Float floatIntensity={1.4} floatingRange={[-0.5, 0.5]} rotationIntensity={0.3} speed={2}>
               <Letters scale={40}/>
            </Float>

            <SphereAndPath rotation={[1.27, 0, 0]}/>
         </Scroll>
      </ScrollControls>
   )
}