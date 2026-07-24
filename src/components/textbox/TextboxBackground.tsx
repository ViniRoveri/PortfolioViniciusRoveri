import ScrollSection from "@/domain/types/ScrollSection"
import { RefObject } from "react"

type Props = {
   backgroundRef: RefObject<HTMLDivElement | null>
   scrollSection: ScrollSection
   textboxPosition: string
}

const container = `bg-vr-lightOrange border-vr-orange h-0 rounded-lg shadow-[inset_0_0_4px_var(--color-vr-darkOrange)] top-[100%] w-0 -z-10`

export default function TextboxBackground(props: Props){
   

   return (
      <div className={`${container} ${props.textboxPosition}`} ref={props.backgroundRef} />
   )
}