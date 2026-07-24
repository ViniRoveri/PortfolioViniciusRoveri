import SectionText from "@/domain/types/SectionText"
import { RefObject, useEffect, useRef } from "react"
import sectionsTexts from "@/domain/constants/sectionsTexts"
import Link from "next/link"
import { RiArrowRightUpLongLine } from "@remixicon/react"

type Props = {
   contentRef: RefObject<HTMLParagraphElement | null>
   sectionText: SectionText | null
   textboxIsOpen: boolean
   textboxPosition: string
   textboxSize: object
   titleRef: RefObject<HTMLHeadingElement | null>
}

const baseLink = `duration-[.4s] ease-in-out transition-[letter-spacing]
hover:tracking-wider`

const container = `border-transparent h-[40%] w-[80%]`
const scrollArea = `flex flex-col gap-4 p-4`
const title = `font-bold !font-vr-title text-[36px]
md:text-[48px]
lg:text-[60px]`
const content = `flex flex-col gap-4 text-[16px]
md:text-[20px]
lg:text-[22px]`
const descriptionsContainer = `flex flex-col gap-4`
const introductionDescription = `text-[20px] text-center
md:text-[28px]
lg:text-[36px]`
const jobInfoContainer = `flex flex-col items-end`
const jobCompany = `font-bold`
const repoLink = `border-t flex gap-1 items-center justify-end pt-4`
const repoLinkIcon = `h-[20px] w-[20px]
md:h-[26px] md:w-[26px]
md:h-[32px] lg:w-[32px]`
const linksContainer = `flex flex-col`
const linkContainer = `flex gap-3 items-center justify-center
[&:not(:last-child)]:border-b [&:not(last-child)]:pb-4
[&:not(:first-child)]:pt-4`
const linkIcon = `h-[32px] w-[32px]
md:h-[36px] md:w-[36px]
md:h-[40px] lg:w-[40px]`

export default function TextboxContent(props: Props){
   const containerRef = useRef<HTMLDivElement>(null)

   useEffect(() => {
      if(!containerRef.current) return

      containerRef.current.scrollTo({
         top: 0
      })
   }, [props.sectionText])

   return (
      <div className={`${container} ${props.textboxPosition}`} style={{
         ...props.textboxSize,
         overflow: props.textboxIsOpen ? 'auto' : 'hidden'
      }} ref={containerRef}>
         <div className={scrollArea}>
            <h2 className={title} style={{ textAlign: props.sectionText === sectionsTexts.introduction ? 'center' : 'end' }} ref={props.titleRef}>
               {props.sectionText?.title}
            </h2>

            <div className={content} ref={props.contentRef}>
               {props.sectionText?.jobCompany && props.sectionText?.jobTime ?
                  <div className={jobInfoContainer}>
                     <p className={jobCompany}>
                        {props.sectionText?.jobCompany}
                     </p>

                     <p>
                        {props.sectionText?.jobTime}
                     </p>
                  </div>
               : <></>}

               {props.sectionText?.descriptions ?
                  <div className={props.sectionText === sectionsTexts.introduction ? introductionDescription : descriptionsContainer}>
                     {props.sectionText.descriptions.map((description, index) => 
                        <p key={index}>
                           {description}
                        </p>
                     )}
                  </div>
               : <></>}

               {props.sectionText?.repoLink ?
                  <Link className={`${repoLink} ${baseLink}`} href={props.sectionText.repoLink} rel="noopener noreferrer" target="_blank">
                     <span>Go to the repository</span>
                     <RiArrowRightUpLongLine className={repoLinkIcon}/>
                  </Link>
               : <></>}

               {props.sectionText?.links ? 
                  <div className={linksContainer}>
                     {props.sectionText.links.map(link =>
                        <Link className={`${linkContainer} ${baseLink}`} href={link.url} key={link.title} rel="noopener noreferrer" target="_blank">
                           <link.icon className={linkIcon}/>
                           <span>{link.title}</span>
                        </Link>
                     )}
                  </div>
               : <></>}
            </div>
         </div>
      </div>
   )
}