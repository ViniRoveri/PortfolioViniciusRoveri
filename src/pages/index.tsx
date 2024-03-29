import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import { animationsDelays, animationsDurations } from "../common/globalConstants";
import CanvasContent from "../components/CanvasContent";
import IntroAnimation from "../components/IntroAnimation";
import LoadingScreen from "../components/LoadingScreen";
import TextboxSelector from "../components/TextboxSelector";
import ScrollToStart from "@/components/ScrollToStart";

const stylesCanvasContainer = `h-full w-full`

export default function Home() {
   const [pageLoaded,setPageLoaded] = useState(false)
   const [canvasCanAppear,setCanvasCanAppear] = useState(false)

   useEffect(()=>{
      setTimeout(()=>{
         setPageLoaded(true)     
      }, animationsDurations.pageLoad * 1000)

      setTimeout(()=>{
         setCanvasCanAppear(true)
      }, animationsDelays.canvasAppear * 1000)
   },[])

   return (
      <main>
         <>
         {!pageLoaded && 
            <LoadingScreen/>
         }

         <IntroAnimation />

         <ScrollToStart/>
         
         <section className={`${stylesCanvasContainer} ${canvasCanAppear ? '' : 'hidden'}`}>
            <Canvas camera={{
               position: [0, 0, 300]
            }}>
               <pointLight position={[-3000, 0, 1000]} intensity={1.2} />
               <pointLight position={[3000, 0, 1000]} intensity={1.2} />
               <pointLight position={[0, 3500, 0]} />
               <pointLight position={[0, 0, -3500]} />

               <CanvasContent />
            </Canvas>
            
            <TextboxSelector />
         </section>
         </>
      </main>
   )
}