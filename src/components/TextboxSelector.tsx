import { memo, useEffect, useState } from "react"
import { titlesAndDescriptions } from "../common/globalConstants"
import { useActiveSection } from "../common/hooks"
import AnimatedTextbox from "./AnimatedTextbox"
import LanguagesPart from "./textboxParts/LanguagesPart"
import LinksPart from "./textboxParts/linksParts/LinksPart"
import ProjectLinks from "./textboxParts/ProjectLinks"

const stylesSubtitleContainer = `flex flex-col items-end mb-1.5 w-full
sm:mb-2
md:mb-2.5
lg:mb-3`
const stylesSubtitle = `font-bold`

function TextboxSelector(){
   const activeSection = useActiveSection()

   const [isExperiencePart, setIsExperiencePart] = useState(false)
   const [textboxTitle,setTextboxTitle] = useState('')
   const [textboxSubtitle,setTextboxSubtitle] = useState('')
   const [textboxTime,setTextboxTime] = useState('')
   const [textboxDescription,setTextboxDescription] = useState('')
   const [additionalPart,setAdditionalPart] = useState(<></>)

   const [changeText,setChangeText] = useState(false)

   useEffect(()=>{
      if(activeSection && activeSection !== 'initial'){
         setTimeout(() => {
            setTextboxTitle(
               titlesAndDescriptions[activeSection][0]
            )

            const checkExperiencePart = activeSection === 'experience1' || activeSection === 'experience2' || activeSection === 'experience3'

            if(checkExperiencePart){
               setIsExperiencePart(true)

               setTextboxSubtitle(
                  titlesAndDescriptions[activeSection][1]
               )
               setTextboxTime(
                  titlesAndDescriptions[activeSection][2]
               )
               setTextboxDescription(
                  titlesAndDescriptions[activeSection][3]
               )
               
               setAdditionalPart(
                  <ProjectLinks/>
               )
            }else{
               setIsExperiencePart(false)

               setTextboxDescription(
                  titlesAndDescriptions[activeSection][1]
               )

               if(activeSection === 'education'){
                  setAdditionalPart(
                     <LanguagesPart/>
                  )
               }else if(activeSection === 'links'){
                  setAdditionalPart(
                     <LinksPart/>
                  )
               }else{
                  setAdditionalPart(<></>)
               }
            }
         }, 400)
      }
   },[changeText])

   return(
      <AnimatedTextbox changeText={changeText} setChangeText={setChangeText} title={textboxTitle}>
         <>
         {isExperiencePart &&
            <div className={stylesSubtitleContainer}>
               <p className={stylesSubtitle}>{textboxSubtitle}</p>
               <p>{textboxTime}</p>
            </div>
         }

         <p>         
            {textboxDescription}
         </p>
 

         {additionalPart}
         </>
      </AnimatedTextbox>
   )
}

export default memo(TextboxSelector)
