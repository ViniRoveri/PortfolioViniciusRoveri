import gsap, {Back, Power4} from "gsap"
import { memo, useEffect, useRef, useState } from "react"
import { useActiveSection } from "../common/hooks"

type Props = {
   changeText: boolean
   setChangeText: React.Dispatch<React.SetStateAction<boolean>>
   children: JSX.Element
   isProject?: boolean
   projectLink?: string
   title: string
}

const stylesContainerTexts = `fixed flex h-[48vh] items-center justify-center left-1/2 top-0 -translate-x-1/2 w-[80vw]`
const stylesTextbox = `max-w-[1000px] overflow-y-auto px-3 py-3
sm:px-3.5
md:px-4
lg:px-5`
const defaultTitleStyles = `font-bold font-title overflow-hidden`
const stylesTitle = `${defaultTitleStyles} mb-2 text-[27px] text-right
sm:mb-2.5 sm:text-[36px]
md:mb-3 md:text-[45px]
lg:mb-3.5 lg:text-[54px]`
const stylesTitleIntroduction = `${defaultTitleStyles} mb-3 text-[40px] text-center
sm:mb-3.5 sm:text-[49px]
md:mb-4 md:text-[58px]
lg:text-[67px]`
const stylesTextIntroduction = `[&>*]:text-[18px] text-center
[&>*]:sm:text-[24px]
[&>*]:md:text-[30px]
[&>*]:lg:text-[36px]`
const stylesContainerBackground = `${stylesContainerTexts} !w-screen -z-10`
const stylesBackgroundAndBorder = `${stylesTextbox} bg-default-lightOrange border-default-orange rounded-lg shadow-[inset_0_0_4px_2px_rgba(0,0,0,0.3),_0_0_4px_2px_rgba(255,231,204,0.2)] max-h-[80%] !p-0`

function AnimatedTextbox(props: Props){
   const activeSection = useActiveSection()

   const containerText = useRef<HTMLDivElement>(null)
   const containerBackground = useRef<HTMLDivElement>(null)
   const background = useRef<HTMLDivElement>(null)
   const texts = useRef<HTMLDivElement>(null)
   const [textsHeight,setTextsHeights] = useState<number>(0)
   const title = useRef<HTMLHeadingElement>(null)
   const paragraph = useRef(null)

   const [backgroungBorderWidth,setBackgroundBorderWidth] = useState(4)
   const [sectionIsIntroduction,setSectionIsIntroduction] = useState(false)

   const defaultDuration = 0.4
   const defaultEase = Back.easeOut.config(1)

   function updateBackgroundBorderWidth(){
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches
      const isMediumScreen = window.matchMedia('(max-width: 1024px)').matches
      const isBigScreen = window.matchMedia('(min-width: 1025px)').matches

      if(isSmallScreen){
         setBackgroundBorderWidth(4)
      }else if(isMediumScreen){
         setBackgroundBorderWidth(6)
      }else if(isBigScreen){
         setBackgroundBorderWidth(8)
      }
   }

   useEffect(()=>{
      const timelineInitialization = gsap.timeline()

      timelineInitialization
      .to([containerText.current, containerBackground.current], {
         display: 'none',
         duration: 0
      })
      .to(background.current, {
         duration: 0,
         width: '0%',
         y: 880
      })
   },[])

   useEffect(()=>{
      if(!activeSection){
         const timelineHiding = gsap.timeline()

         timelineHiding
         .to(texts.current, {
            duration: defaultDuration,
            ease: defaultEase,
            opacity: 0,
            y: 8
         })

         .to(background.current, {
            duration: defaultDuration,
            ease: defaultEase,
            width: '0%'
         })

         .to(background.current, {
            duration: defaultDuration,
            ease: Power4.easeOut,
            y: 880
         })
         .to([containerText.current, containerBackground.current], {
            display: 'none',
            duration: 0
         })
      }else if(activeSection !== 'initial'){
         const timelineChangingOut = gsap.timeline()

         timelineChangingOut
         .to([containerText.current, containerBackground.current], {
            display: 'flex',
            duration: 0
         })
         .to([title.current, paragraph.current], {
            duration: defaultDuration,
            ease: defaultEase,
            opacity: 0,
            y: 8
         })
         
         .to(background.current, {
            duration: defaultDuration,
            ease: defaultEase,
            width: '0%'
         })
      }

      const changingOutAnimations = 2
      const changingOutTime = defaultDuration * changingOutAnimations
      const timeoutDelay = changingOutTime * 1000
      setTimeout(()=>{
         if(activeSection === 'introduction'){
            setSectionIsIntroduction(true)
         }else{
            setSectionIsIntroduction(false)
         }
      },timeoutDelay)

      props.setChangeText(!props.changeText)      
   },[activeSection])

   useEffect(()=>{
      setTimeout(() => {
         if(texts.current){
            texts.current.scrollTo(0, 0)
         }
      }, defaultDuration * 1000);

      const timelineChangingIn = gsap.timeline()

      if(activeSection && activeSection !== 'initial'){
         timelineChangingIn
         .to(texts.current, {
            duration: 0,
            opacity: 1,
            y: 0
         })

         .to(background.current, {
            duration: defaultDuration,
            ease: defaultEase,
            width: '0%',
            y: 0
         })

         .to(background.current, {
            duration: defaultDuration,
            ease: defaultEase,
            width: '80%',
         })

         .fromTo(title.current, {
            opacity: 0,
            y: 8
         }, {
            duration: defaultDuration,
            ease: defaultEase,
            opacity: 1,
            y: 0
         })

         .fromTo(paragraph.current, {
            opacity: 0,
            y: 8
         }, {
            delay: -0.2,
            duration: defaultDuration,
            ease: defaultEase,
            opacity: 1,
            y: 0
         })
      }
   },[props.changeText])

   useEffect(()=>{      
      if(texts.current){
         setTextsHeights(texts.current.offsetHeight)
      }

      updateBackgroundBorderWidth()
   },[props.children, sectionIsIntroduction])

   return(
      <>
      <div className={stylesContainerTexts} ref={containerText}>
         <div className={stylesTextbox} ref={texts} style={{
            maxHeight: `calc(80% - ${backgroungBorderWidth * 2}px)`,
            width: `calc(100% - ${backgroungBorderWidth * 2}px)`
         }}>
            <h1 className={sectionIsIntroduction ? stylesTitleIntroduction : stylesTitle} ref={title}>
               {props.title}
            </h1>

            <div className={sectionIsIntroduction ? stylesTextIntroduction : ''} ref={paragraph}>
               {props.children}
            </div>
         </div>
      </div>
      
      <div className={stylesContainerBackground} ref={containerBackground}>
         <div className={stylesBackgroundAndBorder} ref={background} style={{
            borderWidth: `${backgroungBorderWidth}px`,
            height: textsHeight + backgroungBorderWidth * 4,
            transition: `${defaultDuration}s ease-out height`
         }}/>
      </div>
      </>
   )
}

export default memo(AnimatedTextbox)
