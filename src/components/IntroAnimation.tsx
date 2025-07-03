import { useEffect, useRef, useState } from "react"
import IntroAnimationData from '../assets/animations/IntroAnimationData.json'
// import Lottie from "lottie-web"

const stylesContainer = `absolute h-screen items-center justify-center left-0 overflow-hidden top-0 w-screen`
const stylesAnimationDiv = `max-w-[400px] w-[40%]`

export default function IntroAnimation(){
   const animationDiv = useRef(null)
   const [containerDisplay, setContainerDisplay] = useState('flex')
	let introAnimation: any

	async function triggerLottie(){
		const Lottie = await import("lottie-web")

		if(animationDiv.current){
			introAnimation = (Lottie as any).loadAnimation({
				animationData: IntroAnimationData,
				autoplay: true,
				container: animationDiv.current,
				name: 'introAnimation',
				loop: false,
				renderer: 'svg'
			})

			introAnimation.addEventListener('complete',()=>{
				introAnimation.destroy()
				setContainerDisplay('none')
			})
		}
	}

	useEffect(() => {
		triggerLottie()
	}, [])

   return(
      <section className={stylesContainer} style={{display: containerDisplay}}>
         <div className={stylesAnimationDiv} ref={animationDiv}/>
      </section>
   )
}