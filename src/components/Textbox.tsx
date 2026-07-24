import ScrollSection from "@/domain/types/ScrollSection"
import TextboxContent from "./textbox/TextboxContent"
import TextboxBackground from "./textbox/TextboxBackground"
import sectionsTexts from "@/domain/constants/sectionsTexts"
import { useRef, useState, useEffect } from "react"
import gsap from "gsap"

type Props = {
   scrollSection: ScrollSection
}

const textboxPosition = `border-8 fixed left-1/2 max-w-[916px] -translate-x-1/2`
const textboxSize = {
   height: '40%',
   top: '4%',
   width: '80%'
}

export default function Textbox(props: Props){
   const tlDefaults = {
      duration: 0.5,
      ease: 'power4.out',
   }

   const backgroundRef = useRef<HTMLDivElement>(null)
   const titleRef = useRef<HTMLHeadingElement>(null)
   const contentRef = useRef<HTMLDivElement>(null)

   const [sectionText, setSectionText] = useState(sectionsTexts[props.scrollSection])
   const [textboxIsOpen, setTextboxIsOpen] = useState(false)
   const [wasInStart, setWasInStart] = useState(true)

   function closeTextbox(tl: gsap.core.Timeline){
      tl.call(() => setTextboxIsOpen(false))
      tl.to([titleRef.current, contentRef.current], {
         opacity: 0,
         y: -10
      })
      tl.to(backgroundRef.current, {
         width: 0
      }, `-=${tlDefaults.duration - 0.1}`)
   }

   function lowerTextbox(tl: gsap.core.Timeline){
      tl.to(backgroundRef.current, {
         height: 0,
         top: '100%'
      })
   }

   function openTextbox(tl: gsap.core.Timeline){
      tl.to(backgroundRef.current, {
         ease: 'power1.inOut',
         height: textboxSize.height,
         width: textboxSize.width
      })
      tl.call(() => setTextboxIsOpen(true))
      tl.fromTo(titleRef.current, {
         opacity: 0,
         y: 10
      }, {
         opacity: 1,
         y: 0
      })
      tl.fromTo(contentRef.current, {
         opacity: 0,
         y: 10
      }, {
         opacity: 1,
         y: 0
      })
   }

   function raiseTextbox(tl: gsap.core.Timeline){
      tl.to(backgroundRef.current, {
         duration: 0.3,
         ease: 'elastic.out(0.3, 0.7)',
         top: textboxSize.top,
      })
   }

   useEffect(() => {
      if(!backgroundRef.current || !titleRef.current || !contentRef.current || props.scrollSection === 'initial') return

      let openingTl = gsap.timeline({
         defaults: tlDefaults
      })

      let openingTimeout: NodeJS.Timeout
      let closingTl = gsap.timeline({
         defaults: tlDefaults,
         onComplete: () => {
            setSectionText(sectionsTexts[props.scrollSection])

            if(props.scrollSection === 'start') return

            if(wasInStart){
               raiseTextbox(openingTl)
               openTextbox(openingTl)
            }else{
               openingTimeout = setTimeout(() => {
                  openTextbox(openingTl)
               }, 800)
            }
         }
      })

      if(props.scrollSection === 'start'){
         closeTextbox(closingTl)
         lowerTextbox(closingTl)

         setWasInStart(true)
      }else{
         if(!wasInStart) closeTextbox(closingTl)

         setWasInStart(false)
      }

      return () => {
         clearTimeout(openingTimeout)
         closingTl.kill()
         openingTl.kill()
      }
   }, [props.scrollSection])
   
   return (
      <>
      <TextboxContent contentRef={contentRef} sectionText={sectionText} textboxIsOpen={textboxIsOpen} textboxPosition={textboxPosition} textboxSize={textboxSize} titleRef={titleRef} />
      <TextboxBackground backgroundRef={backgroundRef} scrollSection={props.scrollSection} textboxPosition={textboxPosition} />
      </>
   )
}