import Lottie from "lottie-web"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"

type Props = {
   setIntroAnimationFinished: Dispatch<SetStateAction<boolean>>
}

const container = `fixed flex h-screen items-center justify-center left-0 top-0 w-screen`
const animation = `max-w-[400px] w-1/2`

export default function IntroAnimation(props: Props){
   const animationRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if(!animationRef.current) return

      const animationObj = Lottie.loadAnimation({
         autoplay: true,
         container: animationRef.current,
         loop: false,
         path: "/animations/IntroAnimation.json",
         renderer: "svg"
      })

      animationObj.addEventListener("complete", () => {
         animationObj.destroy()
         props.setIntroAnimationFinished(true)
      })

      return () => animationObj.destroy()
   }, [])

   return (
      <section className={container}>
         <div className={animation} ref={animationRef} />
      </section>
   )
}