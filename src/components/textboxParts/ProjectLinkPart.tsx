import {ArrowUpRightIcon} from '@heroicons/react/24/solid'
import { projectsLinks } from '../../common/globalConstants'
import { useActiveSection } from '../../common/hooks'

const stylesContainer = `border-t border-default-darkOrange flex items-center justify-end mt-1 overflow-hidden w-full`
const stylesLink = `cursor-pointer duration-300 flex h-full items-center justify-end pt-1
hover:tracking-[2px]`
const stylesIcon = `fill-default-darkOrange h-6 ml-2 w-6`

export default function ProjectLinkPart(){
   const activeSection = useActiveSection()
   
   return(
      <div className={stylesContainer}>
         <a className={stylesLink} href={projectsLinks[activeSection]} target='_blank'>
            <p>Go to the project</p>
            <ArrowUpRightIcon className={stylesIcon}/>
         </a>
      </div>
   )
}