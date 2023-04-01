import {ArrowUpRightIcon} from '@heroicons/react/24/solid'
import { sitesLinks } from '@/common/globalConstants'
import { useActiveSection } from '@/common/hooks'

type Props = {
   styles: {[key: string]: any}
}

export default function SiteLinkPart({styles}: Props){
   const activeSection = useActiveSection()
   const siteLink = sitesLinks[activeSection]
   
   return(
      <div className={`${styles.container} ${!siteLink ? 'hidden' : ''}`}>
         <a className={styles.link} href={siteLink} target='_blank'>
            <p>Go to the site</p>

            <ArrowUpRightIcon className={styles.icon}/>
         </a>
      </div>
   )
}