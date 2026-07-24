import { RemixiconComponentType } from "@remixicon/react"

type SectionText = {
   title: string
   descriptions?: string[]
   jobCompany?: string
   jobTime?: string
   repoLink?: string
   links?: {
      icon: RemixiconComponentType
      title: string
      url: string
   }[]
}

export default SectionText