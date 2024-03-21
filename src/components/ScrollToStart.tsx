import { ArrowLongDownIcon } from "@heroicons/react/24/solid"
import { useEffect, useRef, useState } from "react"
import gsap, { Linear } from 'gsap'
import { useActiveSection } from "@/common/hooks"


const container = `bottom-4 fixed flex items-center justify-center py-2 opacity-0 w-full`
const arrow = `fill-default-orange h-[40px] translate-y-2`
const text = `text-[18px] text-default-orange`

export default function ScrollToStart(){
   const containerRef = useRef<HTMLDivElement>(null)
   const arrowRef = useRef<SVGSVGElement>(null)
   const activeSection = useActiveSection()

   const [containerIsVisible, setContainerIsVisible] = useState(true)

   useEffect(()=>{
      if(containerIsVisible){
         setTimeout(() => {
            gsap.to(containerRef.current, {
               duration: 0.5,
               ease: Linear.easeInOut,
               opacity: '100%'
            })
            
            gsap.to(arrowRef.current, {
               duration: 2,
               repeat: -1,
               translateY: -8,
               yoyo: true,
               yoyoEase: Linear.easeNone,
            })
         }, 10000)
      }
   }, [containerIsVisible])

   useEffect(()=>{
      if(!activeSection || activeSection == 'initial'){
         setContainerIsVisible(true)
      }else{
         setContainerIsVisible(false)
      }
   }, [activeSection])
   
   return (
      <>{containerIsVisible ?
         <div className={container} ref={containerRef}>
            <ArrowLongDownIcon className={arrow} ref={arrowRef}/>
            
            <p className={text}>Scroll to start</p>
         </div>
      : <></>}</>
   )
}