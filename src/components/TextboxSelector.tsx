import { memo, useEffect, useState } from "react"
import { titlesAndDescriptions } from "../common/globalConstants"
import { useActiveSection } from "../common/hooks"
import AnimatedTextbox from "./AnimatedTextbox"
import LanguagesPart from "./textboxParts/LanguagesPart"
import LinksPart from "./textboxParts/linksParts/LinksPart"
import ProjectLinkPart from "./textboxParts/ProjectLinkPart"

const stylesStandardParagraph = `mb-2
sm:mb-2.5
md:mb-3`

function TextboxSelector(){
   const activeSection = useActiveSection()

   const [textboxTitle,setTextboxTitle] = useState<string>('')
   const [textboxDescription,setTextboxDescription] = useState<string[]>([''])
   const [additionalPart,setAdditionalPart] = useState(<></>)

   const [changeText,setChangeText] = useState(false)

   useEffect(()=>{
      if(activeSection && activeSection !== 'initial'){
         setTimeout(() => {
            setTextboxTitle(
               titlesAndDescriptions[activeSection][0]
            )
            setTextboxDescription(
               titlesAndDescriptions[activeSection][1]
            )

            if(activeSection === 'project1' || activeSection === 'project2' || activeSection === 'project3'){
               setAdditionalPart(
                  <ProjectLinkPart/>
               )
            }else if(activeSection === 'education'){
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
         }, 400)
      }
   },[changeText])

   return(
      <AnimatedTextbox changeText={changeText} setChangeText={setChangeText} title={textboxTitle}>
         <>
         {textboxDescription.map((string, index)=>{
            const lastIndex = textboxDescription.length - 1
            
            return(
            <p className={index < lastIndex ? stylesStandardParagraph : ''} key={index}>{string}
            </p>
            )
         })}

         {additionalPart}
         </>
      </AnimatedTextbox>
   )
}

export default memo(TextboxSelector)
