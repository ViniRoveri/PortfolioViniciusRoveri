import { RiArrowDownLongLine } from "@remixicon/react"
import gsap from "gsap"
import { useEffect, useRef, useState } from "react"

type Props = {
   introAnimationFinished: boolean
}

const container = `bottom-[3rem] duration-[1s] fixed flex gap-1 items-center justify-center left-1/2 py-2 -translate-x-1/2 -z-10`
const icon = `fill-vr-orange h-[40px]`
const text = `text-[18px] !text-vr-orange`

export default function ScrollToStart(props: Props) {
   const iconRef = useRef<SVGSVGElement>(null)

   const [showContainer, setShowContainer] = useState(false)

   useEffect(() => {
      if(!iconRef.current) return
      
      gsap.fromTo(iconRef.current, {
         y: -6
      }, {
         duration: 2,
         repeat: -1,
         y: 6,
         yoyo: true,
         yoyoEase: "power1.out"
      })
   }, [])

   useEffect(() => {
      if (!props.introAnimationFinished) return

      setTimeout(() => {
         setShowContainer(true)
      }, 5000)
   }, [props.introAnimationFinished])

   return (
      <div className={container} style={{ opacity: showContainer ? 1 : 0 }}>
         <RiArrowDownLongLine className={icon} ref={iconRef} />
         
         <p className={text}>
            Scroll to start
         </p>
      </div>
   )
}